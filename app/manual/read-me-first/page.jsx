import {
  ChapterHeader,
  SectionHeading,
  Prose,
  PatternCard,
  ChapterNav,
} from "@/components/manual/ChapterShell";
import { getChapterBySlug } from "@/lib/manualChapters";

const LAYERS = [
  { name: "Hardware", body: "Body / Energy — sleep, nutrition, movement, illness, pain, and basic energy availability. When hardware is failing, everything else becomes harder and louder." },
  { name: "Firmware", body: "Nervous System / Reactivity — stress response, threat detection, recovery, and sensitivity. Firmware problems feel like “I can't calm down” or “I can't care.”" },
  { name: "Kernel", body: "Needs / Emotions / Motivation — your built-in priority engine. When the kernel is strained, motivation becomes inconsistent and behavior gets reactive or avoidant." },
  { name: "Apps", body: "Thoughts / Attention / Beliefs / Skills / Habits — your day-to-day programs. App problems look like procrastination, distraction, conflict, and underperformance." },
  { name: "Network", body: "Social + Digital Environment — relationships, groups, culture, status dynamics, and algorithms competing for your attention. Feels like chronic friction, isolation, or being stuck in the feed." },
];

const MISDIAGNOSES = [
  { name: "“I need more discipline.”", body: "Often actually: sleep debt plus cognitive overload. First move: reduce your workload, add recovery, and set one tiny next action." },
  { name: "“We need to have a serious conversation.”", body: "Often actually: both people are in survival state. First move: regulate first — pause, eat, walk, sleep — then schedule the conversation." },
  { name: "“I'm unmotivated.”", body: "Often actually: unmet autonomy or meaning, masked as procrastination. First move: identify which need is starving; renegotiate the task." },
  { name: "“I'm broken.”", body: "Often actually: chronic stress response with no recovery rituals. First move: stabilize your nervous system for 72 hours before diagnosing your personality." },
  { name: "“I need a better plan.”", body: "Often actually: attention fragmentation and unrealistic scope. First move: limit work-in-progress, define a smaller target, protect your focus window." },
];

const NEEDS = [
  { name: "Safety", body: "“Am I safe enough to relax and function?” Unmet: anxiety, irritability, vigilance, shutdown, compulsive checking." },
  { name: "Connection", body: "“Am I accepted and supported?” Unmet: loneliness, resentment, people-pleasing, clinginess, testing others." },
  { name: "Competence", body: "“Can I handle what's in front of me?” Unmet: frustration, overwhelm, shame, procrastination, perfectionism." },
  { name: "Autonomy", body: "“Do I have control over my life and time?” Unmet: anger, restlessness, passive resistance, disengagement." },
  { name: "Meaning", body: "“Does this matter, and does it fit who I am?” Unmet: emptiness, cynicism, numbing, “what's the point?” thinking." },
];

const STATES = [
  { name: "Shutdown", body: "Low energy, low engagement, low motivation. Your system is conserving resources. Common signs: “I don't care,” hard to start anything, avoidance, passive scrolling." },
  { name: "Survival", body: "High threat response. Your system is mobilized to protect you. Common signs: racing thoughts, irritability, snapping, can't relax even when you should." },
  { name: "Connected-Creative", body: "Regulated and resourced. You can access curiosity, nuance, learning, connection, and strategic thinking. Common signs: flexible problem-solving, humor and perspective." },
];

