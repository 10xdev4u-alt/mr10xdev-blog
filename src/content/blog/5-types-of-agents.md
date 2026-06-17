---
title: "The 5 types of AI agents you can build in 2026"
description: "A taxonomy of AI agents: reflex, goal-based, utility-based, learning, and hierarchical. What they do, when to build one, what tools you need. The shape of the agent landscape."
date: 2026-05-30
tags: ["ai", "agents", "taxonomy"]
---

Not all AI agents are the same. After 3 years of building and
studying them, I've landed on a 5-type taxonomy. Each type has
different use cases, different tools, different risks.

## 1. Reflex agents

**What they do:** React to a trigger, run a fixed workflow. No
learning, no planning.

**Example:** A GitHub bot that labels new issues with a regex match.
The "agent" is a 10-line Python script. The "AI" is one LLM call
to classify the issue.

**When to build:**
- The task is well-defined
- The output is deterministic
- The user wants predictable behavior

**Tools you need:**
- A trigger (webhook, cron, manual)
- An LLM call (optional)
- A way to act (post comment, open PR, etc.)

**Risk:** Low. The agent can't surprise you because it has no
agency.

## 2. Goal-based agents

**What they do:** Take a goal, plan a sequence of actions, execute
them. The plan can adapt to intermediate results.

**Example:** A research agent that takes "compare Husk to LangChain"
and produces a report. The agent plans the steps (search web, read
docs, compare features, write report) and executes them.

**When to build:**
- The task is open-ended
- The user wants a result, not a script
- The plan is non-trivial (more than 3-4 steps)

**Tools you need:**
- A planning LLM (or a planner that calls an LLM)
- Tool calls for actions
- A way to evaluate the result
- A way to replan if the result is bad

**Risk:** Medium. The agent can produce unexpected outputs. Needs
approval for write actions.

## 3. Utility-based agents

**What they do:** Optimize a utility function. They explore the
action space to maximize the function.

**Example:** A trading agent that buys/sells stocks to maximize
Sharpe ratio. The agent has a utility function (e.g., risk-adjusted
return) and explores actions to maximize it.

**When to build:**
- The task is well-defined but the solution space is large
- You can define a clear utility function
- The agent can fail without catastrophic consequences

**Tools you need:**
- A simulator (or live environment)
- A utility function
- A search algorithm (MCTS, evolutionary, etc.)
- A way to backtest

**Risk:** High. The agent can find adversarial solutions to the
utility function. ("Reward hacking" — e.g., the trading agent
takes excessive risk because the utility function doesn't
penalize variance enough.)

## 4. Learning agents

**What they do:** Improve over time based on feedback. They have a
performance element that updates based on what worked and what
didn't.

**Example:** A code-review agent that gets better at spotting bugs
because each PR is labeled "bug" or "no bug" by the human reviewer.
The agent updates its model based on the feedback.

**When to build:**
- The task has feedback signals
- The agent can be retrained
- The user accepts that the agent is changing

**Tools you need:**
- A feedback mechanism (rating, label, etc.)
- A way to update the agent (retrain, prompt edit, etc.)
- A way to evaluate the new version

**Risk:** Medium. The agent might learn the wrong thing. Needs
monitoring.

## 5. Hierarchical agents

**What they do:** Coordinate multiple sub-agents. A manager agent
delegates to specialist agents, which may delegate further.

**Example:** A "build me a SaaS" agent that has sub-agents for
frontend, backend, database, deployment. Each sub-agent has its own
tools and memory.

**When to build:**
- The task is too large for one agent
- The task decomposes naturally
- The user wants a "team of agents" instead of one

**Tools you need:**
- A coordination mechanism (planner, message bus)
- Multiple sub-agents with clear roles
- A way to combine sub-agent results
- Memory at each level

**Risk:** High. The agent's emergent behavior is hard to predict.
The agent can do unexpected things across sub-agents.

## Which type to build

| Use case | Type |
|---|---|
| Auto-label issues | Reflex |
| Compare two libraries | Goal-based |
| Optimize a trading strategy | Utility-based |
| Get better at code review | Learning |
| Build a complete app | Hierarchical |

The 80% of agent use cases are reflex or goal-based. The other
20% is utility-based, learning, or hierarchical.

## What I ship

Husk is a goal-based agent framework. It supports reflex use cases
(single-step agents with no tool calls) but the core is the
multi-step goal-based loop.

For hierarchical use cases, you can compose multiple Husk agents
manually. For learning, you can update the manifest as feedback
comes in.

I don't ship utility-based agents because the reward hacking is
too risky for most use cases. I don't ship learning agents because
the implementation complexity isn't worth it for the marginal
improvement.

## The future

The next 2 years will see:
- **More reflex agents.** Every SaaS will have one. The
  marginal cost is near zero.
- **Better goal-based agents.** The "do this task" agent will
  become as common as "send this email."
- **Some learning agents.** Few use cases need them, but those
  that do will benefit enormously.
- **Fewer utility-based agents.** The risk is too high; the
  reward is too unpredictable.
- **Hierarchical agents will plateau.** The coordination overhead
  exceeds the benefit for most tasks.

The "AGI agent that can do anything" is a utility-based
hierarchical learning agent. We don't have it. We might never. The
5 types above are what we have, and they're enough for 95% of use
cases.

## What to do

- Pick the simplest type that solves your problem.
- Don't reach for hierarchical when goal-based will do.
- Don't reach for learning when reflex will do.
- The 80% of value is in reflex + goal-based. The 20% is in the
  other three.

Build the simplest agent that works. Iterate. Add complexity only
when you have evidence it's needed.
