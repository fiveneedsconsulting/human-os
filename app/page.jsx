import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Mission */}
      <section className="max-w-3xl mx-auto px-5 py-16 sm:py-24">
        <span className="font-mono text-sm tracking-widest uppercase text-brass">
          Five Needs Consulting, LLC
        </span>
        <h1 className="font-display text-4xl sm:text-5xl leading-tight mt-4 mb-6">
          Pressure doesn't reveal character. It reveals defaults.
        </h1>
        <p className="font-body text-lg leading-relaxed text-inkSoft mb-8 max-w-xl">
          Defaults are what your system reaches for first — under fatigue,
          conflict, and uncertainty, before deliberate thought catches up.
          They're not character flaws; they're predictable patterns you can
          learn to read, in yourself and in the people you lead. Five Needs
          Consulting helps leaders and teams do that work deliberately —
          leadership development and organizational excellence built on
          practical instruments, not abstract theory.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#book"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-signal text-canvas font-body font-medium text-sm hover:bg-signalDark transition-colors"
          >
            Book a conversation <ArrowRight size={16} />
          </Link>
          <Link
            href="#human-os"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border font-body font-medium text-sm text-ink hover:border-brass transition-colors"
            style={{ borderColor: "#B9B2A0" }}
          >
            Explore Human OS
          </Link>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="border-t"
        style={{ borderColor: "#B9B2A0", backgroundColor: "#DED9CB" }}
      >
        <div className="max-w-3xl mx-auto px-5 py-16">
          <span className="font-mono text-sm tracking-widest uppercase text-brass">
            About
          </span>
          <h2 className="font-display text-3xl mt-3 mb-6">
            Twenty years of building leaders under pressure.
          </h2>
          <p className="font-body leading-relaxed text-inkSoft mb-4 max-w-xl">
            I'm Jason Horton, a retired U.S. Army Major. For more than two
            decades I led soldiers — in hostile environments, in the training
            simulations that prepare units for them, and across initial entry
            and leader development programs where the whole job was turning
            people into capable leaders on a deadline. I hold a master's
            degree in Human Resource Development, am a certified MBTI
            practitioner, and currently facilitate career and professional
            development programming at a regional university.
          </p>
          <p className="font-body leading-relaxed text-inkSoft mb-4 max-w-xl">
            Two things become clear when you lead under those conditions.
            Under pressure, people don't perform to their intentions — they
            perform to their defaults. And defaults don't change because
            someone delivered a good speech.
          </p>
          <p className="font-body leading-relaxed text-inkSoft max-w-xl">
            That gap is what Five Needs Consulting exists to close. Durable
            change takes what good training has always taken: an honest read
            of where you actually are, one variable at a time, a clear
            standard, and an after-action review you don't flinch from. A lot
            of leadership development stops at insight, because insight is
            comfortable. Rigor is what converts insight into capability — and
            expecting that rigor of people is a form of respect, not severity.
          </p>
        </div>
      </section>

      {/* Human OS */}
      <section id="human-os" className="max-w-3xl mx-auto px-5 py-16">
        <span className="font-mono text-sm tracking-widest uppercase text-brass">
          The manual
        </span>
        <h2 className="font-display text-3xl mt-3 mb-6">Human OS</h2>
        <p className="font-body leading-relaxed text-inkSoft mb-8 max-w-xl">
          Human OS is a working manual for understanding yourself and the
          people you lead — nine chapters built as a stack of layers, from
          your physical foundation up to the skills you can deliberately
          upgrade, with practical instruments built into the chapters where
          they're relevant.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/manual"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-signal text-canvas font-body font-medium text-sm hover:bg-signalDark transition-colors"
          >
            Read the manual <ArrowRight size={16} />
          </Link>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm border font-body font-medium text-sm text-ink hover:border-brass transition-colors"
            style={{ borderColor: "#B9B2A0" }}
          >
            Take an assessment
          </Link>
        </div>
      </section>

      {/* Book */}
      <section
        id="book"
        className="border-t"
        style={{ borderColor: "#B9B2A0", backgroundColor: "#DED9CB" }}
      >
        <div className="max-w-3xl mx-auto px-5 py-16">
          <span className="font-mono text-sm tracking-widest uppercase text-brass">
            Start a conversation
          </span>
          <h2 className="font-display text-3xl mt-3 mb-6">
            Book an introductory call.
          </h2>
          <p className="font-body leading-relaxed text-inkSoft mb-8 max-w-xl">
            If you're leading people through uncertainty and want a clearer
            picture of what's actually going on — with yourself, your team,
            or your organization — reach out.
          </p>
          <a
            href="mailto:fiveneeds01@gmail.com?subject=Consultation%20Inquiry"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-signal text-canvas font-body font-medium text-sm hover:bg-signalDark transition-colors"
          >
            <Mail size={16} /> fiveneeds01@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
}
