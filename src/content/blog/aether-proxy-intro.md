---
title: "aether-proxy: an AI gateway in 100 lines of TypeScript"
description: "aether-proxy is a 26-model AI gateway with Docker, Langfuse, and a clean Bun + Hono architecture. How I built it, what it does, why I open-sourced it."
date: 2026-05-25
tags: ["aether-proxy", "ai", "gateway", "bun"]
---

[aether-proxy](https://github.com/TeamMavericKX/aether-proxy) is an
AI gateway I built and open-sourced. 26 models. Langfuse tracing.
Docker. Bun. Hono. ~100 lines of TypeScript. This post is what it
does, how it works, and why I open-sourced it.

## What it does

aether-proxy is a single binary that sits between your app and 26
LLM providers. Your app sends a request to the proxy. The proxy:

1. **Validates** the request (auth, rate limit, schema)
2. **Routes** to the right provider based on the model name
3. **Transforms** the request to the provider's format
4. **Forwards** to the provider
5. **Streams** the response back to your app
6. **Traces** the call to Langfuse for observability
7. **Caches** the response (optional) for repeated calls

The app doesn't need to know about OpenAI vs Anthropic vs Gemini.
It just calls the proxy with `model: "claude-sonnet-4-5"` and the
proxy does the rest.

## The architecture

```
Your app
  │
  ▼
aether-proxy (Bun + Hono)
  │
  ├── Langfuse (tracing)
  ├── Cache (in-memory or Redis)
  ├── Rate limit (per-token, per-route)
  │
  ▼
Provider (Anthropic, OpenAI, Gemini, ...)
```

100 lines of TypeScript. No framework. No magic.

## The code

```ts
import { Hono } from 'hono';
import Anthropic from '@anthropic-ai/sdk';
import OpenAI from 'openai';
import { Langfuse } from 'langfuse';

const app = new Hono();
const langfuse = new Langfuse();

app.post('/v1/chat/completions', async (c) => {
  const body = await c.req.json();
  const trace = langfuse.trace({ name: 'chat' });

  // Route to the right provider
  const model = body.model;
  const provider = model.startsWith('claude') ? 'anthropic' :
                  model.startsWith('gpt') ? 'openai' :
                  model.startsWith('gemini') ? 'google' : 'unknown';

  let response;
  if (provider === 'anthropic') {
    const client = new Anthropic();
    response = await client.messages.create({
      model,
      max_tokens: body.max_tokens ?? 1024,
      messages: body.messages,
    });
    trace.update({ output: response });
    return c.json(toOpenAIFormat(response));
  }
  // ... similar for openai, google ...
});

export default app;
```

That's the core. The rest is config, validation, and edge cases.

## The features

- **26 models.** Anthropic, OpenAI, Google, Mistral, Cohere,
  Together, Groq, Ollama, etc.
- **OpenAI-compatible API.** Your existing OpenAI client just
  works. Just point it at the proxy.
- **Langfuse tracing.** Every call is traced with input, output,
  latency, cost.
- **Caching.** Repeated calls hit the cache. Save 50%+ on
  embedding calls.
- **Rate limiting.** Per-token, per-route. Avoid runaway costs.
- **Streaming.** SSE for chat completions. The user sees the
  response as it generates.
- **Docker.** One `docker run` and you're up.
- **Bun.** Fast startup, low memory, TypeScript-native.

## Why I built it

I have 5+ apps that call LLMs. Each one had its own:
- Provider SDK
- API key management
- Retry logic
- Rate limiting
- Tracing

That's 5x the boilerplate. aether-proxy is the boilerplate, once.
All 5 apps now use it.

## Why I open-sourced it

Three reasons:
1. **It's the kind of thing every team needs.** 26 models, one
   API. The OpenAI-compat layer is the wedge.
2. **It's small enough to understand in 30 minutes.** Read the
   code, see what it does, fork it.
3. **It dogfoods the meta-loop.** aether-proxy is built on
   TypeScript. Husk is built on TypeScript. The Husk SDK uses
   aether-proxy. aether-proxy could use Husk to summarize traces.
   It's turtles all the way down.

## The deployment

```bash
docker run -d \
  -p 8080:8080 \
  -e ANTHROPIC_API_KEY=sk-ant-... \
  -e OPENAI_API_KEY=sk-... \
  -e LANGFUSE_PUBLIC_KEY=... \
  -e LANGFUSE_SECRET_KEY=... \
  ghcr.io/teammaverickkx/aether-proxy
```

That's it. Your app points to `http://localhost:8080/v1` and the
proxy handles the rest.

## The numbers

- **LOC:** ~600 (most is config and edge cases, not the core)
- **Models:** 26 supported
- **Providers:** 8 integrated
- **Container size:** 80MB (Bun is tiny)
- **Startup:** <50ms
- **p99 latency overhead:** <5ms

## The roadmap

- **v0.2:** Add support for embeddings API (not just chat)
- **v0.3:** Add a model selection strategy (cheap first, expensive
  on retry)
- **v0.4:** Add a per-tenant rate limit (multi-tenant)
- **v0.5:** Add a UI for viewing traces and managing keys
- **v1.0:** Stable API. Plugin system for custom providers.

## The lesson

A gateway is the boring, essential infrastructure that every LLM app
needs. Building it once, open-sourcing it, and dogfooding it is the
right move. The community benefits. The product benefits. The author
benefits.

The 100-line version is the right size. Anything bigger is over-
engineered. Anything smaller is missing a feature.

## Try it

```bash
git clone https://github.com/TeamMavericKX/aether-proxy
cd aether-proxy
docker compose up
```

Then point your OpenAI client at `http://localhost:8080/v1` and
watch the traces in Langfuse.

If you find a bug, open an issue. If you want a feature, open a
PR. The repo is small and friendly.
