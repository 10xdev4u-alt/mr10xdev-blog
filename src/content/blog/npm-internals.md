---
title: "The composer.json trick: how npm works under the hood"
description: "Most devs treat npm as a black box. Here's what's actually happening. package.json fields, lockfile, lifecycle scripts, semver, the install algorithm. The internals you need to know."
date: 2026-05-15
tags: ["npm", "package-json", "internals"]
---

Most devs treat npm as a black box. You write `package.json`,
run `npm install`, and hope for the best. Here's what's actually
happening, and why it matters.

## The package.json

`package.json` is a JSON file with metadata about a Node project.
The required fields:

- **`name`** — the package name. Lowercase, no spaces, ≤ 214 chars.
- **`version`** — the semver version. `MAJOR.MINOR.PATCH`.

The common fields:
- **`description`** — short description for npm search
- **`main`** — entry point for `require()`
- **`types`** — entry point for TypeScript types
- **`scripts`** — npm scripts (`npm test`, `npm run build`, etc.)
- **`dependencies`** — runtime deps
- **`devDependencies`** — build-time deps
- **`peerDependencies`** — deps the user must install
- **`engines`** — supported Node versions
- **`license`** — the license (SPDX identifier)

Less common but useful:
- **`exports`** — explicit subpath exports (replaces `main`)
- **`bin`** — binary scripts (replaces `main` for CLIs)
- **`files`** — files to include in the tarball (default: everything
  except `.gitignore` and a few others)
- **`workspaces`** — monorepo configuration
- **`sideEffects`** — for tree-shaking (webpack/rollup)

## The lockfile

`package-lock.json` (or `yarn.lock` / `pnpm-lock.yaml` /
`bun.lockb`) is the record of the exact versions installed.
The lockfile is committed to git. The install is reproducible.

The lockfile contains:
- The exact version of every dep (including transitive)
- The resolved URL (where to download from)
- The integrity hash (to verify the download)

Without the lockfile, every `npm install` could produce a
different `node_modules`. The lockfile ensures determinism.

## The install algorithm

When you run `npm install`:
1. **Read `package.json`.** Get the requested deps and versions.
2. **Read the lockfile.** Get the exact versions to install.
3. **Reconcile.** If `package.json` changed, update the
   lockfile. If the lockfile is missing, resolve fresh.
4. **Fetch.** Download the tarballs (cached in `~/.npm`).
5. **Extract.** Unpack to `node_modules/`.
6. **Link.** Set up symlinks for workspaces and bins.
7. **Run lifecycle scripts.** `preinstall`, `install`,
   `postinstall` for each package.

The lifecycle scripts are where supply-chain attacks happen.
A malicious dep with a `postinstall` script can run arbitrary
code on your machine. npm 7+ runs install scripts in a
sandbox, but the protection is partial.

## The semver

`package.json` uses semver (semantic versioning):
- **`MAJOR`** — breaking changes
- **`MINOR`** — new features, backward compatible
- **`PATCH`** — bug fixes, backward compatible

The version range syntax:
- `"1.2.3"` — exact
- `"^1.2.3"` — `>=1.2.3 <2.0.0` (compatible)
- `"~1.2.3"` — `>=1.2.3 <1.3.0` (patch only)
- `"*"` — any
- `"1.2.x"` — `1.2.0` to `1.2.x`
- `"latest"` — latest stable

For `dependencies`, use `^`. For `devDependencies`, use `^` or
`~`. For internal packages, use exact.

## The scripts

The `scripts` object maps names to commands:

```json
{
  "scripts": {
    "test": "vitest run",
    "test:watch": "vitest",
    "build": "tsup",
    "dev": "tsx watch src/cli.ts",
    "lint": "biome check src",
    "format": "biome format --write src",
    "typecheck": "tsc --noEmit",
    "prepublishOnly": "npm run build && npm run test"
  }
}
```

