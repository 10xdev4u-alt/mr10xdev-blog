---
title: "The 4 ways to think about agent identity (in production)"
description: "4 ways to think about identity: anonymous, named, persona, team. Each is a different identity model. The framework, the examples, the lesson."
date: 2025-12-29
tags: ["identity", "agents", "production"]
---

4 ways to think about identity: anonymous, named, persona,
team. Each is a different identity model. The framework,
the examples, the lesson.

## Identity 1: Anonymous

The agent is anonymous. The agent is a bot. The agent is
a generic process.

**Examples:**
- A bot account that posts a comment
- A webhook handler that updates a status
- A cron job that runs a script

**When to use:** the agent is simple. The agent is a tool.
The user doesn't care who the agent is.

**Pros:**
- Simple (no identity to manage)
- Standard (every agent can be anonymous)
- Cheap (no identity to maintain)

**Cons:**
- Cold (the agent feels cold)
- Untrusted (the user doesn't trust)
- Generic (the agent feels generic)

## Identity 2: Named

The agent has a name. The agent is "triage-bot". The
agent is a known process.

**Examples:**
- "triage-bot" — labels issues
- "doc-bot" — updates docs
- "release-bot" — drafts releases

**When to use:** the agent is specialized. The user
wants to know who's who. The team is large.

**Pros:**
- Recognizable (the agent is recognizable)
- Trusted (the user trusts the agent)
- Specialized (the agent is specialized)

**Cons:**
- Maintenance (the name must be maintained)
- Coupling (the name is tied to the agent)
- Drift (the name can drift from the role)

## Identity 3: Persona

The agent has a persona. The agent is "Alice the
Triager". The agent is a character.

**Examples:**
- "Alice the Triager" — labels issues
- "Bob the Reviewer" — reviews PRs
- "Charlie the Releaser" — drafts releases

**When to use:** the agent is friendly. The user is
engaged. The agent is conversational.

**Pros:**
- Friendly (the agent is friendly)
- Memorable (the agent is memorable)
- Engaging (the agent is engaging)

**Cons:**
- Effort (the persona must be designed)
- Cost (the persona is in tokens)
- Risk (the persona can be off)

## Identity 4: Team

The agent is a team. The agent is a "team of bots". The
agent is a group.

**Examples:**
- The "triage team" — labels, assigns, comments
- The "release team" — drafts, reviews, publishes
- The "doc team" — updates, reviews, publishes

**When to use:** the agent is complex. The agent has many
roles. The user is large.

**Pros:**
- Comprehensive (the team is comprehensive)
- Specialized (each bot is specialized)
- Composable (the team is composable)

**Cons:**
- Complex (the team is complex to manage)
- Cost (the team is expensive)
- Coupling (the team is tightly coupled)

## The 4 together

The 4 are the identities. The identities are the
relationships. The relationships are the value.

| Identity | Audience | Cost |
|---|---|---|
| Anonymous | The user doesn't care | Low |
| Named | The user wants to know | Low |
| Persona | The user is engaged | Medium |
| Team | The agent is complex | High |

The identity that matches the need is the right identity.

## The 80/20

80% of the value comes from:
- Named (the user wants to know)
- Persona (the user is engaged)

20% comes from:
- Anonymous (the user doesn't care)
- Team (the agent is complex)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the agent simple? (anonymous)
- Is the agent specialized? (named)
- Is the agent conversational? (persona)
- Is the agent complex? (team)

The right answer is the right identity at the right cost.

## The lesson

4 identities. 1 identity model. 1 lesson: pick the right
one.

The identity that matches the need is the right identity.
The identity that doesn't match is the wrong identity.

The agent era is here. The identity is the design. The
design is the choice. The choice is the discipline.
