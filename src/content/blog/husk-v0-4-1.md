---
title: "Husk v0.4.1: CI auto-publish"
description: "v0.4.1 of Husk ships the first version where the CI auto-publishes on tag push. The ~/.npmrc write fix that made it work. 32 new init-v2 tests."
date: 2026-06-13
tags: ["husk", "release", "ci"]
---

Husk v0.4.1 is out — and it's the FIRST release to auto-publish on tag
push. The `~/.npmrc` fix from commit `7f27492` finally took effect.

## v0.4.0 → v0.4.1

v0.4.0 shipped 25 minutes before v0.4.1 because of:
- ESM `require()` bug discovered in smoke-testing
- `--no-interactive` parseArgs issue

14 atomic commits, all small. The headline: `husk init --git --install`
now sets up a whole project in one command.

## New in v0.4.1

| Feature | Flag | What it does |
|---|---|---|
| Auto-install | `--install` | Runs `npm/pnpm/bun/yarn install` after scaffold |
| Auto-git | `--git` | `git init --initial-branch=main` + add + commit |
| Custom committer | `--git-author "A <a@b>"` | Override for the initial commit |
| PM override | `--package-manager pnpm` | Skip auto-detection |
| Overwrite detection | (default) | Throws `InitError` on existing dir |
| Force overwrite | `--force` | Bypass the gate |
| Skip prompts | `--non-interactive` | CI / scripted use |

## Stats

- 6 npm versions, 6 GitHub tags, 6 releases
- 120 tests (was 87) — 32 new init-v2 tests
- 51KB lib + 44KB d.ts + 50KB CLI
- CI: auto-publish on tag push WORKING

## Lessons

1. **parseArgs doesn't support `--no-X` for boolean flags.** Use a
   separate `--non-interactive` option instead. Test the CLI with real
   flag combinations before shipping.
2. **ESM bundles don't support `require()`.** tsup outputs ESM by
   default. Use static ESM imports at the top of the file.
3. **CI auto-publish needs `~/.npmrc` writes, not env vars alone.**
   The `NPM_TOKEN` env var is correct for npm 11+ but `bunx npm publish`
   doesn't always propagate it. Writing to `~/.npmrc` explicitly is
   bulletproof.
4. **Always smoke-test the published binary via npx** before declaring
   a release done. Unit tests + local CLI run can both pass while the
   published version is broken.

Install: `npm install @princetheprogrammerbtw/husk@latest`
