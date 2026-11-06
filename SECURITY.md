# Security Policy

## Supported Versions

Only the latest code on the `main` branch is supported with security updates. Older versions are not supported.

## Dependency Security

Modern minimatch dependencies are overridden to 11.0.1 for
GHSA-g3hv-75wg-m249 (globparts amplification during pattern optimization).
Glob is overridden to 14.0.2 because earlier Glob releases expect RegExp-based
minimatch internals that minimatch 11 no longer provides. Unaffected minimatch 3
dependencies retain their callable API for ESLint.

Glob 14.0.2 also fixes GHSA-3g3m-2fjr-6pw4 (AbortSignal cancellation bypass).
Cancellation must stop new filesystem traversal, not merely reject the caller
while continuing directory reads in the background. Regression tests exercise
explicit aborts and timeouts with pending directory reads, already-aborted
signals, synchronous cancellation, and ordinary traversal.

Run `npm run test:security` after dependency updates to verify preprocessing
limits, Sentry source-map discovery, TypeScript parsing, and legacy ESLint
compatibility. CI runs these checks alongside lint and build.

## Reporting a Vulnerability

Please report vulnerabilities privately using [GitHub's private vulnerability reporting](https://github.com/lisagorewitdecker/estopdrvngschl-nextjs/security/advisories/new). Do not disclose vulnerabilities in public issues. We will acknowledge reports and provide updates as we investigate.
