import LayerChapter from "@/components/manual/LayerChapter";
import { getChapterBySlug } from "@/lib/manualChapters";
import content from "@/content/manual/scripts";

export default function ScriptsChapter() {
  return <LayerChapter meta={getChapterBySlug("scripts")} content={content} />;
}
