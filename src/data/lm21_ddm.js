// LM 21 – Discounted Dividend Valuation (DDM)
// CFA Level 2 Equity Investments (2026)
// Source: CFA Institute curriculum; cross-referenced with AnalystPrep, PrepNuggets, 300Hours.

export const LM21 = {
  id: 21,
  topic: 5,
  topicName: "Equity Valuation",
  title: "Discounted Dividend Valuation (DDM)",
  subtitle: "Gordon, multistage, H-model, PVGO, and implied growth",
  estimatedTime: "3–4 hours",
  weight: "10–15% of exam (Equity) / ~1.5% of total",

  // ----- LEARNING OUTCOMES -----
  learningOutcomes: [
    "Compare the DDM, FCFF, FCFE, and residual income models, and identify the model most appropriate for a given company.",
    "Calculate and interpret the value of a common stock using the DDM for single- and multiple-period holding periods.",
    "Calculate the value of a common stock using the Gordon growth model and identify the assumptions underlying the model.",
    "Calculate the value of a non-callable, non-convertible, fixed-rate perpetual preferred stock.",
    "Calculate and interpret the implied growth rate of dividends using the Gordon growth model and the present market price.",
    "Calculate and interpret the justified leading and trailing P/E ratios using the Gordon growth model.",
    "Calculate and interpret the value of a common stock using the two-stage DDM, the H-model, and the three-stage DDM.",
    "Explain the use of spreadsheet modelling in the DDM, and explain the rationale for using the H-model and other multistage DDMs.",
    "Calculate and interpret the present value of growth opportunities (PVGO) and the components of a stock's required rate of return (dividend yield and capital gains yield).",
    "Explain the use of the DDM to value a broad equity index.",
  ],

  // ----- KEY TERMS -----
  keyTerms: [
    { term: "Dividend Discount Model (DDM)", def: "Valuation model in which the value of a share equals the present value of all expected future dividends." },
    { term: "Gordon Growth Model (GGM)", def: "Single-stage DDM that assumes dividends grow at a constant rate g forever: V₀ = D₁/(r − g)." },
    { term: "Sustainable Growth Rate (g)", def: "g = ROE × b, where b = retention ratio = (1 − payout). The rate at which earnings and dividends can grow indefinitely while maintaining capital structure." },
    { term: "Required Rate of Return (r)", def: "Discount rate used in the DDM. Can be derived from CAPM or solved as the IRR of the model's expected cash flows." },
    { term: "Two-Stage DDM", def: "Dividends grow at an extraordinary rate gₛ for n years, then at a stable rate gₗ in perpetuity." },
    { term: "H-Model", def: "Two-stage DDM variant in which the initial growth rate declines linearly from gₛ to gₗ over 2H years. V₀ = [D₀(1+gₗ) + D₀·H·(gₛ − gₗ)] / (r − gₗ)." },
    { term: "Three-Stage DDM", def: "Explicit high-growth stage, transition stage (linear decline), and stable growth stage." },
    { term: "Present Value of Growth Opportunities (PVGO)", def: "Component of share value attributable to future investment opportunities: PVGO = V₀ − E₁/r." },
    { term: "Justified Leading P/E", def: "(1 − b)/(r − g) — based on next year's earnings E₁." },
    { term: "Justified Trailing P/E", def: "(1 − b)(1 + g)/(r − g) — based on current earnings E₀." },
    { term: "Dividend Yield", def: "D₁/P₀ — the income component of total return." },
    { term: "Capital Gains Yield", def: "Expected price appreciation as a % of current price; in GGM equals g, so total return = D₁/P₀ + g = r." },
  ],

  // ----- NOTES SECTIONS -----
  sections: [
    {
      id: "intro",
      title: "1. Why DDM? The Foundation of Equity Valuation",
      body: `The **Dividend Discount Model** says: a share is worth the present value of all future dividends the investor expects to receive.

V₀ = Σₜ₌₁^∞ Dₜ / (1 + r)ᵗ

Two practical realities force us to model the future:
- We rarely hold a stock forever; we have a *holding period* (single- or multi-period).
- The further out we forecast, the more uncertain we are — so we usually divide a company's life into stages of distinct growth.

**When is DDM appropriate?**
- The company pays dividends, *or*
- Dividends are predictable proxies for the cash the shareholder would otherwise receive (e.g., share repurchases can be modeled as substitute dividends).
- **NOT appropriate for:** non-dividend-paying growth firms (use FCFF/FCFE), firms with unstable dividends, or firms where dividends are not under management control.`,
    },

    {
      id: "ggm",
      title: "2. The Gordon Growth Model (GGM)",
      body: `The simplest DDM assumes dividends grow at a *constant* rate g forever.

**Formula:**
V₀ = D₁ / (r − g)     =    D₀(1 + g) / (r − g)

**Key rearranged forms (memorize these — exam favorites):**
- r = D₁/P₀ + g           (solve for required return)
- g = r − D₁/P₀           (implied growth rate)
- P₀ = E₁ × (1 − b)/(r − g)  (where b = retention, 1 − b = payout)

**The five GGM assumptions (tested every year):**
1. Dividends grow at a constant rate g in perpetuity.
2. The growth rate g is less than the required return r (else V₀ → ∞).
3. The growth rate is sustainable — i.e., the firm maintains a constant payout ratio and constant return on equity (ROE).
4. The discount rate r is constant.
5. The model is for equity in a firm with a constant business risk and financial risk.

**Sanity checks:**
- A higher payout (→ higher D₁) → higher V₀.
- A higher g → ambiguous effect on V₀. The sensitivity is ∂V/∂g = D₁/(r − g)² which is always positive (so g is positively related to V₀) — *provided* the firm can sustain g (i.e., it has the ROE to back it up).
- When g → r, V₀ → ∞. This is the *no-growth boundary*: if the firm earns exactly its cost of equity, no growth adds value.`,
      formula: "V₀ = D₁ / (r − g)",
    },

    {
      id: "sgr",
      title: "3. Sustainable Growth Rate",
      body: `If the firm reinvests a fraction b of earnings and earns ROE on those reinvested funds, earnings and dividends can grow at:

**g = ROE × b = ROE × (1 − payout ratio)**

**Example:** ROE = 15%, payout = 40% → b = 0.60 → g = 0.15 × 0.60 = 9%.

**Key point:** g is *sustainable* because it is consistent with the firm continuing to finance itself the same way. If the firm tries to grow faster than g, it must do one of: (a) issue new equity, (b) increase leverage, or (c) cut dividends — and these all change ROE or b.

**Internal vs. sustainable growth rate (often confused — and tested):**
- *Internal growth rate* uses beginning-of-period equity and assumes **no new external financing**: g_int = (ROA × b) / (1 − ROA × b).
- *Sustainable growth rate* (the one you use in DDM) is the one above: g = ROE × b.`,
      formula: "g = ROE × b",
    },

    {
      id: "preferred",
      title: "4. Preferred Stock (a DDM shortcut)",
      body: `A **non-callable, non-convertible, fixed-rate perpetual preferred stock** pays a fixed dividend forever. Just take D₁ = required annual dividend and use:

V₀ = D / r

E.g., a 6% $100 par preferred with r = 9%:
V₀ = $6.00 / 0.09 = $66.67

If the preferred is **callable**, the analyst must use option-adjusted reasoning (covered in Derivatives).`,
      formula: "V₀ = D / r",
    },

    {
      id: "holding",
      title: "5. Multi-Period Holding-Period DDM",
      body: `You plan to hold the stock for *n* years, then sell at price Pₙ:

V₀ = Σₜ₌₁^n Dₜ/(1+r)ᵗ + Pₙ/(1+r)ⁿ

This is the *general* DDM. The Gordon Growth Model is a special case where n → ∞ and D grows at g.`,
      formula: "V₀ = Σ Dₜ/(1+r)ᵗ + Pₙ/(1+r)ⁿ",
    },

    {
      id: "multistage",
      title: "6. Multistage DDMs (Two-stage, H-Model, Three-stage)",
      body: `**Why multistage?** GGM's constant growth is unrealistic for high-growth firms. The industry standard is to model:

- **Stage 1** (n years): explicit forecasts, dividends may grow at an *extraordinary* rate gₛ.
- **Stage 2**: stable, mature growth gₗ forever (often near long-run GDP growth).

**6.1 Two-Stage DDM**
V₀ = Σₜ₌₁^n D₀(1+gₛ)ᵗ / (1+r)ᵗ   +   Vₙ/(1+r)ⁿ
where Vₙ = D₀(1+gₛ)ⁿ(1+gₗ) / (r − gₗ)

**6.2 H-Model** — same idea, but gₛ *declines linearly* to gₗ over 2H years instead of being a sudden step-down:
V₀ = [D₀(1+gₗ) + D₀·H·(gₛ − gₗ)] / (r − gₗ)

The H-Model collapses the transition into a single closed-form equation. Note **H = n/2** where n = 2H is the *length* of the transition in years. The H-Model is most accurate when the transition is short (≤ 5 years) and the decline is approximately linear.

**6.3 Three-Stage DDM** — explicit high growth, then H-model transition, then stable. Most flexible, used most often in industry models.

**Choosing the right model:**
- gₛ is expected to last a short, defined period → **Two-stage**.
- Growth fades gradually from gₛ to gₗ → **H-Model**.
- Firm has high growth → stable growth, with a multi-year transition → **Three-stage**.`,
      formula: "V₀ = Σ Dₜ/(1+r)ᵗ + Vₙ/(1+r)ⁿ",
    },

    {
      id: "implied",
      title: "7. Implied Growth Rate and Implied Required Return",
      body: `If you know the market price P₀ and the next dividend D₁, you can **back out** the market's implied growth (assuming GGM holds):

g_implied = r − D₁/P₀

Similarly, with the H-Model:
r = (D₀/P₀)·[(1+gₗ) + H·(gₛ − gₗ)] + gₗ

**Why this matters:** the exam often gives you a market price and asks "is the market assuming realistic growth?" Compare g_implied to your own forecast.

If g_implied > fundamentals support → stock is **overvalued** (you'd be willing to pay less).
If g_implied < fundamentals → stock is **undervalued**.`,
      formula: "g = r − D₁/P₀",
    },

    {
      id: "pe",
      title: "8. Justified P/E Ratios from the Gordon Model",
      body: `From the GGM:

**Justified leading P/E** (P₀/E₁) = (1 − b)/(r − g)
**Justified trailing P/E** (P₀/E₀) = (1 − b)(1 + g)/(r − g)

**Exam trap:** *Trailing > Leading* whenever g > 0, because the denominator (E₀) is the *smaller* (older) earnings number. The relationship is:
Trailing / Leading = (1 + g).

**Worked micro-example:**
- b = 0.40 → payout = 0.60
- r = 0.10, g = 0.06
- Leading P/E = 0.60 / 0.04 = 15.0
- Trailing P/E = 15.0 × 1.06 = 15.9`,
      formula: "P₀/E₁ = (1 − b)/(r − g)",
    },

    {
      id: "pvgo",
      title: "9. PVGO: Decomposing Share Value",
      body: `V₀ has two parts:

V₀ = E₁/r  +  PVGO

- **E₁/r** = "no-growth value" — what the firm is worth if it distributes *all* earnings as dividends (i.e., zero growth). This is the value of *assets in place*.
- **PVGO** = value created by investing in projects whose returns exceed r. PVGO > 0 ⇔ ROE > r.

**Why this matters:** most of a growth stock's value is PVGO. The exam often asks "what % of V₀ is growth?" → answer = PVGO/V₀.

**Total return decomposition (GGM):**
Total expected return r = D₁/P₀ + g
- D₁/P₀ = dividend yield
- g = capital gains yield (expected price appreciation)

**Sanity check:** if D₁ = 0, then r = g — total return comes entirely from price appreciation. This is why non-dividend-paying growth stocks are still consistent with a discount-rate framework.`,
      formula: "V₀ = E₁/r + PVGO",
    },

    {
      id: "index",
      title: "10. Using DDM to Value an Equity Index",
      body: `You can apply the DDM to a broad index (e.g., the S&P 500). The implied growth rate of the index is the weighted average of constituent implied growths.

**Index dividend yield** is the current year's expected dividends over the index level — historically ~1.5–2% in the US.

**Implications:**
- Implied index g_implied = r − D₁/P₀. The difference between this and long-run nominal GDP growth is a useful valuation gauge.
- If implied g looks unreasonably high, the market is *overvalued* relative to macro fundamentals.`,
    },
  ],

  // ----- FORMULA SHEET -----
  formulaSheet: [
    { name: "Gordon Growth Model", formula: "V₀ = D₁ / (r − g)" },
    { name: "Sustainable growth", formula: "g = ROE × b" },
    { name: "Required return (from price)", formula: "r = D₁/P₀ + g" },
    { name: "Implied growth (from price)", formula: "g = r − D₁/P₀" },
    { name: "Preferred stock", formula: "V₀ = D/r" },
    { name: "Justified leading P/E", formula: "P₀/E₁ = (1 − b)/(r − g)" },
    { name: "Justified trailing P/E", formula: "P₀/E₀ = (1 − b)(1 + g)/(r − g)" },
    { name: "PVGO", formula: "PVGO = V₀ − E₁/r" },
    { name: "Two-stage DDM", formula: "V₀ = Σ Dₜ/(1+r)ᵗ + Vₙ/(1+r)ⁿ" },
    { name: "H-Model", formula: "V₀ = [D₀(1+gₗ) + D₀·H·(gₛ − gₗ)]/(r − gₗ)" },
    { name: "Total return decomposition", formula: "r = D₁/P₀ + g" },
  ],
};

