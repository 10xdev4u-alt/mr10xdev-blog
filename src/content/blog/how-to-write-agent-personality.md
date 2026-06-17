---
title: "How to write an agent personality"
description: "The personality is the system prompt. The personality is the agent's voice. The personality is the difference between 'fix this' and 'I noticed this issue and wrote a fix'. How to write one that works."
date: 2026-04-08
tags: ["agents", "prompts", "personality"]
---

The personality is the system prompt. The personality is the
agent's voice. The personality is the difference between "fix
this" and "I noticed this issue and wrote a fix". How to write
one that works.

## The 4 parts of a personality

A good agent personality has 4 parts:

### 1. The role (1 sentence)

Who is the agent? Be specific.

```markdown
You are a careful, friendly issue triager for an open-source project.
```

Not:
```markdown
You are an AI agent that helps with things.
```

The first is specific. The LLM knows what to do. The second is
vague. The LLM guesses.

### 2. The behavior (3-5 bullets)

What does the agent do? Be specific.

```markdown
When a new issue is opened:
- Read the title and body carefully.
- Search for similar past issues.
- Apply one label: bug, feature, question, or duplicate.
- If duplicate, post a comment and close.
- If bug and no repro, ask for one.
```

Not:
```markdown
- Help the user
- Be useful
- Do the right thing
```

The first is specific. The LLM knows what to do. The second is
vague. The LLM guesses.

### 3. The constraints (2-3 bullets)

What does the agent NOT do? Be specific.

```markdown
Constraints:
- Never close issues labeled bug, feature, or question.
- Never assign labels without reading the issue.
- Be concise. One short comment per issue.
- Do not promise timelines or features on behalf of maintainers.
```

The constraints prevent the most common mistakes. The LLM
follows the constraints. The user is protected.

### 4. The examples (1-3)

Show the agent what good output looks like. Be specific.

```markdown
Example 1: Bug report
- Title: "App crashes on login"
- Body: "Steps to reproduce: 1. Open the app. 2. Click login. 3. App crashes."
- Action: Apply label `bug`. Post comment "Thanks for the report!
  Can you share the error from the console?".

Example 2: Feature request
- Title: "Add dark mode"
- Body: "Would love a dark mode for the dashboard."
- Action: Apply label `feature`. No comment. (The maintainer will
  respond.)
```

The examples are the most powerful part. The LLM learns the
pattern. The user sees consistent output.

## The 4 anti-patterns

### Anti-pattern 1: The roleplay

```markdown
You are a friendly, helpful AI assistant. You love helping users.
You are passionate about open source. You are excited to help!
```

The roleplay is noise. The LLM doesn't need to be "excited." The
LLM needs to be specific. Cut the roleplay.

### Anti-pattern 2: The moralizing

```markdown
You should always be ethical, fair, and unbiased. You should
respect user privacy. You should not discriminate.
```

The moralizing is noise. The LLM is already trained to be
ethical. The personality is the agent's specific behavior, not
its general morality. Cut the moralizing.

### Anti-pattern 3: The wishlist

```markdown
You should be helpful, efficient, accurate, friendly, fast,
thorough, polite, professional, knowledgeable, patient,
clear, concise, complete, and reliable.
```

The wishlist is contradictory. You can't be fast and thorough.
You can't be concise and complete. The LLM tries to satisfy
all of them and fails. Cut the wishlist.

### Anti-pattern 4: The legal disclaimer

```markdown
You are not a replacement for professional advice. You are not
liable for any damages. You are not responsible for any
decisions made based on your output.
```

The legal disclaimer is noise. The user knows the agent isn't a
replacement for professional advice. The user knows the agent
isn't liable. The user has clicked through 1000 disclaimers
already. Cut the legal disclaimer.

## The test

The personality is good if:
- The LLM produces consistent output across runs
- The output matches the examples
- The LLM follows the constraints
- The LLM doesn't do the wrong thing when given ambiguous input

If any of these fail, the personality is wrong. Fix the
personality, not the LLM.

## The 80/20

80% of the value comes from:
- The role (specific, clear)
- The behavior (specific, clear)
- The constraints (specific, clear)

20% of the value comes from:
- The examples (show, don't tell)

If you're short on time, do the 80% first. Add the examples
later. The examples are the polish.

## The iteration

The personality is never done. The personality is iterated
based on:
- The output (does it match what you want?)
- The user feedback (does the user like the agent?)
- The eval suite (does the agent's accuracy improve?)

The iteration cycle:
1. Write the personality
2. Test with the eval suite
3. Get user feedback
4. Adjust the personality
5. Repeat

The cycle is monthly. The personality evolves. The agent
improves.

## The lesson

4 parts. 4 anti-patterns. 1 test.

The personality is the system prompt. The personality is the
agent's voice. The personality is the difference between a toy
and a tool.

The agent that has a good personality is a peer. The agent
that has a bad personality is a chatbot. The choice is yours.

The agent era is here. The personality is the foundation. Write
it well. Iterate on it. The agent is the personality.
