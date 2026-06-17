---
title: "The 4 personas of agent users"
description: "Agent users come in 4 types: skeptics, delegators, tinkerers, optimizers. Each interacts with the agent differently. Design for all 4. Examples from real users."
date: 2026-04-15
tags: ["agents", "users", "design", "personas"]
---

Agent users come in 4 types: skeptics, delegators, tinkerers,
optimizers. Each interacts with the agent differently. Design for
all 4. Examples from real users.

## Persona 1: The skeptic

The skeptic doesn't trust the agent. They want to see exactly
what the agent did, why, and what the alternative was. They
review every action. They disable write permissions by default.

**Behavior:**
- Reviews every tool call before approval
- Reads the trace after every run
- Disables auto-merge, auto-deploy, auto-everything
- Asks "why did you do that?" for every action
- Wants to be able to override the agent at any time

**What they want from the agent:**
- Transparency (show your work)
- Recoverability (be undoable)
- Honesty (admit mistakes)
- Control (let me override)

**Design for them:**
- Default approval to `required` for all write tools
- Make the trace easy to access
- Make the agent's reasoning visible in comments
- Add a "what would you do differently" prompt for the agent
- Never auto-merge

**Examples:**
- Security-conscious engineers
- New users who haven't built trust yet
- Anyone deploying to production

## Persona 2: The delegator

The delegator trusts the agent. They want to give the agent a
task and get a result. They review the result, not the process.
They enable write permissions for trusted agents.

**Behavior:**
- Sets the task and walks away
- Reviews the output, not the steps
- Enables auto-merge for trusted agents
- Uses templates and presets
- Wants the agent to be opinionated

**What they want from the agent:**
- Speed (do the task fast)
- Accuracy (do the task right)
- Opinion (have a default)
- Templates (give me a starting point)

**Design for them:**
- Make the API simple
- Provide templates and presets
- Document the "happy path"
- Add opinionated defaults
- Add a "fast mode" that skips approval

**Examples:**
- Power users who have built trust
- Managers who delegate
- Anyone who values time over control

## Persona 3: The tinkerer

The tinkerer wants to customize the agent. They read the
manifest, edit it, add tools, change the personality. They
want the agent to be a starting point, not a finished product.

**Behavior:**
- Reads the agent's manifest
- Edits the system prompt
- Adds custom tools
- Changes the model
- Shares their customizations

**What they want from the agent:**
- Customization (let me change it)
- Documentation (let me understand it)
- Examples (let me learn from it)
- Extensibility (let me add to it)

**Design for them:**
- Document the manifest format thoroughly
- Provide examples of common customizations
- Make the API composable
- Allow tools to be added without modifying the core
- Publish the agent as a starting point

**Examples:**
- Power users who like to tinker
- Open-source contributors
- Anyone who wants to learn by doing

## Persona 4: The optimizer

The optimizer wants the agent to be the best it can be. They
run evals, track accuracy, optimize prompts, switch models.
They treat the agent like a product.

**Behavior:**
- Runs eval suites on every model change
- Tracks accuracy over time
- Optimizes prompts for cost and quality
- A/B tests different agents
- Shares their findings

**What they want from the agent:**
- Metrics (give me the data)
- A/B testing (let me compare)
- Cost (let me optimize for cost)
- Quality (let me optimize for quality)

**Design for them:**
- Add observability (every LLM call is traced)
- Add eval tools (run a suite of cases)
- Add metrics (cost, latency, accuracy)
- Add A/B testing (run two agents, compare)
- Document the eval methodology

**Examples:**
- ML engineers
- Data scientists
- Anyone who treats the agent as a system to be optimized

## The 4 together

Most users are a mix of 2-3 personas. The skeptic becomes a
delegator after 50+ actions. The tinkerer becomes an optimizer
after 100+ actions. The delegator becomes a skeptic after a
failure.

The personas are not fixed. They're roles that users shift
between based on context:
- **New agent:** skeptic + tinkerer
- **Trusted agent:** delegator
- **Production issue:** skeptic
- **Improving performance:** optimizer

Design for the shift. The same agent should work for all 4
personas.

## The design implications

For each persona, the design has different implications:

### Skeptic design
- Approval required by default
- Trace visible
- Reasoning in comments
- Easy to disable
- Easy to override

### Delegator design
- Simple API
- Templates and presets
- Opinionated defaults
- Fast mode
- Auto-merge for trusted agents

### Tinkerer design
- Documented manifest format
- Examples
- Composable API
- Custom tools without core changes
- Open-source

### Optimizer design
- Observability
- Eval tools
- Metrics
- A/B testing
- Cost tracking

The full design supports all 4. The MVP supports the skeptic.
The polish adds the other 3.

## The metric

How do you know which persona is your user? The metric is the
behavior:
- **Skeptic:** reviews every action, low auto-mode usage
- **Delegator:** high auto-mode usage, low review rate
- **Tinkerer:** customized manifests, custom tools
- **Optimizer:** eval suite usage, metric tracking

Track these. Optimize for the mix. The mix tells you who your
users are.

## The lesson

4 personas. 4 design implications. 4 metrics.

The user is not a single thing. The user is a mix of roles
that shift based on context. The design must support all 4.

The agent that supports all 4 is durable. The agent that
supports only one is fragile. The choice is yours.

The agent era is here. The personas are the design. Design for
all 4. The agent that serves all 4 wins.
