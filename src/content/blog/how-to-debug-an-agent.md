---
title: "How to debug an AI agent"
description: "When an AI agent goes wrong, the debugging flow is different from traditional software. The 5-step process, the tools, the mental model. Save hours of 'why is it doing that?' debugging."
date: 2026-04-26
tags: ["debugging", "agents", "observability"]
---

When an AI agent goes wrong, the debugging flow is different from
traditional software. The 5-step process, the tools, the mental
model. Save hours of "why is it doing that?" debugging.

## The 5-step process

### Step 1: Reproduce

The first step is always the same: reproduce the bug. Find the
exact input that caused the wrong output.

For an agent, the input is:
- The trigger event
- The agent's memory state at the time
- The tools available
- The model + temperature + other config

If the agent has observability (Langfuse, OTel, custom), the
trace tells you the input. If not, you have to guess from the
output.

The reproduce step is the most important. Without it, you're
guessing at the cause.

### Step 2: Trace the reasoning

Once you have the input, trace the agent's reasoning. What did
the LLM "think"? What tools did it call? What did the tools
return?

The trace is the agent's "inner monologue." Without it, you're
guessing at the cause.

If the trace shows:
- **The LLM called the wrong tool:** the prompt is unclear or
  the tool description is misleading
- **The tool returned bad data:** the tool is buggy or the
  input was wrong
- **The LLM ignored the data:** the model isn't paying
  attention to the data
- **The LLM gave a wrong answer:** the model's reasoning is
  flawed (rare for simple tasks, common for complex ones)

Each pattern has a different fix.

### Step 3: Check the data

If the LLM got the right data but gave a wrong answer, the
data might be the problem. The LLM is reasoning about the data;
if the data is wrong, the reasoning will be wrong.

Check:
- The tool's input (is it what the LLM intended?)
- The tool's output (is it what the tool claimed to return?)
- The conversation history (is it consistent with the new input?)
- The memory (is it stale or corrupted?)

The data is the most common bug source. The LLM is doing its
best with whatever data it has. If the data is bad, the output
will be bad.

### Step 4: Check the prompt

If the data is good but the LLM still gives a wrong answer, the
prompt might be the problem. The prompt is the agent's
"instructions." If the instructions are unclear, the output
will be unclear.

Check:
- Is the system prompt clear about what the agent should do?
- Does the system prompt have examples (few-shot)?
- Are the tool descriptions clear?
- Is the conversation history confusing the LLM?

The prompt is the most common fix. A 5-line prompt change can
fix what looks like a complex reasoning bug.

### Step 5: Check the model

If the prompt is good, the data is good, and the reasoning is
wrong, the model might be the problem. Some tasks are too hard
for some models. The fix: use a better model, or break the task
into smaller pieces.

Check:
- Is the model powerful enough for this task?
- Is the temperature appropriate (low for reasoning, high for
  creativity)?
- Is the max_tokens high enough to fit the response?
- Is the model returning the right shape (sometimes it returns
  text instead of tool calls)?

The model is the most common "I give up" point. But it's
usually not the actual cause. The data and the prompt are more
likely.

## The tools

For debugging, you need:
- **Trace viewer** (Langfuse, OTel, custom) — see the agent's
  full trace
- **Log aggregator** (Datadog, Honeycomb, your own) — search
  across runs
- **Reproduction script** — given an input, run the agent and
  see the output
- **Eval harness** — a set of inputs with known correct outputs
- **Diff tool** — compare a working run to a broken run

The first three are essential. The last two are nice-to-have.

## The mental model

When debugging an agent, use this mental model:

```
Input → LLM → Tools → Output
   ↓       ↓      ↓      ↓
 Trace  Prompt  Data  Result
```

For each "↓" arrow, ask: is the input/output correct? If not,
that's where the bug is.

The 4 arrows are the 4 places a bug can live. 80% of the time,
the bug is in the prompt or the data. 15% of the time, it's in
the tool. 5% of the time, it's in the model.

## The common patterns

### Pattern: The LLM didn't see the data

The trace shows the LLM didn't include the data in its reasoning.
The fix: make the data more prominent in the prompt. Use bullet
points. Use ALL CAPS. Use repetition.

### Pattern: The tool returned wrong data

The trace shows the tool's output, and the LLM correctly noticed
it was wrong but used it anyway. The fix: validate the tool's
output in the tool itself. Don't trust the tool to always return
what you expect.

### Pattern: The LLM hallucinated a tool call

The trace shows the LLM called a tool that doesn't exist. The
fix: list the available tools in the system prompt, not just in
the function definitions.

### Pattern: The LLM looped forever

The trace shows the LLM called the same tool 50 times. The fix:
add a `maxToolCalls` limit. The runner should enforce it.

### Pattern: The agent timed out

The trace shows the LLM was slow. The fix: use a faster model
(or a smaller context). Or split the task into smaller pieces.

## The post-mortem

After debugging, write a post-mortem. The post-mortem is for:
- Future you (when the same bug recurs)
- Other developers (when they hit the same bug)
- The team (to learn from the incident)

The post-mortem should include:
- What happened (the symptom, the impact)
- Why it happened (the root cause)
- How it was fixed (the fix)
- How to prevent it (the test, the guard, the doc)

The 5-minute post-mortem is worth hours of future debugging.

## The lesson

Debugging an agent is different from debugging traditional
software. The bug can be in the input, the prompt, the tool, the
data, the model, or the runtime. The trace is the only way to
know.

The 5-step process (reproduce, trace, check data, check prompt,
check model) is the framework. The tools (trace viewer, log
aggregator, eval harness) are the support. The mental model
(input → LLM → tools → output) is the mental scaffold.

When the agent goes wrong (and it will), use the process. The
process is the difference between "5 minutes to find the bug"
and "5 days of staring at logs."

The agent era is here. The debugging is the same. Apply the
process.
