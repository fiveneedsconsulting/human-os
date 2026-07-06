import {
  ChapterHeader,
  SectionHeading,
  Prose,
  PatternCard,
  StoryBox,
  ToolCallout,
  ChapterNav,
} from "@/components/manual/ChapterShell";

export default function LayerChapter({ meta, content, toolCallout }) {
  const { number, title, subtitle, slug } = meta;
  const { tagline, intro, controls, howItFails, whyItFails, maintenancePlan } = content;

  return (
    <div className="max-w-3xl mx-auto px-5 py-16">
      <ChapterHeader number={number} title={title} subtitle={subtitle} />

      <Prose>
        <p className="font-display text-xl text-ink">{tagline}</p>
        {intro.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Prose>

      <SectionHeading>What this layer controls</SectionHeading>
      <Prose>
        {controls.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Prose>

      <SectionHeading>How it fails</SectionHeading>
      <Prose>
        <p>{howItFails.intro}</p>
      </Prose>
      <div className="grid sm:grid-cols-2 gap-4 mt-6 max-w-2xl">
        {howItFails.patterns.map((pattern) => (
          <PatternCard key={pattern.name} name={pattern.name}>
            {pattern.body}
          </PatternCard>
        ))}
      </div>

      {toolCallout && (
        <div className="mt-6 max-w-2xl space-y-4">
          {(Array.isArray(toolCallout) ? toolCallout : [toolCallout]).map((tc) => (
            <ToolCallout key={tc.href} href={tc.href} label={tc.label}>
              {tc.body}
            </ToolCallout>
          ))}
        </div>
      )}

      <SectionHeading>{whyItFails.heading}</SectionHeading>
      <Prose>
        {whyItFails.paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </Prose>

      <SectionHeading>{maintenancePlan.heading}</SectionHeading>
      <div className="grid sm:grid-cols-2 gap-4 mt-2 mb-8 max-w-2xl">
        {maintenancePlan.tools.map((tool) => (
          <PatternCard key={tool.name} name={tool.name}>
            {tool.body}
          </PatternCard>
        ))}
      </div>
      <StoryBox>{maintenancePlan.story}</StoryBox>

      <ChapterNav slug={slug} />
    </div>
  );
}
