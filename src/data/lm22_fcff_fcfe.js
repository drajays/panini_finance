// LM 22 – Free Cash Flow Valuation (FCFF / FCFE)
// CFA Level 2 Equity Investments (2026)
// Cash architecture + FCFF/FCFE with Indian equity cluster applications.

export const LM22 = {
  id: 22,
  topic: 5,
  topicName: "Equity Valuation",
  title: "Free Cash Flow Valuation (FCFF / FCFE)",
  subtitle: "Cash revenue to residual equity cash — FCFF, FCFE, and when the math breaks for banks",
  estimatedTime: "3–4 hours",
  weight: "10–15% of exam (Equity) / ~1.5% of total",

  learningOutcomes: [
    "Contrast accrual earnings with cash flows; define cash revenue, cash operating expense, WCInv, and FCInv.",
    "Calculate and interpret FCFF from CFO, from EBIT, and from net income.",
    "Calculate and interpret FCFE from FCFF, from CFO, and from net income.",
    "Explain the roles of after-tax interest and net borrowing in bridging FCFF and FCFE.",
    "Explain why FCFF/FCFE are preferred to dividends when payout differs from free cash flow.",
    "Select FCFF vs FCFE based on leverage stability and sign of FCFE.",
    "Apply cash-flow architecture by business model: asset-light, physical compounders, and financial firms.",
    "Explain why standard FCFF/FCFE break for banks/NBFCs and state the regulatory-capital FCFE proxy.",
    "Calculate firm (enterprise) value using the constant-growth FCFF model: V_firm = FCFF₁ / (WACC − g).",
    "Calculate equity value using the constant-growth FCFE model: V_equity = FCFE₁ / (r_e − g), including the bank/NBFC regulatory-capital proxy.",
    "Bridge firm value to equity value: Equity = Firm Value − MV of Debt + Cash; explain why the bridge fails for banks/NBFCs.",
    "Explain Adjusted Present Value (APV): unlevered firm value plus NPV of financing effects; identify when APV is preferred to WACC.",
  ],

  keyTerms: [
    { term: "Cash Revenue (CR)", def: "Sales adjusted for the change in accounts receivable: CR = Sales − ΔAR. Isolates cash collected from customers." },
    { term: "Cash Operating Expense (COE)", def: "Cash leaving the firm for operations: OpEx (ex-D&A) + ΔInventory − ΔAP." },
    { term: "WCInv", def: "Working capital investment = Δ non-cash current assets − Δ non-debt current liabilities. Cash tied up in day-to-day operations." },
    { term: "FCInv", def: "Fixed capital investment = CapEx − proceeds from sales of long-term assets. Cash spent on lasting productive capacity." },
    { term: "FCFF", def: "Free cash flow to the firm — cash available to all capital providers after WCInv and FCInv. Discount at WACC." },
    { term: "FCFE", def: "Free cash flow to equity — cash available to shareholders after debt service and net borrowing. Discount at r_e." },
    { term: "Net Borrowing (NetB)", def: "New debt issued − principal repaid. Positive NetB increases FCFE." },
    { term: "After-Tax Interest", def: "Int × (1 − t). The cash cost of debt after the tax shield; added back when moving from equity earnings to FCFF." },
    { term: "Bank / NBFC FCFE Proxy", def: "FCFE ≈ NI − Δ Required Regulatory Capital. Standard FCFF/FCFE treat lending growth as CapEx/WC and debt issuance as financing — inverted for financials." },
    { term: "Firm–Equity Bridge", def: "Equity Value = Firm Value − Market Value of Debt + Cash & Cash Equivalents. Equates FCFF@WACC (then subtract net debt) with FCFE@r_e when both are done consistently. Breaks for banks/NBFCs." },
    { term: "Adjusted Present Value (APV)", def: "APV = Unlevered Firm Value + NPV of Financing Effects. Values operations at the unlevered cost of equity (k_u), then adds (or subtracts) the PV of interest tax shields and distress costs. Preferred when capital structure is dynamic." },
    { term: "Unlevered Cost of Equity (k_u)", def: "Required return on assets / unlevered equity — discounts free cash flows as if the firm had no debt, isolating business risk from financial risk." },
    { term: "Interest Tax Shield", def: "Cash tax saved because interest is deductible: typically Int × t each period. In APV, discount tax shields at k_d when debt levels are predetermined." },
  ],

  sections: [
    {
      id: "accrual-vs-cash",
      title: "1. Strip Accrual Accounting — Why Cash Architecture Matters",
      body: `Accrual earnings mix **cash** and **non-cash** items (depreciation, provisions, credit sales). Valuation cares about cash that can be distributed or reinvested without impairing the franchise.

The path from top-line sales to residual equity cash:

Sales → Cash Revenue → after cash opex → after WCInv & FCInv → **FCFF** → after after-tax interest & NetB → **FCFE**

**Glassbox habit:** always state which identity you use (from NI, from EBIT, from CFO) before plugging numbers.`,
    },
    {
      id: "cash-components",
      title: "2. Core Cash Flow Components",
      body: `**Cash Revenue (CR)**
Accrual sales are recognized when earned, not when collected.

CR = Sales − Δ Accounts Receivable

- **IT services (TCS, LTIMindtree):** unbilled revenue and receivables are large — sales spikes ≠ CR until clients pay.
- **Retail (Trent, Titan):** CR ≈ Sales — cash/card at the register.

**Cash Operating Expense (COE)**
Strip D&A; adjust inventory and payables.

COE = Operating Expenses (ex-D&A) + Δ Inventory − Δ Accounts Payable

- **Pidilite, Divi's:** raw-material inventory builds raise COE; stretching payables lowers period COE.

**Working Capital Investment (WCInv)**

WCInv = Δ Non-cash current assets − Δ Non-debt current liabilities

- **Titan:** gold inventory → large positive WCInv in growth years.
- **Abbott India:** asset-light distribution can run low or **negative** WCInv (collect from distributors faster than pay the parent).

**Fixed Capital Investment (FCInv)**

FCInv = CapEx − Proceeds from sales of fixed assets

- **Trent:** moderate FCInv for Zudio/Westside stores.
- **Divi's Lab:** heavy FCInv for API reactors and plants.`,
      formula: "CR = Sales − ΔAR ·  WCInv = ΔNCCA − ΔNDCL ·  FCInv = CapEx − Asset sale proceeds",
    },
    {
      id: "debt-mechanics",
      title: "3. Debt & Capital Structure Mechanics",
      body: `**After-tax interest (cash cost of debt to the firm):**

After-tax Int = Int × (1 − t)

Interest is tax-deductible, so the firm’s net cash cost is reduced by the tax shield. When building **FCFF from NI or CFO**, add back after-tax interest because FCFF is *before* claims of debt holders.

**Net Borrowing:**

NetB = New debt issued − Principal repaid

- Positive NetB → cash in from lenders → **raises FCFE**
- Negative NetB (deleveraging) → cash out → **lowers FCFE**

Bridge identity (memorize):

FCFE = FCFF − Int(1 − t) + NetB`,
      formula: "FCFE = FCFF − Int(1−t) + NetB",
    },
    {
      id: "fcff",
      title: "4. Free Cash Flow to the Firm (FCFF)",
      body: `FCFF is cash available to **all** capital providers (debt + equity) after reinvestment to sustain/grow operations.

**From CFO (most common exam path):**
FCFF = CFO + Int(1 − t) − FCInv

**From EBIT:**
FCFF = EBIT(1 − t) + Dep − FCInv − WCInv

**From NI:**
FCFF = NI + NCC + Int(1 − t) − FCInv − WCInv

Discount FCFF at **WACC**. Equity value = EV − net debt (+ non-operating assets).

**Trap:** EBITDA ≠ FCFF — misses cash taxes, WCInv, and FCInv.`,
      formula: "FCFF = CFO + Int(1−t) − FCInv",
    },
    {
      id: "fcfe",
      title: "5. Free Cash Flow to Equity (FCFE)",
      body: `FCFE is cash left strictly for **shareholders**.

**From FCFF:**
FCFE = FCFF − Int(1 − t) + NetB

**From CFO:**
FCFE = CFO − FCInv + NetB

**From NI:**
FCFE = NI + NCC − FCInv − WCInv + NetB

Discount FCFE at **r_e**. Prefer FCFE when capital structure is stable; prefer FCFF when leverage is changing or FCFE is chronically negative for non-financial reasons.`,
      formula: "FCFE = CFO − FCInv + NetB",
    },
    {
      id: "cluster-asset-light",
      title: "6. Cluster 1 — Asset-Light Equivalence (TCS, LTIMindtree, Abbott India)",
      body: `**Math:** virtually zero debt → Int ≈ 0 and NetB ≈ 0.

**Result:** **FCFF ≈ FCFE**. Every rupee of free cash belongs to equity. FCInv is small relative to cash revenue, so valuations are highly cash-deterministic (buybacks + dividends ≈ FCFE over a cycle).

**Analyst checklist:** watch ΔAR / unbilled revenue — accrual sales can outrun CR in a boom year even if NI looks fine.`,
    },
    {
      id: "cluster-physical",
      title: "7. Cluster 2 — Physical Compounders (Titan, Trent, Pidilite, Divi's Lab)",
      body: `**Math:** growth consumes **WCInv** (inventory) and **FCInv** (stores/plants). Short-term debt or leases can create positive NetB in expansion years.

**Result:**
- **FCFF** = fundamental operating cash strength after reinvestment.
- **FCFE** fluctuates with financing: Trent issuing debt to open 100 stores spikes NetB → temporary FCFE uplift even if FCFF is unchanged.

**Glassbox habit:** always decompose FCFE = FCFF − Int(1−t) + NetB so you do not confuse financing cash with operating quality.`,
    },
    {
      id: "cluster-financials",
      title: "8. Cluster 3 — Financial Anomaly (HDFC, Kotak, Bajaj Finance, Chola, MAS)",
      body: `For banks and NBFCs, **standard FCFF/FCFE identities break**.

- Issuing debt (NetB) is acquiring **raw material** (funding), not “financing residual cash.”
- Growing the loan book looks like massive WCInv/FCInv in a corporate template → **chronically negative** reported FCFF/FCFE for healthy growers.

**Do not** DCF-value HDFC / Kotak / Bajaj off textbook FCFF.

**Regulatory-capital FCFE proxy:**

FCFE_banks ≈ NI − Δ Required Regulatory Capital

Example: Bajaj earns ₹10,000 Cr NI but must retain ₹8,000 Cr as capital against new loans → true distributable FCFE ≈ ₹2,000 Cr.

Prefer **residual income / P/B vs ROE−r** frameworks (LM 24) for financials; use NIM, RoA, leverage, and asset quality for operating diagnosis.`,
      formula: "FCFE_banks ≈ NI − Δ Required Regulatory Capital",
    },
    {
      id: "model-choice",
      title: "9. Choosing FCFF vs FCFE & Terminal Discipline",
      body: `**Use FCFF @ WACC when:** leverage changing, FCFE negative from deleveraging, or you want EV first.
**Use FCFE @ r_e when:** stable capital structure and you want equity value directly.
**Do not use either** for banks/NBFCs without the regulatory-capital adjustment.

Terminal value: g < discount rate; reinvestment (FCInv + WCInv) must support assumed g — especially for physical compounders.`,
    },
    {
      id: "gordon-fcff",
      title: "10. Firm Value — Constant-Growth FCFF (Gordon)",
      body: `When FCFF is expected to grow at a **stable** long-term rate g forever, firm (enterprise) value is:

Firm Value = FCFF₁ / (WACC − g)

where FCFF₁ = FCFF₀ × (1 + g)

**Conditions (same discipline as DDM Gordon):**
1. g < WACC (else value undefined / explodes)
2. g is economically sustainable (≤ long-run nominal economy growth for a mature firm)
3. Reinvestment in WCInv + FCInv is consistent with g
4. **Exclude banks/NBFCs** — textbook FCFF is invalid for HDFC, Kotak, Bajaj, Chola, MAS

**Equity bridge:** Equity value = Firm value − Net debt (+ non-operating cash/investments if excluded from FCFF).

**Illustrative operating-company pack (₹ Cr, representative baselines — not live filings):**

| Company | FCFF₀ | WACC | g | FCFF₁ | Firm Value |
|---|---:|---:|---:|---:|---:|
| TCS | 40,000 | 10.0% | 5.0% | 42,000 | **840,000** |
| Titan | 3,000 | 11.0% | 7.0% | 3,210 | **80,250** |
| Abbott India | 1,000 | 9.0% | 6.0% | 1,060 | **35,333** |
| Pidilite | 1,500 | 10.5% | 6.5% | 1,597.5 | **39,937.5** |
| LTIMindtree | 2,500 | 11.5% | 6.0% | 2,650 | **48,182** |

**Reading the pack:**
- **TCS:** huge FCFF₀, low WACC (zero debt / low beta) → massive firm value; mature g.
- **Titan:** WCInv (gold) keeps FCFF₀ modest vs NI; higher g and slightly higher WACC (discretionary cyclicality).
- **Abbott India:** asset-light, non-cyclical, cash-rich → very low WACC; small FCFF₀ still capitalizes richly when (WACC−g) is tight.
- **Pidilite:** pricing-power g with ongoing plant FCInv baked into FCFF₀.
- **LTIMindtree:** faster g than TCS but higher WACC (scale / concentration) → lower multiple on FCFF₁ than TCS.`,
      formula: "Firm Value = FCFF₁ / (WACC − g) ·  FCFF₁ = FCFF₀(1+g)",
    },
    {
      id: "gordon-fcfe",
      title: "11. Equity Value — Constant-Growth FCFE (Gordon)",
      body: `To value **only the shareholders' stake**, switch from FCFF to FCFE and replace WACC with the **required return on equity (r_e or K_e)**.

Equity Value = FCFE₁ / (r_e − g)

where FCFE₁ = FCFE₀ × (1 + g)

**Do not mix discount rates:** FCFE → r_e; FCFF → WACC.

**Same Gordon discipline:** g < r_e; reinvestment / NetB path must support g; for physical compounders, remember FCFE is volatile when NetB spikes.

**Illustrative equity-value pack (₹ Cr):**

**1. Divi's Laboratories (heavy CapEx)**
- FCFE₀ 1,200 · r_e 11.5% · g 6%
- FCFE₁ = 1,200 × 1.06 = 1,272
- Equity = 1,272 / (0.115 − 0.06) = 1,272 / 0.055 = **23,127**
- Story: massive FCInv for API reactors; occasional short-term debt; r_e above IT peers (FDA / physical capital risk).

**2. Trent (high-velocity retail)**
- FCFE₀ 800 · r_e 12% · g 7%
- FCFE₁ = 800 × 1.07 = 856
- Equity = 856 / (0.12 − 0.07) = 856 / 0.05 = **17,120**
- Story: Zudio rollout → FCFE swings with NetB and inventory; discretionary r_e premium.

**3. Bajaj Finance (NBFC — regulatory proxy, not textbook FCFE)**
- NI 14,000 − Δ Required Reg Capital 9,500 → **Proxy FCFE₀ = 4,500**
- r_e 13.5% · g 7.5%
- FCFE₁ = 4,500 × 1.075 = 4,837.5
- Equity = 4,837.5 / (0.135 − 0.075) = 4,837.5 / 0.06 = **80,625**
- Story: do **not** feed corporate FCFE into Gordon; capitalize capital-adjusted residual cash at r_e.`,
      formula: "Equity Value = FCFE₁ / (r_e − g) ·  FCFE₁ = FCFE₀(1+g)",
    },
    {
      id: "firm-equity-bridge",
      title: "12. The Bridge Between Firm Value and Equity Value",
      body: `If both models are specified consistently, discounting **FCFF at WACC** and then stripping capital-structure claims should match discounting **FCFE at r_e**.

**Full bridge (exam-precise):**

Equity Value = Firm Value − Market Value of Debt + Cash & Cash Equivalents

Cash belongs to equity holders but is typically **not** inside operating FCFF — so add it back after subtracting debt. (Equivalently: Equity = Firm Value − Net Debt, where Net Debt = Debt − Cash.)

**Consistency check:** V_equity(FCFE @ r_e) ≈ V_firm(FCFF @ WACC) − MV Debt + Cash

---

**Cluster 1 — Zero-debt cash machines (TCS, LTIMindtree, Abbott India)**

MV Debt ≈ 0 → Equity Value ≈ Firm Value + Cash.

Operating value flows almost entirely to shareholders. FCFF@WACC and FCFE@r_e give nearly identical equity starting points (WACC ≈ r_e when leverage is nil).

**Cluster 2 — Physical compounders (Titan, Trent, Pidilite, Divi's)**

Moderate debt / lease liabilities fund stores and plants → Firm Value **>** Equity Value by the debt claim.

Example: Trent Firm Value ₹20,000 Cr, debt+leases ₹3,000 Cr, cash ≈ 0 → Equity ≈ **₹17,000 Cr**. WACC expansions lift firm value; equity only gets the residual after debt.

**Cluster 3 — Why the equation breaks for financials (HDFC, Kotak, Bajaj, Chola, MAS)**

Deposits and wholesale borrowings **are** the debt stack — often 7×–9× equity. “Firm value” of a bank is essentially the loan book; subtract deposits and the residual equity is a thin, error-amplified slice.

A **1%** miss on bank firm value can become a **10–15%** miss on equity. Therefore: **never** value banks/NBFCs via FCFF firm value then bridge; value equity **directly** (capital-adjusted FCFE, DDM, or residual income / P/B).`,
      formula: "Equity = Firm Value − MV Debt + Cash   (= Firm Value − Net Debt)",
    },
    {
      id: "apv",
      title: "13. Adjusted Present Value (APV) — When WACC's Constant-Structure Assumption Fails",
      body: `**WACC's fatal flaw (for dynamic leverage):** a single WACC assumes the firm maintains a **constant** capital structure forever. If D/E spikes then falls (LBO paydown, project debt, lease rollout), discounting all FCFF at one WACC is mathematically inconsistent.

**APV identity:**

APV = Unlevered Firm Value + NPV of Financing Effects

**1. Unlevered Firm Value**
Value the firm as if **zero debt**: discount operating free cash flows at the **unlevered cost of equity (k_u)** — pure business risk, no financial risk mixed into the discount rate.

**2. NPV of Financing Effects**
Add (or subtract) capital-structure side effects:
- **+** PV of Interest Tax Shields (Int × t), often discounted at **k_d** when the debt schedule is fixed / predetermined
- **−** Expected costs of financial distress (probability-weighted bankruptcy / fire-sale costs)

**When to use APV:**
- Leveraged buyouts (debt paid down over 5–7 years)
- Project finance / mega-CapEx with temporary project debt
- Announced permanent shift in target leverage

**Exclusions from your basket:**
- **Never APV for TCS / Abbott India** — Debt ≈ 0 → financing effects ≈ 0 → APV = WACC path.
- **Never APV for HDFC / Bajaj / banks-NBFCs** — debt is operational raw material, not a financing side-effect.

---

**Application — Physical Compounders only**

**Divi's (mega-CapEx cycle)**
Temporary term debt for a ₹1,500 Cr API plant (e.g. Kakinada), repaid over ~4 years → D/E spikes then collapses. Glassbox: (1) NPV of plant CF at **k_u** (all-equity); (2) schedule interest tax shields over 4 years, discount at **k_d**, add to unlevered value.

**Trent (lease engine)**
Ind AS 116 / IFRS 16 capitalizes store leases as debt. Store velocity → "debt" load jumps year to year → static WACC misprices. Glassbox: unlevered retail cash margins at k_u; separately PV tax shields on implied lease interest; add as financing effect.

**Titan (acquisition debt)**
₹2,000 Cr bonds for an acquisition (e.g. CaratLane), retired over 5 years → target leverage temporarily broken. Glassbox: unlevered jewelry/watch franchise at k_u; + PV of acquisition-debt tax shields; − expected distress if gold WC traps capital.`,
      formula: "APV = V_U (CF @ k_u) + PV(Tax Shields @ k_d) − PV(Expected Distress)",
    },
  ],

  formulaSheet: [
    { name: "Cash Revenue", formula: "CR = Sales − ΔAR" },
    { name: "Cash OpEx", formula: "COE = OpEx(ex-D&A) + ΔInv − ΔAP" },
    { name: "WCInv", formula: "WCInv = Δ Non-cash CA − Δ Non-debt CL" },
    { name: "FCInv", formula: "FCInv = CapEx − Proceeds from asset sales" },
    { name: "After-tax interest", formula: "Int(1−t)" },
    { name: "Net Borrowing", formula: "NetB = Debt issued − Principal repaid" },
    { name: "FCFF from CFO", formula: "FCFF = CFO + Int(1−t) − FCInv" },
    { name: "FCFF from EBIT", formula: "FCFF = EBIT(1−t) + Dep − FCInv − WCInv" },
    { name: "FCFF from NI", formula: "FCFF = NI + NCC + Int(1−t) − FCInv − WCInv" },
    { name: "FCFE from FCFF", formula: "FCFE = FCFF − Int(1−t) + NetB" },
    { name: "FCFE from CFO", formula: "FCFE = CFO − FCInv + NetB" },
    { name: "FCFE from NI", formula: "FCFE = NI + NCC − FCInv − WCInv + NetB" },
    { name: "Bank FCFE proxy", formula: "FCFE ≈ NI − Δ Required Regulatory Capital" },
    { name: "Gordon FCFF firm value", formula: "V_firm = FCFF₁ / (WACC − g)" },
    { name: "Next-year FCFF", formula: "FCFF₁ = FCFF₀ × (1 + g)" },
    { name: "Firm–equity bridge", formula: "Equity = Firm Value − MV Debt + Cash" },
    { name: "Net-debt form", formula: "Equity = Firm Value − (Debt − Cash)" },
    { name: "Gordon FCFE equity value", formula: "V_equity = FCFE₁ / (r_e − g)" },
    { name: "Next-year FCFE", formula: "FCFE₁ = FCFE₀ × (1 + g)" },
    { name: "NBFC proxy FCFE₀", formula: "FCFE₀ ≈ NI − Δ Required Regulatory Capital" },
    { name: "APV", formula: "APV = Unlevered Firm Value + NPV(Financing Effects)" },
    { name: "APV (expanded)", formula: "APV = V_U @ k_u + PV(Int×t @ k_d) − PV(Distress)" },
    { name: "Interest tax shield (period)", formula: "Tax Shield_t = Int_t × t" },
  ],
};

