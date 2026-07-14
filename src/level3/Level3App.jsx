import { useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bell,
  BookMarked,
  BookOpen,
  Bookmark,
  Calculator,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Circle,
  Clock3,
  Command,
  Flame,
  Gauge,
  GraduationCap,
  LayoutDashboard,
  Library,
  ListFilter,
  Menu,
  MoreHorizontal,
  Play,
  RotateCcw,
  Search,
  Settings,
  Sparkles,
  Target,
  TimerReset,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import { allModules, formulas, questions, topicLookup, topics } from "./data";
import "./styles.css";

const NAV_ITEMS = [
  { id: "dashboard", label: "Overview", icon: LayoutDashboard },
  { id: "curriculum", label: "Curriculum", icon: Library },
  { id: "practice", label: "Practice", icon: Target },
  { id: "formulas", label: "Formula deck", icon: Calculator },
];

const TOTAL_MODULES = 42;

const STORAGE_KEY = "panini-l3-progress-v1";
const TARGET_KEY = "panini-l3-target-v1";
const ACTIVITY_KEY = "panini-l3-activity-v1";

const FORMULA_GROUP_BY_TOPIC = {
  "asset-allocation": "asset",
  "portfolio-construction": "portfolio construction",
  "performance-measurement": "performance",
  "derivatives-risk": "derivatives",
  "pathway-pm": "portfolio construction",
  "pathway-pmk": "private markets",
};

function usePersistentState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved ? JSON.parse(saved) : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

function formatDate(dateString) {
  const date = new Date(`${dateString}T12:00:00`);
  return new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(date);
}

function dateKey(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function daysUntil(dateString) {
  const target = new Date(`${dateString}T23:59:59`);
  const today = new Date();
  return Math.max(0, Math.ceil((target - today) / 86400000));
}

function ProgressRing({ value, size = 126, stroke = 10, color = "#2c7890", label = true }) {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (Math.min(100, value) / 100) * circumference;
  return (
    <div className="progress-ring" style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle className="ring-track" cx={size / 2} cy={size / 2} r={radius} fill="none" strokeWidth={stroke} />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      {label && (
        <div className="ring-label">
          <strong>{Math.round(value)}%</strong>
          <span>covered</span>
        </div>
      )}
    </div>
  );
}

function TopicMark({ topic, size = "md" }) {
  return (
    <span className={`topic-mark ${size}`} style={{ background: topic.soft, color: topic.color }}>
      {topic.shortName.slice(0, 2).toUpperCase()}
    </span>
  );
}

function Sidebar({ active, setActive, open, setOpen, completedCount, onSwitchToL1, onSwitchToL2 }) {
  return (
    <>
      {open && <button className="mobile-scrim" onClick={() => setOpen(false)} aria-label="Close menu" />}
      <aside className={`sidebar ${open ? "open" : ""}`}>
        <div className="brand-row">
          <button className="brand" onClick={() => setActive("dashboard")} aria-label="Panini Finance home">
            <span className="brand-glyph"><span />₹</span>
            <span><strong>Panini</strong><em>Finance</em></span>
          </button>
          <button className="icon-btn sidebar-close" onClick={() => setOpen(false)} aria-label="Close menu"><X size={18} /></button>
        </div>

        <div className="program-chip" role="button" tabIndex={0} onClick={onSwitchToL2} onKeyDown={(e) => e.key === "Enter" && onSwitchToL2?.()} title="Switch to CFA Level II">
          <span className="program-icon"><GraduationCap size={18} /></span>
          <span><small>Study track</small><strong>CFA Level III · 2026</strong></span>
          <ChevronDown size={16} />
        </div>
        <div style={{ display: "flex", gap: 6, margin: "0 4px 18px" }}>
          <button className="ghost-button level-switch" onClick={onSwitchToL1} style={{ flex: 1, justifyContent: "center" }}>
            ← Level I
          </button>
          <button className="ghost-button level-switch" onClick={onSwitchToL2} style={{ flex: 1, justifyContent: "center" }}>
            Level II →
          </button>
        </div>

        <nav className="side-nav" aria-label="Primary">
          <p className="nav-heading">Workspace</p>
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={active === item.id ? "active" : ""}
                onClick={() => { setActive(item.id); setOpen(false); }}
              >
                <Icon size={19} strokeWidth={1.9} />
                <span>{item.label}</span>
                {item.id === "curriculum" && <small>{completedCount}/{TOTAL_MODULES}</small>}
              </button>
            );
          })}
        </nav>

        <div className="sidebar-spacer" />
        <div className="sidebar-goal">
          <div className="goal-top"><span><Zap size={15} /> Weekly goal</span><strong>{Math.min(7, completedCount % 8)}/7</strong></div>
          <div className="mini-progress"><span style={{ width: `${Math.min(100, ((completedCount % 8) / 7) * 100)}%` }} /></div>
          <p>Complete one learning module each day to stay on track.</p>
        </div>
        <div className="sidebar-footer">
          <div className="avatar">PF</div>
          <span><strong>Panini candidate</strong><small>Level III track</small></span>
          <MoreHorizontal size={18} />
        </div>
      </aside>
    </>
  );
}

