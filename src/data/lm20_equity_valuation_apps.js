// LM 20 – Equity Valuation: Applications and Processes
// CFA Level 2 Equity Investments (2026) — Reading often numbered 24 in curriculum packs
// Source: CFA Institute curriculum structure; cross-referenced with AnalystPrep, 300Hours.

export const LM20 = {
  id: 20,
  topic: 5,
  topicName: "Equity Valuation",
  title: "Equity Valuation: Applications and Processes",
  subtitle: "Intrinsic value, model selection, Porter analysis, and valuation toolkit overview",
  estimatedTime: "2–3 hours",
  weight: "10–15% of exam (Equity) / ~1–1.5% of total",

  learningOutcomes: [
    "Define valuation and intrinsic value, and explain sources of perceived mispricing.",
    "Explain going-concern value versus liquidation value and when each is appropriate.",
    "Contrast intrinsic value, fair market value, and investment value.",
    "Describe applications of equity valuation in stock selection, M&A, portfolio management, and private company analysis.",
    "Explain the use of industry and competitive analysis (Porter’s Five Forces) in the valuation process.",
    "Contrast absolute and relative valuation models, and describe sum-of-the-parts valuation.",
    "Explain issues in selecting an appropriate valuation model (DDM, FCFF/FCFE, residual income, multiples).",
    "Describe the broad steps in the equity valuation process.",
    "Calculate and interpret FCFF, FCFE, Gordon growth value, residual income, justified P/E, and WACC in an applications context.",
  ],

  keyTerms: [
    { term: "Intrinsic Value (IV)", def: "The value of an asset estimated by an analyst who has a complete understanding of its investment characteristics. Most relevant definition for public equity analysts." },
    { term: "Perceived Mispricing", def: "IV_analyst − Market Price. Equals actual mispricing (IV_actual − Price) plus analyst error (IV_analyst − IV_actual)." },
    { term: "Going-Concern Value", def: "Value assuming the firm continues operating indefinitely — the usual assumption for DDM, FCF, and RI models." },
    { term: "Liquidation Value", def: "Value if assets are sold separately and liabilities settled. Relevant when the firm is failing or a breakup is likely." },
    { term: "Fair Market Value", def: "Hypothetical price between a willing, informed buyer and seller in an arm’s-length transaction." },
    { term: "Investment Value", def: "Value to a specific buyer, including synergies unique to that buyer (often used in M&A)." },
    { term: "Absolute Valuation", def: "Models that estimate intrinsic value directly from fundamentals: DDM, FCFF/FCFE, residual income." },
    { term: "Relative Valuation", def: "Models that value an asset by comparing price multiples (P/E, P/B) or EV multiples (EV/EBITDA) to peers or to fundamentals." },
    { term: "Sum-of-the-Parts (SOTP)", def: "Value each business segment separately, then sum. Diversified firms often trade at a conglomerate discount (often cited ~10–15%)." },
    { term: "Conglomerate Discount", def: "Market value of a diversified firm is often less than the sum of stand-alone segment values." },
    { term: "Porter’s Five Forces", def: "Threat of new entrants, threat of substitutes, bargaining power of buyers, bargaining power of suppliers, rivalry among existing competitors." },
    { term: "Clean-Surplus Relation", def: "All changes in book value of equity (except shareholder transactions) flow through net income: BV_t = BV_{t−1} + NI_t − Div_t." },
  ],

  sections: [
    {
      id: "intrinsic",
      title: "1. Valuation, Intrinsic Value, and Perceived Mispricing",
      body: `**Valuation** is the process of estimating the value of an asset. For equity analysts, the central concept is **intrinsic value (IV)** — the value consistent with a complete understanding of the asset’s investment characteristics.

**Perceived mispricing** is what the analyst acts on:

Perceived mispricing = IV_analyst − Market Price
                     = (IV_actual − Price) + (IV_analyst − IV_actual)

So an apparent “cheap” stock can reflect:
1. **Actual mispricing** — market price ≠ true intrinsic value, and/or
2. **Analyst valuation error** — the analyst’s IV differs from true IV

**Implication:** a positive perceived mispricing is a *signal*, not a certainty. Position size and conviction should reflect uncertainty about both market efficiency and model error.`,
      formula: "Perceived mispricing = IV_analyst − P = (IV_actual − P) + (IV_analyst − IV_actual)",
    },
    {
      id: "going-concern",
      title: "2. Going Concern vs Liquidation Value",
      body: `Most equity models assume a **going concern**: the firm continues operating indefinitely, generating cash flows from ongoing operations.

**Liquidation value** is the net amount realized if assets are sold piecemeal and liabilities paid. Use liquidation (or compare it to going-concern value) when:
- The firm is failing or near insolvency
- Asset break-up looks more valuable than continued operations
- Private equity / activist strategies contemplate asset sales

**Exam tip:** if going-concern IV < liquidation value (after costs), the firm may be worth more dead than alive — a classic value-trap / restructuring setup.`,
    },
    {
      id: "definitions",
      title: "3. Definitions of Value",
      body: `Three definitions appear repeatedly:

| Definition | Meaning | Typical use |
|---|---|---|
| **Intrinsic value** | Analyst’s estimate from fundamentals | Public equity research, active management |
| **Fair market value** | Willing buyer / willing seller price | Fairness opinions, tax, legal |
| **Investment value** | Value to a *specific* buyer (synergies) | Strategic M&A bids |

For public equity analysts, **intrinsic value** is the primary target. Investment value can exceed stand-alone IV when a buyer can extract synergies.`,
    },
    {
      id: "applications",
      title: "4. Applications of Equity Valuation",
      body: `Equity valuation is used for:

1. **Stock selection** — buy when IV > price (with margin of safety)
2. **Inferring market expectations** — reverse-engineer growth/risk implied by price
3. **M&A / fairness opinions** — stand-alone IV vs deal price; investment value with synergies
4. **Corporate finance / strategy** — project IRR vs cost of capital; divestitures; capital allocation
5. **Private company valuation** — IPOs, private equity, employee equity, litigation
6. **Portfolio management** — planning (strategic asset allocation inputs) and execution (active bets)`,
    },
    {
      id: "porter",
      title: "5. Industry & Competitive Analysis — Porter’s Five Forces",
      body: `Before plugging numbers into a DCF, assess industry economics. **Porter’s Five Forces** structure the competitive analysis:

1. **Threat of new entrants** — barriers to entry (scale, regulation, brand, capital)
2. **Threat of substitutes** — alternative products that cap pricing power
3. **Bargaining power of buyers** — customer concentration, switching costs
4. **Bargaining power of suppliers** — input uniqueness, supplier concentration
5. **Rivalry among existing competitors** — industry growth, exit barriers, differentiation

**Link to valuation:** intense forces → lower ROIC → lower justified multiples and terminal growth assumptions. Weak forces → durable economic profits → higher RI and premium multiples.`,
    },
    {
      id: "absolute-relative",
      title: "6. Absolute vs Relative Valuation & Sum-of-the-Parts",
      body: `**Absolute (intrinsic) models** estimate value from expected cash flows or residual earnings:
- Dividend Discount Model (DDM)
- Free Cash Flow to the Firm (FCFF) / Free Cash Flow to Equity (FCFE)
- Residual Income (RI)

**Relative models** compare multiples to peers or to justified multiples from fundamentals:
- Equity multiples: P/E, P/B, P/S
- Enterprise multiples: EV/EBITDA, EV/Sales

**Sum-of-the-parts (SOTP):** value each segment with the most suitable model, sum the parts, then often apply a **conglomerate discount** (frequently discussed in the 10–15% range) reflecting complexity, capital allocation friction, or conglomerate stigma.

SOTP equity value ≈ Σ Segment EV − Net debt − Conglomerate discount (if applied)`,
      formula: "SOTP equity ≈ Σ segment values − net debt − conglomerate discount",
    },
    {
      id: "model-choice",
      title: "7. Choosing the Valuation Approach",
      body: `**Use DDM when:**
- Dividends are stable and predictable
- Dividends approximate FCFE (payout policy mirrors free cash to equity)
- Firm is mature with a clear dividend policy

**Prefer FCFF when:**
- Leverage is changing significantly (capital structure not stable)
- FCFE is negative (debt paydown / growth investment)
- You want enterprise value before subtracting net debt

**Prefer FCFE when:**
- Capital structure is relatively stable
- You want equity value directly (discount at r_e)

**Prefer Residual Income when:**
- Dividends / FCFE are negative or highly erratic
- Earnings and book value are relatively reliable
- Firm has negative earnings but positive book value (P/E unusable; RI still works)

**Relative valuation** is fast for peer screening but inherits peer mispricing and accounting differences.

**Discount rates (do not mix):**
- FCFF → **WACC**
- FCFE / DDM / RI → **required return on equity (r_e)**`,
    },
    {
      id: "formulas-context",
      title: "8. Core Formulas Used Across Equity Modules",
      body: `This reading introduces the toolkit used in LM 21–24. Memorize the identities; later modules deepen the mechanics.

**Gordon Growth (constant-growth DDM):**
P₀ = D₁ / (r_e − g)

**FCFF from net income:**
FCFF = NI + NCC + Int(1 − t) − FCInv − WCInv

**FCFE from net income:**
FCFE = NI + NCC − FCInv − WCInv + Net Borrowing

**Residual income:**
RI_t = NI_t − r_e × BV_{t−1}
V₀ = BV₀ + Σ RI_t / (1 + r_e)^t

**Justified leading P/E (Gordon):**
P₀/E₁ = (1 − b) / (r_e − g)

**WACC (for FCFF):**
WACC = w_d × r_d × (1 − t) + w_e × r_e

**Why EBITDA ≠ FCFF:** EBITDA ignores cash taxes, working-capital investment, and fixed-capital investment.

**Clean surplus (RI models):** BV_t = BV_{t−1} + NI_t − Div_t (excluding capital contributions / buybacks). Dirty-surplus items (OCI that bypasses NI) break the simple RI identity unless adjusted.

**Terminal value discipline:** g < discount rate; reinvestment must support assumed growth; stage assumptions must match the competitive analysis.`,
      formula: "FCFF = NI + NCC + Int(1−t) − FCInv − WCInv",
    },
    {
      id: "process",
      title: "9. The Equity Valuation Process — Broad Steps",
      body: `CFA frames the process as a sequence:

1. **Understand the business** — industry, strategy, financial statements, quality of earnings
2. **Forecast company performance** — sales, margins, reinvestment, capital structure
3. **Select the appropriate model** — DDM / FCF / RI / multiples (or hybrid)
4. **Convert forecasts to a valuation** — discount, capitalize, or apply multiples; sensitivity
5. **Apply the valuation conclusions** — investment recommendation, deal opinion, or portfolio action

Two-stage or three-stage models are appropriate when growth is expected to decline toward a sustainable long-run rate. Keep terminal assumptions consistent with Porter economics and reinvestment needs.`,
    },
  ],

  formulaSheet: [
    { name: "Perceived mispricing", formula: "IV_analyst − P = (IV_actual − P) + (IV_analyst − IV_actual)" },
    { name: "Gordon Growth Model", formula: "P₀ = D₁ / (r_e − g) = D₀(1+g) / (r_e − g)" },
    { name: "FCFF from NI", formula: "FCFF = NI + NCC + Int(1−t) − FCInv − WCInv" },
    { name: "FCFE from NI", formula: "FCFE = NI + NCC − FCInv − WCInv + Net Borrowing" },
    { name: "Residual income", formula: "RI_t = NI_t − r_e × BV_{t−1}" },
    { name: "RI valuation", formula: "V₀ = BV₀ + Σ RI_t / (1+r_e)^t" },
    { name: "Justified leading P/E", formula: "P₀/E₁ = (1−b) / (r_e − g)" },
    { name: "WACC", formula: "WACC = w_d·r_d·(1−t) + w_e·r_e" },
    { name: "Clean-surplus BV", formula: "BV_t = BV_{t−1} + NI_t − Div_t" },
    { name: "SOTP (conceptual)", formula: "Equity ≈ Σ segment values − net debt − conglomerate discount" },
  ],
};

