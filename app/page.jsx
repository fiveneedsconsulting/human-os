import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16 sm:py-24">
      <span className="font-mono text-[10px] tracking-widest uppercase text-brass">
        Five Needs Consulting · Human OS
      </span>
      <h1 className="font-display text-4xl sm:text-5xl leading-tight mt-4 mb-6">
        Most dysfunction is a clarity problem.
      </h1>
      <p className="font-body text-lg leading-relaxed text-inkSoft mb-8 max-w-xl">
        Human OS is a working manual for understanding yourself and the people
        you lead — built from the ground up as a set of practical instruments,
        not abstract theory. Read the frameworks. Take the calibrations. See
        where you actually fall.
      </p>
      <Link
        href="/tools"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-signal text-canvas font-body font-medium text-sm hover:bg-signalDark transition-colors"
      >
        Explore the tools <ArrowRight size={16} />
      </Link>
    </div>
  );
}
