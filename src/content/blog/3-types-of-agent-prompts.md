---
title: "The 3 types of agent prompts (and when to use each)"
description: "3 types of agent prompts: zero-shot, few-shot, and chain-of-thought. Each has different use cases, different cost, different accuracy. The framework for picking the right type."
date: 2026-02-24
tags: ["agents", "prompts", "best-practices"]
---

3 types of agent prompts: zero-shot, few-shot, and chain-of-thought.
Each has different use cases, different cost, different accuracy.
The framework for picking the right type.

## Type 1: Zero-shot

The prompt has no examples. The model relies on its training
data to produce the right output.

**Example:**
```markdown
You are an issue triager. Apply one label: bug, feature,
question, or duplicate.
```

**When to use:** the task is simple. The task is well-defined.
The model has been trained on similar tasks.

**Pros:**
- Cheapest (no examples to send)
- Fastest (no example processing)
- Most flexible (the model has the most freedom)

**Cons:**
- Lowest accuracy (the model has to guess)
- Inconsistent (different inputs → different outputs)
- Hard to debug (no examples to compare to)

## Type 2: Few-shot

The prompt has 3-5 examples. The model uses the examples to
guide its output.

**Example:**
```markdown
You are an issue triager. Apply one label: bug, feature,
question, or duplicate.

Example 1:
- Title: "App crashes on login"
- Label: bug

Example 2:
- Title: "Add dark mode"
- Label: feature

Example 3:
- Title: "How do I install?"
- Label: question
```

**When to use:** the task is non-trivial. The task needs
guidance. The model needs to see the pattern.

**Pros:**
- Higher accuracy (the model has examples)
- More consistent (the model has a pattern)
- Easier to debug (you can compare to examples)

**Cons:**
- More expensive (more tokens)
- Slower (more tokens to process)
- Less flexible (the model is constrained to the pattern)

## Type 3: Chain-of-thought

The prompt asks the model to think step by step. The model
produces a chain of reasoning before the final answer.

**Example:**
```markdown
You are an issue triager. For each issue:

1. First, identify the key signal: is it a bug (broken
   behavior), feature (new request), question (how-to), or
   duplicate (already exists)?
2. Then, search for similar past issues.
3. Finally, apply the label.

Think step by step. Output your reasoning, then the label.
```

**When to use:** the task is complex. The task requires
reasoning. The model needs to think before answering.

**Pros:**
- Highest accuracy (the model thinks)
- Most transparent (the model shows its work)
- Best for hard problems (multi-step reasoning)

**Cons:**
- Most expensive (the most tokens)
- Slowest (the most tokens to process)
- Most complex to design (the chain needs to be right)

## The 3 together

The 3 are the prompt hierarchy. The hierarchy is the
accuracy. The accuracy is the value.

| Type | Tokens | Accuracy | Best for |
|---|---|---|---|
| Zero-shot | Lowest | Lowest | Simple tasks |
| Few-shot | Medium | Medium | Non-trivial tasks |
| Chain-of-thought | Highest | Highest | Complex tasks |

The agent that picks the right type is the agent that has
the right accuracy at the right cost.

## The 80/20

80% of the value comes from:
- Zero-shot (the default)
- Few-shot (for the hard cases)

20% comes from:
- Chain-of-thought (for the hardest cases)

Focus on zero-shot first. Add few-shot for the hard cases.
Add chain-of-thought only when needed.

## The choice

For each task in your agent, ask:
- Is the task simple? (zero-shot)
- Is the task non-trivial? (few-shot)
- Is the task complex? (chain-of-thought)

The right answer is the right cost at the right accuracy.

## The lesson

3 types. 1 hierarchy. 1 lesson: pick the right type.

The agent that picks the right type is the agent that has
the right accuracy at the right cost. The agent that picks
the wrong type is the agent that has the wrong cost or the
wrong accuracy.

The agent era is here. The prompt is the design. The
design is the choice. The choice is the discipline.
