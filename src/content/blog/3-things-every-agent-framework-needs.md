---
title: "The 3 things every agent framework needs"
description: "3 things every agent framework needs: a manifest, a runtime, a tool. The foundation. The framework, the examples, the lesson."
date: 2026-01-15
tags: ["frameworks", "agents", "best-practices"]
---

3 things every agent framework needs: a manifest, a runtime,
a tool. The foundation. The framework, the examples, the
lesson.

## Thing 1: A manifest

The manifest is the agent's config. The manifest is the
agent's contract. The manifest is the agent.

**Examples:**
- `name`: the agent's name
- `triggers`: the events that activate the agent
- `model`: the LLM to use
- `tools`: the tools the agent can call
- `memory`: the memory backend
- `limits`: the safety limits

**When to use:** every agent has a manifest. The manifest
is the source of truth. The manifest is the version.

**Pros:**
- Declarative (the user describes what they want)
- Versioned (the manifest is in git)
- Auditable (the manifest shows what the agent does)

**Cons:**
- Limited (the manifest is static)
- Validation (the manifest must be validated)
- Coupling (the manifest is tied to the framework)

## Thing 2: A runtime

The runtime is the agent's loop. The runtime is the
orchestrator. The runtime is the engine.

**Examples:**
- The LLM call
- The tool execution
- The message building
- The limit enforcement
- The event emission

**When to use:** every agent has a runtime. The runtime
is the engine. The runtime is the loop.

**Pros:**
- Tested (the runtime is tested)
- Reusable (the runtime works for all agents)
- Observable (the runtime emits events)

**Cons:**
- Coupling (the runtime is tied to the framework)
- Black box (the runtime is hard to debug)
- Performance (the runtime has overhead)

## Thing 3: A tool

The tool is the agent's action. The tool is the API. The
tool is the interface.

**Examples:**
- `github.post_comment` — post a comment
- `github.add_labels` — add labels
- `github.create_pr` — create a PR
- `memory.read` — read from memory
- `memory.write` — write to memory

**When to use:** every agent has tools. The tools are the
actions. The tools are the value.

**Pros:**
- Composable (the tools can be combined)
- Reusable (the tools work for all agents)
- Validated (the tools have Zod schemas)

**Cons:**
- Coupling (the tools are tied to the API)
- Versioning (the tools can change)
- Security (the tools are an attack surface)

## The 3 together

The 3 are the foundation. The foundation is the agent.

| Thing | What it provides |
|---|---|
| Manifest | The contract |
| Runtime | The engine |
| Tool | The action |

The agent that has all 3 is the complete agent. The agent
that has 1 is the partial agent. The complete agent is
adopted. The partial agent is not.

## The 80/20

80% of the value comes from:
- Manifest (the agent is declarative)
- Runtime (the agent is reusable)

20% comes from:
- Tool (the agent is actionable)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent framework, ask:
- Does the framework have a manifest? (declarative)
- Does the framework have a runtime? (reusable)
- Does the framework have tools? (actionable)

The right answer is all 3. The wrong answer is 1 or 2.

## The lesson

3 things. 1 framework. 1 lesson: build all 3.

The framework that builds all 3 is the complete framework.
The framework that builds 1 is the partial framework. The
complete framework is adopted. The partial framework is
not.

The agent era is here. The foundation is the design. The
design is the discipline. The discipline is the value.
