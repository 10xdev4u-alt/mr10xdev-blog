---
title: "How to write a tool description that the LLM understands"
description: "The tool description is what the LLM sees when deciding which tool to call. A bad description = the LLM calls the wrong tool. How to write a good one. Examples from real tools."
date: 2026-04-06
tags: ["tools", "agents", "prompts"]
---

The tool description is what the LLM sees when deciding which tool
to call. A bad description = the LLM calls the wrong tool. How
to
write a good one. Examples from real tools.

## The structure

A good tool description has 4 parts:

### 1. The one-line summary

What the tool does, in plain English.

```ts
description: 'Post a comment on a GitHub issue or pull request.'
```

Not:
```ts
description: 'Tool to make comments.'  // Too vague
description: 'gh_post_comment_v2_api'  // Internal name
description: 'This is a tool that posts a comment. Comments are
  text. You can post a comment on an issue. Or a PR. Use this
  tool when you want to comment.'  // Too verbose
```

The one-line summary is what the LLM uses for the "should I call
this?" decision. It should be specific, plain, and short.

### 2. The "when to use" guidance

When the LLM should call this tool vs another.

```ts
description: 'Post a comment on a GitHub issue or pull request.
  Use this for any public-facing response. For internal notes
  to maintainers, use the maintainer note tool instead.'
```

This is the "vs another tool" guidance. It helps the LLM choose
the right tool when there are multiple options.

### 3. The constraints

What the tool cannot do. What inputs are required. What will
fail.

```ts
description: `Post a comment on a GitHub issue or pull request.
  Use this for any public-facing response. For internal notes
  to maintainers, use the maintainer note tool instead.
  
  Requires: a valid issue or PR number, and a non-empty body.
  Body is limited to 65536 characters (GitHub's max).
  Body supports GitHub-flavored markdown.
  Will fail if the issue is locked or the user has been banned.`
```

The constraints help the LLM avoid bad calls. The LLM knows
what to provide and what to avoid.

### 4. The example (optional but recommended)

Show the LLM what a good call looks like.

```ts
description: `Post a comment on a GitHub issue or pull request.
  Use this for any public-facing response. For internal notes
  to maintainers, use the maintainer note tool instead.
  
  Requires: a valid issue or PR number, and a non-empty body.
  Body is limited to 65536 characters (GitHub's max).
  Body supports GitHub-flavored markdown.
  Will fail if the issue is locked or the user has been banned.
  
  Example call:
  {
    "issueNumber": 42,
    "body": "Thanks for the report! Can you share the error from the console?"
  }`
```

The example is the most powerful part. The LLM learns the
pattern. The LLM produces consistent output.

## The 4 anti-patterns

### Anti-pattern 1: The function signature

```ts
description: 'github.post_comment(issueNumber: number, body: string)'
```

This is the function signature, not a description. The LLM
already has the function signature (from the tool definition).
Repeating it is noise.

The description is the natural language explanation. The
signature is the type. They're different things.

### Anti-pattern 2: The internal name

```ts
description: 'gh_post_comment_v2_api'
```

This is the internal name. The LLM doesn't know what
`gh_post_comment_v2_api` does. The description should be in
plain English.

### Anti-pattern 3: The marketing speak

```ts
description: 'The best-in-class, industry-leading comment
  posting tool for the modern GitHub-powered workflow.'
```

This is noise. The LLM doesn't care about "best-in-class." The
LLM cares about what the tool does. Cut the marketing speak.

### Anti-pattern 4: The over-explanation

```ts
description: 'This tool allows you to post a comment on a
  GitHub issue or pull request. A comment is a piece of text
  that is added to the issue or pull request. The comment
  appears in the issue timeline. The comment can be markdown.
  The comment has an author. The author is the user that
  called this tool. ... (50 more sentences)'
```

The LLM doesn't need to be taught what a "comment" is. The
LLM knows. Cut the over-explanation.

## The good examples

### github.post_comment

```ts
description: 'Post a comment on a GitHub issue or pull request.
  Use this for any public-facing response to the user who
  opened the issue, the author of the PR, or the author of a
  comment in the thread.
  
  Requires: a valid issue or PR number, and a non-empty body.
  Body is limited to 65536 characters and supports GitHub-flavored
  markdown. The body should be in the same language as the
  issue or PR.
  
  Returns: the comment id and url. The url can be used to
  reference the comment in other tools.
  
  Example call:
  {
    "issueNumber": 42,
    "body": "Thanks for the report! Can you share the error from the console?"
  }'
```

### github.add_labels

```ts
description: 'Add one or more labels to a GitHub issue or pull
  request. Labels must already exist in the repository.
  
  Use this to classify the issue (bug, feature, question,
  etc.) or to signal status (needs-triage, in-progress,
  blocked, etc.).
  
  Requires: a valid issue or PR number, and an array of label
  names. The labels must exist in the repository, or the
  call will fail.
  
  Returns: the labels that were successfully added.
  
  Example call:
  {
    "issueNumber": 42,
    "labels": ["bug", "needs-triage"]
  }'
```

### memory.write

```ts
description: 'Write a key-value entry to the agent\'s persistent
  memory. The memory is stored in the repository and is shared
  across all runs of the agent.
  
  Use this to remember facts that the agent learns, decisions
  it makes, or state it needs to persist.
  
  Requires: a key (string) and content (string). Optionally,
  a metadata object for structured data.
  
  Returns: the entry\'s key, createdAt, and updatedAt.
  
  Example call:
  {
    "key": "user/preferences",
    "content": "{\"theme\": \"dark\"}",
    "metadata": {"source": "issue#42"}
  }'
```

## The pattern

The pattern for every tool description:
1. **One-line summary:** what the tool does
2. **When to use:** vs other tools
3. **Constraints:** what's required, what will fail
4. **Example:** show the LLM what good looks like

The pattern is 50-150 words. The pattern is the standard. The
LLM expects the standard. The standard is what makes the tool
useful.

## The test

The tool description is good if:
- The LLM calls the right tool for the right task
- The LLM doesn't call the tool when it shouldn't
- The LLM provides the right inputs
- The LLM handles the tool's errors gracefully

If any of these fail, the description is wrong. Fix the
description, not the LLM.

## The lesson

4 parts. 4 anti-patterns. 1 test.

The tool description is the LLM's API doc. The description is
what the LLM uses to decide. The decision is the agent's
behavior. The behavior is the product.

The agent that has good tool descriptions is reliable. The
agent that has bad tool descriptions is a toy. The choice is
yours.
