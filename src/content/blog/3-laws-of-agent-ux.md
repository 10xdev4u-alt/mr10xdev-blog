---
title: "The 3 laws of agent UX"
description: "The 3 laws of agent UX, learned from 3 years of building. Show your work, be recoverable, earn trust. Examples from real agents and the design rationale."
date: 2026-04-27
tags: ["ux", "agents", "design"]
---

The 3 laws of agent UX, learned from 3 years of building. Show
your work, be recoverable, earn trust. Examples from real agents
and the design rationale.

## Law 1: Show your work

The user should be able to see what the agent did and why. Every
action should be visible. Every decision should be traceable.

### What "show your work" looks like

For a triage agent:
- "I labeled this issue as `bug` because the title contains the
  word 'crash' and the body mentions a stack trace."
- "I closed this issue as a duplicate of #42 because the title
  is the same and the body is similar."

For a doc agent:
- "I drafted a PR that updates the README to mention the new
  `create_pr` tool. The diff is 12 lines. The change is in
  `README.md:42-54`."

For a review agent:
- "I posted a comment with 3 suggestions:
  - Add a test for the new function
  - Update the CHANGELOG
  - Fix the typo in the variable name"

The user sees what the agent did, why, and what the alternative
would have been.

### Why it matters

Without "show your work," the agent is a black box. The user
can't:
- Verify the agent's reasoning
- Catch mistakes early
- Trust the agent over time
- Debug failures
- Improve the agent

With "show your work," the agent is a peer. The user can:
- Verify the reasoning
- Catch mistakes
- Trust the agent
- Debug failures
- Improve the agent

The cost of "show your work" is more output. The benefit is
trust. Trust is the moat.

### How to implement

- **In the prompt:** "Before you act, explain your reasoning."
- **In the tool calls:** each tool result is logged with its
  input and output.
- **In the comments:** the agent's comment includes its
  reasoning, not just its decision.
- **In the logs:** the trace shows every step.

The cost: ~20% more tokens. The benefit: 10x more trust.

## Law 2: Be recoverable

Every action should be reversible. If the agent does something
wrong, the user should be able to undo it with one click.

### What "recoverable" looks like

For a comment:
- The agent posts a comment
- The user can delete it with one click
- The agent's log shows the comment, the user, the timestamp

For a label:
- The agent adds a label
- The user can remove it with one click
- The agent's log shows the label, the issue, the timestamp

For a PR:
- The agent opens a PR
- The user can close it with one click
- The agent's log shows the PR, the changes, the rationale

For a release:
- The agent creates a release
- The user can delete it with one click
- The agent's log shows the release, the notes, the version

The pattern: every action is logged, every action is reversible,
every action is documented.

### Why it matters

Without "recoverable," the agent is risky. The user hesitates
to enable write actions. The agent does less. The user gets less
value.

With "recoverable," the agent is safe. The user enables write
actions. The agent does more. The user gets more value.

The cost of "recoverable" is engineering. The benefit is usage.

### How to implement

- **Log every action** with enough context to undo
- **Provide an undo command** in the CLI / UI
- **Document the undo** in the agent's response
- **Test the undo** end-to-end

The pattern: design the agent as if every action will be wrong
at some point. Make the wrongness recoverable.

## Law 3: Earn trust

Trust is earned, not given. The agent earns trust by:
- Doing the right thing
- Admitting mistakes
- Asking when unsure
- Being consistent
- Being honest

### What "earn trust" looks like

**Doing the right thing:**
- Label correctly
- Comment helpfully
- Document accurately
- Act only when appropriate

**Admitting mistakes:**
- "I labeled this as `bug` but on reflection it might be a
  `question`. The user is asking how to do X, not reporting a
  bug. I'm not sure. Should I change the label?"

**Asking when unsure:**
- "I'm not sure if this is a bug or a feature request. The title
  says 'feature' but the body mentions a broken workflow. Can
  you clarify?"

**Being consistent:**
- Always label in lowercase
- Always include the reasoning in the comment
- Always link to related issues
- Always use the same format

**Being honest:**
- "I tried to post a comment but the API returned 401. The
  token is invalid. I can't proceed."
- "I would have applied this label but I don't have permission.
  The manifest has `closeIssues: false`."
- "I don't know. The issue is outside my training data."

### Why it matters

Trust compounds. A user who trusts the agent uses it more. A
user who doesn't trust the agent uses it less. The compound
effect over months is huge.

A trusted agent becomes infrastructure. An untrusted agent
becomes a toy. The difference is the 3 laws.

### How to implement

- **Train the prompt on the right behaviors.** Show examples of
  admitting mistakes, asking when unsure, being honest.
- **Reward the right behaviors in tests.** A test that catches
  the agent labeling correctly is more valuable than a test
  that catches the agent labeling fast.
- **Surface the wrong behaviors in observability.** When the
  agent makes a mistake, the user should be able to see it.
- **Iterate based on trust signals.** If the user is using the
  agent more, trust is going up. If less, trust is going down.
  Measure.

## The 3 laws together

The 3 laws compose:
- **Show your work** (transparency)
- **Be recoverable** (safety)
- **Earn trust** (reliability)

A transparent agent that is safe to use and reliable over time
is a real agent. The user can:
- Verify what the agent did
- Undo what the agent did
- Trust the agent over time

The result: a sustainable relationship between the user and
the agent. The agent does more. The user gets more value. The
trust compounds.

## The anti-patterns

### 1. The black box

The agent does the thing but doesn't say why. The user can't
verify. The user can't trust. The user stops using the agent.

### 2. The irreversible action

The agent does the thing and the user can't undo it. The user
hesitates. The user enables fewer features. The agent does less.

### 3. The confident idiot

The agent does the wrong thing confidently. The user can't tell
the agent is wrong. The user trusts the agent. The agent
causes damage. The user loses trust forever.

## The lesson

The 3 laws of agent UX are the foundation of a sustainable
agent. The 3 laws are not optional. The 3 laws are the floor.

If your agent follows all 3, the user will use it more. If your
agent violates any, the user will use it less. The compound
effect over months is huge.

Build the 3 laws in from day one. They're not polish; they're
the foundation. The agents that win are the ones that follow
the 3 laws.

The agent era is here. The 3 laws are the design principles.
Apply them.
