"use client";

import React, { useState, useMemo } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

const MODULES = [
  {
    key: "regulation",
    letter: "A",
    label: "Regulation under stress",
    statements: [
      "I react quickly and regret it.",
      "I struggle to recover from escalation.",
      "Stress hijacks my thinking and behavior.",
    ],
    firstMove:
      "Regulation: a 90-second slow exhale before responding to any escalation. Define the minimum rep, attach it to a cue, and track it with a checkbox for 7 days.",
  },
  {
    key: "communication",
    letter: "B",
    label: "Communication + translation",
    statements: [
      "I often feel misunderstood.",
      "Conversations derail over tone.",
      "I avoid hard talks, or keep having the same one.",
    ],
    firstMove:
      "Translation move: “Let me summarize what I'm hearing, then I'll respond.” Run it at the start of the next conversation that starts to derail. One rep, one checkbox, 7 days.",
  },
  {
    key: "boundaries",
    letter: "C",
    label: "Boundary setting",
    statements: [
      "I say yes when I mean no.",
      "My time gets eaten by others' urgency.",
      "I resent commitments I agreed to.",
    ],
    firstMove:
      "Boundary script: “I can't do that this week. I can do ___ or ___.” Pre-write the line so it's ready the next time you're asked. One rep, one checkbox, 7 days.",
  },
  {
    key: "debugging",
    letter: "D",
    label: "Debugging / decisions",
    statements: [
      "I overthink and delay.",
      "I thrash between strategies without learning.",
      "I struggle to choose a first move.",
    ],
    firstMove:
      "Debugging rep: name the symptom, guess the layer, and commit to one small test for 24 hours before judging it. Turn thrashing into a single testable first move.",
  },
  {
    key: "attention",
    letter: "E",
    label: "Attention control",
    statements: [
      "My phone or interruptions run my day.",
      "I start strong, then drift.",
      "I procrastinate when tasks feel unclear.",
    ],
    firstMove:
      "Attention rep: before a focus block, silence one hijack (phone in another room) and define the single next concrete step. Protect one clear window a day.",
  },
];

const TIE_BREAK_ORDER = ["regulation", "communication", "boundaries", "debugging", "attention"];

const SCALE = [
  { v: 0, label: "Not true" },
  { v: 1, label: "Sometimes" },
  { v: 2, label: "Very true" },
];

