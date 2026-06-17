---
title: "The agent framework I want doesn't exist yet"
description: "I've been building AI agents for a year. The framework I'd actually want to use doesn't exist. Here's what it looks like, and why Husk is my attempt."
date: 2026-06-10
tags: ["meta", "ai", "framework"]
---

I've been building AI agents for a year. I've used LangChain, written
custom loops, used AutoGen, tried CrewAI, and rolled my own three
times. The framework I want doesn't exist. So I'm building it.

## What I want

### A single `run()` function

```ts
const result = await agent.run('Fix the bug in src/foo.ts');
```

That's the whole API for 80% of use cases. The result has the final
text, the tool calls, the cost, and the duration. Done.

When I need more control, the same function takes options:
```ts
const result = await agent.run(prompt, {
  tools: [customTool],
  memory: myMemory,
  approval: myApprovalCallback,
});
```

### Types, not strings

No `prompt: "..."` magic. The system prompt is a string. The user
input is a string. The tool input is a Zod-validated object. The
output is a typed object.

```ts
const result = await agent.run<{ file: string; line: number }>({
  file: 'src/foo.ts',
  line: 42,
  task: 'fix the off-by-one',
});
```

If I have to use string templating to talk to an LLM, the framework
has failed at type design.

### Memory that's actually useful

Most "memory" abstractions are `add(content)` and `search(query)`.
That's not memory. Memory is:

- **Episodic** — what I did, when, and why
- **Semantic** — what I know about the world
- **Procedural** — how to do things
- **Working** — what's in my head right now

Husk ships episodic and semantic. Procedural and working are future.

### Tools that are easy to write

```ts
const tool = defineTool({
  name: 'my_app.do_thing',
  description: 'Do the thing',
  inputSchema: z.object({ ... }),
  execute: async (input, ctx) => ({ ok: true, output: ... }),
});
```

Four fields. One function. That's it. No base class, no decorator, no
plugin manifest. Just a function.

### Approval that's the default

Every write tool requires approval. The framework pauses and asks
the caller. The caller decides how to surface the prompt (CLI,
server response, web UI). The default is safe.

You can opt out — `approval: 'never'` for an automated pipeline. But
the default is safe.

### Cost that's transparent

Every run returns `usage: { inputTokens, outputTokens, costUsd }`.
You see the cost of every call. You can set a budget. The framework
won't blow your bill.

### Provider-agnostic

I should be able to switch from Claude to GPT-4o to Gemini to
local Ollama without changing my code. The provider is a config
option, not a dependency.

Husk ships Anthropic, OpenAI, and OpenAI-compatible. Google is next.

### Observable

When the agent fails, I want to know why. The framework should give
me:
- The full conversation
- Every tool call and its result
- The token usage
- The cost
- The duration per step
- The error stack

Husk's `ObserverBus` is the hook for this. Subscribe and ship to
your dashboard of choice.

## What I don't want

- **A DSL for prompts.** Template literals are enough.
- **A "chain" abstraction.** Sequential calls are a for loop.
- **A "memory" framework that's not memory.** A real memory system
  is a small interface + a few implementations.
- **A deployment story.** Deploy it like any other Node app.
- **Built-in observability vendor lock-in.** The hooks are enough;
  ship to Datadog, Honeycomb, or your own logs.

## The meta point

Every framework decision is a bet on what users will need. The big
frameworks bet on "everything." I bet on "the smallest thing that
covers 80%." If I'm right, Husk gets used. If I'm wrong, it doesn't.

The 80% is enough for me. YMMV.

The Husk repo is at
[github.com/10xdev4u-alt/husk](https://github.com/10xdev4u-alt/husk).
Try it. Star it. Tell me what I'm missing.
