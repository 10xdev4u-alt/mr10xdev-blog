---
title: "How to write a tool that survives a security review"
description: "Security reviews are the gate to production. The 7 things they check: input validation, output sanitization, error handling, secrets, scopes, audit, tests. The checklist that gets you through."
date: 2026-03-18
tags: ["security", "tools", "production"]
---

Security reviews are the gate to production. The 7 things they
check: input validation, output sanitization, error handling,
secrets, scopes, audit, tests. The checklist that gets you
through.

## The 7 things

### 1. Input validation

Every input is validated against a schema. No exceptions.

```ts
import { z } from 'zod';

const inputSchema = z.object({
  issueNumber: z.number().int().positive(),
  body: z.string().min(1).max(65536),
});

execute: async (input, ctx) => {
  const result = inputSchema.safeParse(input);
  if (!result.success) {
    return { ok: false, error: `Invalid input: ${result.error.message}` };
  }
  // Now use result.data (typed)
}
```

The validation is the first line of defense. The reviewer
will check this first.

### 2. Output sanitization

Outputs that go to users are sanitized. No HTML, no shell
metacharacters, no SQL.

```ts
// For comments: use markdown (sanitized by GitHub)
// For SQL: use parameterized queries
// For shell: use execve directly, not bash
// For HTML: escape all user-provided content
```

The output is the second line of defense. The reviewer will
check this too.

### 3. Error handling

Errors are caught, mapped, and returned. No unhandled
rejections. No crashes.

```ts
try {
  const res = await client.issues.createComment({...});
  return { ok: true, output: res };
} catch (err) {
  if (err.status === 404) return { ok: false, error: 'Not found' };
  if (err.status === 403) return { ok: false, error: 'Permission denied' };
  ctx.logger.error('tool.error', { tool, err });
  return { ok: false, error: 'Unexpected error' };
}
```

The error handling is the third line of defense. The
reviewer will check this too.

### 4. Secrets

Secrets are in env vars, not in code. Not in the manifest.
Not in constants.

```ts
// Good
const token = process.env.GITHUB_TOKEN;

// Bad
const token = 'ghp_abc123...';
```

The secrets are the fourth line of defense. The reviewer
will grep for secrets.

### 5. Scopes

Tokens have the minimum permissions needed. Read-only tokens
for read operations. Write tokens for write operations.

```yaml
permissions:
  repositories: []      # Only the host repo
  closeIssues: true     # Can close issues
  mergePRs: false       # Cannot merge PRs
  release: false        # Cannot create releases
```

The scopes are the fifth line of defense. The reviewer will
check the token's permissions.

### 6. Audit trail

Every action is logged with input, output, user, timestamp.
The audit trail is the source of truth.

```ts
ctx.logger.info('tool.call', {
  tool: 'github.post_comment',
  input: { issueNumber, body: body.slice(0, 200) },
  user: ctx.repo,
  deliveryId: ctx.runId,
  timestamp: new Date().toISOString(),
});
```

The audit trail is the sixth line of defense. The reviewer
will ask "can you investigate this incident?"

### 7. Tests

Every tool has tests. The tests cover the happy path, the
errors, and the edge cases.

```ts
describe('github.post_comment', () => {
  it('accepts valid input', async () => {...});
  it('rejects missing issueNumber', async () => {...});
  it('returns ok=false on 404', async () => {...});
  it('returns ok=false on 403', async () => {...});
  it('returns ok=false on 429', async () => {...});
});
```

The tests are the seventh line of defense. The reviewer will
run the tests.

## The checklist

Before submitting for review:
- [ ] Inputs validated against a Zod schema
- [ ] Outputs sanitized for the destination
- [ ] Errors caught, mapped, returned
- [ ] Secrets in env vars (no constants)
- [ ] Scopes minimal (no admin tokens)
- [ ] Audit trail logs every action
- [ ] Tests cover happy path, errors, edge cases

If any is unchecked, fix it before submitting.

## The 80/20

80% of the value comes from:
- Input validation
- Output sanitization
- Error handling
- Tests

20% comes from:
- Secrets
- Scopes
- Audit trail

Focus on the 80% first. Add the 20% as you grow.

## The test

The tool passes the security review if:
- The reviewer can find the validation
- The reviewer can find the sanitization
- The reviewer can find the error handling
- The reviewer can find the secrets in env vars
- The reviewer can find the scopes in the manifest
- The reviewer can find the audit trail
- The reviewer can run the tests

If the reviewer can't find any of these, the tool is failing.
Fix the tool.

## The lesson

7 things. 1 checklist. 1 test.

The tool that passes the security review is production-ready.
The tool that doesn't is a demo. The difference is the 7
things.

The agent era is here. The security review is the gate. The
gate is the discipline. The discipline is what gets you
through.
