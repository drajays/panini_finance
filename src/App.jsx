import { useState, useEffect } from 'react'
import { TOPICS, EXAM_META } from './data/curriculum.js'
import { LM10, LM10_ITEM_SETS, LM10_GLASSBOX } from './data/lm10_intercorporate.js'
import { LM20, LM20_ITEM_SETS, LM20_GLASSBOX } from './data/lm20_equity_valuation_apps.js'
import { LM21, LM21_ITEM_SETS, LM21_GLASSBOX } from './data/lm21_ddm.js'
import Level1App from './level1/Level1App.jsx'
import Level3App from './level3/Level3App.jsx'
import './App.css'

const LEVEL_KEY = 'panini-level'

/* Registry of fully built learning modules */
const MODULE_CONTENT = {
  10: { module: LM10, itemSets: LM10_ITEM_SETS, glassbox: LM10_GLASSBOX },
  20: { module: LM20, itemSets: LM20_ITEM_SETS, glassbox: LM20_GLASSBOX },
  21: { module: LM21, itemSets: LM21_ITEM_SETS, glassbox: LM21_GLASSBOX },
}

/* ----------------- Helpers ----------------- */
function renderInline(text) {
  // Convert simple **bold** and *italic* markers to <strong>/<em>
  const parts = []
  let i = 0
  let buf = ''
  let mode = null // 'b' | 'i' | null
  for (let k = 0; k < text.length; k++) {
    const ch = text[k]
    const next = text[k + 1]
    if (ch === '*' && next === '*') {
      if (mode === 'b') { parts.push(<strong key={`b${i++}`}>{buf}</strong>); buf = ''; mode = null }
      else if (mode === null) { if (buf) parts.push(buf); buf = ''; mode = 'b' }
      else { parts.push(buf); buf = ''; mode = 'b' }
      k++
    } else if (ch === '*') {
      if (mode === 'i') { parts.push(<em key={`i${i++}`}>{buf}</em>); buf = ''; mode = null }
      else if (mode === null) { if (buf) parts.push(buf); buf = ''; mode = 'i' }
      else { parts.push(buf); buf = ''; mode = 'i' }
    } else {
      buf += ch
    }
  }
  if (buf) {
    if (mode === 'b') parts.push(<strong key={`b${i++}`}>{buf}</strong>)
    else if (mode === 'i') parts.push(<em key={`i${i++}`}>{buf}</em>)
    else parts.push(buf)
  }
  return parts
}

