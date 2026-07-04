import LayerChapter from "@/components/manual/LayerChapter";
import { getChapterBySlug } from "@/lib/manualChapters";
import content from "@/content/manual/runtime";

export default function Runtime() {
  return <LayerChapter meta={getChapterBySlug("runtime")} content={content} />;
}
