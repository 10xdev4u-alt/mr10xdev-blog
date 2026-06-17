---
title: "How to use AI to build an AI project"
description: "The meta-loop. I used Claude Code to build gitagent. The 5 ways AI helped: scaffolding, refactoring, test writing, docs, debugging. The 3 ways AI hurt: over-abstraction, hallucinated APIs, context overflow. The honest balance."
date: 2026-03-16
tags: ["ai", "meta", "process", "claude"]
---

The meta-loop. I used Claude Code to build gitagent. The 5 ways
AI helped: scaffolding, refactoring, test writing, docs,
debugging. The 3 ways AI hurt: over-abstraction, hallucinated
APIs, context overflow. The honest balance.

## The 5 ways AI helped

### 1. Scaffolding

I asked Claude Code to scaffold the initial project
structure. It produced ~3,000 lines of TypeScript in 30
minutes. The structure was right. The files were in the right
place. The patterns were consistent.

The savings: 2-3 days of manual scaffolding. The cost: I had
to review and refine everything.

### 2. Refactoring

I asked Claude Code to refactor a 500-line file into 5
smaller files. It did it in 5 minutes. The smaller files were
right. The exports were correct. The tests still passed.

The savings: 1-2 hours of manual refactoring. The cost: I had
to verify the behavior was unchanged.

### 3. Test writing

I asked Claude Code to write tests for a complex function.
It wrote 20 tests in 10 minutes. The tests covered the happy
path, the edge cases, the errors. I reviewed and added 5
more.

The savings: 1-2 hours of manual test writing. The cost: I had
to verify the tests actually tested what I wanted.

### 4. Documentation

I asked Claude Code to write the README, the manifest spec,
the tool reference, the architecture doc. It produced ~5,000
words in 30 minutes. The docs were clear, specific, and
well-structured.

The savings: 2-3 days of manual documentation. The cost: I
had to verify the docs matched the code.

### 5. Debugging

I asked Claude Code to debug a tricky test failure. It found
the bug in 2 minutes. The bug was a typo in a Zod schema. I
would have spent 30 minutes finding it.

The savings: 30 minutes of manual debugging. The cost: I had
to verify the fix was correct.

## The 3 ways AI hurt

### 1. Over-abstraction

Claude Code tends to over-abstract. It creates interfaces
where they're not needed. It creates classes where functions
would do. It creates generics where simple types would do.

The cost: I had to refactor the over-abstraction. The
refactor took longer than if I had written the code directly.

The fix: be explicit. "Don't create interfaces unless they're
needed. Don't use generics unless there are 3+ types that share
the structure."

### 2. Hallucinated APIs

Claude Code sometimes hallucinates APIs that don't exist. It
invents a function that "should" exist but doesn't. It uses a
parameter that the real function doesn't accept.

The cost: the code compiles but doesn't work. I had to
discover the hallucination by running the code.

The fix: always run the code after Claude Code changes it.
Always check the docs for the actual API. Never trust Claude
Code's API knowledge.

### 3. Context overflow

Claude Code has a context window. When the window fills up,
it forgets the earlier context. The output becomes less
relevant. The mistakes become more common.

The cost: I had to re-prompt with the relevant context. The
re-prompting took time.

The fix: keep the context focused. Don't dump the whole
codebase. Use the file path to load the relevant file. Use
`@filename` to reference specific files.

## The honest balance

AI helped me 5x. AI hurt me 1x. Net: 4x faster.

The savings:
- 5-7 days of manual work over 60 commits
- ~5 hours of debugging
- ~2 hours of documentation
- ~2 hours of test writing

The cost:
- ~2 hours of refactoring over-abstraction
- ~1 hour of debugging hallucinated APIs
- ~1 hour of re-prompting context overflow

Net savings: ~12 days. The 12 days were spent on more
features, more tests, more docs. The compound effect is real.

## The 5 rules for using AI on AI projects

### Rule 1: Use AI for the 80%, not the 100%

AI is great for scaffolding, refactoring, test writing, docs,
debugging. AI is bad for architecture, design, key decisions.

Use AI for the 80% of work that's mechanical. Do the 20% by
hand.

### Rule 2: Always review the output

Never trust AI output without review. AI makes mistakes. The
mistakes are subtle. The review is the safety net.

The review: read the code, run the code, test the code. The
review is the discipline.

### Rule 3: Be specific

The more specific the prompt, the better the output. "Make
this better" gives bad output. "Refactor this 500-line file
into 5 smaller files, with the same exports" gives good
output.

The prompt is the input. The input is the output. Be specific.

### Rule 4: Use AI for the boring stuff

AI is great for the boring stuff. The boilerplate. The test
boilerplate. The doc boilerplate. The boring stuff is the 80%
of the work.

Use AI for the boring stuff. Do the interesting stuff by
hand. The interesting stuff is the 20%. The interesting stuff
is the value.

### Rule 5: Iterate with AI

Don't ask for the perfect output. Ask for a draft. Review
the draft. Ask for changes. Iterate.

The iteration is the value. The iteration is the quality. The
iteration is the cost. The cost is worth it.

## The meta-lesson

I used AI to build an AI project. The result: 4x faster. The
caveat: 1x worse in some places. The net: 4x faster.

The agent era is here. The AI is the maintainer. The maintainer
needs the AI. The AI is the leverage. The leverage compounds.

Build with AI. Review carefully. Iterate. The discipline is
the same. The AI is the tool. The tool is the leverage.
