---
title: "The 3 ways to think about agent data (in production)"
description: "3 ways to think about agent data: inputs, outputs, traces. Each is a different data type with different value. The framework, the examples, the lesson."
date: 2026-01-26
tags: ["data", "agents", "production"]
---

3 ways to think about agent data: inputs, outputs, traces.
Each is a different data type with different value. The
framework, the examples, the lesson.

## Data 1: Inputs

The data the agent reads. The data the agent uses. The
data the agent depends on.

**Examples:**
- The user's question
- The issue body
- The PR title
- The repo's code
- The previous memory

**When to use:** the user wants to know what the agent
sees. The user wants to debug. The user wants to improve.

**Pros:**
- Easy to capture (just log the input)
- Easy to analyze (group by type, count)
- Easy to improve (focus on common inputs)

**Cons:**
- Privacy-sensitive (the input is the user's data)
- Storage-heavy (the input is large)
- Time-sensitive (the input changes over time)

## Data 2: Outputs

The data the agent writes. The data the agent produces.
The data the agent creates.

**Examples:**
- The agent's text response
- The label the agent applied
- The comment the agent posted
- The PR the agent created

**When to use:** the user wants to know what the agent
did. The user wants to audit. The user wants to verify.

**Pros:**
- Easy to capture (just log the output)
- Easy to verify (the output is on GitHub)
- Easy to evaluate (the output is testable)

**Cons:**
- Hard to interpret (the output is unstructured)
- Hard to compare (the output is non-deterministic)
- Hard to revert (the output has side effects)

## Data 3: Traces

The data the agent creates during execution. The data the
agent generates. The data the agent's behavior.

**Examples:**
- The tool calls the agent made
- The LLM calls the agent made
- The decisions the agent made
- The errors the agent hit

**When to use:** the user wants to debug. The user wants
to analyze. The user wants to improve.

**Pros:**
- Detailed (the trace is the full story)
- Reproducible (the trace can be replayed)
- Insightful (the trace reveals the agent's thinking)

**Cons:**
- Storage-heavy (the trace is large)
- Privacy-sensitive (the trace may include PII)
- Complex (the trace is hard to analyze)

## The 3 together

The 3 are the data. The data is the value. The value is
the agent.

| Data | What it answers | Storage | Privacy |
|---|---|---|---|
| Inputs | What did the agent see? | Large | Sensitive |
| Outputs | What did the agent do? | Small | Less sensitive |
| Traces | How did the agent decide? | Large | Sensitive |

The data that matches the question is the right data.

## The 80/20

80% of the value comes from:
- Outputs (the user can verify)
- Traces (the user can debug)

20% comes from:
- Inputs (the user can improve)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Does the user want to verify? (outputs)
- Does the user want to debug? (traces)
- Does the user want to improve? (inputs)

The right answer is the right data at the right cost.

## The lesson

3 datas. 1 value. 1 lesson: capture all 3.

The agent that captures all 3 is the visible agent. The
agent that captures 1 is the invisible agent. The visible
agent is improved. The invisible agent is not.

The agent era is here. The data is the design. The design
is the discipline. The discipline is the value.