export default function ReadMeFirst() {
  const meta = getChapterBySlug("read-me-first");
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <ChapterHeader number={meta.number} title={meta.title} subtitle={meta.subtitle} />

      <Prose>
        <p>
          This manual is a troubleshooting guide for being human. It's designed to help
          you quickly diagnose what's actually wrong — or “off” — and apply a fix that
          has a chance of working, without turning your life into an endless
          self-improvement side quest.
        </p>
        <p>
          Here's the practical rule you can use today: start low in the stack. If
          you're exhausted, dysregulated, or under threat, don't try to solve it with
          mindset, strategy, or a “serious talk.” Fix the base layer first.
        </p>
        <p>
          Most people do the opposite. They try to think their way out of low sleep,
          negotiate their way out of a stress response, or plan their way out of
          burnout. That's like trying to run a major software update while your laptop
          is overheating. It's not weakness. It's physics.
        </p>
        <p>
          This manual is not a manifesto, a personality gospel, or a moral judgment of
          your life choices. The goal is a system you can use repeatedly. You'll learn
          how to locate a problem in the right layer, apply a first fix quickly, test
          whether it worked, and iterate without spiraling.
        </p>
      </Prose>

      <SectionHeading>The Human OS map</SectionHeading>
      <Prose>
        <p>
          Think of yourself as a system with layers. When a layer is struggling, the
          symptoms often appear somewhere else — usually in your behavior,
          relationships, or productivity. The trick is to stop treating symptoms as
          root causes.
        </p>
      </Prose>
      <div className="grid sm:grid-cols-2 gap-4 mt-6 max-w-2xl">
        {LAYERS.map((l) => (
          <PatternCard key={l.name} name={l.name}>
            {l.body}
          </PatternCard>
        ))}
      </div>

      <SectionHeading>Common misdiagnoses — and better first moves</SectionHeading>
      <Prose>
        <p>
          If you take one idea from this chapter, make it this: when performance and
          behavior degrade, check Hardware and Firmware first. Higher layers depend on
          lower layers. You can't think your way out of a depleted body or an activated
          nervous system.
        </p>
      </Prose>
      <div className="grid sm:grid-cols-2 gap-4 mt-6 max-w-2xl">
        {MISDIAGNOSES.map((m) => (
          <PatternCard key={m.name} name={m.name}>
            {m.body}
          </PatternCard>
        ))}
      </div>

      <SectionHeading>The Five Needs Engine</SectionHeading>
      <Prose>
        <p>
          Your brain isn't random. It's running a needs engine. When needs are met, you
          tend to operate with flexibility, patience, and competence. When needs are
          unmet, you don't become bad — you become protective. Emotions are signals
          from this engine. A key move throughout this manual: ask “What need is this
          emotion protecting?” That question alone stops a lot of unnecessary
          self-criticism.
        </p>
      </Prose>
      <div className="grid sm:grid-cols-2 gap-4 mt-6 max-w-2xl">
        {NEEDS.map((n) => (
          <PatternCard key={n.name} name={n.name}>
            {n.body}
          </PatternCard>
        ))}
      </div>

      <SectionHeading>Three system states</SectionHeading>
      <Prose>
        <p>
          Most advice assumes you're calm, rested, and rational. Your nervous system
          often has other plans. You operate in three broad states, and the state
          you're in determines what's possible.
        </p>
      </Prose>
      <div className="grid sm:grid-cols-2 gap-4 mt-6 max-w-2xl">
        {STATES.map((s) => (
          <PatternCard key={s.name} name={s.name}>
            {s.body}
          </PatternCard>
        ))}
      </div>

      <SectionHeading>The debugging loop</SectionHeading>
      <Prose>
        <p>
          Random self-improvement is chaos with a vision board. You need a loop. The
          Human OS debugging loop has six steps: name the symptom, form a layer
          hypothesis, run a quick test, apply one intervention for 24–72 hours, observe
          what changed, and adjust — keep, refine, or move to the next layer.
        </p>
        <p>
          The goal isn't perfection. The goal is learning what works for your specific
          system. Most people skip the “observe and adjust” step and wonder why nothing
          sticks.
        </p>
        <p>
          You don't need to fix everything. You need to run one test. Pick the layer
          that scored highest on your self-scan, apply the corresponding first move,
          and observe for 72 hours before deciding anything else — then ask: what
          changed, what didn't, and what's the next smallest test?
        </p>
      </Prose>

      <ChapterNav slug={meta.slug} />
    </div>
  );
}
