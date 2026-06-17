---
title: "The 7 things I wish I'd known about AI agents"
description: "After 3 years building AI agents, the 7 things I wish I'd known on day one. The mental models, the traps, the meta-lessons. Save yourself a year."
date: 2026-05-03
tags: ["meta", "agents", "lessons"]
---

After 3 years building AI agents, the 7 things I wish I'd known on
day one. The mental models, the traps, the meta-lessons. Save
yourself a year.

## 1. The agent is a file, not a process

I spent the first 6 months thinking of agents as long-running
processes. They are not. They are files. A `.github/agents/<name>.md`
file. The file is the agent. The process is the runtime that
interprets the file.

This mental model changes everything:
- The agent is versioned with your code
- The agent is reviewed like any other code
- The agent's memory is a directory
- The agent's evolution is a PR

The shift from "agent as process" to "agent as file" is the
single biggest unlock for agent maintainability.

## 2. Memory is a hierarchy, not a flat list

I started with a flat list of memories. "Add to memory. Search
memory." It worked for the first 100 memories. It broke at 10,000.

The right model is a hierarchy:
- **L0: System prompt** — always in context
- **L1: Recent conversation** — last 2-3 turns
- **L2: Working memory** — the current task
- **L3: Episodic memory** — past events (summarized)
- **L4: Semantic memory** — facts (vector search)
- **L5: Full history** — in the database, not in context

Each level has different access patterns. Each level is queried
differently. The model only sees what it needs.

## 3. Tools are the API, not the prompt

I spent the first year trying to make the prompt do everything.
"Ask the model to call the API. Ask the model to format the
output. Ask the model to handle errors."

This was wrong. The tools ARE the API. The model orchestrates; the
tools execute. The prompt just describes what the agent is trying
to do.

The shift: instead of "the model formats the response," you have
a `formatResponse` tool. Instead of "the model handles the error,"
you have a `retry` tool. The model calls the tool. The tool does
the work.

This makes the agent:
- More reliable (tools have explicit contracts)
- More debuggable (you see every tool call)
- More testable (you can mock each tool)

## 4. The LLM is the CPU, the context window is the L1 cache

I spent the first year treating the LLM as a "smart API." It is.
But it's also a CPU with a very limited L1 cache (the context
window). Everything else is a slower storage layer.

The mental model:
- The system prompt = always-loaded registers
- The conversation = L1 cache
- The retrieval = L2 cache (RAM)
- The vector store = L3 cache (disk)
- The full history = cold storage

The model only sees what's in its registers + L1 cache. The rest
is loaded on demand. This is how computers have worked for 50
years. The same pattern works for LLMs.

## 5. Approval is the default, not the exception

I shipped my first agent with `tools: 'always execute'`. The
agent posted some... creative... comments on GitHub. I learned
my lesson.

Now every write tool requires approval by default. The user can
opt out for automated pipelines. The default is safe.

The shift: instead of "should this action require approval?"
ask "what would happen if this action were wrong?" If the answer
is "the user would have to undo it manually," require approval.

The cost of approval is friction. The cost of an unapproved
action is regret. Regret is worse.

## 6. Observability is the only thing that scales

I shipped my first agent with `console.log` for observability.
It worked for the first 10 runs. It broke at 100.

The right approach:
- Every LLM call is traced (input, output, tokens, cost)
- Every tool call is logged (name, input, output, latency)
- Every error is captured (stack trace, context)
- Every run has a unique ID for cross-referencing

The tool: Langfuse (or equivalent). The cost: $0-20/month. The
payoff: you can debug any run, any time, forever.

The shift: observability is not a "nice to have." It's the only
way to scale agent operations. Without it, you're flying blind.

## 7. The community finds the bugs

I thought I could find all the bugs in my agent. I was wrong.

The community:
- Finds edge cases I never imagined
- Suggests features I never considered
- Writes fixes I never had time for
- Spots security issues I missed

The shift: the community is the QA team. Open-source isn't just
distribution; it's a forcing function for quality. Every bug a
user reports is a bug I would have shipped to production.

The discipline: respond to issues within 48 hours. Triage within
a week. Fix or close within a month. The community rewards
responsiveness.

## The bonus one: 8. The agent is a peer, not a tool

I thought of the agent as a tool the user invokes. I was wrong.

The agent is a peer. It has its own memory, its own goals, its
own opinions. It proposes; the user approves. It learns; the
user edits. It's on the team.

This shift is philosophical but practical:
- The agent's output is reviewed like a colleague's PR
- The agent's memory is editable by the user
- The agent's goals are negotiated, not dictated
- The agent's failures are discussed, not hidden

The result: a more honest relationship between the user and the
agent. The user trusts the agent because the agent is auditable.
The agent improves because the user can correct it.

## The meta-lesson

Building AI agents is a different discipline than building
software. The mental models from web development or mobile
development don't transfer directly. The right models are:
- **Agent as file** (not process)
- **Memory as hierarchy** (not flat)
- **Tools as API** (not prompt)
- **LLM as CPU** (not smart API)
- **Approval as default** (not exception)
- **Observability as necessity** (not nice-to-have)
- **Community as QA** (not just users)
- **Agent as peer** (not tool)

Each shift saved me months of wrong effort. Each shift is a
lever for the next agent you build.

Save yourself a year. Use the shifts.
