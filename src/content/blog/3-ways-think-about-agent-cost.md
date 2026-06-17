---
title: "The 3 ways to think about agent cost (in production)"
description: "3 ways to think about cost: input, output, total. Each is a different cost dimension. The framework, the examples, the lesson."
date: 2025-12-09
tags: ["cost", "agents", "production"]
---

3 ways to think about cost: input, output, total. Each is
a different cost dimension. The framework, the examples,
the lesson.

## Cost 1: Input

The input cost is the cost of the LLM input tokens. The
input cost is the prompt cost.

**Examples:**
- "The system prompt is 1K tokens. The user message is
  100 tokens. The input is 1.1K tokens."
- "The input cost is $3/M tokens (Claude Sonnet)."
- "The input cost per run is $0.0033."

**When to use:** the agent has a long prompt. The agent
sends the same context every time. The user wants to
optimize the input.

**Pros:**
- Visible (the input cost is visible)
- Optimizable (the input cost can be cached, reduced)
- Predictable (the input cost is predictable)

**Cons:**
- Volatile (the input cost varies with context)
- Hidden (the input cost can be hidden in the prompt)
- Costly (the input cost is 30-60% of the total)

## Cost 2: Output

The output cost is the cost of the LLM output tokens. The
output cost is the response cost.

**Examples:**
- "The agent's response is 500 tokens."
- "The output cost is $15/M tokens (Claude Sonnet)."
- "The output cost per run is $0.0075."

**When to use:** the agent has a long response. The
agent's response is the value. The user wants to optimize
the output.

**Pros:**
- Visible (the output cost is visible)
- Optimizable (the output cost can be reduced with
  shorter responses)
- Aligned (the output cost is the value)

**Cons:**
- Volatile (the output cost varies with the response)
- Hidden (the output cost can be hidden in the response)
- Costly (the output cost is 40-70% of the total)

## Cost 3: Total

The total cost is the sum of input and output. The total
cost is the per-run cost.

**Examples:**
- "The input is $0.0033. The output is $0.0075. The
  total is $0.0108 per run."
- "1000 runs/day = $10.8/day = $324/month."

**When to use:** the user is planning. The user has a
budget. The user wants to know the total.

**Pros:**
- Clear (the total cost is clear)
- Plannable (the total cost is plannable)
- Budgetable (the total cost is budgetable)

**Cons:**
- Variable (the total cost varies with usage)
- Hidden (the total cost can be hidden in retries)
- Risk (the total cost can exceed the budget)

## The 3 together

The 3 are the cost. The cost is the constraint. The
constraint is the design.

| Cost | What it covers | % of total |
|---|---|---|
| Input | The prompt | 30-60% |
| Output | The response | 40-70% |
| Total | The run | 100% |

The cost that matches the optimization is the right cost.

## The 80/20

80% of the value comes from:
- Input (the prompt is optimized)
- Output (the response is optimized)

20% comes from:
- Total (the run is budgeted)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the prompt long? (input)
- Is the response long? (output)
- Is the budget tight? (total)

The right answer is the right cost at the right
optimization.

## The lesson

3 costs. 1 cost model. 1 lesson: optimize all 3.

The cost that optimizes all 3 is the optimized cost. The
cost that optimizes 1 is the partial cost. The optimized
cost is profitable. The partial cost is not.

The agent era is here. The cost is the design. The
design is the choice. The choice is the discipline.
