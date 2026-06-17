---
title: "The 5 ways to think about agent prompts (in production)"
description: "5 ways to think about prompts: structure, examples, constraints, output, evaluation. Each is a lever for improving prompt quality. The framework, the examples, the lesson."
date: 2026-02-16
tags: ["prompts", "agents", "best-practices"]
---

5 ways to think about prompts: structure, examples, constraints,
output, evaluation. Each is a lever for improving prompt quality.
The framework, the examples, the lesson.

## Lever 1: Structure

The prompt has a clear structure. The structure is the same
every time. The structure is easy to read.

**Bad:**
> Triage the issue. Use bug, feature, question, or duplicate.
> Add a comment if needed.

**Good:**
> You are an issue triager.
>
> ## Your job
> Triage the issue using one label.
>
> ## Labels
> - bug: broken behavior
> - feature: new request
> - question: how-to
> - duplicate: already exists
>
> ## Output
> 1. The label
> 2. A comment (if needed)
>
> ## Constraints
> - One label only
> - Be brief

The structured prompt is easier to read. The structured
prompt is easier to test. The structured prompt is easier
to improve.

## Lever 2: Examples

The prompt has examples. The examples show the model what
to do. The examples are real (not "simplified for clarity").

**Bad:**
> Add a label.

**Good:**
> Example 1:
> - Title: "App crashes on login"
> - Body: "Steps to reproduce: ..."
> - Label: bug
> - Comment: "Thanks for reporting. I'm looking into this."
>
> Example 2:
> - Title: "Add dark mode"
> - Body: "Would love a dark mode option."
> - Label: feature
> - Comment: "Thanks for the suggestion. We'll consider it."

The examples teach the model. The examples are the truth.
The examples are the test.

## Lever 3: Constraints

The prompt has constraints. The constraints limit the
output. The constraints are explicit.

**Examples:**
- "One label only"
- "Be brief"
- "Don't use markdown"
- "Always include the issue number"
- "Never close the issue"

The constraints are the rules. The rules are the safety.
The safety is the value.

## Lever 4: Output format

The prompt specifies the output format. The format is
parseable. The format is testable.

**Bad:**
> Triage the issue.

**Good:**
> Output JSON:
> ```json
> {
>   "label": "bug" | "feature" | "question" | "duplicate",
>   "comment": "string (optional)"
> }
> ```

The structured output is testable. The structured output
is parseable. The structured output is reliable.

## Lever 5: Evaluation

The prompt has an evaluation. The evaluation tests the
output. The evaluation is automated.

**Examples:**
- "The label must be one of: bug, feature, question, duplicate"
- "The comment must be < 200 chars"
- "The comment must mention the issue number"
- "The JSON must be valid"

The evaluation is the test. The test is the safety net.
The safety net is the confidence.

## The 5 together

The 5 are the prompt quality. The quality is the model
output. The output is the value.

| Lever | What it improves | How to test |
|---|---|---|
| Structure | Readability | Code review |
| Examples | Accuracy | Eval suite |
| Constraints | Safety | Eval suite |
| Output format | Testability | Schema validation |
| Evaluation | Confidence | Eval suite |

The prompt that has all 5 is the prompt that scales. The
prompt that has 1 is the prompt that fails.

## The 80/20

80% of the value comes from:
- Structure (the prompt is readable)
- Examples (the prompt is accurate)

20% comes from:
- Constraints (the prompt is safe)
- Output format (the prompt is testable)
- Evaluation (the prompt is confident)

Focus on the 80% first. Add the 20% as you grow.

## The lesson

5 levers. 1 prompt. 1 lesson: invest in all 5.

The prompt that invests in all 5 is the prompt that scales.
The prompt that invests in 1 is the prompt that fails.

The agent era is here. The prompt is the design. The
design is the discipline. The discipline is the quality.