export const LM22_ITEM_SETS = [
  {
    id: "IS-22-01",
    title: "Item Set 1 — Cash Architecture (Nova IT vs Pulse Retail)",
    vignette: `An analyst compares two firms in the same year (₹ millions):

**Nova IT (TCS-like):** Sales 5,000; ΔAR +400; CapEx 180; Interest 20; tax rate 25%; CFO 1,050; NetB 0.

**Pulse Retail (Trent-like):** Sales 5,000; ΔAR +20; CapEx 420; asset sales 30; Interest 60; tax rate 25%; CFO 410; Net borrowing +250 (store rollout debt).`,
    questions: [
      {
        id: 1,
        question: `Nova IT's Cash Revenue (CR) is closest to:`,
        options: ["₹5,000m", "₹4,600m", "₹5,400m", "₹4,800m"],
        answer: 1,
        solution: `**Identity:** CR = Sales − ΔAR = 5,000 − 400 = **4,600**.

Accrual sales overstate cash collections by the receivable build.

**Answer: B — ₹4,600m.**`,
        lo: "LO a — cash revenue",
      },
      {
        id: 2,
        question: `Pulse Retail's FCInv is closest to:`,
        options: ["₹420m", "₹390m", "₹450m", "₹350m"],
        answer: 1,
        solution: `**Identity:** FCInv = CapEx − asset sale proceeds = 420 − 30 = **390**.

**Answer: B — ₹390m.**`,
        lo: "LO a — FCInv",
      },
      {
        id: 3,
        question: `Nova IT's FCFF using CFO is closest to:`,
        options: ["₹885m", "₹870m", "₹1,050m", "₹930m"],
        answer: 0,
        solution: `FCFF = CFO + Int(1−t) − FCInv
Int(1−t) = 20 × 0.75 = 15
FCFF = 1,050 + 15 − 180 = **885**

**Answer: A — ₹885m.**`,
        lo: "LO b — FCFF from CFO",
      },
      {
        id: 4,
        question: `Which statement about Pulse's FCFE vs FCFF is most accurate?`,
        options: [
          "FCFE must equal FCFF because retail CR ≈ Sales",
          "Positive NetB can lift FCFE above what operating FCFF alone implies",
          "FCFE is always lower than FCFF by Int(1−t)",
          "FCFF is undefined when inventory rises",
        ],
        answer: 1,
        solution: `FCFE = FCFF − Int(1−t) + NetB. Large positive NetB for store rollout can temporarily **raise** FCFE even if FCFF is modest.

**Answer: B.**`,
        lo: "LO c, d — FCFE bridge",
      },
    ],
  },
  {
    id: "IS-22-02",
    title: "Item Set 2 — FCFF / FCFE Bridge (Cedar Industrials)",
    vignette: `Cedar Industrials (Pidilite-like chemicals) reports (₹ millions):
NI 800; NCC (Dep) 220; Interest 100; t = 30%; FCInv 350; WCInv 120; NetB 40; CFO 1,050.`,
    questions: [
      {
        id: 1,
        question: `FCFF from NI is closest to:`,
        options: ["₹620m", "₹550m", "₹690m", "₹750m"],
        answer: 0,
        solution: `FCFF = NI + NCC + Int(1−t) − FCInv − WCInv
Int(1−t) = 100 × 0.70 = 70
FCFF = 800 + 220 + 70 − 350 − 120 = **620**

**Answer: A — ₹620m.**`,
        lo: "LO b — FCFF from NI",
      },
      {
        id: 2,
        question: `Using the CFO path, FCFF is closest to:`,
        options: ["₹770m", "₹620m", "₹1,050m", "₹700m"],
        answer: 0,
        solution: `FCFF = CFO + Int(1−t) − FCInv = 1,050 + 70 − 350 = **770**

(NI-based 620 implies a different WCInv/NCC reconciliation than stated CFO — pick one complete path.)

**Answer: A — ₹770m.**`,
        lo: "LO b — FCFF from CFO",
      },
      {
        id: 3,
        question: `Using the CFO path, FCFE is closest to:`,
        options: ["₹740m", "₹590m", "₹1,010m", "₹650m"],
        answer: 0,
        solution: `FCFE = CFO − FCInv + NetB = 1,050 − 350 + 40 = **740**

Check: FCFE = FCFF − Int(1−t) + NetB = 770 − 70 + 40 = 740.

**Answer: A — ₹740m.**`,
        lo: "LO c — FCFE from CFO",
      },
      {
        id: 4,
        question: `If leverage will fall sharply next three years, the preferred model is:`,
        options: [
          "Gordon DDM at WACC",
          "FCFF discounted at WACC",
          "FCFE at WACC",
          "Trailing P/E only",
        ],
        answer: 1,
        solution: `Changing leverage → FCFE volatile. Prefer **FCFF @ WACC**, then subtract forecast net debt.

**Answer: B.**`,
        lo: "LO e, f — model choice",
      },
    ],
  },
  {
    id: "IS-22-03",
    title: "Item Set 3 — Asset-Light vs Financial Anomaly",
    vignette: `Two analyst notes:

**Note A — Abbott-like pharma distributor:** Debt ≈ 0, NetB ≈ 0, FCInv low. CFO = 900, FCInv = 80.

**Note B — Bajaj Finance-like NBFC:** NI = 10,000. Growth requires Δ regulatory capital of 8,000. Standard corporate FCFF template shows large negative FCFF because loan-book growth is treated like CapEx/WC and wholesale borrowings like NetB.`,
    questions: [
      {
        id: 1,
        question: `For Note A, FCFF vs FCFE is best described as:`,
        options: [
          "FCFF much larger than FCFE",
          "FCFF ≈ FCFE because Int and NetB ≈ 0",
          "FCFE undefined without WACC",
          "FCFF equals NI",
        ],
        answer: 1,
        solution: `Zero debt → Int ≈ 0, NetB ≈ 0 → **FCFF ≈ FCFE**.

**Answer: B.**`,
        lo: "LO g — asset-light equivalence",
      },
      {
        id: 2,
        question: `Note A's approximate FCFE (CFO path) is closest to:`,
        options: ["₹900", "₹820", "₹980", "₹80"],
        answer: 1,
        solution: `FCFE = CFO − FCInv + NetB ≈ 900 − 80 + 0 = **820**.

**Answer: B — ₹820.**`,
        lo: "LO c — FCFE from CFO",
      },
      {
        id: 3,
        question: `For Note B, true economic FCFE using the regulatory proxy is closest to:`,
        options: ["₹10,000", "₹8,000", "₹2,000", "₹18,000"],
        answer: 2,
        solution: `FCFE_banks ≈ NI − Δ Required Reg Capital = 10,000 − 8,000 = **2,000**.

**Answer: C — ₹2,000.**`,
        lo: "LO h — bank FCFE proxy",
      },
      {
        id: 4,
        question: `Which valuation approach is least appropriate for Note B?`,
        options: [
          "Residual income / justified P/B using ROE vs r_e",
          "Standard multi-stage FCFF DCF treating loan growth as FCInv",
          "Excess return models with capital adequacy constraints",
          "Dividend discount if payout approximates capital-adjusted FCFE",
        ],
        answer: 1,
        solution: `Textbook FCFF treating loan growth as corporate CapEx **breaks** for NBFCs/banks.

**Answer: B.**`,
        lo: "LO h — financial anomaly",
      },
    ],
  },
  {
    id: "IS-22-04",
    title: "Item Set 4 — WCInv & Titan-style Inventory",
    vignette: `JewelCo (Titan-like) data for the year (₹ Cr):
ΔInventory +700; ΔAR +20; ΔAP +60.
Sales 12,000; CapEx 450; no asset sales. Dep 180; Interest 90; t = 25%; NI 1,050.
Non-cash CA change = ΔAR + ΔInv; non-debt CL change = ΔAP.`,
    questions: [
      {
        id: 1,
        question: `JewelCo's WCInv is closest to:`,
        options: ["₹660 Cr", "₹760 Cr", "₹700 Cr", "₹640 Cr"],
        answer: 0,
        solution: `Δ Non-cash CA = 20 + 700 = 720
Δ Non-debt CL = 60
WCInv = 720 − 60 = **660**

Trap: ΔInv − ΔAP = 640 forgets AR.

**Answer: A — ₹660 Cr.**`,
        lo: "LO a — WCInv",
      },
      {
        id: 2,
        question: `Cash Revenue is closest to:`,
        options: ["₹12,000 Cr", "₹11,980 Cr", "₹12,020 Cr", "₹11,800 Cr"],
        answer: 1,
        solution: `CR = Sales − ΔAR = 12,000 − 20 = **11,980**.

**Answer: B.**`,
        lo: "LO a — CR",
      },
      {
        id: 3,
        question: `FCFF from NI (NCC = Dep) is closest to:`,
        options: ["₹147.5 Cr", "₹187.5 Cr", "₹120 Cr", "₹67.5 Cr"],
        answer: 1,
        solution: `Int(1−t) = 90 × 0.75 = 67.5
FCInv = 450; WCInv = 660
FCFF = 1,050 + 180 + 67.5 − 450 − 660 = **187.5**

**Answer: B — ₹187.5 Cr.**`,
        lo: "LO b — FCFF from NI",
      },
      {
        id: 4,
        question: `Compared with an Abbott-like negative-WCInv firm, JewelCo's FCFF in a growth year is most likely:`,
        options: [
          "Higher solely because jewelry has higher margins",
          "Lower because inventory WCInv absorbs cash",
          "Identical if Sales are identical",
          "Unaffected by inventory because Dep is non-cash",
        ],
        answer: 1,
        solution: `Gold inventory growth is a cash sink (positive WCInv) → **lower FCFF** vs asset-light negative-WCInv models.

**Answer: B.**`,
        lo: "LO g — physical compounders",
      },
    ],
  },
  {
    id: "IS-22-05",
    title: "Item Set 5 — Gordon FCFF Firm Value (Operating Pack)",
    vignette: `An analyst values five non-financial names with the constant-growth FCFF model (₹ Crores). Banks/NBFCs are excluded because standard FCFF is invalid for them.

| Company | FCFF₀ | WACC | g |
|---|---:|---:|---:|
| TCS | 40,000 | 10% | 5% |
| Titan | 3,000 | 11% | 7% |
| Abbott India | 1,000 | 9% | 6% |
| Pidilite | 1,500 | 10.5% | 6.5% |
| LTIMindtree | 2,500 | 11.5% | 6% |

Assume net debt is negligible for these asset-light / low-debt names unless stated.`,
    questions: [
      {
        id: 1,
        question: `TCS firm value is closest to:`,
        options: ["₹800,000 Cr", "₹840,000 Cr", "₹420,000 Cr", "₹4,00,000 Cr"],
        answer: 1,
        solution: `FCFF₁ = 40,000 × 1.05 = **42,000**
V = 42,000 / (0.10 − 0.05) = 42,000 / 0.05 = **840,000**

**Answer: B — ₹840,000 Cr.**`,
        lo: "LO i — Gordon FCFF",
      },
      {
        id: 2,
        question: `Abbott India's firm value is closest to:`,
        options: ["₹17,667 Cr", "₹35,333 Cr", "₹11,778 Cr", "₹106,000 Cr"],
        answer: 1,
        solution: `FCFF₁ = 1,000 × 1.06 = **1,060**
V = 1,060 / (0.09 − 0.06) = 1,060 / 0.03 = **35,333.33**

**Answer: B — ₹35,333 Cr.**

Tight (WACC−g) of 3% capitalizes a small FCFF into a large firm value.`,
        lo: "LO i — Gordon FCFF",
      },
      {
        id: 3,
        question: `Which pair is ranked correctly by implied FCFF₁ / (WACC−g) firm value (highest to lowest)?`,
        options: [
          "TCS > LTIMindtree > Titan > Pidilite > Abbott",
          "TCS > Titan > LTIMindtree > Pidilite > Abbott",
          "TCS > Titan > Pidilite > LTIMindtree > Abbott",
          "Titan > TCS > Abbott > Pidilite > LTIMindtree",
        ],
        answer: 1,
        solution: `Computed firm values:
TCS 840,000 · Titan 80,250 · LTIMindtree 48,182 · Pidilite 39,937.5 · Abbott 35,333

Order: **TCS > Titan > LTIMindtree > Pidilite > Abbott**

**Answer: B.**`,
        lo: "LO i — compare Gordon FCFF values",
      },
      {
        id: 4,
        question: `If an analyst incorrectly applies the same Gordon FCFF model to Bajaj Finance using a positive FCFF₀, the most accurate critique is:`,
        options: [
          "The model is fine if g < WACC",
          "Standard FCFF is invalid for NBFCs; loan growth and wholesale funding invert the corporate cash identities",
          "Only the WACC should be replaced by r_e",
          "g must equal ROE × b for NBFCs",
        ],
        answer: 1,
        solution: `Banks/NBFCs break textbook FCFF. Use capital-adjusted FCFE or residual income / P/B — not Gordon FCFF on a mis-specified corporate FCFF₀.

**Answer: B.**`,
        lo: "LO h, i — exclude financials from FCFF Gordon",
      },
    ],
  },
  {
    id: "IS-22-06",
    title: "Item Set 6 — Gordon FCFE Equity Value",
    vignette: `Three names are valued with constant-growth FCFE (₹ Crores). Discount rate is cost of equity r_e (not WACC).

**Divi's:** FCFE₀ = 1,200; r_e = 11.5%; g = 6%
**Trent:** FCFE₀ = 800; r_e = 12%; g = 7%
**Bajaj Finance:** NI = 14,000; Δ required regulatory capital = 9,500; r_e = 13.5%; g = 7.5% (use proxy FCFE₀ = NI − Δ capital)`,
    questions: [
      {
        id: 1,
        question: `Divi's implied equity value is closest to:`,
        options: ["₹21,200 Cr", "₹23,127 Cr", "₹10,626 Cr", "₹26,182 Cr"],
        answer: 1,
        solution: `FCFE₁ = 1,200 × 1.06 = **1,272**
V_e = 1,272 / (0.115 − 0.06) = 1,272 / 0.055 = **23,127.27**

**Answer: B — ₹23,127 Cr.**`,
        lo: "LO j — Gordon FCFE",
      },
      {
        id: 2,
        question: `Trent's implied equity value is closest to:`,
        options: ["₹16,000 Cr", "₹17,120 Cr", "₹11,413 Cr", "₹8,560 Cr"],
        answer: 1,
        solution: `FCFE₁ = 800 × 1.07 = **856**
V_e = 856 / (0.12 − 0.07) = 856 / 0.05 = **17,120**

**Answer: B — ₹17,120 Cr.**`,
        lo: "LO j — Gordon FCFE",
      },
      {
        id: 3,
        question: `Bajaj Finance proxy FCFE₀ and equity value are closest to:`,
        options: [
          "FCFE₀ 14,000; Equity 233,333",
          "FCFE₀ 4,500; Equity 80,625",
          "FCFE₀ 9,500; Equity 158,333",
          "FCFE₀ 4,500; Equity 60,000",
        ],
        answer: 1,
        solution: `Proxy FCFE₀ = 14,000 − 9,500 = **4,500**
FCFE₁ = 4,500 × 1.075 = **4,837.5**
V_e = 4,837.5 / (0.135 − 0.075) = 4,837.5 / 0.06 = **80,625**

**Answer: B — FCFE₀ 4,500; Equity 80,625.**`,
        lo: "LO h, j — NBFC proxy + Gordon FCFE",
      },
      {
        id: 4,
        question: `Which discount-rate pairing is correct?`,
        options: [
          "FCFE → WACC; FCFF → r_e",
          "FCFE → r_e; FCFF → WACC",
          "Both FCFE and FCFF → WACC",
          "Both FCFE and FCFF → r_e",
        ],
        answer: 1,
        solution: `Equity claim (FCFE) discounted at **r_e**. Firm claim (FCFF) discounted at **WACC**.

**Answer: B.**`,
        lo: "LO j — matching discount rates",
      },
    ],
  },
  {
    id: "IS-22-07",
    title: "Item Set 7 — Firm–Equity Bridge by Cluster",
    vignette: `An analyst reconciles FCFF and FCFE valuations with the bridge:

Equity = Firm Value − MV of Debt + Cash

**Case A (Abbott-like):** Firm Value ₹35,000 Cr; Debt ₹0; Cash ₹2,500 Cr.
**Case B (Trent-like):** Firm Value ₹20,000 Cr; Debt + leases ₹3,000 Cr; Cash ₹0.
**Case C (HDFC-like bank):** An intern computes “Firm Value” of the loan book at ₹40,00,000 Cr and subtracts deposits of ₹36,00,000 Cr to get equity. A 1% overstatement of firm value is ₹40,000 Cr — about 10% of the implied equity residual.`,
    questions: [
      {
        id: 1,
        question: `Case A equity value is closest to:`,
        options: ["₹35,000 Cr", "₹37,500 Cr", "₹32,500 Cr", "₹2,500 Cr"],
        answer: 1,
        solution: `Equity = 35,000 − 0 + 2,500 = **37,500**

Zero debt → Equity ≈ Firm Value + Cash.

**Answer: B — ₹37,500 Cr.**`,
        lo: "LO k — firm–equity bridge",
      },
      {
        id: 2,
        question: `Case B equity value is closest to:`,
        options: ["₹20,000 Cr", "₹23,000 Cr", "₹17,000 Cr", "₹3,000 Cr"],
        answer: 2,
        solution: `Equity = 20,000 − 3,000 + 0 = **17,000**

Physical compounders: firm value exceeds equity by the debt/lease claim.

**Answer: C — ₹17,000 Cr.**`,
        lo: "LO k — bridge with debt",
      },
      {
        id: 3,
        question: `For Case C, the most accurate conclusion is:`,
        options: [
          "The bridge works; always value banks via FCFF then subtract deposits",
          "Error amplification makes FCFF→equity bridges unreliable; value bank equity directly",
          "Cash should be ignored for banks",
          "WACC equals r_e for banks so the bridge is optional",
        ],
        answer: 1,
        solution: `Deposits are debt at 7×–9× equity. Tiny firm-value errors swamp equity. Value financials **directly** (proxy FCFE, DDM, RI/P/B).

**Answer: B.**`,
        lo: "LO k — bridge breaks for banks",
      },
      {
        id: 4,
        question: `For TCS / LTIMindtree / Abbott (Cluster 1), FCFF@WACC and FCFE@r_e should:`,
        options: [
          "Diverge sharply because WACC ≪ r_e",
          "Give nearly identical equity values when Debt ≈ 0 (WACC ≈ r_e)",
          "Only match if g = 0",
          "Never be used; only DDM applies",
        ],
        answer: 1,
        solution: `With Debt ≈ 0, WACC ≈ r_e and Equity ≈ Firm + Cash → both paths land on the same equity value.

**Answer: B.**`,
        lo: "LO k — zero-debt equivalence",
      },
    ],
  },
  {
    id: "IS-22-08",
    title: "Item Set 8 — APV vs WACC (Divi's CapEx Debt)",
    vignette: `Divi's funds a new API facility with predetermined term debt. Unlevered project FCFF (as if all-equity) has PV = ₹1,200 Cr when discounted at k_u = 12%. Interest tax shields over the 4-year paydown are ₹40, ₹30, ₹20, ₹10 Cr. Cost of debt k_d = 8%. Expected distress costs have PV = ₹25 Cr. Separately, an analyst notes TCS has zero debt and Bajaj Finance funds loans with wholesale borrowings.`,
    questions: [
      {
        id: 1,
        question: `PV of interest tax shields discounted at k_d is closest to:`,
        options: ["₹100.0 Cr", "₹86.0 Cr", "₹75.0 Cr", "₹92.6 Cr"],
        answer: 1,
        solution: `**Identity:** Discount predetermined tax shields at k_d.

PV = 40/1.08 + 30/1.08² + 20/1.08³ + 10/1.08⁴
  = 37.037 + 25.720 + 15.877 + 7.350
  = **85.98 ≈ 86.0**

**Answer: B — ₹86.0 Cr.**`,
        lo: "LO l — PV tax shields",
      },
      {
        id: 2,
        question: `APV of the project is closest to:`,
        options: ["₹1,200 Cr", "₹1,261 Cr", "₹1,275 Cr", "₹1,175 Cr"],
        answer: 1,
        solution: `APV = V_U + PV(Tax Shields) − PV(Distress)
    = 1,200 + 86 − 25 = **1,261**

**Answer: B — ₹1,261 Cr.**`,
        lo: "LO l — APV identity",
      },
      {
        id: 3,
        question: `Why is APV preferred to a single WACC here?`,
        options: [
          "Because k_u is always lower than WACC",
          "Debt ratio spikes then falls over 4 years — constant WACC assumption fails",
          "Tax shields must be ignored under WACC",
          "APV is required for all pharmaceutical firms",
        ],
        answer: 1,
        solution: `Temporary project debt → dynamic capital structure → **APV**. WACC needs stable target weights.

**Answer: B.**`,
        lo: "LO l — when to use APV",
      },
      {
        id: 4,
        question: `APV is least appropriate for:`,
        options: [
          "Divi's mega-CapEx with term debt paydown",
          "Trent with fluctuating capitalized leases",
          "TCS with zero interest-bearing debt",
          "Titan with temporary acquisition bonds",
        ],
        answer: 2,
        solution: `TCS: Debt ≈ 0 → financing effects ≈ 0 → APV = WACC path (redundant). Also never use APV for banks/NBFCs (debt = raw material).

**Answer: C — TCS.**`,
        lo: "LO l — APV exclusions",
      },
    ],
  },
];

