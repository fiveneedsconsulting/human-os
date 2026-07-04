import LayerChapter from "@/components/manual/LayerChapter";
import { getChapterBySlug } from "@/lib/manualChapters";
import content from "@/content/manual/drivers";

export default function Drivers() {
  return <LayerChapter meta={getChapterBySlug("drivers")} content={content} />;
}
