---
title: "The 5 mental models for thinking about agents"
description: "5 mental models for thinking about agents: the file, the coworker, the butler, the librarian, the oracles. Each model gives a different intuition. The right model depends on the use case."
date: 2026-03-08
tags: ["agents", "mental-models", "thinking"]
---

5 mental models for thinking about agents: the file, the
coworker, the butler, the librarian, the oracles. Each model
gives a different intuition. The right model depends on the use
case.

## Model 1: The file

The agent is a file. A `.github/agents/<name>.md` file. The
file is the agent. The process that interprets the file is the
runtime.

**Intuition:** the agent is a piece of code. The agent can
be reviewed, versioned, and refactored. The agent is part of
the repo.

**Use case:** the agent is project-specific. The agent is
tightly integrated with the project. The agent is a tool, not
a service.

**Examples:**
- A triage agent that lives in the repo
- A doc agent that maintains the docs
- A release agent that drafts release posts

## Model 2: The coworker

The agent is a coworker. The agent has a job, a desk, a
schedule. The agent shows up to meetings (runs on triggers).
The agent does the work.

**Intuition:** the agent is a person on the team. The agent
has responsibilities. The agent is reviewed like a person.

**Use case:** the agent does ongoing work. The agent is part
of the team. The agent's output is reviewed by the team.

**Examples:**
- A research agent that investigates topics
- A monitoring agent that watches for anomalies
- A coding agent that writes code

## Model 3: The butler

The agent is a butler. The agent waits for requests. The
agent does the task. The agent is invisible until called.

**Intuition:** the agent is on-demand. The agent is summoned.
The agent is invisible until needed.

**Use case:** the user has ad-hoc tasks. The agent is a
general-purpose helper. The agent is reactive.

**Examples:**
- A "do this task" agent (scaffolding, refactoring, etc.)
- A "research this topic" agent
- A "fix this bug" agent

## Model 4: The librarian

The agent is a librarian. The agent knows where everything
is. The agent retrieves on demand. The agent maintains the
collection.

**Intuition:** the agent is a knowledge worker. The agent's
job is to find the right information. The agent is a search
engine with a memory.

**Use case:** the user needs to find information. The agent
is the entry point. The agent maintains the catalog.

**Examples:**
- A docs agent that finds the right doc
- A code search agent that finds the right file
- A knowledge base agent that finds the right article

## Model 5: The oracles

The agent is an oracle. The agent knows everything. The
agent answers questions. The agent is infallible (almost).

**Intuition:** the agent is a knowledge source. The agent is
the authority. The agent's answer is the truth (with caveats).

**Use case:** the user has a question. The agent is the
expert. The agent's answer is the final word.

**Examples:**
- A "why is this happening" agent
- A "what should I do" agent
- A "is this safe to do" agent

## The 5 together

Each model gives a different intuition. The right model
depends on the use case.

| Model | Intuition | Best for |
|---|---|---|
| File | The agent is code | Project-specific tools |
| Coworker | The agent is a person | Ongoing work |
| Butler | The agent is on-demand | Ad-hoc tasks |
| Librarian | The agent is a search engine | Knowledge retrieval |
| Oracle | The agent is an expert | Decision support |

The agent that matches the right model is the agent that
feels right. The agent that doesn't is the agent that feels
off.

## The 80/20

80% of agents fit one of these models. The model is the
metaphor. The metaphor shapes the design.

- **Triage agent:** the butler (on-demand task)
- **Doc agent:** the librarian (knowledge worker)
- **Research agent:** the librarian (knowledge retrieval)
- **Coding agent:** the coworker (ongoing work)

20% don't fit. They need a custom model. The custom model
is harder to design. The custom model is harder to maintain.

## The lesson

5 models. 1 choice. 1 lesson: pick the right model.

The agent that matches the right model is intuitive. The
agent that doesn't is confusing. The choice is yours.

The agent era is here. The models are the design. The
design is the choice. The choice is the discipline.
