"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";

const QUESTIONS = [
  { id: 1, sub: "SLEEP", text: "I wake up tired even after what should be enough hours in bed." },
  { id: 2, sub: "SLEEP", text: "I need caffeine before I start feeling like a functioning person." },
  { id: 3, sub: "SLEEP", text: "I get a predictable afternoon crash, or feel wired at night but dead in the morning." },
  { id: 4, sub: "FUEL", text: "My energy and mood swing depending on when I last ate." },
  { id: 5, sub: "FUEL", text: "I get brain fog, headaches, or lightheadedness that I've mostly stopped noticing." },
  { id: 6, sub: "FUEL", text: "I crave sugar or snack late at night more than I'd like to." },
  { id: 7, sub: "MOVE", text: "I feel low-energy despite getting what should be enough rest." },
  { id: 8, sub: "MOVE", text: "My neck, back, or hips are tight or stiff most days." },
  { id: 9, sub: "MOVE", text: "Movement feels harder than it used to, and restlessness makes my sleep worse." },
  { id: 10, sub: "STRESS", text: "I'm always “on” and rarely feel fully off, even on days off." },
  { id: 11, sub: "STRESS", text: "Scrolling is my main way of trying to recover." },
  { id: 12, sub: "STRESS", text: "I feel “busy tired” even after a day that was technically restful." },
  { id: 13, sub: "PAIN", text: "I've normalized some chronic discomfort I probably shouldn't have." },
  { id: 14, sub: "PAIN", text: "I get frequent minor illness, or my sleep is disrupted by pain or symptoms." },
  { id: 15, sub: "PAIN", text: "Pushing through pain or illness feels like my normal operating mode, not the exception." },
];

const SUBSCALES = {
  SLEEP: {
    label: "Sleep debt / circadian chaos",
    code: "SLEEP",
    note: "how consistently your sleep is actually restoring you",
    fix: "Anchor one consistent wake time, set a caffeine cutoff eight hours before bed, and add a twenty-minute wind-down before sleep.",
  },
  FUEL: {
    label: "Unstable fuel / hydration",
    code: "FUEL",
    note: "how steady your energy is across meals and the day",
    fix: "Protein at your first meal, a glass of water before caffeine, and one glass mid-day. Stability beats perfection.",
  },
  MOVE: {
    label: "Sedentary + stiffness",
    code: "MOVE",
    note: "how much your body is carrying unused tension",
    fix: "Three two-to-four-minute movement snacks through the day, plus a short walk after one meal.",
  },
  STRESS: {
    label: "Chronic stress / no recovery",
    code: "STRESS",
    note: "whether you ever actually get to power down",
    fix: "One daily two-to-ten-minute deliberate downshift — long-exhale breathing, a phone-free walk, or a body scan.",
  },
  PAIN: {
    label: "Pain / illness as hidden drains",
    code: "PAIN",
    note: "whether discomfort has quietly become your baseline",
    fix: "This one often isn't a lifestyle tweak — it may be worth addressing the underlying pain or symptoms directly rather than working around them.",
  },
};

const SCALE = [
  { v: 1, label: "Not like me" },
  { v: 2, label: "A little like me" },
  { v: 3, label: "Somewhat like me" },
  { v: 4, label: "Mostly like me" },
  { v: 5, label: "Very much like me" },
];

function getBand(total) {
  if (total <= 33) return {
    label: "Stable Reserve",
    blurb: "Your energy budget looks mostly balanced — income roughly covers expenses, and leaks are minor. Worth still knowing which cluster below scored highest, since that's where drift usually starts.",
  };
  if (total <= 48) return {
    label: "Running a Deficit",
    blurb: "One or two systems are quietly costing you more than they're paying back. Nothing urgent, but this is the stage where a small fix is cheap and a delay isn't.",
  };
  if (total <= 63) return {
    label: "Draining Fast",
    blurb: "Multiple systems are under strain at once. This is the range where hardware starts limiting everything above it — mood, patience, focus — and it stops looking like a hardware problem.",
  };
  return {
    label: "Battery Critical",
    blurb: "Your hardware layer needs to be the priority before anything else has a real chance of sticking. This isn't a character problem. It's a power supply problem.",
  };
}

