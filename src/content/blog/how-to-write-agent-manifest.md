---
title: "How to write an agent manifest (the right way)"
description: "The manifest is the agent's config. Most are sloppy. Here's how to write one that's clear, focused, and reviewable. The 5 sections every manifest needs, the 3 anti-patterns to avoid."
date: 2026-04-20
tags: ["agents", "manifest", "best-practices"]
---

The manifest is the agent's config. Most are sloppy. Here's how
to write one that's clear, focused, and reviewable. The 5
sections every manifest needs, the 3 anti-patterns to avoid.

## The 5 sections

A good manifest has 5 sections:

### 1. The trigger (1-3 lines)

What wakes the agent up. Be specific.

```yaml
triggers:
  - issues.opened
```

Not:
```yaml
triggers:
  - issues.opened
  - issues.edited
  - issues.closed
  - issues.reopened
  - issues.labeled
  - issues.unlabeled
  - issues.assigned
  - issues.unassigned
  - issue_comment.created
  - issue_comment.edited
  # ... 20 more events
```

The first manifest handles 1 trigger. The second handles 12. The
first is focused. The second is a Swiss Army knife that does
nothing well.

Start with 1 trigger. Add more when you have evidence they're
needed.

### 2. The purpose (2-5 sentences)

What the agent does. The body of the manifest is the purpose.
Write it like a job description.

Good:
```markdown
You are a careful, friendly issue triager. When a new issue is
opened, you:
1. Read the title and body.
2. Search for similar past issues.
3. Apply one label: bug, feature, question, or duplicate.
4. If duplicate, post a comment and close.
5. If bug and no repro, ask for one.

Be concise. One short comment per issue. Never close issues
labeled bug, feature, or question.
```

Not:
```markdown
You are an AI agent. You help users. You are friendly. You
follow best practices. You use the tools available. You should
be helpful. ... (50 more vague sentences)
```

The good version is specific. The bad version is wishy-washy.
The LLM can act on the good version. The LLM guesses on the
bad version.

### 3. The tools (3-7 tools)

What the agent can do. Each tool is named in the manifest.

Good:
```yaml
tools:
  - github.post_comment
  - github.add_labels
  - github.search_issues
  - github.close_issue
```

Not:
```yaml
tools:
  - github.post_comment
  - github.add_labels
  - github.remove_label
  - github.search_issues
  - github.close_issue
  - github.reopen_issue
  - github.assign
  - github.list_issues
  - github.create_pr
  - github.request_review
  - github.merge_pr
  - github.add_reaction
  - github.get_file
  - github.list_workflow_runs
  - github.list_pull_requests
  - github.create_issue
  - github.update_issue
  # ... 15 more tools
```

The first has 4 tools. The second has 17. The first is focused.
The second is a toolbox with everything inside.

Each tool is a footgun. Give the agent only what it needs.

### 4. The limits (3-5 settings)

What the agent can't do. The limits are the safety net.

```yaml
limits:
  maxSteps: 6
  timeoutMs: 60000
  maxTotalTokens: 100000
  maxToolCalls: 20
```

Not:
```yaml
limits:
  maxSteps: 100
  timeoutMs: 600000  # 10 minutes
  maxTotalTokens: 10000000
  maxToolCalls: 1000
```

The first is bounded. The second is unbounded. The first can
fail in 6 steps. The second can run for 10 minutes.

The limits are the safety. Tight limits catch bugs early.
Loose limits hide bugs.

### 5. The approvals (2-3 settings)

When the human reviews. The approvals are the gates.

```yaml
approval:
  read: never      # Read tools run without approval
  write: required  # Write tools require approval
```

Not:
```yaml
approval:
  read: never
  write: never  # The agent does everything
```

The first has gates. The second has none. The first is safe.
The second is dangerous.

## The 3 anti-patterns

### Anti-pattern 1: The kitchen sink

```yaml
triggers: [issues.opened, issues.edited, issues.closed, ...]
tools: [github.*, slack.*, db.*, ...]
```

The agent does everything. The agent does nothing well. The
agent is a Swiss Army knife.

### Anti-pattern 2: The vague purpose

```markdown
You are an AI agent. You help users with their issues.
```

The agent doesn't know what to do. The LLM guesses. The user
gets inconsistent results.

### Anti-pattern 3: The unrestricted agent

```yaml
limits:
  maxSteps: 1000
approval:
  write: never
```

The agent can do anything for as long as it wants. The agent is
unsafe. The agent is unmaintainable.

## The 5-section checklist

Before merging a manifest, check:
- [ ] Triggers: 1-3 events, all specific
- [ ] Purpose: 2-5 sentences, all specific
- [ ] Tools: 3-7 tools, all needed
- [ ] Limits: 3-5 settings, all bounded
- [ ] Approvals: 2-3 settings, safe by default

If any section is wrong, the manifest is wrong. Fix the
manifest before merging.

## The 80/20

80% of the value comes from:
- The trigger being specific
- The purpose being clear
- The tools being focused

20% of the value comes from:
- The limits being tight
- The approvals being safe

The 80% is the manifest's content. The 20% is the manifest's
safety.

## The example

Here's a manifest I wrote recently:

```yaml
---
name: triage
description: Auto-triage new issues by labeling, asking for repro, and closing obvious duplicates
triggers:
  - issues.opened
model:
  provider: anthropic
  name: claude-sonnet-4-5
  temperature: 0.2
memory:
  type: git
  path: memory
  semantic: true
tools:
  - github.post_comment
  - github.add_labels
  - github.search_issues
  - github.close_issue
approval:
  read: never
  write: required
limits:
  maxSteps: 6
  timeoutMs: 60000
permissions:
  closeIssues: true
---

# Triage agent

You are a careful, friendly issue triager...

[3 paragraphs of specific instructions]
```

5 sections. ~50 lines. Every line is intentional. The agent does
one thing well.

## The lesson

The manifest is the contract. The contract should be clear,
focused, and reviewable. The 5 sections give you the structure.
The 3 anti-patterns tell you what to avoid.

Write the manifest before the code. The manifest is the design.
The code is the implementation. If the design is wrong, the
implementation is wrong. Fix the design first.

The agent era is here. The manifest is the starting point. Use
it.
