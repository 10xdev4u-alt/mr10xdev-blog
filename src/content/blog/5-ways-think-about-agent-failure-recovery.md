---
title: "The 5 ways to think about agent failure recovery (in production)"
description: "5 ways to think about failure recovery: retry, fallback, ignore, escalate, abandon. Each is a different recovery strategy. The framework, the examples, the lesson."
date: 2025-12-13
tags: ["recovery", "agents", "production"]
---

5 ways to think about failure recovery: retry, fallback,
ignore, escalate, abandon. Each is a different recovery
strategy. The framework, the examples, the lesson.

## Strategy 1: Retry

The agent retries on failure. The agent waits. The agent
tries again.

**Examples:**
- "The LLM call failed. Retry with backoff."
- "The tool call failed. Retry with different input."
- "The output is invalid. Retry with different prompt."

**When to use:** the failure is transient. The failure is
a network error, a rate limit, a timeout.

**Pros:**
- Fast (the retry is fast)
- Simple (the retry is simple)
- Standard (the retry is standard)

**Cons:**
- Cost (the retry costs money)
- Latency (the retry adds latency)
- Risk (the retry can be infinite)

## Strategy 2: Fallback

The agent falls back to a simpler approach. The agent
tries the alternative.

**Examples:**
- "Claude failed, fall back to Haiku"
- "GitHub failed, fall back to GitLab"
- "Tool failed, fall back to manual"

**When to use:** the failure is permanent. The failure is
a bad input, a missing data, a broken service.

**Pros:**
- Reliable (the fallback is reliable)
- Resilient (the fallback is resilient)
- Standard (the fallback is standard)

**Cons:**
- Cost (the fallback costs money)
- Latency (the fallback adds latency)
- Risk (the fallback can be wrong)

## Strategy 3: Ignore

The agent ignores the failure. The agent continues. The
failure is not critical.

**Examples:**
- "The comment post failed. Continue without the comment."
- "The label add failed. Continue without the label."
- "The output is invalid. Use a default."

**When to use:** the failure is not critical. The
failure is a non-essential action.

**Pros:**
- Fast (the ignore is fast)
- Simple (the ignore is simple)
- Resilient (the ignore is resilient)

**Cons:**
- Risk (the ignore can lose data)
- Inconsistent (the ignore can be inconsistent)
- Limited (the ignore is limited)

## Strategy 4: Escalate

The agent escalates to a human. The agent asks for help.
The human takes over.

**Examples:**
- "The agent can't decide. Escalate to the maintainer."
- "The agent's action is risky. Escalate to the human."
- "The agent is stuck. Escalate to the human."

**When to use:** the failure is critical. The failure is
a decision the agent can't make.

**Pros:**
- Safe (the human is in control)
- Accurate (the human is more accurate)
- Accountable (the human is accountable)

**Cons:**
- Slow (the human has to respond)
- Cost (the human's time is expensive)
- Friction (the human has to be in the loop)

## Strategy 5: Abandon

The agent abandons the task. The agent gives up. The
agent notifies the user.

**Examples:**
- "The agent can't proceed. Notify the user."
- "The agent has tried 10 times. Notify the user."
- "The agent is out of options. Notify the user."

**When to use:** the failure is unrecoverable. The agent
can't continue. The user needs to know.

**Pros:**
- Clear (the abandon is clear)
- Honest (the abandon is honest)
- Standard (the abandon is standard)

**Cons:**
- Slow (the abandon is slow)
- Cost (the abandon wastes effort)
- Risk (the abandon can lose data)

## The 5 together

The 5 are the strategies. The strategies are the
recovery. The recovery is the resilience.

| Strategy | Speed | Reliability | Best for |
|---|---|---|---|
| Retry | Fast | Medium | Transient |
| Fallback | Fast | High | Permanent |
| Ignore | Fastest | Low | Non-critical |
| Escalate | Slow | Highest | Critical |
| Abandon | Slow | High | Unrecoverable |

The strategy that matches the failure is the right
strategy.

## The 80/20

80% of the value comes from:
- Retry (the failure is transient)
- Fallback (the failure is permanent)

20% comes from:
- Ignore (the failure is non-critical)
- Escalate (the failure is critical)
- Abandon (the failure is unrecoverable)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each failure, ask:
- Is the failure transient? (retry)
- Is the failure permanent? (fallback)
- Is the failure non-critical? (ignore)
- Is the failure critical? (escalate)
- Is the failure unrecoverable? (abandon)

The right answer is the right strategy at the right cost.

## The lesson

5 strategies. 1 recovery. 1 lesson: pick the right one.

The strategy that matches the failure is the right
strategy. The strategy that doesn't match is the wrong
strategy.

The agent era is here. The recovery is the design. The
design is the choice. The choice is the discipline.
