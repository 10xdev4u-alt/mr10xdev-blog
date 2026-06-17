---
title: "How to write a CLAUDE.md for an agent project"
description: "CLAUDE.md is the file that AI coding assistants (Claude Code, Cursor, etc.) read at the start of every session. The 7 sections, the 4 anti-patterns, the template. How to write one that makes AI work on your project 10x faster."
date: 2026-03-17
tags: ["ai", "claude", "agents", "docs"]
---

CLAUDE.md is the file that AI coding assistants (Claude Code,
Cursor, etc.) read at the start of every session. The 7
sections, the 4 anti-patterns, the template. How to write one
that makes AI work on your project 10x faster.

## The 7 sections

### 1. The what (1 paragraph)

What is this project? Why does it exist?

```markdown
# CLAUDE.md

`gitagent` is a framework for declaring persistent, versioned
AI agents that live in your GitHub repository. Agents are
declared as `.github/agents/<name>.md` files.
```

The AI reads this first. The AI uses it to orient.

### 2. The stack (1 paragraph)

What's the tech stack? What versions?

```markdown
## Stack

- TypeScript 5.6+ (strict mode, noUncheckedIndexedAccess)
- Bun for tests and dev, Node 20+ for production
- Zod for input validation
- Octokit for GitHub API
- Hono for the HTTP server
- Vitest for tests
- Biome for lint and format
- tsup for building
```

The AI reads this to know what tools to use. The AI uses
the right tool for the right job.

### 3. The structure (1 paragraph)

What's the file structure? Where does what live?

```markdown
## Structure

- `src/manifest/` — manifest schema, loader, registry
- `src/providers/` — LLM provider adapters
- `src/tools/` — tool framework + GitHub tools
- `src/memory/` — memory backends
- `src/runtime/` — the agent execution loop
- `src/server/` — Hono-based webhook server
- `src/observability/` — observer bus + OTel
- `tests/` — Vitest tests mirroring the src/ structure
- `examples/` — example agent manifests
- `docs/` — documentation files
```

The AI reads this to know where to make changes. The AI
puts the change in the right place.

### 4. The conventions (1-3 paragraphs)

What are the code conventions? Style, patterns, do's and don'ts.

```markdown
## Conventions

- **No `any`.** Use `unknown` and narrow with Zod.
- **All public APIs are typed.** The `.d.ts` is the
  documentation.
- **Async-only.** No sync APIs in the public surface.
- **Zod for validation.** Every input to every tool has a
  Zod schema.
- **Errors are typed.** Use `ProviderError`, `ToolError`,
  `ManifestError`. No plain `Error` in the public surface.
- **Lazy-load heavy deps.** `@anthropic-ai/sdk`, `openai`,
  `pg`, etc. are loaded via dynamic import.
- **Tests are co-located.** `src/foo.ts` has `foo.test.ts`
  next to it.
```

The AI reads this to match the style. The AI produces
code that fits.

### 5. The commands (1 list)

What commands should the AI use for common tasks?

```markdown
## Commands

- **Run tests:** `bun test` or `npm test`
- **Run a single test:** `bun test path/to/file.test.ts`
- **Typecheck:** `npm run typecheck`
- **Lint:** `npm run lint`
- **Build:** `npm run build`
- **Dev:** `npm run dev` (uses tsx watch)
- **Add a new tool:** create `src/tools/<area>.ts`, add tests
  in `tests/tools/`, register in `src/tools/defaults.ts`
```

The AI reads this to know what to run. The AI doesn't
guess at the commands.

### 6. The pitfalls (1 list)

What are the common mistakes? What should the AI avoid?

```markdown
## Pitfalls

- **Don't add `any` types.** Use `unknown` and narrow.
- **Don't use `require()`.** The project is ESM-only.
- **Don't hardcode secrets.** They're in env vars.
- **Don't skip the input validation.** Every tool has a
  schema.
- **Don't return raw errors.** Use the typed error classes.
- **Don't use default exports.** Use named exports.
- **Don't break the `LLMProvider` interface.** If you add a
  method, add it to all 3 providers.
```

The AI reads this to avoid common mistakes. The AI doesn't
make the mistakes.

### 7. The conventions for AI

How should the AI work on this project?

```markdown
## Working with Claude

- Read the manifest spec before changing the manifest
  schema.
- Read the architecture doc before changing the runtime.
- Add a test for every new feature. Run the test before
  committing.
- Update the CHANGELOG for every change.
- Use atomic commits. One commit per change.
- Don't add features the user didn't ask for.
- Don't refactor without being asked.
- Don't change the public API without a deprecation cycle.
```

The AI reads this to know how to work. The AI produces work
that fits the project.

## The 4 anti-patterns

### Anti-pattern 1: Too long

The CLAUDE.md is 10,000 words. The AI is overwhelmed. The AI
gives up. The AI ignores most of the file.

The fix: keep it under 1000 words. The CLAUDE.md is a quick
reference, not a manual.

### Anti-pattern 2: Too vague

```markdown
# CLAUDE.md

Write good code.
```

The AI doesn't know what "good" means. The AI guesses. The
guesses are wrong.

The fix: be specific. Show, don't tell.

### Anti-pattern 3: No commands

The CLAUDE.md doesn't list the commands. The AI guesses at
the commands. The guesses are wrong. The AI wastes time.

The fix: list the commands. The commands are the actions.

### Anti-pattern 4: No pitfalls

The CLAUDE.md doesn't list the pitfalls. The AI makes the
mistakes. The mistakes are repeated.

The fix: list the pitfalls. The pitfalls are the warnings.

## The template

```markdown
# CLAUDE.md

<1 paragraph: what the project is>

## Stack

- <list of technologies and versions>

## Structure

- <list of directories and what they contain>

## Conventions

- <list of code conventions, do's and don'ts>

## Commands

- **Run tests:** <command>
- **Typecheck:** <command>
- **Build:** <command>
- <etc>

## Pitfalls

- <list of common mistakes to avoid>

## Working with Claude

- <list of AI-specific guidelines>
```

500-1000 words. 7 sections. The standard. The template is
the starting point.

## The lesson

7 sections. 4 anti-patterns. 1 template.

The CLAUDE.md is the contract with the AI. The contract
should be specific, useful, and brief. The 7 sections are
the floor. The 4 anti-patterns are the ceiling.

The agent that has a good CLAUDE.md works 10x faster. The
agent that doesn't work 1x. The choice is yours.

The agent era is here. The AI is the maintainer. The
maintainer needs the docs. The docs are the CLAUDE.md.
