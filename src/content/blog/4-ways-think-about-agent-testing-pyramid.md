---
title: "The 4 ways to think about agent testing pyramid (in production)"
description: "4 ways to think about the testing pyramid: manifest, runtime, integration, eval. Each is a different layer of the pyramid. The framework, the examples, the lesson."
date: 2026-01-04
tags: ["testing", "agents", "production"]
---

4 ways to think about the testing pyramid: manifest,
runtime, integration, eval. Each is a different layer of
the pyramid. The framework, the examples, the lesson.

## Layer 1: Manifest

The manifest is tested. The manifest is valid. The
manifest is the truth.

**Examples:**
- "The manifest has a name"
- "The manifest has triggers"
- "The manifest has a model"

**When to use:** the manifest is the foundation. The
manifest is the contract. The manifest is the version.

**Pros:**
- Fast (the manifest is parsed in milliseconds)
- Cheap (the manifest is just YAML)
- Standard (the manifest is well-defined)

**Cons:**
- Limited (the manifest is static)
- Shallow (the manifest doesn't test behavior)
- Coupled (the manifest is tied to the framework)

## Layer 2: Runtime

The runtime is tested. The runner is tested. The runner
is the engine.

**Examples:**
- "The runner builds the right context"
- "The runner calls the right tool"
- "The runner enforces the maxSteps limit"

**When to use:** the runtime is the engine. The runtime
is the loop. The runtime is the orchestration.

**Pros:**
- Comprehensive (the runtime is the full path)
- Fast (the runtime is mocked)
- Standard (the runtime is well-defined)

**Cons:**
- Brittle (the runtime can change)
- Mocked (the LLM is mocked)
- Limited (the runtime is one run)

## Layer 3: Integration

The integration is tested. The agent + GitHub is tested.
The agent + memory is tested.

**Examples:**
- "The agent labels the issue correctly"
- "The agent posts the comment correctly"
- "The agent reads the file correctly"

**When to use:** the integration is the contract. The
integration is the truth. The integration is the value.

**Pros:**
- Realistic (the integration is real)
- Comprehensive (the integration is the full flow)
- Tested (the integration is tested)

**Cons:**
- Slow (the integration is slow)
- Flaky (the integration can be flaky)
- Cost (the integration costs money)

## Layer 4: Eval

The eval is tested. The behavior is tested. The behavior
is the value.

**Examples:**
- "The agent labels 95% of issues correctly"
- "The agent drafts 80% of release notes correctly"
- "The agent responds to 90% of comments helpfully"

**When to use:** the eval is the trust. The eval is the
quality. The eval is the future.

**Pros:**
- Real (the eval is in the real world)
- Quality (the eval measures quality)
- Trust (the eval builds trust)

**Cons:**
- Slow (the eval takes time)
- Cost (the eval costs money)
- Flaky (the eval can be flaky)

## The 4 layers together

The 4 are the pyramid. The pyramid is the testing. The
testing is the quality.

| Layer | What it tests | Speed | Cost |
|---|---|---|---|
| Manifest | The contract | Fast | Low |
| Runtime | The engine | Medium | Low |
| Integration | The flow | Slow | Medium |
| Eval | The quality | Slowest | High |

The pyramid that matches the need is the right pyramid.

## The 80/20

80% of the value comes from:
- Manifest (the contract is right)
- Runtime (the engine is right)

20% comes from:
- Integration (the flow is right)
- Eval (the quality is right)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Is the contract right? (manifest)
- Is the engine right? (runtime)
- Is the flow right? (integration)
- Is the quality right? (eval)

The right answer is the right layer at the right cost.

## The lesson

4 layers. 1 pyramid. 1 lesson: invest in all 4.

The pyramid that invests in all 4 is the quality pyramid.
The pyramid that invests in 1 is the shallow pyramid. The
quality pyramid is trusted. The shallow pyramid is not.

The agent era is here. The testing is the design. The
design is the discipline. The discipline is the quality.
