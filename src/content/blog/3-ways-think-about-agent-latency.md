---
title: "The 3 ways to think about agent latency (in production)"
description: "3 ways to think about latency: input, thinking, output. Each is a different part of the agent's response time. The framework, the examples, the lesson."
date: 2026-02-08
tags: ["latency", "agents", "production"]
---

3 ways to think about latency: input, thinking, output. Each
is a different part of the agent's response time. The
framework, the examples, the lesson.

## Latency 1: Input

The time from when the event arrives to when the agent
starts processing. The time is the wait.

**Examples:**
- Webhook arrives → 0.5s → agent starts
- Schedule fires → 0s → agent starts
- Manual trigger → 0s → agent starts

**The math:**
- 0.5s for webhook (network + queue)
- 0s for schedule
- 0s for manual

**The tradeoff:**
- More time = more setup = more capability
- Less time = less setup = less capability

## Latency 2: Thinking

The time from when the agent starts to when the agent has a
response. The time is the LLM call.

**Examples:**
- LLM call with 1K tokens → 1s
- LLM call with 10K tokens → 3s
- LLM call with 100K tokens → 10s

**The math:**
- 1s for short prompts
- 3s for medium prompts
- 10s for long prompts

**The tradeoff:**
- More thinking = more capability = more cost
- Less thinking = less capability = less cost

## Latency 3: Output

The time from when the agent has a response to when the
user sees it. The time is the action.

**Examples:**
- Tool call → 0.5s
- Post a comment → 0.5s
- Create a PR → 1s

**The math:**
- 0.5s for a simple API call
- 1s for a complex API call

**The tradeoff:**
- More output = more capability = more time
- Less output = less capability = less time

## The 3 together

The 3 are the latency. The latency is the user experience.
The user experience is the value.

| Latency | Time | When to optimize |
|---|---|---|
| Input | 0-0.5s | When the agent is reactive |
| Thinking | 1-10s | When the agent is complex |
| Output | 0.5-1s | When the agent does a lot |

The agent that optimizes all 3 is the agent that's fast. The
agent that optimizes 1 is the agent that's slow.

## The 80/20

80% of the value comes from:
- Thinking (the agent is the LLM call)
- Output (the agent is the action)

20% comes from:
- Input (the agent is the wait)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the agent reactive? (optimize input)
- Is the agent complex? (optimize thinking)
- Is the agent action-heavy? (optimize output)

The right answer is the right latency at the right cost.

## The lesson

3 latencies. 1 agent. 1 lesson: optimize all 3.

The agent that optimizes all 3 is the fast agent. The agent
that optimizes 1 is the slow agent. The fast agent is
adopted. The slow agent is not.

The agent era is here. The latency is the design. The
design is the discipline. The discipline is the speed.
