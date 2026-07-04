import LayerChapter from "@/components/manual/LayerChapter";
import { getChapterBySlug } from "@/lib/manualChapters";
import content from "@/content/manual/upgrades";

export default function Upgrades() {
  return <LayerChapter meta={getChapterBySlug("upgrades")} content={content} />;
}
