---
title: "How I pick what to build"
description: "My framework for choosing the next project. The 4-criteria filter, the kill list, the signal of demand. Why I don't do market research and you shouldn't either."
date: 2026-05-26
tags: ["meta", "process", "indie", "ideas"]
---

I get asked a lot: "how do you decide what to build?" The answer is
a 4-criteria filter + a kill list + a signal of demand. No market
research.

## The 4-criteria filter

Every project idea gets scored on 4 criteria. To ship, it needs
to score 3+ out of 4.

### 1. Personal pain (yes/no)

Do I personally feel the pain this project solves? If I don't,
I'll lose interest in a week. The project will die.

The pain has to be specific. "I want a better agent framework" is
too vague. "I want a TypeScript agent framework that's small,
typed, and doesn't take a stance" is specific.

### 2. Buildable in 2 weeks (yes/no)

Can I build a working MVP in 2 weeks? If no, the project is too big.
Scope it down or kill it.

The 2-week test is critical. Most projects are 6-month slogs because
the founders didn't scope. A 2-week MVP forces you to find the core.

### 3. Shareable (yes/no)

Can I show this to other people and have them understand the value?
If I have to explain for 10 minutes, the value isn't clear.

The share test is also critical. If a stranger can't understand
the value in 60 seconds, the value might not be there. Or the
positioning is wrong.

### 4. Defensible (yes/no)

Is this hard to clone? If a competitor can build the same thing in
a weekend, the moat is too thin.

Defensibility doesn't have to be technical. It can be:
- **Brand** — "Mr. 10x Dev" is a brand
- **Distribution** — a 36-repo GitHub is distribution
- **Speed** — shipping 9 versions a day is a speed advantage
- **Data** — a corpus of code is data
- **Network** — a community of users is a network

If the project has none of these, kill it. The idea isn't enough.

## The kill list

Some ideas are killed before they even reach the filter:

- **Anything that needs a sales team.** I don't have one. I don't
  want one.
- **Anything that needs a content team.** I write my own content.
- **Anything that needs a mobile app.** I don't have the design
  chops.
- **Anything that needs to be regulated.** Healthcare, finance,
  legal. Too much friction.
- **Anything that requires hardware.** I don't have the supply
  chain.
- **Anything that requires a partnership.** I'm solo.
- **Anything that requires a large upfront investment.** I have
  $0 to start.
- **Anything that takes more than 3 months to revenue.** I can't
  wait that long.

If an idea hits the kill list, it dies. The filter never runs.

## The signal of demand

I don't do market research. I look for signals of demand:

### 1. I'm solving my own pain

If I have the pain, others probably do too. The market is "people
like me." It's a niche, but it's a real one.

### 2. Existing solutions are bad

If the existing solutions are bad (UX, price, performance),
there's demand for better. "Better" is a real value prop.

### 3. People are talking about it

If people are tweeting about the problem, writing blog posts,
opening GitHub issues, they're demand. The demand is already
validated.

### 4. Adjacent products are succeeding

If products in adjacent spaces are succeeding, the demand is
real. The wedge is to do the same thing slightly differently.

### 5. I can charge money

If I can charge money for a partial solution, the demand is
priced. People vote with their wallets.

## The flow

1. **Idea.** Someone (me, a user, a tweet) suggests an idea.
2. **Kill list check.** Does it hit the kill list? If yes, dead.
3. **Filter.** Does it score 3+/4 on the criteria? If no, dead.
4. **Signal check.** Is there evidence of demand? If no, dead.
5. **Scope.** Can I scope to a 2-week MVP? If no, dead.
6. **Build.** 2 weeks. Ship.
7. **Use.** I use it for 2 weeks. If I don't, dead.
8. **Share.** I share it. If 0 people care, dead.
9. **Iterate.** Add features based on user feedback.

The flow is brutal. Most ideas die at step 2 or 3. The survivors
get built.

## What I shipped in 2026

| Project | Filter score | Status |
|---|---|---|
| Husk | 4/4 | Live, 9 versions, 229 tests |
| gitagent | 4/4 | Live, 53+ commits |
| mr10xdev-blog | 4/4 | Live (this site) |
| aether-proxy | 3/4 | Dormant, need to revive |
| PARASITE | 4/4 | Dormant, need to revive |
| brocode | 2/4 | Dead |

The dead ones had weak defensibility or unclear pain. The live ones
all hit 4/4.

## What I killed

A few I killed recently:
- **A "smart RSS" reader.** Filter score 2/4. No personal pain.
- **A "git-as-database" library.** Filter score 2/4. Buildable but
  not defensible.
- **A "personal CRM".** Filter score 3/4 but on the kill list
  (sales-adjacent).
- **A "code review marketplace".** Filter score 1/4. Too much
  friction.

Each kill was a 5-minute decision. The kill list is more
important than the filter.

## What I'm considering

Top of the queue:
- **A "gitagent wake-up" CLI.** Filter score 4/4. Personal pain
  (PARASITE). Buildable in 1 week. Shareable. Defensible.
- **A "Husk SaaS" hosting service.** Filter score 3/4. Personal
  pain (deploying agents). Buildable in 2 weeks. Shareable.
  Defensibility unclear.
- **A "developer analytics" tool.** Filter score 2/4. Not personal
  pain.

The wake-up CLI is the next one. The SaaS might come after.

## What to do

- **Build the kill list.** What's a no-go for you? List it.
- **Score your last 10 ideas.** How many would have shipped?
- **Look for signals.** What are people complaining about? What
  tools do you wish existed?
- **Ship the smallest thing.** 2 weeks. No scope creep.

The discipline of "I only build things that pass the filter" is
the difference between an indie and a perpetual tinkerer.
