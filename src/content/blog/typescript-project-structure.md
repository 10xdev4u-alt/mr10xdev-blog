---
title: "How I structure a TypeScript project (2026 edition)"
description: "After 30+ TypeScript projects, here's the file structure that just works. src/, dist/, tests/, examples/, docs/. The conventions, the why, the 80/20 of project layout."
date: 2026-05-13
tags: ["typescript", "structure", "conventions"]
---

After 30+ TypeScript projects, here's the file structure that just
works. The conventions, the why, the 80/20 of project layout.

## The structure

```
my-project/
├── src/                  # Source code
│   ├── index.ts          # Public entry point
│   ├── types.ts          # Shared types
│   ├── utils.ts          # Shared utilities
│   └── feature/          # One folder per feature
│       ├── index.ts
│       ├── types.ts
│       ├── implementation.ts
│       └── tests.test.ts
├── tests/                # Top-level tests (if needed)
├── examples/             # Usage examples
│   └── basic.ts
├── docs/                 # Documentation
│   ├── README.md
│   ├── ARCHITECTURE.md
│   └── guides/
├── dist/                 # Build output (gitignored)
├── node_modules/         # Dependencies (gitignored)
├── .github/              # GitHub-specific files
│   └── workflows/
│       └── ci.yml
├── .vscode/              # VSCode settings (committed)
├── .gitignore
├── .editorconfig
├── .npmignore
├── .nvmrc                # Node version
├── package.json
├── package-lock.json
├── tsconfig.json
├── tsconfig.build.json   # Build-specific overrides
├── vitest.config.ts
├── biome.json
├── README.md
├── CHANGELOG.md
├── LICENSE
└── CONTRIBUTING.md
```

This is the 80/20. Every file has a purpose. The structure scales
to ~50K LOC before you need to split into packages.

## The top-level files

### `package.json`

The manifest. The single source of truth for:
- Name, version, description
- Dependencies
- Scripts
- Export map
- Engines (Node version)
- License

### `tsconfig.json`

The TypeScript config. The 80/20:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "lib": ["ES2022", "DOM"],
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "isolatedModules": true,
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "tests", "examples"]
}
```

A separate `tsconfig.build.json` for the build (excludes tests).

### `tsup.config.ts`

The build config. tsup is the default because it's fast and
zero-config:

```ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: { index: 'src/index.ts' },
  format: ['esm'],
  target: 'node20',
  dts: true,
  sourcemap: true,
  clean: true,
});
```

For a CLI:
```ts
export default defineConfig({
  entry: { index: 'src/index.ts', cli: 'src/cli.ts' },
  format: ['esm'],
  target: 'node20',
  dts: true,
  bin: { 'my-cli': './dist/cli.js' },
});
```

### `vitest.config.ts`

The test config. The 80/20:
```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: false,
    environment: 'node',
    include: ['src/**/*.test.ts', 'tests/**/*.test.ts'],
  },
});
```

### `biome.json`

The lint+format config. Biome replaces ESLint + Prettier:
```json
{
  "formatter": {
    "indentStyle": "space",
    "indentWidth": 2,
    "lineWidth": 100
  },
  "linter": {
    "rules": {
      "recommended": true
    }
  }
}
```

### `.gitignore`

The standard Node ignores:
```
node_modules/
dist/
coverage/
.runtime/
*.log
.env
.env.local
```

### `.editorconfig`

The cross-editor format config:
```
[*]
indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

### `.nvmrc`

The Node version: `22`

### `LICENSE`

MIT. The default for indie projects.

## The src/ structure

### Feature folders

For projects with multiple features, use one folder per feature:

```
src/
├── index.ts          # Re-exports from features
├── manifest/         # Feature 1
│   ├── index.ts
│   ├── schema.ts
│   ├── loader.ts
│   └── tests.test.ts
├── providers/        # Feature 2
│   ├── index.ts
│   ├── types.ts
│   ├── anthropic.ts
│   └── openai.ts
└── runtime/          # Feature 3
    ├── index.ts
    ├── runner.ts
    └── context.ts
```

