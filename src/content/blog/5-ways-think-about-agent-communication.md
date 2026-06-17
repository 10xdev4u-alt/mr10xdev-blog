---
title: "The 5 ways to think about agent communication (in production)"
description: "5 ways to think about communication: text, code, structured, visual, voice. Each is a different communication channel. The framework, the examples, the lesson."
date: 2025-12-31
tags: ["communication", "agents", "production"]
---

5 ways to think about communication: text, code, structured,
visual, voice. Each is a different communication channel.
The framework, the examples, the lesson.

## Channel 1: Text

The agent communicates in text. The text is natural
language. The text is for humans.

**Examples:**
- "I've labeled the issue as 'bug'."
- "I've drafted the release notes."
- "I've closed the PR."

**When to use:** the user is a human. The user reads. The
user is the audience.

**Pros:**
- Natural (the text is natural)
- Standard (the text is universal)
- Readable (the text is easy to read)

**Cons:**
- Verbose (the text is verbose)
- Unstructured (the text is unstructured)
- Hard to parse (the text is hard to parse)

## Channel 2: Code

The agent communicates in code. The code is a script. The
code is for machines.

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

## Channel 3: Structured

The agent communicates in structured data. The data is
JSON. The data is for systems.

**Examples:**
- `{"label": "bug", "comment": "Thanks for reporting!"}`
- `{"title": "v0.5.0", "sections": [...]}` (release notes)
- `{"status": "merged", "url": "https://..."}` (PR status)

**When to use:** the user is a system. The user parses.
The user is the integration.

**Pros:**
- Parseable (the data is parseable)
- Testable (the data is testable)
- Standard (the data is JSON)

**Cons:**
- Brittle (the data is tied to the schema)
- Coupled (the data is tied to the consumer)
- Hard to read (the data is hard to read)

## Channel 4: Visual

The agent communicates visually. The visual is a chart.
The visual is for dashboards.

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

## Channel 5: Voice

The agent communicates in voice. The voice is speech. The
voice is for humans.

**Examples:**
- "I've labeled the issue as bug."
- "The release is ready."
- "The PR is merged."

**When to use:** the user is a human. The user listens.
The user is on the go.

**Pros:**
- Natural (the voice is natural)
- Fast (the voice is fast to consume)
- Accessible (the voice is accessible)

**Cons:**
- Specific (the voice is for audio)
- Coupled (the voice is tied to the TTS)
- Hard to search (the voice is hard to search)

## The 5 together

The 5 are the channels. The channels are the interfaces.
The interfaces are the value.

| Channel | Audience | Format |
|---|---|---|
| Text | Human | Natural language |
| Code | Machine | Script |
| Structured | System | JSON |
| Visual | Dashboard | Chart |
| Voice | Human (audio) | Speech |

The channel that matches the audience is the right
channel.

## The 80/20

80% of the value comes from:
- Text (the user reads)
- Structured (the system parses)

20% comes from:
- Code (the machine runs)
- Visual (the dashboard shows)
- Voice (the user listens)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the audience a human? (text, voice)
- Is the audience a machine? (code, structured)
- Is the audience a dashboard? (visual)

The right answer is the right channel at the right cost.

## The lesson

5 channels. 1 communication. 1 lesson: pick the right one.

The channel that matches the audience is the right
channel. The channel that doesn't match is the wrong
channel.

The agent era is here. The communication is the design.
The design is the choice. The choice is the discipline.
