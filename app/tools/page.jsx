import Link from "next/link";
import { ArrowRight } from "lucide-react";

const TOOLS = [
  {
    slug: "sensitivity-spectrum",
    name: "Signal Sensitivity Calibration",
    description:
      "A 15-question self-calibration on how your nervous system processes input — sound, light, mood, meaning. Grounded in Environmental Sensitivity research.",
    status: "live",
  },
  {
    slug: "energy-audit",
    name: "2-Minute Energy Audit",
    description:
      "A 15-question audit across the five most common hardware leaks — sleep, fuel, movement, stress recovery, and pain — that surfaces your biggest drain and a first move to fix it.",
    status: "live",
  },
  // Add future Human OS modules here following the same shape.
];

export default function ToolsIndex() {
  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <h1 className="font-display text-3xl mb-2">Instruments</h1>
      <p className="font-body text-inkSoft mb-10">
        Each tool is a piece of the Human OS manual you can actually use, not
        just read.
      </p>

      <div className="space-y-4">
        {TOOLS.map((tool) => (
          <Link
            key={tool.slug}
            href={`/tools/${tool.slug}`}
            className="block rounded-sm p-6 border hover:border-brass transition-colors"
            style={{ borderColor: "#B9B2A0", backgroundColor: "#DED9CB" }}
          >
            <div className="flex items-center justify-between mb-2">
              <h2 className="font-display text-xl">{tool.name}</h2>
              <ArrowRight size={16} className="text-brass" />
            </div>
            <p className="font-body text-sm text-inkSoft">{tool.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
