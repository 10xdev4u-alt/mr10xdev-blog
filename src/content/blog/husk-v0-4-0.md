---
title: "Husk v0.4.0: the init scaffolder"
description: "v0.4.0 of Husk adds the `husk init` CLI. Scaffolds a new Husk project in one command. 27 templates, 3 providers, all the boilerplate gone."
date: 2026-06-12
tags: ["husk", "release", "init", "cli"]
---

Husk v0.4.0 is the version where "trying Husk" became one command.
Before, you'd clone the repo, copy-paste the example, and hope
nothing broke. Now, `husk init my-project` scaffolds the whole
thing.

## What shipped

The `husk init` CLI:
- Scaffolds a new Husk project
- Prompts for project name, description, provider, model
- Generates `package.json`, `tsconfig.json`, `src/agent.ts`, and
  a sample `src/tools/`
- Installs dependencies (optional, with `--install`)
- Initializes git (optional, with `--git`)
- Writes a starter README and CHANGELOG

The flow:

```bash
$ npx @princetheprogrammerbtw/husk init my-agent
? Project name: my-agent
? Description: My awesome agent
? Provider: anthropic
? Model: claude-sonnet-4-5
✓ Created package.json
✓ Created tsconfig.json
✓ Created src/agent.ts
✓ Created src/tools/echo.ts
✓ Created README.md

Next steps:
  1. cd my-agent
  2. export ANTHROPIC_API_KEY=sk-ant-...
  3. npm run dev
```

30 seconds from zero to a running agent.

## The templates

v0.4.0 ships 4 templates:
- **`basic`** — single agent, one tool, no memory. The MVP.
- **`with-tools`** — agent with 3 sample tools.
- **`with-mcp`** — agent that consumes an MCP server.
- **`with-rag`** — agent with vector memory.

Pick the template that matches your use case. Each is a 50-line
project that's ready to run.

## The package manager detection

The init command detects your package manager:
- `npm` (default)
- `pnpm` (if `pnpm-lock.yaml` is present)
- `bun` (if `bun.lockb` is present)
- `yarn` (if `yarn.lock` is present)

The detected manager is used for `--install` and other commands.
You can override with `--package-manager pnpm`.

## The `--git` flag

```bash
$ husk init my-agent --git
✓ Created my-agent/
✓ Initialized git repository
✓ Created initial commit
  Author: Mr. 10x Dev <10xdev4u@gmail.com>
  Message: "chore: initial commit from husk init"
```

One command, full project, ready to push to GitHub.

## The `--install` flag

```bash
$ husk init my-agent --install
✓ Created my-agent/
✓ Installing dependencies (npm)...
added 47 packages in 3s
```

The init now does the install too. One command, ready to run.

## The `--force` flag

The init command refuses to overwrite an existing directory.
`--force` bypasses the check. Use with care.

## The `-t / --template` flag

```bash
$ husk init my-agent --template with-mcp
? MCP server command: npx
? MCP server args: -y @modelcontextprotocol/server-filesystem
```

The init prompts for the MCP server's transport. The result is a
project ready to use that server.

## The non-interactive mode

```bash
$ husk init my-agent --non-interactive \
    --description "My agent" \
    --provider anthropic \
    --model claude-sonnet-4-5
```

For CI / scripted use. No prompts. The defaults are sensible.

## Stats

- 102 total commits (18 new for v0.4.0)
- 87 tests
- 51KB lib + 44KB d.ts bundle

## What I learned

1. **A good init is half the battle.** The friction of "how do I
   start?" is a real reason people don't try a new library.
   `husk init` removes the friction.
2. **Detect the environment.** Package manager, git author, file
   system layout. Don't ask the user to specify.
3. **Non-interactive is for CI.** Make prompts skippable. The same
   command should work locally and in CI.
4. **The README is part of the scaffolder.** Don't ship a project
   without a README. The init writes one.

Install: `npm install @princetheprogrammerbtw/husk@latest`

Try it: `npx @princetheprogrammerbtw/husk init my-agent`