// ============================================================================
// MCQs – CFA-style item sets (4 MCQs per vignette)
// All numbers verified.
// ============================================================================
export const LM21_ITEM_SETS = [
  // ===================== ITEM SET 1 =====================
  {
    id: "IS-21-01",
    title: "Item Set 1 — Gordon Growth & Sustainable Growth (AlphaCorp)",
    vignette: `An equity analyst at Burkhardt Capital is evaluating AlphaCorp, a mature industrial firm that has paid a regular dividend for the last 20 years. The analyst gathers the following information:

- Current annual dividend (D₀): $4.00
- Required rate of return on equity: r = 15%
- Return on equity (ROE): 15%
- Dividend payout ratio: 30%
- Current market price: $57.50

Burkhardt's investment policy states that a stock is classified as:
- *Overvalued* if the intrinsic value is more than 15% below the market price,
- *Fairly valued* if within ±15%,
- *Undervalued* if more than 15% above the market price.`,
    questions: [
      {
        id: 1,
        question: `Using the Gordon Growth Model, AlphaCorp's intrinsic value per share is closest to:`,
        options: [
          "$39.81",
          "$50.00",
          "$80.36",
          "$98.22",
        ],
        answer: 2,
        solution: `**Step 1 — Compute the sustainable growth rate g.**

Retention ratio b = 1 − payout = 1 − 0.30 = 0.70

g = ROE × b = 0.15 × 0.70 = **0.105 (10.5%)**

**Step 2 — Compute D₁.**

D₁ = D₀ × (1 + g) = $4.00 × 1.105 = **$4.42**

**Step 3 — Apply the GGM.**

V₀ = D₁ / (r − g) = $4.42 / (0.15 − 0.105) = $4.42 / 0.045 = **$98.22**

**Answer: C — $98.22**

**Sanity check:** because ROE (15%) = r (15%), the firm is earning *exactly* its cost of equity, so all value comes from assets in place + a PVGO boost from the high retention. The growth rate g is high (10.5%) because retention is high (70%), but it is not creating *extra* value (the reinvested funds earn exactly r).`,
        lo: "LO c — calculate value using the GGM",
      },

      {
        id: 2,
        question: `Based on the analyst's classification framework, AlphaCorp is best described as:`,
        options: [
          "Overvalued",
          "Fairly valued",
          "Undervalued",
          "Indeterminate from the information given",
        ],
        answer: 2,
        solution: `Comparing intrinsic value ($98.22) to market price ($57.50):

(V₀ − P₀)/P₀ = (98.22 − 57.50)/57.50 = **+70.8%**

This is well above the +15% threshold → **Undervalued (C)**.

**Answer: C — Undervalued.**

**Interpretation:** the market is pricing AlphaCorp as if it will grow much more slowly than the firm can actually sustain. The implied growth rate (Question 4) is significantly below the sustainable rate.`,
        lo: "LO e — implied growth analysis",
      },

      {
        id: 3,
        question: `If Burkhardt incorrectly uses the *payout ratio* (30%) as the retention ratio in its g calculation, the resulting intrinsic value will be:`,
        options: [
          "Lower than the correct value",
          "Higher than the correct value",
          "Equal to the correct value",
          "Undefined because r < g",
        ],
        answer: 0,
        solution: `With b = 0.30 (mistaken) vs. b = 0.70 (correct):
- Mistaken g = 0.15 × 0.30 = 0.045 (4.5%)
- Correct g = 0.15 × 0.70 = 0.105 (10.5%)

A *lower* g makes the denominator (r − g) *larger*, which makes V₀ *smaller*. So the mistaken value is **lower**.

V₀(mistaken) = $4.00 × 1.045 / (0.15 − 0.045) = $4.18 / 0.105 = **$39.81**
V₀(correct)   = $4.00 × 1.105 / (0.15 − 0.105) = $4.42 / 0.045  = **$98.22**

**Answer: A — Lower than the correct value.**

**Exam tip:** this is a common trick — many candidates confuse *payout* (share of earnings paid out) with *retention* (share kept inside the firm). The retention ratio is what multiplies ROE to give g.`,
        lo: "LO c — sensitivity to inputs",
      },

      {
        id: 4,
        question: `What is the *implied* dividend growth rate the market is using, given the current price of $66.00?`,
        options: [
          "4.5%",
          "5.7%",
          "7.5%",
          "10.5%",
        ],
        answer: 1,
        solution: `Rearranging the GGM: r = D₁/P₀ + g, so g_implied = r − D₁/P₀.

Using the full equation: V₀ = D₀(1 + g)/(r − g), solve for g given V₀ = P₀ = $57.50:

57.5 = 4(1 + g)/(0.15 − g)
57.5(0.15 − g) = 4(1 + g)
8.625 − 57.5g = 4 + 4g
4.625 = 61.5g
g = 4.625/61.5 = **0.0752 ≈ 7.5%**

**Answer: C — 7.5%**

**Interpretation:** the market is pricing AlphaCorp at a 7.5% growth rate — well below the sustainable 10.5%. This confirms the "undervalued" classification from Question 2. The market is *underestimating* the firm's reinvestment potential.`,
        lo: "LO e — implied growth rate",
      },
    ],
  },

  // ===================== ITEM SET 2 =====================
  {
    id: "IS-21-02",
    title: "Item Set 2 — H-Model (NovaPharma)",
    vignette: `Burkhardt's healthcare analyst is evaluating NovaPharma, a specialty pharmaceutical company that has just received FDA approval for a blockbuster drug. The analyst expects:

- Current annual dividend (D₀): $1.00
- Initial short-term growth rate (gₛ): 18%, declining **linearly** over the next 10 years to a long-run rate (gₗ) of 4%
- Required rate of return: 9%

The H-Model is the most appropriate multistage model here because growth is expected to fade gradually rather than collapse at a fixed date.`,
    questions: [
      {
        id: 1,
        question: `NovaPharma's intrinsic value per share using the H-Model is closest to:`,
        options: [
          "$17.86",
          "$23.40",
          "$28.50",
          "$34.80",
        ],
        answer: 3,
        solution: `**H-Model:** V₀ = [D₀(1 + gₗ) + D₀·H·(gₛ − gₗ)] / (r − gₗ)

**Step 1 — Half-life H = (2H)/2 = 10/2 = 5.**

**Step 2 — Numerator:**
D₀(1 + gₗ) + D₀·H·(gₛ − gₗ)
= $1.00 × 1.04 + $1.00 × 5 × (0.18 − 0.04)
= $1.04 + $0.70
= **$1.74**

**Step 3 — Denominator:** r − gₗ = 0.09 − 0.04 = 0.05

**Step 4 — V₀ = $1.74 / 0.05 = $34.80**

**Answer: D — $34.80.**`,
        lo: "LO c — H-Model",
      },

      {
        id: 2,
        question: `If NovaPharma's growth rate is expected to remain at 18% for the next 10 years and then drop **abruptly** to 4% (a two-stage DDM with n = 10), the intrinsic value will be:`,
        options: [
          "Lower than the H-Model value",
          "Equal to the H-Model value",
          "Higher than the H-Model value",
          "Undefined because the inputs are inconsistent",
        ],
        answer: 2,
        solution: `A two-stage DDM with a long period of *high* growth (10 years at 18%) before suddenly dropping to 4% will produce a *higher* intrinsic value than the H-Model. Why? In the H-Model, near-term growth is *lower* than 18% in years 1–10 (it averages ~11% over those years). Lower near-term growth → lower near-term dividends → lower present value.

**Quick two-stage sanity check:**
D₁..D₁₀ growing at 18%: D₁₀ = $1 × 1.18¹⁰ = $5.234
D₁₁ = D₁₀ × 1.04 = $5.443
V₁₀ = $5.443 / (0.09 − 0.04) = $108.86
PV of dividends years 1–10: Σ $1 × 1.18ᵗ / 1.09ᵗ for t=1..10 ≈ $20.13
PV of V₁₀ = $108.86 / 1.09¹⁰ = $45.92
Total V₀ ≈ **$66.05**

That's *higher* than the H-Model's $34.80.

**Answer: C — Higher than the H-Model value.**`,
        lo: "LO c — compare H-Model and two-stage",
      },

      {
        id: 3,
        question: `If the analyst uses the H-Model formula but mistakenly uses H = 10 (the full transition length) instead of H = 5, the computed value will be:`,
        options: [
          "Too low",
          "Correct",
          "Too high",
          "Undefined (division by zero)",
        ],
        answer: 2,
        solution: `The H-Model uses H = n/2 where n = 2H is the *length* of the transition in years. With a 10-year transition, H = 10/2 = **5**.

If you mistakenly use H = 10, the numerator becomes:
$1.04 + $1.00 × 10 × 0.14 = $1.04 + $1.40 = $2.44
V₀ (wrong) = $2.44 / 0.05 = $48.80

That's *higher* than the correct $34.80.

**Answer: C — Too high.**

**Exam tip:** If you ever forget whether to use H or 2H, remember: H is the *half-life* of the transition. Doubling it overstates how long growth is high → inflates value.`,
        lo: "LO c — H-Model mechanics",
      },

      {
        id: 4,
        question: `Which of the following statements most accurately describes when the H-Model is most appropriate and when it is most likely to be inaccurate?`,
        options: [
          "Best for firms with long, gradual growth transitions; least accurate when the transition period is short.",
          "Best for firms with short, abrupt transitions; least accurate when the transition period is long.",
          "Best for firms with short, gradual transitions; least accurate when the transition is long or has a strong non-linear decline.",
          "Best for firms with no-growth assumptions; least accurate when growth is positive.",
        ],
        answer: 2,
        solution: `The H-Model assumes *linear* decline in growth from gₛ to gₗ over 2H years. It is most accurate when:
- The transition is short (2H ≤ 5 years) — formula stays close to reality.
- The decline is approximately linear.

It is *least* accurate when:
- The transition is long (2H > 10 years) — actual growth rarely declines in a perfectly straight line.
- The decline is non-linear (S-curve, logistic, etc.).

**Answer: C.**`,
        lo: "LO b, h — model selection",
      },
    ],
  },

  // ===================== ITEM SET 3 =====================
  {
    id: "IS-21-03",
    title: "Item Set 3 — PVGO, Justified P/E, and Index Application (GreenEnergy & GlobalTech Index)",
    vignette: `A second-year analyst at Burkhardt is performing two analyses:

**Analysis 1 — GreenEnergy Inc. (single stock):**
- Earnings next year (E₁): $4.00
- ROE: 15%
- Retention ratio b: 0.50
- Required return r: 12.5%

**Analysis 2 — GlobalTech Index (broad equity index):**
- Current level: 4,200
- Aggregate expected dividend next year (D₁): 110 index points
- Long-run expected required return: 8%
- Long-run sustainable growth rate: 4%`,
    questions: [
      {
        id: 1,
        question: `Using the Gordon Growth Model, GreenEnergy's intrinsic value V₀ is closest to:`,
        options: [
          "$32.00",
          "$40.00",
          "$50.00",
          "$80.00",
        ],
        answer: 1,
        solution: `**Step 1 — g = ROE × b = 0.15 × 0.50 = 0.075 (7.5%)**

**Step 2 — Payout = 1 − b = 0.50, so D₁ = E₁ × payout = $4.00 × 0.50 = $2.00**

**Step 3 — V₀ = D₁ / (r − g) = $2.00 / (0.125 − 0.075) = $2.00 / 0.050 = $40.00**

**Answer: B — $40.00.**`,
        lo: "LO c — GGM with EPS / payout",
      },

      {
        id: 2,
        question: `GreenEnergy's justified **trailing** P/E (P₀/E₀) is closest to: (Hint: E₀ = E₁ / (1 + g))`,
        options: [
          "9.30",
          "10.00",
          "10.75",
          "11.00",
        ],
        answer: 2,
        solution: `**Step 1 — Leading P/E = (1 − b)/(r − g) = 0.50 / 0.05 = 10.00**

**Step 2 — E₀ = E₁ / (1 + g) = $4.00 / 1.075 = $3.7209**

**Step 3 — Trailing P/E = P₀/E₀ = $40.00 / $3.7209 = 10.75**

(Equivalently: Trailing = Leading × (1 + g) = 10.00 × 1.075 = **10.75**.)

**Answer: C — 10.75.**`,
        lo: "LO f — justified P/E",
      },

      {
        id: 3,
        question: `GreenEnergy's Present Value of Growth Opportunities (PVGO) is closest to:`,
        options: [
          "$32.00",
          "$8.00",
          "$28.00",
          "$50.00",
        ],
        answer: 1,
        solution: `**First principle:** V₀ = E₁/r + PVGO, so PVGO = V₀ − E₁/r.

**Step 1 — No-growth value of assets in place:**
E₁ / r = $4.00 / 0.125 = **$32.00**

**Step 2 — Isolate PVGO:**
PVGO = V₀ − E₁/r = $40.00 − $32.00 = **$8.00**

**Answer: B — $8.00.**

**Interpretation:** GreenEnergy's value is split 80% assets-in-place / 20% growth opportunities. The growth piece is positive because ROE (15%) > r (12.5%) — reinvested earnings create value.`,
        lo: "LO i — PVGO",
      },

      {
        id: 4,
        question: `What is the **implied** dividend growth rate of the GlobalTech index based on its current level?`,
        options: [
          "3.4%",
          "5.4%",
          "6.2%",
          "8.0%",
        ],
        answer: 1,
        solution: `**Step 1 — Index dividend yield = D₁/P₀ = 110 / 4,200 = 0.02619 (2.62%)**

**Step 2 — Implied g = r − D₁/P₀ = 0.08 − 0.02619 = 0.0538 ≈ 5.4%**

**Answer: B — 5.4%.**

**Comparison to long-run sustainable g (4%):** the market is pricing in growth of 5.4%, which is *higher* than the long-run sustainable rate. This is consistent with the market expecting near-term above-trend growth — but it also means the market is *more optimistic than the long-run average*. If you believe g should revert to 4% soon, the index is slightly overvalued.`,
        lo: "LO e, j — implied growth & index valuation",
      },
    ],
  },

  // ===================== ITEM SET 4 =====================
  {
    id: "IS-21-04",
    title: "Item Set 4 — PVGO Decomposition (Titan Company Ltd.)",
    vignette: `An equity analyst is evaluating Titan Company Ltd. to decompose its current market valuation. Titan operates with a highly efficient, asset-light franchisee model, allowing it to generate a Return on Capital Employed (ROCE) that significantly exceeds its hurdle rate. The analyst wants to determine how much of Titan's current stock price is anchored to its existing assets (assuming zero future growth) versus the market's expectation of its future value-creating investments.

The analyst compiles the following consensus data for the upcoming fiscal year:

- Current Market Price (V₀): ₹3,600
- Expected Earnings Per Share (E₁): ₹42.00
- Estimated Cost of Equity (r): 11.5%

The analyst notes that if Titan completely stopped expanding (no new stores, no scaling of adjacent brands) and instead distributed 100% of earnings as dividends forever, growth would be zero and the Gordon Growth Model would collapse to a simple earnings perpetuity.`,
    questions: [
      {
        id: 1,
        question: `Titan's no-growth value of assets in place (E₁/r) is closest to:`,
        options: [
          "₹365",
          "₹420",
          "₹3,235",
          "₹3,600",
        ],
        answer: 0,
        solution: `**First principle:** with zero growth (100% payout), value equals next year's earnings capitalized at the cost of equity — a perpetuity of E₁.

No-Growth Value = E₁ / r = 42.00 / 0.115 = **365.22 ≈ ₹365**

**Answer: A — ₹365.**

**Sanity check:** at 11.5% cost of equity, ₹42 of perpetual earnings supports only a few hundred rupees of value — far below the ₹3,600 market price.`,
        lo: "LO i — PVGO / assets in place",
      },
      {
        id: 2,
        question: `Titan's Present Value of Growth Opportunities (PVGO) is closest to:`,
        options: [
          "₹365",
          "₹3,235",
          "₹3,600",
          "₹3,965",
        ],
        answer: 1,
        solution: `**Identity:** V₀ = E₁/r + PVGO  ⇒  PVGO = V₀ − E₁/r

PVGO = 3,600 − 365.22 = **3,234.78 ≈ ₹3,235**

**Answer: B — ₹3,235.**

**Flow:** the premium above assets-in-place is the market's capitalized NPV of future high-ROCE reinvestment — not a restatement of current earnings.`,
        lo: "LO i — calculate PVGO",
      },
      {
        id: 3,
        question: `The percentage of Titan's current market price attributed strictly to growth expectations (PVGO / V₀) is closest to:`,
        options: [
          "10.15%",
          "50.00%",
          "80.00%",
          "89.85%",
        ],
        answer: 3,
        solution: `**PVGO % of price** = PVGO / V₀ = 3,234.78 / 3,600 = **0.8985 = 89.85%**

Complement check: assets-in-place share = 365.22 / 3,600 = 10.15%, and 89.85% + 10.15% = 100%.

**Answer: D — 89.85%.**

**First-principles takeaway:** nearly nine-tenths of Titan's price is a bet on continued value-creating capital deployment (ROCE ≫ r), not on today's earnings run-rate.`,
        lo: "LO i — interpret PVGO share of value",
      },
      {
        id: 4,
        question: `If Titan's ROCE were to revert toward its cost of equity (11.5%) so that future investments earn exactly r, the stock price would be expected to:`,
        options: [
          "Rise above ₹3,600 because retained earnings increase book value",
          "Remain at ₹3,600 because current EPS is unchanged",
          "Collapse toward the no-growth baseline near ₹365",
          "Fall only by the dividend yield of about 1.2%",
        ],
        answer: 2,
        solution: `**First principle:** PVGO > 0 iff reinvested capital earns more than r. If ROCE → r, incremental NPV of growth projects → 0, so PVGO → 0.

Then V₀ → E₁/r = 42 / 0.115 ≈ **₹365.22**

**Answer: C — Collapse toward the no-growth baseline near ₹365.**

**Execution risk:** with ~90% of price in PVGO, any durable deceleration in capital deployment or drop in ROCE toward 11.5% evaporates most of the market value — assets in place alone support only ~₹365.`,
        lo: "LO i — interpret PVGO / ROE vs r",
      },
    ],
  },
];

