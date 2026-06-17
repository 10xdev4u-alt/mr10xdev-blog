---
title: "The 3 layers of agent complexity"
description: "Every agent has 3 layers: interface, logic, infra. Each layer has its own complexity, its own tests, its own debug story. The 80/20 of debugging. The traps of mixing layers."
date: 2026-03-12
tags: ["architecture", "agents", "complexity"]
---

Every agent has 3 layers: interface, logic, infra. Each layer
has its own complexity, its own tests, its own debug story.
The 80/20 of debugging. The traps of mixing layers.

## Layer 1: Interface

The interface is what the user sees. The manifest, the CLI,
the API, the docs.

**Complexity:**
- The manifest is the spec. The manifest is the contract.
- The CLI is the surface. The CLI is the user experience.
- The API is the integration. The API is the extension point.
- The docs are the explanation. The docs are the trust.

**Testing:**
- Snapshot tests for the manifest
- CLI tests for the surface
- API tests for the integration
- Doc tests for the explanation

**Debugging:**
- "The manifest is wrong" → fix the manifest
- "The CLI is broken" → fix the CLI
- "The API is wrong" → fix the API
- "The docs are wrong" → fix the docs

## Layer 2: Logic

The logic is what the agent does. The runner, the LLM calls,
the tool calls, the memory reads/writes.

**Complexity:**
- The runner is the loop. The runner is the orchestration.
- The LLM calls are the reasoning. The LLM calls are the AI.
- The tool calls are the actions. The tool calls are the API.
- The memory is the history. The memory is the context.

**Testing:**
- Unit tests for the runner
- Golden tests for the LLM calls
- Contract tests for the tool calls
- Eval tests for the memory

**Debugging:**
- "The loop is wrong" → fix the loop
- "The LLM is wrong" → fix the prompt or the model
- "The tool is wrong" → fix the tool
- "The memory is wrong" → fix the memory

## Layer 3: Infra

The infra is what the agent runs on. The server, the
storage, the secrets, the deployment.

**Complexity:**
- The server is the entry point. The server is the
  interface to the world.
- The storage is the persistence. The storage is the
  durability.
- The secrets are the security. The secrets are the trust.
- The deployment is the availability. The deployment is the
  reliability.

**Testing:**
- Integration tests for the server
- Storage tests for the persistence
- Security tests for the secrets
- Deployment tests for the availability

**Debugging:**
- "The server is down" → fix the server
- "The storage is corrupted" → fix the storage
- "The secrets are leaked" → fix the secrets
- "The deployment is broken" → fix the deployment

## The 3 layers

The 3 layers compose:

```
┌──────────────────┐
│    Interface     │  manifest, CLI, API, docs
├──────────────────┤
│      Logic       │  runner, LLM, tools, memory
├──────────────────┤
│     Infra        │  server, storage, secrets, deploy
└──────────────────┘
```

Each layer is independent. Each layer can be tested in
isolation. Each layer can be debugged in isolation.

The mix is what causes the bugs. The interface affects the
logic. The logic affects the infra. The infra affects the
interface. The feedback loop is the source of the bugs.

## The 80/20

80% of the time, the bug is in the logic. The runner. The
LLM. The tools. The memory.

20% is in the interface or the infra. The manifest. The CLI.
The server. The storage.

When debugging, check the logic first. The logic is the
most likely source.

## The traps of mixing

The trap: the layers are mixed. The runner does the LLM
calls AND the tool calls AND the memory reads/writes. The
runner is a god object. The runner is hard to test. The
runner is hard to debug.

The fix: separate the layers. The runner orchestrates. The
LLM provider makes LLM calls. The tool registry makes tool
calls. The memory does reads/writes. Each layer is testable.
Each layer is debuggable.

The separation is the discipline. The discipline is the
quality. The quality is the product.

## The test

The layers are well-separated if:
- The runner doesn't know about LLM APIs directly (it uses
  the LLMProvider interface)
- The LLM provider doesn't know about tool calls directly
  (it returns tool calls for the runner to handle)
- The tool registry doesn't know about LLM calls directly
  (it exposes tools for the runner to call)
- The memory doesn't know about the runner (it exposes
  read/write for the runner to use)

If any layer knows too much, the layers are mixed. Refactor
to separate them.

## The lesson

3 layers. 1 discipline. 1 test.

The agent that separates the layers is testable. The agent
that mixes them is not. The choice is yours.

The agent era is here. The layers are the same. The
discipline is the same. The separation is the quality.
