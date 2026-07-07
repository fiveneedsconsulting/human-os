"use client";

import React, { useState } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import Link from "next/link";

const PAIRS = [
  {
    key: "ie",
    a: { pole: "I", text: "I prefer to think before I speak." },
    b: { pole: "E", text: "I process best by talking it out." },
  },
  {
    key: "sn",
    a: { pole: "S", text: "I want specifics and data first." },
    b: { pole: "N", text: "I want the pattern and possibilities first." },
  },
  {
    key: "tf",
    a: { pole: "T", text: "I prioritize clear criteria over feelings." },
    b: { pole: "F", text: "I prioritize impact on people." },
  },
  {
    key: "jp",
    a: { pole: "J", text: "I want a plan, deadlines, and closure." },
    b: { pole: "P", text: "I want flexibility and room to adjust." },
  },
];

const STRESS_BEHAVIORS = [
  { key: "j", tag: "J-stress", label: "Control / micromanage" },
  { key: "i", tag: "I-stress", label: "Withdraw / go quiet" },
  { key: "t", tag: "T-stress", label: "Get blunt or critical" },
  { key: "f", tag: "F-stress", label: "People-please or appease" },
  { key: "s", tag: "S-stress", label: "Demand certainty" },
  { key: "n", tag: "N-stress", label: "Jump to worst-case patterns" },
  { key: "p", tag: "P-stress", label: "Avoid / drift" },
];

export default function DefaultsFrictionScan() {
  const [picks, setPicks] = useState({});
  const [stress, setStress] = useState([]);
  const [stage, setStage] = useState("form");

  const allPicked = PAIRS.every((p) => picks[p.key]);

  const toggleStress = (key) => {
    setStress((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]
    );
  };

  const reset = () => {
    setPicks({});
    setStress([]);
    setStage("form");
  };

  const code = PAIRS.map((p) => picks[p.key]).join(" ");

  return (
    <div className="max-w-xl mx-auto px-5 py-10 sm:py-16">
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-[10px] tracking-widest uppercase text-brass">
          Human OS · Drivers Module
        </span>
        <span className="font-mono text-[10px] tracking-widest text-inkSoft">DFS-4 · REV. A</span>
      </div>

      {stage === "form" && (
        <div>
          <h1 className="font-display text-3xl sm:text-4xl leading-tight mb-4">
            Where do you lean? Where does friction come from?
          </h1>
          <p className="font-body text-[15px] leading-relaxed mb-8 text-inkSoft">
            For each pair, pick whichever statement fits you more. Then note
            which stress behaviors show up under pressure.
          </p>

          <div className="rounded-sm p-6 mb-6 border bg-panel" style={{ borderColor: "#B9B2A0" }}>
            {PAIRS.map((pair) => (
              <div key={pair.key} className="mb-6 last:mb-0">
                <div className="grid grid-cols-1 gap-2">
                  {[pair.a, pair.b].map((opt) => {
                    const selected = picks[pair.key] === opt.pole;
                    return (
                      <button
                        key={opt.pole}
                        onClick={() =>
                          setPicks((prev) => ({ ...prev, [pair.key]: opt.pole }))
                        }
                        className={`w-full text-left px-4 py-3 rounded-sm font-body text-sm flex items-center justify-between border transition-colors focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 ${
                          selected ? "bg-signal text-canvas border-signal" : "bg-canvas text-ink hover:border-brass"
                        }`}
                        style={{ borderColor: selected ? undefined : "#B9B2A0" }}
                      >
                        <span>{opt.text}</span>
                        <span className="font-mono text-xs opacity-70 ml-3 shrink-0">
                          {opt.pole}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-sm p-6 mb-8 border bg-canvas" style={{ borderColor: "#B9B2A0" }}>
            <p className="font-body text-sm text-ink font-medium mb-1">
              Your stress behavior
            </p>
            <p className="font-body text-xs text-inkSoft mb-4">
              Under pressure, which of these shows up? Select any that apply.
            </p>
            <div className="grid grid-cols-1 gap-2">
              {STRESS_BEHAVIORS.map((s) => {
                const selected = stress.includes(s.key);
                return (
                  <button
                    key={s.key}
                    onClick={() => toggleStress(s.key)}
                    className={`w-full text-left px-4 py-2.5 rounded-sm font-body text-sm flex items-center justify-between border transition-colors focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 ${
                      selected ? "bg-brass text-canvas border-brass" : "bg-canvas text-ink hover:border-brass"
                    }`}
                    style={{ borderColor: selected ? undefined : "#B9B2A0" }}
                  >
                    <span>{s.label}</span>
                    <span className="font-mono text-[10px] opacity-70 ml-3 shrink-0">
                      {s.tag}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <button
            onClick={() => setStage("results")}
            disabled={!allPicked}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-sm bg-signal text-canvas font-body font-medium text-[15px] hover:bg-signalDark transition-colors disabled:opacity-40 focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2"
          >
            See Results <ArrowRight size={16} />
          </button>
        </div>
      )}

      {stage === "results" && (
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest mb-2 text-brass">
            Your quick lean
          </p>
          <h2 className="font-display text-4xl mb-6 tracking-wide">{code}</h2>

          {stress.length > 0 && (
            <div className="rounded-sm p-5 mb-6 border bg-canvas" style={{ borderColor: "#B9B2A0" }}>
              <p className="font-mono text-[10px] uppercase tracking-widest mb-3 text-brass">
                Stress behaviors you noted
              </p>
              <ul className="space-y-1.5">
                {STRESS_BEHAVIORS.filter((s) => stress.includes(s.key)).map((s) => (
                  <li key={s.key} className="font-body text-sm text-inkSoft flex items-center justify-between">
                    <span>{s.label}</span>
                    <span className="font-mono text-[10px] text-brass">{s.tag}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-sm p-6 mb-8 border bg-panel" style={{ borderColor: "#B9B2A0" }}>
            <p className="font-mono text-[10px] uppercase tracking-widest mb-3 text-brass">
              The rule
            </p>
            <p className="font-body text-sm leading-relaxed text-inkSoft">
              We judge others by their impact and ourselves by our intent.
              “I'm direct because I want clarity.” “They're direct because
              they're rude.” Everyone's story sounds reasonable inside their
              own head. Translation is how you escape the trap.
            </p>
          </div>

          <Link
            href="/tools/drivers-calibration"
            className="w-full flex items-center justify-center gap-2 py-3 rounded-sm bg-ink text-canvas font-body text-sm mb-4 hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2"
          >
            Want a deeper read? Take the full Drivers Calibration <ArrowRight size={14} />
          </Link>

          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-sm border font-body text-sm mb-8 hover:border-brass transition-colors focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2"
            style={{ borderColor: "#B9B2A0" }}
          >
            <RotateCcw size={14} /> Retake
          </button>

          <p className="font-body text-xs leading-relaxed text-inkSoft">
            This is a self-reflection tool tied to Chapter 5 of the Human OS
            manual — not a diagnostic instrument.
          </p>
        </div>
      )}
    </div>
  );
}
