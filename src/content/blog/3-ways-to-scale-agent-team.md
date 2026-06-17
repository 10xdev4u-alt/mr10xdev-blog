---
title: "The 3 ways to scale an agent team"
description: "3 ways to scale an agent team: horizontal (more agents), vertical (better agents), diagonal (smarter coordination). The tradeoffs, the math, the framework. The scaling is the future."
date: 2026-02-27
tags: ["scaling", "agents", "team"]
---

3 ways to scale an agent team: horizontal (more agents),
vertical (better agents), diagonal (smarter coordination). The
tradeoffs, the math, the framework. The scaling is the future.

## Way 1: Horizontal scaling

Add more agents. Each agent does one thing. The team grows by
adding agents.

**Examples:**
- 1 agent for triage + 1 for docs + 1 for release = 3 agents
- Each agent is independent
- Each agent has its own trigger, tools, memory

**The math:**
- 1 agent: 1x cost, 1x complexity
- 3 agents: 3x cost, 1.5x complexity (shared infrastructure)
- 10 agents: 10x cost, 2x complexity

**The tradeoff:**
- More agents = more coverage = more cost
- More agents = more complexity = more maintenance
- More agents = more failure modes = more risk

**When to use:** the work is naturally parallel. The work
decomposes into independent units.

## Way 2: Vertical scaling

Make each agent better. The same agent handles more cases,
more accurately, more efficiently.

**Examples:**
- The triage agent now handles 10 categories instead of 4
- The doc agent now updates the API reference automatically
- The release agent now drafts the changelog AND the blog post

**The math:**
- 1 better agent: 1x cost, 1x complexity
- 1 better agent with more memory: 1.5x cost, 1.2x complexity
- 1 better agent with more tools: 1.5x cost, 1.3x complexity

**The tradeoff:**
- Better agents = more capability = more cost
- Better agents = more complex = harder to debug
- Better agents = more risk (one bad change affects more)

**When to use:** the work is naturally serial. The work
decomposes into sequential steps.

## Way 3: Diagonal scaling

Add coordination between agents. The agents communicate. The
agents hand off. The team has a workflow.

**Examples:**
- The triage agent detects a bug → hands off to the bug-investigation agent
- The bug-investigation agent fixes the bug → hands off to the release agent
- The release agent drafts the changelog → hands off to the docs agent

**The math:**
- 1x cost + 0.5x coordination cost = 1.5x cost
- The coordination adds latency (each handoff takes time)
- The coordination adds complexity (more state, more messages)

**The tradeoff:**
- More coordination = more capability = more cost
- More coordination = more latency (each handoff is overhead)
- More coordination = more failure modes (handoff can fail)

**When to use:** the work is naturally complex. The work
decomposes into dependent units.

## The 3 together

The 3 ways are the scaling. The scaling is the future.

| Way | What it adds | Tradeoff |
|---|---|---|
| Horizontal | More agents | More cost, more complexity |
| Vertical | Better agents | More cost, harder to debug |
| Diagonal | Coordination | More latency, more failure modes |

The team that uses all 3 is the team that scales. The team
that uses 1 is the team that plateaus.

## The 80/20

80% of the value comes from:
- Horizontal scaling (more agents, more coverage)
- Vertical scaling (better agents, more accuracy)

20% comes from:
- Diagonal scaling (coordination, hand-offs)

Focus on the 80% first. Add the 20% as you grow.

## The lesson

3 ways. 1 scaling. 1 lesson: pick the right combination.

The agent that uses the right combination is the agent that
scales. The agent that uses the wrong combination is the agent
that plateaus.

The agent era is here. The scaling is the design. The
design is the choice. The choice is the discipline.
