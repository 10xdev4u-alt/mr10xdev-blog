---
title: "Husk v0.3.0: vector stores + RAG"
description: "v0.3.0 of Husk ships a VectorStore interface with in-memory and sqlite-vec backends, plus the RAG building blocks. The smallest change that lets the agent remember."
date: 2026-06-12
tags: ["husk", "release", "vector-store", "rag"]
---

Husk v0.3.0 ships memory. Specifically: a `VectorStore` interface,
two backends (in-memory + sqlite-vec), an `embed()` function, and a
RAG loop the agent uses by default.

## VectorStore

```ts
interface VectorStore {
  add(id: string, embedding: number[], metadata?: Record<string, unknown>): Promise<void>;
  search(query: number[], k: number): Promise<Array<{ id: string; score: number; metadata?: ... }>>;
  delete(id: string): Promise<void>;
  count(): Promise<number>;
}
```

Two impls:

- **`InMemoryVectorStore`** — for tests, demos, small corpora (< 10K vectors).
- **`SqliteVectorStore`** — uses `sqlite-vec` extension, persistent, scales to millions.

The agent loop automatically retrieves the top-K most similar memories
for each prompt and injects them as context. The agent doesn't need
to opt in.

## Embeddings

Two embedders ship in the box:

- **`hashEmbedder`** — deterministic, no API call, fast, lower quality.
  Good for tests and offline dev.
- **`openaiEmbedder`** — uses OpenAI's `text-embedding-3-small`, 1536
  dims, costs ~$0.02 per million tokens. Good for production.

A custom embedder is a one-liner:
```ts
const store = new InMemoryVectorStore({ embed: myCustomEmbedder });
```

## Why this is the smallest change

The instinct is to ship 10 vector-store backends, 5 embedders, and a
fancy RAG framework. v0.3.0 ships 2 backends, 2 embedders, and a
"default off" RAG loop. Users opt in by setting `vectorStore` in the
agent config.

Less code, less surface, less to break. The quality of the RAG
experience is determined by the quality of the embedder, not the
cleverness of the framework. The framework's job is to make
embedding + retrieval + injection boring.

## Stats

- 90 total commits
- 87 tests
- 51KB lib bundle (unchanged — the vector code is in a separate module)

## What I learned

1. **An interface is worth a thousand backends.** Two implementations
   of the same interface is enough to prove the design. Add backends
   as needed; don't pre-build them.
2. **The embedder is the bottleneck, not the store.** A great store
   with a bad embedder is worse than a bad store with a great embedder.
   v0.3.0 puts the embedder choice front and center.
3. **RAG by default is dangerous.** Opt-in is the right default. v0.3.0
   makes you set `vectorStore` explicitly; the agent won't silently
   reach into memories you didn't know it had.

Install: `npm install @princetheprogrammerbtw/husk@latest`
