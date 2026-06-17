---
title: "How to write the perfect agent onboarding"
description: "The first 5 minutes decide if the user stays. The 4 things to do: install, run, edit, customize, deploy. The 4 things to avoid. The template that gets the user to value in 5 minutes."
date: 2026-03-14
tags: ["onboarding", "agents", "ux"]
---

The first 5 minutes decide if the user stays. The 4 things to
do: install, run, edit, customize, deploy. The 4 things to
avoid. The template that gets the user to value in 5 minutes.

## The first 5 minutes

The first 5 minutes of a user's experience determines whether
they stay or leave. The first 5 minutes is the onboarding.

The first 5 minutes is also when the user is most impatient,
most skeptical, and most likely to give up. The user has 100
alternatives. The user is one click away from leaving.

The first 5 minutes is the most important 5 minutes of the
product.

## The 4 things to do

### 1. Install in 30 seconds

The user should be able to install the agent in 30 seconds.
One command, no configuration.

```bash
npm install -g gitagent
```

The install is the first impression. The install should be
fast, simple, and obvious. The user should feel like the
product is fast, simple, and obvious.

### 2. Run an example in 2 minutes

The user should be able to run an example in 2 minutes. The
example should produce visible output.

```bash
cd your-repo
gitagent init triage
gitagent validate
gitagent dev -e issues.opened -p ./fixture.json
```

The example is the second impression. The example should
work, should be fast, should produce visible output. The user
should feel like the product is working.

### 3. Edit the example in 1 minute

The user should be able to edit the example in 1 minute. The
edit should be a small change that has a visible effect.

```yaml
# In .github/agents/triage.md
# Change the personality to make the agent funnier
personality: |
  You are a friendly, slightly sarcastic issue triager.
  You like to add a one-liner joke to every comment.
```

The edit is the third impression. The edit should be small,
visible, and rewarding. The user should feel like the product
is hackable.

### 4. Deploy in 1 minute

The user should be able to deploy the agent in 1 minute. The
deploy should be a single command, no configuration.

```bash
gitagent serve
```

The deploy is the fourth impression. The deploy should be
fast, simple, and obvious. The user should feel like the
product is production-ready.

## The 4 things to avoid

### 1. Too many steps

The user has to do 10 things before seeing value. The user
gives up at step 5.

The fix: 4 steps, max. Each step is one command. Each step
produces visible output.

### 2. Too much configuration

The user has to configure 20 things before running. The
user doesn't know which matter. The user gives up.

The fix: zero configuration. The defaults are good. The user
can customize later.

### 3. Too much theory

The user has to read 10 pages before running. The user
doesn't want to read. The user gives up.

The fix: 0 pages of theory. The README is a quick start.
The docs are linked for later.

### 4. Too much output

The example produces 1000 lines of output. The user is
overwhelmed. The user doesn't know what to look at.

The fix: short output. 10 lines max. The user can scroll up
for more if needed.

## The template

```markdown
## Quick start

```bash
# 1. Install (30 seconds)
npm install -g gitagent

# 2. Initialize (10 seconds)
cd your-repo
gitagent init my-agent

# 3. Validate (1 second)
gitagent validate

# 4. Run locally (5 seconds)
gitagent dev -e manual -p ./fixture.json
```

Total: 1 minute. 4 commands. 0 configuration. Visible output.

## The 5-minute test

The onboarding passes the 5-minute test if:
- A new user can install in 30 seconds
- A new user can run an example in 2 minutes
- A new user can edit the example in 1 minute
- A new user can deploy in 1 minute
- A new user sees value at every step

If any of these fail, the onboarding is failing. Fix the
onboarding.

## The 80/20

80% of the value comes from:
- Install in 30 seconds
- Run an example in 2 minutes

20% comes from:
- Edit the example
- Deploy

Focus on the 80% first. Add the 20% as you grow.

## The lesson

4 things. 4 anti-patterns. 1 test.

The onboarding is the first impression. The first impression
is the difference between a user and a non-user. The choice
is yours.

The agent era is here. The onboarding is the door. The door
should be open. The open door is the start.
