import LayerChapter from "@/components/manual/LayerChapter";
import { getChapterBySlug } from "@/lib/manualChapters";
import content from "@/content/manual/scripts";

const toolCallout = {
  href: "/tools/script-audit",
  label: "Run the audit",
  body: "Not sure which of these script traps is running your day? The 2-Minute Script Audit scores all four and points you to your starting target.",
};

export default function ScriptsChapter() {
  return (
    <LayerChapter
      meta={getChapterBySlug("scripts")}
      content={content}
      toolCallout={toolCallout}
    />
  );
}
