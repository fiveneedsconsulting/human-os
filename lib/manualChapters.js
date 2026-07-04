export const MANUAL_CHAPTERS = [
  {
    number: 1,
    slug: "read-me-first",
    title: "Read Me First",
    subtitle: "The stack, the scan, the loop",
    dek: "A troubleshooting guide for being human — how to find the right layer, apply a first fix, and iterate without spiraling.",
  },
  {
    number: 2,
    slug: "hardware",
    title: "Hardware",
    subtitle: "Energy budget",
    dek: "Your physical foundation — sleep, fuel, movement, and recovery — and why it's the constraint every other layer runs on.",
  },
  {
    number: 3,
    slug: "firmware",
    title: "Firmware",
    subtitle: "Nervous system + reactivity",
    dek: "The automatic system that manages threat response and regulation — Shutdown, Survival, and Connected-Creative.",
  },
  {
    number: 4,
    slug: "kernel",
    title: "Kernel",
    subtitle: "Needs, emotions, and choice",
    dek: "The Five Needs Engine — Safety, Connection, Competence, Autonomy, Meaning — and how emotions signal what's threatened.",
  },
  {
    number: 5,
    slug: "drivers",
    title: "Drivers",
    subtitle: "Personality patterns + friction",
    dek: "Your default settings for taking in information, deciding, and communicating — and the predictable friction they cause.",
  },
  {
    number: 6,
    slug: "scripts",
    title: "Scripts",
    subtitle: "Habits + autopilot",
    dek: "The cue-script-payoff loops running your day on autopilot, and how to redesign them without relying on willpower.",
  },
  {
    number: 7,
    slug: "runtime",
    title: "Runtime",
    subtitle: "Roles + routines",
    dek: "The daily and weekly structure your scripts run inside — and why a stable runtime beats a perfect schedule.",
  },
  {
    number: 8,
    slug: "upgrades",
    title: "Upgrades",
    subtitle: "Skills as modules",
    dek: "Upgradable capabilities that expand what your system can do under stress — installed through reps, not insight.",
  },
  {
    number: 9,
    slug: "field-manual",
    title: "Field Manual",
    subtitle: "Debugging real life",
    dek: "The in-the-moment guide: a fast diagnostic and a clean first move for when you're stressed, stuck, or spiraling.",
  },
];

export function getChapterBySlug(slug) {
  return MANUAL_CHAPTERS.find((c) => c.slug === slug);
}

export function getAdjacentChapters(slug) {
  const index = MANUAL_CHAPTERS.findIndex((c) => c.slug === slug);
  return {
    prev: index > 0 ? MANUAL_CHAPTERS[index - 1] : null,
    next: index < MANUAL_CHAPTERS.length - 1 ? MANUAL_CHAPTERS[index + 1] : null,
  };
}
