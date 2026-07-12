---
name: glassbox-problems
description: >-
  Author CFA Level II problems and solutions using the glassbox method —
  first principles, transparent math, statement flow, IFRS vs US GAAP.
  Use when writing Glassbox Math entries, MCQ solutions, worked examples,
  or when the user says glassbox, first principles, or dissect mechanics.
---

# Glassbox Problems

## Mandate (verbatim)

**All problems will be solved as glassbox.**

## What "glassbox" means

Show the machinery, not just the output:

1. **First principle** — state the identity / rule before numbers
2. **Isolate** — name the intermediate quantities (excess, unrealized profit, NCI, recoverable amount, etc.)
3. **Substitute** — plug numbers into the identity
4. **Flow** — say what line of the financial statements moves
5. **Standards** — note IFRS vs US GAAP if the method differs
6. **Answer** — final figure + one-line sanity check

## Data shape (`LM##_GLASSBOX`)

```js
{
  id: 1,
  title: "Equity Method: Basic Carrying Amount",
  topic: "Equity Method",
  question: "...",
  answer: "$633,000",
  principle: "Under the equity method, the investment grows with share of NI and shrinks with dividends (return of capital, not income).",
  steps: [
    { text: "Write the carrying-amount identity:", formula: "Inv_end = Cost + %×NI − %×Div" },
    { text: "Substitute:", formula: "Inv_end = 600,000 + 45,000 − 12,000 = 633,000" },
  ],
}
```

## MCQ / notes solutions

Same discipline inside `solution` strings:

- Bold the answer line: `**Answer: B — $80,000.**`
- Show each intermediate
- Call out common traps (dividends as income, partial GW under US GAAP, etc.)

## Anti-patterns

- Bare numeric answer with no identity
- Skipping excess amortization or unrealized-profit deferral
- Using LaTeX (`$$...$$`) — use plain-text formulas for UI boxes
- Copying copyrighted CFA Institute curriculum text

## Checklist before shipping

- [ ] Principle stated first
- [ ] Every step has `text` + `formula` where math occurs
- [ ] Arithmetic hand-verified
- [ ] IFRS/US GAAP noted if relevant
- [ ] Final `answer` matches last step
