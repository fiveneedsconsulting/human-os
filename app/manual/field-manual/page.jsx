import {
  ChapterHeader,
  SectionHeading,
  Prose,
  PatternCard,
  StoryBox,
  ChapterNav,
} from "@/components/manual/ChapterShell";
import FirstMove from "@/components/manual/FirstMove";
import { getChapterBySlug } from "@/lib/manualChapters";
import { getFirstMove } from "@/content/manual/firstMoves";

const SYMPTOM_PROFILES = [
  { name: "Hardware — Energy Budget", body: "Low patience, low focus, “everything feels harder than it should,” afternoon crash, brain fog, wired-but-tired. Root: sleep, fuel, hydration, movement, recovery." },
  { name: "Firmware — Nervous System + State", body: "Snapping, spiraling, numbing, shutdown, slow recovery after stress or conflict, “triggered” reactions. Root: automatic threat response and regulation speed." },
  { name: "Kernel — Needs, Emotions, and Choice", body: "Anxiety, resentment, shame, loneliness, cynicism. Procrastination, control, people-pleasing, drifting. Root: Safety, Connection, Competence, Autonomy, or Meaning threatened." },
  { name: "Drivers — Personality Defaults + Friction", body: "“We keep misunderstanding each other.” Conflict about process, not substance. Defaults getting rigid under stress. Root: pace, detail, tone, and closure mismatches." },
  { name: "Scripts — Habits + Autopilot", body: "Scrolling, snacking, or avoiding when stressed. Control and checking loops. Procrastination patterns. Root: cue-script-payoff loops running without deliberate choice." },
  { name: "Runtime — Roles + Routines", body: "Chaotic mornings, drifting nights, constant reaction mode. Role confusion: everything urgent, nothing owned. Root: missing anchors, buffers, and default decisions." },
  { name: "Upgrades — Skills as Modules", body: "Same problem repeating because the skill was never installed. Overthinking without action. Feeling helpless under pressure. Root: trained capability gap." },
];

const MISDIAGNOSES = [
  { name: "“I'm unmotivated.”", body: "Hardware is depleted. First move: water + food + 10-minute walk + earlier shutdown tonight." },
  { name: "“I need more discipline.”", body: "Script trap with no friction design. First move: identify the cue and payoff; add one friction change today." },
  { name: "“I'm anxious because I'm weak.”", body: "Safety need gap with no concrete plan. First move: write the next 3 steps and take one 10-minute action." },
  { name: "“We have a values problem.”", body: "Driver mismatch — pace, detail, tone, or closure. First move: decision handshake and translation move." },
  { name: "“I'm lazy — I always procrastinate.”", body: "Competence threat: fear of failure or uncertainty. First move: 2-minute start + define “good enough.”" },
  { name: "“I'm burned out because work is hard.”", body: "Needs neglect plus no recovery or runtime buffers. First move: add one recovery block, one boundary, and protect sleep." },
  { name: "“They're the problem.”", body: "System issue amplified by Survival state. First move: regulate first, then run a clean conversation script." },
  { name: "“I just need better time management.”", body: "Role clarity and runtime anchors missing. First move: install boot, reset, and shutdown anchors — tiny versions." },
];

