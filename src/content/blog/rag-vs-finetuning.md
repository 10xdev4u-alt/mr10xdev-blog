---
title: "RAG vs fine-tuning: when to use which"
description: "RAG (retrieval-augmented generation) and fine-tuning are two ways to give an LLM knowledge. Here's the decision framework, the costs, and when to combine them."
date: 2026-06-04
tags: ["ai", "rag", "fine-tuning"]
---

RAG (retrieval-augmented generation) and fine-tuning are two ways to
give an LLM knowledge. They're not interchangeable. This post is a
decision framework for when to use which.

## Definitions

**RAG:** the model gets a chunk of relevant text in its context
when answering. The model doesn't change; the input does.

**Fine-tuning:** the model's weights are updated by training on
examples. The model changes; the input doesn't.

## The fundamental difference

- **RAG** is for **knowledge**. The model needs to know facts.
- **Fine-tuning** is for **style, format, or behavior**. The model
  needs to respond in a particular way.

If you want the model to know your company's policies, use RAG. If
you want the model to always respond in JSON, use fine-tuning (or
just a system prompt).

## When to use RAG

- **The knowledge changes often.** Company policies, product docs,
  internal APIs. RAG is easy to update — just add to the index.
- **The knowledge is too large to fit in context.** A 1M token
  knowledge base. RAG retrieves the relevant 10K tokens.
- **You need citations.** "The answer is X, based on this source."
- **You don't have GPU/time/budget for fine-tuning.** RAG is
  dramatically cheaper.

## When to use fine-tuning

- **The behavior is consistent across many calls.** "Always
  respond with a JSON object matching this schema."
- **You have thousands of examples.** Fine-tuning is data-hungry.
- **The behavior is hard to express in a prompt.** "Use the
  house style: short, direct, no hedging."
- **You need a small, fast model.** Fine-tune a 7B model to match
  GPT-4 quality on your specific task.

## When to combine

Many production systems use both:
- **Fine-tune** the model on your domain (e.g., legal, medical).
- **RAG** the latest documents (e.g., recent case law, recent
  research).

The fine-tuning gives the model the right "voice" and baseline
knowledge. The RAG gives it the up-to-date specifics.

## The cost equation

RAG:
- Indexing: $0.02-0.10 per million tokens (embedding API)
- Storage: ~$0.10 per GB per month
- Retrieval: ~10ms per query
- LLM call: same as without RAG

Fine-tuning:
- Training: $10-100 per million tokens (depending on model size)
- Storage: ~$0.50 per GB per month (the model weights)
- Inference: same as without fine-tuning, but you can use a
  smaller model

For a use case with 100K queries/month and 1M tokens of context,
RAG is roughly 10x cheaper than fine-tuning the same content. The
breakeven is when the content stops changing.

## The decision framework

```
Need to give the model knowledge that changes often?
  → RAG
Need to give the model knowledge that's too big for context?
  → RAG
Need citations?
  → RAG
Need a consistent behavior across many calls?
  → Fine-tune
Need a small/fast model?
  → Fine-tune
Need both?
  → Fine-tune + RAG
Need neither?
  → Just use a good prompt.
```

## What I do in Husk

Husk ships with RAG by default. The agent's memory is a vector
store. Each prompt retrieves the top-K most similar memories and
injects them as context. This is "RAG" in the simplest form.

I don't ship fine-tuning support yet. The use cases I see are
mostly "give the agent knowledge" — which is RAG. Fine-tuning is
coming in v0.10+ if I see demand.

## The real lesson

RAG is the default. Fine-tuning is the optimization. If you're
starting a new project, build with RAG. Move to fine-tuning only
when:
- RAG is too slow (you can't wait for retrieval)
- RAG is too expensive (you can't afford the embedding cost)
- RAG is too lossy (the retrieved context misses the answer)
- RAG is too verbose (the model gets confused by the retrieved
  context)

For 90% of projects, RAG is enough. The other 10% needs fine-tuning
or a different approach (a smaller specialized model, a code
executor, etc.).

## What to do

- Start with RAG. Use a vector store, an embedder, and a simple
  retrieval function. Most frameworks (Husk, LangChain, LlamaIndex)
  have this in 10 lines.
- Measure the failure modes. Where does RAG fail? What context
  does it miss?
- If failures are systematic, fine-tune. If they're rare, improve
  the RAG.
- Don't fine-tune on day one. You'll waste time and money.

The goal is the answer, not the technique. Use the simplest thing
that works.
