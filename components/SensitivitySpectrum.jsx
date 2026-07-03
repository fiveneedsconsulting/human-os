"use client";

import React, { useState, useEffect, useMemo } from "react";
import { ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";

const QUESTIONS = [
  { id: 1, sub: "EOE", text: "When I have a lot to do in a short amount of time, I feel rattled rather than energized." },
  { id: 2, sub: "EOE", text: "If several things demand my attention at once, I find it hard to think clearly." },
  { id: 3, sub: "EOE", text: "Big changes in my life, even good ones, take me longer than most people to adjust to." },
  { id: 4, sub: "EOE", text: "I notice I'm easily flustered when someone is watching me perform a task." },
  { id: 5, sub: "EOE", text: "Being rushed makes me more likely to make mistakes." },
  { id: 6, sub: "AES", text: "I am deeply moved by music, art, or a well-crafted piece of writing." },
  { id: 7, sub: "AES", text: "I notice small details in my environment that other people seem to miss." },
  { id: 8, sub: "AES", text: "I have a rich, complex inner world that I don't always share with others." },
  { id: 9, sub: "AES", text: "Subtle changes in a room's lighting, arrangement, or mood affect how I feel." },
  { id: 10, sub: "AES", text: "I find it easy to pick up on a shift in someone's tone before they say anything." },
  { id: 11, sub: "LST", text: "Loud noises, bright lights, or strong smells bother me more than they seem to bother others." },
  { id: 12, sub: "LST", text: "I get uncomfortable in environments with a lot of noise or visual clutter." },
  { id: 13, sub: "LST", text: "Certain fabrics, tags, or textures against my skin are hard for me to tolerate." },
  { id: 14, sub: "LST", text: "Caffeine, medication, or even hunger seems to affect me more strongly than it affects other people." },
  { id: 15, sub: "LST", text: "After a long day of stimulation, I need quiet time alone to reset." },
];

const SUBSCALES = {
  EOE: { label: "Overwhelm Threshold", code: "EOE", note: "response to demand, time pressure, and internal load" },
  AES: { label: "Aesthetic Attunement", code: "AES", note: "responsiveness to beauty, nuance, and subtlety" },
  LST: { label: "Sensory Threshold", code: "LST", note: "reactivity to physical input — sound, light, texture" },
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
    label: "Baseline Signal",
    blurb: "Your readings suggest a steadier baseline — input tends to register without much amplification. That's not better or worse calibration, just a different one, and it's worth knowing as a reference point for how you relate to people who read higher.",
  };
  if (total <= 48) return {
    label: "Elevated Signal",
    blurb: "You show sensitivity in some registers more than others — likely situational or domain-specific rather than a defining trait. Worth noticing which categories below are doing the lifting.",
  };
  if (total <= 63) return {
    label: "High-Resolution Signal",
    blurb: "This is a consistent pattern across most of what was asked — the range researchers associate with the Highly Sensitive Person trait, an estimated one in five people. Your system is likely processing more per unit of input than most of the people around you, for better and for worse.",
  };
  return {
    label: "Peak Sensitivity Signal",
    blurb: "A strong, consistent reading across nearly every category. This end of the spectrum tends to come with real gifts — depth, attunement, empathy — alongside a real cost in overstimulating environments. Both halves of that are true at once.",
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
        <line x1={cx} y1={cy} x2={cx} y2={cy - r + 22} stroke="#2F6E62" strokeWidth="3" strokeLinecap="round" />
        <circle cx={cx} cy={cy - r + 22} r="4" fill="#2F6E62" className="needle-tip" />
      </g>
      <circle cx={cx} cy={cy} r="7" fill="#1B2420" />
      <circle cx={cx} cy={cy} r="3" fill="#C79A5C" />
    </svg>
  );
}

function SubMeter({ label, code, note, score }) {
  const pct = Math.round((score / 25) * 100);
  return (
    <div className="mb-4">
      <div className="flex items-baseline justify-between mb-1">
        <span className="font-body text-sm text-ink">
          {label} <span className="font-mono text-[10px] text-brass">· {code}</span>
        </span>
        <span className="font-mono text-xs text-inkSoft">{score}/25</span>
      </div>
      <div className="h-2 w-full rounded-sm overflow-hidden bg-panelDark">
        <div className="h-full bg-signal" style={{ width: `${pct}%`, transition: "width 1s cubic-bezier(0.22,1,0.36,1)" }} />
      </div>
      <p className="font-body text-xs mt-1 text-inkSoft">{note}</p>
    </div>
  );
}

export default function SensitivitySpectrum() {
  const [stage, setStage] = useState("intro");
  const [answers, setAnswers] = useState(Array(QUESTIONS.length).fill(null));
  const [qIndex, setQIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const total = useMemo(() => answers.reduce((s, a) => s + (a || 0), 0), [answers]);
  const maxTotal = QUESTIONS.length * 5;
  const liveFraction = Math.min(total / maxTotal, 1);

  const subtotals = useMemo(() => {
    const t = { EOE: 0, AES: 0, LST: 0 };
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
          Human OS · Signal Sensitivity Module
        </span>
        <span className="font-mono text-[10px] tracking-widest text-inkSoft">SPS-15 · REV. A</span>
      </div>

      {stage === "intro" && (
        <div>
          <h1 className="font-display text-3xl sm:text-4xl leading-tight mb-4">
            Some nervous systems are built for higher resolution.
          </h1>
          <p className="font-body text-[15px] leading-relaxed mb-8 text-inkSoft">
            This is a short self-calibration, not a diagnosis. Fifteen questions on how your
            system tends to process input — sound, light, mood, meaning. Takes about three
            minutes. Answer as you actually are, not as you'd like to be.
          </p>

          <div className="rounded-sm p-6 mb-8 border bg-panel" style={{ borderColor: "#B9B2A0" }}>
            <Gauge value={0.28} />
            <p className="font-mono text-[10px] text-center tracking-widest uppercase mt-2 text-inkSoft">
              Readout: Signal Amplitude
            </p>
          </div>

          <button
            onClick={() => setStage("quiz")}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-sm bg-signal text-canvas font-body font-medium text-[15px] hover:bg-signalDark transition-colors focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2"
          >
            Begin Calibration <ArrowRight size={16} />
          </button>
        </div>
      )}

      {stage === "quiz" && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="font-mono text-xs tracking-widest uppercase text-brass">Signal Read</span>
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
            <p className="font-mono text-[10px] uppercase tracking-widest mb-4 text-brass">Subscale Breakdown</p>
            {Object.values(SUBSCALES).map((s) => (
              <SubMeter key={s.code} label={s.label} code={s.code} note={s.note} score={subtotals[s.code]} />
            ))}
            <p className="font-body text-sm mt-2">
              Your strongest signal is in <strong>{SUBSCALES[dominant].label}</strong> — {SUBSCALES[dominant].note}.
            </p>
          </div>

          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-sm border font-body text-sm mb-8 hover:border-brass transition-colors focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2"
            style={{ borderColor: "#B9B2A0" }}
          >
            <RotateCcw size={14} /> Retake Calibration
          </button>

          <p className="font-body text-xs leading-relaxed text-inkSoft">
            This is a self-reflection tool inspired by Environmental Sensitivity research
            (Aron; Belsky &amp; Pluess; Boyce &amp; Ellis) — not a diagnostic instrument, and not
            a substitute for the validated Highly Sensitive Person Scale or a professional
            evaluation. This module is one piece of the Human OS manual.
          </p>
        </div>
      )}
    </div>
  );
}
