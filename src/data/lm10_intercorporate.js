// LM 10 – Intercorporate Investments
// CFA Level 2 Financial Statement Analysis (2026)
// Source: CFA Institute curriculum structure; cross-referenced with AnalystPrep, Soleadea, 300Hours.

export const LM10 = {
  id: 10,
  topic: 3,
  topicName: "Financial Statement Analysis",
  title: "Intercorporate Investments",
  subtitle: "Investments in associates, consolidation, JV accounting (IFRS vs US GAAP)",
  estimatedTime: "3–4 hours",
  weight: "10–15% of exam (FSA) / ~2% of total",

  // ----- LEARNING OUTCOMES -----
  learningOutcomes: [
    "Describe the classification of intercorporate investments based on level of influence or control, and identify the accounting method that applies to each category.",
    "Distinguish among financial assets measured at amortized cost, fair value through OCI, and fair value through profit or loss (IFRS 9 / US GAAP), and explain how unrealized gains/losses are reported.",
    "Calculate and interpret the carrying amount of an equity-method investment, including the investor's share of earnings, dividends, and excess purchase-price amortizations.",
    "Explain the concept of significant influence and when the equity method is appropriate (typically 20–50% ownership, with exceptions).",
    "Describe the acquisition method for business combinations, including recognition of assets, liabilities, goodwill, and noncontrolling interest (NCI).",
    "Calculate goodwill under the full goodwill and partial goodwill methods, and contrast IFRS and US GAAP treatment of NCI.",
    "Compare consolidation, the equity method, and proportionate consolidation, and explain the effect of each on financial ratios.",
    "Distinguish joint ventures from joint operations under IFRS 11, and contrast IFRS and US GAAP accounting for joint arrangements.",
    "Describe impairment of goodwill and of equity-method investments under IFRS and US GAAP.",
    "Analyze the effects of intercorporate investment accounting choices on reported leverage, profitability, and cash flow classification.",
  ],

  // ----- KEY TERMS -----
  keyTerms: [
    { term: "Financial Asset (passive)", def: "Investment with no significant influence or control — typically <20% voting interest. Measured at amortized cost, FVOCI, or FVPL depending on business model and cash-flow characteristics." },
    { term: "Associate", def: "Investee over which the investor has significant influence but not control — typically 20–50% ownership. Accounted for using the equity method." },
    { term: "Significant Influence", def: "Power to participate in financial and operating policy decisions without control. Indicators: board representation, participation in policy-making, material transactions, interchange of managers, or technical dependence." },
    { term: "Equity Method", def: "One-line consolidation: investment starts at cost, is increased by share of investee earnings, decreased by dividends and amortization of excess purchase price allocated to depreciable assets." },
    { term: "Subsidiary / Control", def: "Investee controlled by the parent — typically >50% voting interest (or control via contractual rights / VIE). Consolidated line-by-line." },
    { term: "Acquisition Method", def: "Business-combination method: acquiree's identifiable assets and liabilities are recognized at fair value; residual is goodwill (or bargain purchase gain)." },
    { term: "Goodwill", def: "Excess of consideration transferred (plus NCI and previously held equity) over the fair value of identifiable net assets acquired." },
    { term: "Full Goodwill Method", def: "NCI measured at fair value → goodwill includes both controlling and noncontrolling portions. Required under US GAAP; allowed under IFRS." },
    { term: "Partial Goodwill Method", def: "NCI measured as share of identifiable net assets → goodwill only for the parent's portion. Allowed only under IFRS." },
    { term: "Noncontrolling Interest (NCI)", def: "Equity in a subsidiary not attributable to the parent. Reported in equity (IFRS and US GAAP)." },
    { term: "Joint Venture (JV)", def: "Joint arrangement where parties have rights to the net assets of the arrangement. Both IFRS and US GAAP generally require the equity method." },
    { term: "Joint Operation", def: "IFRS 11 concept: parties have rights to assets and obligations for liabilities. Investor recognizes its share of assets, liabilities, revenues, and expenses (similar to proportionate consolidation)." },
    { term: "Proportionate Consolidation", def: "Line-by-line recognition of the investor's share of each asset, liability, revenue, and expense. Largely eliminated for JVs; still conceptually relevant for joint operations (IFRS) and certain US GAAP industry exceptions." },
  ],

  // ----- NOTES SECTIONS -----
  sections: [
    {
      id: "continuum",
      title: "1. The Influence Continuum — Choosing the Right Method",
      body: `Intercorporate investments are classified by the investor's *degree of influence or control*, not by the legal form of the shares alone.

**Ownership presumptions → method:**
- **< 20%** — no significant influence → financial asset (FVPL / FVOCI / amortized cost)
- **20–50%** — significant influence → equity method (associate)
- **Joint control** — JV → equity method; joint operation (IFRS) → share of assets/liabilities/revenues/expenses
- **> 50% (or other control)** — control → consolidation (acquisition method)

**Exam critical:** percentages are *presumptions*, not bright lines. A 15% stake with board seats and veto rights can be an associate; a 40% stake with no board access and a dominant other shareholder may be a financial asset.

**Why it matters for analysis:** the same economic holding can look very different on the statements depending on classification — consolidation inflates assets and liabilities; the equity method compresses everything into one line.`,
    },

    {
      id: "financial-assets",
      title: "2. Passive Financial Assets (IFRS 9 / US GAAP)",
      body: `When the investor has **no significant influence**, the holding is a financial asset. Classification depends on (1) the business model for holding the asset and (2) the contractual cash-flow characteristics (SPPI test under IFRS).

**Three measurement categories (IFRS 9; US GAAP is broadly similar for debt/equity):**

1. **Amortized cost** — hold-to-collect contractual cash flows (principal + interest). Interest income in P&L; no fair-value changes through OCI/P&L (except impairment).
2. **FVOCI (fair value through OCI)** — hold to collect *and* sell (debt), or irrevocable election for certain equity investments. Unrealized gains/losses go to OCI; for debt, recycling to P&L on sale; for equity under IFRS, generally *no* recycling (dividends in P&L).
3. **FVPL (fair value through profit or loss)** — trading / residual category. All fair-value changes hit net income.

**US GAAP notes often tested:**
- Equity securities with readily determinable fair value → generally **FVPL** (ASC 321). No more AFS equity with OCI recycling (post-ASU 2016-01).
- Debt securities still use amortized cost / AFS (OCI) / trading (FVPL).

**Analyst tip:** FVPL makes earnings more volatile; FVOCI (debt) and amortized cost smooth P&L but hide unrealized gains/losses in equity or footnotes.`,
    },

    {
      id: "equity-method",
      title: "3. Equity Method — Investments in Associates",
      body: `Under the equity method, the investment is a **single line** on the balance sheet and a **single line** (share of earnings) on the income statement — often called "one-line consolidation."

**Initial recognition:** Investment = Cost (including transaction costs under IFRS for associates; check US GAAP nuances for acquisition costs).

**Subsequent measurement each period:**
Investment_end = Investment_beg
  + Investor's % × Investee net income
  − Investor's % × Dividends declared
  − Amortization of excess purchase price allocated to depreciable/amortizable assets
  ± Other comprehensive income adjustments (share of OCI)

**Excess of cost over book value** must be allocated:
1. To identifiable assets/liabilities whose fair values differ from book values (inventory → COGS when sold; PPE → extra depreciation; intangibles → amortization).
2. Residual → **goodwill** embedded in the investment account (not separately shown; not amortized; tested for impairment as part of the investment).

**Dividends are NOT income** under the equity method — they reduce the carrying amount (return of capital conceptually).

**Upstream / downstream sales:** eliminate the investor's share of unrealized profits until sold to third parties (same logic as consolidation, but only the investor's ownership %).`,
      formula: "Inv_end = Inv_beg + %×NI − %×Div − Excess amort.",
    },

    {
      id: "consolidation",
      title: "4. Consolidation — Control & the Acquisition Method",
      body: `When the investor **controls** the investee (subsidiary), statements are combined **line by line**.

**Acquisition-date measurement:**
- Identifiable assets and liabilities of the acquiree → **fair value**.
- Consideration transferred → fair value of cash, shares, contingent consideration, etc.
- Previously held equity interest remeasured to FV (gain/loss in P&L).
- Goodwill (or bargain purchase gain) plugs the residual.

**Goodwill formula (general):**
Goodwill = Consideration transferred
         + Fair value of NCI
         + FV of previously held interest
         − Fair value of identifiable net assets

**Full vs partial goodwill (exam favorite):**
- **Full goodwill (US GAAP required; IFRS option):** NCI at fair value → goodwill includes NCI's share.
- **Partial goodwill (IFRS option only):** NCI = % × FV of identifiable net assets → goodwill is parent's share only.

**Intragroup eliminations (always):**
- Intercompany receivables/payables
- Intercompany sales, interest, dividends
- Unrealized profits in inventory / fixed assets
- Parent's investment account vs. subsidiary equity

**NCI presentation:** reported within **equity**, separately from parent's equity (both IFRS and current US GAAP).`,
      formula: "GW = Consid. + NCI + Prior interest − FV net assets",
    },

    {
      id: "goodwill-nci",
      title: "5. Worked Goodwill & NCI Comparison",
      body: `**Setup:** Parent buys 80% of Target for $400. FV of identifiable net assets = $450. Implied FV of Target as a whole = $400 / 0.80 = $500.

**Full goodwill method:**
- NCI = 20% × $500 = $100 (or direct FV if given)
- Goodwill = $400 + $100 − $450 = **$50**
- Consolidated equity includes NCI of $100 at acquisition.

**Partial goodwill method (IFRS):**
- NCI = 20% × $450 = $90
- Goodwill = $400 − 80% × $450 = $400 − $360 = **$40**
- (Equivalently: GW = consideration − parent's share of FV net assets)

**Key comparisons:**
- Full GW ≥ Partial GW (equal only if no NCI or zero premium).
- Full method → higher assets and higher equity (NCI).
- Impairment: under full method, impairment can be larger because the GW base is larger; IFRS allocates impairment between parent and NCI; US GAAP tests reporting units differently.

**Bargain purchase:** if consideration + NCI + prior interest < FV net assets → recognize a **gain** in P&L (after reassessing measurements).`,
      formula: "Full GW = Consid. + NCI_FV − FV NA; Partial GW = Consid. − %×FV NA",
    },

    {
      id: "jv",
      title: "6. Joint Ventures & Joint Arrangements",
      body: `**Joint control** = contractually agreed sharing of control; decisions about relevant activities require unanimous consent of the parties sharing control.

**IFRS 11 classifies joint arrangements into two types:**

1. **Joint venture** — parties have rights to the *net assets* of the arrangement (usually a separate vehicle). Accounting: **equity method** (IAS 28). Proportionate consolidation is *not* permitted for JVs under IFRS 11.

2. **Joint operation** — parties have rights to *assets* and obligations for *liabilities*. Accounting: recognize share of assets, liabilities, revenues, expenses (looks like proportionate consolidation, but based on contractual share, not merely ownership %).

**US GAAP:**
- No "joint operation" concept in the same way.
- Corporate joint ventures → generally **equity method**.
- Proportionate consolidation generally **not** permitted, except for certain unincorporated entities in specific industries (e.g., some oil & gas, construction).
- Must also consider VIE consolidation rules (ASC 810) before concluding equity method applies.

**Exam takeaway:** both frameworks now push JVs to the equity method; the remaining IFRS vs US GAAP distinction is mainly **joint operations (IFRS only)** and **industry-specific proportionate consolidation (US GAAP only)**.`,
    },

    {
      id: "ifrs-usgaap",
      title: "7. IFRS vs US GAAP — High-Yield Differences",
      body: `Memorize these contrasts — item-set gold:

- **Passive equity securities:** IFRS — FVPL default, optional FVOCI (generally no recycle). US GAAP — generally FVPL (ASC 321).
- **Associates / JVs:** equity method under both.
- **Joint operations:** IFRS has a distinct category (share of A/L/R/E). US GAAP has no equivalent concept.
- **Proportionate consolidation for JVs:** not allowed under IFRS; generally not allowed under US GAAP (limited industry exceptions for unincorporated entities).
- **Goodwill measurement:** IFRS — full *or* partial. US GAAP — **full only**.
- **NCI measurement:** IFRS — FV or share of identifiable net assets. US GAAP — fair value.
- **Goodwill impairment:** IFRS — CGU recoverable amount test. US GAAP — reporting-unit fair-value test (simplified one-step model).
- **Bargain purchase:** gain in P&L under both.
- **Unrealized upstream/downstream profit:** eliminate the investor's ownership share under both.

**Impairment of equity-method investments:**
- IFRS: indicators → compare carrying amount to recoverable amount (higher of value in use and fair value less costs to sell).
- US GAAP: focus on whether the loss in value is other than temporary.

**Fair value option:** US GAAP more broadly allows FVO for equity-method investments; IFRS restricts FV election mainly to venture capital / similar entities.`,
    },

    {
      id: "ratios",
      title: "8. How Methods Distort Ratios (Analyst Adjustments)",
      body: `Same 40% stake in a profitable, leveraged associate — three presentations:

**Equity method (actual GAAP/IFRS for associates):**
- Assets: one investment line (relatively small)
- Liabilities: none of associate's debt
- Net income: % × associate NI
- → **Higher ROA, lower leverage** than consolidation

**Consolidation (if it were a sub):**
- 100% of assets and liabilities on the balance sheet
- NCI in equity and NCI share of income
- → **Higher leverage, lower ROA**, larger revenue/expense base

**Proportionate consolidation (conceptual / joint operation style):**
- Only the investor's % of each line
- No NCI
- → Leverage and margins sit between equity method and full consolidation

**Cash flow classification trap:**
- Equity method: dividends received → usually operating (IFRS choice) or investing (US GAAP often investing for returns on equity investments — know the curriculum's stated treatment).
- Consolidation: subsidiary's full cash flows included; intercompany eliminated.

**When comparing peers:** adjust equity-method investees toward proportionate consolidation if you need like-for-like leverage and operating margins — a classic Level II written-analysis skill.`,
    },

    {
      id: "impairment",
      title: "9. Impairment of Goodwill & Equity-Method Carrying Amounts",
      body: `**Consolidated goodwill:**
- **Not amortized** under IFRS or US GAAP.
- Tested at least annually (and when indicators exist).
- IFRS: cash-generating unit (CGU) — compare carrying amount to recoverable amount. Excess = impairment (first to goodwill, then to other assets pro rata under IAS 36).
- US GAAP: reporting unit — compare FV to carrying amount; impairment = carrying of goodwill in excess of implied FV (simplified one-step model).

**Equity-method investment:**
- The entire carrying amount (including embedded goodwill) is tested for impairment as a single asset.
- Embedded goodwill is **not** separately tested.
- Impairments generally **not reversed** under US GAAP; IFRS may allow reversal for equity-method impairments in some cases (but goodwill impairment in consolidation is not reversed).

**Exam tip:** if an associate's fair value falls below carrying amount and the decline is other than temporary / recoverable amount is lower, write down the investment and recognize a loss in P&L.`,
    },

    {
      id: "decision",
      title: "10. Decision Framework for Vignette Questions",
      body: `Work every intercorporate item set in this order:

1. **What is the ownership % and evidence of influence/control?** → pick the method.
2. **Is it IFRS or US GAAP?** → full vs partial goodwill; joint operation vs JV; FV option.
3. **Compute carrying amounts / goodwill / NCI** with the correct formula.
4. **Ask what changes if method switches** (equity ↔ consolidation ↔ proportionate) — ratios, NI attributable to parent, total assets.
5. **Watch for excess amortization and unrealized intercompany profit** — both reduce equity-method income.

**Common traps:**
- Treating dividends as equity-method income
- Forgetting to amortize FV excess on PPE/intangibles
- Using partial goodwill under US GAAP
- Consolidating a 40% associate
- Assuming proportionate consolidation is always allowed for JVs

**Glassbox habit:** for every number, write the identity first (Inv_end = Cost + %×NI − %×Div − Excess; GW = Consid. + NCI − FV NA; Recoverable = max(FVLCTS, VIU)), then substitute. The **Glassbox Math** tab drills exactly these ten mechanical identities.`,
    },
  ],

  // ----- FORMULA SHEET -----
  formulaSheet: [
    { name: "Equity-method carrying amount", formula: "Inv = Cost + %×NI − %×Div − Excess amort." },
    { name: "Equity-method income", formula: "Equity income = %×NI − Excess amort. − %×unrealized profit" },
    { name: "Excess purchase price", formula: "Excess = Cost − %×BV of net assets" },
    { name: "Full goodwill", formula: "GW = Consideration + NCI_FV + Prior interest − FV identifiable NA" },
    { name: "Partial goodwill (IFRS)", formula: "GW = Consideration − % × FV identifiable NA" },
    { name: "Implied entity FV (from stake)", formula: "Entity FV = Consideration / % acquired" },
    { name: "NCI (full method)", formula: "NCI = Entity FV − Consideration  (or given FV)" },
    { name: "NCI (partial method)", formula: "NCI = %_NCI × FV identifiable NA" },
    { name: "Bargain purchase gain", formula: "Gain = FV NA − (Consideration + NCI + Prior interest)" },
    { name: "Influence presumptions", formula: "<20% passive · 20–50% associate · >50% subsidiary" },
  ],
};

