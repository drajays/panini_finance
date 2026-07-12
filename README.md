# Panini Finance — CFA Level II Deep-Dive App

A focused web app for in-depth CFA Level II 2026 preparation. Current build focus:
**Financial Statement Analysis** (Topic 3), starting with **LM 10 — Intercorporate Investments**.
**LM 21 — Discounted Dividend Valuation (DDM)** remains available as the original template module.

## Stack

- **React 19** + **Vite 8** — single-page web app
- Pure CSS with a dark, study-friendly theme (no UI framework)
- All content is data-driven: `src/data/curriculum.js` plus per-module files

## Run

```bash
cd panini_finance
npm install
npm run dev    # http://localhost:5173
```

Build a production bundle:

```bash
npm run build
npm run preview
```

### GitHub Pages

Live site: [https://drajays.github.io/panini_finance/](https://drajays.github.io/panini_finance/)

Deploy is automatic on push to `main` via `.github/workflows/deploy-pages.yml`.

In the repo: **Settings → Pages → Build and deployment → Source = GitHub Actions**.

## App architecture

```
src/
  main.jsx                  – React entry
  App.jsx                   – Root component, layout, view switching
  index.css / App.css       – Styles (dark theme)
  data/
    curriculum.js           – All 10 topics, 45 LMs metadata, exam info
    lm10_intercorporate.js  – LM 10 content (notes, formulas, 3 item sets)
    lm21_ddm.js             – LM 21 content (notes, formulas, 3 item sets)
```

### Component map (in `App.jsx`)

- `Sidebar` — curriculum tree with topic expand/collapse and module selection
- `Welcome` — landing page with exam stats, topic weights, current focus
- `ModuleDetail` — wrapper for any built module; renders the 3 tabs
  - `NotesTab` — Learning Outcomes, Key Terms, Concept Notes
  - `FormulasTab` — Quick-reference formula sheet
  - `PracticeTab` — `ItemSetPlayer` for each vignette
- `ItemSetPlayer` — CFA-style item-set player (vignette + 4 MCQs + solution reveal)
- `MODULE_CONTENT` — registry mapping LM id → `{ module, itemSets }`

## How a Learning Module works

Each module has the same shape as `LM10` / `LM21`:

```js
{
  id, topic, topicName, title, subtitle,
  estimatedTime, weight,
  learningOutcomes: [string, ...],
  keyTerms: [{term, def}, ...],
  sections: [{id, title, body, formula?}, ...],
  formulaSheet: [{name, formula}, ...],
}
```

Item sets are exported as `LM##_ITEM_SETS` (vignette + 4 MCQs, each with
`question`, `options`, `answer`, `solution`, `lo`).

## Adding a new module (e.g., LM 11 — Employee Compensation)

1. **Create** `src/data/lm11_pensions.js` with the same shape; export module + item sets.
2. **Update** `src/data/curriculum.js` — set status to `"available"` (and `"coming"` for siblings as needed).
3. **Register** in `App.jsx` `MODULE_CONTENT`:
   ```js
   11: { module: LM11, itemSets: LM11_ITEM_SETS },
   ```

## Roadmap

- **Current:** FSA LM 10 (done) → LM 11–15
- **Also shipped:** Equity LM 21 (DDM)
- **Next waves:** Remaining Equity, Fixed Income, then Quant / PM / Derivatives / Alts / Ethics / Corporate / Econ

## Agent conventions

- **Glassbox mandate:** every problem uses first-principles identities + transparent steps (see `.cursorrules` and `.cursor/skills/glassbox-problems/`)
- **Add a module:** follow `.cursor/skills/add-cfa-module/SKILL.md`
- **Never commit:** `noupload/`, `node_modules/`, `dist/`, `.env` (listed in `.gitignore`)

## Source & licensing

- Curriculum structure verified from 300Hours, AnalystPrep, Soleadea.
- All explanations written for this app; no copyrighted CFA Institute text
  reproduced.
- Numbers in MCQ item sets are hand-verified for internal consistency.
