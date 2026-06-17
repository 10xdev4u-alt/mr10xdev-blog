---
title: "The 4 ways to think about agent personas (in production)"
description: "4 ways to think about agent personas: the butler, the expert, the peer, the teacher. Each has a different voice, a different role, a different value. The framework, the examples, the lesson."
date: 2026-02-15
tags: ["agents", "personas", "design"]
---

4 ways to think about agent personas: the butler, the expert,
the peer, the teacher. Each has a different voice, a different
role, a different value. The framework, the examples, the
lesson.

## Persona 1: The butler

The butler is helpful. The butler is unobtrusive. The butler
anticipates. The butler is always there.

**Voice:** "I've handled that for you, sir."

**Examples:**
- "I've closed the duplicate issue."
- "I've labeled the bug."
- "I've opened the PR."

**When to use:** the user wants the agent to do the work.
The user doesn't want to think. The user wants results.

**Pros:**
- Fast (the user doesn't have to think)
- Easy (the user just says what they want)
- Invisible (the user doesn't see the work)

**Cons:**
- Risky (the agent can do the wrong thing)
- Surprising (the user doesn't know what happened)
- Limited (the agent can't be the butler for hard tasks)

## Persona 2: The expert

The expert is knowledgeable. The expert is precise. The
expert is authoritative. The expert is the specialist.

**Voice:** "Based on my analysis, I recommend..."

**Examples:**
- "Based on the issue, the bug is in `src/auth.ts`."
- "The performance bottleneck is in the LLM call."
- "The security risk is in the input validation."

**When to use:** the user wants a recommendation. The user
wants analysis. The user wants expertise.

**Pros:**
- Accurate (the expert knows the domain)
- Trustworthy (the expert is consistent)
- Educational (the user learns from the expert)

**Cons:**
- Slow (the expert takes time to think)
- Verbose (the expert explains)
- Rigid (the expert has opinions)

## Persona 3: The peer

The peer is collaborative. The peer is a partner. The peer
is a colleague. The peer works with the user.

**Voice:** "What do you think? Should we..."

**Examples:**
- "I see two approaches. Which do you prefer?"
- "I've drafted the PR. Can you review?"
- "I've labeled the issue. Want me to close it?"

**When to use:** the user wants a partner. The user wants
to collaborate. The user wants to be in the loop.

**Pros:**
- Transparent (the user sees the work)
- Collaborative (the user is in the loop)
- Educational (the user and the agent learn together)

**Cons:**
- Slower (the user has to review)
- More work (the user has to engage)
- Decision fatigue (the user has to decide)

## Persona 4: The teacher

The teacher is educational. The teacher explains. The
teacher guides. The teacher empowers the user.

**Voice:** "Let me explain how this works..."

**Examples:**
- "Here's why the bug happened: ..."
- "Here's how to fix it: ..."
- "Here's how to prevent it in the future: ..."

**When to use:** the user wants to learn. The user wants
to be empowered. The user wants to grow.

**Pros:**
- Educational (the user learns)
- Empowering (the user is more capable)
- Long-term (the user doesn't need the agent next time)

**Cons:**
- Slow (the teacher takes time)
- Verbose (the teacher explains)
- Not for everyone (some users want results, not education)

## The 4 together

The 4 are the personas. The personas are the relationships.
The relationships are the value.

| Persona | Voice | When to use | Pros |
|---|---|---|---|
| Butler | "I've handled that" | The user wants results | Fast, easy |
| Expert | "I recommend..." | The user wants analysis | Accurate, trustworthy |
| Peer | "What do you think?" | The user wants collaboration | Transparent, learning |
| Teacher | "Let me explain" | The user wants to learn | Educational, empowering |

The agent that picks the right persona is the agent that
matches the user. The agent that picks the wrong persona is
the agent that frustrates the user.

## The 80/20

80% of the value comes from:
- Butler (the user wants results)
- Expert (the user wants analysis)

20% comes from:
- Peer (the user wants collaboration)
- Teacher (the user wants to learn)

Focus on the 80% first. Add the 20% as you grow.

## The lesson

4 personas. 1 agent. 1 lesson: pick the right one.

The agent that picks the right persona is the agent that
matches the user. The agent that picks the wrong persona is
the agent that frustrates the user.

The agent era is here. The persona is the design. The
design is the choice. The choice is the discipline.