export default function FieldManual() {
  const meta = getChapterBySlug("field-manual");
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <ChapterHeader number={meta.number} title={meta.title} subtitle={meta.subtitle} />

      <Prose>
        <p>
          This chapter is the “in the moment” guide. When you're stressed, stuck,
          reactive, distracted, or spiraling, you don't need philosophy — you need a
          fast diagnostic and a clean first move. The Human OS stack gives you a way
          to stop guessing and start debugging.
        </p>
        <p>
          Prime rule, again, because we forget it when we're stressed: start low in
          the stack and stabilize state before strategy. If your hardware is depleted
          or your firmware is in Survival, your “great plan” will be ignored like a
          terms-and-conditions popup.
        </p>
        <p>
          By the end of this chapter, you'll be able to run a full-stack diagnostic in
          under 2 minutes, identify the most likely layer or two, choose the smallest
          effective first move, and avoid random self-improvement thrashing. One
          change at a time. Observe. Adjust. Repeat.
        </p>
      </Prose>

      <SectionHeading>The stack in one page</SectionHeading>
      <Prose>
        <p>
          Each layer has a predictable symptom profile. When something is off, match
          the symptom to the layer before picking a tool.
        </p>
      </Prose>
      <div className="grid sm:grid-cols-2 gap-4 mt-6 max-w-2xl">
        {SYMPTOM_PROFILES.map((s) => (
          <PatternCard key={s.name} name={s.name}>
            {s.body}
          </PatternCard>
        ))}
      </div>

      <SectionHeading>Symptom → layer → first move</SectionHeading>
      <Prose>
        <p>
          Use the same loop every time: Symptom → Layer hypothesis → Quick test →
          Intervention → Observe → Adjust. Run it in under 2 minutes. The loop doesn't
          require certainty — it requires a reasonable first guess and 24 hours of
          observation.
        </p>
        <p>
          Mini-template: Symptom (one line). Most likely layer or two. Quick test (2
          minutes). First move (under 10 minutes). Observe for 24 hours — what
          changed? Adjust: smaller rep, different layer, different intervention.
        </p>
        <p>
          One-change rule: change one thing at a time for at least 24 hours, or 7 days
          for habits and routines. Otherwise you can't tell what worked. You're running
          a science experiment — don't shake the table.
        </p>
      </Prose>

      <SectionHeading>Common misdiagnoses</SectionHeading>
      <Prose>
        <p>
          Most people misname their problem and then pick the wrong tool. These are
          the most common wrong diagnoses and better alternatives.
        </p>
      </Prose>
      <div className="grid sm:grid-cols-2 gap-4 mt-6 max-w-2xl">
        {MISDIAGNOSES.map((m) => (
          <PatternCard key={m.name} name={m.name}>
            {m.body}
          </PatternCard>
        ))}
      </div>

      <SectionHeading>Why misdiagnosis happens</SectionHeading>
      <Prose>
        <p>
          When you're stressed or depleted, your brain grabs the nearest explanation.
          “I'm lazy.” “They're difficult.” “I just need to try harder.” These
          explanations feel true because they're emotionally immediate — but they
          point at the symptom layer, not the cause layer.
        </p>
        <p>
          Symptoms show up high in the stack — in behavior, scripts, and relationships
          — because that's where you can observe them. But the driver is usually
          lower: hardware debt, a firmware activation, or a need gap. Treating the
          symptom with a higher-layer tool while the lower layer stays broken is like
          taking headache pills while dehydrated.
        </p>
        <p>
          The solution is the debugging habit, not more willpower: name the symptom,
          hypothesize the layer, run the smallest test, observe, and adjust. Over
          time you build pattern recognition. That's what competence looks like:
          fewer surprises, faster recovery, better first moves.
        </p>
      </Prose>

      <SectionHeading>First moves by layer — the cheat sheet</SectionHeading>
      <Prose>
        <p>
          Hardware: drink water and eat something stable within 30 minutes; a 5-to-10
          minute walk; set an earlier shutdown tonight. Firmware: 90-second slow
          exhale before you speak or write; name the state; conflict pause: “I'm not
          at my best, give me 10 minutes.” Kernel: emotion to need gap to first move
          in 10 minutes.
        </p>
        <p>
          Drivers: summarize their logic or values first, then respond; decision
          handshake — pace, detail, closure, revisit rule. Scripts: identify cue and
          payoff, keep payoff, change script; add friction to the bad script. Runtime:
          install one anchor today; add one buffer; choose one default decision.
          Upgrades: pick one module and run the Skill Loop for 7 days.
        </p>
      </Prose>

      <div className="space-y-4 mt-6 max-w-2xl">
        <StoryBox>
          Scenario: Work stress spiral. You feel behind, anxious, jumpy. Hardware is
          1–2, Firmware is 2, Kernel is Safety. First move: 90-second downshift, write
          top 3 priorities, do one 10-minute action. Success in 24 hours: less
          spinning, one concrete win.
        </StoryBox>
        <StoryBox>
          Scenario: Procrastinating on something important. Kernel is Competence (fear
          of failure), Scripts is avoidance loop, Firmware is mild Survival. First
          move: 2-minute start — open the doc and write 3 bullets, then stop or
          continue.
        </StoryBox>
        <StoryBox>
          Scenario: Late-night phone drift. Scripts is relief payoff, Runtime has no
          shutdown, Hardware is carrying sleep debt, Firmware is wired. First move:
          phone charges outside the bedroom; replace with a 5-minute wind-down.
        </StoryBox>
      </div>

      <div className="mt-10 max-w-2xl">
        <FirstMove exercise={getFirstMove(meta.slug)} />
      </div>

      <ChapterNav slug={meta.slug} />
    </div>
  );
}