function Topbar({ onMenu, query, setQuery, setActive, setSelectedModule }) {
  const [focused, setFocused] = useState(false);
  const matches = useMemo(() => {
    if (!query.trim()) return [];
    const term = query.toLowerCase();
    return allModules.filter((m) => `${m.title} ${m.topicName} ${m.summary}`.toLowerCase().includes(term)).slice(0, 6);
  }, [query]);

  function openResult(module) {
    setSelectedModule(module);
    setActive("curriculum");
    setQuery("");
    setFocused(false);
  }

  return (
    <header className="topbar">
      <button className="icon-btn menu-button" onClick={onMenu} aria-label="Open menu"><Menu size={21} /></button>
      <div className="global-search">
        <Search size={19} />
        <input
          aria-label="Search curriculum"
          placeholder={`Search ${TOTAL_MODULES} modules, topics, or concepts…`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
        />
        <span className="search-shortcut"><Command size={12} /> K</span>
        {focused && query && (
          <div className="search-results">
            <div className="search-result-heading"><span>Curriculum results</span><small>{matches.length} shown</small></div>
            {matches.length ? matches.map((module) => (
              <button key={module.id} onMouseDown={() => openResult(module)}>
                <TopicMark topic={topicLookup[module.topicId]} size="sm" />
                <span><strong>{module.title}</strong><small>LM {module.number} · {module.topicName}</small></span>
                <ArrowRight size={16} />
              </button>
            )) : <p className="empty-search">No matching modules. Try “duration” or “pathway”.</p>}
          </div>
        )}
      </div>
      <div className="topbar-actions">
        <button className="icon-btn notification" aria-label="Notifications"><Bell size={19} /><i /></button>
        <div className="top-avatar">PF</div>
      </div>
    </header>
  );
}

function Dashboard({ completed, toggleComplete, targetDate, setTargetDate, openModule, goTo }) {
  const completedCount = completed.length;
  const progress = (completedCount / TOTAL_MODULES) * 100;
  const incomplete = allModules.filter((m) => !completed.includes(m.id));
  const focusModules = incomplete.slice(0, 3);
  const minutesDone = allModules.filter((m) => completed.includes(m.id)).reduce((sum, m) => sum + m.minutes, 0);
  const now = new Date();
  const greeting = now.getHours() < 12 ? "Good morning" : now.getHours() < 18 ? "Good afternoon" : "Good evening";
  const longDate = new Intl.DateTimeFormat("en-IN", { weekday: "long", month: "long", day: "numeric" }).format(now);

  const topicProgress = topics.map((topic) => ({
    ...topic,
    done: topic.modules.filter((m) => completed.includes(m.id)).length,
    pct: Math.round((topic.modules.filter((m) => completed.includes(m.id)).length / topic.modules.length) * 100),
  }));

  return (
    <div className="page dashboard-page">
      <div className="welcome-line">
        <div><p>{longDate}</p><h1>{greeting}.</h1><span>Common core first, then your chosen pathway.</span></div>
        <button className="ghost-button" onClick={() => goTo("curriculum")}><Library size={17} /> Browse curriculum</button>
      </div>

      <section className="hero-card">
        <div className="hero-copy">
          <span className="eyebrow light"><Sparkles size={15} /> YOUR LEVEL III JOURNEY</span>
          <h2>From analyst<br /><em>to portfolio manager.</em></h2>
          <p>You’ve completed <strong>{completedCount} of {TOTAL_MODULES}</strong> learning modules across the common core and all three elective pathways. Keep your next action simple and your momentum visible.</p>
          <button className="primary light-button" onClick={() => focusModules[0] && openModule(focusModules[0])}>
            <Play size={16} fill="currentColor" /> {focusModules.length ? "Continue learning" : "Review curriculum"}
          </button>
        </div>
        <div className="hero-progress">
          <ProgressRing value={progress} />
          <div className="exam-date-card">
            <div><CalendarDays size={17} /><span><small>Exam target</small><strong>{formatDate(targetDate)}</strong></span></div>
            <strong className="days-left">{daysUntil(targetDate)}<small>days</small></strong>
            <input type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} aria-label="Change target exam date" />
          </div>
        </div>
        <div className="hero-grid" aria-hidden="true" />
      </section>

      <div className="stat-grid">
        <article className="stat-card coral"><span><CheckCircle2 size={20} /></span><div><small>Modules covered</small><strong>{completedCount}<em>/ {TOTAL_MODULES}</em></strong><p>{TOTAL_MODULES - completedCount} left in your track</p></div></article>
        <article className="stat-card teal"><span><Clock3 size={20} /></span><div><small>Study time logged</small><strong>{Math.floor(minutesDone / 60)}<em>h {minutesDone % 60}m</em></strong><p>Based on completed modules</p></div></article>
        <article className="stat-card amber"><span><Flame size={20} /></span><div><small>Current streak</small><strong>{completedCount ? Math.min(12, Math.max(1, completedCount % 13)) : 0}<em> days</em></strong><p>Return tomorrow to extend it</p></div></article>
        <article className="stat-card violet"><span><Trophy size={20} /></span><div><small>Curriculum coverage</small><strong>{Math.round(progress)}<em>%</em></strong><p>{topicProgress.filter((t) => t.pct === 100).length} topics completed</p></div></article>
      </div>

      <div className="dashboard-grid">
        <section className="surface focus-section">
          <div className="section-heading">
            <div><span className="eyebrow">TODAY’S FOCUS</span><h3>Next on your path</h3></div>
            <button className="text-button" onClick={() => goTo("curriculum")}>View all <ArrowRight size={15} /></button>
          </div>
          <div className="focus-list">
            {focusModules.map((module, index) => {
              const topic = topicLookup[module.topicId];
              return (
                <article className="focus-item" key={module.id}>
                  <div className="focus-index">{String(index + 1).padStart(2, "0")}</div>
                  <TopicMark topic={topic} />
                  <div className="focus-content">
                    <span style={{ color: topic.color }}>{topic.shortName} · LM {module.number}</span>
                    <button onClick={() => openModule(module)}>{module.title}</button>
                    <small><Clock3 size={13} /> {module.minutes} min <i /> {module.difficulty}</small>
                  </div>
                  <button className="round-play" style={{ color: topic.color, background: topic.soft }} onClick={() => openModule(module)} aria-label={`Open ${module.title}`}><Play size={17} fill="currentColor" /></button>
                </article>
              );
            })}
            {!focusModules.length && <div className="celebration"><Trophy size={34} /><h4>Curriculum complete</h4><p>Excellent work. Shift your attention to review and timed practice.</p></div>}
          </div>
        </section>

        <section className="surface snapshot-section">
          <div className="section-heading"><div><span className="eyebrow">CURRICULUM MAP</span><h3>Topic coverage</h3></div><button className="icon-btn"><MoreHorizontal size={18} /></button></div>
          <div className="coverage-list">
            {topicProgress.map((topic) => (
              <button key={topic.id} onClick={() => goTo("curriculum", topic.id)}>
                <span className="coverage-dot" style={{ background: topic.color }} />
                <span className="coverage-name"><strong>{topic.shortName}</strong><small>{topic.done}/{topic.modules.length} modules</small></span>
                <span className="coverage-bar"><i style={{ width: `${topic.pct}%`, background: topic.color }} /></span>
                <b>{topic.pct}%</b>
              </button>
            ))}
          </div>
        </section>
      </div>

      <section className="quote-strip">
        <div className="quote-mark">“</div>
        <p>Level III rewards judgment: knowing which tool fits the client, not just how the tool works.</p>
        <span>STUDY PRINCIPLE · APPLICATION OVER RECALL</span>
      </section>
    </div>
  );
}

