---
title: "The 3 rules of API design"
description: "After 100+ APIs designed, 3 rules emerge. Make the simple thing easy, make the right thing discoverable, make the wrong thing hard. Examples from real APIs."
date: 2026-05-08
tags: ["api-design", "principles"]
---

After 100+ APIs designed, 3 rules emerge. Make the simple thing
easy, make the right thing discoverable, make the wrong thing
hard. Examples from real APIs.

## Rule 1: Make the simple thing easy

The simple thing should be the default. The user should be able to
do the common case in 1 line of code. The complex case can be
verbose.

### Example: Husk's `run()`

The simple case: send a prompt, get a response.

```ts
const result = await agent.run('What is 2+2?');
```

1 line. The user is up and running in 30 seconds.

The complex case: configure tools, memory, approval.

```ts
const result = await agent.run(prompt, {
  tools: [customTool],
  memory: myMemory,
  approval: myApprovalCallback,
  maxSteps: 10,
  signal: controller.signal,
});
```

Verbose, but every option is named and documented. The user
opts into complexity.

### Example: Stripe's `charges.create`

The simple case: charge a card.

```ts
const charge = await stripe.charges.create({
  amount: 2000,
  currency: 'usd',
  source: 'tok_visa',
});
```

1 line per parameter. The common case fits on a screen.

### Example: Express's `app.get`

The simple case: define a route.

```ts
app.get('/', (req, res) => res.send('Hello'));
```

1 line. The user is up and running in 30 seconds.

The complex case: middleware chains, error handlers, etc.

```ts
app.get('/api/users/:id',
  authMiddleware,
  rateLimitMiddleware,
  validateUserId,
  (req, res) => res.json(getUser(req.params.id))
);
```

Verbose, but readable.

### The principle

The 80% of users want the 20% of features. Make the 20% of
features a 1-line API. The other 80% can be verbose.

## Rule 2: Make the right thing discoverable

The right thing should be discoverable. The user should be able to
find the best practice without reading the docs.

### Example: TypeScript's strict mode

TypeScript has a `strict: true` flag that enables a set of strict
checks. The user enables it once and gets the best practices for
free.

The wrong thing (loose mode) is still possible, but the right
thing (strict mode) is the obvious choice.

### Example: React's hooks

React introduced hooks as a way to write stateful components. The
right thing (hooks) is the default. The wrong thing (classes) is
still possible but discouraged.

The discoverability: the docs lead with hooks. The tutorials
teach hooks. The community writes hooks. The wrong thing is
hidden.

### Example: GitHub's branch protection

GitHub's branch protection is the default for `main`. The right
thing (protected main) is the default. The wrong thing (unprotected
main) requires explicit action to enable.

The discoverability: the UI shows the protection status. The
settings lead with the recommendation.

### The principle

The right thing should be the default. The wrong thing should be
possible but hidden. The user should fall into the right thing
without thinking.

## Rule 3: Make the wrong thing hard

The wrong thing should be hard. The user should have to actively
work to do the wrong thing.

### Example: Husk's approval flow

The wrong thing (auto-merge a PR) is hard. The user has to set
`approval: 'never'` and add a custom tool. The default is
`approval: 'required'`.

The right thing (post a comment) is easy. The user just calls
`github.post_comment` and it's done.

### Example: TypeScript's `any` type

The wrong thing (use `any` everywhere) is hard. The user has to
explicitly write `any`. The default is inferred types.

The right thing (let TypeScript infer) is easy. The user just
writes the code and TypeScript infers the types.

### Example: Git's `--force` flag

The wrong thing (force push to main) is hard. The user has to
explicitly use `--force-with-lease` or get the branch protection
to allow it.

The right thing (regular commit) is easy. The user just commits
and pushes.

### The principle

The wrong thing should be a conscious choice. The user should
have to actively opt in to the wrong thing. The friction is
the cost of doing the wrong thing.

## The 3 rules in practice

Designing an API with the 3 rules:

1. **Start with the simple case.** What does the user want to do
   in 1 line? That's the API.
2. **Add the complex case.** What does the user need to configure?
   Add it as options, not as a separate API.
3. **Make the wrong thing hard.** What's the wrong thing? Make it
   require explicit opt-in.
4. **Test the discoverability.** Can a new user find the right
   thing without reading the docs? If no, the discoverability is
   wrong.
5. **Document the why.** The README explains the design decisions.
   The "why" is the moat.

## The counter-examples

APIs that violate the 3 rules:
- **jQuery.** Made the simple thing easy (`$('.foo').click(...)`)
  but the discoverability was bad (you had to know the magic
  strings).
- **Angular 1.x.** Made the right thing discoverable (dependency
  injection, two-way binding) but the simple thing was hard
  (everything was a module).
- **Java's `Optional`.** Made the wrong thing hard (no
  null pointer exceptions) but the simple thing was verbose
  (`Optional.ofNullable(x).map(...).orElse(...)`).
- **PHP's `==` vs `===`.** Made the wrong thing easy (loose
  comparison) and the right thing hard (you have to remember to
  use `===`).

## The lesson

The 3 rules are simple. The execution is hard. Every API decision
is a tradeoff between simplicity, discoverability, and safety.

The right answer depends on the use case:
- **Internal APIs:** prioritize simplicity. Discoverability is
  less important.
- **Public APIs:** prioritize all three. The user is paying
  for a good experience.
- **Library APIs:** prioritize discoverability. The user will
  learn by reading other people's code.
- **Framework APIs:** prioritize safety. The wrong thing should
  be very hard.

Pick the priority for your use case. Apply the 3 rules. Iterate
based on user feedback.

The API is the contract. The contract should be clear, easy, and
safe. The 3 rules are a starting point.