export const LM22_GLASSBOX = [
  {
    id: 1,
    title: "Cash Revenue — IT Receivables Drag",
    topic: "Cash Architecture",
    question:
      "Sales = ₹5,000m. Accounts receivable rise by ₹400m. Compute Cash Revenue and interpret versus accrual sales.",
    answer: "CR = ₹4,600m",
    principle:
      "Cash revenue subtracts the increase in receivables so only collections count.",
    steps: [
      { text: "Identity:", formula: "CR = Sales − ΔAR" },
      { text: "Substitute:", formula: "CR = 5,000 − 400 = 4,600" },
      { text: "Interpretation:", formula: "₹400m of accrual sales not yet collected — CR < Sales" },
    ],
  },
  {
    id: 2,
    title: "WCInv — Inventory and Payables",
    topic: "Cash Architecture",
    question:
      "ΔInventory = +₹700 Cr, ΔAR = +₹20 Cr, ΔAP = +₹60 Cr. Non-cash CA = Inv+AR; non-debt CL = AP. Compute WCInv.",
    answer: "₹660 Cr",
    principle:
      "WCInv is cash absorbed by operating working capital: rises in CA use cash; rises in non-debt CL free cash.",
    steps: [
      { text: "Δ Non-cash CA:", formula: "700 + 20 = 720" },
      { text: "Δ Non-debt CL:", formula: "60" },
      { text: "WCInv:", formula: "720 − 60 = 660" },
    ],
  },
  {
    id: 3,
    title: "FCInv Net of Asset Sales",
    topic: "Cash Architecture",
    question: "CapEx = ₹420m. Proceeds from selling old fixtures = ₹30m. What is FCInv?",
    answer: "₹390m",
    principle: "FCInv is net cash invested in long-term assets.",
    steps: [
      { text: "Identity:", formula: "FCInv = CapEx − Proceeds from asset sales" },
      { text: "Substitute:", formula: "FCInv = 420 − 30 = 390" },
    ],
  },
  {
    id: 4,
    title: "FCFF from CFO",
    topic: "FCFF",
    question: "CFO = ₹1,050m, Interest = ₹20m, tax rate = 25%, FCInv = ₹180m. Compute FCFF.",
    answer: "₹885m",
    principle:
      "FCFF adds back after-tax interest (debt claim) and subtracts fixed capital investment.",
    steps: [
      { text: "After-tax interest:", formula: "20 × (1−0.25) = 15" },
      { text: "FCFF:", formula: "1,050 + 15 − 180 = 885" },
    ],
  },
  {
    id: 5,
    title: "FCFF from EBIT",
    topic: "FCFF",
    question: "EBIT = ₹800m, t = 30%, Dep = ₹150m, FCInv = ₹200m, WCInv = ₹100m. Compute FCFF.",
    answer: "₹410m",
    principle: "From EBIT: tax-adjust operating profit, add Dep, subtract reinvestment.",
    steps: [
      { text: "EBIT(1−t):", formula: "800 × 0.70 = 560" },
      { text: "FCFF:", formula: "560 + 150 − 200 − 100 = 410" },
    ],
  },
  {
    id: 6,
    title: "FCFF from NI",
    topic: "FCFF",
    question:
      "NI = ₹500m, NCC = ₹120m, Interest = ₹80m, t = 25%, FCInv = ₹200m, WCInv = ₹70m. Compute FCFF.",
    answer: "₹410m",
    principle:
      "From NI add back non-cash charges and after-tax interest, then subtract FCInv and WCInv.",
    steps: [
      { text: "Int(1−t):", formula: "80 × 0.75 = 60" },
      { text: "FCFF:", formula: "500 + 120 + 60 − 200 − 70 = 410" },
    ],
  },
  {
    id: 7,
    title: "FCFE Bridge from FCFF",
    topic: "FCFE",
    question: "FCFF = ₹620m, Interest = ₹100m, t = 30%, NetB = ₹40m. Compute FCFE.",
    answer: "₹590m",
    principle: "Equity cash equals firm cash minus after-tax interest plus net borrowing.",
    steps: [
      { text: "Int(1−t):", formula: "100 × 0.70 = 70" },
      { text: "FCFE:", formula: "620 − 70 + 40 = 590" },
    ],
  },
  {
    id: 8,
    title: "FCFE from CFO — Debt-Free Firm",
    topic: "FCFE",
    question: "CFO = ₹900m, FCInv = ₹80m, NetB = 0. Compute FCFE for a debt-free Abbott-like firm.",
    answer: "₹820m",
    principle: "With NetB = 0, FCFE = CFO − FCInv; also equals FCFF when Int = 0.",
    steps: [
      { text: "Identity:", formula: "FCFE = CFO − FCInv + NetB" },
      { text: "Substitute:", formula: "FCFE = 900 − 80 + 0 = 820" },
      { text: "Equivalence:", formula: "Int = 0 → FCFF = FCFE = 820" },
    ],
  },
  {
    id: 9,
    title: "Asset-Light Equivalence",
    topic: "Clusters",
    question:
      "A firm has Int = 0, NetB = 0, FCFF = ₹1,200m. What is FCFE? What does this imply for TCS-like valuation?",
    answer: "FCFE = ₹1,200m (FCFF = FCFE)",
    principle: "Zero leverage collapses firm and equity free cash flow into one number.",
    steps: [
      { text: "Bridge:", formula: "FCFE = FCFF − 0 + 0 = 1,200" },
      { text: "Implication:", formula: "Dividends + buybacks ≈ FCFE over the cycle" },
    ],
  },
  {
    id: 10,
    title: "Physical Compounder — NetB Spike",
    topic: "Clusters",
    question:
      "Trent-like retailer: FCFF = ₹300m, Int(1−t) = ₹45m, NetB = ₹250m (debt-funded stores). Compute FCFE and interpret.",
    answer: "FCFE = ₹505m — financing-inflated",
    principle: "Positive NetB can lift FCFE without improving operating FCFF.",
    steps: [
      { text: "Bridge:", formula: "FCFE = 300 − 45 + 250 = 505" },
      { text: "Interpretation:", formula: "₹250m is borrowed cash, not operating surplus" },
    ],
  },
  {
    id: 11,
    title: "Bank FCFE Regulatory Proxy",
    topic: "Financials",
    question:
      "NBFC NI = ₹10,000 Cr. Δ Required regulatory capital = ₹8,000 Cr. Compute capital-adjusted FCFE.",
    answer: "₹2,000 Cr",
    principle:
      "Distributable equity cash is earnings not absorbed by mandatory capital against loan growth.",
    steps: [
      { text: "Proxy identity:", formula: "FCFE ≈ NI − Δ Required Regulatory Capital" },
      { text: "Substitute:", formula: "10,000 − 8,000 = 2,000" },
    ],
  },
  {
    id: 12,
    title: "Why Standard FCFF Breaks for NBFCs",
    topic: "Financials",
    question:
      "An NBFC grows loans ₹50,000 Cr funded by ₹42,000 Cr new borrowings and ₹8,000 Cr retained capital. Why does textbook FCFF look deeply negative despite healthy ROE?",
    answer: "Loan growth mislabeled as CapEx/WCInv; NetB is raw material — use NI − Δ Reg Capital",
    principle:
      "For financials, debt is inventory funding and loans are the product — corporate FCFF signs flip.",
    steps: [
      { text: "Corporate lens (wrong economics):", formula: "ΔLoans treated as WCInv/FCInv → huge 'reinvestment'" },
      { text: "Funding lens:", formula: "New borrowings are NetB but economically cost of funds" },
      { text: "Correct residual for owners:", formula: "FCFE ≈ NI − Δ Required Capital" },
    ],
  },
  {
    id: 13,
    title: "Gordon FCFF — TCS Firm Value",
    topic: "Gordon FCFF",
    question:
      "TCS: FCFF₀ = ₹40,000 Cr, WACC = 10%, g = 5%. Compute FCFF₁ and firm value. (Exclude banks/NBFCs from this model.)",
    answer: "Firm Value = ₹840,000 Cr",
    principle:
      "Under constant growth, firm value capitalizes next year's FCFF at (WACC − g).",
    steps: [
      { text: "Grow current FCFF:", formula: "FCFF₁ = 40,000 × 1.05 = 42,000" },
      { text: "Gordon FCFF identity:", formula: "V_firm = FCFF₁ / (WACC − g)" },
      { text: "Substitute:", formula: "V = 42,000 / (0.10 − 0.05) = 42,000 / 0.05 = 840,000" },
      { text: "Sanity:", formula: "g < WACC; zero-debt name → WACC ≈ r_e" },
    ],
  },
  {
    id: 14,
    title: "Gordon FCFF — Titan Firm Value",
    topic: "Gordon FCFF",
    question:
      "Titan: FCFF₀ = ₹3,000 Cr (WCInv-heavy), WACC = 11%, g = 7%. Compute firm value.",
    answer: "Firm Value = ₹80,250 Cr",
    principle:
      "Gold inventory keeps FCFF₀ below NI; Gordon still uses FCFF₁ / (WACC − g) when growth is perpetual and stable.",
    steps: [
      { text: "FCFF₁:", formula: "3,000 × 1.07 = 3,210" },
      { text: "Firm value:", formula: "3,210 / (0.11 − 0.07) = 3,210 / 0.04 = 80,250" },
    ],
  },
  {
    id: 15,
    title: "Gordon FCFF — Abbott India Firm Value",
    topic: "Gordon FCFF",
    question:
      "Abbott India: FCFF₀ = ₹1,000 Cr, WACC = 9%, g = 6%. Compute firm value and note the role of (WACC − g).",
    answer: "Firm Value ≈ ₹35,333 Cr",
    principle:
      "Asset-light, non-cyclical cash compounds: a tight (WACC − g) capitalizes even a modest FCFF₁.",
    steps: [
      { text: "FCFF₁:", formula: "1,000 × 1.06 = 1,060" },
      { text: "Spread:", formula: "WACC − g = 0.09 − 0.06 = 0.03" },
      { text: "Firm value:", formula: "1,060 / 0.03 = 35,333.33 ≈ 35,333" },
    ],
  },
  {
    id: 16,
    title: "Gordon FCFF — Pidilite Firm Value",
    topic: "Gordon FCFF",
    question:
      "Pidilite: FCFF₀ = ₹1,500 Cr, WACC = 10.5%, g = 6.5%. Compute FCFF₁ and firm value.",
    answer: "Firm Value = ₹39,937.5 Cr",
    principle:
      "Pricing-power growth still requires plant FCInv — FCFF₀ is already net of that reinvestment.",
    steps: [
      { text: "FCFF₁:", formula: "1,500 × 1.065 = 1,597.5" },
      { text: "Firm value:", formula: "1,597.5 / (0.105 − 0.065) = 1,597.5 / 0.04 = 39,937.5" },
    ],
  },
  {
    id: 17,
    title: "Gordon FCFF — LTIMindtree Firm Value",
    topic: "Gordon FCFF",
    question:
      "LTIMindtree: FCFF₀ = ₹2,500 Cr, WACC = 11.5%, g = 6%. Compute firm value and compare the capitalization rate to TCS (WACC−g = 5%).",
    answer: "Firm Value ≈ ₹48,182 Cr",
    principle:
      "Faster growth than a mega-cap peer can be offset by a higher WACC (scale / concentration risk).",
    steps: [
      { text: "FCFF₁:", formula: "2,500 × 1.06 = 2,650" },
      { text: "Spread vs TCS:", formula: "WACC − g = 0.055 vs TCS 0.05" },
      { text: "Firm value:", formula: "2,650 / 0.055 = 48,181.82 ≈ 48,182" },
    ],
  },
  {
    id: 18,
    title: "Gordon FCFE — Divi's Equity Value",
    topic: "Gordon FCFE",
    question:
      "Divi's: FCFE₀ = ₹1,200 Cr, r_e = 11.5%, g = 6%. Compute FCFE₁ and equity value.",
    answer: "Equity Value ≈ ₹23,127 Cr",
    principle:
      "Equity value capitalizes next year's FCFE at (r_e − g) — never at WACC.",
    steps: [
      { text: "Grow FCFE:", formula: "FCFE₁ = 1,200 × 1.06 = 1,272" },
      { text: "Gordon FCFE identity:", formula: "V_e = FCFE₁ / (r_e − g)" },
      { text: "Substitute:", formula: "V_e = 1,272 / (0.115 − 0.06) = 1,272 / 0.055 = 23,127.27" },
    ],
  },
  {
    id: 19,
    title: "Gordon FCFE — Trent Equity Value",
    topic: "Gordon FCFE",
    question:
      "Trent: FCFE₀ = ₹800 Cr, r_e = 12%, g = 7%. Compute equity value. Note that FCFE may be volatile when NetB funds store growth.",
    answer: "Equity Value = ₹17,120 Cr",
    principle:
      "Same Gordon form; interpret FCFE₀ carefully when leverage/NetB is actively funding expansion.",
    steps: [
      { text: "FCFE₁:", formula: "800 × 1.07 = 856" },
      { text: "Equity value:", formula: "856 / (0.12 − 0.07) = 856 / 0.05 = 17,120" },
    ],
  },
  {
    id: 20,
    title: "Gordon FCFE — Bajaj Finance Regulatory Proxy",
    topic: "Gordon FCFE",
    question:
      "Bajaj Finance: NI = ₹14,000 Cr, Δ required regulatory capital = ₹9,500 Cr, r_e = 13.5%, g = 7.5%. Compute proxy FCFE₀, FCFE₁, and equity value.",
    answer: "Equity Value = ₹80,625 Cr",
    principle:
      "For NBFCs, capitalize capital-adjusted FCFE (NI − Δ required capital), not textbook corporate FCFE.",
    steps: [
      { text: "Proxy FCFE₀:", formula: "14,000 − 9,500 = 4,500" },
      { text: "FCFE₁:", formula: "4,500 × 1.075 = 4,837.5" },
      { text: "Equity value:", formula: "4,837.5 / (0.135 − 0.075) = 4,837.5 / 0.06 = 80,625" },
      { text: "Sanity:", formula: "g < r_e; do not use WACC on this equity claim" },
    ],
  },
  {
    id: 21,
    title: "Firm–Equity Bridge — Zero-Debt Cash Machine",
    topic: "Firm–Equity Bridge",
    question:
      "Abbott-like firm: Firm Value = ₹35,000 Cr, MV Debt = 0, Cash = ₹2,500 Cr. Compute equity value and state the Cluster 1 implication.",
    answer: "Equity = ₹37,500 Cr ≈ Firm + Cash",
    principle:
      "With no debt claim, equity owns the entire firm value plus surplus cash.",
    steps: [
      { text: "Bridge identity:", formula: "Equity = Firm − MV Debt + Cash" },
      { text: "Substitute:", formula: "Equity = 35,000 − 0 + 2,500 = 37,500" },
      { text: "Implication:", formula: "FCFF@WACC and FCFE@r_e nearly match (WACC ≈ r_e)" },
    ],
  },
  {
    id: 22,
    title: "Firm–Equity Bridge — Trent Physical Compounder",
    topic: "Firm–Equity Bridge",
    question:
      "Trent-like: Firm Value = ₹20,000 Cr, debt + leases = ₹3,000 Cr, Cash = 0. Compute equity value.",
    answer: "Equity = ₹17,000 Cr",
    principle:
      "Equity is the residual after subtracting interest-bearing claims (including lease debt) from firm value.",
    steps: [
      { text: "Bridge:", formula: "Equity = 20,000 − 3,000 + 0 = 17,000" },
      { text: "Interpretation:", formula: "Firm Value > Equity by the debt/lease claim" },
    ],
  },
  {
    id: 23,
    title: "Why the Bridge Breaks for Banks",
    topic: "Firm–Equity Bridge",
    question:
      "A bank's 'firm value' of the loan book is ₹40,00,000 Cr; deposits (debt) are ₹36,00,000 Cr. Implied equity residual = ₹4,00,000 Cr. Show how a 1% overstatement of firm value maps into equity error.",
    answer: "~10% equity error from a 1% firm-value miss",
    principle:
      "When debt is ~90% of firm value, percentage errors in firm value are levered into much larger percentage errors in equity.",
    steps: [
      { text: "True residual equity:", formula: "40,00,000 − 36,00,000 = 4,00,000" },
      { text: "1% firm overstatement:", formula: "0.01 × 40,00,000 = 40,000" },
      { text: "Equity error %:", formula: "40,000 / 4,00,000 = 10%" },
      { text: "Conclusion:", formula: "Value bank equity directly — never FCFF firm value then subtract deposits" },
    ],
  },
  {
    id: 24,
    title: "APV Identity — Unlevered Value + Tax Shields − Distress",
    topic: "APV",
    question:
      "Unlevered project value V_U = ₹1,200 Cr. PV of interest tax shields = ₹86 Cr. PV of expected distress = ₹25 Cr. Compute APV.",
    answer: "APV = ₹1,261 Cr",
    principle:
      "APV separates operating value (at k_u) from financing side-effects (tax shields minus distress).",
    steps: [
      { text: "APV identity:", formula: "APV = V_U + PV(Tax Shields) − PV(Distress)" },
      { text: "Substitute:", formula: "APV = 1,200 + 86 − 25 = 1,261" },
    ],
  },
  {
    id: 25,
    title: "APV — PV of Predetermined Tax Shields",
    topic: "APV",
    question:
      "Interest tax shields: Year 1–4 = ₹40, ₹30, ₹20, ₹10 Cr. k_d = 8%. Compute PV of tax shields.",
    answer: "₹86.0 Cr",
    principle:
      "When the debt schedule is fixed, discount tax shields at the cost of debt.",
    steps: [
      { text: "Period shield:", formula: "Tax Shield_t = Int_t × t  (given as 40, 30, 20, 10)" },
      { text: "Discount at k_d:", formula: "PV = 40/1.08 + 30/1.08² + 20/1.08³ + 10/1.08⁴" },
      { text: "Compute:", formula: "PV = 37.04 + 25.72 + 15.88 + 7.35 = 85.98 ≈ 86.0" },
    ],
  },
  {
    id: 26,
    title: "When APV Beats WACC — Divi's CapEx Debt",
    topic: "APV",
    question:
      "Divi's takes temporary term debt for a plant and plans to repay it fully in 4 years. Why is a single WACC inappropriate, and what two APV steps replace it?",
    answer: "Dynamic D/E breaks constant WACC; use V_U @ k_u + PV(tax shields @ k_d)",
    principle:
      "WACC assumes perpetual target weights; APV rebuilds value when leverage is path-dependent.",
    steps: [
      { text: "WACC failure:", formula: "D/E spikes then → 0 — no single weight applies to all periods" },
      { text: "APV step 1:", formula: "Discount operating FCFF at k_u (all-equity)" },
      { text: "APV step 2:", formula: "Add PV of Int×t at k_d (and subtract distress if material)" },
    ],
  },
  {
    id: 27,
    title: "APV Exclusions — Zero Debt and Financials",
    topic: "APV",
    question:
      "For which pair is APV either redundant or invalid: (TCS, Bajaj Finance)? Explain each.",
    answer: "TCS: redundant (Debt≈0); Bajaj: invalid (debt = raw material)",
    principle:
      "APV adds financing side-effects. No debt → nothing to add. Bank/NBFC debt is operations, not a side-effect.",
    steps: [
      { text: "TCS / Abbott:", formula: "MV Debt ≈ 0 → NPV(financing) ≈ 0 → APV = V_U = WACC path" },
      { text: "Bajaj / HDFC:", formula: "Borrowings fund the loan book — not APV 'financing effects'" },
      { text: "Use APV for:", formula: "Physical compounders with temporary project/lease/acquisition debt (Divi's, Trent, Titan)" },
    ],
  },
];
