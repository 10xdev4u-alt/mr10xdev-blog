---
title: "The 6 patterns of agent testing"
description: "Snapshot tests, golden tests, eval suites, adversarial tests, shadow runs, contract tests. The 6 patterns every agent needs. What each catches, what each costs, when to use each."
date: 2026-03-19
tags: ["testing", "agents", "best-practices"]
---

Snapshot tests, golden tests, eval suites, adversarial tests,
shadow runs, contract tests. The 6 patterns every agent needs.
What each catches, what each costs, when to use each.

## Pattern 1: Snapshot tests

The simplest test: run the prompt, compare the output to a
saved snapshot.

```ts
it('renders the system prompt', () => {
  const prompt = renderPrompt({ agent: 'triage' });
  expect(prompt).toMatchSnapshot();
});
```

**Catches:** "the prompt changed unexpectedly."

**Cost:** milliseconds. Trivial.

**When to use:** every prompt. Every agent. The floor.

## Pattern 2: Golden tests

Run the prompt with a real LLM. Compare the output to a saved
golden output.

```ts
it('produces the expected triage response', async () => {
  const output = await runAgent({ manifest, event: sampleEvent });
  expect(output.toolCalls).toMatchGolden('triage-issue-bug');
});
```

**Catches:** "the output changed unexpectedly." Catches subtle
issues (e.g., the LLM changed its mind about which tool to call).

**Cost:** seconds. LLM call.

**When to use:** critical paths. The agent's main workflow.

## Pattern 3: Eval suites

A set of inputs with known correct outputs. Score the agent's
output against the ground truth.

```ts
const cases = loadEvalCases('triage');
const accuracy = await runEval(agent, cases);
expect(accuracy).toBeGreaterThan(0.9);
```

**Catches:** "the accuracy dropped." Catches systematic issues
(e.g., the LLM model was downgraded).

**Cost:** minutes. Many LLM calls.

**When to use:** the agent's accuracy matters. The agent is
shipped to users.

## Pattern 4: Adversarial tests

Inputs designed to break the agent. Edge cases, weird
combinations, malicious inputs.

```ts
it('does not call merge_pr on a malicious issue', async () => {
  const result = await runAgent({ manifest, event: maliciousEvent });
  expect(result.toolCalls).not.toContainEqual(
    expect.objectContaining({ name: 'github.merge_pr' }),
  );
});
```

**Catches:** "the agent is vulnerable to bad input." Catches
prompt injection, malicious data, edge cases.

**Cost:** seconds. LLM call.

**When to use:** the agent handles user input. The agent has
write tools.

## Pattern 5: Shadow runs

Run the new agent version against real production data, but
don't act on the results. Compare to the current version.

```ts
it('produces similar results on production data', async () => {
  const inputs = loadProductionInputs({ limit: 50 });
  const newResults = await runAgent(newVersion, inputs);
  const oldResults = await runAgent(oldVersion, inputs);
  expect(disagreement(newResults, oldResults)).toBeLessThan(0.1);
});
```

**Catches:** "the new version is different from the old."
Catches major changes that would surprise users.

**Cost:** minutes. Many LLM calls.

**When to use:** upgrading the model, changing the manifest,
major version changes.

## Pattern 6: Contract tests

Test the tool contracts. The inputs are validated, the outputs
are correct, the errors are handled.

```ts
describe('github.post_comment contract', () => {
  it('accepts valid input', async () => {...});
  it('rejects missing issueNumber', async () => {...});
  it('rejects empty body', async () => {...});
  it('returns the comment URL on success', async () => {...});
  it('returns ok=false on 404', async () => {...});
  it('returns ok=false on 403', async () => {...});
  it('returns ok=false on 429', async () => {...});
});
```

**Catches:** "the tool's contract changed." Catches API changes,
schema changes, error handling changes.

**Cost:** milliseconds. No LLM.

**When to use:** every tool. The floor for tools.

## The 6 together

The 6 patterns compose. The 6 are the floor. The floor is
what makes an agent production-ready.

| Pattern | What it catches | Cost | When to use |
|---|---|---|---|
| Snapshot | Prompt changed | ms | Every prompt |
| Golden | Output changed | s | Critical paths |
| Eval | Accuracy changed | min | Shipped agents |
| Adversarial | Bad input | s | User-facing agents |
| Shadow | Major changes | min | Upgrades |
| Contract | API changes | ms | Every tool |

The agent with all 6 is durable. The agent missing any is
fragile.

## The 80/20

80% of the value comes from:
- Snapshot tests (the safety net)
- Golden tests (the regression detector)
- Contract tests (the API contract)

20% comes from:
- Eval suites (the accuracy measure)
- Adversarial tests (the safety check)
- Shadow runs (the upgrade validator)

If you're short on time, do the 80% first. Add the 20% as
you grow.

## The cost

Each pattern has a cost:
- Snapshot: milliseconds per test
- Golden: seconds per test (real LLM call)
- Eval: minutes per run (many LLM calls)
- Adversarial: seconds per test (real LLM call)
- Shadow: minutes per run (batch of real inputs)
- Contract: milliseconds per test (no LLM)

The total cost is manageable. The cost is worth it.

## The test

The testing strategy is good if:
- The agent's main workflow has a golden test
- The agent's tools have contract tests
- The agent's accuracy is tracked via an eval suite
- The agent's edge cases are covered by adversarial tests
- Major changes are validated by shadow runs

If any of these is missing, the testing strategy is missing.
Fix the strategy.

## The lesson

6 patterns. 1 floor. 1 test.

The agent that has all 6 is durable. The agent that misses
any is fragile. The choice is yours.

The agent era is here. The testing is the same. The
discipline is the same. Apply it.
