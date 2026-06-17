---
title: "The 5 ways to think about agent context (in production)"
description: "5 ways to think about context: system, user, event, memory, history. Each is a different context layer. The framework, the examples, the lesson."
date: 2026-01-06
tags: ["context", "agents", "production"]
---

5 ways to think about context: system, user, event, memory,
history. Each is a different context layer. The framework,
the examples, the lesson.

## Context 1: System

The agent's role. The agent's purpose. The agent's
identity.

**Examples:**
- "You are an issue triager. You label issues as bug,
  feature, question, or duplicate."
- "You are a code reviewer. You review PRs and suggest
  improvements."

**When to use:** the agent needs a role. The user wants
the agent to be consistent. The agent is specialized.

**Pros:**
- Consistent (the agent has a clear role)
- Specialized (the agent is focused)
- Auditable (the role is in the prompt)

**Cons:**
- Static (the role doesn't change)
- Limited (the role is one thing)
- Coupled (the role is tied to the agent)

## Context 2: User

The user's identity. The user's preferences. The user's
history.

**Examples:**
- "The user is alice. She prefers TypeScript. She likes
  detailed comments."
- "The user is bob. He prefers short responses. He likes
  emojis."

**When to use:** the agent is personalized. The user is
returning. The agent is long-lived.

**Pros:**
- Personalized (the agent knows the user)
- Adaptive (the agent adapts to the user)
- Trust (the user trusts the agent)

**Cons:**
- Storage (the user info must be stored)
- Privacy (the user info is sensitive)
- Effort (the agent has to learn the user)

## Context 3: Event

The event that triggered the agent. The event payload.
The event context.

**Examples:**
- "An issue was opened: 'App crashes on login'"
- "A PR was opened: 'Add dark mode'"
- "A comment was created: 'How do I install?'"

**When to use:** the agent is reactive. The agent
responds to events. The agent is on-demand.

**Pros:**
- Relevant (the agent has the event)
- Standard (the agent uses the GitHub event)
- Tested (the event is well-defined)

**Cons:**
- Limited (the event is one moment)
- Fragile (the event can be malformed)
- Coupled (the event is tied to the trigger)

## Context 4: Memory

The agent's memory. The agent's history. The agent's
knowledge.

**Examples:**
- "The user has been a contributor for 6 months"
- "The previous run labeled issue #42 as bug"
- "The agent knows the project's coding conventions"

**When to use:** the agent is long-lived. The agent
remembers. The user is returning.

**Pros:**
- Long-lived (the agent remembers)
- Personalized (the agent knows the user)
- Adaptive (the agent learns)

**Cons:**
- Storage (the memory must be stored)
- Retrieval (the memory must be retrieved)
- Cost (the memory is in tokens)

## Context 5: History

The conversation history. The recent messages. The
recent tool calls.

**Examples:**
- "User: 'Help me with issue #42'"
- "Agent: 'What kind of help do you need?'"
- "User: 'I want to label it'"

**When to use:** the agent is conversational. The agent
is in a session. The user is engaged.

**Pros:**
- Conversational (the agent has the context)
- Recent (the agent has the recent messages)
- Standard (the agent uses the LLM context)

**Cons:**
- Limited (the history is bounded)
- Cost (the history is in tokens)
- Latency (the history is processed)

## The 5 together

The 5 are the context. The context is the knowledge. The
knowledge is the value.

| Context | What it provides | Cost |
|---|---|---|
| System | The role | Static |
| User | The identity | Storage |
| Event | The trigger | Standard |
| Memory | The knowledge | Retrieval |
| History | The conversation | Tokens |

The context that matches the need is the right context.

## The 80/20

80% of the value comes from:
- System (the role is clear)
- Event (the trigger is relevant)

20% comes from:
- User (the identity is personalized)
- Memory (the knowledge is long-lived)
- History (the conversation is recent)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the agent specialized? (system)
- Is the agent personalized? (user)
- Is the agent reactive? (event)
- Is the agent long-lived? (memory)
- Is the agent conversational? (history)

The right answer is the right context at the right cost.

## The lesson

5 contexts. 1 context model. 1 lesson: pick the right
combination.

The context that matches the need is the right context.
The context that doesn't match is the wrong context.

The agent era is here. The context is the design. The
design is the choice. The choice is the discipline.
