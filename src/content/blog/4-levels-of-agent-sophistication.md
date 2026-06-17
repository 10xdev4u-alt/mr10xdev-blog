---
title: "The 4 levels of agent sophistication"
description: "Agents come in 4 levels of sophistication. The script, the reflex, the conversationalist, the reasoner. Each has different capabilities, different costs, different use cases. The progression and when to level up."
date: 2026-04-05
tags: ["agents", "sophistication", "taxonomy"]
---

Agents come in 4 levels of sophistication. The script, the
reflex, the conversationalist, the reasoner. Each has different
capabilities, different costs, different use cases. The
progression and when to level up.

## Level 1: The script

The agent is a script. It does the same thing every time. No
LLM, no reasoning, no learning.

**Examples:**
- A regex-based labeler
- A cron job that posts a daily summary
- A script that backs up a database
- A CI pipeline that runs tests

**Capabilities:** deterministic, fast, cheap, predictable.

**Cost:** near zero. The cost is the script's runtime.

**When to use:** the task is well-defined and never changes.

## Level 2: The reflex

The agent is a reflex. It uses an LLM to classify or extract,
then takes a fixed action. No multi-step reasoning.

**Examples:**
- An issue triager that uses an LLM to classify, then applies a
  label
- A spam filter that uses an LLM to score, then deletes
- A summary generator that uses an LLM to condense, then posts
- A doc classifier that uses an LLM to route, then forwards

**Capabilities:** handles variations, but within a fixed
workflow. The LLM is used for classification, not reasoning.

**Cost:** low. One LLM call per run. ~$0.005-0.03 per run.

**When to use:** the task has clear inputs and clear outputs,
but the inputs vary. The LLM is the variance handler.

## Level 3: The conversationalist

The agent is a conversationalist. It can hold a conversation,
remember context, ask clarifying questions, and respond
contextually.

**Examples:**
- A customer support agent that can chat with the user
- A research agent that asks clarifying questions
- A code refactor agent that discusses the design before
  implementing
- A planning agent that creates a plan and adjusts based on
  feedback

**Capabilities:** multi-turn, context-aware, can ask
clarifying questions, can adjust plan based on feedback.

**Cost:** medium. Multiple LLM calls per run. ~$0.05-0.30 per
run.

**When to use:** the task requires back-and-forth, the user
might not know exactly what they want, the output is iterative.

## Level 4: The reasoner

The agent is a reasoner. It can plan, decompose, execute, and
synthesize. It can handle multi-step problems with no predefined
workflow.

**Examples:**
- A research agent that investigates a topic, gathers sources,
  synthesizes a report
- A coding agent that reads a spec, designs a solution, writes
  code, tests it
- A debugging agent that investigates a bug, hypothesizes
  causes, tests each one, fixes the right one
- A planning agent that breaks down a goal into a plan,
  executes the plan, adjusts based on results

**Capabilities:** multi-step, planning, synthesis, learning
from feedback. Can handle novel problems.

**Cost:** high. Many LLM calls per run. ~$0.30-3.00 per run.

**When to use:** the task is complex, the workflow isn't
predefined, the agent needs to think.

## The progression

The progression is: script → reflex → conversationalist →
reasoner. Each level adds capability and cost.

| Level | Capability | Cost | When to use |
|---|---|---|---|
| 1: Script | Deterministic | $0 | Well-defined, unchanging |
| 2: Reflex | Variance handler | $0.01 | Variable input, fixed output |
| 3: Conversationalist | Multi-turn | $0.10 | Back-and-forth, iterative |
| 4: Reasoner | Multi-step | $1.00 | Complex, novel, planning |

## The 80/20

80% of use cases are level 1 or 2. The script or the reflex.

20% of use cases are level 3 or 4. The conversationalist or the
reasoner.

If you're building an agent, start at level 1 or 2. The cost is
low. The capability is enough for most tasks. Move to level 3
or 4 only when you have evidence it's needed.

## The level-up signal

When do you move from level 2 to level 3? When the user needs
to ask clarifying questions. The script can't ask. The reflex
can't ask. The conversationalist can.

When do you move from level 3 to level 4? When the task
requires planning. The conversationalist follows the user's
plan. The reasoner makes the plan.

The signals:
- The user has to repeat context → move up
- The agent's output is wrong 20%+ of the time → move up
- The task requires multiple steps that depend on each other →
  move up
- The user wants the agent to "figure it out" → move up

## The cost of moving up

Moving up costs:
- More LLM calls per run (5x for level 3, 20x for level 4)
- More complex prompts (need to handle multi-turn)
- More observability (need to trace multi-step reasoning)
- More testing (need to test multi-step scenarios)
- More maintenance (more code, more bugs)

The cost is real. The benefit is the new capability. The
trade-off is per-use-case.

## The anti-pattern: skipping levels

The anti-pattern is to start at level 4 because "we might need
it." You won't need it. Most use cases are level 1 or 2. The
complexity of level 4 is a tax you pay upfront. The benefit
is for the 20% of use cases that need it.

Start at the lowest level that solves the problem. Move up
only when you have evidence the lower level is insufficient.

## The meta-lesson

4 levels. 1 progression. 1 lesson: start at the bottom.

The agent that starts at the bottom is cheap. The agent that
moves up is responsive. The agent that stays at the top is
wasteful.

The progression is the design. The design is the discipline.
The discipline is what makes the agent cost-effective.
