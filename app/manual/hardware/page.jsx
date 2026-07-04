import LayerChapter from "@/components/manual/LayerChapter";
import { getChapterBySlug } from "@/lib/manualChapters";
import content from "@/content/manual/hardware";

export default function Hardware() {
  return <LayerChapter meta={getChapterBySlug("hardware")} content={content} />;
}
