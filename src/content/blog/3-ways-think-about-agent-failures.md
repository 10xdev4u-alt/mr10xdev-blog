---
title: "The 3 ways to think about agent failures (in production)"
description: "3 ways to think about agent failures: the hallucination, the wrong tool, the infinite loop. Each is a different failure mode with a different fix. The framework, the examples, the lesson."
date: 2026-02-14
tags: ["failures", "agents", "production"]
---

3 ways to think about agent failures: the hallucination, the
wrong tool, the infinite loop. Each is a different failure
mode with a different fix. The framework, the examples, the
lesson.

## Failure 1: The hallucination

The agent says something that's not true. The agent makes up
a fact. The agent invents a file. The agent is confident.

**Example:**
> The bug is in `src/auth/login.ts` at line 42. (But the file
> doesn't exist.)

**Why it happens:** the LLM is trained to be confident. The
LLM is trained to produce output. The LLM doesn't know what
it doesn't know.

**How to detect:**
- Compare the output to the actual data
- Use a tool to verify (read the file, check the issue)
- Add a "confidence" field to the output

**How to fix:**
- Give the agent tools to verify its claims
- Use chain-of-thought to expose the reasoning
- Add a "I don't know" fallback

**The cost:** the user is misled. The user wastes time. The
trust is broken.

## Failure 2: The wrong tool

The agent calls the wrong tool. The agent calls the right
tool with the wrong input. The agent's action is wrong.

**Example:**
> The agent calls `github.close_issue` instead of
> `github.add_labels`. The agent closes the issue.

**Why it happens:** the LLM picks the wrong tool. The LLM
mismatches the input. The LLM is in a hurry.

**How to detect:**
- Validate the tool input (Zod schema)
- Log every tool call
- Have a human review the actions (dry-run mode)

**How to fix:**
- Make the tool descriptions clear
- Use few-shot examples to teach the right tool
- Add a "are you sure?" step before destructive actions

**The cost:** the user has to undo the action. The user is
frustrated. The trust is broken.

## Failure 3: The infinite loop

The agent calls the same tool. The agent calls the same
tool with the same input. The agent loops forever.

**Example:**
> The agent calls `github.list_issues` 100 times. The
> agent gets the same 10 issues. The agent loops.

**Why it happens:** the LLM doesn't know when to stop. The
LLM doesn't have a plan. The LLM is reactive, not proactive.

**How to detect:**
- Track the number of steps
- Detect repeated tool calls (same tool + same input)
- Have a `maxSteps` limit

**How to fix:**
- Set a `maxSteps` limit (10 is a good default)
- Add a "done" tool (the agent calls it when finished)
- Use chain-of-thought to expose the plan

**The cost:** the user pays for the loop. The user is
frustrated. The cost is unbounded.

## The 3 together

The 3 are the failures. The failures are the lessons. The
lessons are the value.

| Failure | Symptom | Detection | Fix |
|---|---|---|---|
| Hallucination | False claims | Verify with tools | Add verification |
| Wrong tool | Wrong action | Validate input | Better tool descriptions |
| Infinite loop | Same tool, same input | Track steps | maxSteps limit |

The agent that handles all 3 is the agent that fails well.
The agent that handles 1 is the agent that fails badly.

## The 80/20

80% of the value comes from:
- Wrong tool detection (validate the input)
- Infinite loop prevention (set maxSteps)

20% comes from:
- Hallucination detection (verify with tools)

Focus on the 80% first. Add the 20% as you grow.

## The lesson

3 failures. 1 agent. 1 lesson: handle all 3.

The agent that handles all 3 is the agent that fails well.
The agent that handles 1 is the agent that fails badly.

The agent era is here. The failure is the design. The
design is the discipline. The discipline is the value.
