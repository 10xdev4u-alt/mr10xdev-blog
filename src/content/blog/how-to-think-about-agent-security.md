---
title: "How to think about agent security"
description: "Agent security is not the same as app security. The 4 differences: the LLM is untrusted, the inputs are untrusted, the actions are powerful, the memory is shared. How to think about each."
date: 2026-03-22
tags: ["security", "agents", "thinking"]
---

Agent security is not the same as app security. The 4
differences: the LLM is untrusted, the inputs are untrusted, the
actions are powerful, the memory is shared. How to think about
each.

## Difference 1: The LLM is untrusted

In a traditional app, the code is the trust boundary. If the
code is correct, the app is correct.

In an agent, the LLM is part of the trust boundary. The LLM
can be tricked. The LLM can be biased. The LLM can hallucinate.

The mitigation: treat the LLM as untrusted. The LLM is a
smart intern, not a trusted employee. The intern's output is
reviewed. The intern's actions are gated.

## Difference 2: The inputs are untrusted

In a traditional app, the inputs come from authenticated users.
The inputs are validated at the boundary.

In an agent, the inputs come from many sources: the trigger
event, the user, the memory, the tools, the LLM itself. Each
source can be untrusted. Each source can be malicious.

The mitigation: validate at every boundary. The user input is
validated before it reaches the LLM. The tool output is
validated before it reaches the next step. The memory is
validated before it's used.

## Difference 3: The actions are powerful

In a traditional app, the actions are CRUD operations. The
user can undo them. The blast radius is small.

In an agent, the actions are powerful: post to GitHub, merge
PRs, send emails, modify databases. Each action is hard to
undo. Each action has a large blast radius.

The mitigation: gate every action. The default is approval.
The user reviews the action before it happens. The agent can
opt out for trusted actions, but the default is safe.

## Difference 4: The memory is shared

In a traditional app, the state is per-user. The state is
isolated. The user can't affect other users.

In an agent, the memory is shared. The agent's memory is
shared across all runs. The user can write to the memory. The
memory can affect future runs.

The mitigation: scope the memory. The user-scoped memory is
isolated per user. The agent-scoped memory is shared but
audited. The memory is validated on every read.

## The 4 together

The 4 differences compose. The 4 are the source of the
agent's security challenges.

| Difference | Mitigation |
|---|---|
| LLM is untrusted | Treat as smart intern, gate actions |
| Inputs are untrusted | Validate at every boundary |
| Actions are powerful | Default to approval |
| Memory is shared | Scope the memory, audit reads |

The agent that handles all 4 is secure. The agent that misses
any is vulnerable.

## The 80/20

80% of the value comes from:
- Gate every action (approval flow)
- Validate at every boundary (Zod schemas)

20% comes from:
- Scope the memory
- Audit the reads

Focus on the 80% first. Add the 20% as you grow.

## The mental model

When designing an agent, ask:
- What can the LLM do wrong? (untrusted)
- What inputs come from where? (untrusted)
- What actions can the agent take? (powerful)
- What can the memory contain? (shared)

For each "wrong" or "powerful" or "shared", apply the
mitigation. The agent that mitigates each is secure.

## The lesson

4 differences. 1 mental model. 1 lesson: think about security
differently.

The agent is not the app. The agent is the LLM + the tools +
the memory + the actions. Each is a security surface. Each
needs a mitigation.

The agent era is here. The security is the same. The
mitigations are the same. The discipline is the same.
