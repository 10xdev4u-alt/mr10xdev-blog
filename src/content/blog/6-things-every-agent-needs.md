---
title: "The 6 things every agent project needs"
description: "Every agent project, no matter how small, needs 6 things: a manifest, a memory, tools, a trigger, observability, and an approval flow. The minimum viable agent stack, revisited."
date: 2026-04-29
tags: ["agents", "checklist", "minimum"]
---

Every agent project, no matter how small, needs 6 things: a
manifest, a memory, tools, a trigger, observability, and an
approval flow. The minimum viable agent stack, revisited.

## The 6 things

### 1. A manifest

The agent's config. What events trigger it. What tools it can
use. What model it calls. What limits it operates under. What
permissions it has.

Without a manifest, the agent is a black box. The user doesn't
know what it does, what it can do, or what it should do. The
audit trail is missing.

The manifest is a file. The file is versioned. The file is
reviewable. The file is the contract.

### 2. A memory

The agent needs to remember. Past events, past decisions, past
context. Without memory, the agent is amnesiac — every run is
the first run.

The memory is a directory. The directory is versioned. The
directory is inspectable. The directory is the history.

The memory has layers:
- **Episodic:** what happened, when, why
- **Semantic:** what's true about the world
- **Procedural:** how to do things
- **Working:** what's happening right now

Pick the layers you need. Start with episodic + semantic. Add
the others as you go.

### 3. Tools

The agent needs to act. Tools are the actions. `post_comment`,
`add_labels`, `create_pr`, `send_email`, `query_db`. The tools
are the API.

The tools are explicit. The agent can only do what the tools
allow. The tools are the contract.

The tools are tested. Each tool has at least one test. The
tests are the spec.

### 4. A trigger

The agent needs to wake up. Webhooks, cron, message queue, manual
button. The trigger is the entry point.

The trigger is reliable. The agent should be idempotent. If the
same trigger fires twice, the agent should handle it gracefully.

The trigger is observable. Every trigger is logged. Every
trigger has a delivery ID. The user can see what triggered what.

### 5. Observability

The agent needs to be debugged. When it fails (and it will),
the user needs to know why. The traces, the logs, the metrics,
the costs.

The observability is always on. Every run is traced. Every
error is captured. Every cost is recorded.

The observability is queryable. The user can search for "all
runs that failed in the last week" or "all runs that cost more
than $0.10."

The observability is the truth. The agent's behavior is visible.
The user can see what the agent did and why.

### 6. An approval flow

The agent needs to be gated. Every write action should require
human approval by default. The user can opt out for automated
pipelines, but the default is safe.

The approval flow is configurable. Per-tool, per-permission, per-
action. The user can say "always approve" for read tools, "ask"
for write tools, "never approve" for release tools.

The approval flow is auditable. Every approval (or denial) is
logged. The user can see who approved what when.

The approval flow is the safety net. Without it, the agent can
do anything. With it, the agent can only do what's approved.

## The 6 together

The 6 things compose:
- The **manifest** declares the agent's capabilities
- The **memory** stores the agent's history
- The **tools** are the agent's actions
- The **trigger** wakes the agent up
- The **observability** lets the user see what happened
- The **approval** gates the agent's actions

A project with all 6 is a real agent. A project missing any is
incomplete.

## The MVP

The minimum viable agent has:
- A manifest (10 lines of YAML)
- A memory (1 in-memory store)
- A tool (1 function)
- A trigger (1 webhook)
- Observability (1 logger)
- Approval (1 callback)

That's the MVP. 200-500 lines of code. A weekend.

The full agent has:
- A manifest (50+ lines, validated, versioned)
- A memory (3 backends, episodic + semantic)
- A tool library (10+ tools)
- A trigger (5+ event sources)
- Observability (traces, logs, metrics, costs)
- Approval (per-tool, per-permission, per-action)

That's the full stack. 5,000+ lines. A quarter.

The difference is the polish. The MVP is enough to prove the
loop. The full stack is enough for production.

## The 80/20

80% of the value comes from:
- The manifest (declarative config)
- The trigger (wake up the agent)
- The approval (safety)
- The observability (debugging)

20% of the value comes from:
- The memory (smarter over time)
- The tools (broader capabilities)

Ship the 80% first. Add the 20% as you grow.

## The checklist

Before you ship, check:
- [ ] Manifest is a file in the repo
- [ ] Memory is a directory in the repo
- [ ] Tools are explicitly declared
- [ ] Trigger is reliable and observable
- [ ] Observability is always on
- [ ] Approval is the default for write tools

If you can check all 6, you have a real agent. If any is missing,
you have a toy.

## The lesson

Every agent project needs 6 things. The 6 are not optional. The
6 are not negotiable. The 6 are the floor.

The MVP has all 6. The full stack has all 6 + more. The pattern
is the same.

If you're starting an agent project, start with the 6. Add the
20% as you grow. The 6 are enough for 80% of use cases.

The agent era is here. The 6 are the foundation. Build on them.
