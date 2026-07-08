"use client";

import AuditInstrument from "@/components/manual/AuditInstrument";

const DIMENSIONS = [
  {
    key: "anchors",
    label: "Anchors",
    descriptors: "Chaotic mornings, no mid-day reset, evenings drifting without an intentional shutdown.",
    firstMove:
      "Install three tiny anchors this week — Boot (2 minutes: water + light + 10 breaths, or write your top 3 on paper), Reset (5 minutes: walk or stretch after lunch), and Shutdown (10 minutes: write tomorrow's first step, device cutoff, one decompression act). Attach each to an existing cue and run them for 7 days. A 2-minute anchor you actually run beats a 45-minute routine you run twice.",
  },
  {
    key: "buffers",
    label: "Buffers",
    descriptors: "Back-to-back meetings, constant task-switching, always in reactive mode, no focus blocks.",
    firstMove:
      "Protect one thing: a single daily focus block, or a 10-minute buffer between meetings. Every context switch you remove is executive bandwidth you get back.",
  },
  {
    key: "role-clarity",
    label: "Role clarity",
    descriptors: "Carrying everything in your head, no rule for saying no, unclear what “done” looks like.",
    firstMove:
      "List your top four to six roles, and for each write the minimum commitment that keeps it healthy on a hard week — not an ideal one. Get the invisible commitments out of your head and onto paper.",
  },
  {
    key: "needs-coverage",
    label: "Needs coverage",
    descriptors: "Week has no intentional connection, recovery is accidental, meaning is postponed.",
    firstMove:
      "Put one intentional connection moment, one recovery block, and one small meaningful action on the calendar this week — before the tasks fill every slot.",
  },
];

const TIE_BREAK_ORDER = ["anchors", "buffers", "role-clarity", "needs-coverage"];

export default function RuntimeAudit() {
  return (
    <AuditInstrument
      kicker="Human OS · Runtime Module"
      code="RA-4 · REV. A"
      title="2-Minute Runtime Audit"
      intro="Rate each area 1–5. Your highest score is your starting point — but fix anchors first if that scores highest, since they stabilize everything else."
      scaleLow="No problem"
      scaleHigh="Serious problem"
      dimensions={DIMENSIONS}
      tieBreakOrder={TIE_BREAK_ORDER}
      footerNote="This is a self-reflection tool tied to Chapter 7 of the Human OS manual — not a diagnostic instrument. The rule: fix the runtime before you blame the character. Change the structure and behavior follows."
    />
  );
}
