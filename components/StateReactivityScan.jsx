"use client";

import AuditInstrument from "@/components/manual/AuditInstrument";
import { getFirstMove } from "@/content/manual/firstMoves";

const DIMENSIONS = [
  {
    key: "survival",
    label: "Survival activation",
    descriptors: "Body tension, urgency, irritability, defensiveness, need to control.",
    firstMove:
      "Long Exhale Reset: exhale slowly for 6–8 seconds, inhale gently for 3–4, repeat 6–10 cycles, relaxing your jaw, shoulders, and hands on each exhale.",
  },
  {
    key: "shutdown",
    label: "Shutdown / numbing",
    descriptors: "Foggy, flat, avoidant, hard to start, nothing feels rewarding.",
    firstMove:
      "Get bright light for 2–5 minutes, do 60 seconds of brisk movement, drink water, then do one starter task under 2 minutes.",
  },
  {
    key: "escalation",
    label: "Rapid escalation",
    descriptors: "Quick 0-to-60, regrettable reactions, can't listen, catastrophizing.",
    firstMove:
      "Stop-State-Schedule: stop and pause for 10 seconds, state a simple truth without blame, and schedule a return time before you respond.",
  },
  {
    key: "recovery",
    label: "Slow recovery",
    descriptors: "Stress lingers, replay loops, sleep disrupted, tired but still keyed up.",
    firstMove:
      "Take a 5–10 minute walk without your phone, unclenching deliberately every minute, before trying to solve anything.",
  },
  {
    key: "fawn",
    label: "Fawn / people-pleasing",
    descriptors: "Saying yes when you mean no, over-apologizing, abandoning needs to keep others calm.",
    firstMove:
      "Pause before agreeing. Practice one honest line: “I need to think about that before I say yes.”",
  },
];

const PATTERNS = [
  {
    keys: ["survival", "shutdown"],
    threshold: 4,
    note: "If Survival and Shutdown both score high across a week, you may be cycling — revving high then crashing. The fix is consistent recovery, not more grit.",
  },
];

export default function StateReactivityScan() {
  return (
    <AuditInstrument
      kicker="Human OS · Firmware Module"
      code="SRS-5 · REV. A"
      title="2-Minute State + Reactivity Scan"
      intro="Rate each area 1–5. Your highest score is your starting layer."
      scaleLow="No problem"
      scaleHigh="Serious problem"
      dimensions={DIMENSIONS}
      patterns={PATTERNS}
      exercise={getFirstMove("firmware")}
      footerNote="This is a self-reflection tool tied to Chapter 3 of the Human OS manual — not a diagnostic instrument, and not a substitute for professional care."
    />
  );
}
