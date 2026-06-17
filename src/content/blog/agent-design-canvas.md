---
title: "The agent design canvas"
description: "A one-page template for designing an agent. The 9 questions you need to answer before writing the manifest. The exercise that saves weeks of wrong building."
date: 2026-04-23
tags: ["agents", "design", "process", "template"]
---

A one-page template for designing an agent. The 9 questions you
need to answer before writing the manifest. The exercise that
saves weeks of wrong building.

## The canvas

```
┌─────────────────────────────────────────────────────┐
│              AGENT DESIGN CANVAS                     │
├─────────────────────────────────────────────────────┤
│                                                      │
│  1. WHO TRIGGERS THE AGENT?                          │
│  ____________________________________________       │
│  ____________________________________________       │
│                                                      │
│  2. WHAT DOES THE AGENT DO?                          │
│  ____________________________________________       │
│  ____________________________________________       │
│                                                      │
│  3. WHAT TOOLS DOES THE AGENT NEED?                  │
│  ____________________________________________       │
│  ____________________________________________       │
│                                                      │
│  4. WHAT MODEL SHOULD THE AGENT USE?                 │
│  ____________________________________________       │
│  ____________________________________________       │
│                                                      │
│  5. WHAT MEMORY DOES THE AGENT NEED?                 │
│  ____________________________________________       │
│  ____________________________________________       │
│                                                      │
│  6. WHAT IS THE AGENT'S PERSONALITY?                 │
│  ____________________________________________       │
│  ____________________________________________       │
│                                                      │
│  7. WHAT ARE THE LIMITS?                             │
│  ____________________________________________       │
│  ____________________________________________       │
│                                                      │
│  8. WHAT APPROVALS ARE NEEDED?                       │
│  ____________________________________________       │
│  ____________________________________________       │
│                                                      │
│  9. HOW WILL YOU MEASURE SUCCESS?                    │
│  ____________________________________________       │
│  ____________________________________________       │
│                                                      │
└─────────────────────────────────────────────────────┘
```

9 questions. One page. 30 minutes to fill out. Saves weeks of
wrong building.

## The 9 questions

### 1. Who triggers the agent?

The agent wakes up on a trigger. The trigger determines the
input, the timing, and the audience.

Examples:
- **GitHub webhook:** new issue, new PR, new comment
- **Cron:** daily, weekly, monthly
- **Manual button:** operator runs it
- **Message queue:** another service posts a job
- **HTTP request:** another service calls an API

Write down the trigger. The rest follows.

### 2. What does the agent do?

The agent's purpose. One sentence. If you can't say it in one
sentence, you don't have a clear purpose yet.

Examples:
- "Triage new issues"
- "Keep the README in sync with the code"
- "Draft a release post when a tag is pushed"
- "Welcome first-time contributors"
- "Post a daily standup"

The sentence becomes the agent's description. It's the
manifest's `description` field. It's the README's headline. It's
the tweet. One sentence.

### 3. What tools does the agent need?

The agent's actions. The tools are the API. The agent can only
do what the tools allow.

Examples:
- A triage agent needs: `post_comment`, `add_labels`, `search_issues`
- A doc agent needs: `get_file`, `create_pr`, `post_comment`
- A release agent needs: `create_pr`, `post_comment`, `memory.read`

Start with the minimum. Each tool is a footgun. Add tools only
when the agent needs them.

### 4. What model should the agent use?

The agent's brain. The model determines the cost, the latency,
the quality.

Examples:
- **Claude Haiku 4:** for simple classification, low cost
- **Claude Sonnet 4.5:** for most tasks, balanced
- **Claude Opus 4:** for hard reasoning, high cost
- **GPT-4o:** for code generation
- **Gemini 2.5 Pro:** for long context
- **Local Llama 3.1:** for offline dev

The model is a trade-off. Start with the cheapest model that
works. Move to a more expensive model only when the cheap one
fails.

### 5. What memory does the agent need?

The agent's history. The memory determines what the agent
remembers.

Examples:
- **Episodic:** "What did I do last time?" — useful for learning
- **Semantic:** "What does the user know about X?" — useful for
  personalization