/* ----------------- Sidebar ----------------- */
function Sidebar({ activeModule, onSelectModule, expandedTopics, toggleTopic, onSwitchToL1, onSwitchToL3 }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="brand">
          <div className="brand-mark">₹</div>
          <div>Panini Finance</div>
        </div>
        <div className="brand-sub">CFA Level II · 2026 Curriculum</div>
        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button
            type="button"
            className="btn"
            onClick={onSwitchToL1}
            style={{ flex: 1, fontSize: 12 }}
          >
            ← Level I
          </button>
          <button
            type="button"
            className="btn"
            onClick={onSwitchToL3}
            style={{ flex: 1, fontSize: 12 }}
          >
            Level III →
          </button>
        </div>
      </div>

      <div className="sidebar-section">
        <div className="sidebar-section-title">Curriculum</div>
        {TOPICS.map((topic) => {
          const isExpanded = expandedTopics.has(topic.id)
          return (
            <div key={topic.id} className="topic">
              <button
                className={`topic-head ${isExpanded ? 'expanded' : ''}`}
                onClick={() => toggleTopic(topic.id)}
              >
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  <span className="topic-pill">{topic.id}</span>
                  <span>{topic.name}</span>
                  {topic.highlight && <span className="topic-highlight">FOCUS</span>}
                </span>
                <span className="chev">▶</span>
              </button>
              {isExpanded && (
                <div className="module-list">
                  {topic.modules.map((m) => {
                    const isActive = activeModule && activeModule.id === m.id
                    return (
                      <button
                        key={m.id}
                        className={`module ${isActive ? 'active' : ''} ${m.status === 'locked' ? 'disabled' : ''}`}
                        onClick={() => m.status !== 'locked' && onSelectModule({ ...m, topicId: topic.id, topicName: topic.name })}
                        disabled={m.status === 'locked'}
                      >
                        <span style={{ display: 'flex', alignItems: 'center', flex: 1, minWidth: 0 }}>
                          <span className="lm-id">LM{m.id}</span>
                          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {m.title}
                          </span>
                        </span>
                        <span className={`status status-${m.status}`}>
                          {m.status === 'available' ? 'NEW' : m.status === 'coming' ? 'SOON' : '·'}
                        </span>
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </aside>
  )
}

/* ----------------- Welcome / Home ----------------- */
function Welcome({ onOpenLM10, onOpenLM20, onOpenLM21, onSwitchToL1, onSwitchToL3 }) {
  return (
    <div className="welcome">
      <div className="welcome-hero">
        <h1>Welcome back, future CFA Level II charterholder 📊</h1>
        <p>
          Your structured, deep-dive companion to the CFA Level II 2026 curriculum.
          Current focus: <strong>Financial Statement Analysis</strong> — starting with
          Intercorporate Investments. Need foundations?{' '}
          <button type="button" className="btn" onClick={onSwitchToL1} style={{ display: 'inline', padding: '2px 8px', fontSize: 13 }}>
            Open CFA Level I →
          </button>{' '}
          Ready for portfolio management?{' '}
          <button type="button" className="btn" onClick={onSwitchToL3} style={{ display: 'inline', padding: '2px 8px', fontSize: 13 }}>
            Open CFA Level III →
          </button>
        </p>
        <div className="exam-stats">
          <div className="exam-stat">
            <div className="label">Format</div>
            <div className="value">{EXAM_META.format.split(',')[0]}</div>
          </div>
          <div className="exam-stat">
            <div className="label">Duration</div>
            <div className="value">{EXAM_META.duration.split('=')[1].trim()}</div>
          </div>
          <div className="exam-stat">
            <div className="label">Topics</div>
            <div className="value">10</div>
          </div>
          <div className="exam-stat">
            <div className="label">Learning Modules</div>
            <div className="value">45</div>
          </div>
        </div>
      </div>

      <div className="section-card">
        <h2>📊 Topic Weights — 2026</h2>
        <div className="weight-grid">
          {TOPICS.map((t) => (
            <div key={t.id} className={`weight-row ${t.highlight ? 'highlight' : ''}`}>
              <span className="name">
                {t.id}. {t.name}
                {t.highlight && <span className="topic-highlight" style={{ marginLeft: 8 }}>FOCUS</span>}
              </span>
              <span className="w">{t.weight} · {t.lms}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section-card">
        <h2>🎯 Now Building — FSA (LM 10–15)</h2>
        <p style={{ color: 'var(--text-dim)', margin: '0 0 16px' }}>
          FSA is a 10–15% exam topic. We start with{' '}
          <strong>LM 10: Intercorporate Investments</strong> — associates, consolidation,
          and JV accounting (IFRS vs US GAAP) — using the same template as every chapter:
        </p>
        <ol style={{ color: 'var(--text-dim)', paddingLeft: 22, lineHeight: 1.8 }}>
          <li>Concise concept notes (LOs, key terms, formulas)</li>
          <li>Quick formula sheet for revision</li>
          <li>CFA-style item sets (vignette + 4 MCQs) with detailed step-by-step solutions</li>
        </ol>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 14 }}>
          <button className="btn primary" onClick={onOpenLM10}>
            Open LM 10 — Intercorporate Investments →
          </button>
          <button className="btn" onClick={onOpenLM20}>
            LM 20 — Equity Valuation Apps →
          </button>
          <button className="btn" onClick={onOpenLM21}>
            LM 21 — DDM →
          </button>
        </div>
      </div>

      <div className="section-card">
        <h2>🗺️ Roadmap</h2>
        <ul style={{ color: 'var(--text-dim)', paddingLeft: 22, lineHeight: 1.8 }}>
          <li><strong>Current:</strong> FSA — Intercorporate Investments first, then LM 11–15</li>
          <li><strong>Also available:</strong> Equity LM 20 (Applications & Processes), LM 21 (DDM)</li>
          <li><strong>Next waves:</strong> Remaining Equity (LM 22–25), Fixed Income (LM 26–30), then Quant / PM / Derivatives / Alts / Ethics / Corporate / Econ</li>
        </ul>
        <p style={{ color: 'var(--text-mute)', fontSize: 13, marginTop: 16 }}>
          Reference: <a href="https://300hours.com/cfa-level-2-study-order/" target="_blank" rel="noopener">300Hours 2026 curriculum order ↗</a>
        </p>
      </div>
    </div>
  )
}

/* ----------------- Notes Tab ----------------- */
function NotesTab({ module }) {
  return (
    <div className="notes-content">
      <div className="section-card">
        <h2>📋 Learning Outcomes (CFA Institute)</h2>
        <div className="lo-list">
          {module.learningOutcomes.map((lo, i) => (
            <div key={i} className="lo-item">
              <span className="check">✓</span>
              <span>{lo}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section-card">
        <h2>🔑 Key Terms</h2>
        <div className="key-terms">
          {module.keyTerms.map((kt, i) => (
            <div key={i} className="term">
              <span className="t">{kt.term}</span>
              <span className="d">{kt.def}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="section-card">
        <h2>📚 Concept Notes</h2>
        {module.sections.map((s) => (
          <div key={s.id}>
            <h3>{s.title}</h3>
            {s.body.split('\n\n').map((para, i) => (
              <p key={i}>{renderInline(para)}</p>
            ))}
            {s.formula && <div className="formula-box">{s.formula}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ----------------- Formula Sheet Tab ----------------- */
function FormulasTab({ module }) {
  return (
    <div className="section-card">
      <h2>📐 Formula Sheet — Quick Reference</h2>
      <p style={{ color: 'var(--text-dim)', fontSize: 14, marginBottom: 16 }}>
        Memorize these. They drive most item-set calculations. Click any cell to copy.
      </p>
      <table className="formula-table">
        <thead>
          <tr>
            <th style={{ width: '32%' }}>Concept</th>
            <th>Formula</th>
          </tr>
        </thead>
        <tbody>
          {module.formulaSheet.map((f, i) => (
            <tr key={i}>
              <td>{f.name}</td>
              <td className="formula-cell" onClick={() => navigator.clipboard?.writeText(f.formula)} title="Click to copy">
                {f.formula}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ----------------- Item Set Player ----------------- */
function ItemSetPlayer({ itemSet, index, onProgress }) {
  const [answers, setAnswers] = useState({}) // {qid: optionIndex}
  const [submitted, setSubmitted] = useState({}) // {qid: true}
  const [revealed, setRevealed] = useState({}) // {qid: true}
  const [current, setCurrent] = useState(0)

  const q = itemSet.questions[current]
  const selected = answers[q.id]
  const isSubmitted = submitted[q.id]
  const isRevealed = revealed[q.id]
  const isCorrect = isSubmitted && selected === q.answer

  function pick(optIdx) {
    if (isSubmitted) return
    setAnswers({ ...answers, [q.id]: optIdx })
  }
  function submit() {
    if (selected === undefined) return
    setSubmitted({ ...submitted, [q.id]: true })
    onProgress && onProgress()
  }
  function reveal() {
    setRevealed({ ...revealed, [q.id]: true })
  }
  function reset() {
    const next = { ...answers }; delete next[q.id]
    const ns = { ...submitted }; delete ns[q.id]
    const nr = { ...revealed }; delete nr[q.id]
    setAnswers(next); setSubmitted(ns); setRevealed(nr)
  }

  const answeredCount = itemSet.questions.filter((qq) => submitted[qq.id]).length

  return (
    <div className="item-set">
      <div className="item-set-header">
        <h3>{itemSet.title}</h3>
        <span className="badge">VIGNETTE + 4 MCQs</span>
      </div>
      <div className="vignette">{itemSet.vignette}</div>

      <div className="question">
        <div className="question-text">
          <span className="qnum">{current + 1}</span>
          {q.question}
        </div>
        <div className="options">
          {q.options.map((opt, idx) => {
            let cls = 'option'
            if (isSubmitted) {
              if (idx === q.answer) cls += ' correct'
              else if (idx === selected) cls += ' incorrect'
            } else if (selected === idx) {
              cls += ' selected'
            }
            return (
              <button
                key={idx}
                className={cls}
                onClick={() => pick(idx)}
                disabled={isSubmitted}
              >
                <span className="option-letter">{String.fromCharCode(65 + idx)}</span>
                <span>{opt}</span>
              </button>
            )
          })}
        </div>

        {isSubmitted && (
          <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? '✓ Correct.' : `✗ Not quite. The correct answer is ${String.fromCharCode(65 + q.answer)}.`}
          </div>
        )}

        {isRevealed && (
          <div className="solution">
            <div className="ans-mark">ANSWER: {String.fromCharCode(65 + q.answer)}</div>
            {q.solution}
            <div className="lo-tag">{q.lo}</div>
          </div>
        )}

        <div className="question-actions">
          {!isSubmitted && (
            <button className="btn primary" onClick={submit} disabled={selected === undefined}>
              Submit answer
            </button>
          )}
          {isSubmitted && !isRevealed && (
            <button className="btn" onClick={reveal}>
              📖 Show detailed solution
            </button>
          )}
          {isSubmitted && (
            <button className="btn" onClick={reset}>
              Try again
            </button>
          )}
          {current < itemSet.questions.length - 1 ? (
            <button
              className="btn primary"
              onClick={() => setCurrent(current + 1)}
              style={{ marginLeft: 'auto' }}
            >
              Next question →
            </button>
          ) : (
            <span style={{ marginLeft: 'auto', color: 'var(--green)', fontSize: 13, fontWeight: 600 }}>
              🎉 End of item set
            </span>
          )}
          {current > 0 && (
            <button className="btn" onClick={() => setCurrent(current - 1)}>
              ← Previous
            </button>
          )}
        </div>
      </div>

      <div className="set-progress">
        <span>Item Set {index + 1} · Question {current + 1} of {itemSet.questions.length}</span>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${(answeredCount / itemSet.questions.length) * 100}%` }} />
        </div>
        <span>{answeredCount}/{itemSet.questions.length} answered</span>
      </div>
    </div>
  )
}

/* ----------------- Practice Tab ----------------- */
function PracticeTab({ itemSets }) {
  return (
    <div>
      <div className="section-card">
        <h2>✍️ Practice — CFA-Style Item Sets</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: 14, margin: 0 }}>
          {itemSets.length} item set{itemSets.length === 1 ? '' : 's'} ({itemSets.length * 4} MCQs total).
          Each set mirrors the real exam format: a vignette (case study) followed by four
          independent multiple-choice questions. Submit each answer, then reveal the detailed
          step-by-step solution.
        </p>
      </div>
      {itemSets.map((is, i) => (
        <ItemSetPlayer key={is.id} itemSet={is} index={i} />
      ))}
    </div>
  )
}

/* ----------------- Glassbox Math Tab ----------------- */
function GlassboxCard({ problem, index }) {
  const [revealed, setRevealed] = useState(false)

  return (
    <div className="glassbox-card">
      <div className="glassbox-header">
        <div>
          <span className="glassbox-num">Q{index + 1}</span>
          <span className="glassbox-topic">{problem.topic}</span>
        </div>
        <h3>{problem.title}</h3>
      </div>
      <div className="glassbox-question">{problem.question}</div>
      <div className="glassbox-actions">
        {!revealed ? (
          <button className="btn primary" onClick={() => setRevealed(true)}>
            Reveal first-principles solution
          </button>
        ) : (
          <button className="btn" onClick={() => setRevealed(false)}>
            Hide solution
          </button>
        )}
      </div>
      {revealed && (
        <div className="glassbox-solution">
          <div className="ans-mark">ANSWER: {problem.answer}</div>
          <p className="glassbox-principle">
            <strong>First principle.</strong> {renderInline(problem.principle)}
          </p>
          <ol className="glassbox-steps">
            {problem.steps.map((step, i) => (
              <li key={i}>
                <div className="glassbox-step-text">{renderInline(step.text)}</div>
                {step.formula && <div className="formula-box">{step.formula}</div>}
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  )
}

function GlassboxTab({ problems }) {
  return (
    <div>
      <div className="section-card">
        <h2>🔬 Glassbox Math — First Principles</h2>
        <p style={{ color: 'var(--text-dim)', fontSize: 14, margin: 0 }}>
          {problems.length} worked problems that transparently track how cash flows, excess
          depreciation, unrealized profits, goodwill, and impairment move through the statements
          under IFRS vs US GAAP. Attempt each question, then open the step-by-step derivation.
        </p>
      </div>
      {problems.map((p, i) => (
        <GlassboxCard key={p.id} problem={p} index={i} />
      ))}
    </div>
  )
}

/* ----------------- Module Detail ----------------- */
function ModuleDetail({ mod, onBack }) {
  const [tab, setTab] = useState('notes')
  const content = MODULE_CONTENT[mod.id]

  if (content) {
    const { module, itemSets, glassbox } = content
    return (
      <div className="module-detail">
        <div className="module-header">
          <div>
            <span className="module-tag">LM {module.id} · {module.topicName}</span>
            <h1>{module.title}</h1>
            <p className="sub">{module.subtitle}</p>
          </div>
          <div style={{ textAlign: 'right', color: 'var(--text-dim)', fontSize: 13 }}>
            <div>⏱ {module.estimatedTime}</div>
            <div>📊 {module.weight}</div>
          </div>
        </div>

        <div className="tab-bar">
          <button className={`tab ${tab === 'notes' ? 'active' : ''}`} onClick={() => setTab('notes')}>
            Notes
          </button>
          <button className={`tab ${tab === 'formulas' ? 'active' : ''}`} onClick={() => setTab('formulas')}>
            Formula Sheet
          </button>
          {glassbox && (
            <button className={`tab ${tab === 'glassbox' ? 'active' : ''}`} onClick={() => setTab('glassbox')}>
              Glassbox Math
              <span className="tab-pill">{glassbox.length}</span>
            </button>
          )}
          <button className={`tab ${tab === 'practice' ? 'active' : ''}`} onClick={() => setTab('practice')}>
            Practice MCQs
            <span className="tab-pill">{itemSets.length} sets</span>
          </button>
        </div>

        {tab === 'notes' && <NotesTab module={module} />}
        {tab === 'formulas' && <FormulasTab module={module} />}
        {tab === 'glassbox' && glassbox && <GlassboxTab problems={glassbox} />}
        {tab === 'practice' && <PracticeTab itemSets={itemSets} />}
      </div>
    )
  }

  // Other modules (placeholder)
  return (
    <div className="module-detail">
      <div className="module-header">
        <div>
          <span className="module-tag">LM {mod.id} · {mod.topicName}</span>
          <h1>{mod.title}</h1>
          <p className="sub">Coming soon to Panini Finance</p>
        </div>
      </div>
      <div className="section-card">
        <h2>🚧 Under construction</h2>
        <p style={{ color: 'var(--text-dim)' }}>
          This Learning Module will follow the same template as LM 10 / LM 21: concept notes →
          formula sheet → CFA-style item sets with detailed step-by-step solutions.
        </p>
        <p style={{ color: 'var(--text-dim)' }}>
          Current FSA build order:
        </p>
        <ul style={{ color: 'var(--text-dim)', lineHeight: 1.8 }}>
          <li>✅ LM 10 — Intercorporate Investments</li>
          <li>LM 11 — Employee Compensation: Post-Employment and Share-Based</li>
          <li>LM 12 — Multinational Operations</li>
          <li>LM 13 — Analysis of Financial Institutions</li>
          <li>LM 14 — Evaluating Quality of Financial Reports</li>
          <li>LM 15 — Integration of Financial Statement Analysis Techniques</li>
        </ul>
        <button className="btn primary" onClick={onBack} style={{ marginTop: 12 }}>
          ← Back to home
        </button>
      </div>
    </div>
  )
}

/* ----------------- App Root ----------------- */
export default function App() {
  const [level, setLevel] = useState(() => {
    try { return localStorage.getItem(LEVEL_KEY) || 'l2' } catch { return 'l2' }
  })
  const [activeModule, setActiveModule] = useState(null)
  const [expandedTopics, setExpandedTopics] = useState(new Set([3])) // FSA expanded by default

  useEffect(() => {
    try { localStorage.setItem(LEVEL_KEY, level) } catch { /* ignore */ }
  }, [level])

  function toggleTopic(id) {
    const next = new Set(expandedTopics)
    if (next.has(id)) next.delete(id)
    else next.add(id)
    setExpandedTopics(next)
  }

  function openLM10() {
    setActiveModule({ id: 10, title: LM10.title, topicId: 3, topicName: 'Financial Statement Analysis' })
  }

  function openLM20() {
    setActiveModule({ id: 20, title: LM20.title, topicId: 5, topicName: 'Equity Valuation' })
  }

  function openLM21() {
    setActiveModule({ id: 21, title: LM21.title, topicId: 5, topicName: 'Equity Valuation' })
  }

  if (level === 'l1') {
    return <Level1App onSwitchToL2={() => setLevel('l2')} onSwitchToL3={() => setLevel('l3')} />
  }

  if (level === 'l3') {
    return <Level3App onSwitchToL1={() => setLevel('l1')} onSwitchToL2={() => setLevel('l2')} />
  }

  return (
    <div className="app">
      <Sidebar
        activeModule={activeModule}
        onSelectModule={setActiveModule}
        expandedTopics={expandedTopics}
        toggleTopic={toggleTopic}
        onSwitchToL1={() => setLevel('l1')}
        onSwitchToL3={() => setLevel('l3')}
      />
      <main className="main">
        {activeModule ? (
          <ModuleDetail mod={activeModule} onBack={() => setActiveModule(null)} />
        ) : (
          <Welcome onOpenLM10={openLM10} onOpenLM20={openLM20} onOpenLM21={openLM21} onSwitchToL1={() => setLevel('l1')} onSwitchToL3={() => setLevel('l3')} />
        )}
      </main>
    </div>
  )
}