// ============================================================================
// MCQs – CFA-style item sets (4 MCQs per vignette)
// All numbers verified for internal consistency.
// ============================================================================
export const LM10_ITEM_SETS = [
  // ===================== ITEM SET 1 =====================
  {
    id: "IS-10-01",
    title: "Item Set 1 — Equity Method Mechanics (Meridian Industrial)",
    vignette: `Meridian Industrial acquired a 30% interest in Helix Components on 1 January 20X5 for $180 million. On that date, Helix's book value of net assets was $500 million. The excess of cost over book value acquired is attributable as follows:

- Inventory (sold in 20X5): $10 million (Meridian's share of FV excess)
- Depreciable PPE (10-year remaining life, straight-line, no salvage): remainder after inventory and goodwill
- Embedded goodwill: $20 million

Helix reported 20X5 net income of $60 million and paid dividends of $20 million. There were no intercompany sales. Meridian has significant influence over Helix and uses the equity method under IFRS.`,
    questions: [
      {
        id: 1,
        question: `Meridian's share of Helix's book value of net assets at acquisition is closest to:`,
        options: [
          "$150 million",
          "$180 million",
          "$500 million",
          "$60 million",
        ],
        answer: 0,
        solution: `Meridian owns 30% of Helix.

Share of book value = 30% × $500m = **$150 million**

**Answer: A — $150 million.**

Total excess of cost over book value = $180 − $150 = **$30 million**, allocated as: inventory $10m + embedded goodwill $20m + PPE $0.`,
        lo: "LO c — equity method initial measurement",
      },
      {
        id: 2,
        question: `Meridian's equity-method income from Helix for 20X5 is closest to:`,
        options: [
          "$8 million",
          "$12 million",
          "$18 million",
          "$20 million",
        ],
        answer: 0,
        solution: `**Step 1 — Share of reported NI:** 30% × $60m = $18m

**Step 2 — Excess amortizations in 20X5:**
- Inventory FV excess sold in 20X5 → entire **$10m** reduces equity income
- PPE excess = $180 − $150 − $10 − $20 = **$0** → no depreciation
- Goodwill → not amortized

**Equity income = $18m − $10m = $8m**

**Answer: A — $8 million.**

**Exam tip:** inventory excess hits income in the period the inventory is sold (usually year 1). PPE excess is amortized over useful life. Goodwill is not amortized.`,
        lo: "LO c — equity income with excess amortization",
      },
      {
        id: 3,
        question: `The carrying amount of Meridian's investment in Helix at 31 December 20X5 is closest to:`,
        options: [
          "$172 million",
          "$182 million",
          "$188 million",
          "$198 million",
        ],
        answer: 1,
        solution: `Inv_end = Cost + Equity income − Dividends received

Dividends received = 30% × $20m = $6m
Equity income (from Q2) = $8m

Inv_end = $180 + $8 − $6 = **$182 million**

Check: $180 + share of NI $18 − inventory charge $10 − dividends $6 = $182.

**Answer: B — $182 million.**`,
        lo: "LO c — equity-method carrying amount",
      },
      {
        id: 4,
        question: `If Meridian had incorrectly treated the $6 million dividend as dividend income (cost method) instead of reducing the investment, 20X5 net income would be:`,
        options: [
          "Overstated by $6 million relative to the equity method",
          "Understated by $6 million relative to the equity method",
          "The same as under the equity method",
          "Overstated by $8 million relative to the equity method",
        ],
        answer: 0,
        solution: `Under the **correct equity method**, Meridian recognizes equity income of $8m and does **not** recognize the $6m dividend as income (it reduces the investment).

Under an incorrect **cost/dividend income** approach for a 30% associate: recognize dividend income $6m and ignore share of earnings (and ignore excess amortization).

Relative to correct equity income of $8m, the cost method shows only $6m → income would be **understated by $2m**, not $6m.

But the question asks specifically: treating the dividend *as income instead of reducing the investment* while presumably still picking up equity earnings — i.e., double counting.

If Meridian records both equity income ($8m) **and** dividend income ($6m), NI is overstated by **$6m** vs. correct equity method.

**Answer: A — Overstated by $6 million relative to the equity method.**

**Classic trap:** dividends are a balance-sheet reduction under the equity method, never P&L.`,
        lo: "LO c — dividends vs equity income",
      },
    ],
  },

  // ===================== ITEM SET 2 =====================
  {
    id: "IS-10-02",
    title: "Item Set 2 — Consolidation & Goodwill (Apex / Bolt)",
    vignette: `On 1 July 20X6, Apex Holdings acquired 75% of Bolt Manufacturing for $600 million cash. On that date:

- Fair value of Bolt's identifiable net assets: $720 million
- Book value of Bolt's identifiable net assets: $640 million
- Fair value of the 25% noncontrolling interest: $210 million

Apex prepares consolidated statements and is considering both IFRS and US GAAP presentations. There is no previously held interest. Contingent consideration is zero.`,
    questions: [
      {
        id: 1,
        question: `Under the **full goodwill** method, goodwill recognized in Apex's consolidated statement of financial position is closest to:`,
        options: [
          "$60 million",
          "$90 million",
          "$170 million",
          "$210 million",
        ],
        answer: 1,
        solution: `Full goodwill:
GW = Consideration + NCI at FV − FV of identifiable net assets
   = $600 + $210 − $720
   = **$90 million**

**Answer: B — $90 million.**

Implied FV of Bolt as a whole = $600 + $210 = $810; GW = $810 − $720 = $90.`,
        lo: "LO e, f — full goodwill",
      },
      {
        id: 2,
        question: `Under the **partial goodwill** method (IFRS option), goodwill is closest to:`,
        options: [
          "$60 million",
          "$90 million",
          "$120 million",
          "$180 million",
        ],
        answer: 0,
        solution: `Partial goodwill:
GW = Consideration − Parent's % × FV identifiable NA
   = $600 − 75% × $720
   = $600 − $540
   = **$60 million**

**Answer: A — $60 million.**

Note: partial GW ($60) < full GW ($90). The $30 difference equals NCI's share of goodwill ($210 − 25% × $720 = $210 − $180 = $30).`,
        lo: "LO f — partial goodwill IFRS",
      },
      {
        id: 3,
        question: `Which statement about Apex's accounting choice is most accurate?`,
        options: [
          "US GAAP permits either full or partial goodwill; IFRS requires full goodwill only.",
          "IFRS permits either full or partial goodwill; US GAAP requires full goodwill only.",
          "Both IFRS and US GAAP require partial goodwill when NCI fair value is unreliable.",
          "Both IFRS and US GAAP prohibit recognizing NCI in equity.",
        ],
        answer: 1,
        solution: `**IFRS:** choice between full goodwill (NCI at FV) and partial goodwill (NCI = share of identifiable NA).

**US GAAP:** **full goodwill only** (NCI at fair value).

NCI is presented in **equity** under both frameworks.

**Answer: B.**`,
        lo: "LO f, h — IFRS vs US GAAP goodwill",
      },
      {
        id: 4,
        question: `Relative to the partial goodwill method, using full goodwill will cause Apex's consolidated statements at acquisition to show:`,
        options: [
          "Higher total assets and higher total equity",
          "Higher total assets and lower total equity",
          "Lower total assets and higher total equity",
          "Identical total assets and identical total equity",
        ],
        answer: 0,
        solution: `Full vs partial at acquisition:

- Extra goodwill under full method = $90 − $60 = $30 → **higher assets**
- NCI under full = $210; under partial = 25% × $720 = $180 → NCI higher by $30 → **higher equity**

The $30 extra GW is exactly matched by $30 extra NCI.

**Answer: A — Higher total assets and higher total equity.**

**Ratio note:** leverage (D/E) may look slightly better under full method because equity is larger, even though economic leverage is unchanged — a known analyst distortion.`,
        lo: "LO g — ratio effects of goodwill method",
      },
    ],
  },

  // ===================== ITEM SET 3 =====================
  {
    id: "IS-10-03",
    title: "Item Set 3 — Joint Arrangements & Method Choice (Orion Energy)",
    vignette: `Orion Energy is comparing three possible structures for a new LNG terminal project with a partner, Caspian Gas. Each structure would give Orion a 50% economic interest. Orion reports under IFRS unless otherwise stated. Selected data for the project entity (annual, steady state):

- Revenue: $400 million
- Net income: $40 million
- Total assets: $1,000 million
- Total liabilities: $600 million
- Net assets: $400 million

Orion currently has standalone (ex-project) revenue of $800m, NI of $100m, assets of $2,000m, and liabilities of $800m. Dividends from the project, if equity-accounted, would be $10m (Orion's share).`,
    questions: [
      {
        id: 1,
        question: `If the arrangement is a **joint venture** under IFRS 11, Orion's most appropriate accounting is to:`,
        options: [
          "Proportionately consolidate 50% of each line item",
          "Fully consolidate and report 50% NCI",
          "Apply the equity method",
          "Carry the interest at FVPL with changes in OCI",
        ],
        answer: 2,
        solution: `Under **IFRS 11**, a joint venture (rights to *net assets*) is accounted for using the **equity method** (IAS 28). Proportionate consolidation is not permitted for joint ventures.

Full consolidation would require *control*, not joint control.

**Answer: C — Apply the equity method.**`,
        lo: "LO h — IFRS 11 joint ventures",
      },
      {
        id: 2,
        question: `Assume equity method. Orion's consolidated (group) net income including the JV is closest to:`,
        options: [
          "$110 million",
          "$120 million",
          "$140 million",
          "$100 million",
        ],
        answer: 1,
        solution: `Equity-method income = 50% × $40m project NI = **$20m**

Orion group NI = standalone $100m + $20m = **$120m**

(Dividends of $10m reduce the investment account; they are **not** additional income.)

**Answer: B — $120 million.**`,
        lo: "LO c, h — equity method income",
      },
      {
        id: 3,
        question: `If instead the arrangement is a **joint operation** (IFRS) and Orion recognizes 50% of assets, liabilities, revenues, and expenses, Orion's reported total liabilities are closest to:`,
        options: [
          "$800 million",
          "$1,100 million",
          "$1,400 million",
          "$1,000 million",
        ],
        answer: 1,
        solution: `Joint operation → recognize share of liabilities:
Orion liabilities = $800m + 50% × $600m = $800 + $300 = **$1,100 million**

Under equity method, Orion would show **none** of the project's $600m liabilities (only the net investment) — so leverage looks much lower under equity method.

**Answer: B — $1,100 million.**`,
        lo: "LO g, h — joint operation vs equity method leverage",
      },
      {
        id: 4,
        question: `Which statement most accurately contrasts IFRS and US GAAP for this fact pattern?`,
        options: [
          "US GAAP requires proportionate consolidation for all 50/50 corporate joint ventures; IFRS requires the equity method.",
          "Both IFRS and US GAAP generally require the equity method for joint ventures; IFRS additionally distinguishes joint operations, which US GAAP does not.",
          "IFRS requires full consolidation of joint ventures; US GAAP requires the equity method.",
          "US GAAP allows partial goodwill for joint ventures; IFRS does not.",
        ],
        answer: 1,
        solution: `**Both** IFRS and US GAAP generally use the **equity method** for joint ventures (rights to net assets / corporate JVs).

The distinctive IFRS feature is the **joint operation** category (recognize share of A/L/R/E). US GAAP has no identical concept and only rarely allows proportionate consolidation (certain unincorporated entities / industries).

Partial vs full goodwill relates to **subsidiaries**, not to equity-method JVs.

**Answer: B.**`,
        lo: "LO h — IFRS vs US GAAP joint arrangements",
      },
    ],
  },
];

