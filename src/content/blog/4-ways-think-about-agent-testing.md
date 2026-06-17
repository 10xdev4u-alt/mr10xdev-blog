---
title: "The 4 ways to think about agent testing (in production)"
description: "4 ways to think about agent testing: unit, integration, eval, regression. Each tests a different layer with different cost, different value. The framework, the examples, the lesson."
date: 2026-02-13
tags: ["testing", "agents", "production"]
---

4 ways to think about agent testing: unit, integration, eval,
regression. Each tests a different layer with different cost,
different value. The framework, the examples, the lesson.

## Layer 1: Unit

The agent's components are tested in isolation. Each function
is tested. Each tool is tested. Each validator is tested.

**Examples:**
- "the label validator rejects empty strings"
- "the manifest loader handles missing files"
- "the cost calculator returns 0 for zero tokens"

**When to use:** the component has a clear contract. The
component is pure. The component has no I/O.

**The cost:** fast, cheap, easy to write.

**The value:** catches the easy bugs. The unit tests are
the foundation.

## Layer 2: Integration

The agent's components are tested together. The runner is
tested. The LLM is mocked. The tools are mocked.

**Examples:**
- "the runner builds the right context for an issue.opened
  event"
- "the runner calls the right tool when the model returns a
  tool call"
- "the runner enforces the maxSteps limit"

**When to use:** the components work together. The
components have contracts. The contracts are testable.

**The cost:** medium. Tests are slower, more setup.

**The value:** catches the integration bugs. The integration
tests are the contract.

## Layer 3: Eval

The agent's behavior is tested end-to-end. The LLM is real.
The tools are real. The agent is run on a real input.

**Examples:**
- "given a clear bug report, the agent labels it as bug"
- "given a feature request, the agent labels it as feature"
- "given a question, the agent labels it as question"

**When to use:** the agent has a clear behavior. The
behavior is testable. The behavior is worth testing.

**The cost:** high. Evals are slow, expensive, flaky.

**The value:** catches the behavior bugs. The evals are the
trust.

## Layer 4: Regression

The agent's behavior is tested against past failures. The
agent is run on inputs that broke it before. The agent
should not break on the same input.

**Examples:**
- "given issue #42 (which previously hallucinated), the
  agent labels it correctly"
- "given PR #50 (which previously looped), the agent
  completes in 5 steps"

**When to use:** the agent has had bugs. The bugs are
reproducible. The bugs are worth catching.

**The cost:** medium. Regression tests are cheap to write,
cheap to run.

**The value:** catches the past bugs. The regression tests
are the safety net.

## The 4 layers together

The 4 are the testing. The testing is the quality. The
quality is the trust.

| Layer | What it tests | Cost | Value |
|---|---|---|---|
| Unit | Components | Low | Foundation |
| Integration | Contracts | Medium | Contract |
| Eval | Behavior | High | Trust |
| Regression | Past bugs | Medium | Safety net |

The agent that has all 4 is the agent that's tested. The
agent that has 1 is the agent that's risky.

## The 80/20

80% of the value comes from:
- Unit (the foundation)
- Integration (the contract)

20% comes from:
- Eval (the trust)
- Regression (the safety net)

Focus on the 80% first. Add the 20% as you grow.

## The ratio

A good ratio:
- 70% unit
- 20% integration
- 5% eval
- 5% regression

The ratio depends on the agent. The agent that does critical
work has more eval. The agent that does simple work has more
unit.

## The lesson

4 layers. 1 testing. 1 lesson: invest in all 4.

The agent that invests in all 4 is the tested agent. The
agent that invests in 1 is the risky agent. The tested agent
is trusted. The risky agent is not.

The agent era is here. The testing is the design. The
design is the discipline. The discipline is the quality.
