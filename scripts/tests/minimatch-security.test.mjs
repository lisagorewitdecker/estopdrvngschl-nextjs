import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from 'node:fs';
import { createRequire } from 'node:module';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { test } from 'node:test';
import { pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);
const sentryRequire = createRequire(require.resolve('@sentry/nextjs'));
const bundlerRequire = createRequire(
  sentryRequire.resolve('@sentry/bundler-plugins/core'),
);
const globRequire = createRequire(bundlerRequire.resolve('glob'));
const nextRequire = createRequire(require.resolve('eslint-config-next'));
const tseslintRequire = createRequire(nextRequire.resolve('typescript-eslint'));
const estreeRequire = createRequire(
  tseslintRequire.resolve('@typescript-eslint/typescript-estree'),
);

test('the lockfile excludes minimatch versions affected by GHSA-g3hv-75wg-m249', () => {
  const lockfile = JSON.parse(
    readFileSync(new URL('../../package-lock.json', import.meta.url), 'utf8'),
  );
  const packages = Object.entries(lockfile.packages).filter(([path]) =>
    path.endsWith('/minimatch'),
  );
  assert.ok(packages.length > 0);
  for (const [path, { version }] of packages) {
    const [major, minor, patch] = version.split('.').map(Number);
    const affected =
      major >= 7 &&
      (major < 11 || (major === 11 && minor === 0 && patch < 1));
    assert.equal(affected, false, `${path}: vulnerable minimatch ${version}`);
  }
});

for (const [label, consumerRequire] of [
  ['Sentry Glob', globRequire],
  ['TypeScript ESLint parser', estreeRequire],
]) {
  const packagePath = consumerRequire.resolve('minimatch/package.json');
  const packageJson = consumerRequire(packagePath);
  const esmUrl = pathToFileURL(join(dirname(packagePath), packageJson.module));

  test(`${label} bounds amplification in CommonJS and ESM`, () => {
    // Isolate synchronous compilation so a regression cannot exhaust the runner.
    const result = spawnSync(
      process.execPath,
      [
        '--max-old-space-size=256',
        '--input-type=module',
        '--eval',
        `
          import assert from 'node:assert/strict';
          import { createRequire } from 'node:module';
          const require = createRequire(${JSON.stringify(packagePath)});
          for (const { Minimatch } of [
            require('./dist/commonjs/index.js'),
            await import(${JSON.stringify(esmUrl.href)}),
          ]) {
            for (const braceExpandMax of [8, 64]) {
              const mm = new Minimatch(
                Array(30).fill('**/../a/b').join('/'),
                { optimizationLevel: 2, braceExpandMax },
              );
              assert.equal(mm.set.length, braceExpandMax);
            }
            const bounded = new Minimatch(
              Array(18).fill('**/../a').join('/'),
              { optimizationLevel: 2 },
            );
            assert.equal(bounded.set.length, 100_000);
            const small = new Minimatch('{x,*}/{0..9}', { optimizationLevel: 2 });
            assert.equal(small.set.length, 10);
            const large = new Minimatch('{x,*}/{0..999}', { optimizationLevel: 2 });
            assert.equal(large.set.length, 2000);
            assert.equal(large.match('x/5'), true);
            assert.equal(large.match('y/999'), true);
            assert.equal(large.match('.y/5'), false);
          }
        `,
      ],
      { encoding: 'utf8', timeout: 15_000 },
    );
    assert.ifError(result.error);
    assert.equal(result.signal, null, result.stderr);
    assert.equal(result.status, 0, result.stderr);
  });

  test(`${label} preserves ordinary matching`, () => {
    const { Minimatch, minimatch } = consumerRequire('minimatch');
    const mm = new Minimatch('**/../a/b/**/../c/d', { optimizationLevel: 2 });
    assert.equal(mm.set.length, 4);
    assert.equal(mm.match('../a/b/../c/d'), true);
    assert.equal(mm.match('x/a/b/y/c/d'), true);
    assert.equal(minimatch('src/nested/file.ts', 'src/**/*.{ts,tsx}'), true);
    assert.equal(minimatch('src/file.js', 'src/**/*.{ts,tsx}'), false);
    assert.equal(minimatch('src/.hidden.ts', 'src/**/*.ts'), false);
    assert.equal(
      minimatch('src/.hidden.ts', 'src/**/*.ts', { dot: true }),
      true,
    );
    assert.equal(minimatch('src/file.test.ts', '!**/*.test.ts'), false);
  });
}

test('Sentry retains wildcard, brace, ignore and source-map file discovery', async (t) => {
  const cwd = mkdtempSync(join(tmpdir(), 'minimatch-sentry-'));
  t.after(() => rmSync(cwd, { recursive: true, force: true }));
  for (const path of [
    'assets/app.js',
    'assets/app.js.map',
    'assets/nested/chunk.js',
    'assets/nested/chunk.js.map',
    'assets/ignored/skip.js',
    'assets/notes.txt',
    'assets/.hidden.js',
  ]) {
    const file = join(cwd, path);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, '');
  }
  const { glob, globSync, globStream } = bundlerRequire('glob');
  const options = {
    cwd,
    absolute: true,
    nodir: true,
    ignore: ['**/ignored/**'],
  };
  const patterns = ['assets/**/*.{js,map}'];
  const expected = [
    'assets/app.js',
    'assets/app.js.map',
    'assets/nested/chunk.js',
    'assets/nested/chunk.js.map',
  ]
    .map((path) => join(cwd, path))
    .sort();
  assert.deepEqual((await glob(patterns, options)).sort(), expected);
  assert.deepEqual(globSync(patterns, options).sort(), expected);
  const streamed = [];
  for await (const path of globStream(patterns, options)) streamed.push(path);
  assert.deepEqual(streamed.sort(), expected);
  const { globFiles } = await import(
    pathToFileURL(
      join(
        dirname(bundlerRequire.resolve('@sentry/bundler-plugins/core')),
        'glob.js',
      ),
    ).href
  );
  assert.deepEqual((await globFiles(patterns, options)).sort(), expected);
  assert.deepEqual(
    (await globFiles(['/assets/**/*.{js,map}'], { ...options, root: cwd })).sort(),
    expected,
  );
});

test('the TypeScript ESLint parser still parses TypeScript', () => {
  const { parse } = estreeRequire('@typescript-eslint/typescript-estree');
  const ast = parse('const count: number = 1;', { loc: true, range: true });
  assert.equal(ast.type, 'Program');
  assert.equal(ast.body[0].type, 'VariableDeclaration');
});

test('legacy ESLint consumers retain the callable minimatch 3 API', () => {
  const eslintRequire = createRequire(require.resolve('eslint'));
  const minimatch = eslintRequire('minimatch');
  assert.equal(typeof minimatch, 'function');
  assert.equal(minimatch('src/page.tsx', '**/*.tsx'), true);
  assert.equal(minimatch('src/page.js', '**/*.tsx'), false);
});