- **Working:** "What is the current task?" — always in context

Start with episodic. Add semantic if the agent needs to recall
general knowledge. Skip working memory — it's just the system
prompt.

### 6. What is the agent's personality?

The agent's voice. The personality is the system prompt. It's
how the agent talks.

Examples:
- "You are a careful, friendly issue triager. Be concise."
- "You are a senior code reviewer. Be specific and kind."
- "You are a release engineer. Be careful and thorough."

The personality is the tone. It's the difference between "fix
this bug" and "I noticed this bug — here's a fix." Both can be
correct, but the tone is different.

### 7. What are the limits?

The agent's safety rails. The limits determine what the agent
can't do.

Examples:
- `maxSteps: 8` — the agent can take at most 8 LLM calls
- `timeoutMs: 60000` — the agent can run for at most 60s
- `maxTotalTokens: 100000` — the agent can use at most 100K
  tokens
- `maxToolCalls: 20` — the agent can call at most 20 tools

The limits are the safety net. Without them, the agent can do
anything. With them, the agent can do only what the limits
allow.

### 8. What approvals are needed?

The agent's gates. The approvals determine when the human
reviews.

Examples:
- **Always:** every action requires approval
- **Read:** read tools run without approval, write tools require
- **Manual:** every action is logged, but no approval required
  (for fully automated pipelines)

The default is `write: required` — read tools run without
approval, write tools require approval. This is the safe
default.

### 9. How will you measure success?

The agent's metric. The measurement determines when the agent
is "good enough."

Examples:
- **Accuracy:** the agent labels issues correctly X% of the time
- **Latency:** the agent responds in under Y seconds
- **Cost:** the agent costs less than $Z per run
- **Coverage:** the agent handles X% of incoming events
- **User satisfaction:** the user rates the agent X/5

The measurement is the goal. If you can't measure it, you
can't improve it. If you can measure it, you have a target.

## The exercise

Take 30 minutes. Fill out the canvas for the agent you want to
build. Don't write code. Don't write the manifest. Just answer
the 9 questions.

The 30 minutes will save weeks of wrong building. The canvas
forces you to think about the design before the implementation.
The 9 questions cover the 9 things every agent needs.

When the canvas is filled out, you have a clear picture of the
agent. The manifest is just the canvas in YAML.

## The canvas for a real agent

For the `triage` agent in this blog:

```
1. WHO TRIGGERS THE AGENT?
   - GitHub webhook on issues.opened

2. WHAT DOES THE AGENT DO?
   - Triage new issues by labeling, asking for repro, and
     closing obvious duplicates.

3. WHAT TOOLS DOES THE AGENT NEED?
   - github.post_comment
   - github.add_labels
   - github.search_issues
   - github.close_issue

4. WHAT MODEL SHOULD THE AGENT USE?
   - Claude Sonnet 4.5 (most tasks)
   - Claude Haiku 4 (if cost is a concern)

5. WHAT MEMORY DOES THE AGENT NEED?
   - Episodic: what did I label last time on similar issues?
   - Semantic: what conventions does this project use?

6. WHAT IS THE AGENT'S PERSONALITY?
   - "You are a careful, friendly issue triager. Be concise."

7. WHAT ARE THE LIMITS?
   - maxSteps: 6
   - timeoutMs: 60000
   - maxTotalTokens: 100000

8. WHAT APPROVALS ARE NEEDED?
   - Read: never
   - Write: required (for post_comment, add_labels, close_issue)

9. HOW WILL YOU MEASURE SUCCESS?
   - 95%+ correct labels (measured against human-labeled ground
     truth)
   - < 5s p95 latency
   - < $0.05 per issue
```

This canvas is the design. The manifest is the implementation.

## The lesson

The canvas is the design phase. The manifest is the
implementation phase. The 30 minutes of design saves weeks of
implementation.

The 9 questions cover the 9 things every agent needs. The
canvas forces you to answer them before writing code. The
answers become the spec. The spec becomes the manifest. The
manifest becomes the agent.

If you skip the canvas, you'll write the manifest 3 times.
If you do the canvas, you'll write it once.

The agent era is here. The canvas is the starting point. Use it.