The conventions:
- `test` — runs once
- `test:watch` — watches for changes
- `build` — produces a dist/
- `dev` — runs the dev server
- `lint` — checks style
- `format` — fixes style
- `typecheck` — runs tsc
- `prepublishOnly` — runs before `npm publish`

The `pre*` and `post*` hooks are run automatically. `npm test`
runs `pretest` then `test` then `posttest`.

## The exports field

The `exports` field is the modern way to declare a package's
public API:

```json
{
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.js"
    },
    "./cli": {
      "types": "./dist/cli.d.ts",
      "import": "./dist/cli.js"
    },
    "./manifest": "./dist/manifest/index.js"
  }
}
```

Users import via:
```ts
import { foo } from 'my-pkg';           // "." entry
import { bar } from 'my-pkg/cli';       // "./cli" entry
import { baz } from 'my-pkg/manifest';  // "./manifest" entry
```

The `exports` field replaces the legacy `main` field. With
`exports`, you can have multiple entry points, each with
separate TypeScript types.

## The lifecycle hooks

The hooks npm runs:
- `preinstall` — before install
- `install` — during install (default)
- `postinstall` — after install
- `prepublish` — before pack
- `prepare` — after install, before pack (run for git installs)
- `prepublishOnly` — before publish (NOT install)
- `prepack` — before pack
- `postpack` — after pack

The most useful is `prepublishOnly` for ensuring the dist is
fresh before publishing.

## The workspaces

For monorepos, `workspaces` lets you have multiple packages in
one repo:

```json
{
  "workspaces": ["packages/*", "tools/*"]
}
```

Each workspace has its own `package.json`. The root `package.json`
has the workspace config. npm install at the root installs
all workspaces and links them.

## The bins

For CLI tools, `bin` declares the executable:

```json
{
  "bin": {
    "gitagent": "./dist/cli.js"
  }
}
```

When installed, npm creates a symlink in `node_modules/.bin/`
(or in the global `node_modules/.bin/` for global installs).
The user can run `gitagent` directly.

## The .npmignore

`.npmignore` controls what gets included in the published
tarball. Common excludes:
- `node_modules`
- `dist` (in some cases)
- `.env`
- `*.log`
- `tests`
- `examples`
- `.github`

If no `.npmignore`, the `.gitignore` is used. The default
include list (when neither is present) is small.

## The .npmrc

`.npmrc` configures npm. The 3 levels:
- Project (`./.npmrc`) — checked in, applies to this project
- User (`~/.npmrc`) — applies to all projects for this user
- Global (`/etc/npmrc`) — applies to all users

Common settings:
```ini
save-exact=true          # always save exact versions
package-lock=true        # always generate lockfile
fund=false               # don't show funding messages
audit-level=high         # fail on high-severity audits
```

## The install lifecycle

The full install lifecycle for a fresh clone:
1. `npm install` (or `npm ci` for clean install)
2. Resolve deps
3. Download tarballs
4. Extract to `node_modules/`
5. Run `postinstall` scripts
6. Link bins
7. Done

For a CI environment, use `npm ci` instead of `npm install`:
- `npm ci` deletes `node_modules/` first
- `npm ci` uses the lockfile exactly (no version resolution)
- `npm ci` is faster for clean installs
- `npm ci` is required for reproducible builds

## The publish lifecycle

For publishing:
1. `npm version patch|minor|major` (bumps version in
   `package.json`)
2. `npm run build` (produces dist/)
3. `npm publish` (uploads tarball to npm registry)
4. `git push --tags` (pushes the version tag)

Or automate all 4 with `release-it`, `np`, or a custom script.

## The lesson

`npm` is a tool, not magic. The `package.json` is a config
file. The lockfile is a snapshot. The install is a sequence
of well-defined steps. Once you know the internals, you can
debug any `npm` issue.

Most bugs are version mismatches (lockfile out of sync), missing
deps (typo in `package.json`), or postinstall failures
(network, permissions, native build). All of these are
debuggable once you know the internals.

The next time `npm install` does something weird, read the
output carefully. The answer is in there.
