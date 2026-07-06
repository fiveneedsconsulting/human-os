"use client";

import AuditInstrument from "@/components/manual/AuditInstrument";

const DIMENSIONS = [
  {
    key: "sleep",
    label: "Sleep debt / schedule",
    descriptors: "Wake-up quality, timing consistency, caffeine dependence.",
    firstMove:
      "Anchor one consistent wake time, set a caffeine cutoff eight hours before bed, and add a twenty-minute wind-down before sleep.",
  },
  {
    key: "fuel",
    label: "Fuel / hydration",
    descriptors: "Meal predictability, energy swings, brain fog.",
    firstMove:
      "Protein at your first meal, a glass of water before caffeine, and one glass mid-day. Stability beats perfection.",
  },
  {
    key: "movement",
    label: "Movement / stiffness",
    descriptors: "Sitting time, physical discomfort, baseline energy.",
    firstMove:
      "Three two-to-four-minute movement snacks through the day, plus a short walk after one meal.",
  },
  {
    key: "stress",
    label: "Stress / recovery",
    descriptors: "Always-on feeling, recovery quality, body tension.",
    firstMove:
      "One daily two-to-ten-minute deliberate downshift — long-exhale breathing, a phone-free walk, or a body scan.",
  },
  {
    key: "pain",
    label: "Pain / illness",
    descriptors: "Chronic discomfort, frequency of illness, symptoms ignored.",
    firstMove:
      "This one often isn't a lifestyle tweak — it may be worth addressing the underlying pain or symptoms directly rather than working around them.",
  },
];

const TIE_BREAK_ORDER = ["sleep", "stress", "fuel", "movement", "pain"];

export default function EnergyAudit() {
  return (
    <AuditInstrument
      kicker="Human OS · Hardware Module"
      code="EA-5 · REV. B"
      title="2-Minute Energy Audit"
      intro="Rate each area 1–5. Your highest score is your starting point — plug that leak first, then increase income."
      scaleLow="No problem"
      scaleHigh="Serious problem"
      dimensions={DIMENSIONS}
      tieBreakOrder={TIE_BREAK_ORDER}
      footerNote="This is a self-reflection tool tied to Chapter 2 of the Human OS manual — not a diagnostic instrument, and not a substitute for medical advice."
    />
  );
}
