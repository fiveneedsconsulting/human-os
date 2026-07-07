"use client";

import AuditInstrument from "@/components/manual/AuditInstrument";

const DIMENSIONS = [
  {
    key: "relief",
    label: "Short-term relief scripts",
    descriptors: "Phone escape, stress snacking, avoiding hard tasks or conversations.",
    firstMove:
      "Write down one specific relief script: the cue that starts it, the behavior, and the payoff it delivers. Then pick a replacement with the same payoff at lower cost — like a 90-second long-exhale reset instead of the scroll. Keep the payoff. Change the script.",
  },
  {
    key: "control",
    label: "Control scripts",
    descriptors: "Over-checking, micromanaging, late work to feel “caught up.”",
    firstMove:
      "Write down one specific control script: the cue, the behavior, and the payoff (usually relief from feeling behind or uncertain). Then design a lower-cost way to get that same certainty — a fixed daily check time instead of constant rechecking.",
  },
  {
    key: "disconnection",
    label: "Disconnection scripts",
    descriptors: "Withdrawing from conflict, sarcasm under pressure, numbing instead of recovering.",
    firstMove:
      "Write down one specific disconnection script: the cue, the behavior, and the payoff (usually protection through distance). Then pick a replacement that still protects you but keeps the connection — a named pause instead of a silent withdrawal.",
  },
  {
    key: "chaos",
    label: "Chaos scripts",
    descriptors: "No morning default, reactive days, too many decisions that could be habits.",
    firstMove:
      "Install one keystone script for 7 days: a morning boot sequence, a daily movement snack, a recovery block, or an evening shutdown. Anchor it to a stable cue and run the minimum version — so easy it feels almost silly. Consistency beats intensity.",
  },
];

export default function ScriptAudit() {
  return (
    <AuditInstrument
      kicker="Human OS · Scripts Module"
      code="SA-4 · REV. A"
      title="2-Minute Script Audit"
      intro="Rate each area 1–5. For your highest-scoring area, you'll write down one specific script — the cue that starts it, the behavior, and the payoff it delivers. That's your starting target."
      scaleLow="No problem"
      scaleHigh="Serious problem"
      dimensions={DIMENSIONS}
      footerNote="This is a self-reflection tool tied to Chapter 6 of the Human OS manual — not a diagnostic instrument. The rule: keep the payoff, change the script. Environment beats willpower."
    />
  );
}
