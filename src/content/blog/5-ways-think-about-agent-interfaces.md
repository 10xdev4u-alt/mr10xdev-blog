---
title: "The 5 ways to think about agent interfaces (in production)"
description: "5 ways to think about interfaces: text, voice, visual, code, structured. Each is a different interface. The framework, the examples, the lesson."
date: 2025-12-01
tags: ["interfaces", "agents", "design"]
---

5 ways to think about interfaces: text, voice, visual, code,
structured. Each is a different interface. The framework,
the examples, the lesson.

## Interface 1: Text

The interface is text. The text is natural language. The
text is the truth.

**Examples:**
- "Label this issue as bug, feature, or question"
- "Summarize this PR in 1 sentence"
- "Post a comment saying 'Thanks for the report'"

**When to use:** the user is human. The user reads. The
user is the audience.

**Pros:**
- Natural (the text is natural)
- Standard (the text is universal)
- Readable (the text is easy to read)

**Cons:**
- Verbose (the text is verbose)
- Unstructured (the text is unstructured)
- Hard to parse (the text is hard to parse)

## Interface 2: Voice

The interface is voice. The voice is speech. The voice is
the truth.

**Examples:**
- "Hey agent, label this issue"
- "Hey agent, draft a release note"
- "Hey agent, post a comment"

**When to use:** the user is human. The user listens. The
user is on the go.

**Pros:**
- Natural (the voice is natural)
- Fast (the voice is fast to consume)
- Accessible (the voice is accessible)

**Cons:**
- Specific (the voice is for audio)
- Coupled (the voice is tied to the TTS)
- Hard to search (the voice is hard to search)

## Interface 3: Visual

The interface is visual. The visual is a chart. The
visual is the truth.

**Examples:**
- A bar chart of issue labels
- A line chart of agent runs over time
- A pie chart of agent errors

**When to use:** the user is a dashboard. The user sees.
The user is the operator.

**Pros:**
- Visual (the visual is visual)
- Fast (the visual is fast to scan)
- Insightful (the visual is insightful)

**Cons:**
- Specific (the visual is for a specific view)
- Coupled (the visual is tied to the dashboard)
- Hard to test (the visual is hard to test)

## Interface 4: Code

The interface is code. The code is a script. The code is
the truth.

**Examples:**
- A shell script that runs the agent
- A TypeScript file that defines the agent
- A YAML file that configures the agent

**When to use:** the user is a machine. The user runs. The
user is the CI.

**Pros:**
- Structured (the code is structured)
- Testable (the code is testable)
- Standard (the code is universal)

**Cons:**
- Brittle (the code is brittle)
- Coupled (the code is tied to the runtime)
- Hard to read (the code is hard to read)

## Interface 5: Structured

The interface is structured. The structured is JSON. The
structured is the truth.

**Examples:**
- `{"label": "bug", "comment": "Thanks for reporting!"}`
- `{"title": "v0.5.0", "sections": [...]}`
- `{"status": "merged", "url": "https://..."}`

**When to use:** the user is a system. The user parses.
The user is the integration.

**Pros:**
- Parseable (the structured is parseable)
- Testable (the structured is testable)
- Standard (the structured is JSON)

**Cons:**
- Brittle (the structured is tied to the schema)
- Coupled (the structured is tied to the consumer)
- Hard to read (the structured is hard to read)

## The 5 together

The 5 are the interfaces. The interfaces are the
frontiers. The frontiers are the value.

| Interface | Audience | Format |
|---|---|---|
| Text | Human | Natural language |
| Voice | Human (audio) | Speech |
| Visual | Dashboard | Chart |
| Code | Machine | Script |
| Structured | System | JSON |

The interface that matches the audience is the right
interface.

## The 80/20

80% of the value comes from:
- Text (the user reads)
- Structured (the system parses)

20% comes from:
- Voice (the user listens)
- Visual (the user sees)
- Code (the machine runs)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the audience a human? (text, voice)
- Is the audience a machine? (code, structured)
- Is the audience a dashboard? (visual)

The right answer is the right interface at the right
cost.

## The lesson

5 interfaces. 1 interface. 1 lesson: pick the right one.

The interface that matches the audience is the right
interface. The interface that doesn't match is the wrong
interface.

The agent era is here. The interface is the design. The
design is the choice. The choice is the discipline.
