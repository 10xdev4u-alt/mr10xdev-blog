---
title: "The 4 ways to think about agent feedback (in production)"
description: "4 ways to think about feedback: implicit, explicit, binary, granular. Each is a different feedback channel. The framework, the examples, the lesson."
date: 2026-02-02
tags: ["feedback", "agents", "production"]
---

4 ways to think about feedback: implicit, explicit, binary,
granular. Each is a different feedback channel. The
framework, the examples, the lesson.

## Feedback 1: Implicit

The user does something that signals feedback. The user
doesn't say "good" or "bad." The user just acts.

**Examples:**
- The user undoes the agent's action (negative)
- The user re-runs the agent (negative — the first output
  wasn't right)
- The user accepts the agent's action (positive)
- The user runs the agent again (positive — the agent was
  useful)

**When to use:** the user is in a hurry. The user doesn't
have time for explicit feedback. The user wants to be
invisible.

**Pros:**
- No friction (the user doesn't have to do anything)
- Real (the user's behavior is the truth)
- Continuous (every action is feedback)

**Cons:**
- Noisy (the user's behavior is multi-purpose)
- Delayed (the user acts later)
- Unclear (the user might be doing something else)

## Feedback 2: Explicit

The user says "good" or "bad." The user has a button to
click. The user has a form to fill out.

**Examples:**
- 👍 / 👎 reaction on the agent's output
- "Helpful" / "Not helpful" form
- A 5-star rating
- A free-text comment

**When to use:** the user wants to be heard. The user has
time for feedback. The agent wants to learn.

**Pros:**
- Clear (the user says what they mean)
- Actionable (the agent knows what to improve)
- Specific (the user can cite the issue)

**Cons:**
- Friction (the user has to do something)
- Biased (the user only gives extreme feedback)
- Costly (the user has to spend time)

## Feedback 3: Binary

The user gives a yes/no. The user clicks "good" or "bad."
The user doesn't explain.

**Examples:**
- 👍 / 👎 reaction
- Was this helpful? (Yes / No)
- Did this solve your problem? (Yes / No)

**When to use:** the user is busy. The user wants to give
quick feedback. The agent wants to track the trend.

**Pros:**
- Fast (the user clicks in 1 second)
- Simple (the user has only 2 choices)
- Trackable (the data is clean)

**Cons:**
- Lossy (the user can't explain)
- Polarizing (the user can't say "kinda")
- Limited (the user can only say yes/no)

## Feedback 4: Granular

The user gives a detailed rating. The user explains. The
user is specific.

**Examples:**
- 5-star rating
- "What was wrong?" (free text)
- "What could be better?" (free text)
- A survey with 10 questions

**When to use:** the user wants to improve the agent. The
user has time. The agent wants to learn deeply.

**Pros:**
- Detailed (the user can explain)
- Specific (the user can cite the issue)
- Actionable (the agent knows what to fix)

**Cons:**
- Slow (the user has to spend time)
- Biased (only the most-motivated users respond)
- Costly (the data is hard to analyze)

## The 4 channels together

The 4 are the feedback. The feedback is the learning. The
learning is the improvement.

| Channel | Speed | Detail | Cost |
|---|---|---|---|
| Implicit | Fast | Low | None |
| Explicit | Medium | Medium | Low |
| Binary | Fast | Low | Low |
| Granular | Slow | High | High |

The agent that uses all 4 is the agent that learns. The
agent that uses 1 is the agent that doesn't.

## The 80/20

80% of the value comes from:
- Implicit (the user is the truth)
- Binary (the user is the trend)

20% comes from:
- Explicit (the user is the reason)
- Granular (the user is the detail)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the user busy? (implicit)
- Is the user engaged? (explicit)
- Is the user tracked? (binary)
- Is the user motivated? (granular)

The right answer is the right feedback at the right cost.

## The lesson

4 channels. 1 feedback. 1 lesson: use all 4.

The agent that uses all 4 is the agent that learns. The
agent that uses 1 is the agent that doesn't. The agent
that learns is improved. The agent that doesn't is not.

The agent era is here. The feedback is the design. The
design is the discipline. The discipline is the learning.
