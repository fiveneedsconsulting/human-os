import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MANUAL_CHAPTERS } from "@/lib/manualChapters";

export default function ManualIndex() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <span className="font-mono text-[10px] tracking-widest uppercase text-brass">
        The manual
      </span>
      <h1 className="font-display text-4xl mt-3 mb-4">Human OS</h1>
      <p className="font-body text-inkSoft mb-10 max-w-xl">
        A troubleshooting guide for being human, built as a stack of layers —
        from the physical foundation up to the skills you can deliberately
        upgrade. Read it in order, or jump to the layer that matches what
        you're dealing with right now.
      </p>

      <div className="space-y-4">
        {MANUAL_CHAPTERS.map((chapter) => (
          <Link
            key={chapter.slug}
            href={`/manual/${chapter.slug}`}
            className="block rounded-sm p-6 border hover:border-brass transition-colors"
            style={{ borderColor: "#B9B2A0", backgroundColor: "#DED9CB" }}
          >
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="font-mono text-[10px] tracking-widest uppercase text-inkSoft">
                  Chapter {chapter.number}
                </span>
                <h2 className="font-display text-xl mt-0.5">
                  {chapter.title}{" "}
                  <span className="text-inkSoft font-body text-base">
                    — {chapter.subtitle}
                  </span>
                </h2>
              </div>
              <ArrowRight size={16} className="text-brass shrink-0 ml-4" />
            </div>
            <p className="font-body text-sm text-inkSoft">{chapter.dek}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
