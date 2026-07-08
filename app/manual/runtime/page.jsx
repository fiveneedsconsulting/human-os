import LayerChapter from "@/components/manual/LayerChapter";
import { getChapterBySlug } from "@/lib/manualChapters";
import content from "@/content/manual/runtime";

const toolCallout = {
  href: "/tools/runtime-audit",
  label: "Run the audit",
  body: "Not sure where your week is breaking down? The 2-Minute Runtime Audit scores anchors, buffers, role clarity, and needs coverage, then points you to your starting point.",
};

export default function Runtime() {
  return (
    <LayerChapter
      meta={getChapterBySlug("runtime")}
      content={content}
      toolCallout={toolCallout}
    />
  );
}