Each feature is a self-contained module. The `index.ts` re-
exports the public API. The internal files are not exported.

### The public API

`src/index.ts` is the public API. It should re-export the public
surface of each feature:

```ts
export * from './manifest/index.js';
export * from './providers/index.js';
export * from './runtime/index.js';
```

Users import:
```ts
import { loadManifest, runAgent } from 'my-project';
```

They never see the internal files. The internal files can be
refactored freely without breaking the public API.

## The tests/ structure

For projects with shared test fixtures, use a top-level `tests/`
folder. For feature-specific tests, put them inside the feature
folder.

```
src/
├── manifest/
│   ├── schema.ts
│   └── schema.test.ts       # Co-located
├── providers/
│   ├── anthropic.ts
│   └── anthropic.test.ts    # Co-located
└── tests/
    ├── fixtures/             # Shared test data
    │   └── events.json
    └── integration/          # Cross-feature tests
        └── full-flow.test.ts
```

Co-located tests are easier to find. Integration tests are
easier to maintain in one place.

## The examples/ structure

One example per use case. Each is a standalone script that the
user can copy and run:

```
examples/
├── basic.ts          # Simplest possible usage
├── with-tools.ts     # With custom tools
├── with-memory.ts    # With persistent memory
└── with-streaming.ts # With streaming responses
```

Each example has:
- A short comment at the top explaining what it does
- A complete, runnable script
- No external dependencies beyond the project itself

## The docs/ structure

```
docs/
├── README.md            # Project overview
├── ARCHITECTURE.md      # How it works
├── manifest-spec.md     # Format specification
├── tools.md             # Tool reference
├── examples.md          # Example index
└── guides/
    ├── getting-started.md
    ├── writing-agents.md
    └── deploying.md
```

Markdown for humans. The README is the entry point. The
architecture doc explains the design. The guides walk through
specific use cases.

## The .github/ structure

```
.github/
├── workflows/
│   ├── ci.yml            # Test on every push
│   ├── release.yml       # Publish on tag
│   └── codeql.yml        # Security scanning
├── ISSUE_TEMPLATE/
│   ├── bug.md
│   └── feature.md
├── PULL_REQUEST_TEMPLATE.md
└── dependabot.yml        # Auto-update deps
```

The CI is the credibility signal. The issue templates make
contributions easier. The PR template sets expectations.

## The .vscode/ structure

```
.vscode/
├── settings.json       # Editor settings
├── extensions.json     # Recommended extensions
└── launch.json         # Debug configs
```

The `settings.json` has project-specific settings (e.g.,
`"editor.tabSize": 2`). The `extensions.json` lists the
extensions contributors should install (e.g., Biome, Vitest).

## The dist/ structure

```
dist/
├── index.js            # The built output
├── index.d.ts          # TypeScript declarations
├── index.js.map        # Source map
├── cli.js              # CLI entry (if any)
├── cli.d.ts
├── cli.js.map
├── manifest/
│   ├── index.js
│   └── index.d.ts
└── ...
```

This is generated by `tsup` (or `esbuild`, or `bun build`). The
`dist/` directory is gitignored. The `package.json` `files`
field controls what gets included in the npm tarball.

## The 80/20

For a small project (< 5K LOC):
```
src/
├── index.ts
├── types.ts
└── implementation.ts
tests/
package.json
tsconfig.json
README.md
```

For a medium project (5-50K LOC):
```
src/
├── index.ts
├── feature1/
├── feature2/
└── feature3/
tests/
examples/
docs/
.github/
package.json
tsconfig.json
tsup.config.ts
vitest.config.ts
biome.json
README.md
CHANGELOG.md
```

For a large project (50K+ LOC):
```
packages/
├── core/
├── cli/
├── server/
└── ui/
docs/
.github/
package.json (workspaces)
```

## The lesson

The structure is the contract. The structure tells the next
developer (or your future self) what to expect. A good structure
makes the right thing easy and the wrong thing hard.

Pick a structure. Use it consistently. Refactor when you outgrow
it. The structure is the cheapest documentation you'll ever
write.
