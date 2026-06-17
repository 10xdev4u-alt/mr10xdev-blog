---
title: "The 3 ways to make an agent feel reliable"
description: "3 ways to make an agent feel reliable: retry, fallback, dead-letter. Each handles failure differently. The tradeoffs, the patterns, the lesson."
date: 2026-02-18
tags: ["reliability", "agents", "production"]
---

3 ways to make an agent feel reliable: retry, fallback,
dead-letter. Each handles failure differently. The tradeoffs,
the patterns, the lesson.

## Pattern 1: Retry

The agent tries the action. The action fails. The agent waits.
The agent tries again. The action succeeds.

**When to use:** the failure is transient. The failure is a
network error, a rate limit, a temporary outage.

**Examples:**
- GitHub API returns 500
- Slack API returns 429
- Network is down

**The math:**
- 1st attempt: 0s
- Wait: 1s
- 2nd attempt: 1s
- Wait: 2s
- 3rd attempt: 3s
- Total: 6s for 3 attempts

**The tradeoff:**
- More retries = more success = more latency
- Fewer retries = less success = less latency
- 3 retries is the sweet spot for most use cases

## Pattern 2: Fallback

The agent tries the primary action. The primary action
fails. The agent tries the secondary action. The secondary
action succeeds.

**When to use:** the failure is permanent. The failure is a
bad input, a missing data, a broken service.

**Examples:**
- Primary: LLM with model A. Fallback: LLM with model B.
- Primary: GitHub API. Fallback: GitLab API.
- Primary: OpenAI. Fallback: Anthropic.

**The math:**
- 1st attempt: model A (0.5s, fails)
- 2nd attempt: model B (0.7s, succeeds)
- Total: 1.2s

**The tradeoff:**
- More fallbacks = more reliability = more cost
- Fewer fallbacks = less reliability = less cost
- 1 fallback is the sweet spot for most use cases

## Pattern 3: Dead-letter

The agent tries the action. The action fails. The agent
gives up. The agent stores the action in a dead-letter
queue. The agent notifies the user.

**When to use:** the failure is unknown. The failure needs
human review. The failure is not recoverable automatically.

**Examples:**
- LLM hallucinates
- Tool returns garbage
- Action would have side effects (don't retry)

**The math:**
- 1st attempt: 0.5s, fails
- Store in DLQ: 0.1s
- Notify: 0.1s
- Total: 0.7s

**The tradeoff:**
- More DLQ = more visibility = more work
- Less DLQ = less visibility = less work
- DLQ is essential for any production system

## The 3 together

The 3 are the reliability. The reliability is the trust. The
trust is the adoption.

| Pattern | What it handles | When to use |
|---|---|---|
| Retry | Transient failure | Network, rate limit |
| Fallback | Permanent failure | Bad input, broken service |
| Dead-letter | Unknown failure | Hallucination, side effects |

The agent that uses all 3 is the agent that's reliable. The
agent that uses 1 is the agent that fails.

## The 80/20

80% of the value comes from:
- Retry (the agent handles transient failure)
- Fallback (the agent handles permanent failure)

20% comes from:
- Dead-letter (the agent handles unknown failure)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each tool call, ask:
- Is the failure transient? (retry)
- Is the failure permanent? (fallback)
- Is the failure unknown? (dead-letter)

The right answer is the right pattern at the right cost.

## The lesson

3 patterns. 1 reliability. 1 lesson: use all 3.

The agent that uses all 3 is the agent that's reliable. The
agent that uses 1 is the agent that fails.

The agent era is here. The reliability is the design. The
design is the discipline. The discipline is the trust.
