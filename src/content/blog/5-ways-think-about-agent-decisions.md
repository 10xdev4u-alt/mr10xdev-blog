---
title: "The 5 ways to think about agent decisions (in production)"
description: "5 ways to think about decisions: explicit, implicit, auto, manual, escalated. Each is a different decision model. The framework, the examples, the lesson."
date: 2026-01-09
tags: ["decisions", "agents", "production"]
---

5 ways to think about decisions: explicit, implicit, auto,
manual, escalated. Each is a different decision model. The
framework, the examples, the lesson.

## Decision 1: Explicit

The user makes the decision. The user clicks the button.
The user is in control.

**Examples:**
- "Do you want to merge this PR?" — user clicks yes/no
- "Which label do you want?" — user picks from a list
- "Should I close this issue?" — user clicks yes/no

**When to use:** the decision is risky. The user wants to
be in control. The user has the context.

**Pros:**
- Safe (the user is in control)
- Accurate (the user has the context)
- Accountable (the user is accountable)

**Cons:**
- Slow (the user has to decide)
- Cost (the user's time is expensive)
- Friction (the user has to be in the loop)

## Decision 2: Implicit

The agent decides based on context. The agent uses rules.
The agent is policy-driven.

**Examples:**
- "If the issue has 'crash' in the title, label as bug"
- "If the PR is from a contributor, auto-merge"
- "If the comment is from a maintainer, auto-respond"

**When to use:** the decision is clear. The user has
defined the policy. The agent is fast.

**Pros:**
- Fast (the agent decides in milliseconds)
- Consistent (the agent applies the same rule)
- Auditable (the rule is the audit log)

**Cons:**
- Rigid (the rule can't be flexible)
- Brittle (the rule can be wrong)
- Maintenance (the rule needs to be updated)

## Decision 3: Auto

The agent decides with the LLM. The agent reasons. The
agent is autonomous.

**Examples:**
- "Label this issue based on the title and body"
- "Draft a release note for this PR"
- "Summarize this comment thread"

**When to use:** the decision is fuzzy. The user trusts
the agent. The agent is good.

**Pros:**
- Flexible (the agent can handle fuzzy cases)
- Smart (the agent uses the LLM)
- Fast (the agent decides in seconds)

**Cons:**
- Risky (the agent can be wrong)
- Unpredictable (the agent's decision varies)
- Cost (the LLM call costs money)

## Decision 4: Manual

The human decides. The agent doesn't. The human is in
control.

**Examples:**
- "I'll review the PR myself"
- "I'll close the issue myself"
- "I'll draft the release note myself"

**When to use:** the decision is critical. The user wants
to be in control. The agent is not trusted.

**Pros:**
- Safe (the human is in control)
- Accurate (the human is smart)
- Accountable (the human is accountable)

**Cons:**
- Slow (the human has to do it)
- Cost (the human's time is expensive)
- Friction (the human is in the loop)

## Decision 5: Escalated

The agent decides, then escalates. The agent does the
easy part. The human does the hard part.

**Examples:**
- "The agent labeled it as bug. The maintainer reviews
  the label."
- "The agent drafted the release. The maintainer
  reviews the draft."
- "The agent created the PR. The maintainer reviews the
  PR."

**When to use:** the decision is mostly clear but needs
review. The agent is good. The human wants to verify.

**Pros:**
- Balanced (the agent does the easy part, the human does
  the hard part)
- Fast (the agent does most of the work)
- Safe (the human reviews the critical part)

**Cons:**
- Complex (the workflow is multi-step)
- Latency (the human review takes time)
- Cost (the agent + human both cost)

## The 5 together

The 5 are the decisions. The decisions are the workflow.
The workflow is the value.

| Decision | Speed | Safety | Best for |
|---|---|---|---|
| Explicit | Slow | High | Risky |
| Implicit | Fast | Medium | Clear rules |
| Auto | Fast | Low | Fuzzy cases |
| Manual | Slow | High | Critical |
| Escalated | Medium | High | Mostly clear |

The decision that matches the case is the right decision.

## The 80/20

80% of the value comes from:
- Implicit (the agent is fast)
- Auto (the agent is smart)

20% comes from:
- Explicit (the user is in control)
- Manual (the user is critical)
- Escalated (the user verifies)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each decision, ask:
- Is the decision clear? (implicit)
- Is the decision fuzzy? (auto)
- Is the decision risky? (explicit, escalated)
- Is the decision critical? (manual)

The right answer is the right decision at the right cost.

## The lesson

5 decisions. 1 decision model. 1 lesson: pick the right
one.

The decision that matches the case is the right decision.
The decision that doesn't match is the wrong decision.

The agent era is here. The decision is the design. The
design is the choice. The choice is the discipline.