// ============================================================================
// MCQs – CFA-style item sets (vignette + 4 MCQs)
// Concepts from Reading + numerical applications; glassbox solutions throughout.
// ============================================================================
export const LM20_ITEM_SETS = [
  // ===================== ITEM SET 1 =====================
  {
    id: "IS-20-01",
    title: "Item Set 1 — Intrinsic Value & Mispricing (Northvale Equity)",
    vignette: `Priya Shah, CFA, covers Northvale Industries for a long-only fund. Northvale trades at $42.00. Using a two-stage FCFE model, Shah estimates intrinsic value at $48.50. She believes the “true” intrinsic value (if she had perfect information) is $46.00. Separately, her team is evaluating a distressed subsidiary whose going-concern value is estimated at $120 million but whose orderly liquidation value (net of liabilities and costs) is $145 million.

Shah’s CIO asks her to clarify definitions of value for (i) a public equity recommendation, (ii) a fairness opinion for a stand-alone sale with no synergies, and (iii) a strategic acquirer that can realize $30 million of after-tax synergies.`,
    questions: [
      {
        id: 1,
        question: `Shah’s perceived mispricing for Northvale is closest to:`,
        options: [
          "$2.50 undervalued",
          "$4.00 undervalued",
          "$6.50 undervalued",
          "$6.50 overvalued",
        ],
        answer: 2,
        solution: `**First principle:** Perceived mispricing = IV_analyst − Market Price.

IV_analyst = $48.50
P = $42.00

Perceived mispricing = 48.50 − 42.00 = **+$6.50** (appears undervalued).

**Answer: C — $6.50 undervalued.**

Sanity check: positive means analyst IV > price → buy candidate (subject to error risk).`,
        lo: "LO a — perceived mispricing",
      },
      {
        id: 2,
        question: `Decomposing Shah’s perceived mispricing, actual mispricing and analyst error are closest to:`,
        options: [
          "Actual +$4.00; error +$2.50",
          "Actual +$6.50; error $0",
          "Actual +$2.50; error +$4.00",
          "Actual −$4.00; error +$10.50",
        ],
        answer: 0,
        solution: `**Identity:**
Perceived = (IV_actual − P) + (IV_analyst − IV_actual)

Actual mispricing = IV_actual − P = 46.00 − 42.00 = **+$4.00**
Analyst error = IV_analyst − IV_actual = 48.50 − 46.00 = **+$2.50**

Check: 4.00 + 2.50 = 6.50 = perceived. ✓

**Answer: A — Actual +$4.00; error +$2.50.**`,
        lo: "LO a — sources of perceived mispricing",
      },
      {
        id: 3,
        question: `For the distressed subsidiary, the most appropriate primary value measure is:`,
        options: [
          "Going-concern DDM value, because dividends are still paid",
          "Liquidation value, because it exceeds going-concern value",
          "Investment value to a strategic buyer only",
          "Fair market value equal to book value of equity",
        ],
        answer: 1,
        solution: `Going-concern estimate = $120m < liquidation value = $145m.

When break-up value exceeds going-concern value, **liquidation (or break-up) value** is the more relevant floor / primary measure for a failing unit.

**Answer: B — Liquidation value, because it exceeds going-concern value.**`,
        lo: "LO b — going concern vs liquidation",
      },
      {
        id: 4,
        question: `Which pairing of value definition to use-case is most accurate?`,
        options: [
          "Public equity recommendation → investment value; fairness opinion (no synergies) → intrinsic value; strategic bid → fair market value",
          "Public equity recommendation → intrinsic value; fairness opinion (no synergies) → fair market value; strategic bid → investment value",
          "All three use-cases should use liquidation value",
          "Public equity recommendation → fair market value only; M&A never uses intrinsic value",
        ],
        answer: 1,
        solution: `**Intrinsic value** — most relevant for public equity analysts (stock selection).
**Fair market value** — willing buyer/seller; typical fairness-opinion language without buyer-specific synergies.
**Investment value** — value to a *specific* buyer including synergies ($30m in the vignette).

**Answer: B.**`,
        lo: "LO c, d — definitions and applications",
      },
    ],
  },

  // ===================== ITEM SET 2 =====================
  {
    id: "IS-20-02",
    title: "Item Set 2 — Porter, Absolute vs Relative, SOTP (Helios Conglomerate)",
    vignette: `Helios Group has three segments. An analyst estimates stand-alone enterprise values:

- Energy: $800 million
- Retail: $500 million
- Software: $700 million

Helios has net debt of $400 million. Diversified peers typically trade at a 12% conglomerate discount to SOTP. Helios’s software segment faces low rivalry and high switching costs; retail faces intense price competition and powerful buyers.

The analyst is choosing among absolute models (DDM, FCFF/FCFE, RI) and relative multiples for a peer screen.`,
    questions: [
      {
        id: 1,
        question: `Equity value using SOTP *before* any conglomerate discount is closest to:`,
        options: [
          "$1,600 million",
          "$2,000 million",
          "$2,400 million",
          "$1,200 million",
        ],
        answer: 0,
        solution: `**First principle:** Equity ≈ Σ segment EV − net debt.

Σ EV = 800 + 500 + 700 = **$2,000m**
Equity (pre-discount) = 2,000 − 400 = **$1,600m**

**Answer: A — $1,600 million.**`,
        lo: "LO f — sum-of-the-parts",
      },
      {
        id: 2,
        question: `Applying a 12% conglomerate discount to the SOTP equity value, implied equity value is closest to:`,
        options: [
          "$1,408 million",
          "$1,760 million",
          "$1,600 million",
          "$1,200 million",
        ],
        answer: 0,
        solution: `Pre-discount equity = $1,600m
Discount = 12% × 1,600 = $192m
Post-discount equity = 1,600 − 192 = **$1,408m**

(Equivalently: 1,600 × 0.88 = 1,408.)

**Answer: A — $1,408 million.**

Sanity: discount reduces — not increases — conglomerate equity value vs sum of parts.`,
        lo: "LO f — conglomerate discount",
      },
      {
        id: 3,
        question: `Which Porter force most clearly threatens Helios Retail’s long-run ROIC?`,
        options: [
          "Threat of new entrants into Software",
          "Bargaining power of buyers in Retail",
          "Supplier power in Energy only",
          "Absence of rivalry in Retail",
        ],
        answer: 1,
        solution: `The vignette states retail faces **intense price competition and powerful buyers** → bargaining power of buyers (and rivalry) compress margins and ROIC.

Software’s low rivalry / high switching costs is a *positive* for that segment, not a threat to Retail.

**Answer: B — Bargaining power of buyers in Retail.**`,
        lo: "LO e — Porter’s Five Forces",
      },
      {
        id: 4,
        question: `Which statement best contrasts absolute and relative valuation for Helios?`,
        options: [
          "Absolute models (e.g., FCFF) estimate intrinsic value from forecasts; relative models compare multiples to peers or fundamentals",
          "Relative models always produce higher values than absolute models",
          "P/E is an absolute model because earnings are fundamental",
          "SOTP is only a relative technique and cannot use DCF on segments",
        ],
        answer: 0,
        solution: `**Absolute:** DDM, FCFF/FCFE, RI → intrinsic value from cash flows / residual earnings.
**Relative:** P/E, P/B, EV/EBITDA vs peers or justified multiples.

SOTP can use *either* DCF or multiples on each segment.

**Answer: A.**`,
        lo: "LO f — absolute vs relative",
      },
    ],
  },

  // ===================== ITEM SET 3 =====================
  {
    id: "IS-20-03",
    title: "Item Set 3 — Model Choice, FCFF & FCFE (CedarTech)",
    vignette: `CedarTech reported the following for the year just ended (in $ millions):

- Net income (NI): 120
- Non-cash charges (NCC, incl. depreciation): 40
- Interest expense: 30
- Tax rate: 25%
- FCInv (fixed capital investment, net): 55
- WCInv (working capital investment): 15
- Net borrowing: 20
- Dividends paid: 25

CedarTech’s leverage is expected to fall sharply over the next three years as it pays down acquisition debt. Free cash flow to equity was negative last year for a peer that cut debt aggressively. CedarTech’s required equity return is 11%; WACC is 8.5%.`,
    questions: [
      {
        id: 1,
        question: `CedarTech’s FCFF for the year is closest to:`,
        options: [
          "$112.5 million",
          "$90.0 million",
          "$135.0 million",
          "$67.5 million",
        ],
        answer: 0,
        solution: `**Identity:** FCFF = NI + NCC + Int(1 − t) − FCInv − WCInv

Int(1 − t) = 30 × (1 − 0.25) = 30 × 0.75 = **22.5**

FCFF = 120 + 40 + 22.5 − 55 − 15
     = 182.5 − 70
     = **112.5**

**Answer: A — $112.5 million.**

Flow: add back after-tax interest because FCFF is *before* financing; subtract reinvestment (FCInv, WCInv).`,
        lo: "LO i — FCFF from NI",
      },
      {
        id: 2,
        question: `CedarTech’s FCFE for the year is closest to:`,
        options: [
          "$90 million",
          "$110 million",
          "$70 million",
          "$130 million",
        ],
        answer: 1,
        solution: `**Identity:** FCFE = NI + NCC − FCInv − WCInv + Net Borrowing

FCFE = 120 + 40 − 55 − 15 + 20
     = 160 − 70 + 20
     = **110**

**Answer: B — $110 million.**

Note: dividends ($25) are a *use* of FCFE, not an input to the FCFE calculation. FCFE can exceed dividends.`,
        lo: "LO i — FCFE from NI",
      },
      {
        id: 3,
        question: `Given changing leverage, the most appropriate primary model for CedarTech is:`,
        options: [
          "Gordon DDM using current dividends, discounted at WACC",
          "FCFF discounted at WACC",
          "FCFE discounted at WACC",
          "Trailing P/E only, because FCFE ≠ dividends",
        ],
        answer: 1,
        solution: `When **leverage is changing significantly**, FCFE is volatile / can be negative; **FCFF discounted at WACC** is preferred. Equity value = EV − net debt (at forecast horizon).

DDM at WACC is wrong (DDM uses r_e). FCFE at WACC mixes equity cash flows with firm discount rate.

**Answer: B — FCFF discounted at WACC.**`,
        lo: "LO g — model selection FCFF vs FCFE",
      },
      {
        id: 4,
        question: `Which statement about EBITDA as a proxy for FCFF is most accurate?`,
        options: [
          "EBITDA equals FCFF when the tax rate is zero",
          "EBITDA is a poor FCFF proxy because it ignores taxes paid, WCInv, and FCInv",
          "EBITDA always exceeds FCFF by interest × (1 − t)",
          "EBITDA equals FCFF after adding net borrowing",
        ],
        answer: 1,
        solution: `EBITDA is before interest *and* before cash taxes, WCInv, and FCInv. Therefore it is a **poor proxy** for FCFF.

**Answer: B.**`,
        lo: "LO g, i — EBITDA vs FCFF",
      },
    ],
  },

  // ===================== ITEM SET 4 =====================
  {
    id: "IS-20-04",
    title: "Item Set 4 — GGM, Justified P/E, Residual Income (Maple Bank)",
    vignette: `Maple Bank is a mature financial firm. Selected data:

- Expected dividend next year (D₁): $3.60
- Required return on equity (r_e): 12%
- Long-run dividend growth (g): 4%
- Expected EPS next year (E₁): $6.00
- Current book value per share (BV₀): $40.00
- Expected NI per share year 1: $5.00 (for RI illustration; clean surplus holds)
- Retention ratio b consistent with D₁/E₁

Maple’s FCFE has been highly volatile because of regulatory capital builds, but earnings and book value are considered reliable.`,
    questions: [
      {
        id: 1,
        question: `Using the Gordon Growth Model, Maple’s intrinsic value per share is closest to:`,
        options: [
          "$30.00",
          "$45.00",
          "$90.00",
          "$36.00",
        ],
        answer: 1,
        solution: `**Identity:** P₀ = D₁ / (r_e − g)

P₀ = 3.60 / (0.12 − 0.04) = 3.60 / 0.08 = **$45.00**

**Answer: B — $45.00.**

Sanity: dividend yield = 3.60/45 = 8%; + g 4% = 12% = r_e. ✓`,
        lo: "LO i — Gordon Growth Model",
      },
      {
        id: 2,
        question: `Maple’s justified leading P/E based on the Gordon model is closest to:`,
        options: [
          "7.5×",
          "10.0×",
          "12.5×",
          "15.0×",
        ],
        answer: 0,
        solution: `Payout = D₁/E₁ = 3.60/6.00 = **0.60** → (1 − b) = 0.60

Justified leading P/E = (1 − b) / (r_e − g) = 0.60 / 0.08 = **7.5×**

Check: P₀/E₁ = 45/6 = 7.5×. ✓

**Answer: A — 7.5×.**`,
        lo: "LO i — justified leading P/E",
      },
      {
        id: 3,
        question: `Year-1 residual income per share is closest to:`,
        options: [
          "$0.20",
          "$0.20 negative",
          "$1.20",
          "$5.00",
        ],
        answer: 0,
        solution: `**Identity:** RI₁ = NI₁ − r_e × BV₀

Equity charge = 0.12 × 40.00 = **$4.80**
RI₁ = 5.00 − 4.80 = **$0.20**

**Answer: A — $0.20.**

Interpretation: Maple earns slightly above its cost of equity on beginning book value.`,
        lo: "LO i — residual income",
      },
      {
        id: 4,
        question: `Given volatile FCFE but reliable earnings/book, the residual income model is:`,
        options: [
          "Inappropriate because RI requires dividends equal to FCFE",
          "Particularly useful in this setting",
          "Only usable when earnings are negative",
          "Required to use WACC as the discount rate",
        ],
        answer: 1,
        solution: `RI is **especially useful** when dividends/FCFE are negative or erratic but accounting earnings and book value are meaningful. Discount RI at **r_e**, not WACC.

**Answer: B — Particularly useful in this setting.**`,
        lo: "LO g — when to use RI",
      },
    ],
  },

  // ===================== ITEM SET 5 =====================
  {
    id: "IS-20-05",
    title: "Item Set 5 — WACC, Process & Terminal Discipline (Atlas Capital)",
    vignette: `Atlas Capital is valuing a private industrial firm for a minority equity stake. Target capital structure weights: debt 40%, equity 60%. Cost of debt before tax is 7%; tax rate 30%; cost of equity 13%. Management proposes a terminal growth rate of 14% in a Gordon FCFF terminal value. Atlas’s process checklist is: understand the business → forecast → select model → convert to value → apply conclusions.

The firm currently pays no dividend; FCFE is expected to turn positive in year 3 as leverage stabilizes.`,
    questions: [
      {
        id: 1,
        question: `The firm’s WACC is closest to:`,
        options: [
          "8.68%",
          "9.76%",
          "10.60%",
          "11.20%",
        ],
        answer: 1,
        solution: `**Identity:** WACC = w_d·r_d·(1−t) + w_e·r_e

After-tax cost of debt = 7% × (1 − 0.30) = **4.9%**

WACC = 0.40 × 4.9% + 0.60 × 13%
     = 1.96% + 7.80%
     = **9.76%**

Trap (forgetting tax shield): 0.40×7% + 0.60×13% = 10.60%.

**Answer: B — 9.76%.**`,
        lo: "LO i — WACC",
      },
      {
        id: 2,
        question: `The proposed 14% terminal growth rate is most problematic because:`,
        options: [
          "Terminal g must equal WACC",
          "g must be sustainable and less than the discount rate; 14% > WACC (9.76%)",
          "Private firms cannot use Gordon terminal values",
          "Terminal g must equal the risk-free rate",
        ],
        answer: 1,
        solution: `In a Gordon terminal value, **g < discount rate** or value explodes / is undefined. Here g = 14% > WACC = 9.76% — inconsistent and economically implausible as a perpetual rate (far above long-run economy growth).

**Answer: B.**`,
        lo: "LO g, h — terminal value consistency",
      },
      {
        id: 3,
        question: `Given no dividends today and stabilizing leverage by year 3, the best near-term modeling choice is:`,
        options: [
          "Single-stage DDM from year 0",
          "Multistage FCFE (or FCFF if leverage still shifting), then r_e or WACC as appropriate",
          "Liquidation value only",
          "Justified P/E with b = 1 forever",
        ],
        answer: 1,
        solution: `No dividends → DDM weak now. Use **multistage FCF**: FCFF while leverage changes; FCFE once structure stabilizes. Two-/three-stage models fit growth/transition to stable rates.

**Answer: B.**`,
        lo: "LO g, h — multistage models",
      },
      {
        id: 4,
        question: `Which sequence correctly states the broad equity valuation process?`,
        options: [
          "Select model → Apply conclusions → Forecast → Understand business → Value",
          "Understand the business → Forecast performance → Select model → Convert forecasts to value → Apply conclusions",
          "Forecast → Liquidate → Relative value only → Trade",
          "Apply conclusions → Select model → Understand business",
        ],
        answer: 1,
        solution: `Standard CFA sequence:
1. Understand the business
2. Forecast performance
3. Select the valuation model
4. Convert forecasts to a value
5. Apply the conclusions

**Answer: B.**`,
        lo: "LO h — valuation process steps",
      },
    ],
  },

  // ===================== ITEM SET 6 — Concept drill =====================
  {
    id: "IS-20-06",
    title: "Item Set 6 — Concept Drill (LOS Rapid Fire)",
    vignette: `A study group is reviewing Equity Valuation: Applications and Processes. They quiz each other on definitions and model choice without a company vignette. Use CFA Level II conventions.`,
    questions: [
      {
        id: 1,
        question: `Intrinsic value is best defined as:`,
        options: [
          "The price a strategic buyer will pay including synergies",
          "The value estimated by an analyst with complete understanding of the asset’s characteristics",
          "The average of peer transaction multiples",
          "Book value of equity under clean surplus",
        ],
        answer: 1,
        solution: `**Intrinsic value** = analyst’s estimate given complete understanding of the investment characteristics. Synergies → investment value; peer multiples → relative value.

**Answer: B.**`,
        lo: "LO a — intrinsic value definition",
      },
      {
        id: 2,
        question: `Porter’s Five Forces include all of the following except:`,
        options: [
          "Threat of new entrants",
          "Bargaining power of suppliers",
          "Government fiscal multiplier",
          "Rivalry among existing competitors",
        ],
        answer: 2,
        solution: `Five forces: new entrants, substitutes, buyer power, supplier power, rivalry. **Government fiscal multiplier** is not one of Porter’s five.

**Answer: C.**`,
        lo: "LO e — Porter’s Five Forces",
      },
      {
        id: 3,
        question: `An analyst should prefer the DDM when:`,
        options: [
          "The firm pays stable, predictable dividends that approximate FCFE",
          "FCFE is negative and leverage is changing rapidly",
          "Earnings are negative but book value is positive",
          "The firm never intends to distribute cash to shareholders",
        ],
        answer: 0,
        solution: `DDM fits **stable dividends ≈ FCFE**. Negative/volatile FCFE → FCFF or RI. Negative earnings + positive BV → RI often preferred.

**Answer: A.**`,
        lo: "LO g — when to use DDM",
      },
      {
        id: 4,
        question: `Clean-surplus relation in residual income models means:`,
        options: [
          "Dividends equal net income every period",
          "All changes in book value except shareholder transactions flow through net income",
          "OCI is always zero under IFRS and US GAAP",
          "Book value equals market value at each balance-sheet date",
        ],
        answer: 1,
        solution: `Clean surplus: BV_t = BV_{t−1} + NI_t − Div_t (ignoring capital contributions/repurchases). Items that bypass NI (dirty surplus / certain OCI) violate the simple RI setup unless adjusted.

**Answer: B.**`,
        lo: "LO g — clean surplus",
      },
    ],
  },

  // ===================== ITEM SET 7 — Concept drill 2 =====================
  {
    id: "IS-20-07",
    title: "Item Set 7 — Applications & Market Expectations",
    vignette: `An associate summarizes how valuation is used on the desk: stock selection, reading market expectations from price, M&A fairness opinions, corporate strategy, private company valuation, and portfolio planning/execution. The associate notes that market price embeds collective forecasts of earnings, growth, and risk — so reverse-engineering implied g from a Gordon model can stress-test whether the market is optimistic.`,
    questions: [
      {
        id: 1,
        question: `Which is least likely an application of equity valuation listed in the curriculum framework?`,
        options: [
          "Stock selection",
          "Setting the statutory corporate tax rate",
          "M&A fairness opinions",
          "Private company valuation",
        ],
        answer: 1,
        solution: `Valuation applications include stock selection, inferring expectations, M&A/fairness opinions, corporate strategy, private company valuation, and portfolio management. **Setting statutory tax rates** is a government policy function, not an equity-valuation application.

**Answer: B.**`,
        lo: "LO d — applications",
      },
      {
        id: 2,
        question: `How does the market price reflect expectations?`,
        options: [
          "It equals book value under clean surplus",
          "It embeds investors’ collective forecasts of earnings, growth, and risk",
          "It always equals the analyst’s intrinsic value",
          "It ignores risk and only capitalizes next year’s EPS",
        ],
        answer: 1,
        solution: `Price is a consensus present value of expected payoffs. Reverse DCF/DDM reads out the **implied** growth or return assumptions.

**Answer: B.**`,
        lo: "LO d — reading market expectations",
      },
      {
        id: 3,
        question: `A key limitation of the DDM is that:`,
        options: [
          "It cannot be used for preferred stock",
          "Many companies do not pay dividends or have unstable payout policies",
          "It requires WACC rather than r_e",
          "It ignores the time value of money",
        ],
        answer: 1,
        solution: `Many firms pay **no** or **unstable** dividends, so DDM is impractical — use FCFE/FCFF or RI instead. (Perpetual preferred *is* a simple DDM case.)

**Answer: B.**`,
        lo: "LO g — DDM limitations",
      },
      {
        id: 4,
        question: `Discount rates paired correctly with cash-flow claims are:`,
        options: [
          "FCFF → r_e; FCFE → WACC; DDM → WACC",
          "FCFF → WACC; FCFE and DDM → r_e",
          "All models → WACC",
          "All models → r_e",
        ],
        answer: 1,
        solution: `**FCFF** is a firm claim → discount at **WACC**.
**FCFE** and **dividends** are equity claims → discount at **r_e**.
RI also uses **r_e**.

**Answer: B.**`,
        lo: "LO g — matching discount rates",
      },
    ],
  },

  // ===================== ITEM SET 8 — Numerical wrap =====================
  {
    id: "IS-20-08",
    title: "Item Set 8 — Integrated Numericals (Beacon Media)",
    vignette: `Beacon Media data (per share or $ millions as noted):

- D₀ = $2.00; g = 5%; r_e = 10%
- NI = $80m; NCC = $25m; Interest = $16m; t = 25%; FCInv = $30m; WCInv = $8m; Net borrowing = $12m
- BV₀ = $200m; expected NI₁ = $28m; r_e (firm equity) = 10% for RI on total equity book
- Negative EPS this year but BV₀ > 0; FCFE last year was −$5m`,
    questions: [
      {
        id: 1,
        question: `Gordon growth value using D₁ is closest to:`,
        options: [
          "$20.00",
          "$40.00",
          "$42.00",
          "$44.00",
        ],
        answer: 2,
        solution: `D₁ = D₀(1+g) = 2.00 × 1.05 = **$2.10**
P₀ = 2.10 / (0.10 − 0.05) = 2.10 / 0.05 = **$42.00**

**Answer: C — $42.00.**`,
        lo: "LO i — GGM",
      },
      {
        id: 2,
        question: `FCFF is closest to:`,
        options: [
          "$79 million",
          "$67 million",
          "$55 million",
          "$91 million",
        ],
        answer: 0,
        solution: `Int(1−t) = 16 × 0.75 = **12**
FCFF = 80 + 25 + 12 − 30 − 8 = **$79m**

**Answer: A — $79 million.**`,
        lo: "LO i — FCFF",
      },
      {
        id: 3,
        question: `FCFE is closest to:`,
        options: [
          "$67 million",
          "$79 million",
          "$55 million",
          "$91 million",
        ],
        answer: 1,
        solution: `**Identity:** FCFE = NI + NCC − FCInv − WCInv + Net Borrowing

FCFE = 80 + 25 − 30 − 8 + 12
     = 105 − 38 + 12
     = **$79 million**

Trap: omitting net borrowing → 80 + 25 − 30 − 8 = $67m (option A).

**Answer: B — $79 million.**`,
        lo: "LO i — FCFE",
      },
      {
        id: 4,
        question: `For a firm with negative earnings but positive book value and erratic FCFE, the most suitable approach among the following is:`,
        options: [
          "Trailing P/E only",
          "Residual income valuation",
          "Single-stage DDM with g > r_e",
          "EV/EBITDA ignoring net debt",
        ],
        answer: 1,
        solution: `Negative earnings break P/E. Erratic/negative FCFE weakens FCFE-DCF. **Residual income** still works with positive book value and forecastable earnings vs equity charge.

**Answer: B — Residual income valuation.**

Quick RI₁ check: RI₁ = 28 − 0.10 × 200 = 28 − 20 = **$8m** (positive economic profit).`,
        lo: "LO g — RI when earnings negative / FCFE erratic",
      },
    ],
  },
];

