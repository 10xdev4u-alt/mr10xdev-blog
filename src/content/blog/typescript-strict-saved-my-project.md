---
title: "TypeScript strict mode saved my project"
description: "The story of how enabling TypeScript strict mode + noUncheckedIndexedAccess caught 200+ bugs that would have shipped. The settings, the migration, the lessons."
date: 2026-05-16
tags: ["typescript", "strict-mode", "lessons"]
---

TypeScript strict mode saved my project. The story.

## The setup

I started Husk with `tsconfig.json` defaults. No `strict`. No
`noUncheckedIndexedAccess`. Just `target: ES2020` and a few
others.

The first version compiled. The tests passed. I shipped it.

A few weeks later, a user reported a bug. The agent was crashing
on certain inputs. The error: "Cannot read property 'X' of
undefined."

I looked at the code. The crash was on `arr[0].field` where
`arr[0]` could be undefined. TypeScript didn't catch it because
I wasn't using strict mode.

## The fix

I enabled `strict: true`. The compiler immediately found 47
errors. Each one was a real bug. I fixed them all. I shipped
v0.2.0 with strict mode enabled.

Then I enabled `noUncheckedIndexedAccess: true`. The compiler
found 200+ more errors. Each one was a real bug. I fixed them
all over 3 days. I shipped v0.2.1 with both flags.

The user-reported bug? Gone. The crash couldn't happen anymore
because the compiler refused to compile the buggy code.

## The settings

The full set of TypeScript strict flags I now use:

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "exactOptionalPropertyTypes": false,
    "noFallthroughCasesInSwitch": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "useUnknownInCatchVariables": true
  }
}
```

Each flag catches a different class of bug. The combination
catches the vast majority.

## What each flag catches

### `strict: true`

The umbrella flag. Enables:
- `noImplicitAny` — every variable needs a type
- `strictNullChecks` — `null` and `undefined` are not assignable
  to other types
- `strictFunctionTypes` — function types are checked contravariantly
- `strictBindCallApply` — `bind`, `call`, `apply` are type-checked
- `strictPropertyInitialization` — class properties must be initialized
- `noImplicitThis` — `this` must be typed
- `useUnknownInCatchVariables` — `catch (e)` is `unknown`, not `any`
- `alwaysStrict` — emit `"use strict"` in JS output

The single most impactful flag. Enabling it is worth 1 day of
migration and 100+ bugs caught.

### `noUncheckedIndexedAccess: true`

`arr[0]` returns `T | undefined` instead of `T`. You have to
check for undefined before using the result.

Catches: "I assumed the array was non-empty" bugs. "I assumed
the key existed" bugs. 200+ of them in Husk.

The downside: the code is more verbose. `const x = arr[0]?.foo ?? ''`
instead of `const x = arr[0].foo`. Worth it.

### `noImplicitOverride: true`

If a class method overrides a base class method, you must use
the `override` keyword. Catches typos like `toString()` instead
of `toSrting()`.

### `noFallthroughCasesInSwitch: true`

Every `case` in a `switch` must have a `break`, `return`, or
`throw`. Catches "I forgot the break" bugs.

### `noPropertyAccessFromIndexSignature: true`

Forces you to use `obj['key']` instead of `obj.key` for objects
with index signatures. Catches typos in dynamic property access.

### `noImplicitReturns: true`

Every code path in a function must return. Catches "I forgot
to return in one branch" bugs.

### `noUnusedLocals` and `noUnusedParameters`

No unused variables or parameters. Catches "I refactored and
left this behind" bugs.

## The migration

Migrating an existing project to strict mode is a project. The
steps:
1. Enable one flag at a time
2. Fix all errors from that flag
3. Commit
4. Repeat
5. After all flags, enable the umbrella `strict: true`

I recommend starting with the cheapest flag (e.g.,
`noImplicitReturns`) and working up to the most expensive
(`noUncheckedIndexedAccess`).

For Husk, the full migration took 3 days. The first day was
`strict: true` (47 errors, mostly `noImplicitAny` and
`strictNullChecks`). The second day was
`noUncheckedIndexedAccess` (200+ errors, all related to array
access). The third day was the rest.

After 3 days, the codebase was 30% more code (more null checks)
and 10x more correct (no possible-undefined bugs).

## The cost

The migration is real work. The payoff is permanent:
- **Fewer runtime bugs.** The compiler catches them.
- **Faster onboarding.** New contributors see the types and
  know what's expected.
- **Better refactoring.** The compiler tells you when you
  break something.
- **More confidence.** You can change code and know you
  didn't break anything.

The 3 days of migration saved me from 100+ future bugs. The
ROI is 100x.

## The lesson

TypeScript strict mode is the closest thing to free correctness
in programming. The migration is real work. The payoff is
permanent. The alternative is a runtime bug report 3 months
from now.

Enable it. Today. Don't ship code that the compiler would have
rejected.
