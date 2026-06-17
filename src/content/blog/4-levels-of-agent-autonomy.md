---
title: "The 4 levels of agent autonomy"
description: "Agents operate at 4 levels of autonomy: assistant, collaborator, partner, principal. Each has different boundaries, different expectations, different risks. Where does your agent fit?"
date: 2026-04-19
tags: ["agents", "autonomy", "design"]
---

Agents operate at 4 levels of autonomy: assistant, collaborator,
partner, principal. Each has different boundaries, different
expectations, different risks. Where does your agent fit?

## Level 1: Assistant

The agent is a tool. The user invokes it. The agent does the
task. The user reviews the result.

**Examples:**
- An IDE autocomplete
- A code review assistant that suggests changes
- A doc search that returns snippets
- A calculator that returns a number

**Boundaries:**
- The agent acts only when invoked
- The user is in control
- The agent's output is a suggestion

**Expectations:**
- The user expects to use the agent multiple times
- The user expects the agent to be fast
- The user expects the agent to be correct (but tolerates mistakes)

**Risks:**
- Low. The agent can't do anything the user didn't ask.

**Permission model:**
- "I'll do what you ask, exactly how you ask."

## Level 2: Collaborator

The agent is a partner. The user delegates a task. The agent
does the task and reports back. The user reviews the result and
gives feedback.

**Examples:**
- A coding agent that writes a function from a spec
- A research agent that produces a report
- A triage agent that labels issues
- A doc agent that updates the README

**Boundaries:**
- The agent acts on its own (within the task)
- The user reviews the result
- The agent can use tools

**Expectations:**
- The user expects the agent to do the task end-to-end
- The user expects the agent to be reasonable
- The user expects to be able to override

**Risks:**
- Medium. The agent can make mistakes. The user can correct.

**Permission model:**
- "I'll do what you asked, my way, and report back."

## Level 3: Partner

The agent is a peer. The user and the agent work together. The
agent has its own memory, its own goals, its own opinions. The
user can override, but mostly trusts.

**Examples:**
- A long-running research agent that maintains a knowledge base
- A CI agent that triages issues and opens PRs
- A docs agent that keeps the docs in sync with the code
- A monitoring agent that alerts on anomalies

**Boundaries:**
- The agent acts on its own (within its domain)
- The user can override, but mostly doesn't
- The agent's actions are auditable

**Expectations:**
- The user expects the agent to be consistent
- The user expects the agent to be smart
- The user expects the agent to be honest about its limitations

**Risks:**
- High. The agent can do significant things. The user must trust.

**Permission model:**
- "I'll do what I think is right, in our shared interest. Override
  when you disagree."

## Level 4: Principal

The agent is the actor. The user is the observer. The agent
makes decisions and acts. The user is informed after the fact.

**Examples:**
- A high-frequency trading agent
- A network monitoring agent that responds to incidents
- A scaling agent that adjusts resources based on load
- A security agent that blocks suspicious traffic

**Boundaries:**
- The agent acts autonomously
- The user is informed (but not in the loop)
- The agent's actions are fully auditable

**Expectations:**
- The user expects the agent to be right (most of the time)
- The user expects the agent to be fast
- The user expects the agent to be conservative when uncertain

**Risks:**
- Very high. The agent is acting on the user's behalf. Mistakes
  can be costly.

**Permission model:**
- "I'll act on your behalf. You can audit, but you can't easily
  override."

## The spectrum

The 4 levels are a spectrum, not a discrete choice. Most
agents are somewhere on the spectrum, not at one level.

| Agent | Level | Why |
|---|---|---|
| Calculator | 1 | Just computes |
| Code autocomplete | 1 | Just suggests |
| Coding agent (Cursor) | 2-3 | Writes code, user reviews |
| Triage agent (this blog) | 2 | Labels issues, human reviews |
| Long-running research agent | 3 | Maintains knowledge base |
| HFT trading agent | 4 | Acts without human review |
| Self-driving car | 4 | Acts without human review |

The level determines:
- The permission model
- The approval flow
- The error recovery
- The audit trail

## How to choose the right level

For each agent you build, ask:
- What's the worst case if the agent makes a mistake?
- How often does the agent run?
- How much can the user review per run?
- What's the cost of being slow (waiting for human review)?

The answers determine the level:

| Worst case | Frequency | User review | Level |
|---|---|---|---|
| Annoying | Frequent | Tolerable | 2-3 |
| Expensive | Frequent | Tolerable | 2-3 |
| Catastrophic | Frequent | Tolerable | 2 (with strong approval) |
| Annoying | Rare | Easy | 2-3 |
| Expensive | Rare | Easy | 3-4 |
| Catastrophic | Rare | Easy | 3-4 |
| Annoying | Frequent | Hard | 2-3 |
| Expensive | Frequent | Hard | 3-4 |
| Catastrophic | Frequent | Hard | 4 (with audit) |

The level is a function of the worst case, the frequency, and
the review cost. There's no universal right answer.

## The transition

Agents can move between levels as they get more trustworthy.

- **Start at level 2.** The user reviews every action. Trust
  builds over time.
- **Move to level 3** when the user has reviewed 50+ actions
  without finding a major issue.
- **Move to level 4** when the user has reviewed 500+ actions
  and the agent has a strong audit trail.

The transition is slow. The transition is earned. The
transition is the trust.

## The lesson

4 levels. 4 permission models. 4 risk profiles.

The level is a choice. The choice is constrained by the use
case. The use case determines the worst case, the frequency,
and the review cost. The level is the answer.

The agent era is here. The level is the design. Pick the right
level for your use case. Start conservative. Move up as trust
builds.

The 4 levels are the framework. The framework is the discipline.
The discipline is what makes agents safe.
