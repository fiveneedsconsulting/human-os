"use client";

import React, { useState, useMemo } from "react";
import { ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";

const SECTIONS = {
  ie: {
    title: "How you recharge and process",
    poles: {
      I: {
        label: "Introversion",
        note: "internal processing — thoughtful, focused, needs space to think",
        script: "“I need 30 minutes to think. I'll come back at ___ with my view.”",
      },
      E: {
        label: "Extraversion",
        note: "interactive processing — fast engagement, thinks out loud",
        script: "“I think out loud — I'm exploring, not deciding. Stop me if it's too much.”",
      },
    },
  },
  sn: {
    title: "How you take in information",
    poles: {
      S: {
        label: "Sensing",
        note: "concrete facts and specifics — grounded, practical",
        script: "“Give me one concrete example and the current facts, then I'm in.”",
      },
      N: {
        label: "Intuition",
        note: "patterns and possibilities — connects dots quickly",
        script: "“Here's the pattern and where it's going — I'll list the next three concrete steps.”",
      },
    },
  },
  tf: {
    title: "How you decide",
    poles: {
      T: {
        label: "Thinking",
        note: "logic and objective standards — direct, comfortable with tough calls",
        script: "“I'm being direct for clarity, not to attack. Tell me if my tone lands wrong.”",
      },
      F: {
        label: "Feeling",
        note: "values and relational impact — reads people well, builds trust",
        script: "“I'm naming impact because it affects outcomes — I'm not avoiding the problem.”",
      },
    },
  },
  jp: {
    title: "How you manage time and decisions",
    poles: {
      J: {
        label: "Judging",
        note: "structure and closure — plans, prioritizes, reduces uncertainty",
        script: "“Let's pick a decision point. We can revise later if data changes.”",
      },
      P: {
        label: "Perceiving",
        note: "flexibility and options — adaptable, responsive, spots alternatives",
        script: "“I need options. Give me a deadline and what good enough looks like.”",
      },
    },
  },
};

const ITEMS = [
  { section: "ie", a: { pole: "I", text: "When I'm processing something big, I'd rather think it through alone first." }, b: { pole: "E", text: "I think best by talking it out loud with someone." } },
  { section: "ie", a: { pole: "I", text: "After a full day of meetings, I need quiet time to recharge." }, b: { pole: "E", text: "After a full day of meetings, I want to unwind with people." } },
  { section: "ie", a: { pole: "I", text: "In a group discussion, I usually wait until I've formed a view before speaking." }, b: { pole: "E", text: "In a group discussion, I usually think out loud as I go." } },
  { section: "ie", a: { pole: "I", text: "I do my best work with long, uninterrupted focus time." }, b: { pole: "E", text: "I do my best work bouncing ideas off other people." } },
  { section: "ie", a: { pole: "I", text: "If I'm upset, I tend to go quiet and withdraw." }, b: { pole: "E", text: "If I'm upset, I tend to want to talk it through right away." } },

  { section: "sn", a: { pole: "S", text: "I want the concrete facts and specifics before I trust an idea." }, b: { pole: "N", text: "I want the underlying pattern before the details matter to me." } },
  { section: "sn", a: { pole: "S", text: "I'm more comfortable with a proven method than an unproven possibility." }, b: { pole: "N", text: "I'm more energized by a new possibility than a proven method." } },
  { section: "sn", a: { pole: "S", text: "When someone tells a story, I notice the specific details." }, b: { pole: "N", text: "When someone tells a story, I notice what it might mean." } },
  { section: "sn", a: { pole: "S", text: "I trust what's actually in front of me over what could be." }, b: { pole: "N", text: "I trust the direction things seem to be heading over what's in front of me." } },
  { section: "sn", a: { pole: "S", text: "Under pressure, I want more facts and certainty." }, b: { pole: "N", text: "Under pressure, I start imagining worst-case scenarios." } },

  { section: "tf", a: { pole: "T", text: "When making a hard call, I lead with logic and objective criteria." }, b: { pole: "F", text: "When making a hard call, I lead with the impact on the people involved." } },
  { section: "tf", a: { pole: "T", text: "I'd rather be respected for being clear and direct." }, b: { pole: "F", text: "I'd rather be respected for being warm and considerate." } },
  { section: "tf", a: { pole: "T", text: "Giving honest, critical feedback comes naturally to me." }, b: { pole: "F", text: "Giving honest, critical feedback is something I have to push myself to do." } },
  { section: "tf", a: { pole: "T", text: "I evaluate a decision mainly by whether it's consistent and fair by the rules." }, b: { pole: "F", text: "I evaluate a decision mainly by how it affects the relationships involved." } },
  { section: "tf", a: { pole: "T", text: "Under stress, I get more blunt and critical." }, b: { pole: "F", text: "Under stress, I start people-pleasing or going quiet to keep the peace." } },

  { section: "jp", a: { pole: "J", text: "I feel better once a decision is made and closed." }, b: { pole: "P", text: "I feel better keeping my options open as long as possible." } },
  { section: "jp", a: { pole: "J", text: "I like having a plan and sticking to it." }, b: { pole: "P", text: "I like staying flexible and adjusting as I go." } },
  { section: "jp", a: { pole: "J", text: "Deadlines help me — I plan backward from them early." }, b: { pole: "P", text: "Deadlines motivate me — I tend to do my best work close to them." } },
  { section: "jp", a: { pole: "J", text: "An unplanned schedule change stresses me out." }, b: { pole: "P", text: "An unplanned schedule change doesn't bother me much." } },
  { section: "jp", a: { pole: "J", text: "Under stress, I tighten up and start micromanaging details." }, b: { pole: "P", text: "Under stress, I avoid committing and scramble at the last minute." } },
];

const SECTION_ORDER = ["ie", "sn", "tf", "jp"];

function sectionLabel(sectionKey) {
  const idx = SECTION_ORDER.indexOf(sectionKey);
  return `Section ${idx + 1} of 4 — ${SECTIONS[sectionKey].title}`;
}

function BipolarBar({ leftLabel, rightLabel, leftCount, total }) {
  const leftPct = Math.round((leftCount / total) * 100);
  return (
    <div className="mb-5">
      <div className="flex items-baseline justify-between mb-1 font-mono text-[10px] tracking-widest uppercase text-inkSoft">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
      <div className="h-2.5 w-full rounded-sm overflow-hidden bg-panelDark flex">
        <div className="h-full bg-signal" style={{ width: `${leftPct}%`, transition: "width 0.9s cubic-bezier(0.22,1,0.36,1)" }} />
        <div className="h-full bg-brassLight" style={{ width: `${100 - leftPct}%`, transition: "width 0.9s cubic-bezier(0.22,1,0.36,1)" }} />
      </div>
      <div className="flex items-baseline justify-between mt-1 font-mono text-[10px] text-inkSoft">
        <span>{leftCount}/{total}</span>
        <span>{total - leftCount}/{total}</span>
      </div>
    </div>
  );
}

export default function DriversCalibration() {
  const [stage, setStage] = useState("intro");
  const [answers, setAnswers] = useState(Array(ITEMS.length).fill(null));
  const [qIndex, setQIndex] = useState(0);

  const item = ITEMS[qIndex];
  const currentSection = item.section;

  const counts = useMemo(() => {
    const c = {
      ie: { I: 0, E: 0 }, sn: { S: 0, N: 0 }, tf: { T: 0, F: 0 }, jp: { J: 0, P: 0 },
    };
    ITEMS.forEach((it, i) => {
      const pole = answers[i];
      if (pole) c[it.section][pole] += 1;
    });
    return c;
  }, [answers]);

  const profile = useMemo(() => {
    return SECTION_ORDER.map((s) => {
      const poles = Object.keys(SECTIONS[s].poles);
      const [p1, p2] = poles;
      return counts[s][p1] >= counts[s][p2] ? p1 : p2;
    });
  }, [counts]);

  const code = profile.join("");
  const allAnswered = answers.every((a) => a !== null);

  const selectPole = (pole) => {
    const next = [...answers];
    next[qIndex] = pole;
    setAnswers(next);
  };

  const goNext = () => {
    if (qIndex < ITEMS.length - 1) setQIndex(qIndex + 1);
    else setStage("results");
  };
  const goBack = () => { if (qIndex > 0) setQIndex(qIndex - 1); };

  const reset = () => {
    setAnswers(Array(ITEMS.length).fill(null));
    setQIndex(0);
    setStage("intro");
  };

  return (
    <div className="max-w-xl mx-auto px-5 py-10 sm:py-16">
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-[10px] tracking-widest uppercase text-brass">
          Human OS · Drivers Module
        </span>
        <span className="font-mono text-[10px] tracking-widest text-inkSoft">DC-20 · REV. A</span>
      </div>

      {stage === "intro" && (
        <div>
          <h1 className="font-display text-3xl sm:text-4xl leading-tight mb-4">
            Your defaults aren't random. They're patterns.
          </h1>
          <p className="font-body text-[15px] leading-relaxed mb-4 text-inkSoft">
            Twenty forced-choice questions across four sections — how you
            recharge, take in information, decide, and manage time. Pick
            whichever statement fits you more, not the one you wish were true.
          </p>
          <p className="font-body text-[15px] leading-relaxed mb-8 text-inkSoft">
            Inspired by Jungian / Myers-Briggs-style psychological type
            theory — not the official MBTI® assessment. Takes about five
            minutes.
          </p>

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
          <div className="flex items-center justify-between mb-2">
            <span className="font-mono text-xs tracking-widest uppercase text-brass">
              {sectionLabel(currentSection)}
            </span>
            <span className="font-mono text-xs text-inkSoft">
              {String(qIndex + 1).padStart(2, "0")} / {String(ITEMS.length).padStart(2, "0")}
            </span>
          </div>

          <div className="h-1 w-full rounded-sm overflow-hidden mb-8 bg-panelDark">
            <div
              className="h-full bg-brass"
              style={{ width: `${(qIndex / (ITEMS.length - 1)) * 100}%`, transition: "width 0.4s ease" }}
            />
          </div>

          <div className="grid grid-cols-1 gap-3 mb-8">
            {[item.a, item.b].map((opt) => {
              const selected = answers[qIndex] === opt.pole;
              return (
                <button
                  key={opt.pole}
                  onClick={() => selectPole(opt.pole)}
                  className={`w-full text-left px-5 py-5 rounded-sm font-display text-lg leading-snug flex items-start justify-between gap-3 border transition-colors focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2 ${
                    selected ? "bg-signal text-canvas border-signal" : "bg-panel text-ink hover:border-brass"
                  }`}
                  style={{ borderColor: selected ? undefined : "#B9B2A0" }}
                >
                  <span>{opt.text}</span>
                  <span className="font-mono text-xs opacity-70 shrink-0 mt-1">{opt.pole}</span>
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
              {qIndex === ITEMS.length - 1 ? "See Results" : "Next"} <ArrowRight size={14} />
            </button>
          </div>
        </div>
      )}

      {stage === "results" && allAnswered && (
        <div>
          <p className="font-mono text-[10px] uppercase tracking-widest mb-2 text-brass">
            Your lean
          </p>
          <h2 className="font-display text-5xl mb-8 tracking-wide">{code}</h2>

          <div className="rounded-sm p-6 mb-6 border bg-canvas" style={{ borderColor: "#B9B2A0" }}>
            <p className="font-mono text-[10px] uppercase tracking-widest mb-4 text-brass">
              Breakdown by section
            </p>
            {SECTION_ORDER.map((s) => {
              const poles = Object.keys(SECTIONS[s].poles);
              const [p1, p2] = poles;
              return (
                <BipolarBar
                  key={s}
                  leftLabel={`${p1} · ${SECTIONS[s].poles[p1].label}`}
                  rightLabel={`${SECTIONS[s].poles[p2].label} · ${p2}`}
                  leftCount={counts[s][p1]}
                  total={counts[s][p1] + counts[s][p2]}
                />
              );
            })}
          </div>

          <div className="space-y-4 mb-8">
            {SECTION_ORDER.map((s, i) => {
              const pole = profile[i];
              const poleInfo = SECTIONS[s].poles[pole];
              return (
                <div key={s} className="rounded-sm p-5 border bg-panel" style={{ borderColor: "#B9B2A0" }}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="font-display text-lg text-ink">{poleInfo.label}</span>
                    <span className="font-mono text-xs text-brass">{pole}</span>
                  </div>
                  <p className="font-body text-xs text-inkSoft mb-3">{poleInfo.note}</p>
                  <p className="font-body text-sm text-ink">
                    Translation script: <span className="text-inkSoft">{poleInfo.script}</span>
                  </p>
                </div>
              );
            })}
          </div>

          <button
            onClick={reset}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-sm border font-body text-sm mb-8 hover:border-brass transition-colors focus:outline-none focus:ring-2 focus:ring-brass focus:ring-offset-2"
            style={{ borderColor: "#B9B2A0" }}
          >
            <RotateCcw size={14} /> Retake Calibration
          </button>

          <p className="font-body text-xs leading-relaxed text-inkSoft">
            This is a self-reflection tool inspired by Jungian / Myers-Briggs-style
            psychological type theory — not the official MBTI® assessment, not a
            diagnostic instrument, and not a substitute for a session with a
            certified practitioner. Defaults become rigid under stress; check
            state (Chapter 3) and needs (Chapter 4) before diagnosing personality.
          </p>
        </div>
      )}
    </div>
  );
}
