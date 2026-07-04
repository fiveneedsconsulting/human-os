import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getAdjacentChapters } from "@/lib/manualChapters";

export function ChapterHeader({ number, title, subtitle }) {
  return (
    <div className="mb-10">
      <Link
        href="/manual"
        className="font-mono text-[10px] tracking-widest uppercase text-brass hover:text-brassLight transition-colors"
      >
        Human OS Manual
      </Link>
      <div className="font-mono text-xs tracking-widest uppercase text-inkSoft mt-4 mb-2">
        Chapter {number}
      </div>
      <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-3">{title}</h1>
      <p className="font-body text-lg text-inkSoft">{subtitle}</p>
    </div>
  );
}

export function SectionHeading({ children }) {
  return (
    <h2 className="font-display text-2xl mt-12 mb-5">{children}</h2>
  );
}

export function Prose({ children }) {
  return (
    <div className="font-body leading-relaxed text-inkSoft space-y-4 max-w-2xl">
      {children}
    </div>
  );
}

export function PatternCard({ name, children }) {
  return (
    <div
      className="rounded-sm p-5 border bg-panel"
      style={{ borderColor: "#B9B2A0" }}
    >
      <div className="font-display text-lg text-ink mb-1.5">{name}</div>
      <p className="font-body text-sm leading-relaxed text-inkSoft">{children}</p>
    </div>
  );
}

export function StoryBox({ children }) {
  return (
    <div
      className="rounded-sm p-6 border bg-canvas max-w-2xl"
      style={{ borderColor: "#B9B2A0" }}
    >
      <div className="font-mono text-[10px] tracking-widest uppercase text-brass mb-3">
        In practice
      </div>
      <p className="font-body text-sm leading-relaxed text-inkSoft">{children}</p>
    </div>
  );
}

export function ToolCallout({ href, label, children }) {
  return (
    <div
      className="rounded-sm p-6 border bg-panel max-w-2xl flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
      style={{ borderColor: "#B9B2A0" }}
    >
      <p className="font-body text-sm leading-relaxed text-inkSoft">{children}</p>
      <Link
        href={href}
        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-sm bg-signal text-canvas font-body font-medium text-sm hover:bg-signalDark transition-colors whitespace-nowrap"
      >
        {label} <ArrowRight size={15} />
      </Link>
    </div>
  );
}

export function ChapterNav({ slug }) {
  const { prev, next } = getAdjacentChapters(slug);
  return (
    <div
      className="mt-16 pt-8 border-t flex items-center justify-between gap-4"
      style={{ borderColor: "#B9B2A0" }}
    >
      {prev ? (
        <Link
          href={`/manual/${prev.slug}`}
          className="inline-flex items-center gap-2 font-body text-sm text-inkSoft hover:text-ink transition-colors"
        >
          <ArrowLeft size={15} />
          <span>
            Ch. {prev.number} — {prev.title}
          </span>
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link
          href={`/manual/${next.slug}`}
          className="inline-flex items-center gap-2 font-body text-sm text-inkSoft hover:text-ink transition-colors text-right"
        >
          <span>
            Ch. {next.number} — {next.title}
          </span>
          <ArrowRight size={15} />
        </Link>
      ) : (
        <span />
      )}
    </div>
  );
}
