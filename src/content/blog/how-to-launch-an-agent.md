---
title: "How to launch an agent to production"
description: "The launch checklist for an AI agent. The 30 things to do before you ship. Security, observability, documentation, support, the boring stuff that matters. The difference between a demo and a product."
date: 2026-04-14
tags: ["agents", "production", "launch", "checklist"]
---

The launch checklist for an AI agent. The 30 things to do before
you ship. Security, observability, documentation, support, the
boring stuff that matters. The difference between a demo and a
product.

## The 30 things

### Security (8)

1. **Secrets are in env vars, not in the manifest.** The manifest
   is public; the secrets are not.
2. **API tokens are scoped.** Don't use a global token. Use a
   GitHub App installation token.
3. **Webhook signature is verified.** Every webhook is checked
   against the secret. No exceptions.
4. **Inputs are validated.** Every input to every tool is
   validated against its Zod schema. No exceptions.
5. **Outputs are sanitized.** User-provided text is not
   blindly inserted into comments. Sanitize first.
6. **Permissions are explicit.** The manifest's `permissions:`
   block is the source of truth. Tools not allowed are not
   registered.
7. **Approval is the default.** Write tools default to
   `approval: required`. Read tools default to `never`.
8. **Audit trail is complete.** Every action is logged with
   the input, the output, the user, the timestamp.

### Observability (6)

9. **LLM calls are traced.** Every call is logged with input,
   output, tokens, cost, latency.
10. **Tool calls are logged.** Every call is logged with name,
    input, output, latency.
11. **Errors are captured.** Every error is logged with stack
    trace and context.
12. **Cost is tracked per run.** Every run returns
    `usage: { inputTokens, outputTokens, costUsd }`.
13. **Latency is tracked per step.** Every step has a duration.
14. **Logs are searchable.** Every log line is structured
    (JSON) and indexed.

### Documentation (5)

15. **README has a quick start.** The user can install and run
    the agent in 5 minutes.
16. **Manifest spec is documented.** Every field, every value,
    every example. The user can write their own manifest.
17. **Tool reference is documented.** Every standard tool, its
    input, its output, an example. The user knows what's
    available.
18. **Architecture is documented.** The mental model. The data
    flow. The lifecycle. The user understands the system.
19. **Security model is documented.** What the agent can do.
    What it can't. The threats. The mitigations.

### Support (4)

20. **Issue templates are configured.** Bug reports. Feature
    requests. The user knows how to report.
21. **PR template is configured.** The user knows how to
    contribute.
22. **Response time is documented.** When will a maintainer
    respond? The user has expectations.
23. **Support channels are listed.** GitHub issues. Discord.
    Email. The user knows where to ask.

### Testing (4)

24. **Snapshot tests pass.** The prompt didn't change
    unexpectedly.
25. **Golden tests pass.** The output didn't change
    unexpectedly.
26. **Eval tests pass.** The accuracy is above the threshold.
27. **Adversarial tests pass.** The agent handles bad input
    gracefully.

### Operations (3)

28. **Deployment is automated.** Push to main → deployed.
29. **Monitoring is configured.** Alerts on failures, alerts
    on high cost, alerts on slow runs.
30. **Rollback is one click.** If the new version breaks,
    roll back without thinking.

## The 80/20

80% of the value comes from:
- 1, 2, 3, 7, 8 (security basics)
- 9, 10, 12 (observability basics)
- 15, 16 (docs basics)
- 28, 29 (ops basics)

20% of the value comes from the rest.

If you're short on time, do the 80% first. Add the 20% as you
grow.

## The anti-launch

The anti-launch:
- Skip the security review
- Skip the docs
- Skip the tests
- Deploy manually
- No monitoring
- No rollback plan

This is a demo, not a product. The demo impresses for 5 minutes.
The product fails at 5 AM on a Saturday.

## The launch week

The launch week:
- **Monday:** security review. Fix any issues.
- **Tuesday:** observability. Make sure every action is traced.
- **Wednesday:** docs. Write the README, the manifest spec, the
  tool reference.
- **Thursday:** tests. Snapshot, golden, eval, adversarial.
- **Friday:** ops. Deploy automation, monitoring, rollback.
- **Saturday:** soft launch. Invite 5 users. Watch the metrics.
- **Sunday:** public launch. Tweet. Blog post. Show HN.

The launch week is the difference between "I shipped a thing"
and "I shipped a product."

## The post-launch

After launch:
- Monitor the metrics daily
- Triage issues within 48 hours
- Release a patch version weekly
- Release a minor version monthly
- Write a retro post every quarter

The post-launch is the boring part. The boring part is the
sustained part. The sustained part is the value.

## The checklist

Before you launch, check all 30:
- [ ] Secrets in env vars
- [ ] API tokens scoped
- [ ] Webhook signature verified
- [ ] Inputs validated
- [ ] Outputs sanitized
- [ ] Permissions explicit
- [ ] Approval default
- [ ] Audit trail complete
- [ ] LLM calls traced
- [ ] Tool calls logged
- [ ] Errors captured
- [ ] Cost tracked
- [ ] Latency tracked
- [ ] Logs searchable
- [ ] README has quick start
- [ ] Manifest spec documented
- [ ] Tool reference documented
- [ ] Architecture documented
- [ ] Security model documented
- [ ] Issue templates configured
- [ ] PR template configured
- [ ] Response time documented
- [ ] Support channels listed
- [ ] Snapshot tests pass
- [ ] Golden tests pass
- [ ] Eval tests pass
- [ ] Adversarial tests pass
- [ ] Deployment automated
- [ ] Monitoring configured
- [ ] Rollback one click

If any is unchecked, don't launch. Fix it. Then launch.

## The lesson

30 things. 1 launch. 0 surprises.

The 30 things are the boring stuff. The boring stuff is the
difference between a demo and a product. The demo impresses for
5 minutes. The product sustains for years.

The launch is a milestone, not a finish line. The launch is the
start of the maintenance. The maintenance is the value.

If you're launching an agent, do the 30 things. Apply the
checklist. The checklist is the discipline. The discipline is
what makes the product last.
