---
name: add-cfa-module
description: >-
  Add a new CFA Level II Learning Module to Panini Finance (data file, curriculum
  status, App.jsx registry, Glassbox Math, item sets). Use when creating LM ##,
  shipping a new chapter, or extending FSA / Equity / Fixed Income modules.
---

# Add CFA Level II Module

## Workflow

Copy this checklist and complete in order:

```
- [ ] 1. Create src/data/lm##_slug.js
- [ ] 2. Export LM##, LM##_ITEM_SETS, LM##_GLASSBOX
- [ ] 3. Update curriculum.js status → available (siblings coming/locked)
- [ ] 4. Register in App.jsx MODULE_CONTENT
- [ ] 5. npm run build
```

## 1. Data file

Use LM 10 (`lm10_intercorporate.js`) as the template.

Required exports:

| Export | Purpose |
|--------|---------|
| `LM##` | Notes, LOs, key terms, formula sheet |
| `LM##_GLASSBOX` | ≥8–10 first-principles problems (required) |
| `LM##_ITEM_SETS` | ≥2–3 vignettes × 4 MCQs |

Follow **glassbox-problems** skill for all quantitative content.

## 2. Curriculum

In `src/data/curriculum.js`:

```js
{ id: ##, title: "...", status: "available" }
```

Set the topic `highlight: true` if it is the current build focus.

## 3. Wire UI

In `src/App.jsx`:

```js
import { LM##, LM##_ITEM_SETS, LM##_GLASSBOX } from './data/lm##_slug.js'

const MODULE_CONTENT = {
  // ...
  ##: { module: LM##, itemSets: LM##_ITEM_SETS, glassbox: LM##_GLASSBOX },
}
```

## 4. Verify

```bash
npm run build
```

Open the module → confirm Notes, Formula Sheet, Glassbox Math, Practice MCQs tabs.

## Do not

- Commit `noupload/`
- Skip `LM##_GLASSBOX`
- Hardcode a single module in `PracticeTab` (use `MODULE_CONTENT`)
