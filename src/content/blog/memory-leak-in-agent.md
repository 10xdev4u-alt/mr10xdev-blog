---
title: "How to debug a memory leak in an agent"
description: "Memory leaks in agents are different from memory leaks in software. The agent's context fills up with old conversations, irrelevant memories, and tool results. The 4 sources, the fixes, the prevention."
date: 2026-03-27
tags: ["agents", "memory", "performance"]
---

Memory leaks in agents are different from memory leaks in
software. The agent's context fills up with old conversations,
irrelevant memories, and tool results. The 4 sources, the fixes,
the prevention.

## The 4 sources of memory leaks

### 1. The conversation grows

Every turn adds a user message and an assistant message. Over
10 turns, the conversation is 20 messages. Over 100 turns, it's
200 messages. The LLM has to process all of them.

The fix: trim the conversation. Keep only the last N turns.
Older turns can be summarized or dropped.

```ts
// Keep the system prompt + the last 5 turns
const recentMessages = messages.slice(-10);
const trimmedMessages = [systemMessage, ...recentMessages];
```

### 2. The tool results accumulate

Each tool call adds the result to the messages. The tool
results are sometimes large (e.g., a 5K-token search result).
After 10 tool calls, the messages are 50K+ tokens.

The fix: truncate the tool results. Keep only the first 1K
characters. The full result is available in memory if needed.

```ts
const truncatedResult = result.length > 1000
  ? result.slice(0, 1000) + '... [truncated; full result in memory]'
  : result;
```

### 3. The memory is too large

If the agent uses RAG, the retrieved memories are added to the
context. If the memory is too large, the retrieved memories are
too many.

The fix: limit the number of retrieved memories. Use the top-K
most relevant. Discard the rest.

```ts
const topMemories = await memory.search(query, { limit: 5 });
```

### 4. The system prompt is too long

The system prompt is always in the context. If it's 5K tokens,
every turn starts with 5K tokens. Over 100 turns, that's 500K
tokens of system prompt alone.

The fix: keep the system prompt short. Move the long content
to retrieved memory. Use prompt caching.

```ts
// Bad: 5K system prompt
const systemPrompt = "..."; // 5K tokens

// Good: 1K system prompt + retrieved memory
const systemPrompt = "..."; // 1K tokens
const memoryContext = await memory.search(query, { limit: 3 });
```

## The fix

The fix is a combination of:
- **Trim the conversation** (keep last N turns)
- **Truncate the tool results** (keep first 1K chars)
- **Limit the memory retrieval** (top-K)
- **Shorten the system prompt** (move long content to memory)
- **Use prompt caching** (cache the system prompt)

The combined effect: the context stays bounded. The LLM has
what it needs. The cost stays low.

## The prevention

The prevention is in the design:
- **Default to truncation.** Every tool that returns a large
  result should truncate by default.
- **Default to limits.** Every memory search should have a
  default limit (e.g., 5 results).
- **Default to short.** The system prompt should be short
  (e.g., 1K tokens).
- **Measure.** Every run should track the context size. Alert
  when it grows.

## The cost

The cost of a memory leak is the cost of every turn. If the
context grows by 5K tokens per turn, and the LLM costs $3/MTok
input, then every turn costs an extra $0.015. Over 100 turns,
that's $1.50 per run.

The fix (trim, truncate, limit) is 1-2 hours of work. The
savings is $1.50 per run. The payback is 10-100 runs.

## The lesson

4 sources. 1 fix. 1 prevention.

The agent that has a memory leak is expensive. The agent that
has a bounded memory is efficient. The difference is the
design.

The agent era is here. The memory is the cost. The cost is the
design. The design is bounded.
