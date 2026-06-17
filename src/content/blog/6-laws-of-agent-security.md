---
title: "The 6 laws of agent security"
description: "Agents act on your behalf. Security is not optional. The 6 laws: secrets, scopes, signatures, validation, sanitization, audit. The threat model, the mitigations, the anti-patterns."
date: 2026-04-09
tags: ["security", "agents", "best-practices"]
---

Agents act on your behalf. Security is not optional. The 6 laws:
secrets, scopes, signatures, validation, sanitization, audit.
The threat model, the mitigations, the anti-patterns.

## Law 1: Secrets are env vars

API keys, tokens, passwords are environment variables. Not
constants in code. Not files in the repo. Not arguments to
the agent.

```ts
// Good
const token = process.env.GITHUB_TOKEN;

// Bad
const token = 'ghp_abc123...';
```

```yaml
# Good
env:
  GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

# Bad
env:
  GITHUB_TOKEN: ghp_abc123...
```

The secrets are in the deploy environment. The code is in the
repo. The two are separate. The leak is contained.

## Law 2: Scopes are minimal

The token has the minimum permissions needed. No more.

For GitHub:
- Read-only token for read-only operations
- Write token for write operations (but not admin)
- Admin token only for admin operations (and rotated frequently)

For Slack:
- Read-only token for monitoring
- Post-only token for sending messages
- Admin token only for channel management

For database:
- Read-only user for queries
- Write user for inserts (but not deletes)
- Admin user only for schema changes

The principle: the smallest token that does the job. A
compromised token can only do what the token could do.

## Law 3: Signatures are verified

Every webhook is signed. Every signature is verified.

```ts
import { verifyWebhookSignature } from 'gitagent/server';

if (!verifyWebhookSignature(rawBody, signature, secret)) {
  return c.json({ ok: false, error: 'Invalid signature' }, 401);
}
```

The signature is the proof that the webhook is from the
expected source. Without verification, anyone can POST anything
to your webhook.

GitHub uses HMAC-SHA256 in the `X-Hub-Signature-256` header.
Other services have their own schemes. Use the right one for
each service.

## Law 4: Inputs are validated

Every input to every tool is validated. No exceptions.

```ts
import { z } from 'zod';

const InputSchema = z.object({
  issueNumber: z.number().int().positive(),
  body: z.string().min(1).max(65536),
});

const result = InputSchema.safeParse(input);
if (!result.success) {
  return { ok: false, error: 'Invalid input' };
}
```

The validation is:
- **Type:** is it the right type?
- **Range:** is it in the expected range?
- **Format:** is it in the expected format (e.g., URL, email)?
- **Length:** is it within the size limits?

The validation is the first line of defense. Without it, the
LLM can call the tool with anything, including malicious input.

## Law 5: Outputs are sanitized

User-provided text is not blindly inserted into comments,
PRs, or other output. Sanitize first.

For GitHub comments:
- The markdown is rendered. The user can inject HTML or
  JavaScript via the markdown.
- Use a sanitizer (e.g., DOMPurify) before rendering.
- Or use a restricted markdown subset.

For SQL:
- The user input is concatenated into queries. SQL injection.
- Use parameterized queries.
- Never concatenate user input into a query.

For shell:
- The user input is passed to a shell command. Command injection.
- Use `execve` directly. Never pass through `bash -c`.
- Validate the input matches an allow-list.

For HTML:
- The user input is rendered as HTML. XSS.
- Use a sanitizer.
- Or escape the input.

The principle: trust no user input. Sanitize every output.

## Law 6: Audit trail is complete

Every action is logged with enough context to investigate.

```ts
ctx.logger.info('tool_call', {
  runId: ctx.runId,
  tool: tc.name,
  input: tc.input,
  output: result.output,
  user: event.sender.login,  // from the GitHub event
  timestamp: new Date().toISOString(),
});
```

The audit trail is the source of truth. When something goes
wrong, the audit trail tells you:
- What happened
- Who did it (the agent, the user, the trigger)
- When it happened
- Why (the agent's reasoning, the input, the output)

The audit trail is the post-mortem. Without it, you can't
debug, you can't recover, you can't trust.

## The 6 together

The 6 laws compose. The 6 are the floor. The floor is what makes
the agent safe to use.

| Law | What it prevents |
|---|---|
| Secrets in env | Token leaks |
| Scopes minimal | Privilege escalation |
| Signatures verified | Forged webhooks |
| Inputs validated | Malformed input, injection |
| Outputs sanitized | XSS, SQL injection, command injection |
| Audit trail complete | Undetected breaches, no post-mortem |

A project with all 6 is secure. A project missing any is
vulnerable.

## The threat model

The threats:
- **External attacker** sends a malicious webhook
- **Compromised dependency** runs arbitrary code
- **Prompt injection** overrides the agent's instructions
- **Insider threat** abuses the agent's permissions

The mitigations:
- External attacker: signature verification
- Compromised dependency: scoped tokens, audit trail
- Prompt injection: input validation, output sanitization
- Insider threat: scoped tokens, audit trail

The 6 laws cover the threats. The threats are real. The
mitigations are partial. The trade-off is acceptable for the
use cases.

## The anti-patterns

### Anti-pattern 1: Hardcoded secrets

```ts
const token = 'ghp_abc123...';
```

The secret is in the repo. The repo is public. The secret is
leaked. The fix: env vars.

### Anti-pattern 2: Over-scoped tokens

```ts
// Using a PAT with all repo permissions for read-only operations
```

The token can do more than needed. A leak is catastrophic. The
fix: minimal scopes.

### Anti-pattern 3: No signature verification

```ts
app.post('/webhook', async (c) => {
  const body = await c.req.json();
  // No signature check!
  // ...
});
```

Anyone can POST anything. The fix: verify the signature.

### Anti-pattern 4: Blind output

```ts
const comment = `Issue: ${issue.title}\n${issue.body}`;
await client.issues.createComment({ body: comment });
```

The user can inject anything. The fix: sanitize.

### Anti-pattern 5: No audit trail

```ts
await client.issues.createComment({ body: 'Closed' });
// No log of who, when, why
```

You can't investigate. You can't recover. You can't trust. The
fix: log everything.

## The lesson

6 laws. 1 floor. 1 lesson: security is the foundation.

The agent that follows the 6 laws is safe. The agent that
doesn't is a toy. The choice is yours.

The agent era is here. The security is the same. The 6 laws
apply. Apply them.
