---
title: "Why the LLM context window is the new RAM"
description: "The context window is the new bottleneck. What fits in 200K tokens, what doesn't, why RAG and summarization are the new memory hierarchy, and how Husk thinks about it."
date: 2026-05-29
tags: ["ai", "context-window", "memory"]
---

The context window is the new RAM. What used to be a memory
hierarchy (cache, RAM, disk) is now a context window hierarchy
(system prompt, conversation, retrieval, summarization).

## The numbers

Claude Sonnet 4.5: 200K tokens. GPT-4o: 128K. Gemini 2.5 Pro: 1M.
Llama 3.1 405B: 128K.

For comparison:
- The complete works of Shakespeare: ~900K tokens
- A typical novel: ~100K tokens
- A medium-sized codebase: ~500K-2M tokens
- A long conversation: 10K-50K tokens

200K is a lot. 1M is enormous. But it's not infinite.

## What fits

A 200K context can hold:
- The system prompt (~2K)
- 10-20 long documents
- A full conversation history (~50 turns)
- A small codebase

A 200K context cannot hold:
- A real codebase
- A long history of all conversations
- A real-time stream of events
- A comprehensive knowledge base

## The new memory hierarchy

The old memory hierarchy:
- L1 cache: nanoseconds, KB
- L2 cache: nanoseconds, MB
- RAM: nanoseconds, GB
- SSD: microseconds, TB
- HDD: milliseconds, TB

The new context window hierarchy:
- **System prompt:** always in context (~2K tokens)
- **Recent conversation:** in context (~10K tokens)
- **Retrieved memory:** injected on demand (~10K tokens)
- **Summarized history:** in context as a summary (~1K tokens)
- **Full history:** in the vector store, not in context

The LLM is the "CPU." The context window is its "L1 cache." The
retrieval layer is its "RAM." The vector store is its "disk."

## The 80/20

80% of the value of context comes from:
- The system prompt (instructions, personality, examples)
- The most recent 2-3 turns of conversation
- 1-3 retrieved documents (the most relevant)

The other 20% is the long tail. Most queries don't need it.

## The implications

### 1. RAG is the new default

If you have more than 50K tokens of knowledge, you need RAG. The
context window can't hold it all. Retrieval is the way to get the
relevant bits into context.

### 2. Summarization is the new compression

When the conversation gets too long, summarize the older turns.
Inject the summary as context. The model still has the gist without
the noise.

### 3. Memory is a first-class concern

If you want the agent to remember past events, you need a memory
layer. The context window is too small. RAG is the way.

### 4. Streaming is the new UX

When the model is generating, stream the output. The user doesn't
have to wait for the full response. The first token arrives in ~500ms.
The user can start reading immediately.

## How Husk handles it

Husk has three memory types:
- **In-memory:** everything in process. Lost on restart. Good for
  tests.
- **Git-backed:** entries are files in the repo. Versioned.
  Auditable. The default for production.
- **SQLite-backed:** entries in a single file. Indexed. Good for
  high-volume use cases.

Plus two layers:
- **Episodic memory:** append-only log of past events. The agent
  can review what it did and learn from it.
- **Semantic memory:** vector store for similarity search. The
  agent can find the most relevant past decisions.

The agent loop automatically:
1. Retrieves the top-K most similar memories
2. Injects them as context
3. Generates a response
4. Optionally writes new memories

The user doesn't need to think about it.

## The future

The context window will keep growing. 10M tokens is plausible by
2028. But the 80/20 is the same:
- The system prompt matters
- The recent conversation matters
- 1-3 retrieved documents matter
- The long tail doesn't

Even with infinite context, RAG will be the default. Because
infinite context doesn't mean infinite attention. The model still
pays more attention to the recent turns. RAG ensures the relevant
documents are recent.

## The lesson

The context window is the new RAM. The memory hierarchy is back.
RAG is the new default. Summarization is the new compression.

Build your agent with this in mind. Don't try to fit everything in
the context. Use a vector store. Retrieve on demand. Summarize when
needed.

The result: an agent that remembers more, costs less, and
responds faster.