function Gauge({ value, size = 260 }) {
  const angle = -90 + value * 180;
  const cx = 130, cy = 140, r = 108;
  const ticks = [0, 0.25, 0.5, 0.75, 1];

  const polarToXY = (frac, radius) => {
    const a = (-90 + frac * 180) * (Math.PI / 180);
    return { x: cx + radius * Math.cos(a), y: cy + radius * Math.sin(a) };
  };

  const arcStart = polarToXY(0, r);
  const arcEnd = polarToXY(1, r);

  return (
    <svg width={size} height={size * 0.62} viewBox="0 0 260 165" className="mx-auto block">
      <path
        d={`M ${arcStart.x} ${arcStart.y} A ${r} ${r} 0 0 1 ${arcEnd.x} ${arcEnd.y}`}
        fill="none"
        stroke="#B9B2A0"
        strokeWidth="2"
      />
      {ticks.map((t, i) => {
        const inner = polarToXY(t, r - 10);
        const outer = polarToXY(t, r + 4);
        return (
          <line key={i} x1={inner.x} y1={inner.y} x2={outer.x} y2={outer.y} stroke="#A8783A" strokeWidth="2" />
        );
      })}
      <text x={arcStart.x - 4} y={arcStart.y + 18} textAnchor="start" fontFamily="var(--font-plex-mono)" fontSize="9" fill="#4A544C" letterSpacing="0.5">LOW</text>
      <text x={arcEnd.x + 4} y={arcEnd.y + 18} textAnchor="end" fontFamily="var(--font-plex-mono)" fontSize="9" fill="#4A544C" letterSpacing="0.5">HIGH</text>

      <g style={{ transform: `rotate(${angle}deg)`, transformOrigin: `${cx}px ${cy}px`, transition: "transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)" }}>
        <line x1={cx} y1={cy} x2={cx} y2={cy - r + 22} stroke="#0067D6" strokeWidth="3" strokeLinecap="round" />
        <circle cx={cx} cy={cy - r + 22} r="4" fill="#0067D6" className="needle-tip" />
      </g>
      <circle cx={cx} cy={cy} r="7" fill="#1B2420" />
      <circle cx={cx} cy={cy} r="3" fill="#C79A5C" />
    </svg>
  );
}

function SubMeter({ label, code, note, score }) {
  const pct = Math.round((score / 15) * 100);
  return (
    <div className="mb-4">
      <div className="flex items-baseline justify-between mb-1">
        <span className="font-body text-sm text-ink">
          {label} <span className="font-mono text-[10px] text-brass">· {code}</span>
        </span>
        <span className="font-mono text-xs text-inkSoft">{score}/15</span>
      </div>
      <div className="h-2 w-full rounded-sm overflow-hidden bg-panelDark">
        <div className="h-full bg-signal" style={{ width: `${pct}%`, transition: "width 1s cubic-bezier(0.22,1,0.36,1)" }} />
      </div>
      <p className="font-body text-xs mt-1 text-inkSoft">{note}</p>
    </div>
  );
}

