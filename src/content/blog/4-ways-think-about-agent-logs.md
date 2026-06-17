---
title: "The 4 ways to think about agent logs (in production)"
description: "4 ways to think about logs: structured, queryable, retained, sensitive. Each is a different log design with different tradeoffs. The framework, the examples, the lesson."
date: 2026-01-11
tags: ["logs", "agents", "production"]
---

4 ways to think about logs: structured, queryable, retained,
sensitive. Each is a different log design with different
tradeoffs. The framework, the examples, the lesson.

## Log 1: Structured

The log is structured. The log is JSON. The log is
parseable.

**Examples:**
```json
{"ts":"2026-06-17T10:00:00Z","level":"info","agent":"triage","event":"run_start","runId":"r1"}
{"ts":"2026-06-17T10:00:01Z","level":"info","agent":"triage","event":"tool_call","tool":"github.add_labels","input":{"issue_number":42,"labels":["bug"]}}
```

**When to use:** the user wants to parse the logs. The
user wants to query. The user wants to analyze.

**Pros:**
- Parseable (the user can use jq, sql, etc.)
- Consistent (every log has the same fields)
- Searchable (the user can find logs by field)

**Cons:**
- Verbose (the JSON adds characters)
- Schema (the schema can change)
- Storage (the JSON is bigger than text)

## Log 2: Queryable

The log is queryable. The log is in a database. The log
is searchable.

**Examples:**
- Datadog (search by tag, time, content)
- Splunk (search by SPL)
- ELK (search by Lucene query)

**When to use:** the user wants to search. The user wants
to find. The user wants to analyze.

**Pros:**
- Fast (the user can search in seconds)
- Powerful (the user can do complex queries)
- Integrated (the user can combine with metrics/traces)

**Cons:**
- Cost (the database costs money)
- Lock-in (the user is tied to the vendor)
- Complexity (the user has to learn the query language)

## Log 3: Retained

The log is retained. The log is in cold storage. The log
is for compliance.

**Examples:**
- 30 days hot, 1 year cold
- 90 days hot, 7 years cold (for compliance)
- Indefinite (for audit)

**When to use:** the user has a compliance requirement. The
user has a legal requirement. The user has a debugging
requirement.

**Pros:**
- Compliance (the user meets the requirement)
- Long-term (the user can debug old issues)
- Auditable (the user can prove what happened)

**Cons:**
- Cost (the storage costs money over time)
- Privacy (the logs may have PII)
- Volume (the logs grow over time)

## Log 4: Sensitive

The log is sensitive. The log has PII. The log is
redacted.

**Examples:**
- The user's email is redacted
- The user's token is redacted
- The user's name is hashed

**When to use:** the log has PII. The log has secrets.
The log has compliance requirements.

**Pros:**
- Privacy (the user is protected)
- Compliance (the user meets GDPR, CCPA, etc.)
- Trust (the user trusts the system)

**Cons:**
- Effort (the redaction must be careful)
- Risk (the redaction can miss things)
- Lost (the redacted data is lost for debugging)

## The 4 together

The 4 are the logs. The logs are the truth. The truth is
the value.

| Log | What it provides | Cost |
|---|---|---|
| Structured | The user can parse | Low |
| Queryable | The user can search | Medium |
| Retained | The user can audit | High |
| Sensitive | The user is safe | High |

The log that matches the need is the right log.

## The 80/20

80% of the value comes from:
- Structured (the user can parse)
- Queryable (the user can search)

20% comes from:
- Retained (the user can audit)
- Sensitive (the user is safe)

Focus on the 80% first. Add the 20% as you grow.

## The choice

For each agent, ask:
- Does the user need to parse? (structured)
- Does the user need to search? (queryable)
- Does the user need to audit? (retained)
- Does the user have PII? (sensitive)

The right answer is the right log at the right cost.

## The lesson

4 logs. 1 logging. 1 lesson: design for all 4.

The log that designs for all 4 is the safe log. The log
that designs for 1 is the risky log. The safe log is
trusted. The risky log is not.

The agent era is here. The logging is the design. The
design is the choice. The choice is the discipline.
