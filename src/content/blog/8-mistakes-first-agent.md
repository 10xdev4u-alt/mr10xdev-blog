---
title: "The 8 mistakes I made building my first agent"
description: "My first AI agent was a disaster. 8 specific mistakes I made, the cost of each, and the lesson. Learn from my failure so you don't have to fail the same way."
date: 2026-04-28
tags: ["meta", "agents", "lessons", "mistakes"]
---

My first AI agent was a disaster. 8 specific mistakes I made, the
cost of each, and the lesson. Learn from my failure so you don't
have to fail the same way.

## Mistake 1: No approval flow

I built the agent with `tools: 'always execute'`. The agent
posted a comment that was... not great. The user complained. I
had to delete the comment manually.

**Cost:** 30 minutes of cleanup, plus the user's trust.

**Lesson:** approval is the default for write tools. Always.

## Mistake 2: No observability

I shipped with `console.log`. The agent worked for the first 10
runs. Then it failed. I had no idea why. I spent 2 hours reading
console output, trying to reconstruct what happened.

**Cost:** 2 hours of debugging.

**Lesson:** observability is a requirement, not a nice-to-have.
Use Langfuse or equivalent. From day one.

## Mistake 3: The prompt was too long

I thought a longer prompt = a smarter agent. I was wrong. The
prompt was 5K tokens of instructions, examples, and edge cases.
The agent ignored most of it.

**Cost:** slower runs, higher cost, worse results.

**Lesson:** the prompt is the contract, not the encyclopedia.
Keep it short. The model can figure out the rest.

## Mistake 4: The agent did too much

I gave the agent 15 tools. It tried to use all of them on every
run. The runs were slow, the cost was high, the results were
inconsistent.

**Cost:** 3x the cost, 2x the latency, worse results.

**Lesson:** each tool is a footgun. Give the agent only what it
needs. The user can opt into more tools per agent.

## Mistake 5: No memory

The agent had no memory. Every run was a fresh start. The user
had to repeat context every time. The agent was amnesiac.

**Cost:** the user stopped using the agent. It was too much work.

**Lesson:** memory is the leverage. Without it, the agent is a
toy. With it, the agent is a tool.

## Mistake 6: No tests

I shipped the agent with zero tests. The first time the API
changed, the agent broke. I had no idea. The user found out.

**Cost:** 2 days of debugging + 1 angry user.

**Lesson:** tests are the spec. The agent without tests is the
agent you can't change.

## Mistake 7: The model was the bottleneck

I was using GPT-3.5 because it was cheap. The agent was slow and
the results were mediocre. I thought the agent was the problem.
It was the model.

**Cost:** 6 months of mediocre results before I switched to GPT-4o.

**Lesson:** the model matters. Use the best model you can afford.
The cost of a bad model is more than the cost of a good one.

## Mistake 8: I tried to ship a platform

I built a "comprehensive agent platform" with 30 features. The
user wanted 1 feature. The platform was unused.

**Cost:** 6 months of building + 0 users.

**Lesson:** ship the smallest thing that solves the user's
problem. The platform comes later. If it comes at all.

## The pattern

Looking back, all 8 mistakes had the same shape:
- I over-built (too many tools, too long a prompt, too many features)
- I under-protected (no approval, no observability, no tests)
- I under-tested (no eval, no real users, no iteration)
- I over-invested in the wrong things (the platform vs the user)

The fix for all 8:
- Ship the smallest thing
- Add the protection (approval, observability, tests)
- Test with real users
- Iterate weekly

## The cost

The total cost of my 8 mistakes:
- 1 year of building
- 0 users
- 1 year of "almost shipping" before the breakthrough

The breakthrough came when I shipped the smallest thing. Husk
v0.1.0 was 150 lines. It worked. 9 releases later, it's 60KB
with 229 tests. 50+ users. Real production deployments.

The breakthrough came from doing the opposite of my 8 mistakes.

## The meta-lesson

Building agents is a different discipline than building
software. The mental models from web dev or mobile dev don't
transfer directly. The right models are:
- **Ship small.** Iterate.
- **Approve by default.** Opt out for automation.
- **Observe by default.** Trace everything.
- **Test by default.** Eval on real data.

Each of my 8 mistakes violated one of these. The 9 releases of
Husk followed all 4. The result: a project that works.

If you're starting an agent project, learn from my 8 mistakes.
The lessons are free. The cost of repeating them is not.

## The lesson

8 mistakes. 1 year. 0 users.

The fix is the same as the lesson: ship small, protect by default,
observe everything, test on real data.

If you're starting an agent project today, you have an advantage
I didn't: you have my mistakes to learn from. Use them. Ship
something small. Add the protections. Test on real users. Iterate
weekly.

The agent era is here. The mistakes are known. The opportunity is
real. Build accordingly.
