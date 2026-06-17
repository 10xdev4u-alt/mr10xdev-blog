---
title: "The 4 ways to think about agent memory (in production)"
description: "4 ways to think about memory in production: short-term, long-term, semantic, episodic. Each has different storage, different access patterns, different cost. The framework, the examples, the tradeoffs."
date: 2026-03-02
tags: ["agents", "memory", "production"]
---

4 ways to think about memory in production: short-term,
long-term, semantic, episodic. Each has different storage,
different access patterns, different cost. The framework, the
examples, the tradeoffs.

## Type 1: Short-term memory

The memory that's only valid for the current run. The
conversation, the recent tool results, the immediate context.

**Storage:** in the LLM's context. The system prompt + the
recent messages.

**Access:** O(1). It's already there.

**Cost:** per-token. The tokens are added to the LLM call.

**When to use:** the memory is ephemeral. The memory is small.
The memory is for the current task.

**Examples:**
- The current conversation
- The recent tool results
- The agent's current plan

**Optimization:**
- Trim old messages (keep the last 10)
- Truncate tool results (keep the first 1K chars)
- Shorten the system prompt

## Type 2: Long-term memory

The memory that persists across runs. The user's preferences,
the agent's learnings, the project's conventions.

**Storage:** in a file or database. The memory is on disk.

**Access:** O(log N) with an index. Or O(N) with a full scan.

**Cost:** per-IO. The memory is read/written from disk.

**When to use:** the memory is persistent. The memory is
shared across runs. The memory is for future tasks.

**Examples:**
- The user's preferences
- The agent's learnings
- The project's conventions

**Optimization:**
- Use a database with an index
- Cache the memory in process
- Use a hybrid memory (in-memory + SQLite)

## Type 3: Semantic memory

The memory that's queryable by meaning. The "what does the
user know about X?" memory.

**Storage:** in a vector store. The memory is embedded.

**Access:** O(log N) with a vector index. The top-K most
similar memories are returned.

**Cost:** per-embedding. The embedding is computed when the
memory is written. The embedding is compared when the memory
is read.

**When to use:** the memory is queryable by meaning. The
memory is large. The memory is for general knowledge.

**Examples:**
- "What did the user ask about last time?"
- "What are the project's coding conventions?"
- "What does the agent know about this user?"

**Optimization:**
- Use a small embedding model (faster, cheaper)
- Cache the embeddings
- Limit the top-K to 5-10 results

## Type 4: Episodic memory

The memory that's a log of past events. The "what did I do
last time?" memory.

**Storage:** in a file or database. The memory is append-only.

**Access:** O(N) with a full scan. Or O(log N) with a
timestamp index.

**Cost:** per-write. The memory is appended to the log.

**When to use:** the memory is a history. The memory is for
learning. The memory is for auditing.

**Examples:**
- "What issues did I triage last week?"
- "What decisions did I make last month?"
- "What errors did I hit last quarter?"

**Optimization:**
- Compact old episodes (summarize into a single entry)
- Archive old episodes to cold storage
- Use a TTL (time-to-live) for old episodes

## The 4 together

The 4 are the memory hierarchy. The hierarchy is the
performance. The performance is the value.

| Type | Storage | Access | Cost | When to use |
|---|---|---|---|---|
| Short-term | Context | O(1) | Per token | Current run |
| Long-term | Disk | O(log N) | Per IO | Across runs |
| Semantic | Vector | O(log N) | Per embedding | Query by meaning |
| Episodic | Disk | O(N) | Per write | History |

The agent that uses all 4 is the agent that has a memory.
The agent that uses 1 is the agent that forgets.

## The 80/20

80% of the value comes from:
- Short-term (the agent's current context)
- Long-term (the agent's persistent state)

20% comes from:
- Semantic (query by meaning)
- Episodic (history)

Focus on the 80% first. Add the 20% as you grow.

## The lesson

4 types. 1 hierarchy. 1 lesson: use all 4.

The agent that uses all 4 types of memory is the agent that
remembers. The agent that uses 1 is the agent that forgets.

The agent era is here. The memory is the design. The design
is the discipline. The discipline is the agent.
