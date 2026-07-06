"use client";

import React, { useState, useMemo } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";

const DEFAULT_SCALE_LOW = "No problem";
const DEFAULT_SCALE_HIGH = "Serious problem";

function RatingRow({ dimension, value, onChange }) {
  return (
    <div className="mb-6">
      <div className="mb-2">
        <span className="font-body text-[15px] text-ink font-medium">{dimension.label}</span>
        <p className="font-body text-xs text-inkSoft mt-0.5">{dimension.descriptors}</p>
      </div>
      <div className="grid grid-cols-5 gap-2">
        {[1, 2, 3, 4, 5].map((v) => {
          const selected = value === v;
          return (
            <button
              key={v}
              onClick={() => onChange(v)}
              className={`py-2.5 rounded-sm font-mono text-sm border transition-colors focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 ${
                selected ? "bg-signal text-canvas border-signal" : "bg-canvas text-ink hover:border-brass"
              }`}
              style={{ borderColor: selected ? undefined : "#B9B2A0" }}
            >
              {v}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ResultBar({ dimension, score, isTop }) {
  const pct = Math.round((score / 5) * 100);
  return (
    <div className="mb-4">
      <div className="flex items-baseline justify-between mb-1">
        <span className={`font-body text-sm ${isTop ? "text-ink font-medium" : "text-inkSoft"}`}>
          {dimension.label}
        </span>
        <span className="font-mono text-xs text-inkSoft">{score}/5</span>
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

export default function AuditInstrument({
  kicker,
  code,
  title,
  intro,
  scaleLow = DEFAULT_SCALE_LOW,
  scaleHigh = DEFAULT_SCALE_HIGH,
  dimensions,
  tieBreakOrder,
  patterns,
  footerNote,
}) {
  const [ratings, setRatings] = useState(() =>
    Object.fromEntries(dimensions.map((d) => [d.key, null]))
  );
  const [stage, setStage] = useState("form");

  const allRated = dimensions.every((d) => ratings[d.key] !== null);

  const ranked = useMemo(() => {
    const priority = tieBreakOrder || dimensions.map((d) => d.key);
    return [...dimensions].sort((a, b) => {
      const diff = (ratings[b.key] || 0) - (ratings[a.key] || 0);
      if (diff !== 0) return diff;
      return priority.indexOf(a.key) - priority.indexOf(b.key);
    });
  }, [ratings, dimensions, tieBreakOrder]);

  const top = ranked[0];

  const matchedPatterns = useMemo(() => {
    if (!patterns) return [];
    return patterns.filter((p) =>
      p.keys.every((k) => (ratings[k] || 0) >= (p.threshold || 4))
    );
  }, [ratings, patterns]);

  const setRating = (key, value) => {
    setRatings((prev) => ({ ...prev, [key]: value }));
  };

  const reset = () => {
    setRatings(Object.fromEntries(dimensions.map((d) => [d.key, null])));
    setStage("form");
  };

  return (
    <div className="max-w-xl mx-auto px-5 py-10 sm:py-16">
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-[10px] tracking-widest uppercase text-brass">{kicker}</span>
        <span className="font-mono text-[10px] tracking-widest text-inkSoft">{code}</span>
      </div>

      {stage === "form" && (
        <div>
          <h1 className="font-display text-3xl sm:text-4xl leading-tight mb-4">{title}</h1>
          <p className="font-body text-[15px] leading-relaxed mb-6 text-inkSoft">{intro}</p>

          <div className="rounded-sm p-6 mb-8 border bg-panel" style={{ borderColor: "#B9B2A0" }}>
            <div className="flex items-center justify-between mb-6 font-mono text-[10px] tracking-widest uppercase text-inkSoft">
              <span>1 · {scaleLow}</span>
              <span>5 · {scaleHigh}</span>
            </div>
            {dimensions.map((d) => (
              <RatingRow
                key={d.key}
                dimension={d}
                value={ratings[d.key]}
                onChange={(v) => setRating(d.key, v)}
              />
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

      {stage === "results" && (
        <div>
          <h2 className="font-display text-2xl mb-6">Your starting point</h2>

          <div className="rounded-sm p-5 mb-6 border bg-canvas" style={{ borderColor: "#B9B2A0" }}>
            <p className="font-mono text-[10px] uppercase tracking-widest mb-4 text-brass">
              Ranked by score
            </p>
            {ranked.map((d) => (
              <ResultBar
                key={d.key}
                dimension={d}
                score={ratings[d.key]}
                isTop={d.key === top.key}
              />
            ))}
          </div>

          <div className="rounded-sm p-6 mb-6 border bg-panel" style={{ borderColor: "#B9B2A0" }}>
            <p className="font-body text-sm text-inkSoft mb-2">
              Highest score: <strong className="text-ink">{top.label}</strong>
            </p>
            <p className="font-body text-sm leading-relaxed text-inkSoft">{top.firstMove}</p>
          </div>

          {matchedPatterns.map((p, i) => (
            <div
              key={i}
              className="rounded-sm p-6 mb-6 border-2"
              style={{ borderColor: "#A8783A", backgroundColor: "#DED9CB" }}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest mb-2 text-brass">
                Pattern worth naming
              </p>
              <p className="font-body text-sm leading-relaxed text-ink">{p.note}</p>
            </div>
          ))}

          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-sm border font-body text-sm mb-8 hover:border-brass transition-colors focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2"
            style={{ borderColor: "#B9B2A0" }}
          >
            <RotateCcw size={14} /> Retake
          </button>

          {footerNote && (
            <p className="font-body text-xs leading-relaxed text-inkSoft">{footerNote}</p>
          )}
        </div>
      )}
    </div>
  );
}
