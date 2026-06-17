---
title: "The 7 agent design patterns"
description: "7 reusable patterns for agent design. The reflex, the cascade, the escalate, the delegate, the parallel, the loop, the composite. When to use each, with examples."
date: 2026-04-22
tags: ["agents", "patterns", "design"]
---

7 reusable patterns for agent design. The reflex, the cascade,
the escalate, the delegate, the parallel, the loop, the composite.
When to use each, with examples.

## Pattern 1: The reflex

The agent does the same thing every time. No reasoning. No
memory. Just a fixed workflow.

**Example:** A regex-based labeler. The agent receives an
issue. It runs a regex on the title. It applies a label. Done.

**Code:**
```ts
if (/\[bug\]/i.test(issue.title)) {
  await addLabel(issue, 'bug');
} else if (/\[feature\]/i.test(issue.title)) {
  await addLabel(issue, 'feature');
}
```

**When to use:** the task is deterministic. The same input
always produces the same output. No LLM needed (but an LLM
can be a more flexible reflex).

## Pattern 2: The cascade

The agent tries a cheap model first, escalates to a more
expensive model if the cheap one is uncertain.

**Example:** A classifier. The agent first asks Haiku. If
Haiku's confidence is above 0.9, use that. Otherwise, escalate
to Sonnet.

**Code:**
```ts
const initial = await haiku.classify(issue);
if (initial.confidence > 0.9) {
  return initial.label;
}
return await sonnet.classify(issue, { context: initial.reasoning });
```

**When to use:** the task has a clear right answer. The cheap
model is usually right. The expensive model is rarely needed.
The cascade saves cost.

## Pattern 3: The escalate

The agent delegates to a specialist when it hits a wall.

**Example:** A general agent. The agent tries to handle the
issue. If the issue mentions a security CVE, it delegates to
the security agent.

**Code:**
```ts
if (/CVE-\d+/i.test(issue.body)) {
  return await runAgent('security-specialist', issue);
}
return await runAgent('general-triage', issue);
```

**When to use:** you have multiple agents. Each has a domain.
The general agent routes to the specialist.

## Pattern 4: The delegate

The agent breaks the task into sub-tasks and delegates to
sub-agents. The sub-agents run in parallel (or sequence).

**Example:** A research agent. The agent needs to compare Husk
to LangChain. It breaks the task into:
- Sub-agent 1: research Husk
- Sub-agent 2: research LangChain
- Sub-agent 3: research alternatives
Then it combines the results.

**Code:**
```ts
const [husk, langchain, others] = await Promise.all([
  runAgent('researcher', { topic: 'husk' }),
  runAgent('researcher', { topic: 'langchain' }),
  runAgent('researcher', { topic: 'alternatives' }),
]);
return combine(husk, langchain, others);
```

**When to use:** the task decomposes naturally. The
sub-tasks are independent (or loosely dependent). Parallelism
helps.

## Pattern 5: The parallel

The agent runs multiple attempts in parallel and picks the
best one. Used for generation tasks (code, docs, designs).

**Example:** A code review agent. The agent generates 3
reviews in parallel. The user picks the best one.

**Code:**
```ts
const reviews = await Promise.all([
  generateReview(pr, { style: 'strict' }),
  generateReview(pr, { style: 'kind' }),
  generateReview(pr, { style: 'detailed' }),
]);
return reviews.find((r) => r.confidence > 0.8) ?? reviews[0];
```

**When to use:** the task is generation (not classification).
Multiple attempts give diversity. The user benefits from the
best one.

## Pattern 6: The loop

The agent does the same thing iteratively until it succeeds or
fails. Used for tasks that need multiple attempts.

**Example:** A code-fixing agent. The agent tries to fix the
bug. If the tests pass, done. Otherwise, the agent looks at
the test failures and tries again. Up to 5 attempts.

**Code:**
```ts
for (let i = 0; i < 5; i++) {
  const fix = await agent.fix(code, error);
  if (await testsPass(fix)) return fix;
  error = await getTestFailures(fix);
}
return null;  // gave up
```

**When to use:** the task is iterative. Each attempt gives more
info. The agent can use the info for the next attempt.

## Pattern 7: The composite

The agent combines multiple patterns. The most common
combination: cascade + escalate + delegate.

**Example:** A general agent that:
- Cascades: tries Haiku first, then Sonnet
- Escalates: delegates to a specialist if uncertain
- Delegates: parallel sub-agents for complex tasks
- Loops: retries on failure

**Code:**
```ts
async function run(task) {
  // Cascade
  const result = await cascade(task, [haiku, sonnet]);
  if (result.confidence > 0.9) return result;

  // Escalate
  if (result.needsSpecialist) {
    return await runAgent('specialist', task);
  }

  // Delegate
  const subtasks = decompose(task);
  const results = await Promise.all(subtasks.map((t) => run(t)));
  return combine(results);
}
```

**When to use:** the task is complex enough to benefit from
multiple patterns. The composite is the most powerful but also
the most expensive.

## The tradeoffs

Each pattern has tradeoffs:

### Reflex
- **+** Fast, cheap, deterministic
- **-** Brittle, no flexibility

### Cascade
- **+** Cheap (most calls use the cheap model)
- **+** Accurate (falls back to the expensive model)
- **-** Slower (sometimes two calls)

### Escalate
- **+** Specialized agents do better
- **-** More agents to maintain

### Delegate
- **+** Parallelism, specialization
- **-** Coordination overhead, more state

### Parallel
- **+** Best of N, diversity
- **-** Expensive (N times the cost)

### Loop
- **+** Iterative improvement
- **-** Unbounded cost (need a max)

### Composite
- **+** Most powerful
- **-** Most expensive, most complex

## The choice

The right pattern depends on the task:
- **Deterministic tasks** (regex, lookup): reflex
- **Classification tasks** (label, route, score): cascade
- **Specialized tasks** (security, performance): escalate
- **Decomposable tasks** (research, comparison): delegate
- **Generation tasks** (code, design, docs): parallel
- **Iterative tasks** (fix, refine, debug): loop
- **Complex tasks** (multi-step, multi-domain): composite

Most real agents are composites. The cascade is the most
common. The reflex is the most underused (people reach for
the LLM when a regex would do).

## The meta-pattern

The 7 patterns compose. The 7 patterns cover the design space.
The right pattern depends on the task. The wrong pattern is
over-engineering.

When designing an agent:
1. Start with the simplest pattern that works (reflex)
2. If the simple pattern doesn't work, escalate (cascade)
3. If the cascade doesn't work, add specialists (escalate)
4. If the specialists don't work, parallelize (parallel)
5. If the parallel doesn't work, iterate (loop)
6. If nothing works, combine (composite)

The escalation path is: reflex → cascade → escalate → parallel →
loop → composite. Each step adds complexity. Each step adds
capability. Each step costs more.

## The lesson

7 patterns. Each with a clear use case. Each with a clear
tradeoff. The right pattern depends on the task.

The agent era is here. The patterns are known. The choice is
yours. Pick the simplest pattern that works. Iterate. Add
complexity only when you have evidence it's needed.

The patterns are the toolkit. The toolkit is small. The toolkit
covers the design space. The design is the agent.
