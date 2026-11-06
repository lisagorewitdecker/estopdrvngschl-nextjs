import assert from 'node:assert/strict';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { test } from 'node:test';

const require = createRequire(import.meta.url);
const sentryRequire = createRequire(require.resolve('@sentry/nextjs'));
const bundlerRequire = createRequire(
  sentryRequire.resolve('@sentry/bundler-plugins/core'),
);
const { glob, globSync, globStream, globStreamSync } = bundlerRequire('glob');

test('the lockfile excludes Glob versions affected by GHSA-3g3m-2fjr-6pw4', () => {
  const lockfile = JSON.parse(
    fs.readFileSync(new URL('../../package-lock.json', import.meta.url), 'utf8'),
  );
  const packages = Object.entries(lockfile.packages).filter(([path]) =>
    path.endsWith('/glob'),
  );
  assert.ok(packages.length > 0);
  for (const [path, { version }] of packages) {
    const [major, minor, patch] = version.split('.').map(Number);
    const affected =
      major >= 9 &&
      (major < 14 || (major === 14 && minor === 0 && patch < 2));
    assert.equal(affected, false, `${path}: vulnerable Glob ${version}`);
  }
});

function fixture(t) {
  const cwd = fs.mkdtempSync(join(tmpdir(), 'glob-cancellation-'));
  t.after(() => fs.rmSync(cwd, { recursive: true, force: true }));
  for (let parent = 0; parent < 4; parent += 1) {
    for (let child = 0; child < 4; child += 1) {
      const directory = join(cwd, `parent-${parent}`, `child-${child}`);
      fs.mkdirSync(directory, { recursive: true });
      fs.writeFileSync(join(directory, 'fixture.txt'), 'fixture');
    }
  }
  return cwd;
}

for (const mode of ['promise', 'stream']) {
  for (const cancellation of ['abort', 'timeout']) {
    test(`Glob ${mode} stops directory reads after ${cancellation}`, {
      timeout: 5000,
    }, async (t) => {
      const cwd = fixture(t);
      const controller = new AbortController();
      const reason = new Error('cancel traversal');
      const signal =
        cancellation === 'timeout' ? AbortSignal.timeout(10) : controller.signal;
      let reads = 0;
      const pending = new Set();
      const countedFs = {
        ...fs,
        readdir(path, options, callback) {
          reads += 1;
          if (reads === 1 && cancellation === 'abort') controller.abort(reason);
          const completion = new Promise((resolve) => {
            fs.readdir(path, options, (...args) => {
              const finish = () => {
                try {
                  callback(...args);
                } finally {
                  resolve();
                }
              };
              if (cancellation === 'timeout') setTimeout(finish, 30);
              else finish();
            });
          });
          pending.add(completion);
          completion.then(() => pending.delete(completion));
        },
      };
      await assert.rejects(async () => {
        const options = { cwd, signal, fs: countedFs };
        if (mode === 'promise') {
          await glob('**', options);
        } else {
          for await (const entry of globStream('**', options)) {
            assert.ok(entry);
          }
        }
      }, (error) => error === signal.reason);
      const readsAtRejection = reads;
      while (pending.size > 0) await Promise.all([...pending]);
      assert.equal(reads, readsAtRejection, 'no directory reads after rejection');
      if (cancellation === 'abort') assert.equal(readsAtRejection, 1);
      else assert.ok(readsAtRejection <= 1);
    });
  }

  test(`Glob ${mode} does not read directories for an already-aborted signal`, {
    timeout: 5000,
  }, async (t) => {
    const cwd = fixture(t);
    const reason = new Error('already canceled');
    let reads = 0;
    const options = {
      cwd,
      signal: AbortSignal.abort(reason),
      fs: {
        ...fs,
        readdir(...args) {
          reads += 1;
          return fs.readdir(...args);
        },
      },
    };
    await assert.rejects(async () => {
      if (mode === 'promise') await glob('**', options);
      else {
        for await (const entry of globStream('**', options)) assert.ok(entry);
      }
    }, (error) => error === reason);
    assert.equal(reads, 0);
  });
}

for (const mode of ['sync', 'sync stream']) {
  test(`Glob ${mode} stops directory reads after cancellation`, {
    timeout: 5000,
  }, async (t) => {
    const cwd = fixture(t);
    const controller = new AbortController();
    const reason = new Error('cancel synchronous traversal');
    let reads = 0;
    const options = {
      cwd,
      signal: controller.signal,
      fs: {
        ...fs,
        readdirSync(...args) {
          reads += 1;
          if (reads === 1) controller.abort(reason);
          return fs.readdirSync(...args);
        },
      },
    };
    if (mode === 'sync') {
      assert.throws(() => globSync('**', options), (error) => error === reason);
    } else {
      const error = await new Promise((resolve) => {
        const stream = globStreamSync('**', options);
        stream.on('error', resolve);
        stream.resume();
      });
      assert.equal(error, reason);
    }
    assert.equal(reads, 1);
  });
}

test('Glob preserves ordinary promise, sync and streaming traversal', async (t) => {
  const cwd = fixture(t);
  const options = { cwd, nodir: true };
  const expected = globSync('**/*.txt', options).sort();
  assert.equal(expected.length, 16);
  assert.deepEqual((await glob('**/*.txt', options)).sort(), expected);
  for (const stream of [
    globStream('**/*.txt', options),
    globStreamSync('**/*.txt', options),
  ]) {
    const entries = [];
    for await (const entry of stream) entries.push(entry);
    assert.deepEqual(entries.sort(), expected);
  }
});
