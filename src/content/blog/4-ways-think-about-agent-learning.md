---
title: "The 4 ways to think about agent learning (in production)"
description: "4 ways to think about learning: feedback, memory, examples, retries. Each is a different learning lever. The framework, the examples, the lesson."
date: 2026-01-01
tags: ["learning", "agents", "production"]
---

4 ways to think about learning: feedback, memory, examples,
retries. Each is a different learning lever. The framework,
the examples, the lesson.

## Learning 1: Feedback

The user gives feedback. The agent learns. The agent
improves.

**Examples:**
- "That was wrong. The label should be 'bug', not
  'feature'."
- "That was great. The summary was perfect."

**When to use:** the user is engaged. The user has time.
The agent is learning.

**Pros:**
- Direct (the feedback is direct)
- Fast (the agent can learn immediately)
- Personal (the feedback is for the user)

**Cons:**
- Effort (the user has to give feedback)
- Biased (the user only gives extreme feedback)
- Cost (the feedback is in tokens)

## Learning 2: Memory

The agent remembers. The agent uses the memory. The
agent is consistent.

**Examples:**
- "The user prefers short responses."
- "The user is a senior engineer."
- "The project uses TypeScript."

**When to use:** the agent is long-lived. The user is
returning. The agent is personalized.

**Pros:**
- Long-lived (the memory survives)
- Consistent (the memory is applied)
- Personalized (the memory is for the user)

**Cons:**
- Storage (the memory must be stored)
- Retrieval (the memory must be retrieved)
- Cost (the memory is in tokens)

## Learning 3: Examples

The agent learns from examples. The agent uses the
examples. The agent is guided.

**Examples:**
- "Example 1: 'App crashes on login' → label: bug"
- "Example 2: 'Add dark mode' → label: feature"
- "Example 3: 'How do I install?' → label: question"

**When to use:** the agent is new. The user wants to
guide. The agent is specialized.

**Pros:**
- Concrete (the examples are concrete)
- Tested (the examples are tested)
- Fast (the examples are in the prompt)

**Cons:**
- Limited (the examples are bounded by context)
- Outdated (the examples can be outdated)
- Cost (the examples are in tokens)

## Learning 4: Retries

The agent retries on failure. The agent learns from
failure. The agent is resilient.

**Examples:**
- "The LLM call failed. Retry with backoff."
- "The tool call failed. Retry with different input."
- "The output is invalid. Retry with different prompt."

**When to use:** the failure is transient. The agent is
resilient. The user wants reliability.

**Pros:**
- Resilient (the agent handles failure)
- Fast (the agent retries quickly)
- Standard (the agent uses standard patterns)

**Cons:**
- Cost (the retries cost money)
- Latency (the retries add latency)
- Risk (the retries can be infinite)

## The 4 together

The 4 are the learning. The learning is the improvement.
The improvement is the value.

| Learning | What it provides | Cost |
|---|---|---|
| Feedback | The user teaches | High |
| Memory | The agent remembers | Medium |
| Examples | The user guides | Low |
| Retries | The agent recovers | Low |

The learning that matches the need is the right learning.

## The 80/20

80% of the value comes from:
- Memory (the agent remembers)
- Examples (the user guides)

20% comes from:
- Feedback (the user teaches)
- Retries (the agent recovers)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the user engaged? (feedback)
- Is the agent long-lived? (memory)
- Is the agent new? (examples)
- Is the agent reliable? (retries)

The right answer is the right learning at the right cost.

## The lesson

4 learnings. 1 learning model. 1 lesson: pick the right
combination.

The learning that matches the need is the right learning.
The learning that doesn't match is the wrong learning.

The agent era is here. The learning is the design. The
design is the choice. The choice is the discipline.
