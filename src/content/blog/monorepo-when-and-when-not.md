---
title: "When to use a monorepo (and when not to)"
description: "Monorepos are trendy in 2026. They're also often the wrong choice. When does a monorepo help, when does it hurt, and what's the actual decision matrix?"
date: 2026-05-09
tags: ["monorepo", "architecture", "process"]
---

Monorepos are trendy in 2026. They're also often the wrong choice.
When does a monorepo help, when does it hurt, and what's the
actual decision matrix?

## The promise

A monorepo is a single Git repository that contains multiple
projects. The promise:
- **Atomic changes** across projects
- **Shared code** without publishing
- **Unified CI/CD**
- **Consistent tooling**
- **Easier refactoring**

The reality:
- **Atomic changes** are easier (true)
- **Shared code** is easier (true)
- **Unified CI/CD** is harder (more to coordinate)
- **Consistent tooling** is forced (good or bad, depending)
- **Easier refactoring** is true

The promise is real. The cost is also real.

## The cost

- **Build complexity.** You need a build system that knows about
  multiple projects. Turborepo, Nx, Bazel, Lerna.
- **Dependency graph.** The build order matters. The CI cache
  matters. The dependency graph is the source of truth.
- **Permissions.** In a company, you might want to give team A
  write access to project X but not project Y. Monorepos make
  this harder.
- **Clone size.** A large monorepo can be 10GB+. Cloning is
  slow. CI is slow.
- **Tooling.** Many tools assume one project per repo. Monorepos
  need custom tooling.

## The decision matrix

| Use case | Monorepo? |
|---|---|
| 1-2 closely related projects | **Yes** |
| 3-10 closely related projects | **Yes, with a build system** |
| 10+ projects with different lifecycles | **No, use multiple repos** |
| Frontend + backend + shared types | **Yes** |
| Frontend + 5 unrelated services | **No** |
| Library + CLI + docs site | **Yes** |
| 5 unrelated libraries | **No** |
| Microservices | **No, one repo per service** |
| Design system + web app + mobile app | **Yes** |
| 10 web apps | **No** |

The pattern: if the projects share code, deploy together, or have
the same release cadence, monorepo. Otherwise, multi-repo.

## The good monorepo

A good monorepo has:
- A clear directory structure (`apps/`, `packages/`, `tools/`)
- A workspace manager (npm, pnpm, yarn, bun)
- A build system (Turborepo, Nx, or hand-rolled)
- Shared tooling (lint, format, test)
- Per-project READMEs
- A root README that explains the monorepo

Example: Turborepo's `with-tailwind` template:
```
my-monorepo/
├── apps/
│   ├── web/         # Next.js app
│   └── docs/        # Docs site
├── packages/
│   ├── ui/          # Shared component library
│   ├── config/      # Shared config (ESLint, TSConfig)
│   └── database/    # Shared database client
├── tools/
│   └── scripts/     # Build/dev scripts
├── package.json     # Workspaces config
├── turbo.json       # Turborepo config
└── README.md
```

Each project is self-contained. The build system knows the
dependency graph. CI can build only what changed.

## The bad monorepo

A bad monorepo has:
- No clear structure
- No workspace manager (just multiple `package.json`s in the same
  repo)
- No build system
- Inconsistent tooling
- A 10GB `node_modules`
- Build times measured in minutes

The bad monorepo is worse than no monorepo. It has the costs
without the benefits.

## The alternatives

If a monorepo is the wrong choice, what are the alternatives?

### 1. Multiple repos

The default. Each project is its own repo. Share code via
`npm install` or git submodules.

Pros: clean separation, independent CI, small clones
Cons: cross-repo refactoring is hard, shared code is duplicated
or published

### 2. Polyrepo + shared library

A "polyrepo" with a shared library that other repos depend on.
The shared library is published to a private npm registry or
GitHub Packages.

Pros: clean separation, shared code is shared
Cons: cross-repo refactoring requires a new version of the shared
library

### 3. Monorepo + selective publishing

A monorepo where some projects are published and others are not.
The published projects have their own changelog and version.

Pros: best of both worlds
Cons: complex setup (Turborepo, Changesets)

### 4. Git submodules

A single repo with sub-repos. Each sub-repo is its own thing.

Pros: shared repo, independent versioning
Cons: complex to use, easy to break

## The verdict

For most indie builders:
- **1-2 projects:** monorepo
- **3-5 related projects:** monorepo with Turborepo
- **5+ projects:** multiple repos, possibly with a shared library

For most companies:
- **< 10 engineers:** monorepo
- **10-100 engineers:** monorepo with strict access controls
- **100+ engineers:** monorepo with multiple build systems,
  multiple teams, multiple release cadences

The right answer depends on your team size, project coupling, and
release cadence. There's no universal rule.

## The lesson

A monorepo is a tool, not a religion. Use it when it helps.
Don't use it when it doesn't. The cost is real; the benefit is
real.

For most indie builders, a monorepo with 2-3 closely related
projects is the sweet spot. The build system can be as simple
as `npm run build` in each project. The tooling can be a shared
`package.json` in the root.

For larger projects, invest in Turborepo or Nx. The investment
pays for itself in saved CI time.

For huge projects (Google, Meta), monorepos are the only way to
manage the scale. But that's not your project.

Start small. Refactor when you outgrow the structure. The
structure is the contract. The contract should match the
project, not the trend.