function Curriculum({ completed, toggleComplete, selectedModule, setSelectedModule, initialTopic, startTimer }) {
  const [topicFilter, setTopicFilter] = useState(initialTopic || "all");
  const [statusFilter, setStatusFilter] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (initialTopic) setTopicFilter(initialTopic);
  }, [initialTopic]);

  const filtered = useMemo(() => allModules.filter((module) => {
    const matchesTopic = topicFilter === "all" || module.topicId === topicFilter;
    const isDone = completed.includes(module.id);
    const matchesStatus = statusFilter === "all" || (statusFilter === "complete" ? isDone : !isDone);
    const matchesQuery = `${module.title} ${module.summary}`.toLowerCase().includes(query.toLowerCase());
    return matchesTopic && matchesStatus && matchesQuery;
  }), [topicFilter, statusFilter, query, completed]);

  const visibleTopics = topics.filter((topic) => topicFilter === "all" || topic.id === topicFilter);

  return (
    <div className="page curriculum-page">
      <div className="page-title-row">
        <div><span className="eyebrow">2026 CURRICULUM</span><h1>Learning library</h1><p>5 core topics · 3 elective pathways · {TOTAL_MODULES} learning modules</p></div>
        <div className="title-progress"><ProgressRing value={(completed.length / TOTAL_MODULES) * 100} size={60} stroke={6} label={false} /><span><strong>{completed.length}/{TOTAL_MODULES}</strong><small>modules covered</small></span></div>
      </div>

      <div className="curriculum-toolbar surface">
        <div className="local-search"><Search size={18} /><input placeholder="Find a module or concept…" value={query} onChange={(e) => setQuery(e.target.value)} /></div>
        <label className="select-wrap"><ListFilter size={16} /><select value={topicFilter} onChange={(e) => setTopicFilter(e.target.value)}><option value="all">All topics</option>{topics.map((topic) => <option key={topic.id} value={topic.id}>{topic.name}</option>)}</select><ChevronDown size={15} /></label>
        <label className="select-wrap"><Circle size={15} /><select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}><option value="all">Any status</option><option value="todo">Not started</option><option value="complete">Completed</option></select><ChevronDown size={15} /></label>
      </div>

      <div className="topic-pills" aria-label="Topic filters">
        <button className={topicFilter === "all" ? "active" : ""} onClick={() => setTopicFilter("all")}>All <span>{TOTAL_MODULES}</span></button>
        {topics.map((topic) => <button key={topic.id} className={topicFilter === topic.id ? "active" : ""} onClick={() => setTopicFilter(topic.id)}>{topic.shortName} <span>{topic.modules.length}</span></button>)}
      </div>

      <div className="library-layout">
        <div className="module-catalog">
          {visibleTopics.map((topic) => {
            const topicModules = filtered.filter((module) => module.topicId === topic.id);
            if (!topicModules.length) return null;
            const done = topic.modules.filter((m) => completed.includes(m.id)).length;
            return (
              <section className="topic-group surface" key={topic.id}>
                <header>
                  <TopicMark topic={topic} />
                  <div><h2>{topic.name}</h2><p>{topic.description}</p></div>
                  <span className="weight-chip" style={{ background: topic.soft, color: topic.color }}>{topic.weight} weight</span>
                  <div className="topic-done"><strong>{done}/{topic.modules.length}</strong><span><i style={{ width: `${(done / topic.modules.length) * 100}%`, background: topic.color }} /></span></div>
                </header>
                <div className="module-table-head"><span>Module</span><span>Level</span><span>Time</span><span>Status</span></div>
                {topicModules.map((module) => {
                  const isDone = completed.includes(module.id);
                  const isSelected = selectedModule?.id === module.id;
                  return (
                    <article className={`module-row ${isSelected ? "selected" : ""}`} key={module.id} onClick={() => setSelectedModule(module)}>
                      <span className="module-number">{module.number}</span>
                      <div className="module-name"><strong>{module.title}</strong><small>{module.summary}</small></div>
                      <span className={`difficulty ${module.difficulty.toLowerCase()}`}>{module.difficulty}</span>
                      <span className="module-time"><Clock3 size={14} />{module.minutes}m</span>
                      <button className={`status-check ${isDone ? "done" : ""}`} onClick={(e) => { e.stopPropagation(); toggleComplete(module.id); }} aria-label={isDone ? "Mark incomplete" : "Mark complete"}>{isDone ? <Check size={15} /> : <Circle size={15} />}</button>
                      <ChevronRight className="row-chevron" size={17} />
                    </article>
                  );
                })}
              </section>
            );
          })}
          {!filtered.length && <div className="no-results surface"><Search size={32} /><h3>No modules found</h3><p>Change a filter or try another search term.</p></div>}
        </div>

        {selectedModule && (
          <ModulePanel module={selectedModule} completed={completed.includes(selectedModule.id)} onClose={() => setSelectedModule(null)} toggleComplete={toggleComplete} startTimer={startTimer} />
        )}
      </div>
    </div>
  );
}

