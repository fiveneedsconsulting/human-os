import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Mission */}
      <section className="max-w-3xl mx-auto px-5 py-16 sm:py-24">
        <span className="font-mono text-[10px] tracking-widest uppercase text-brass">
          Five Needs Consulting, LLC
        </span>
        <h1 className="font-display text-4xl sm:text-5xl leading-tight mt-4 mb-6">
          Most dysfunction is a clarity problem.
        </h1>
        <p className="font-body text-lg leading-relaxed text-inkSoft mb-8 max-w-xl">
          Five Needs Consulting helps leaders and teams see themselves and
          each other clearly — through practical, instrument-style tools
          instead of abstract theory. Leadership development and
          organizational excellence, built on frameworks you can actually
          apply under pressure.
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
          <span className="font-mono text-[10px] tracking-widest uppercase text-brass">
            About
          </span>
          <h2 className="font-display text-3xl mt-3 mb-6">
            Built by an operator, not a theorist.
          </h2>
          <p className="font-body leading-relaxed text-inkSoft mb-4 max-w-xl">
            I'm Jason Horton, a retired U.S. Army Major and a certified MBTI
            practitioner. My work has always come down to the same question:
            does this person understand themselves and the people around
            them well enough to lead under real conditions — uncertainty,
            stress, and consequence?
          </p>
          <p className="font-body leading-relaxed text-inkSoft max-w-xl">
            Five Needs Consulting exists to bring that same discipline to
            leadership development and organizational excellence work —
            practical instruments over personality-test trivia, dignifying
            language over clinical labels, and frameworks built to be used,
            not just read.
          </p>
        </div>
      </section>

      {/* Human OS */}
      <section id="human-os" className="max-w-3xl mx-auto px-5 py-16">
        <span className="font-mono text-[10px] tracking-widest uppercase text-brass">
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
          <span className="font-mono text-[10px] tracking-widest uppercase text-brass">
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
