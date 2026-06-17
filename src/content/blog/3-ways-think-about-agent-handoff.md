---
title: "The 3 ways to think about agent handoff (in production)"
description: "3 ways to think about handoff: agent-to-agent, agent-to-human, human-to-agent. Each is a different handoff with different tradeoffs. The framework, the examples, the lesson."
date: 2026-01-17
tags: ["handoff", "agents", "production"]
---

3 ways to think about handoff: agent-to-agent, agent-to-human,
human-to-agent. Each is a different handoff with different
tradeoffs. The framework, the examples, the lesson.

## Handoff 1: Agent-to-agent

The agent hands off to another agent. The agent passes the
context. The next agent continues.

**Examples:**
- The triage agent hands off to the bug-investigation agent
- The bug-investigation agent hands off to the fix agent
- The fix agent hands off to the release agent

**When to use:** the workflow is multi-step. The agents are
specialized. The handoff is clear.

**Pros:**
- Specialized (each agent does one thing well)
- Composable (the agents can be combined)
- Testable (each agent is tested independently)

**Cons:**
- Coordination (the agents have to coordinate)
- Latency (the handoff adds latency)
- Failure (the handoff can fail)

## Handoff 2: Agent-to-human

The agent hands off to a human. The agent escalates. The
human takes over.

**Examples:**
- The agent can't decide → escalate to the maintainer
- The agent's action is risky → require human approval
- The agent is stuck → ask the human for help

**When to use:** the agent is stuck. The agent is risky.
The user wants to be in control.

**Pros:**
- Safe (the human is in control)
- Accurate (the human is more accurate)
- Accountable (the human is accountable)

**Cons:**
- Slow (the human has to respond)
- Cost (the human's time is expensive)
- Friction (the human has to be in the loop)

## Handoff 3: Human-to-agent

The human hands off to the agent. The human delegates. The
agent takes over.

**Examples:**
- The maintainer delegates triage to the agent
- The developer delegates doc updates to the agent
- The user delegates release drafting to the agent

**When to use:** the human is busy. The task is
repetitive. The agent can do it.

**Pros:**
- Fast (the agent does it quickly)
- Cheap (the agent is cheaper than the human)
- Scalable (the agent can do many)

**Cons:**
- Risk (the agent can make mistakes)
- Trust (the human has to trust the agent)
- Quality (the agent may not be as good)

## The 3 together

The 3 are the handoff. The handoff is the workflow. The
workflow is the value.

| Handoff | Direction | When to use |
|---|---|---|
| Agent-to-agent | Auto → Auto | Multi-step workflows |
| Agent-to-human | Auto → Human | Risky, stuck |
| Human-to-agent | Human → Auto | Repetitive, busy |

The handoff that matches the use case is the right
handoff.

## The 80/20

80% of the value comes from:
- Agent-to-agent (the workflow is automated)
- Human-to-agent (the human is freed up)

20% comes from:
- Agent-to-human (the agent is safe)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the workflow multi-step? (agent-to-agent)
- Is the task risky? (agent-to-human)
- Is the task repetitive? (human-to-agent)

The right answer is the right handoff at the right cost.

## The lesson

3 handoffs. 1 workflow. 1 lesson: design for the right
one.

The handoff that matches the use case is the right
handoff. The handoff that doesn't match is the wrong
handoff.

The agent era is here. The handoff is the design. The
design is the choice. The choice is the discipline.
