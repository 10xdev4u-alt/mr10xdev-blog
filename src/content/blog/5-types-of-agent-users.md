---
title: "The 5 types of agent users (and what each wants)"
description: "5 types of agent users: the skeptic, the newbie, the power user, the integrator, the evaluator. What each wants, what each fears, what each will say about your agent. Design for all 5."
date: 2026-03-11
tags: ["agents", "users", "design"]
---

5 types of agent users: the skeptic, the newbie, the power user,
the integrator, the evaluator. What each wants, what each
fears, what each will say about your agent. Design for all 5.

## Type 1: The skeptic

The skeptic doesn't trust the agent. They want to see what
the agent did, why, and what the alternative was. They review
every action.

**What they want:**
- Transparency (show your work)
- Recoverability (be undoable)
- Honesty (admit mistakes)
- Control (let me override)

**What they fear:**
- The agent doing something they didn't ask for
- The agent's mistakes being irreversible
- The agent being a black box

**What they say:**
- "Why did the agent do that?"
- "Can I undo that?"
- "I don't trust it yet."

**Design for them:**
- Approval flow for all write tools
- Trace visible
- Reasoning in comments
- Easy to disable
- Easy to override

## Type 2: The newbie

The newbie doesn't know what the agent can do. They want to
be guided through the basics. They want examples.

**What they want:**
- Quick start (5 minutes to value)
- Examples (5+ real examples)
- Defaults (works out of the box)
- Documentation (clear, specific, brief)

**What they fear:**
- The agent being too complex
- The agent not working for their use case
- The agent being a waste of time

**What they say:**
- "How do I start?"
- "Does it do X?"
- "Is there an example?"

**Design for them:**
- A 5-minute quick start
- 5+ real examples
- Great defaults (works out of the box)
- Clear, specific docs

## Type 3: The power user

The power user wants to customize everything. They want to
read the source code. They want to extend the agent.

**What they want:**
- Customization (let me change anything)
- Documentation (let me understand everything)
- Examples (let me learn from others)
- Extensibility (let me add my own tools)

**What they fear:**
- The agent being a black box
- The agent not being customizable
- The agent not being extensible

**What they say:**
- "Can I add my own tool?"
- "Can I customize the prompt?"
- "Can I extend the agent?"

**Design for them:**
- Documented manifest format
- 5+ examples of customizations
- Customizable prompts, models, tools
- Plugin/extension points

## Type 4: The integrator

The integrator wants to put the agent in their existing
system. They want to use the agent's API. They want to
integrate with their tools.

**What they want:**
- API (let me call the agent from my code)
- SDK (let me embed the agent in my app)
- Hooks (let me extend the agent's behavior)
- Documentation (let me understand the API)

**What they fear:**
- The agent being a black box
- The agent not being embeddable
- The agent not being API-accessible

**What they say:**
- "How do I call this from my code?"
- "Can I embed this in my app?"
- "Is there a TypeScript SDK?"

**Design for them:**
- Public API with TypeScript types
- Embeddable SDK
- Hooks and events
- Comprehensive API docs

## Type 5: The evaluator

The evaluator wants to know if the agent is good. They want
metrics. They want benchmarks. They want to compare to
alternatives.

**What they want:**
- Metrics (give me the data)
- A/B testing (let me compare)
- Cost (let me optimize for cost)
- Quality (let me optimize for quality)

**What they fear:**
- The agent not being measurable
- The agent not being comparable
- The agent being worse than alternatives

**What they say:**
- "What's the accuracy?"
- "How does it compare to X?"
- "What's the cost per run?"

**Design for them:**
- Eval tools
- Metrics (cost, latency, accuracy)
- A/B testing
- Comparison benchmarks

## The 5 together

Each user type has different needs. Each user type will say
different things. The agent that supports all 5 is durable.

| User | What they want | What they fear | What they say |
|---|---|---|---|
| Skeptic | Transparency | Mistakes | "Why?" |
| Newbie | Quick start | Complexity | "How?" |
| Power user | Customization | Black box | "Can I?" |
| Integrator | API | Not embeddable | "How do I call?" |
| Evaluator | Metrics | Not measurable | "What's the accuracy?" |

The agent that supports all 5 is the one that grows. The
agent that supports one is the one that plateaus.

## The 80/20

80% of the value comes from:
- The skeptic (transparency, recoverability)
- The newbie (quick start, examples)

20% comes from:
- The power user (customization)
- The integrator (API)
- The evaluator (metrics)

Focus on the 80% first. Add the 20% as you grow.

## The lesson

5 user types. 5 different needs. 1 design.

The agent that supports all 5 is durable. The agent that
supports one is fragile. The choice is yours.

The agent era is here. The users are the design. The design
is the choice. The choice is the discipline.
