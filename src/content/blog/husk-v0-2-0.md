---
title: "Husk v0.2.0: tool framework"
description: "v0.2.0 of Husk ships the tool framework that everything since has been built on. Schema validation, execute functions, the registry."
date: 2026-06-12
tags: ["husk", "release", "tools"]
---

Husk v0.2.0 is the version where the project stopped being a thin
Anthropic wrapper and started being a tool framework.

## What shipped

- **`ToolDefinition` interface** — name, description, input schema (Zod),
  execute function.
- **`ToolRegistry`** — register and look up tools by name.
- **Schema validation** — every tool call is validated against its
  schema before `execute()` runs. Invalid calls are caught and the
  error is sent back to the model so it can self-correct.
- **Multi-step loop** — the agent can call multiple tools in sequence
  and accumulate the results.
- **Tool result message format** — a simple `{ ok, output, error }`
  shape that's easy to extend.

## Why this is the foundation

Every later feature in Husk is built on this:
- MCP client (v0.6.0) wraps MCP tools as Husk `ToolDefinition[]`.
- MCP server (v0.7.0) exposes Husk tools as MCP tools.
- Validation framework (v0.5.0) is just a `validate?` field on the
  same `ToolDefinition` type.
- Custom providers, custom embedders, custom memory backends — all
  plug into the same registry pattern.

If v0.1.0 was "can the agent call Claude?", v0.2.0 was "can the agent
use tools?" The latter is the actual interesting question.

## The contract

```ts
interface ToolDefinition<TInput = unknown, TOutput = unknown> {
  name: string;
  description: string;
  inputSchema: z.ZodType<TInput>;
  execute: (input: TInput, ctx: ToolContext) => Promise<ToolResult<TOutput>>;
}

interface ToolResult<T = unknown> {
  ok: boolean;
  output?: T;
  error?: string;
}

interface ToolContext {
  agentName: string;
  runId: string;
  repo: { owner: string; name: string };
  event: { name: string; action?: string; payload: unknown };
  dryRun: boolean;
  logger: { debug, info, warn, error };
}
```

The `ToolContext` is the per-call context. The agent passes it; the
tool uses it to log, branch on dry-run, or scope operations to the
right repo.

## Stats

- 60 total commits
- 65 tests
- 38KB lib bundle (down from 45KB — the v0.1 wrapper code was removed)

## What I learned

1. **A `ToolResult` with `{ ok, output, error }` is the simplest thing
   that works.** I considered a discriminated union. The simple
   object is more flexible; the cost is a runtime `if (ok)` check.
2. **Zod is the right input validator.** The error message is good
   enough to send back to the LLM ("Tool foo rejected input: a: required;
   b: expected string, got number. Please try again.").
3. **A registry is a `Map<string, T>` with a `require()` that throws.**
   Don't over-engineer. The throw is the cost of typos; the user
   finds them at startup, not in production.

Install: `npm install @princetheprogrammerbtw/husk@latest`