// ============================================================================
// Glassbox Math — 30 CFA-style numericals (Applications & Processes)
// All arithmetic verified; full first-principles solutions.
// ============================================================================
export const LM20_GLASSBOX = [
  {
    id: 1,
    title: "FCFF from Net Income",
    topic: "FCFF",
    question:
      "Net income = $180 million, Non-cash charges = $25 million, Interest expense = $15 million, Tax rate = 30%, FCInv = $60 million, WCInv = $20 million. Calculate FCFF.",
    answer: "$135.5 million",
    principle:
      "FCFF starts from NI, adds back non-cash charges and after-tax interest, then subtracts reinvestment in fixed and working capital.",
    steps: [
      {
        text: "Write the FCFF-from-NI identity:",
        formula: "FCFF = NI + NCC + Int(1−t) − FCInv − WCInv",
      },
      {
        text: "After-tax interest:",
        formula: "Int(1−t) = 15 × (1−0.30) = 10.5",
      },
      {
        text: "Substitute:",
        formula: "FCFF = 180 + 25 + 10.5 − 60 − 20 = 135.5",
      },
    ],
  },
  {
    id: 2,
    title: "FCFE from Net Income",
    topic: "FCFE",
    question:
      "Net income = $95 million, Depreciation = $18 million, FCInv = $42 million, WCInv = $12 million, Net borrowing = $25 million. Calculate FCFE.",
    answer: "$84 million",
    principle:
      "FCFE is cash available to equity after reinvestment and net debt issuance/repayment.",
    steps: [
      {
        text: "FCFE identity (NCC = depreciation here):",
        formula: "FCFE = NI + NCC − FCInv − WCInv + Net Borrowing",
      },
      {
        text: "Substitute:",
        formula: "FCFE = 95 + 18 − 42 − 12 + 25 = 84",
      },
    ],
  },
  {
    id: 3,
    title: "FCFF from EBIT",
    topic: "FCFF",
    question:
      "EBIT = $420 million, Tax rate = 25%, Depreciation = $55 million, FCInv = $95 million, WCInv = $30 million. Calculate FCFF.",
    answer: "$245 million",
    principle:
      "From EBIT: tax-adjust operating profit, add back depreciation (non-cash), subtract FCInv and WCInv. Interest is not subtracted because FCFF is pre-financing.",
    steps: [
      {
        text: "FCFF-from-EBIT identity:",
        formula: "FCFF = EBIT(1−t) + Dep − FCInv − WCInv",
      },
      {
        text: "After-tax EBIT:",
        formula: "420 × 0.75 = 315",
      },
      {
        text: "Substitute:",
        formula: "FCFF = 315 + 55 − 95 − 30 = 245",
      },
    ],
  },
  {
    id: 4,
    title: "Gordon Growth Model",
    topic: "DDM",
    question:
      "Expected dividend next year D₁ = $3.50, required return = 11%, constant growth rate = 5%. Calculate intrinsic value using the Gordon growth model.",
    answer: "$58.33",
    principle:
      "Under constant growth, price equals next dividend capitalized at (r − g).",
    steps: [
      {
        text: "GGM identity:",
        formula: "P₀ = D₁ / (r_e − g)",
      },
      {
        text: "Substitute:",
        formula: "P₀ = 3.50 / (0.11 − 0.05) = 3.50 / 0.06 = 58.333…",
      },
      {
        text: "Sanity check:",
        formula: "Div yield = 3.50/58.33 ≈ 6%; + g 5% = 11% = r_e",
      },
    ],
  },
  {
    id: 5,
    title: "Justified Leading P/E",
    topic: "Multiples",
    question:
      "Current book value per share = $28. Expected EPS next year = $4.20. ROE = 15%, required return = 11%, growth rate = 6%. Calculate the justified leading P/E ratio.",
    answer: "12.0×",
    principle:
      "Justified leading P/E = payout / (r − g). Retention follows from sustainable growth: b = g / ROE.",
    steps: [
      {
        text: "Confirm ROE from data:",
        formula: "EPS₁ / BV₀ = 4.20 / 28 = 15% = ROE",
      },
      {
        text: "Retention from g = ROE × b:",
        formula: "b = 0.06 / 0.15 = 0.40 → payout = 0.60",
      },
      {
        text: "Justified leading P/E:",
        formula: "P₀/E₁ = (1−b)/(r−g) = 0.60 / (0.11−0.06) = 0.60/0.05 = 12.0",
      },
    ],
  },
  {
    id: 6,
    title: "Residual Income",
    topic: "Residual Income",
    question:
      "Net income = $240 million, Beginning book value of equity = $1,800 million, Cost of equity = 10%. Calculate residual income for the year.",
    answer: "$60 million",
    principle:
      "Residual income is NI minus the equity charge on beginning book value.",
    steps: [
      {
        text: "Equity charge:",
        formula: "r_e × BV₀ = 0.10 × 1,800 = 180",
      },
      {
        text: "RI identity:",
        formula: "RI = NI − r_e × BV₀ = 240 − 180 = 60",
      },
    ],
  },
  {
    id: 7,
    title: "RI Valuation (2-Year Horizon)",
    topic: "Residual Income",
    question:
      "Current book value = $45 per share. Expected residual income in Year 1 = $3.20, Year 2 = $3.60. Cost of equity = 9%. Calculate intrinsic value (ignore terminal value beyond Year 2).",
    answer: "$50.97",
    principle:
      "V₀ = BV₀ + PV of expected residual income.",
    steps: [
      {
        text: "RI valuation identity:",
        formula: "V₀ = BV₀ + RI₁/(1+r) + RI₂/(1+r)²",
      },
      {
        text: "Discount RI:",
        formula: "3.20/1.09 + 3.60/1.09² = 2.9358 + 3.0305 = 5.9663",
      },
      {
        text: "Add book value:",
        formula: "V₀ = 45 + 5.9663 = 50.97",
      },
    ],
  },
  {
    id: 8,
    title: "FCFF Terminal Value (Gordon)",
    topic: "FCFF",
    question:
      "A firm’s FCFF in Year 5 = $180 million. WACC = 9%, perpetual growth rate = 4%. Calculate the terminal value at the end of Year 5 using the Gordon model.",
    answer: "$3,744 million",
    principle:
      "Terminal value at t=n capitalizes the next period’s FCFF growing at g forever: TV_n = FCFF_n(1+g)/(WACC−g).",
    steps: [
      {
        text: "Gordon terminal identity:",
        formula: "TV₅ = FCFF₅(1+g) / (WACC − g)",
      },
      {
        text: "Substitute:",
        formula: "TV₅ = 180 × 1.04 / (0.09 − 0.04) = 187.2 / 0.05 = 3,744",
      },
      {
        text: "Sanity:",
        formula: "g = 4% < WACC = 9% → defined and finite",
      },
    ],
  },
  {
    id: 9,
    title: "Justified Leading P/E from Payout",
    topic: "Multiples",
    question:
      "Expected EPS₁ = $5.20, payout ratio = 40%, required return = 10%, growth rate = 5%. Calculate the justified leading P/E ratio.",
    answer: "8.0×",
    principle:
      "Leading P/E equals the payout ratio capitalized at (r − g).",
    steps: [
      {
        text: "Identity:",
        formula: "P₀/E₁ = (1−b) / (r_e − g)",
      },
      {
        text: "Substitute:",
        formula: "P₀/E₁ = 0.40 / (0.10 − 0.05) = 0.40 / 0.05 = 8.0",
      },
      {
        text: "Implied price check:",
        formula: "P₀ = 8.0 × 5.20 = 41.60; D₁ = 0.40×5.20 = 2.08; 2.08/0.05 = 41.60",
      },
    ],
  },
  {
    id: 10,
    title: "FCFF and FCFE Together",
    topic: "Free Cash Flow",
    question:
      "Net income = $320 million, NCC = $40 million, Interest = $25 million (tax rate 30%), FCInv = $110 million, WCInv = $35 million, Net borrowing = $50 million. Calculate both FCFF and FCFE.",
    answer: "FCFF $232.5m; FCFE $265m",
    principle:
      "Compute FCFF (add back after-tax interest) and FCFE (add net borrowing); they link by FCFE = FCFF − Int(1−t) + Net Borrowing.",
    steps: [
      {
        text: "After-tax interest:",
        formula: "Int(1−t) = 25 × 0.70 = 17.5",
      },
      {
        text: "FCFF:",
        formula: "320 + 40 + 17.5 − 110 − 35 = 232.5",
      },
      {
        text: "FCFE:",
        formula: "320 + 40 − 110 − 35 + 50 = 265",
      },
      {
        text: "Link check:",
        formula: "232.5 − 17.5 + 50 = 265 ✓",
      },
    ],
  },
  {
    id: 11,
    title: "Analyst Valuation Error",
    topic: "Intrinsic Value",
    question:
      "A stock’s market price is $68. Analyst’s estimated intrinsic value is $82. Actual intrinsic value is believed to be $75. Calculate the analyst’s valuation error.",
    answer: "+$7 (overestimate)",
    principle:
      "Analyst error is the gap between the analyst’s IV and true IV — separate from market mispricing.",
    steps: [
      {
        text: "Error identity:",
        formula: "Analyst error = IV_analyst − IV_actual",
      },
      {
        text: "Substitute:",
        formula: "82 − 75 = +7",
      },
      {
        text: "Full perceived mispricing for context:",
        formula: "IV_a − P = 82 − 68 = 14 = (75−68) + (82−75) = 7 + 7",
      },
    ],
  },
  {
    id: 12,
    title: "FCFF from EBITDA",
    topic: "FCFF",
    question:
      "EBITDA = $650 million, Tax rate = 28%, Depreciation = $70 million, FCInv = $120 million, WCInv = $45 million. Calculate FCFF.",
    answer: "$322.6 million",
    principle:
      "Convert EBITDA to EBIT, then apply the FCFF-from-EBIT identity. EBITDA alone is not FCFF.",
    steps: [
      {
        text: "EBIT = EBITDA − Dep:",
        formula: "EBIT = 650 − 70 = 580",
      },
      {
        text: "FCFF identity:",
        formula: "FCFF = EBIT(1−t) + Dep − FCInv − WCInv",
      },
      {
        text: "Substitute:",
        formula: "FCFF = 580×0.72 + 70 − 120 − 45 = 417.6 + 70 − 165 = 322.6",
      },
    ],
  },
  {
    id: 13,
    title: "Gordon from D₀",
    topic: "DDM",
    question:
      "D₀ = $2.80, expected growth = 6%, required return = 12%. Calculate the current intrinsic value using the Gordon model.",
    answer: "$49.47",
    principle:
      "First grow D₀ to D₁, then capitalize at (r − g).",
    steps: [
      {
        text: "Next dividend:",
        formula: "D₁ = 2.80 × 1.06 = 2.968",
      },
      {
        text: "GGM:",
        formula: "P₀ = 2.968 / (0.12 − 0.06) = 2.968 / 0.06 = 49.466… ≈ 49.47",
      },
    ],
  },
  {
    id: 14,
    title: "Residual Income (Large Firm)",
    topic: "Residual Income",
    question:
      "Beginning BV = $1,200 million, NI = $210 million, Cost of equity = 9%. Calculate residual income.",
    answer: "$102 million",
    principle:
      "RI = earnings above the required return on beginning equity book value.",
    steps: [
      {
        text: "Equity charge:",
        formula: "0.09 × 1,200 = 108",
      },
      {
        text: "RI:",
        formula: "210 − 108 = 102",
      },
    ],
  },
  {
    id: 15,
    title: "Implied r from Trailing P/E",
    topic: "Multiples",
    question:
      "Justified trailing P/E = 14.5×. Expected growth = 5% and payout ratio = 35%. Calculate the implied required return.",
    answer: "7.53%",
    principle:
      "Trailing P/E = (1−b)(1+g)/(r−g). Invert to solve for r.",
    steps: [
      {
        text: "Trailing P/E identity:",
        formula: "P₀/E₀ = (1−b)(1+g)/(r−g) = 14.5",
      },
      {
        text: "Numerator:",
        formula: "(1−b)(1+g) = 0.35 × 1.05 = 0.3675",
      },
      {
        text: "Solve for (r−g):",
        formula: "r − 0.05 = 0.3675 / 14.5 = 0.025345",
      },
      {
        text: "Implied r:",
        formula: "r = 0.05 + 0.025345 = 0.075345 ≈ 7.53%",
      },
    ],
  },
  {
    id: 16,
    title: "Multistage FCFF Terminal PV",
    topic: "FCFF",
    question:
      "FCFF Year 1 = $95m, Year 2 = $110m, Year 3 = $125m. WACC = 8.5%, g = 4%. Calculate terminal value at end of Year 3 and the present value of that terminal value.",
    answer: "TV₃ = $2,888.89m; PV(TV) = $2,261.73m",
    principle:
      "TV at t=3 uses Year-4 FCFF = FCFF₃(1+g). Discount TV₃ back three years at WACC.",
    steps: [
      {
        text: "Terminal value at t=3:",
        formula: "TV₃ = 125 × 1.04 / (0.085 − 0.04) = 130 / 0.045 = 2,888.89",
      },
      {
        text: "Discount factor:",
        formula: "(1.085)³ = 1.277289",
      },
      {
        text: "PV of terminal value:",
        formula: "PV = 2,888.89 / 1.277289 ≈ 2,261.73",
      },
    ],
  },
  {
    id: 17,
    title: "Sum-of-the-Parts with Discount",
    topic: "SOTP",
    question:
      "A company has three segments with estimated values of $420m, $310m, and $180m. The market applies a 12% conglomerate discount. Calculate the sum-of-the-parts value after discount.",
    answer: "$800.8 million",
    principle:
      "Sum segment values, then apply the conglomerate discount to reflect diversified-firm friction.",
    steps: [
      {
        text: "Gross SOTP:",
        formula: "420 + 310 + 180 = 910",
      },
      {
        text: "Apply 12% discount:",
        formula: "910 × (1 − 0.12) = 910 × 0.88 = 800.8",
      },
    ],
  },
  {
    id: 18,
    title: "FCFE with Depreciation",
    topic: "FCFE",
    question:
      "Net income = $150 million, FCInv = $65 million, WCInv = $18 million, Net borrowing = $22 million, Depreciation = $30 million. Calculate FCFE.",
    answer: "$119 million",
    principle:
      "Depreciation is a non-cash charge added back in the FCFE-from-NI identity.",
    steps: [
      {
        text: "Identity:",
        formula: "FCFE = NI + Dep − FCInv − WCInv + Net Borrowing",
      },
      {
        text: "Substitute:",
        formula: "FCFE = 150 + 30 − 65 − 18 + 22 = 119",
      },
    ],
  },
  {
    id: 19,
    title: "Justified P/E with Sustainable g",
    topic: "Multiples",
    question:
      "Expected EPS₁ = $6.00, retention ratio = 55%, ROE = 14%, required return = 10%. Calculate justified leading P/E.",
    answer: "19.57×",
    principle:
      "First compute sustainable g = ROE × b, then apply justified leading P/E = payout/(r−g).",
    steps: [
      {
        text: "Sustainable growth:",
        formula: "g = ROE × b = 0.14 × 0.55 = 0.077 (7.7%)",
      },
      {
        text: "Payout:",
        formula: "1 − b = 0.45",
      },
      {
        text: "Leading P/E:",
        formula: "P₀/E₁ = 0.45 / (0.10 − 0.077) = 0.45 / 0.023 = 19.565 ≈ 19.57",
      },
    ],
  },
  {
    id: 20,
    title: "RI Valuation Two Periods",
    topic: "Residual Income",
    question:
      "Current BV₀ = $32. RI₁ = $2.80, RI₂ = $3.10. Cost of equity = 10%. Calculate intrinsic value (ignore terminal RI after Year 2).",
    answer: "$37.11",
    principle:
      "Equity value = book value plus discounted residual income.",
    steps: [
      {
        text: "Identity:",
        formula: "V₀ = 32 + 2.80/1.10 + 3.10/1.10²",
      },
      {
        text: "Compute:",
        formula: "2.5455 + 2.5620 = 5.1074",
      },
      {
        text: "Value:",
        formula: "V₀ = 32 + 5.1074 = 37.11",
      },
    ],
  },
  {
    id: 21,
    title: "Firm Value from FCFF₁ (Gordon)",
    topic: "FCFF",
    question:
      "FCFF next year = $275 million, WACC = 8%, perpetual growth = 3.5%. Calculate firm (enterprise) value using the Gordon growth model.",
    answer: "$6,111.11 million",
    principle:
      "Stable FCFF growing at g forever: Firm value = FCFF₁ / (WACC − g).",
    steps: [
      {
        text: "Identity:",
        formula: "V_firm = FCFF₁ / (WACC − g)",
      },
      {
        text: "Substitute:",
        formula: "V = 275 / (0.08 − 0.035) = 275 / 0.045 = 6,111.11",
      },
    ],
  },
  {
    id: 22,
    title: "FCFF from EBIT (Interest Distractor)",
    topic: "FCFF",
    question:
      "A firm reports EBIT = $380m, Interest = $40m, Tax rate = 25%. Depreciation = $60m, FCInv = $85m, WCInv = $25m. Calculate FCFF.",
    answer: "$235 million",
    principle:
      "When starting from EBIT, do not subtract interest — FCFF is before financing. Interest is a distractor.",
    steps: [
      {
        text: "Use EBIT identity (ignore interest):",
        formula: "FCFF = EBIT(1−t) + Dep − FCInv − WCInv",
      },
      {
        text: "After-tax EBIT:",
        formula: "380 × 0.75 = 285",
      },
      {
        text: "FCFF:",
        formula: "285 + 60 − 85 − 25 = 235",
      },
    ],
  },
  {
    id: 23,
    title: "Gordon Intrinsic Value",
    topic: "DDM",
    question:
      "D₁ = $4.20, g = 4.5%, r_e = 10.5%. Calculate intrinsic value.",
    answer: "$70.00",
    principle:
      "P₀ = D₁ / (r_e − g).",
    steps: [
      {
        text: "Denominator:",
        formula: "r_e − g = 0.105 − 0.045 = 0.060",
      },
      {
        text: "Value:",
        formula: "P₀ = 4.20 / 0.060 = 70.00",
      },
    ],
  },
  {
    id: 24,
    title: "Implied g from Justified P/B",
    topic: "Multiples",
    question:
      "Justified P/B = 2.1×. ROE = 13% and required return = 9%. Calculate the implied growth rate using the justified P/B formula.",
    answer: "5.36%",
    principle:
      "Justified P/B = (ROE − g)/(r − g). Solve for g.",
    steps: [
      {
        text: "Identity:",
        formula: "(ROE − g)/(r − g) = 2.1",
      },
      {
        text: "Cross-multiply:",
        formula: "0.13 − g = 2.1(0.09 − g) = 0.189 − 2.1g",
      },
      {
        text: "Collect terms:",
        formula: "2.1g − g = 0.189 − 0.13 → 1.1g = 0.059",
      },
      {
        text: "Implied g:",
        formula: "g = 0.059 / 1.1 = 0.053636 ≈ 5.36%",
      },
    ],
  },
  {
    id: 25,
    title: "Percentage Perceived Mispricing",
    topic: "Intrinsic Value",
    question:
      "Market price = $95. Analyst estimates intrinsic value = $112. Calculate the percentage mispricing according to the analyst.",
    answer: "17.89% undervalued",
    principle:
      "Percentage perceived mispricing is usually expressed relative to market price: (IV − P) / P.",
    steps: [
      {
        text: "Dollar mispricing:",
        formula: "112 − 95 = 17",
      },
      {
        text: "Percent of price:",
        formula: "17 / 95 = 0.17895 ≈ 17.89% undervalued",
      },
    ],
  },
  {
    id: 26,
    title: "FCFF with Given Int(1−t)",
    topic: "FCFF",
    question:
      "NI = $88m, NCC = $15m, Int(1−t) = $12m, FCInv = $38m, WCInv = $9m. Calculate FCFF.",
    answer: "$68 million",
    principle:
      "When Int(1−t) is given directly, plug into the FCFF-from-NI identity.",
    steps: [
      {
        text: "Identity:",
        formula: "FCFF = NI + NCC + Int(1−t) − FCInv − WCInv",
      },
      {
        text: "Substitute:",
        formula: "FCFF = 88 + 15 + 12 − 38 − 9 = 68",
      },
    ],
  },
  {
    id: 27,
    title: "Gordon Firm Value from FCFF₁",
    topic: "FCFF",
    question:
      "A company’s FCFF next year is expected to be $140 million. WACC = 9.5%, long-term growth = 4%. Calculate the firm value.",
    answer: "$2,545.45 million",
    principle:
      "V_firm = FCFF₁ / (WACC − g).",
    steps: [
      {
        text: "Denominator:",
        formula: "0.095 − 0.040 = 0.055",
      },
      {
        text: "Firm value:",
        formula: "140 / 0.055 = 2,545.45",
      },
    ],
  },
  {
    id: 28,
    title: "Justified Trailing P/E",
    topic: "Multiples",
    question:
      "Expected EPS₁ = $3.80, payout = 45%, r_e = 11%, g = 6%. Calculate justified trailing P/E.",
    answer: "9.54×",
    principle:
      "Trailing P/E = (1−b)(1+g)/(r−g). EPS₁ supports a price cross-check via the leading multiple.",
    steps: [
      {
        text: "Trailing P/E identity:",
        formula: "P₀/E₀ = (1−b)(1+g)/(r−g)",
      },
      {
        text: "Substitute:",
        formula: "P₀/E₀ = 0.45 × 1.06 / (0.11 − 0.06) = 0.477 / 0.05 = 9.54",
      },
      {
        text: "Price check via leading:",
        formula: "P₀/E₁ = 0.45/0.05 = 9; P₀ = 9×3.80 = 34.20; E₀ = 3.80/1.06 ≈ 3.585; 34.20/3.585 = 9.54",
      },
    ],
  },
  {
    id: 29,
    title: "Three-Year RI Valuation",
    topic: "Residual Income",
    question:
      "BV₀ = $50, RI₁ = $4.50, RI₂ = $5.00, RI₃ = $5.40. Cost of equity = 9%. Calculate the value of equity (no terminal value after Year 3).",
    answer: "$62.51",
    principle:
      "V₀ = BV₀ + Σ PV of RI over the explicit horizon.",
    steps: [
      {
        text: "Discount factors:",
        formula: "1.09, 1.09² = 1.1881, 1.09³ = 1.295029",
      },
      {
        text: "PV of RI:",
        formula: "4.50/1.09 + 5.00/1.1881 + 5.40/1.295029 = 4.1284 + 4.2084 + 4.1698 = 12.5066",
      },
      {
        text: "Equity value:",
        formula: "V₀ = 50 + 12.5066 = 62.51",
      },
    ],
  },
  {
    id: 30,
    title: "Equity from FCFF Enterprise Value",
    topic: "FCFF",
    question:
      "Enterprise value from the FCFF model = $220m. FCFE this year = $145m (cash flow, not a valuation). Net debt = $180m. Calculate equity value using the FCFF approach (no non-operating assets).",
    answer: "$40 million",
    principle:
      "Under the FCFF approach, Equity = Enterprise value − Net debt. Do not confuse a single-period FCFE cash flow with equity value.",
    steps: [
      {
        text: "FCFF bridge to equity:",
        formula: "Equity = EV − Net debt",
      },
      {
        text: "Substitute (EV from FCFF model = 220):",
        formula: "Equity = 220 − 180 = 40",
      },
      {
        text: "Trap:",
        formula: "FCFE = 145 is a cash-flow amount, not PV(FCFE); do not report 145 as equity value",
      },
    ],
  },
];