export default function EnergyAudit() {
  const [stage, setStage] = useState("intro");
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [qIndex, setQIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const total = useMemo(() => answers.reduce((s, a) => s + (a || 0), 0), [answers]);
  const maxTotal = QUESTIONS.length * 5;
  const liveFraction = Math.min(total / maxTotal, 1);

  const subtotals = useMemo(() => {
    const t = { SLEEP: 0, FUEL: 0, MOVE: 0, STRESS: 0, PAIN: 0 };
    QUESTIONS.forEach((q, i) => { t[q.sub] += answers[i] || 0; });
    return t;
  }, [answers]);

  useEffect(() => {
    if (stage === "results") {
      setAnimate(false);
      const t = setTimeout(() => setAnimate(true), 120);
      return () => clearTimeout(t);
    }
  }, [stage]);

  const band = getBand(total);
  const dominant = Object.entries(subtotals).sort((a, b) => b[1] - a[1])[0][0];

  const selectAnswer = (val) => {
    const next = [...answers];
    next[qIndex] = val;
    setAnswers(next);
  };

  const goNext = () => {
    if (qIndex < QUESTIONS.length - 1) setQIndex(qIndex + 1);
    else setStage("results");
  };
  const goBack = () => { if (qIndex > 0) setQIndex(qIndex - 1); };

  const reset = () => {
    setAnswers(Array(QUESTIONS.length).fill(null));
    setQIndex(0);
    setStage("intro");
  };

  const q = QUESTIONS[qIndex];

  return (
    <div className="max-w-xl mx-auto px-5 py-10 sm:py-16">
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-[10px] tracking-widest uppercase text-brass">
          Human OS · Hardware Module
        </span>
        <span className="font-mono text-[10px] tracking-widest text-inkSoft">EA-15 · REV. A</span>
      </div>

      {stage === "intro" && (
        <div>
          <h1 className="font-display text-3xl sm:text-4xl leading-tight mb-4">
            Your energy budget has income, expenses, and leaks.
          </h1>
          <p className="font-body text-[15px] leading-relaxed mb-8 text-inkSoft">
            The 2-Minute Energy Audit. Fifteen questions across the five most common
            hardware leaks — sleep, fuel, movement, stress recovery, and pain. Answer as
            you actually are, not as you'd like to be.
          </p>

          <div className="rounded-sm p-6 mb-8 border bg-panel" style={{ borderColor: "#B9B2A0" }}>
            <Gauge value={0.22} />
            <p className="font-mono text-[10px] text-center tracking-widest uppercase mt-2 text-inkSoft">
              Readout: Energy Reserve
            </p>
          </div>

          <button
            onClick={() => setStage("quiz")}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-sm bg-signal text-canvas font-body font-medium text-[15px] hover:bg-signalDark transition-colors focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2"
          >
            Begin Audit <ArrowRight size={16} />
          </button>
        </div>
      )}

      {stage === "quiz" && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs tracking-widest uppercase text-brass">Audit Read</span>
            <span className="font-mono text-xs text-inkSoft">
              {String(qIndex + 1).padStart(2, "0")} / {String(QUESTIONS.length).padStart(2, "0")}
            </span>
          </div>

          <div className="h-1 w-full rounded-sm overflow-hidden mb-8 bg-panelDark">
            <div
              className="h-full bg-brass"
              style={{ width: `${(qIndex / (QUESTIONS.length - 1)) * 100}%`, transition: "width 0.4s ease" }}
            />
          </div>

          <div className="rounded-sm p-6 mb-6 min-h-[140px] flex items-center border bg-panel" style={{ borderColor: "#B9B2A0" }}>
            <p className="font-display text-xl sm:text-2xl leading-snug">{q.text}</p>
          </div>

          <div className="grid grid-cols-1 gap-2 mb-8">
            {SCALE.map((s) => {
              const selected = answers[qIndex] === s.v;
              return (
                <button
                  key={s.v}
                  onClick={() => selectAnswer(s.v)}
                  className={`w-full text-left px-4 py-3 rounded-sm font-body text-sm flex items-center justify-between border transition-colors focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 ${
                    selected ? "bg-signal text-canvas border-signal" : "bg-canvas text-ink hover:border-brass"
                  }`}
                  style={{ borderColor: selected ? undefined : "#B9B2A0" }}
                >
                  <span>{s.label}</span>
                  <span className="font-mono text-xs opacity-70">{s.v}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={goBack}
              disabled={qIndex === 0}
              className="flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-inkSoft disabled:opacity-30 focus:outline-none"
            >
              <ArrowLeft size={14} /> Back
            </button>
            <button
              onClick={goNext}
              disabled={answers[qIndex] === null}
              className="flex items-center gap-2 px-5 py-2.5 rounded-sm bg-ink text-canvas font-body text-sm font-medium disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2"
            >
              {qIndex === QUESTIONS.length - 1 ? "See Results" : "Next"} <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {stage === "results" && (
        <div>
          <div className="rounded-sm p-6 mb-6 border bg-panel" style={{ borderColor: "#B9B2A0" }}>
            <Gauge value={animate ? liveFraction : 0} />
            <p className="font-mono text-[10px] text-center tracking-widest uppercase mt-2 text-inkSoft">
              Total Reading: {total} / {maxTotal}
            </p>
          </div>

          <h2 className="font-display text-2xl mb-2">{band.label}</h2>
          <p className="font-body text-[15px] leading-relaxed mb-6 text-inkSoft">{band.blurb}</p>

          <div className="rounded-sm p-5 mb-6 border bg-canvas" style={{ borderColor: "#B9B2A0" }}>
            <p className="font-mono text-[10px] uppercase tracking-widest mb-4 text-brass">Leak Breakdown</p>
            {Object.values(SUBSCALES).map((s) => (
              <SubMeter key={s.code} label={s.label} code={s.code} note={s.note} score={subtotals[s.code]} />
            ))}
            <p className="font-body text-sm mt-2">
              Your biggest leak is <strong>{SUBSCALES[dominant].label}</strong>. First move:{" "}
              {SUBSCALES[dominant].fix}
            </p>
          </div>

          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-sm border font-body text-sm mb-8 hover:border-brass transition-colors focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2"
            style={{ borderColor: "#B9B2A0" }}
          >
            <RotateCcw size={14} /> Retake Audit
          </button>

          <p className="font-body text-xs leading-relaxed text-inkSoft">
            This is a self-reflection tool tied to Chapter 2 of the Human OS manual —
            not a diagnostic instrument, and not a substitute for medical advice. Plug
            one leak first. Then increase income.
          </p>
        </div>
      )}
    </div>
  );
}