// ============================================================================
// Glassbox Math — first-principles DDM / PVGO problems
// ============================================================================
export const LM21_GLASSBOX = [
  {
    id: 1,
    title: "Gordon Growth Model — Basic Value",
    topic: "GGM",
    question:
      "A mature firm pays D₀ = $2.00. Dividends are expected to grow at 5% forever. The required return is 12%. What is the intrinsic value per share?",
    answer: "$30.00",
    principle:
      "Under constant growth, share value is next year's dividend capitalized at (r − g).",
    steps: [
      { text: "Write the GGM identity:", formula: "V₀ = D₁ / (r − g)" },
      { text: "Compute D₁ = D₀(1 + g):", formula: "D₁ = 2.00 × 1.05 = 2.10" },
      { text: "Substitute:", formula: "V₀ = 2.10 / (0.12 − 0.05) = 2.10 / 0.07 = 30.00" },
      { text: "Sanity check — total return:", formula: "Div yield 2.10/30 = 7% + g 5% = 12% = r" },
    ],
  },
  {
    id: 2,
    title: "Sustainable Growth Rate",
    topic: "Sustainable Growth",
    question:
      "ROE = 18%, dividend payout ratio = 40%. Calculate the sustainable growth rate g.",
    answer: "10.8%",
    principle:
      "Sustainable g equals the retention ratio times ROE — growth the firm can fund without changing capital structure.",
    steps: [
      { text: "Retention ratio b = 1 − payout:", formula: "b = 1 − 0.40 = 0.60" },
      { text: "Sustainable growth identity:", formula: "g = ROE × b = 0.18 × 0.60 = 0.108 = 10.8%" },
    ],
  },
  {
    id: 3,
    title: "Preferred Stock Perpetuity",
    topic: "Preferred Stock",
    question:
      "A non-callable, non-convertible preferred pays a fixed $6.00 annual dividend. The required return is 9%. What is its value?",
    answer: "$66.67",
    principle:
      "Fixed-rate perpetual preferred is a pure perpetuity: capitalize the dividend at r with g = 0.",
    steps: [
      { text: "Preferred-stock identity:", formula: "V₀ = D / r" },
      { text: "Substitute:", formula: "V₀ = 6.00 / 0.09 = 66.666… ≈ 66.67" },
    ],
  },
  {
    id: 4,
    title: "Implied Growth from Market Price",
    topic: "Implied Growth",
    question:
      "A stock trades at $50. Expected dividend next year is $2.00. Required return is 10%. What growth rate is the market implying under the GGM?",
    answer: "6.0%",
    principle:
      "Rearrange GGM: g = r − D₁/P₀. The market price embeds an implied growth assumption.",
    steps: [
      { text: "Write the implied-growth identity:", formula: "g = r − D₁/P₀" },
      { text: "Dividend yield:", formula: "D₁/P₀ = 2.00 / 50 = 0.040" },
      { text: "Implied g:", formula: "g = 0.10 − 0.040 = 0.060 = 6.0%" },
    ],
  },
  {
    id: 5,
    title: "Justified Leading and Trailing P/E",
    topic: "Justified P/E",
    question:
      "Retention ratio b = 0.40, r = 10%, g = 6%. Calculate the justified leading and trailing P/E ratios.",
    answer: "Leading 15.0× · Trailing 15.9×",
    principle:
      "Justified P/Es come from the GGM: leading uses next year's earnings; trailing = leading × (1 + g).",
    steps: [
      { text: "Payout = 1 − b:", formula: "1 − b = 0.60" },
      { text: "Leading P/E identity:", formula: "P₀/E₁ = (1 − b)/(r − g) = 0.60 / 0.04 = 15.0" },
      { text: "Trailing = Leading × (1 + g):", formula: "P₀/E₀ = 15.0 × 1.06 = 15.9" },
    ],
  },
  {
    id: 6,
    title: "H-Model Value",
    topic: "H-Model",
    question:
      "D₀ = $1.50, gₛ = 15%, gₗ = 5%, H = 5 years (transition length 2H = 10 years), r = 11%. Calculate V₀ using the H-Model.",
    answer: "$38.75",
    principle:
      "The H-Model assumes extraordinary growth declines linearly to long-run growth over 2H years; value is a single closed-form capitalization.",
    steps: [
      {
        text: "H-Model identity:",
        formula: "V₀ = [D₀(1+gₗ) + D₀·H·(gₛ − gₗ)] / (r − gₗ)",
      },
      {
        text: "Numerator — stable dividend + transition premium:",
        formula: "1.50(1.05) + 1.50×5×(0.15−0.05) = 1.575 + 0.75 = 2.325",
      },
      {
        text: "Capitalize at (r − gₗ):",
        formula: "V₀ = 2.325 / (0.11 − 0.05) = 2.325 / 0.06 = 38.75",
      },
    ],
  },
  {
    id: 7,
    title: "PVGO — GreenEnergy Mini",
    topic: "PVGO",
    question:
      "GreenEnergy trades at fair value V₀ = $40. E₁ = $4.00 and r = 12.5%. Calculate PVGO and the share of price attributable to growth.",
    answer: "PVGO $8.00 · 20% of V₀",
    principle:
      "Firm value = no-growth value of assets in place (E₁/r) plus PVGO from projects earning above r.",
    steps: [
      { text: "No-growth value:", formula: "E₁/r = 4.00 / 0.125 = 32.00" },
      { text: "Isolate PVGO:", formula: "PVGO = V₀ − E₁/r = 40 − 32 = 8.00" },
      { text: "Growth share of price:", formula: "PVGO/V₀ = 8/40 = 0.20 = 20%" },
    ],
  },
  {
    id: 8,
    title: "PVGO — Titan Company Ltd. (High-ROCE Franchise)",
    topic: "PVGO",
    question:
      "Titan Company Ltd. trades at V₀ = ₹3,600. Expected EPS next year E₁ = ₹42.00. Cost of equity r = 11.5%. Titan's asset-light franchisee model generates ROCE well above its hurdle rate. Calculate (1) the Present Value of Growth Opportunities (PVGO) and (2) the exact percentage of the current market price attributed strictly to growth expectations.",
    answer: "PVGO ₹3,234.78 · 89.85% of V₀",
    principle:
      "V₀ = E₁/r + PVGO. E₁/r is the no-growth value of assets in place (100% payout perpetuity); any premium to that baseline is the market's capitalized belief in future value-creating reinvestment (ROCE ≫ r).",
    steps: [
      {
        text: "Write the valuation identity before substituting numbers:",
        formula: "V₀ = E₁/r + PVGO",
      },
      {
        text: "Step 1 — No-growth value (assets in place). If Titan stopped expanding and paid out 100% of earnings forever, g = 0 and GGM collapses to E₁/r:",
        formula: "No-Growth Value = E₁/r = 42.00 / 0.115 = 365.22",
      },
      {
        text: "Step 2 — Isolate PVGO as the premium of market price over assets in place:",
        formula: "PVGO = V₀ − E₁/r = 3,600 − 365.22 = 3,234.78",
      },
      {
        text: "Step 3 — Growth allocation of price:",
        formula: "PVGO / V₀ = 3,234.78 / 3,600 = 0.8985 = 89.85%",
      },
      {
        text: "First-principles check — the moat dictates PVGO. Nearly 90% of Titan's price is not today's earnings run-rate but expected high-ROCE reinvestment (new stores, brand scaling). If ROCE reverted toward r = 11.5%, PVGO would evaporate and price would collapse toward ≈ ₹365.22.",
        formula: "Sanity: assets-in-place share = 365.22/3,600 = 10.15%; 89.85% + 10.15% = 100%",
      },
    ],
  },
  {
    id: 9,
    title: "Total Return Decomposition",
    topic: "Return Components",
    question:
      "A stock priced at $80 is expected to pay D₁ = $3.20. Constant growth g = 6%. Verify that dividend yield + capital gains yield equals the required return, and state r.",
    answer: "r = 10%",
    principle:
      "Under the GGM, total expected return splits into dividend yield (D₁/P₀) and capital gains yield (g).",
    steps: [
      { text: "Dividend yield:", formula: "D₁/P₀ = 3.20 / 80 = 0.040 = 4%" },
      { text: "Capital gains yield = g under GGM:", formula: "g = 6%" },
      { text: "Required return identity:", formula: "r = D₁/P₀ + g = 4% + 6% = 10%" },
    ],
  },
  {
    id: 10,
    title: "Two-Stage DDM — Terminal + Explicit",
    topic: "Two-Stage DDM",
    question:
      "D₀ = $2.00. Dividends grow at 20% for 2 years, then at 5% forever. r = 12%. Calculate V₀.",
    answer: "$38.88",
    principle:
      "Two-stage DDM: discount the high-growth dividends explicitly, then discount the Gordon terminal value at the end of the high-growth window.",
    steps: [
      { text: "High-growth dividends:", formula: "D₁ = 2.00×1.20 = 2.40; D₂ = 2.40×1.20 = 2.88" },
      {
        text: "Terminal value at t=2 (first stable dividend is D₃):",
        formula: "D₃ = 2.88×1.05 = 3.024; V₂ = 3.024/(0.12−0.05) = 43.20",
      },
      {
        text: "Present value of D₁, D₂, and V₂:",
        formula: "V₀ = 2.40/1.12 + 2.88/1.12² + 43.20/1.12² = 2.1429 + 2.2959 + 34.4388 = 38.88",
      },
    ],
  },
];
