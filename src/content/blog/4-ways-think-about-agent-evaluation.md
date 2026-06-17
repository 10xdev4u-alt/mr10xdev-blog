---
title: "The 4 ways to think about agent evaluation (in production)"
description: "4 ways to think about evaluation: unit, integration, eval, A/B. Each is a different evaluation method. The framework, the examples, the lesson."
date: 2025-12-17
tags: ["evaluation", "agents", "production"]
---

4 ways to think about evaluation: unit, integration, eval,
A/B. Each is a different evaluation method. The framework,
the examples, the lesson.

## Method 1: Unit

The agent is tested in isolation. Each function is
tested. Each tool is tested.

**Examples:**
- "the manifest loader handles missing files"
- "the cost calculator returns 0 for zero tokens"
- "the label validator rejects empty strings"

**When to use:** the function is testable. The function
is pure. The function is fast.

**Pros:**
- Fast (the unit is fast)
- Cheap (the unit is cheap)
- Standard (the unit is standard)

**Cons:**
- Shallow (the unit is shallow)
- Mocked (the unit is mocked)
- Limited (the unit is one function)

## Method 2: Integration

The agent is tested with mocks. The LLM is mocked. The
tools are mocked.

**Examples:**
- "the runner calls the right tool when the model returns
  a tool call"
- "the runner enforces the maxSteps limit"
- "the runner builds the right context"

**When to use:** the function has dependencies. The
dependencies are mockable. The function is testable.

**Pros:**
- Realistic (the integration is realistic)
- Fast (the integration is fast)
- Comprehensive (the integration is comprehensive)

**Cons:**
- Mocked (the integration is mocked)
- Brittle (the integration is brittle)
- Limited (the integration is one path)

## Method 3: Eval

The agent is tested end-to-end. The LLM is real. The
tools are real. The agent runs.

**Examples:**
- "given a clear bug report, the agent labels it as bug"
- "given a feature request, the agent drafts a release
  note"
- "given a question, the agent responds helpfully"

**When to use:** the agent is ready. The user wants to
verify. The agent is critical.

**Pros:**
- Real (the eval is real)
- Quality (the eval measures quality)
- Trust (the eval builds trust)

**Cons:**
- Slow (the eval is slow)
- Cost (the eval costs money)
- Flaky (the eval can be flaky)

## Method 4: A/B

The agent is tested against the baseline. The new agent
is compared to the old agent. The winner is chosen.

**Examples:**
- "Agent v1 vs Agent v2: which labels more accurately?"
- "Agent v1 vs Agent v2: which is faster?"
- "Agent v1 vs Agent v2: which is cheaper?"

**When to use:** the user is making a decision. The
user wants to compare. The user is data-driven.

**Pros:**
- Comparative (the A/B is comparative)
- Real (the A/B is real)
- Data-driven (the A/B is data-driven)

**Cons:**
- Complex (the A/B is complex)
- Cost (the A/B runs two versions)
- Time (the A/B takes time)

## The 4 together

The 4 are the methods. The methods are the evaluation.
The evaluation is the quality.

| Method | Speed | Realism | Best for |
|---|---|---|---|
| Unit | Fast | Low | Components |
| Integration | Fast | Medium | Contracts |
| Eval | Slow | High | Quality |
| A/B | Slow | Highest | Decisions |

The method that matches the need is the right method.

## The 80/20

80% of the value comes from:
- Unit (the components are right)
- Integration (the contracts are right)

20% comes from:
- Eval (the quality is right)
- A/B (the decision is right)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the component testable? (unit)
- Is the contract testable? (integration)
- Is the quality measurable? (eval)
- Is the decision data-driven? (A/B)

The right answer is the right method at the right cost.

## The lesson

4 methods. 1 evaluation. 1 lesson: use all 4.

The evaluation that uses all 4 is the complete evaluation.
The evaluation that uses 1 is the partial evaluation. The
complete evaluation is trusted. The partial evaluation is
not.

The agent era is here. The evaluation is the design. The
design is the discipline. The discipline is the quality.
