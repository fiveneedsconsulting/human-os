import { Target } from "lucide-react";

// Renders a chapter's "First Move" practice exercise. Used both inline in the
// manual chapter and on the matching instrument's results screen.
export default function FirstMove({ exercise }) {
  if (!exercise) return null;
  const { title, hook, steps, reflection } = exercise;

  return (
    <div
      className="rounded-sm p-6 border-2"
      style={{ borderColor: "#A8783A", backgroundColor: "#DED9CB" }}
    >
      <div className="flex items-center gap-2 mb-3">
        <Target size={15} className="text-brass" />
        <span className="font-mono text-[10px] uppercase tracking-widest text-brass">
          Your First Move — practice
        </span>
      </div>

      <h3 className="font-display text-xl text-ink mb-2">{title}</h3>

      {hook && (
        <p className="font-body text-sm text-ink mb-4 italic">{hook}</p>
      )}

      <ol className="space-y-2 mb-5">
        {steps.map((step, i) => (
          <li key={i} className="flex gap-3 font-body text-sm text-inkSoft">
            <span className="font-mono text-xs text-brass shrink-0 mt-0.5">
              {i + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>

      <div className="border-t pt-4" style={{ borderColor: "#B9B2A0" }}>
        <span className="font-mono text-[10px] uppercase tracking-widest text-brass">
          Then reflect
        </span>
        <p className="font-body text-sm text-inkSoft mt-1.5 leading-relaxed">
          {reflection}
        </p>
      </div>
    </div>
  );
}
