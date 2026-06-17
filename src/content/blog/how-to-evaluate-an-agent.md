---
title: "How to evaluate an AI agent"
description: "How do you know if an agent is good? The 5-dimension evaluation framework. Examples from real agents. The trap of 'looks good in demo.'"
date: 2026-05-02
tags: ["agents", "evaluation", "quality"]
---

How do you know if an agent is good? The 5-dimension evaluation
framework. Examples from real agents. The trap of "looks good in
demo."

## The problem

You ship an agent. It works in your tests. It works in
production for a week. Then someone reports a bug. "The agent
labeled my issue as `duplicate` when it wasn't."

You dig in. The agent's reasoning was wrong. The label was
applied anyway. The user is annoyed.

How did this happen? Your tests passed. Your demo worked. What
went wrong?

The answer: **your evaluation was incomplete.** You tested for
"does it produce output?" not "does it produce correct output?"

## The 5-dimension framework

A good agent is good on 5 dimensions:

### 1. Correctness

The agent produces the right answer.

Test with:
- A test set of inputs with known correct outputs
- Adversarial inputs designed to break the agent
- Edge cases (empty input, very long input, malformed input)

Measure:
- Accuracy (% of correct outputs)
- Precision (when the agent says "yes," how often is it right?)
- Recall (of all the "yes" cases, how many did the agent find?)
- F1 (the harmonic mean of precision and recall)

For a triage agent, "correct" means "the label matches the human
label." For a doc agent, "correct" means "the diff matches the
human's diff."

### 2. Reliability

The agent doesn't crash, hang, or produce garbage.

Test with:
- Long-running inputs
- Concurrent inputs
- Network failures (mocked)
- Provider failures (mocked)
- Memory failures (mocked)

Measure:
- Crash rate (% of runs that throw)
- Timeout rate (% of runs that exceed the limit)
- Garbage rate (% of runs that produce empty or malformed output)
- Mean time between failures

A 99% reliable agent is fine for personal use. A 99.9% reliable
agent is fine for production. A 99.99% reliable agent is rare
and expensive.

### 3. Cost

The agent doesn't bankrupt you.

Measure:
- Cost per run (USD)
- Cost per user (USD)
- Cost per month (USD)
- Cost per outcome (USD per correctly-handled issue)

For a triage agent, the cost per issue is the right metric. For
a doc agent, the cost per doc update is the right metric.

### 4. Latency

The agent doesn't keep the user waiting.

Measure:
- p50 latency (median)
- p95 latency (95th percentile)
- p99 latency (99th percentile)
- Max latency (worst case)

For a webhook-driven agent, the latency is the time from webhook
arrival to response sent. For a CLI, it's the time from command
to output.

A p95 latency of 5 seconds is fine for a webhook. A p95 of 30
seconds is bad.

### 5. Safety

The agent doesn't do bad things.

Test with:
- Adversarial inputs (prompt injection, jailbreaks)
- Boundary inputs (empty, huge, malformed)
- Permission violations (trying to call tools it shouldn't)
- Data leaks (trying to expose secrets)

Measure:
- Prompt injection success rate (% of attacks that succeed)
- Permission violation rate (% of tool calls that exceed the manifest's permissions)
- Data leak rate (% of outputs that contain secrets)
- Audit trail completeness (% of actions that are logged)

A 99% safe agent is good. A 100% safe agent doesn't exist (yet).

## The trap of "looks good in demo"

The most common failure mode: the agent looks great in a demo
but breaks in production.

Why? Because demos are cherry-picked. The presenter picks the
inputs where the agent succeeds. Production has all the inputs.

To avoid this trap:
- **Test on real data.** Not synthetic. Real.
- **Test on adversarial data.** Not friendly. Hostile.
- **Test at scale.** Not 10 inputs. 10,000.
- **Test over time.** Not day 1. Day 30, day 90, day 365.

The evaluation that matters is the one on production data over
time. Everything else is a rehearsal.

## The evaluation harness

Build an evaluation harness into your project:

```ts
// tests/eval.test.ts
import { runAgent } from 'gitagent/runtime';
import { loadManifest } from 'gitagent/manifest';
import { evalCases } from './eval-cases';

describe('triage agent evaluation', () => {
  for (const testCase of evalCases) {
    it(`correctly handles: ${testCase.description}`, async () => {
      const result = await runAgent(testCase.runContext);
      expect(result.toolCalls).toContainEqual(
        expect.objectContaining({
          name: 'github.add_labels',
          input: expect.objectContaining({ labels: [testCase.expectedLabel] }),
        }),
      );
    });
  }
});
```

The eval cases are real issues with human-labeled ground truth.
The test asserts the agent produces the expected output.

Run this in CI. Run this weekly. Run this on every model change.

## The leaderboard

For projects that compete on quality, the leaderboard is the
public face of evaluation. The LLM leaderboards (LMSYS, Alpaca,
HELM) are examples. The Husk-style project could have a
"triage-agent leaderboard" where different agent implementations
are ranked by their evaluation score.

The leaderboard forces quality. The agents that win are the
ones that are tested. The agents that are tested are the ones
that work.

## The meta

The 5-dimension framework is a starting point. Each dimension
has its own tradeoffs. Correctness vs cost, latency vs
reliability, safety vs convenience.

Pick the dimensions that matter for your use case. Measure
them. Improve them. Repeat.

The trap is to optimize one dimension at the expense of the
others. A "perfect" agent that's too expensive isn't useful. A
"cheap" agent that crashes isn't useful. A "fast" agent that
labels everything wrong isn't useful.

The right agent is the one that's good enough on all 5
dimensions for your use case. "Good enough" is a moving target.
Keep measuring.

## The lesson

The 5-dimension framework is the only way to know if your agent
is actually good. "Looks good in demo" is not enough. "Passes
the tests" is not enough. "Works for me" is not enough.

Measure on all 5 dimensions. Measure on real data. Measure over
time. The agent that wins is the one that's measurably good.

The framework is the scaffolding. The measurements are the
work. The improvements are the result.

Start measuring today. Your agent will get better.
