import LayerChapter from "@/components/manual/LayerChapter";
import { getChapterBySlug } from "@/lib/manualChapters";
import content from "@/content/manual/firmware";

const toolCallouts = [
  {
    href: "/tools/state-reactivity-scan",
    label: "Run the scan",
    body: "Not sure which of these five patterns is running the show right now? The 2-Minute State + Reactivity Scan scores all five and points you to a first move.",
  },
  {
    href: "/tools/sensitivity-spectrum",
    label: "Take the calibration",
    body: "If the sensitivity mismatch pattern above sounds familiar, the Signal Sensitivity Calibration gives you a dignified, instrument-style read on where your nervous system actually sits.",
  },
];

export default function Firmware() {
  return (
    <LayerChapter
      meta={getChapterBySlug("firmware")}
      content={content}
      toolCallout={toolCallouts}
    />
  );
}
