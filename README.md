# Panini Finance — CFA Level I + II

A focused web app for CFA 2026 preparation:

- **Level I** — 93-module curriculum dashboard, practice room, formula deck (from `noupload/cfa1`, adapted)
- **Level II** — deep-dive modules with Notes / Formula Sheet / Glassbox Math / Item sets  
  Current L2 focus: **FSA LM 10 — Intercorporate Investments** (+ **LM 21 DDM** template)

Switch tracks from either sidebar. Preference is saved in `localStorage`.

## Stack

- **React 19** + **Vite 8** — single-page web app
- `lucide-react` icons (Level I UI)
- Pure CSS — L2 dark theme + scoped L1 light theme (`.level1-root`)
- Content is data-driven: `src/data/*` (L2) and `src/level1/data.js` (L1)

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

**Required (one-time):** repo **Settings → Pages → Build and deployment**

Pick either:
1. **Source = GitHub Actions** (preferred — uses `.github/workflows/deploy-pages.yml`), or
2. **Source = Deploy from a branch** → Branch `main` → Folder `/docs`

Until you switch off “root of main”, the site serves uncompiled Vite source and stays blank.

Rebuild `docs/` after content changes: `npm run build && rm -rf docs && cp -R dist docs && touch docs/.nojekyll`

## App architecture

```
src/
  App.jsx                   – Root shell: Level I ↔ Level II switch
  level1/
    Level1App.jsx           – L1 dashboard / curriculum / practice / formulas
    data.js                 – 10 topics, 93 modules, formulas, practice Qs
    styles.css              – Scoped under .level1-root
  data/
    curriculum.js           – L2 topics / 45 LMs metadata
    lm10_intercorporate.js  – L2 LM 10
    lm21_ddm.js             – L2 LM 21
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