function StatementRow({ statement, value, onChange }) {
  return (
    <div className="mb-4 last:mb-0">
      <p className="font-body text-sm text-ink mb-2">{statement}</p>
      <div className="grid grid-cols-3 gap-2">
        {SCALE.map((s) => {
          const selected = value === s.v;
          return (
            <button
              key={s.v}
              onClick={() => onChange(s.v)}
              className={`py-2 rounded-sm font-body text-xs border transition-colors focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 ${
                selected ? "bg-signal text-canvas border-signal" : "bg-canvas text-ink hover:border-brass"
              }`}
              style={{ borderColor: selected ? undefined : "#B9B2A0" }}
            >
              {s.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultBar({ label, score, isTop }) {
  const pct = Math.round((score / 6) * 100);
  return (
    <div className="mb-4">
      <div className="flex items-baseline justify-between mb-1">
        <span className={`font-body text-sm ${isTop ? "text-ink font-medium" : "text-inkSoft"}`}>
          {label}
        </span>
        <span className="font-mono text-xs text-inkSoft">{score}/6</span>
      </div>
      <div className="h-2 w-full rounded-sm overflow-hidden bg-panelDark">
        <div
          className={isTop ? "h-full bg-signal" : "h-full bg-brassLight"}
          style={{ width: `${pct}%`, transition: "width 0.8s cubic-bezier(0.22,1,0.36,1)" }}
        />
      </div>
    </div>
  );
}

export default function SkillPriorityScan() {
  const [ratings, setRatings] = useState(() =>
    Object.fromEntries(MODULES.map((m) => [m.key, [null, null, null]]))
  );
  const [stage, setStage] = useState("form");

  const allRated = MODULES.every((m) =>
    ratings[m.key].every((v) => v !== null)
  );

  const scores = useMemo(() => {
    return Object.fromEntries(
      MODULES.map((m) => [
        m.key,
        ratings[m.key].reduce((sum, v) => sum + (v || 0), 0),
      ])
    );
  }, [ratings]);

  const ranked = useMemo(() => {
    return [...MODULES].sort((a, b) => {
      const diff = scores[b.key] - scores[a.key];
      if (diff !== 0) return diff;
      return TIE_BREAK_ORDER.indexOf(a.key) - TIE_BREAK_ORDER.indexOf(b.key);
    });
  }, [scores]);

  const top = ranked[0];

  const setStatement = (moduleKey, idx, value) => {
    setRatings((prev) => {
      const next = { ...prev, [moduleKey]: [...prev[moduleKey]] };
      next[moduleKey][idx] = value;
      return next;
    });
  };

  const reset = () => {
    setRatings(Object.fromEntries(MODULES.map((m) => [m.key, [null, null, null]])));
    setStage("form");
  };

  return (
    <div className="max-w-xl mx-auto px-5 py-10 sm:py-16">
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-[10px] tracking-widest uppercase text-brass">
          Human OS · Upgrades Module
        </span>
        <span className="font-mono text-[10px] tracking-widest text-inkSoft">SP-15 · REV. A</span>
      </div>

      {stage === "form" && (
        <div>
          <h1 className="font-display text-3xl sm:text-4xl leading-tight mb-4">
            Which skill would change the most if you trained it?
          </h1>
          <p className="font-body text-[15px] leading-relaxed mb-8 text-inkSoft">
            Five modules, three statements each. Score how true each one is for
            you right now. Your top one or two are your starting point.
          </p>

          <div className="rounded-sm p-6 mb-8 border bg-panel" style={{ borderColor: "#B9B2A0" }}>
            {MODULES.map((m) => (
              <div key={m.key} className="mb-8 last:mb-0">
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-mono text-xs text-brass">{m.letter}</span>
                  <span className="font-display text-lg text-ink">{m.label}</span>
                </div>
                {m.statements.map((s, i) => (
                  <StatementRow
                    key={i}
                    statement={s}
                    value={ratings[m.key][i]}
                    onChange={(v) => setStatement(m.key, i, v)}
                  />
                ))}
              </div>
            ))}
          </div>

          <button
            onClick={() => setStage("results")}
            disabled={!allRated}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-sm bg-signal text-canvas font-body font-medium text-[15px] hover:bg-signalDark transition-colors disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2"
          >
            See Results <ArrowRight size={16} />
          </button>
        </div>
      )}

      {stage === "results" && allRated && (
        <div>
          <h2 className="font-display text-2xl mb-6">Your starting module</h2>

          <div className="rounded-sm p-5 mb-6 border bg-canvas" style={{ borderColor: "#B9B2A0" }}>
            <p className="font-mono text-[10px] uppercase tracking-widest mb-4 text-brass">
              Ranked by score
            </p>
            {ranked.map((m) => (
              <ResultBar
                key={m.key}
                label={m.label}
                score={scores[m.key]}
                isTop={m.key === top.key}
              />
            ))}
          </div>

          <div className="rounded-sm p-6 mb-8 border bg-panel" style={{ borderColor: "#B9B2A0" }}>
            <p className="font-body text-sm text-inkSoft mb-2">
              Start here: <strong className="text-ink">{top.label}</strong>
            </p>
            <p className="font-body text-sm leading-relaxed text-inkSoft">{top.firstMove}</p>
          </div>

          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-sm border font-body text-sm mb-8 hover:border-brass transition-colors focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2"
            style={{ borderColor: "#B9B2A0" }}
          >
            <RotateCcw size={14} /> Retake
          </button>

          <p className="font-body text-xs leading-relaxed text-inkSoft">
            This is a self-reflection tool tied to Chapter 8 of the Human OS
            manual — not a diagnostic instrument. The rule: insight can point,
            reps install. Run the loop — choose, break down, practice, get
            feedback, adjust, repeat.
          </p>
        </div>
      )}
    </div>
  );
}
