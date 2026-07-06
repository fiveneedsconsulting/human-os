import LayerChapter from "@/components/manual/LayerChapter";
import { getChapterBySlug } from "@/lib/manualChapters";
import content from "@/content/manual/hardware";

const toolCallout = {
  href: "/tools/energy-audit",
  label: "Run the audit",
  body: "Not sure which of these five leaks is costing you the most? The 2-Minute Energy Audit scores all five and points you to the matching first move.",
};

export default function Hardware() {
  return (
    <LayerChapter
      meta={getChapterBySlug("hardware")}
      content={content}
      toolCallout={toolCallout}
    />
  );
}
