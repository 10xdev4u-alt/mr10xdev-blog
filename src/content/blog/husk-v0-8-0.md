---
title: "Husk v0.8.0: vector filter + Gemini provider"
description: "v0.8.0 of Husk ships metadata filtering on vector stores and a new Gemini provider. 229 tests, 10 npm versions, 10 GitHub tags."
date: 2026-06-13
tags: ["husk", "release", "ai", "agent"]
---

Husk v0.8.0 is out. Two flagship features this release:

## 1. Vector filter

Metadata filtering on the `VectorStore` interface. The `InMemoryVectorStore`
and `SqliteVectorStore` now honor `search(q, k, { filter })`:

```ts
const results = await vectorStore.search('how to fix login', 10, {
  filter: { source: 'docs', version: { $gte: 2 } },
});
```

Four operators: exact, `$in`, `$contains`, `$exists`. Multiple clauses
ANDed. A canonical `matchesFilter()` matcher is shared between backends
so semantics stay consistent.

## 2. Gemini provider

A new `GeminiProvider` class for Google's models. Chat + streaming,
function calling via the new `@google/genai` SDK (the legacy
`@google/generative-ai` is EOL). Default model: `gemini-2.5-flash`.

```ts
import { GeminiProvider } from '@princetheprogrammerbtw/husk';

const provider = new GeminiProvider({ apiKey: process.env.GOOGLE_API_KEY });
const agent = new Agent({ provider, model: 'gemini-2.5-flash' });
```

## Stats

- 154 total commits (12 new for v0.8.0)
- 229 tests (27 new) — 100% pass rate
- 60KB lib bundle (unchanged — vector filter is a pure interface, Gemini is a thin adapter)

## What's next (v0.9.0 candidates)

- Auto-retry on transient errors (exponential backoff on 5xx, rate limits, network)
- Context window management (auto-compact when approaching model's token limit)
- Real `@opentelemetry/sdk-node` example upgrade — make `09-otel-sdk` actually runnable
- Gemini baseURL support — wire through the GenAI SDK's `httpOptions`
- More init templates (`with-tests`, `ESM-only`, `monorepo-aware`)

Install: `npm install @princetheprogrammerbtw/husk@latest`
