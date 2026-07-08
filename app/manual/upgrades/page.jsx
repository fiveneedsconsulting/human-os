import LayerChapter from "@/components/manual/LayerChapter";
import { getChapterBySlug } from "@/lib/manualChapters";
import content from "@/content/manual/upgrades";

const toolCallout = {
  href: "/tools/skill-priority-scan",
  label: "Run the scan",
  body: "Not sure which skill to train first? The 2-Minute Skill Priority Scan scores all five modules and points you to the one that would change the most — with a first rep to install it.",
};

export default function Upgrades() {
  return (
    <LayerChapter
      meta={getChapterBySlug("upgrades")}
      content={content}
      toolCallout={toolCallout}
    />
  );
}
