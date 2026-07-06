"use client";

import AuditInstrument from "@/components/manual/AuditInstrument";

const DIMENSIONS = [
  {
    key: "safety",
    label: "Safety",
    descriptors: "On edge, scanning for problems, need for control or certainty, body tension.",
    firstMove:
      "Name what's making you feel unsafe in one sentence, then ask what's actually in your control right now. Add one small stabilizing action before trying to solve the rest.",
  },
  {
    key: "connection",
    label: "Connection",
    descriptors: "Unseen or unsupported, sensitive to tone, withdrawing or seeking reassurance, carrying resentment.",
    firstMove:
      "Reach out with one honest, low-stakes message today rather than waiting to be reached out to first.",
  },
  {
    key: "competence",
    label: "Competence",
    descriptors: "Behind or overwhelmed, tasks feel heavy, avoiding failure, no felt progress.",
    firstMove:
      "Pick the smallest possible next step and do only that — define what “good enough” looks like before you start.",
  },
  {
    key: "autonomy",
    label: "Autonomy",
    descriptors: "Trapped by obligations, urge to resist or escape, saying yes when you mean no.",
    firstMove:
      "Name one choice that's actually yours today, even a small one, and make it deliberately.",
  },
  {
    key: "meaning",
    label: "Meaning",
    descriptors: "Bored, cynical, busy but pointless, craving novelty or escape.",
    firstMove:
      "Do one five-minute act of contribution or creation — something that matters to you, not just something urgent.",
  },
];

const ADVISORY = {
  text: "Note: if you're in Survival or Shutdown, state distorts needs perception — especially Safety and Connection. Run a state tool first.",
  href: "/tools/state-reactivity-scan",
  label: "Run the State + Reactivity Scan",
};

export default function NeedsScan() {
  return (
    <AuditInstrument
      kicker="Human OS · Kernel Module"
      code="NS-5 · REV. A"
      title="2-Minute Needs Scan"
      intro="Rate each area 1–5. Your highest score is your starting need."
      scaleLow="No problem"
      scaleHigh="Serious problem"
      dimensions={DIMENSIONS}
      advisory={ADVISORY}
      footerNote="This is a self-reflection tool tied to Chapter 4 of the Human OS manual — not a diagnostic instrument, and not a substitute for professional care."
    />
  );
}
