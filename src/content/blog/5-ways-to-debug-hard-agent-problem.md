---
title: "The 5 ways to debug a hard agent problem"
description: "When the easy fixes don't work, the hard problems need hard tools. The 5 approaches: instrumentation, reproduction, isolation, comparison, rollback. The framework, the examples, the lesson."
date: 2026-03-05
tags: ["debugging", "agents", "tools"]
---

When the easy fixes don't work, the hard problems need hard
tools. The 5 approaches: instrumentation, reproduction,
isolation, comparison, rollback. The framework, the examples,
the lesson.

## Approach 1: Instrumentation

Add more logging. Add more tracing. Add more metrics. The
problem is hidden. The instrumentation reveals it.

**When to use:** the problem is intermittent. The problem is
hard to reproduce. The problem is in production.

**Example:** the agent is slow on 10% of runs. Add latency
tracking. The trace shows the slow runs are when the LLM
provider returns 5xx. The problem is upstream.

**Tools:**
- `console.log` for quick debugging
- Langfuse for production tracing
- OTel for distributed tracing
- Custom metrics for business KPIs

**The lesson:** instrumentation is the foundation. Without
it, you're guessing. With it, you're measuring.

## Approach 2: Reproduction

Reproduce the problem. Run the agent with the exact input
that produced the wrong output. See what happens.

**When to use:** the problem is rare. The problem is
non-deterministic. The problem is hard to characterize.

**Example:** the agent is failing on issue #42. Copy the
issue. Run the agent manually. The agent fails. The
reproduction is the test case.

**Tools:**
- `gitagent dev` for local runs
- `gitagent replay` for re-running with logged input
- Langfuse for finding the exact input
- A test framework for automated reproduction

**The lesson:** reproduction is the key. Without it, you
can't fix the problem. With it, you have a target.

## Approach 3: Isolation

Isolate the problem. Remove variables until the problem
disappears. Add variables back until it reappears.

**When to use:** the problem is complex. The problem has
many potential causes. The problem is in a complex system.

**Example:** the agent's output is wrong. Disable the memory
tools. The output is still wrong. Disable the search tools.
The output is still wrong. Disable the LLM provider. The
output is now correct. The problem is the LLM provider's
formatting.

**Tools:**
- `gitagent dev` for isolated runs
- Mock providers and tools
- Feature flags for individual components
- The trace viewer for the call sequence

**The lesson:** isolation is the method. The method is the
science. The science is the fix.

## Approach 4: Comparison

Compare a working run to a broken run. What changed? What
didn't? The difference is the cause.

**When to use:** the problem is a regression. The problem
was working before. The problem is not working now.

**Example:** the agent was working last week. It's not
working this week. Compare the manifest, the code, the
data, the model. The manifest was changed. The manifest is
the cause.

**Tools:**
- `git diff` for code changes
- `gitagent logs` for run history
- The trace viewer for the call sequence
- The CHANGELOG for what's changed recently

**The lesson:** comparison is the most direct. The direct is
the most effective. The effective is the fix.

## Approach 5: Rollback

Roll back the change. See if the problem goes away. The
problem was caused by the change. The change is the fix.

**When to use:** the problem is a recent regression. The
problem is in production. The user is affected.

**Example:** the agent started failing 30 minutes ago. The
last commit was 25 minutes ago. Roll back the commit. The
agent works again. The commit is the cause.

**Tools:**
- `git revert` for rolling back a commit
- The release process for rolling back a version
- The CI/CD for automatic rollback on failure
- The observability for detecting the rollback worked

**The lesson:** rollback is the most direct fix. The direct
fix is the most effective. The effective fix is the lesson.

## The 5 together

The 5 approaches are a toolkit. The toolkit is the
debugging. The debugging is the fix.

| Approach | When to use | Tool |
|---|---|---|
| Instrumentation | Intermittent | Tracing, logs, metrics |
| Reproduction | Rare | Manual runs, replays |
| Isolation | Complex | Mock, disable |
| Comparison | Regression | Diff, history |
| Rollback | Recent | git revert, release rollback |

The agent that uses all 5 is debuggable. The agent that
uses 1 is guessable. The choice is yours.

## The 80/20

80% of the time, the problem is in:
- The prompt (the LLM doesn't know what to do)
- The data (the input is wrong)
- The model (the model can't do the task)

20% is in:
- The infra (the API is slow)
- The bug (the code is wrong)

For the 80%, use reproduction + comparison. For the 20%,
use rollback + instrumentation.

## The lesson

5 approaches. 1 toolkit. 1 lesson: use the right approach for
the problem.

The agent that uses the right approach is debuggable. The
agent that uses the wrong approach is a mystery. The choice
is yours.

The agent era is here. The debugging is the same. The
toolkit is the discipline. The discipline is the fix.
