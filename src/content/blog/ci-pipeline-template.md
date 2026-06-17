---
title: "The CI pipeline I copy-paste into every repo"
description: "After 36 repos, I've converged on a single CI pipeline. ~50 lines of YAML, runs in 2 minutes, covers lint, typecheck, test, build. The exact template."
date: 2026-05-17
tags: ["ci", "github-actions", "template"]
---

After 36 repos, I've converged on a single CI pipeline. ~50 lines
of YAML, runs in 2 minutes, covers lint, typecheck, test, build.
Here's the exact template.

## The pipeline

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    name: Test on Node ${{ matrix.node }}
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        node: [20, 22]

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node }}
          cache: npm

      - name: Install
        run: npm ci

      - name: Typecheck
        run: npm run typecheck

      - name: Lint
        run: npm run lint || true

      - name: Test
        run: npm test

      - name: Build
        run: npm run build

  publish:
    name: Publish to npm
    runs-on: ubuntu-latest
    needs: test
    if: github.event_name == 'push' && startsWith(github.ref, 'refs/tags/v')
    permissions:
      contents: read
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
          registry-url: https://registry.npmjs.org
      - run: npm ci
      - run: npm run build
      - run: npm publish --provenance --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

50 lines. 2 minutes to run. Covers the 80% of what every Node
project needs.

## The design choices

### 1. Matrix on Node 20 and 22

Node 18 is end-of-life. Node 20 is LTS. Node 22 is current.
Test on both. Skip 18.

If your project supports Node 18, add it. If you use Bun, add
Bun to the matrix. If you use Deno, ditto. The point is: test
on every runtime you support.

### 2. Cache npm

`cache: npm` is a one-liner. It saves 30-60 seconds per run.
Worth it.

### 3. Typecheck and lint are separate

Typecheck is non-negotiable. Lint is best-effort (`|| true`).
If lint fails, the PR still merges. If typecheck fails, the
PR is blocked.

Why: lint is a style preference. Typecheck is correctness. Don't
block PRs on style.

### 4. Test runs after typecheck and lint

If typecheck fails, you don't need to run tests. The typecheck
is the cheaper signal.

### 5. Build is the last step

Build is the most expensive step. Run it last. If anything else
fails, you save the build time.

### 6. Publish on tag

The publish job only runs on tag push. The trigger is
`startsWith(github.ref, 'refs/tags/v')`. Tag a release → npm
publishes.

The `--provenance` flag adds npm's provenance attestation. It's
free and signals to users that the package is verifiable.

### 7. Use OIDC for auth

`permissions: id-token: write` enables OIDC auth. The
`NPM_TOKEN` secret is configured in GitHub. The workflow
exchanges the OIDC token for an npm token. No long-lived npm
tokens in secrets.

## The variations

For TypeScript projects, the standard:
```json
"scripts": {
  "test": "vitest run",
  "typecheck": "tsc --noEmit",
  "lint": "biome check src",
  "build": "tsup"
}
```

For Next.js projects:
```json
"scripts": {
  "test": "vitest run",
  "typecheck": "tsc --noEmit",
  "lint": "next lint",
  "build": "next build"
}
```

For Astro projects (like this blog):
```json
"scripts": {
  "test": "vitest run",
  "typecheck": "astro check",
  "lint": "biome check src",
  "build": "astro build"
}
```

The CI pipeline stays the same. The scripts differ.

## The anti-patterns

### 1. Don't use self-hosted runners unless you have to

GitHub-hosted runners are free for public repos. Self-hosted
runners are fast but cost maintenance time. Start with hosted.

### 2. Don't run on every push to every branch

`on: push: branches: [main]` keeps the pipeline running on the
main branch only. PRs from branches also run (via `pull_request`).
This saves CI minutes.

### 3. Don't ignore test failures

`npm test` should fail the build. If you want to allow
intermittent failures, use `npm test || true` and a comment
explaining why. Don't silently ignore.

### 4. Don't use a single Node version

Test on at least 2 versions. The matrix is cheap. The CI
minutes are free for public repos. The compat matrix is
valuable.

## The cost

For public repos, GitHub Actions is free. The matrix (2 Node
versions × 4 steps) takes about 2 minutes. That's 2 minutes of
CI per push.

For a busy repo with 100 pushes/day, that's 200 minutes/day.
Still free. Still fast.

For private repos, you get 2,000 minutes/month on the free
plan. Most projects don't hit that limit.

## The lesson

CI is the credibility signal. A repo without CI is a repo
without trust. The cost is 30 minutes to set up. The payoff is
infinite.

Copy my pipeline. Adapt the scripts. Ship.
