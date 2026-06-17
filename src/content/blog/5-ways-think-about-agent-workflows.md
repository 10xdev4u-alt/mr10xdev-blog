---
title: "The 5 ways to think about agent workflows (in production)"
description: "5 ways to think about workflows: linear, branching, parallel, loop, conditional. Each is a different workflow pattern. The framework, the examples, the lesson."
date: 2025-12-25
tags: ["workflows", "agents", "production"]
---

5 ways to think about workflows: linear, branching,
parallel, loop, conditional. Each is a different workflow
pattern. The framework, the examples, the lesson.

## Pattern 1: Linear

The workflow is linear. The agent does A. Then B. Then C.
The workflow is the truth.

**Examples:**
- "Triage → assign → comment"
- "Read file → edit file → commit file"
- "Fetch data → analyze data → report data"

**When to use:** the workflow is sequential. The steps
are dependent. The user wants simple.

**Pros:**
- Simple (the workflow is easy to follow)
- Testable (each step is testable)
- Standard (the workflow is standard)

**Cons:**
- Slow (the workflow is sequential)
- Brittle (one step can fail the whole)
- Limited (the workflow can't adapt)

## Pattern 2: Branching

The workflow branches. The agent chooses. The workflow is
dynamic.

**Examples:**
- "If the issue is a bug, run the bug agent. Otherwise,
  run the feature agent."
- "If the PR is large, run the senior reviewer. Otherwise,
  run the regular reviewer."

**When to use:** the workflow has choices. The user wants
to dispatch. The agent is smart.

**Pros:**
- Dynamic (the workflow adapts)
- Smart (the agent chooses)
- Flexible (the workflow is configurable)

**Cons:**
- Complex (the workflow is hard to follow)
- Cost (the dispatch is extra work)
- Risk (the dispatch can be wrong)

## Pattern 3: Parallel

The workflow is parallel. The agent does A, B, C at the
same time. The workflow is concurrent.

**Examples:**
- "Fetch data from 3 sources at the same time"
- "Analyze 3 PRs at the same time"
- "Run 3 agents at the same time"

**When to use:** the steps are independent. The user
wants speed. The agent is concurrent.

**Pros:**
- Fast (the workflow is parallel)
- Efficient (the workflow uses all resources)
- Scalable (the workflow scales with cores)

**Cons:**
- Complex (the workflow is hard to debug)
- Cost (the workflow uses more resources)
- Risk (the workflow can have race conditions)

## Pattern 4: Loop

The workflow loops. The agent does A. Then B. Then back
to A. The workflow is iterative.

**Examples:**
- "Read file → edit file → read file → edit file"
- "Generate → test → generate → test"
- "Fetch → analyze → fetch → analyze"

**When to use:** the workflow is iterative. The user
wants to refine. The agent is convergent.

**Pros:**
- Convergent (the workflow converges)
- Refining (the workflow refines)
- Iterative (the workflow is iterative)

**Cons:**
- Slow (the workflow can loop forever)
- Cost (the workflow can run away)
- Risk (the workflow can diverge)

## Pattern 5: Conditional

The workflow is conditional. The agent does A only if X.
The workflow is conditional.

**Examples:**
- "If the user is a maintainer, auto-merge. Otherwise,
  request review."
- "If the test fails, run the agent again. Otherwise,
  post a success comment."

**When to use:** the workflow has conditions. The user
wants to control. The agent is rule-based.

**Pros:**
- Controlled (the workflow is controlled)
- Rule-based (the workflow is rule-based)
- Auditable (the rules are the audit)

**Cons:**
- Rigid (the workflow is rigid)
- Brittle (the rules can be wrong)
- Limited (the workflow can't adapt)

## The 5 together

The 5 are the patterns. The patterns are the workflows.
The workflows are the value.

| Pattern | Complexity | Speed | Best for |
|---|---|---|---|
| Linear | Low | Slow | Sequential |
| Branching | Medium | Medium | Dynamic |
| Parallel | High | Fast | Independent |
| Loop | Medium | Slow | Iterative |
| Conditional | Low | Fast | Rule-based |

The pattern that matches the need is the right pattern.

## The 80/20

80% of the value comes from:
- Linear (the workflow is simple)
- Conditional (the workflow is controlled)

20% comes from:
- Branching (the workflow is dynamic)
- Parallel (the workflow is fast)
- Loop (the workflow is iterative)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each workflow, ask:
- Is the workflow sequential? (linear)
- Is the workflow dynamic? (branching)
- Is the workflow independent? (parallel)
- Is the workflow iterative? (loop)
- Is the workflow rule-based? (conditional)

The right answer is the right pattern at the right
complexity.

## The lesson

5 patterns. 1 workflow. 1 lesson: pick the right one.

The pattern that matches the need is the right pattern.
The pattern that doesn't match is the wrong pattern.

The agent era is here. The workflow is the design. The
design is the choice. The choice is the discipline.
