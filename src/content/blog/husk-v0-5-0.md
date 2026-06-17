---
title: "Husk v0.5.0: streaming + validation framework"
description: "v0.5.0 of Husk adds streaming chat completions and a declarative validation framework. 35 new tests, 18 commits, 3rd auto-publish."
date: 2026-06-13
tags: ["husk", "release", "streaming", "validation"]
---

Husk v0.5.0 is out. Two flagship features and a real-world OTel example.

## 1. Streaming

Anthropic, OpenAI, and Ollama all implement `stream()`. New
`AgentStreamEvent` type with 6 variants: `text`, `tool_call_start`,
`tool_call_delta`, `tool_result`, `done`, `error`. New `Agent.streamRun()`
mirrors `run()` with streaming I/O. `--stream` flag for `husk run` CLI.

```ts
const stream = agent.streamRun('Write a haiku about TypeScript');
for await (const event of stream) {
  if (event.type === 'text_delta') process.stdout.write(event.delta);
}
```

Tool input JSON is reassembled via `parseToolInput()`. Falls back to
`{ _raw: accumulated }` on parse error — better than throwing.

## 2. Validation framework

Declarative safety rules per tool. 4 common validators ship in the box:

- `pathAllowed` — restricts file path access
- `commandDenylist` — blocks dangerous shell commands
- `maxFieldSize` — limits string length
- `noShellMetacharacters` — blocks shell injection

Add a `validate?` field to any `ToolDefinition`:

```ts
const tool = {
  name: 'write_file',
  inputSchema: z.object({ path: z.string(), content: z.string() }),
  validate: [pathAllowed(['./content/**']), maxFieldSize('content', 100_000)],
  execute: async (input) => writeFile(input.path, input.content),
};
```

Agent loop runs each rule between schema validation and execute. Pure
functions of `(input, ctx)` — no I/O, no side effects, easy to test.

## 3. OTel SDK example

`09-otel-sdk` is now actually runnable. Full bootstrap code (commented
out by default, user uncomments after `bun add`). Working wiring:
`OtelTracerAdapter` + `EventTracer` + real `Tracer` from `trace.getTracer()`.

## Stats

- 120 total commits (18 new for v0.5.0)
- 155 tests (35 new) — 100% pass rate
- 53KB lib + 54KB d.ts bundle

## What I learned

1. **`Promise.all` callbacks can't `yield`.** The `.map(async (tu) => { ... yield ... })`
   pattern needs results collected first, then yielded in a separate
   loop. Common async-iterator pitfall.
2. **`yield` inside `Promise.all` callback throws `TS1434: Unexpected
   keyword`.** TypeScript error is sharp; fix is straightforward.
3. **`parseArgs` doesn't support `--no-X` for boolean flags.** Use a separate
   `--non-interactive` flag instead.
4. **Streaming agent loops need to buffer tool_use deltas.** Tools can't
   execute until the JSON is complete. The buffer is `Map<id, string>`.
5. **Validation is separate from schema validation.** Schemas catch shape
   bugs; rules catch policy bugs. Different concerns, different layers.
6. **OTel is the bridge, EventTracer is the mapper, SDK is the bootstrap.**
   Three layers, each independent.
7. **`include_usage: true` is required for OpenAI streaming token counts.**
   Easy to miss; the SDK skips it by default.

Install: `npm install @princetheprogrammerbtw/husk@latest`
