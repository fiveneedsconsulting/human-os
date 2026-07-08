// Single source of truth for each chapter's "First Move" practice exercise.
// Rendered both inline in the chapter (via LayerChapter / bespoke pages) and
// on the matching instrument's results screen, so the two never diverge.
//
// Shape:
//   title      — short imperative name for the rep
//   hook       — optional line connecting the exercise to the chapter's instrument result
//   steps      — ordered practice steps
//   reflection — the observe/adjust prompt that turns the rep into learning

const firstMoves = {
  "read-me-first": {
    title: "Run one calibration",
    steps: [
      "Run the 2-minute self-scan and note your single highest-scoring layer.",
      "Apply that layer's first move — and nothing else. Change one variable, not five.",
    ],
    reflection:
      "Give it 72 hours before you touch anything else, then ask: what changed, what didn't, and what's the next smallest test? This isn't a character test — it's a calibration run.",
  },

  hardware: {
    title: "Build your minimum maintenance plan",
    hook: "Start with the leak your Energy Audit flagged highest.",
    steps: [
      "From your top cluster, install one small input — a consistent wake time, protein at your first meal, three movement snacks, a daily downshift, or plugging one leak.",
      "Write it down and run it for 7 days.",
      "Score your afternoon energy 1–10 each day so you have a signal to read.",
    ],
    reflection:
      "After 7 days: did your afternoon score move? Keep it, shrink it, or switch to the next leak. A lot of “motivation problems” are energy problems wearing a trench coat.",
  },

  firmware: {
    title: "Schedule a daily recovery appointment",
    hook: "If your scan flagged Survival Activation or Slow Recovery highest, this is your rep.",
    steps: [
      "Pick a fixed daily time when your stress is usually highest.",
      "Choose one: a phone-free walk, stretching with slow breathing, or a quiet body scan.",
      "Ten minutes. Non-negotiable, for 7 days.",
    ],
    reflection:
      "After 7 days: is your baseline lower? A daily block teaches your system that stress has an endpoint — which lowers baseline activation and makes every other tool work better.",
  },

  kernel: {
    title: "Name it, trace it, meet it",
    hook: "Practice on the need your scan flagged as most starving.",
    steps: [
      "Next time you feel off, name the emotion in one word.",
      "Ask which of the five needs is threatened, and write “I'm feeling ___ because I need ___.”",
      "Do one action under 10 minutes that directly meets that need — before anything else.",
    ],
    reflection:
      "Each time, notice: did meeting the need lower the charge? You're building the reflex of emotion → need → choice, so it's available when you're reactive.",
  },

  drivers: {
    title: "Name the mismatch, use the script",
    hook: "Lead with the preference your calibration leaned on hardest — that's where your blind spot lives.",
    steps: [
      "Before your next likely-friction conversation, name the friction type: pace, detail, tone, or closure.",
      "Pick the matching translation script for your lean.",
      "Use it in the first 30 seconds, before tension builds.",
    ],
    reflection:
      "Afterward: did naming your default change how it landed? One week of deliberate translation beats a month of hoping people will figure it out on their own.",
  },

  scripts: {
    title: "Replace one script",
    hook: "Use the script your audit had you write down — the one cue-behavior-payoff loop you named.",
    steps: [
      "Write it as “When [cue], I [behavior] to get [payoff].”",
      "Keep the payoff. Choose a replacement behavior that delivers the same payoff at lower cost — and make it smaller than feels necessary.",
      "Add one friction change to the old behavior (phone in another room, snack out of sight). Run the swap for 7 days.",
    ],
    reflection:
      "After 7 days: is the new behavior firing on the old cue? If not, shrink it or change the cue — don't add willpower. Keep the payoff, change the script.",
  },

  runtime: {
    title: "Install three anchors",
    hook: "If your audit flagged Anchors highest, start here — they stabilize everything else.",
    steps: [
      "Boot (2 min): water + light + 10 breaths, or write your top 3 on paper.",
      "Reset (5 min): a walk or stretch after lunch.",
      "Shutdown (10 min): write tomorrow's first step, device cutoff, one decompression act. Attach each to an existing cue.",
    ],
    reflection:
      "After 7 days: which anchor held, which didn't? A 2-minute anchor you actually run beats a 45-minute routine you run twice. Fix the runtime before you blame the character.",
  },

  upgrades: {
    title: "Run the Skill Loop for 7 days",
    hook: "Train the module your scan scored highest — begin with Regulation if it's close.",
    steps: [
      "Define the minimum rep: a 90-second exhale before escalation, a one-line boundary script, or a summarize-then-respond translation move.",
      "Attach it to a cue and track it with a single checkbox each day.",
      "Run for 7 days before adding anything else.",
    ],
    reflection:
      "After 7 days: could you run the rep under pressure, not just in theory? Awkward is the entry fee — shrink the rep, don't quit. Insight can point; reps install.",
  },

  "field-manual": {
    title: "Debug one repeat problem",
    steps: [
      "Choose one problem you keep having — sleep drift, conflict loops, distraction, procrastination, resentment.",
      "Run the full-stack scan on it and pick your top layer.",
      "Take the smallest first move from that layer's cheat sheet. One change.",
    ],
    reflection:
      "Observe for 24 hours, then 7 days: what changed? You're not trying to become perfect — you're trying to become less breakable.",
  },
};

export function getFirstMove(slug) {
  return firstMoves[slug] || null;
}

export default firstMoves;
