---
title: "The 3 ways to think about agent prompts (in production)"
description: "3 ways to think about prompts: zero-shot, few-shot, chain-of-thought. Each is a different prompt strategy. The framework, the examples, the lesson."
date: 2025-12-30
tags: ["prompts", "agents", "production"]
---

3 ways to think about prompts: zero-shot, few-shot,
chain-of-thought. Each is a different prompt strategy. The
framework, the examples, the lesson.

## Strategy 1: Zero-shot

The prompt has no examples. The model relies on its
training. The model is the truth.

**Examples:**
- "Label this issue as bug, feature, question, or
  duplicate."
- "Summarize this PR in 1 sentence."

**When to use:** the task is simple. The model is good.
The user wants fast.

**Pros:**
- Fast (the prompt is short)
- Cheap (the prompt is in few tokens)
- Standard (the prompt is well-defined)

**Cons:**
- Limited (the model is on its own)
- Inconsistent (the model varies)
- Hard to debug (no examples to compare to)

## Strategy 2: Few-shot

The prompt has 3-5 examples. The model uses the examples.
The examples are the truth.

**Examples:**
- "Example 1: 'crash on login' → bug"
- "Example 2: 'add dark mode' → feature"
- "Example 3: 'how to install' → question"
- "Now label: 'fix typo' → ?"

**When to use:** the task is non-trivial. The model needs
guidance. The user wants accuracy.

**Pros:**
- Accurate (the model has examples)
- Consistent (the model has a pattern)
- Testable (the examples are testable)

**Cons:**
- Cost (the examples are in tokens)
- Limited (the examples are bounded by context)
- Outdated (the examples can be outdated)

## Strategy 3: Chain-of-thought

The prompt asks the model to think step by step. The
model produces reasoning. The model is the truth.

**Examples:**
- "Step 1: Identify the key signal in the issue."
- "Step 2: Compare to past similar issues."
- "Step 3: Apply the label."
- "Think step by step. Output your reasoning, then the
  label."

**When to use:** the task is complex. The model needs to
reason. The user wants transparency.

**Pros:**
- Accurate (the model thinks)
- Transparent (the model shows its work)
- Powerful (the model can reason)

**Cons:**
- Cost (the reasoning is in tokens)
- Latency (the reasoning takes time)
- Complexity (the prompt is complex)

## The 3 together

The 3 are the strategies. The strategies are the levers.
The levers are the value.

| Strategy | Cost | Accuracy | Best for |
|---|---|---|---|
| Zero-shot | Low | Low | Simple |
| Few-shot | Medium | Medium | Non-trivial |
| Chain-of-thought | High | High | Complex |

The strategy that matches the task is the right strategy.

## The 80/20

80% of the value comes from:
- Zero-shot (the model is good enough)
- Few-shot (the user wants accuracy)

20% comes from:
- Chain-of-thought (the user wants transparency)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each task, ask:
- Is the task simple? (zero-shot)
- Is the task non-trivial? (few-shot)
- Is the task complex? (chain-of-thought)

The right answer is the right strategy at the right cost.

## The lesson

3 strategies. 1 prompt. 1 lesson: pick the right one.

The strategy that matches the task is the right strategy.
The strategy that doesn't match is the wrong strategy.

The agent era is here. The prompt is the design. The
design is the choice. The choice is the discipline.
