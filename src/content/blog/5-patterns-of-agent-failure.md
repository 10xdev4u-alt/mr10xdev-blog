---
title: "The 5 patterns of agent failure"
description: "After 3 years of building agents, I've seen these 5 failure modes over and over. The hallucinated tool, the infinite loop, the silent failure, the over-eager agent, the memory corruption. Symptoms, causes, fixes."
date: 2026-04-25
tags: ["agents", "failure", "patterns"]
---

After 3 years of building agents, I've seen these 5 failure modes
over and over. The hallucinated tool, the infinite loop, the
silent failure, the over-eager agent, the memory corruption.
Symptoms, causes, fixes.

## Pattern 1: The hallucinated tool

**Symptom:** the agent calls a tool that doesn't exist. The tool
registry throws an error. The agent's response is wrong.

**Example:**
```
[trace] LLM called: github.delete_repo({ owner: 'me', name: 'r' })
[error] Tool "github.delete_repo" not found
```

**Cause:** the LLM "remembered" a tool from its training data or
from an example. The tool doesn't exist in the registry.

**Fix:**
- Limit the tool list to the tools the agent can actually use
- Add a "tool not found" recovery: tell the LLM "use one of
  these: github.post_comment, github.add_labels, ..."
- Add an explicit "tools available" section in the system prompt
- Test with adversarial prompts to catch hallucination

## Pattern 2: The infinite loop

**Symptom:** the agent calls the same tool 50 times. The run
times out. The user is frustrated.

**Example:**
```
[trace] LLM called: github.search_issues({ query: 'auth' })
[trace] LLM called: github.search_issues({ query: 'auth' })
[trace] LLM called: github.search_issues({ query: 'auth' })
[trace] LLM called: github.search_issues({ query: 'auth' })
... (50 times)
```

**Cause:** the LLM is stuck. The previous tool call didn't give
it what it needed, but it keeps trying the same thing. The loop
self-reinforces.

**Fix:**
- Add `maxToolCalls` to the manifest (default 30)
- Add a "stuck detector": if the agent calls the same tool 3
  times in a row, break the loop
- Add a "different approach" prompt: when the LLM retries,
  suggest it try a different tool
- Add a "give up after N attempts" rule

## Pattern 3: The silent failure

**Symptom:** the agent runs. The output looks fine. The user
thinks everything worked. But the action didn't actually happen.

**Example:**
```
[trace] github.post_comment: failed (401 Unauthorized)
[response] "I've posted a comment on issue #42"
```

**Cause:** the agent's tool call failed (auth, network, etc.)
but the agent didn't notice. The LLM continued as if it
succeeded.

**Fix:**
- Always check the `ok` field in tool results
- If a tool fails, the LLM should be told explicitly
- The LLM should be prompted to be honest about failures
- Add a post-run check: did all the tools succeed?

## Pattern 4: The over-eager agent

**Symptom:** the agent does more than the user asked. The user
asked for 1 thing, the agent did 5. The user is overwhelmed.

**Example:**
```
[user] "Can you label this issue as a bug?"
[trace] github.add_labels(['bug'])
[trace] github.add_labels(['p0', 'security'])
[trace] github.post_comment('Adding p0 and security labels...')
[trace] github.assign(['@maintainer'])
[response] "Done! I've labeled it as bug, p0, and security, and assigned @maintainer."
```

**Cause:** the LLM is "helpful" — it does more than asked. The
user wanted a label; the agent did 4 things.

**Fix:**
- The system prompt should be explicit: "Do ONLY what was asked.
  Don't do extra work."
- Add per-action approval: each tool call requires approval
- Test with prompts that ask for 1 thing; verify the agent
  does 1 thing
- Add a "scope check" before each tool call: is this what the
  user asked for?

## Pattern 5: The memory corruption

**Symptom:** the agent's memory has wrong, outdated, or
contradictory information. The agent gives weird responses.

**Example:**
```
[memory] "User prefers dark mode"
[memory] "User prefers light mode"  (added later)
[response] "I'll set your theme to dark"  (random pick)
```

**Cause:** the memory was written by an untrusted source (issue
body, comment, etc.) or was written without proper provenance.

**Fix:**
- Add provenance to memory entries (source, author, timestamp)
- Filter memory reads by provenance (only use trusted sources)
- Add a "memory review" step: periodically check the memory for
  contradictions
- Use semantic search with high thresholds to avoid noisy
  matches

## The pattern in the patterns

Looking at the 5 patterns, the common thread is:
- The agent is doing something the user didn't intend
- The agent doesn't know it's wrong
- The user has to fix it after the fact

The fix is always the same: **make the agent's behavior more
transparent and easier to recover from.**

The 3 laws of agent UX apply:
- **Show your work:** the agent explains what it's doing and why
- **Be recoverable:** every action can be undone
- **Earn trust:** the agent admits mistakes, asks when unsure

If your agent follows the 3 laws, these 5 failure modes are
manageable. The user can see what went wrong, undo it, and
trust the agent to do better next time.

## The prevention playbook

For each pattern, the prevention is:

### Pattern 1 (hallucinated tool)
- Tool list in system prompt
- "Tool not found" recovery
- Adversarial tests

### Pattern 2 (infinite loop)
- `maxToolCalls` limit
- Stuck detector
- "Different approach" prompt

### Pattern 3 (silent failure)
- `ok` field checks
- Explicit failure messages
- Post-run verification

### Pattern 4 (over-eager)
- "Do only what was asked" in system prompt
- Per-action approval
- Scope check

### Pattern 5 (memory corruption)
- Provenance tracking
- Provenance filtering
- Periodic memory review

The playbook is 5 patterns × 3 preventions = 15 specific
techniques. Apply them all.

## The lesson

5 failure patterns. 5 fixes. 1 meta-lesson: the agent is doing
something the user didn't intend.

The agent is a junior employee. It can do amazing work, but it
needs supervision. The supervision comes from the system design
(limits, approvals, observability) and the prompt design
(clarity, examples, expectations).

The failure patterns are known. The fixes are known. The cost
of not applying them is a frustrated user. The cost of applying
them is 1-2 days of design.

Apply the fixes. The agent era is here. The patterns are real.