function ModulePanel({ module, completed, onClose, toggleComplete, startTimer }) {
  const topic = topicLookup[module.topicId];
  const groupHint = FORMULA_GROUP_BY_TOPIC[module.topicId];
  const relatedFormula = groupHint && formulas.find((f) => f.group.toLowerCase().includes(groupHint));
  const keywords = module.title
    .replace(/\b(and|the|of|to|in|an|a|for|using|introduction|overview)\b/gi, "")
    .split(/[,:–-]/)
    .join(" ")
    .split(/\s+/)
    .filter((word) => word.length > 4)
    .slice(0, 4);

  return (
    <aside className="module-panel surface">
      <div className="panel-top">
        <span className="module-label" style={{ color: topic.color }}><i style={{ background: topic.color }} /> {topic.shortName} · LM {module.number}</span>
        <button className="icon-btn" onClick={onClose} aria-label="Close details"><X size={18} /></button>
      </div>
      <h2>{module.title}</h2>
      <div className="panel-meta"><span><Gauge size={15} />{module.difficulty}</span><span><Clock3 size={15} />{module.minutes} min</span><span><BarChart3 size={15} />{topic.weight}</span></div>
      <div className="panel-rule" />
      <section><span className="eyebrow">MODULE BRIEF</span><p className="panel-summary">{module.summary}</p></section>
      <section>
        <span className="eyebrow">LEARNING CHECKS</span>
        <ul className="learning-list">
          <li><span>01</span><p>Explain the core relationships in <strong>{module.title.toLowerCase()}</strong> using precise exam language.</p></li>
          <li><span>02</span><p>Apply the framework to a constructed-response-style client or portfolio scenario.</p></li>
          <li><span>03</span><p>Justify the recommendation, recognize common traps, and state its practical limitation.</p></li>
        </ul>
      </section>
      {relatedFormula && <section className="formula-peek"><span><Calculator size={16} /> RELATED FORMULA</span><strong>{relatedFormula.name}</strong><code>{relatedFormula.formula}</code></section>}
      <section><span className="eyebrow">KEY TERMS</span><div className="tag-list">{keywords.map((word) => <span key={word}>#{word.toLowerCase()}</span>)}<span>#exam-ready</span></div></section>
      <div className="panel-actions">
        <button className="primary" onClick={() => startTimer(module)}><Play size={16} fill="currentColor" /> Start focus session</button>
        <button className={`complete-button ${completed ? "done" : ""}`} onClick={() => toggleComplete(module.id)}>{completed ? <><CheckCircle2 size={17} /> Completed</> : <><Circle size={17} /> Mark complete</>}</button>
      </div>
    </aside>
  );
}

function Practice({ completed }) {
  const [topic, setTopic] = useState("all");
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [revealed, setRevealed] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(0);
  const [finished, setFinished] = useState(false);

  const pool = useMemo(() => topic === "all" ? questions : questions.filter((q) => q.topic === topic), [topic]);
  const question = pool[index] || pool[0];

  useEffect(() => {
    setIndex(0); setSelected(null); setRevealed(false); setScore(0); setAnswered(0); setFinished(false);
  }, [topic]);

  function checkAnswer() {
    if (selected === null || revealed) return;
    setRevealed(true);
    setAnswered((n) => n + 1);
    if (selected === question.answer) setScore((n) => n + 1);
  }

  function nextQuestion() {
    if (index >= pool.length - 1) { setFinished(true); return; }
    setIndex((n) => n + 1); setSelected(null); setRevealed(false);
  }

  function restart() {
    setIndex(0); setSelected(null); setRevealed(false); setScore(0); setAnswered(0); setFinished(false);
  }

  const topicStats = topics.map((t) => ({
    ...t,
    count: questions.filter((q) => q.topic === t.id).length,
    coverage: Math.round((t.modules.filter((m) => completed.includes(m.id)).length / t.modules.length) * 100),
  }));

  return (
    <div className="page practice-page">
      <div className="page-title-row">
        <div><span className="eyebrow">ACTIVE RECALL</span><h1>Practice room</h1><p>Short questions. Immediate explanations. Better retention.</p></div>
        <div className="practice-score"><span><Trophy size={19} /></span><div><small>Session score</small><strong>{answered ? Math.round((score / answered) * 100) : 0}%</strong></div></div>
      </div>

      <div className="practice-layout">
        <aside className="practice-sidebar surface">
          <span className="eyebrow">QUESTION SET</span>
          <button className={topic === "all" ? "active" : ""} onClick={() => setTopic("all")}><span className="all-topic-icon"><BookOpen size={16} /></span><strong>Mixed curriculum</strong><small>{questions.length}</small></button>
          {topicStats.filter((t) => t.count > 0).map((t) => <button key={t.id} className={topic === t.id ? "active" : ""} onClick={() => setTopic(t.id)}><span className="color-dot" style={{ background: t.color }} /><strong>{t.shortName}</strong><small>{t.count}</small></button>)}
          <div className="practice-tip"><Sparkles size={17} /><strong>Study tip</strong><p>Answer before looking at notes. Retrieval—not rereading—builds durable recall.</p></div>
        </aside>

        <main className="question-stage surface">
          {finished ? (
            <div className="results-view">
              <div className="result-icon"><Trophy size={36} /></div>
              <span className="eyebrow">SET COMPLETE</span>
              <h2>{score}/{answered} correct</h2>
              <p>{score / answered >= 0.7 ? "Strong work. Review the explanations you missed, then come back tomorrow." : "Every miss is a useful signal. Review the linked modules and try again."}</p>
              <ProgressRing value={(score / answered) * 100} size={112} stroke={9} />
              <button className="primary" onClick={restart}><RotateCcw size={16} /> Restart set</button>
            </div>
          ) : question && (
            <>
              <div className="question-topline">
                <span>Question {index + 1} <i>/ {pool.length}</i></span>
                <span className="question-topic" style={{ color: topicLookup[question.topic].color, background: topicLookup[question.topic].soft }}>{topicLookup[question.topic].shortName} · LM {question.module}</span>
                <button className="icon-btn"><Bookmark size={18} /></button>
              </div>
              <div className="question-progress"><span style={{ width: `${((index + 1) / pool.length) * 100}%` }} /></div>
              <h2>{question.prompt}</h2>
              <div className="option-list">
                {question.options.map((option, optionIndex) => {
                  const state = revealed ? optionIndex === question.answer ? "correct" : optionIndex === selected ? "incorrect" : "muted" : selected === optionIndex ? "selected" : "";
                  return <button key={option} className={state} onClick={() => !revealed && setSelected(optionIndex)}><span>{String.fromCharCode(65 + optionIndex)}</span><strong>{option}</strong>{revealed && optionIndex === question.answer && <CheckCircle2 size={20} />}{revealed && optionIndex === selected && optionIndex !== question.answer && <X size={20} />}</button>;
                })}
              </div>
              {revealed && <div className={`explanation ${selected === question.answer ? "success" : "review"}`}><span>{selected === question.answer ? <CheckCircle2 size={19} /> : <BookMarked size={19} />}</span><div><strong>{selected === question.answer ? "Correct" : "Review this concept"}</strong><p>{question.explanation}</p></div></div>}
              <div className="question-footer">
                <span>{selected === null ? "Select your best answer" : revealed ? `${score} correct in this set` : "Ready to check?"}</span>
                {!revealed ? <button className="primary" disabled={selected === null} onClick={checkAnswer}>Check answer <ArrowRight size={16} /></button> : <button className="primary" onClick={nextQuestion}>{index === pool.length - 1 ? "View results" : "Next question"} <ArrowRight size={16} /></button>}
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}

function FormulaDeck() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("all");
  const [flipped, setFlipped] = useState([]);
  const groups = [...new Set(formulas.map((f) => f.group))];
  const filtered = formulas.filter((f) => (group === "all" || f.group === group) && `${f.name} ${f.formula} ${f.note}`.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="page formulas-page">
      <div className="page-title-row">
        <div><span className="eyebrow">QUICK REFERENCE</span><h1>Formula deck</h1><p>{formulas.length} high-frequency relationships, built for active review.</p></div>
        <button className="ghost-button" onClick={() => setFlipped(filtered.map((f) => f.name))}><RotateCcw size={16} /> Reveal all</button>
      </div>
      <div className="formula-toolbar surface"><div className="local-search"><Search size={18} /><input placeholder="Search formulas…" value={query} onChange={(e) => setQuery(e.target.value)} /></div><div className="formula-filters"><button className={group === "all" ? "active" : ""} onClick={() => setGroup("all")}>All</button>{groups.map((g) => <button className={group === g ? "active" : ""} onClick={() => setGroup(g)} key={g}>{g}</button>)}</div></div>
      <div className="formula-grid">
        {filtered.map((formula, idx) => {
          const isFlipped = flipped.includes(formula.name);
          return (
            <button className={`formula-card ${isFlipped ? "flipped" : ""}`} key={formula.name} onClick={() => setFlipped((current) => current.includes(formula.name) ? current.filter((name) => name !== formula.name) : [...current, formula.name])}>
              <div className="formula-front"><span>{String(idx + 1).padStart(2, "0")}</span><small>{formula.group}</small><h3>{formula.name}</h3><p>Tap to reveal</p><ChevronRight size={17} /></div>
              <div className="formula-back"><small>{formula.group}</small><h3>{formula.name}</h3><code>{formula.formula}</code><p>{formula.note}</p><span><RotateCcw size={14} /> Hide formula</span></div>
            </button>
          );
        })}
      </div>
      {!filtered.length && <div className="no-results surface"><Calculator size={32} /><h3>No formulas found</h3><p>Try a different name or topic group.</p></div>}
      <div className="formula-note"><BookMarked size={18} /><p><strong>Remember:</strong> formulas are useful only when you understand their inputs, assumptions, and interpretation. Test each one with a small numerical example.</p></div>
    </div>
  );
}

function FocusTimer({ module, onClose, onComplete }) {
  const [seconds, setSeconds] = useState(module ? module.minutes * 60 : 0);
  const [running, setRunning] = useState(true);
  const initial = useRef(module ? module.minutes * 60 : 1);

  useEffect(() => {
    if (!running || seconds <= 0) return;
    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [running, seconds]);

  if (!module) return null;
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  const pct = ((initial.current - seconds) / initial.current) * 100;
  return (
    <div className="timer-overlay">
      <div className="timer-modal">
        <button className="icon-btn timer-close" onClick={onClose}><X size={18} /></button>
        <span className="eyebrow">FOCUS SESSION</span>
        <p>{topicLookup[module.topicId].shortName} · LM {module.number}</p>
        <h2>{module.title}</h2>
        <div className="timer-ring"><ProgressRing value={pct} size={184} stroke={9} label={false} /><strong>{String(minutes).padStart(2, "0")}:{String(secs).padStart(2, "0")}</strong><span>{running ? "Focus time" : "Paused"}</span></div>
        <p className="timer-prompt">One module. Notifications away. Write down the one idea you must remember.</p>
        <div className="timer-actions"><button className="ghost-button" onClick={() => setRunning((r) => !r)}>{running ? "Pause" : "Resume"}</button><button className="primary" onClick={() => { onComplete(module.id); onClose(); }}><Check size={16} /> Finish session</button></div>
      </div>
    </div>
  );
}

export default function Level3App({ onSwitchToL1, onSwitchToL2 }) {
  const [active, setActive] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [completed, setCompleted] = usePersistentState(STORAGE_KEY, []);
  const [targetDate, setTargetDate] = usePersistentState(TARGET_KEY, "2026-11-16");
  const [activity, setActivity] = usePersistentState(ACTIVITY_KEY, []);
  const [selectedModule, setSelectedModule] = useState(null);
  const [timerModule, setTimerModule] = useState(null);
  const [globalQuery, setGlobalQuery] = useState("");
  const [initialTopic, setInitialTopic] = useState(null);

  useEffect(() => {
    function shortcut(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        document.querySelector(".level3-root .global-search input")?.focus();
      }
    }
    window.addEventListener("keydown", shortcut);
    return () => window.removeEventListener("keydown", shortcut);
  }, []);

  function toggleComplete(id) {
    setCompleted((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
    setActivity((current) => current.includes(dateKey()) ? current : [...current, dateKey()]);
  }

  function openModule(module) {
    setSelectedModule(module);
    setInitialTopic(module.topicId);
    setActive("curriculum");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function goTo(page, topicId = null) {
    setInitialTopic(topicId);
    setActive(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="level3-root">
      <div className="app-shell">
        <Sidebar active={active} setActive={goTo} open={sidebarOpen} setOpen={setSidebarOpen} completedCount={completed.length} onSwitchToL1={onSwitchToL1} onSwitchToL2={onSwitchToL2} />
        <main className="main-shell">
          <Topbar onMenu={() => setSidebarOpen(true)} query={globalQuery} setQuery={setGlobalQuery} setActive={setActive} setSelectedModule={setSelectedModule} />
          {active === "dashboard" && <Dashboard completed={completed} toggleComplete={toggleComplete} targetDate={targetDate} setTargetDate={setTargetDate} openModule={openModule} goTo={goTo} />}
          {active === "curriculum" && <Curriculum completed={completed} toggleComplete={toggleComplete} selectedModule={selectedModule} setSelectedModule={setSelectedModule} initialTopic={initialTopic} startTimer={setTimerModule} />}
          {active === "practice" && <Practice completed={completed} />}
          {active === "formulas" && <FormulaDeck />}
          <footer className="app-footer"><span>Panini Finance · CFA Level III</span><span>Aligned to the 2026 Level III topic outline · Not affiliated with CFA Institute</span></footer>
        </main>
        <nav className="mobile-nav">
          {NAV_ITEMS.map((item) => { const Icon = item.icon; return <button key={item.id} className={active === item.id ? "active" : ""} onClick={() => goTo(item.id)}><Icon size={20} /><span>{item.label === "Formula deck" ? "Formulas" : item.label}</span></button>; })}
        </nav>
        {timerModule && <FocusTimer module={timerModule} onClose={() => setTimerModule(null)} onComplete={(id) => { if (!completed.includes(id)) toggleComplete(id); }} />}
      </div>
    </div>
  );
}
