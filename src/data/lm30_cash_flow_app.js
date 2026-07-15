export const LM30 = [
  {
    id: "cash-flow-overview",
    title: "30. Cash‑Flow – Concept, Key Points, Formula",
    body: `Concept: Cash‑flow isolates the real cash moving in‑and‑out of a business, stripping away accrual items.

Key Points:
- **Cash Revenue (CR)** = Sales – ΔAccounts Receivable
- **Cash Operating Expense (COE)** = Operating Expense – ΔAccounts Payable
- **Free Cash‑Flow to Firm (FCFF)** = EBIT × (1‑t) + Depreciation – CapEx – ΔWC
- **Free Cash‑Flow to Equity (FCFE)** = CFO – CapEx + Net Borrowing`,
    formula: `$$\begin{aligned}
      \text{FCFF} &= \text{EBIT}\,(1-t) + \text{Dep} - \text{CapEx} - \Delta\text{WC} \\
      \text{FCFE} &= \text{CFO} - \text{CapEx} + \text{Net Borrowing}
      \end{aligned}$$`
  },
  {
    id: "cash-flow-conceptual-mcqs",
    title: "31. Conceptual MCQs",
    mcqs: [
      {
        question: "Why is cash‑flow preferred over net income for valuation?",
        options: [
          "Net income includes non‑cash items such as depreciation.",
          "Cash‑flow reflects the amount that can be distributed to shareholders.",
          "Both A and B.",
          "Neither A nor B."
        ],
        answer: 2,
        solution: "Both A and B – cash‑flow strips non‑cash items and shows actual distributable cash."
      },
      {
        question: "Which balance‑sheet change directly increases Cash Operating Expense?",
        options: [
          "Increase in Accounts Payable.",
          "Decrease in Accounts Payable.",
          "Increase in Accounts Receivable.",
          "Decrease in Inventory."
        ],
        answer: 1,
        solution: "A decrease in Accounts Payable reduces cash retained, effectively increasing cash‑operating expense."
      }
    ]
  },
  {
    id: "cash-flow-math-mcqs",
    title: "32. Mathematical MCQs",
    mcqs: [
      {
        question: "A firm reports Sales = ₹120 Cr, ΔAccounts Receivable = ₹20 Cr, EBIT = ₹30 Cr, tax = 30 %, Depreciation = ₹8 Cr, CapEx = ₹12 Cr, ΔWC = ₹5 Cr. Compute FCFF.",
        options: [
          "₹13.0 Cr",
          "₹14.0 Cr",
          "₹15.0 Cr",
          "₹16.0 Cr"
        ],
        answer: 0,
        solution: "FCFF = 30 × (1‑0.30) + 8 – 12 – 5 = 21 + 8 – 12 – 5 = ₹13 Cr."
      },
      {
        question: "If CFO = ₹25 Cr, CapEx = ₹7 Cr and Net Borrowing = ₹3 Cr, what is FCFE?",
        options: ["₹21 Cr", "₹19 Cr", "₹15 Cr", "₹13 Cr"],
        answer: 0,
        solution: "FCFE = 25 – 7 + 3 = ₹21 Cr."
      }
    ]
  },
  {
    id: "cash-flow-additional",
    title: "33. Additional Material",
    body: `* Supplementary resources beyond the CFA curriculum:\n  - Investopedia – Free Cash Flow to Equity: https://www.investopedia.com/terms/f/fcfe.asp\n  - Damodaran – Valuing Private Companies: https://pages.stern.nyu.edu/~adamodar/\n  - Short explainer video (placeholder URL).`,
    formula: ""
  }
];

export const LM30_ITEM_SETS = [];
export const LM30_GLASSBOX = {};
