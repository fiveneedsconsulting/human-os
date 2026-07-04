import LayerChapter from "@/components/manual/LayerChapter";
import { getChapterBySlug } from "@/lib/manualChapters";
import content from "@/content/manual/kernel";

export default function Kernel() {
  return <LayerChapter meta={getChapterBySlug("kernel")} content={content} />;
}
