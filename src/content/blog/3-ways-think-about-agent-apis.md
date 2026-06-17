---
title: "The 3 ways to think about agent APIs (in production)"
description: "3 ways to think about agent APIs: REST, streaming, webhooks. Each is a different interface with different tradeoffs. The framework, the examples, the lesson."
date: 2026-01-28
tags: ["apis", "agents", "architecture"]
---

3 ways to think about agent APIs: REST, streaming, webhooks.
Each is a different interface with different tradeoffs. The
framework, the examples, the lesson.

## API 1: REST

The user calls an HTTP endpoint. The agent runs. The
agent returns a response.

**Examples:**
- `POST /v1/agent/run` with `{input: "..."}` returns `{output: "..."}`
- `POST /v1/agent/chat` with `{messages: [...]}` returns `{message: "..."}`

**When to use:** the user wants a request/response. The
user is happy to wait. The user wants simplicity.

**Pros:**
- Simple (the user just calls an HTTP endpoint)
- Standard (every language can do HTTP)
- Stateless (no long-lived connection)

**Cons:**
- Slow (the user waits for the full response)
- Wasteful (the user can't see progress)
- Limited (no streaming, no bi-directional)

## API 2: Streaming

The user calls an HTTP endpoint. The agent streams
chunks. The user sees progress.

**Examples:**
- `POST /v1/agent/stream` returns a stream of events:
  - `{type: "text", content: "..."}`
  - `{type: "tool_call", name: "...", input: {...}}`
  - `{type: "tool_result", output: {...}}`
  - `{type: "done", usage: {...}}`

**When to use:** the user wants to see progress. The agent
takes a long time. The user wants to react.

**Pros:**
- Fast (the user sees the first chunk quickly)
- Engaging (the user sees the agent "thinking")
- Reactive (the user can cancel or interject)

**Cons:**
- Complex (the user has to handle a stream)
- Stateful (the user has to manage the connection)
- Brittle (network issues can break the stream)

## API 3: Webhooks

The user registers a webhook. The agent runs. The agent
calls the webhook.

**Examples:**
- `POST /v1/agent/subscribe` with `{url: "...", event: "..."}`
- The agent calls `{url}` with `{event: "..."}`

**When to use:** the user wants push. The user has a long
workflow. The user wants fire-and-forget.

**Pros:**
- Asynchronous (the user doesn't wait)
- Decoupled (the user and agent don't need to be online)
- Standard (every webhook service can do this)

**Cons:**
- Complex (the user has to set up a webhook receiver)
- Fragile (the webhook can be lost)
- Debugging (hard to trace the call)

## The 3 APIs together

The 3 are the interfaces. The interfaces are the value.
The value is the adoption.

| API | Speed | Complexity | Best for |
|---|---|---|---|
| REST | Slow | Low | Simple requests |
| Streaming | Fast | Medium | Long tasks |
| Webhooks | Async | High | Push workflows |

The API that matches the use case is the right API.

## The 80/20

80% of the value comes from:
- REST (the user is simple)
- Streaming (the user is engaged)

20% comes from:
- Webhooks (the user is decoupled)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the agent fast? (REST)
- Is the agent slow? (Streaming)
- Is the user async? (Webhooks)

The right answer is the right API at the right complexity.

## The lesson

3 APIs. 1 interface. 1 lesson: pick the right one.

The API that matches the use case is the right API. The API
that doesn't match is the wrong API.

The agent era is here. The API is the design. The design
is the choice. The choice is the discipline.