// ============================================================================
// Glassbox Math — 10 first-principles problems
// Transparently track cash flows, excess depreciation, unrealized profits,
// and IFRS vs US GAAP mechanics through the statements.
// ============================================================================
export const LM10_GLASSBOX = [
  {
    id: 1,
    title: "Equity Method: Basic Carrying Amount",
    topic: "Equity Method",
    question:
      "Alpha Corp purchases a 30% stake in Beta Inc. for $600,000, gaining significant influence. During the year, Beta reports a net income of $150,000 and pays total dividends of $40,000. What is the carrying amount of Alpha's investment in Beta at year-end?",
    answer: "$633,000",
    principle:
      "Under the equity method, the investment is a dynamic asset that grows with the investor's share of profits and shrinks when dividends are extracted (dividends are a return of capital, not income).",
    steps: [
      {
        text: "Write the carrying-amount identity:",
        formula: "Ending Balance = Initial Investment + (NI × %) − (Div × %)",
      },
      {
        text: "Substitute Alpha's 30% stake:",
        formula: "Ending = 600,000 + (150,000 × 0.30) − (40,000 × 0.30)",
      },
      {
        text: "Compute share of earnings and dividends:",
        formula: "Ending = 600,000 + 45,000 − 12,000 = 633,000",
      },
    ],
  },
  {
    id: 2,
    title: "Equity Method: Excess Depreciation",
    topic: "Equity Method",
    question:
      "Gamma Corp buys 40% of Delta Inc. for $1,000,000. At purchase, Delta's book value of net assets is $2,000,000. The entire excess of purchase price over book value is attributable to machinery with a remaining useful life of 5 years (straight-line). If Delta reports net income of $300,000, what is Gamma's equity income for the year?",
    answer: "$80,000",
    principle:
      "Any excess of cost over book value acquired must be allocated to identifiable assets and amortized. That amortization reduces equity-method income each period — it is not optional.",
    steps: [
      {
        text: "Isolate book value acquired and the excess:",
        formula: "BV acquired = 2,000,000 × 0.40 = 800,000",
      },
      {
        text: "Excess = cost − BV acquired (all PPE here):",
        formula: "Excess = 1,000,000 − 800,000 = 200,000",
      },
      {
        text: "Annual excess depreciation over 5 years:",
        formula: "Excess depr. = 200,000 / 5 = 40,000",
      },
      {
        text: "Equity income = share of NI − excess depreciation:",
        formula: "Equity income = (300,000 × 0.40) − 40,000 = 80,000",
      },
    ],
  },
  {
    id: 3,
    title: "Acquisition Method: Full vs Partial Goodwill (IFRS)",
    topic: "Consolidation",
    question:
      "Epsilon acquires 80% of Zeta for $2,500,000. FV of Zeta's identifiable net assets is $2,800,000. FV of the NCI is $600,000. Calculate goodwill under both the Full Goodwill (US GAAP / IFRS option) and Partial Goodwill (IFRS only) methods.",
    answer: "Full GW $300,000 · Partial GW $260,000",
    principle:
      "Full goodwill assumes the whole entity was acquired at market rates (NCI at FV). Partial goodwill recognizes only the parent's share of goodwill (NCI = % × FV of identifiable net assets).",
    steps: [
      {
        text: "Full goodwill (consideration + NCI FV − FV net assets):",
        formula: "GW_Full = (2,500,000 + 600,000) − 2,800,000 = 300,000",
      },
      {
        text: "Partial goodwill (consideration − parent's % × FV net assets):",
        formula: "GW_Partial = 2,500,000 − (2,800,000 × 0.80) = 2,500,000 − 2,240,000 = 260,000",
      },
      {
        text: "Difference check — NCI's share of goodwill:",
        formula: "Full − Partial = 300,000 − 260,000 = 40,000 (= 600,000 − 0.20 × 2,800,000)",
      },
    ],
  },
  {
    id: 4,
    title: "Acquisition Method: NCI Evolution (Partial Goodwill)",
    topic: "Consolidation",
    question:
      "Using the Partial Goodwill method from Question 3, Zeta reports net income of $400,000 and pays dividends of $100,000 in year 1. What is the ending balance of the NCI under IFRS?",
    answer: "$620,000",
    principle:
      "Under partial goodwill, initial NCI equals the NCI % × FV of identifiable net assets only (no NCI goodwill). Then NCI evolves like a mini equity-method claim: + share of NI − share of dividends.",
    steps: [
      {
        text: "Initial NCI under partial method:",
        formula: "NCI₀ = 2,800,000 × 0.20 = 560,000",
      },
      {
        text: "Roll forward for year 1:",
        formula: "NCI₁ = 560,000 + (400,000 × 0.20) − (100,000 × 0.20)",
      },
      {
        text: "Compute:",
        formula: "NCI₁ = 560,000 + 80,000 − 20,000 = 620,000",
      },
    ],
  },
  {
    id: 5,
    title: "Equity Method: Upstream Sale (Unrealized Profit)",
    topic: "Unrealized Profit",
    question:
      "Theta owns 30% of Iota. Iota sells inventory to Theta for $200,000 at a 25% gross profit margin. At year-end, Theta still holds 60% of this inventory. Iota reports net income of $500,000. What is Theta's adjusted equity income?",
    answer: "$141,000",
    principle:
      "Upstream = Associate → Investor. Profit sitting in the investor's ending inventory is unrealized from the group's perspective until sold to third parties. Eliminate only the investor's ownership % of that unrealized profit from equity income.",
    steps: [
      {
        text: "Total intercompany gross profit on the sale:",
        formula: "Total profit = 200,000 × 0.25 = 50,000",
      },
      {
        text: "Unrealized portion still in inventory:",
        formula: "Unrealized = 50,000 × 0.60 = 30,000",
      },
      {
        text: "Defer investor's share; adjust equity income:",
        formula: "Equity income = (500,000 × 0.30) − (30,000 × 0.30) = 150,000 − 9,000 = 141,000",
      },
    ],
  },
  {
    id: 6,
    title: "Equity Method: Downstream Sale",
    topic: "Unrealized Profit",
    question:
      "Kappa owns 40% of Lambda. Kappa sells inventory costing $60,000 to Lambda for $100,000. Lambda still holds 50% of this inventory at year-end. Lambda reports net income of $300,000. Calculate Kappa's adjusted equity income.",
    answer: "$112,000",
    principle:
      "Downstream = Investor → Associate. For the equity method, the elimination math is the same as upstream: defer ownership % × unrealized inventory profit. (Presentation on the investor's standalone P&L differs, but equity income is reduced identically.)",
    steps: [
      {
        text: "Gross profit on the downstream sale:",
        formula: "Total profit = 100,000 − 60,000 = 40,000",
      },
      {
        text: "Unrealized portion still held by Lambda:",
        formula: "Unrealized = 40,000 × 0.50 = 20,000",
      },
      {
        text: "Kappa's share deferred from equity income:",
        formula: "Defer = 20,000 × 0.40 = 8,000",
      },
      {
        text: "Adjusted equity income:",
        formula: "Equity income = (300,000 × 0.40) − 8,000 = 112,000",
      },
    ],
  },
  {
    id: 7,
    title: "Consolidation: NI Attributable to Parent",
    topic: "Consolidation",
    question:
      "Parent owns 90% of Sub. Parent's standalone NI (excluding any investment income from Sub) is $2,000,000. Sub's NI is $500,000. Excess fair-value amortization related to the acquisition is $40,000. What is consolidated net income attributable to the parent?",
    answer: "$2,414,000",
    principle:
      "Consolidation includes 100% of the subsidiary's results, but NI attributable to the parent equals parent standalone NI plus the parent's share of the subsidiary's *adjusted* NI (after excess amortization).",
    steps: [
      {
        text: "Adjust Sub NI for excess FV amortization:",
        formula: "Adjusted Sub NI = 500,000 − 40,000 = 460,000",
      },
      {
        text: "Parent's ownership share of adjusted Sub NI:",
        formula: "Parent share = 460,000 × 0.90 = 414,000",
      },
      {
        text: "NI attributable to parent:",
        formula: "NI to parent = 2,000,000 + 414,000 = 2,414,000",
      },
    ],
  },
  {
    id: 8,
    title: "Consolidation: Total Assets After Cash Acquisition",
    topic: "Consolidation",
    question:
      "Sigma has standalone total assets of $10,000,000 (including $4,000,000 cash about to be used for an acquisition). Sigma uses that cash to buy 100% of Tau. Tau's book value of total assets is $3,500,000; fair value is $3,800,000. Tau has no liabilities. What are consolidated total assets immediately after the transaction?",
    answer: "$10,000,000",
    principle:
      "Under the acquisition method, cash spent is replaced by the acquiree's assets at fair value plus goodwill. When the target has no liabilities and is bought entirely for cash, consolidated assets equal the acquirer's pre-deal assets — an accounting invariant.",
    steps: [
      {
        text: "Goodwill = purchase price − FV of net assets:",
        formula: "GW = 4,000,000 − 3,800,000 = 200,000",
      },
      {
        text: "Sigma's assets after paying cash:",
        formula: "Sigma post-cash = 10,000,000 − 4,000,000 = 6,000,000",
      },
      {
        text: "Consolidate at FV + goodwill:",
        formula: "Consol. assets = 6,000,000 + 3,800,000 + 200,000 = 10,000,000",
      },
    ],
  },
  {
    id: 9,
    title: "Joint Ventures: IFRS Revenue (No Line-by-Line)",
    topic: "Joint Ventures",
    question:
      "Omega Corp enters a 50/50 Joint Venture. Omega's standalone revenue is $8,000,000. The JV reports total revenue of $4,000,000. Under IFRS, what is reported revenue on Omega's consolidated income statement?",
    answer: "$8,000,000",
    principle:
      "Both IFRS and US GAAP require the equity method for joint ventures. Proportionate consolidation (adding 50% of JV revenue) is prohibited under IFRS 11 for JVs. Only Omega's share of JV *net income* appears as a single line — not JV revenue.",
    steps: [
      {
        text: "Classify the arrangement: joint venture → equity method.",
        formula: "JV revenue is NOT consolidated line-by-line",
      },
      {
        text: "Reported top-line revenue equals standalone revenue only:",
        formula: "Reported revenue = 8,000,000",
      },
      {
        text: "Omega's share of JV NI would appear below as income from JV — not in revenue.",
        formula: "Contrast: proportionate consol. would show 8,000,000 + 0.50 × 4,000,000 = 10,000,000 (not allowed for JVs)",
      },
    ],
  },
  {
    id: 10,
    title: "Impairment of Associate (IFRS Recoverable Amount)",
    topic: "Impairment",
    question:
      "An investor holds an equity-method investment with carrying value $900,000. Fair value drops to $750,000; costs to sell are $20,000. Value in use is $780,000. Under IFRS, what is the impairment loss?",
    answer: "$120,000",
    principle:
      "IFRS impairs when carrying amount exceeds recoverable amount. Recoverable amount = max(fair value less costs to sell, value in use) — a rational actor keeps the higher of selling or holding.",
    steps: [
      {
        text: "Fair value less costs to sell:",
        formula: "FVLCTS = 750,000 − 20,000 = 730,000",
      },
      {
        text: "Recoverable amount = higher of FVLCTS and value in use:",
        formula: "Recoverable = max(730,000, 780,000) = 780,000",
      },
      {
        text: "Impairment loss:",
        formula: "Loss = 900,000 − 780,000 = 120,000",
      },
    ],
  },
];
