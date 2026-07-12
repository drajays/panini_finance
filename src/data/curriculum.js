// CFA Level 2 (2026) – Full curriculum metadata
// Active build: FSA LM 10 (Intercorporate) + Equity LM 21 (DDM template)
// Source: CFA Institute 2026 curriculum, 300Hours, AnalystPrep, Soleadea

export const TOPICS = [
  {
    id: 1,
    name: "Quantitative Methods",
    weight: "5–10%",
    lms: "LM 1–7",
    description:
      "Regression, time-series analysis, machine learning, and probability concepts applied to investment problems.",
    modules: [
      { id: 1, title: "Multiple Regression", status: "locked" },
      { id: 2, title: "Time-Series Analysis", status: "locked" },
      { id: 3, title: "Machine Learning", status: "locked" },
      { id: 4, title: "Big Data Projects", status: "locked" },
      { id: 5, title: "Probability Concepts", status: "locked" },
      { id: 6, title: "Probability & Probability Distributions", status: "locked" },
      { id: 7, title: "Hypothesis Testing", status: "locked" },
    ],
  },
  {
    id: 2,
    name: "Economics",
    weight: "5–10%",
    lms: "LM 8–9",
    description:
      "Foreign exchange, international trade, and economic growth in an intertemporal/multi-country setting.",
    modules: [
      { id: 8, title: "Currency Management: An Introduction", status: "locked" },
      { id: 9, title: "Economic Growth", status: "locked" },
    ],
  },
  {
    id: 3,
    name: "Financial Statement Analysis",
    weight: "10–15%",
    lms: "LM 10–15",
    description:
      "Intercorporate investments, pension accounting, multinational operations, and quality of financial reports.",
    highlight: true,
    modules: [
      { id: 10, title: "Intercorporate Investments", status: "available" },
      { id: 11, title: "Employee Compensation: Post-Employment and Share-Based", status: "coming" },
      { id: 12, title: "Multinational Operations", status: "coming" },
      { id: 13, title: "Analysis of Financial Institutions", status: "coming" },
      { id: 14, title: "Evaluating Quality of Financial Reports", status: "coming" },
      { id: 15, title: "Integration of Financial Statement Analysis Techniques", status: "coming" },
    ],
  },
  {
    id: 4,
    name: "Corporate Issuers",
    weight: "5–10%",
    lms: "LM 16–19",
    description: "Capital budgeting, capital structure, dividends, and ESG considerations.",
    modules: [
      { id: 16, title: "Capital Budgeting", status: "locked" },
      { id: 17, title: "Capital Structure", status: "locked" },
      { id: 18, title: "Dividends and Share Repurchases", status: "locked" },
      { id: 19, title: "Corporate Governance & ESG", status: "locked" },
    ],
  },
  {
    id: 5,
    name: "Equity Valuation",
    weight: "10–15%",
    lms: "LM 20–25",
    description:
      "The deepest valuation topic at L2. DDM, FCFF/FE, residual income, market multiples, and private-company valuation.",
    modules: [
      { id: 20, title: "Equity Valuation: Applications and Processes", status: "coming" },
      { id: 21, title: "Discounted Dividend Valuation (DDM)", status: "available" },
      { id: 22, title: "Free Cash Flow Valuation (FCFF / FCFE)", status: "coming" },
      { id: 23, title: "Market-Based Valuation: P/E, P/B, EV/EBITDA, PEG", status: "coming" },
      { id: 24, title: "Residual Income Valuation", status: "coming" },
      { id: 25, title: "Private Company Valuation", status: "coming" },
    ],
  },
  {
    id: 6,
    name: "Fixed Income",
    weight: "10–15%",
    lms: "LM 26–30",
    description:
      "Term structure, no-arbitrage valuation, bonds with embedded options, credit models, and CDS.",
    modules: [
      { id: 26, title: "Term Structure & Interest Rate Dynamics", status: "locked" },
      { id: 27, title: "Arbitrage-Free Valuation Framework", status: "locked" },
      { id: 28, title: "Bonds with Embedded Options", status: "locked" },
      { id: 29, title: "Credit Analysis Models", status: "locked" },
      { id: 30, title: "Credit Default Swaps", status: "locked" },
    ],
  },
  {
    id: 7,
    name: "Derivatives",
    weight: "5–10%",
    lms: "LM 31–32",
    description: "Pricing and valuation of forward commitments and contingent claims.",
    modules: [
      { id: 31, title: "Pricing & Valuation of Forward Commitments", status: "locked" },
      { id: 32, title: "Valuation of Contingent Claims (Options)", status: "locked" },
    ],
  },
  {
    id: 8,
    name: "Alternative Investments",
    weight: "5–10%",
    lms: "LM 33–36",
    description: "Commodities, real estate, REITs, hedge funds, and private equity.",
    modules: [
      { id: 33, title: "Introduction to Commodities & Commodity Derivatives", status: "locked" },
      { id: 34, title: "Overview of Types of Real Estate Investment", status: "locked" },
      { id: 35, title: "Investments in Real Estate Through Publicly Traded Securities (REITs)", status: "locked" },
      { id: 36, title: "Hedge Fund Strategies", status: "locked" },
    ],
  },
  {
    id: 9,
    name: "Portfolio Management",
    weight: "10–15%",
    lms: "LM 37–42",
    description:
      "Active management, ETFs, multifactor models, market risk, and backtesting.",
    modules: [
      { id: 37, title: "Economics and Investment Markets", status: "locked" },
      { id: 38, title: "Analysis of Active Portfolio Management", status: "locked" },
      { id: 39, title: "Exchange-Traded Funds: Mechanics & Applications", status: "locked" },
      { id: 40, title: "Using Multifactor Models", status: "locked" },
      { id: 41, title: "Measuring & Managing Market Risk", status: "locked" },
      { id: 42, title: "Backtesting and Simulation", status: "locked" },
    ],
  },
  {
    id: 10,
    name: "Ethical & Professional Standards",
    weight: "10–15%",
    lms: "LM 43–45",
    description: "Code of Ethics, Standards I–VII, and Level II case application.",
    modules: [
      { id: 43, title: "Code of Ethics & Standards of Professional Conduct", status: "locked" },
      { id: 44, title: "Guidance for Standards I–VII", status: "locked" },
      { id: 45, title: "Application of the Code and Standards: Level II", status: "locked" },
    ],
  },
];

export const EXAM_META = {
  name: "CFA Level II",
  year: 2026,
  format: "22 item-sets (88 MCQs, vignette-based, 4 MCQs per set)",
  duration: "2 sessions × 2h 12m = 4h 24m",
  passing: "Top-down scoring — no fixed passing score (MPS)",
  linkCurriculum: "https://300hours.com/cfa-level-2-study-order/",
};
