---
title: "The 3 types of agent memory (and when to use each)"
description: "Agents have 3 types of memory: working, episodic, and semantic. Each has a different shape, a different storage, a different access pattern. The right tool for the right job."
date: 2026-04-24
tags: ["agents", "memory", "architecture"]
---

Agents have 3 types of memory: working, episodic, and semantic.
Each has a different shape, a different storage, a different
access pattern. The right tool for the right job.

## Type 1: Working memory

Working memory is the immediate context. The current task, the
current state, the current conversation. It's always in the
context window. It's fast. It's small.

**Shape:** a small object (key-value pairs, a list of recent
items, a conversation thread).

**Storage:** in the LLM's context. The system prompt + the
recent conversation.

**Access:** O(1) — it's already there.

**Use when:**
- The information is needed for the current task
- The information is small (< 1K tokens)
- The information is ephemeral (gone after the run)

**Example:**
```ts
const workingMemory = {
  currentTask: 'Triage issue #42',
  recentActions: ['search_issues', 'add_labels'],
  userPreferences: { theme: 'dark' },
};
```

## Type 2: Episodic memory

Episodic memory is the past. "What happened last time?" "What
did the agent decide 3 days ago?" It's an append-only log of
events.

**Shape:** a list of timestamped events. Each event has a
timestamp, a type, and a payload.

**Storage:** a file or database. Each event is a row.

**Access:** O(N) — full scan, or O(log N) with an index. Usually
filtered by time or type.

**Use when:**
- The agent needs to recall what it did
- The user asks "why did you do X?" (the answer is in the
  episodes)
- The agent needs to learn from past successes and failures

**Example:**
```ts
interface Episode {
  ts: number;
  event: 'issues.opened' | 'issues.labeled' | 'manual';
  title: string;
  decision: string;
  context?: Record<string, unknown>;
}
```

## Type 3: Semantic memory

Semantic memory is the knowledge. "What does the user know?"
"What are the project's conventions?" It's a searchable index
of facts.

**Shape:** a vector index. Each entry is a chunk of text + an
embedding + metadata.

**Storage:** a vector store (in-memory, sqlite-vec, pgvector,
etc.).

**Access:** O(log N) — vector similarity search. Returns the
top-K most similar entries.

**Use when:**
- The agent needs to recall facts about the user or the
  project
- The user asks "what do you know about X?" (the answer is in
  the semantic memory)
- The agent needs to apply general knowledge to a specific
  task

**Example:**
```ts
interface SemanticEntry {
  key: string;
  content: string;
  metadata: Record<string, unknown>;
  embedding: number[];
}
```

## The 3 together

The 3 types compose. The agent's effective memory is the union:

- **Working memory** = the immediate context (fast, small)
- **Episodic memory** = the past events (slow, large)
- **Semantic memory** = the general knowledge (medium, medium)

For each prompt:
1. Load the working memory (always)
2. Search the semantic memory for relevant facts (medium cost)
3. Search the episodic memory for recent decisions (high cost)

The LLM sees: working memory + relevant facts + recent decisions.
The total context is bounded by the model's context window.

## The implementation

In gitagent, the 3 types are:

- **Working memory** = the system prompt + the current
  conversation (built by the agent runner)
- **Episodic memory** = the `episodes/` prefix in the memory
  directory (built by `EpisodicMemory.record()`)
- **Semantic memory** = the `SemanticMemory` wrapper around the
  base memory store

The user can mix and match. The default is git-backed (file
storage in the repo). The user can also use sqlite (sqlite-vec
for semantic) or in-memory (for tests).

## When to use which

| Question | Type |
|---|---|
| What task am I doing right now? | Working |
| What did I do yesterday? | Episodic |
| What does the user prefer? | Semantic |
| What was the last action I took on issue #42? | Episodic |
| How do I format my responses? | Working (or Semantic if persistent) |
| What did the user say about the project structure? | Semantic |
| What tools do I have available? | Working (in the system prompt) |
| What was the outcome of the last 10 triage runs? | Episodic |
| What are the project's coding conventions? | Semantic |

The pattern: working memory is for the current task, episodic is
for the recent past, semantic is for general knowledge.

## The 80/20

80% of the value comes from episodic memory. The agent can
recall what it did. The user can audit the agent's decisions.
The system can improve over time.

20% of the value comes from semantic memory. The agent can
recall general knowledge. The user can ask questions. The
system can apply past learning.

Working memory is "free" — it's just the system prompt.

If you're short on time, build episodic first. Add semantic
later. Skip working memory — it's just the system prompt.

## The failure modes

Each memory type has its own failure modes:

### Working memory failures
- **Too long:** the context window fills up with working
  memory, leaving no room for the actual task
- **Stale:** the working memory is from a previous task
- **Wrong:** the working memory has incorrect info

### Episodic memory failures
- **Too much:** the episode log grows unbounded, slowing
  retrieval
- **Noisy:** the episodes are full of irrelevant events
- **Corrupt:** an untrusted source (issue body) wrote to the
  episode log

### Semantic memory failures
- **Hallucinated:** the LLM retrieved an irrelevant fact and
  used it
- **Stale:** the semantic memory is from months ago, no longer
  relevant
- **Wrong:** the semantic memory has incorrect facts

The fix for all 3: validate, version, and audit. Treat memory
like code. Review it. Test it. Update it.

## The lesson

3 types of memory. Each with a different shape, storage, and
access pattern. Each with its own failure modes.

The agent that uses all 3 is more capable than the agent that
uses 1. The agent that uses 0 is a toy.

Build them all. Test them. Use them. The agent era is here. The
memory is the differentiator.
