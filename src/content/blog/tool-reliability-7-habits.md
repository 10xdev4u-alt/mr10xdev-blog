---
title: "How to write a tool that won't fail in production"
description: "The 7 habits of highly reliable tools. Type the inputs, validate them, handle errors gracefully, log everything, retry the right way, time out, and test. The difference between a demo tool and a production tool."
date: 2026-03-29
tags: ["tools", "production", "reliability"]
---

The 7 habits of highly reliable tools. Type the inputs, validate
them, handle errors gracefully, log everything, retry the right
way, time out, and test. The difference between a demo tool and a
production tool.

## Habit 1: Type the inputs

Every tool has typed inputs. The types are the contract.

```ts
import { z } from 'zod';

const inputSchema = z.object({
  issueNumber: z.number().int().positive(),
  body: z.string().min(1).max(65536),
});
```

The types:
- Catch typos at compile time
- Document the expected inputs
- Enable runtime validation
- Make the tool self-documenting

The types are the floor. Without them, the tool is unreliable.

## Habit 2: Validate the inputs

Even with types, validate the inputs at runtime. The LLM can
provide anything.

```ts
execute: async (input, ctx) => {
  const result = inputSchema.safeParse(input);
  if (!result.success) {
    return { ok: false, error: `Invalid input: ${result.error.message}` };
  }
  // Now `result.data` is typed
}
```

The validation:
- Catches malformed input from the LLM
- Provides a clear error message
- Prevents the tool from receiving garbage
- Protects downstream APIs

The validation is the first line of defense. Without it, the
tool is fragile.

## Habit 3: Handle errors gracefully

Every tool can fail. The failure should be a clear, recoverable
error.

```ts
try {
  const res = await client.issues.createComment({...});
  return { ok: true, output: res };
} catch (err) {
  if (err.status === 404) {
    return { ok: false, error: 'Issue not found' };
  }
  if (err.status === 403) {
    return { ok: false, error: 'Permission denied — check the GitHub App installation' };
  }
  if (err.status === 429) {
    return { ok: false, error: 'Rate limited — try again in 60s' };
  }
  // Unknown error
  ctx.logger.error('Unexpected error in github.post_comment', { err });
  return { ok: false, error: `Unexpected error: ${err.message}` };
}
```

The error handling:
- Maps known errors to known responses
- Logs unknown errors for debugging
- Returns a message the LLM can understand and act on
- Never crashes the agent

The error handling is the safety net. Without it, one bad call
kills the whole run.

## Habit 4: Log everything

Every tool execution is logged with input, output, latency, and
user.

```ts
const start = Date.now();
ctx.logger.info('tool.start', {
  tool: 'github.post_comment',
  input: { issueNumber, body: body.slice(0, 200) },
  user: ctx.repo,
});
try {
  const res = await client.issues.createComment({...});
  ctx.logger.info('tool.success', {
    tool: 'github.post_comment',
    durationMs: Date.now() - start,
    url: res.html_url,
  });
  return { ok: true, output: res };
} catch (err) {
  ctx.logger.error('tool.error', {
    tool: 'github.post_comment',
    durationMs: Date.now() - start,
    error: err.message,
  });
  throw err;
}
```

The logging:
- Records every action for audit
- Helps debug failures
- Tracks performance (duration per call)
- Provides data for cost analysis

The logging is the truth. Without it, you can't debug, can't
audit, can't optimize.

## Habit 5: Retry the right way

Network calls fail. Retries handle transient failures. But
retries can also make things worse (hammering a failing API).

```ts
async function withRetry<T>(fn: () => Promise<T>, maxAttempts = 3): Promise<T> {
  let lastErr: unknown;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastErr = err;
      if (!isRetryable(err)) throw err;
      if (attempt < maxAttempts) {
        const backoff = Math.min(1000 * 2 ** attempt, 30_000);
        await sleep(backoff);
      }
    }
  }
  throw lastErr;
}
```

The retry:
- Only retries on transient failures (network, 5xx, 429)
- Doesn't retry on permanent failures (4xx other than 429)
- Uses exponential backoff
- Caps the total wait time

The retry is the resilience. Without it, one transient blip
kills the run.

## Habit 6: Time out

Every external call has a timeout. Without one, a slow API can
hang the agent forever.

```ts
async function withTimeout<T>(promise: Promise<T>, ms: number, label: string): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error(`Timed out after ${ms}ms: ${label}`)), ms),
    ),
  ]);
}

const res = await withTimeout(
  client.issues.createComment({...}),
  10_000,
  'github.post_comment',
);
```

The timeout:
- Bounds the wait time
- Fails fast on slow APIs
- Allows the agent to retry with a different approach
- Prevents one slow call from blocking the whole agent

The timeout is the discipline. Without it, the agent can hang.

## Habit 7: Test

Every tool has tests. The tests cover the happy path, the
errors, and the edge cases.

```ts
describe('github.post_comment', () => {
  it('posts a comment and returns the URL', async () => {...});
  it('returns ok=false on 404', async () => {...});
  it('returns ok=false on 403', async () => {...});
  it('returns ok=false on 429', async () => {...});
  it('handles malformed input', async () => {...});
  it('respects dryRun', async () => {...});
});
```

The tests:
- Catch regressions when the tool is changed
- Document the expected behavior
- Enable safe refactoring
- Provide examples of how the tool is used

The tests are the spec. Without them, the tool is undocumented.

## The 7 together

The 7 habits compose. The 7 are the floor. The floor is what
makes a tool production-ready.

| Habit | What it ensures |
|---|---|
| Type the inputs | Compile-time safety |
| Validate the inputs | Runtime safety |
| Handle errors | Recoverability |
| Log everything | Observability |
| Retry the right way | Resilience |
| Time out | Discipline |
| Test | Reliability |

A tool with all 7 is production-ready. A tool missing any is a
demo.

## The 80/20

80% of the value comes from:
- Type the inputs
- Validate the inputs
- Handle errors
- Test

20% comes from:
- Log everything
- Retry the right way
- Time out

Focus on the 80% first. Add the 20% as you grow.

## The lesson

7 habits. 1 floor. 1 lesson: production is not a demo.

The tool that works in production is reliable. The tool that
works in a demo is not. The difference is the 7 habits.

The agent era is here. The tools are the API. The API is the
foundation. The foundation is the 7 habits.
