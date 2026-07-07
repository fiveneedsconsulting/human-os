import LayerChapter from "@/components/manual/LayerChapter";
import { getChapterBySlug } from "@/lib/manualChapters";
import content from "@/content/manual/drivers";

const toolCallouts = [
  {
    href: "/tools/defaults-friction-scan",
    label: "Run the scan",
    body: "Want a fast read on your four preference leans and your stress behavior? The 2-Minute Defaults + Friction Scan takes about two minutes.",
  },
  {
    href: "/tools/drivers-calibration",
    label: "Take the calibration",
    body: "For a deeper, 20-question read across all four dichotomies — with a combined profile and a translation script for each — take the full Drivers Calibration.",
  },
];

export default function Drivers() {
  return (
    <LayerChapter
      meta={getChapterBySlug("drivers")}
      content={content}
      toolCallout={toolCallouts}
    />
  );
}
