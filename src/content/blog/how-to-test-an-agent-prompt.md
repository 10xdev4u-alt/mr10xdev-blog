---
title: "How to test an agent prompt"
description: "Prompts are code. They should be tested. The 3 strategies for testing prompts: snapshot, golden, eval. Tools, examples, and the prompt-testing lifecycle that catches regressions."
date: 2026-04-16
tags: ["agents", "prompts", "testing"]
---

Prompts are code. They should be tested. The 3 strategies for
testing prompts: snapshot, golden, eval. Tools, examples, and the
prompt-testing lifecycle that catches regressions.

## Why test prompts

A prompt is a function from input to output. The function is
written in natural language, not code. But it's still a function.

When the function changes, the output can change. When the
output changes, the agent's behavior can change. When the
behavior changes, the user can be surprised.

The fix: test the prompt. Test that the prompt produces the
expected output. Test that the output doesn't change when the
prompt shouldn't have changed.

The 3 strategies:

## Strategy 1: Snapshot tests

Run the prompt. Compare the output to a saved snapshot.

```ts
import { renderPrompt } from './prompt';
import fs from 'node:fs';

it('renders the system prompt correctly', () => {
  const prompt = renderPrompt({ agent: 'triage', event: 'issues.opened' });
  const snapshot = fs.readFileSync('tests/snapshots/triage-system.md', 'utf8');
  expect(prompt).toBe(snapshot);
});
```

The snapshot is a file in the repo. The test compares the
output to the file. When the output changes, the snapshot
changes, and the diff is reviewable.

**When to use:** any prompt that's stable. The system prompt,
the few-shot examples, the tool descriptions.

**Pros:**
- Catches unintended changes
- The diff is the test result
- Easy to review

**Cons:**
- Brittle (any change requires updating the snapshot)
- Doesn't catch "the new output is also wrong"

## Strategy 2: Golden tests

Run the prompt with a real LLM. Compare the output to a saved
golden output.

```ts
import { runPrompt } from './runtime';
import fs from 'node:fs';

it('produces the expected triage response', async () => {
  const input = loadFixture('issue-bug');
  const output = await runPrompt({ manifest, event: input, llm: 'claude-sonnet-4-5' });
  const golden = JSON.parse(fs.readFileSync('tests/golden/triage-issue-bug.json', 'utf8'));
  expect(output).toMatchGolden(golden);
});
```

The golden is a saved output (or output structure). The test
asserts the actual output matches the golden.

The match can be exact (for deterministic outputs) or fuzzy (for
non-deterministic outputs).

**When to use:** LLM-generated content. Tool calls. The agent's
response structure.

**Pros:**
- Tests real LLM behavior
- Catches regressions in the LLM's reasoning
- The golden is the "known good" output

**Cons:**
- LLM calls are slow and expensive
- The golden can be brittle (the LLM might change its mind)
- The test requires an API key

## Strategy 3: Eval tests

Run the prompt with a real LLM on a set of test cases. Score
the output against ground truth.

```ts
const cases = loadEvalCases('triage');
let correct = 0;
for (const testCase of cases) {
  const output = await runPrompt({ manifest, event: testCase.event, llm: 'claude-sonnet-4-5' });
  if (output.label === testCase.expected.label) correct++;
}
const accuracy = correct / cases.length;
expect(accuracy).toBeGreaterThan(0.9);
```

The cases are real (or realistic) inputs with human-labeled
ground truth. The accuracy is the score.

**When to use:** measuring model performance. Comparing models.
Detecting regressions across model upgrades.

**Pros:**
- The most realistic test
- Catches subtle issues (e.g., a 5% drop in accuracy)
- Comparable across runs (track accuracy over time)

**Cons:**
- LLM calls are slow and expensive
- Requires a set of test cases (which is a chore to build)
- The accuracy threshold is arbitrary

## The 3 together

Each strategy catches a different class of bug:
- **Snapshot:** "the prompt changed"
- **Golden:** "the output changed"
- **Eval:** "the accuracy changed"

The combination of all 3 gives you confidence. The combination
of all 3 catches the bugs that would slip through.

## The prompt testing lifecycle

The lifecycle:
1. **Write the prompt.**
2. **Write a snapshot test.** Catches "I broke the prompt."
3. **Write a golden test.** Catches "the output is different now."
4. **Write an eval test.** Catches "the accuracy dropped."
5. **Run all 3 in CI.** Every PR runs the tests.
6. **Update the snapshots/goldens when the prompt intentionally changes.**
7. **Track the accuracy over time.** Plot it on a graph.

The cost:
- Snapshot: milliseconds
- Golden: seconds (real LLM call)
- Eval: minutes (multiple LLM calls)

The payoff:
- Snapshot: catches 1 class of bug
- Golden: catches 2 classes
- Eval: catches 3 classes

## The 80/20

80% of the value comes from:
- **Snapshot** (catches the obvious)
- **Golden** (catches the subtle)

20% of the value comes from:
- **Eval** (catches the systematic)

If you're short on time, do snapshot + golden. Add eval when
you have time and a set of test cases.

## The tooling

The tools:
- **Vitest** for snapshot and golden
- **A custom eval runner** for eval (100 lines of code)
- **LangSmith** or **LangFuse** for tracking (optional)

The eval runner is a 100-line script:
- Load the test cases
- For each case, run the prompt
- Score the output
- Report the accuracy

The 100 lines are worth it. The eval is the most realistic test.

## The 5 anti-patterns

### Anti-pattern 1: No tests

The prompt has no tests. The user finds the bugs. The
user is unhappy.

### Anti-pattern 2: Snapshot only

The prompt has only snapshot tests. The output changes, the
snapshot updates, the bug is missed.

### Anti-pattern 3: Manual tests

The prompt is tested by hand. The user is the test. The user
is unhappy.

### Anti-pattern 4: Brittle snapshots

The snapshots are too strict. Any change requires updating. The
tests are skipped.

### Anti-pattern 5: Too many cases

The eval has 10,000 cases. The eval takes an hour. The eval
is skipped.

## The lesson

Prompts are code. Test them. Use snapshot + golden as the
floor. Use eval as the polish. Run all in CI. Track the accuracy
over time.

The agent era needs a new testing discipline. The discipline
is: test the prompts like you test the code. The same rigor. The
same care. The same CI.

The agent that passes all 3 strategies is reliable. The agent
that doesn't is a toy. The choice is yours.
