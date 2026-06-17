---
title: "The 80/20 of an agent MVP"
description: "The 80/20 of an agent MVP: the smallest thing you can ship that proves the loop. 5 features, 1 weekend, $0. Here's the spec."
date: 2026-05-27
tags: ["ai", "agents", "mvp", "process"]
---

I get asked a lot: "how do I start building an agent?" The answer is
the 80/20. Ship the smallest thing that proves the loop. Here's the
spec.

## The 5 features

An MVP agent has 5 features:
1. **A trigger.** Something that wakes the agent up. Webhook, cron,
   manual button.
2. **An LLM call.** With a system prompt and a user input.
3. **One tool.** A function the agent can call. The simplest
   possible: send a Slack message.
4. **A loop.** If the LLM returns a tool call, execute it and feed
   the result back.
5. **An output.** Something the user sees. A comment, a log line,
   a database row.

That's it. No memory. No streaming. No approval flow. No cost
tracking. No observability. Just the loop.

## The architecture

```
Trigger
  │
  ▼
LLM call
  │
  ├── if tool call → execute tool → LLM call (loop)
  │
  └── if text → output
```

5 components, 200 lines of code. A weekend.

## The implementation

Here's a minimal Husk-style MVP in 30 lines:

```ts
import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();
const tools = [{
  name: 'send_slack',
  description: 'Send a message to a Slack channel',
  input_schema: {
    type: 'object',
    properties: {
      channel: { type: 'string' },
      text: { type: 'string' }
    },
    required: ['channel', 'text']
  }
}];

async function run(userInput: string) {
  const messages = [{ role: 'user', content: userInput }];
  while (true) {
    const response = await client.messages.create({
      model: 'claude-sonnet-4-5',
      max_tokens: 1024,
      tools,
      messages
    });
    if (response.stop_reason === 'end_turn') {
      return response.content.find(b => b.type === 'text')?.text;
    }
    // Tool call
    const toolUse = response.content.find(b => b.type === 'tool_use');
    const result = await sendSlack(toolUse.input.channel, toolUse.input.text);
    messages.push({ role: 'assistant', content: response.content });
    messages.push({ role: 'user', content: [{ type: 'tool_result', tool_use_id: toolUse.id, content: JSON.stringify(result) }] });
  }
}
```

That's the MVP. 30 lines. One weekend. It works.

## The 80/20

80% of an agent's value comes from:
- The trigger (someone or something kicks it off)
- The LLM call (it reasons)
- The tool (it does)
- The loop (it can do multiple things)
- The output (the user sees the result)

The other 20% is:
- Memory (the agent remembers past events)
- Streaming (the user sees the response as it generates)
- Approval (the human gates write actions)
- Cost tracking (the user sees the cost)
- Observability (the developer sees what happened)
- Error handling (the agent retries on failure)
- Multiple tools (the agent can do many things)
- Multiple turns (the user can chat with the agent)

Ship the 80% first. Add the 20% as needed.

## The anti-pattern

The anti-pattern is the "comprehensive agent framework." You start
with: "I need memory, streaming, approval, cost tracking, multi-tool,
multi-turn, multi-agent, observability, error handling, and 5
providers."

You spend 6 months building. You never ship. The framework is too
complex to test. You abandon it.

The right pattern is the opposite. Ship the smallest thing. Use it.
Add features one at a time. Each feature is its own commit, its
own release, its own CHANGELOG entry.

## The Husk story

Husk v0.1.0 was 150 lines. No tools, no memory, no streaming. Just
a chat completion call. The README said "this is the smallest thing
that could work."

9 releases later, Husk has tools, memory, streaming, MCP, validation,
approval, cost tracking, observability, retries, and 229 tests.

But the core is still the same. A `run()` function that takes a
system prompt + user input and returns a response. The features are
layers on top.

## What to do

If you're starting an agent:
1. **Build the MVP in a weekend.** 200 lines. One tool. One
   trigger.
2. **Use it yourself.** The first user is you.
3. **Add one feature per week.** Each feature is its own commit.
4. **Ship every Friday.** Even if it's just a bug fix.
5. **Get one external user.** The first non-you user is a
   milestone.

The MVP is not the product. The MVP is the start of a conversation
with the product.

## What NOT to do

- Don't build a framework. Build an agent.
- Don't support 5 providers. Use 1.
- Don't add 10 tools. Add 1.
- Don't add memory. Add it when you need it.
- Don't add streaming. Add it when you need it.
- Don't add observability. Add it when you need it.

Each feature is a future commit. The MVP is the smallest thing that
proves the loop. Ship it. Then iterate.
