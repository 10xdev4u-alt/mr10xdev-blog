---
title: "The 3 mistakes I made writing agent docs"
description: "Documentation is the contract with the user. 3 mistakes I made: too much theory, too few examples, no troubleshooting. The fix, the result, the lesson."
date: 2026-03-21
tags: ["docs", "agents", "lessons"]
---

Documentation is the contract with the user. 3 mistakes I made:
too much theory, too few examples, no troubleshooting. The fix,
the result, the lesson.

## Mistake 1: Too much theory

The first version of Husk's docs was 80% theory and 20%
examples. The theory was correct. The examples were few. The
user didn't read the theory. The user wanted examples.

**The problem:** theory is hard to absorb. Examples are easy
to copy-paste. The user wants the working code, not the
philosophy.

**The fix:** flip the ratio. 20% theory, 80% examples. The
theory is a short overview. The examples are the meat.

**The result:** engagement went up 3x. The user got what they
needed. The user was happier.

**The lesson:** the user is impatient. The user wants
examples. The user doesn't want theory. The theory is for
you. The examples are for the user.

## Mistake 2: Too few examples

The first version of the docs had 2 examples. The user wanted
5+. The user wanted to see the agent in different scenarios.

**The problem:** 2 examples is the minimum. The user has 5
scenarios in mind. The user gives up after the 2nd.

**The fix:** write 5-10 examples. Cover the common scenarios.
Cover the edge cases. Cover the advanced uses.

**The result:** the user finds their scenario. The user can
copy-paste. The user is more confident.

**The lesson:** examples are the docs. The user reads the
example. The user copies the example. The user adapts the
example. The docs are the examples.

## Mistake 3: No troubleshooting

The first version of the docs had no troubleshooting section.
The user hit an error. The user didn't know what to do. The
user filed an issue.

**The problem:** errors are inevitable. The user needs help
when they hit them. The docs are the help.

**The fix:** add a troubleshooting section. For each common
error, document the cause and the fix.

**The result:** the user self-serves 80% of their issues. The
issue tracker is cleaner. The maintainer is less stressed.

**The lesson:** the troubleshooting section is the most
valuable part of the docs. The user comes to it when they
have a problem. The user leaves with a solution. The user
remembers the solution.

## The 3 together

The 3 mistakes compose. The 3 are the anti-patterns. The
fixes are the patterns.

- **Less theory.** 20% theory, 80% examples.
- **More examples.** 5-10 examples covering the common scenarios.
- **Add troubleshooting.** For each common error, document the
  cause and the fix.

The docs that follow the 3 patterns are useful. The docs
that don't are not.

## The 80/20

80% of the value comes from:
- More examples
- Less theory

20% comes from:
- The troubleshooting section

The troubleshooting section is the 20% of the value that
catches the 80% of the user pain. Add it.

## The test

The docs are good if:
- A new user can find their scenario in 2 minutes
- A new user can run an example in 5 minutes
- A user with an error can find the fix in 1 minute
- The user gets value without reading the theory

If any of these fail, the docs are failing. Fix the docs.

## The lesson

3 mistakes. 3 fixes. 1 test.

The docs are the contract. The contract should be useful,
not impressive. The 3 fixes are the way to useful.

The agent era is here. The docs are the project. The project
without docs is a hobby. The project with docs is a product.
