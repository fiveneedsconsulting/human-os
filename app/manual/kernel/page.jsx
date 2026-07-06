import LayerChapter from "@/components/manual/LayerChapter";
import { getChapterBySlug } from "@/lib/manualChapters";
import content from "@/content/manual/kernel";

const toolCallout = {
  href: "/tools/needs-scan",
  label: "Run the scan",
  body: "Not sure which of the five needs is running the show right now? The 2-Minute Needs Scan scores all five and points you to a first move.",
};

export default function Kernel() {
  return (
    <LayerChapter
      meta={getChapterBySlug("kernel")}
      content={content}
      toolCallout={toolCallout}
    />
  );
}
