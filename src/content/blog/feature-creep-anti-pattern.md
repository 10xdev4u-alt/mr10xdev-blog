---
title: "The agent anti-pattern: feature creep"
description: "The most common way agents die. The agent that does everything. The agent that does nothing well. The feature creep trap. The 80/20 of focus. How to ship an agent that does 1 thing."
date: 2026-04-02
tags: ["meta", "agents", "anti-patterns"]
---

The most common way agents die. The agent that does everything.
The agent that does nothing well. The feature creep trap. The
80/20 of focus. How to ship an agent that does 1 thing.

## The trap

You build an agent. It does 1 thing well. You ship it. Users
love it. You add 2 more features. Users love those. You add 5
more. Users start to get confused. You add 10 more. Users leave.

The agent grew from 1 feature to 20. The complexity grew from
simple to overwhelming. The user can't tell what the agent
does anymore. The user gives up.

This is feature creep. The most common way agents die.

## The 5 anti-patterns

### Anti-pattern 1: The platform

```markdown
You are an agent. You can:
- Triage issues
- Update docs
- Draft release notes
- Review PRs
- Post standups
- Track dependencies
- Monitor security
- ... (10 more things)
```

The agent tries to do everything. The agent is bad at each
thing. The user is overwhelmed.

The fix: the agent does 1 thing. Add another agent for the
next thing.

### Anti-pattern 2: The kitchen sink

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
  - memory.read
  - memory.write
  - memory.list
  - memory.search
  # ... 10 more tools
```

The agent has 25 tools. The agent doesn't know which to use.
The LLM is overwhelmed. The output is confused.

The fix: 3-7 tools per agent. The agent knows what to use.

### Anti-pattern 3: The model zoo

```yaml
model:
  provider: anthropic
  # also: openai, google, mistral, cohere, together, ollama, vllm, ...
```

The agent supports every model. The agent's behavior is
inconsistent across models. The user doesn't know which model
to use.

The fix: pick 1 model per agent. Switch models via the
manifest, not the runtime.

### Anti-pattern 4: The feature factory

```markdown
## Features

- Webhook handling
- Cron scheduling
- Manual triggers
- HTTP API
- gRPC API
- GraphQL API
- CLI
- Web UI
- Mobile app
- Slack integration
- Discord integration
- Email integration
- SMS integration
- Webhook delivery
- Rate limiting
- Approval flows
- Observability
- Cost tracking
- ... (20 more features)
```

The project has 20 features. The project is hard to use. The
project is hard to maintain.

The fix: ship the 5 features. Add the 6th when users ask.

### Anti-pattern 5: The version two

```markdown
## Roadmap

- v2.0: rewrite everything
- v2.1: add 10 new features
- v2.2: add 10 more features
- v3.0: rewrite everything again
```

The project plans a v2.0 that does everything. The v2.0 is
delayed. The v1.0 is abandoned. The project dies.

The fix: ship v0.1. Get users. Iterate to v1.0. Don't plan v2.0
until v1.0 has 1000 users.

## The 80/20

80% of the value comes from:
- 1 thing done well
- 3-7 tools per agent
- 1 model per agent
- 5 features per release
- 1 path forward

20% of the value comes from:
- More things
- More tools
- More models
- More features
- More paths

The 20% is the 80% of the work. The 20% is the 20% of the value.
Focus on the 80% first.

## The discipline

The discipline is:
- **One thing per agent.** The agent does 1 thing well.
- **One manifest per thing.** Each agent has its own manifest.
- **One release per feature.** Each feature is its own release.
- **One path forward.** Each release is the next step.

The discipline is the focus. The focus is the value. The value
is the agent.

## The test

The agent is focused if:
- The user can describe what it does in 1 sentence
- The user knows when to use it
- The user can predict the output
- The user can debug the output
- The maintainer can explain each line

If any of these fail, the agent is not focused. Fix the agent.

## The lesson

5 anti-patterns. 1 discipline. 1 test.

The agent that is focused is useful. The agent that is not
focused is a toy. The choice is yours.

The agent era is here. The discipline is the same. The
discipline is the focus. The focus is the agent. The agent
does 1 thing well.
