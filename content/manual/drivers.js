const drivers = {
  tagline: "Default settings, not destiny",
  intro: [
    "Drivers are your default settings: how you take in information, how you decide, how you communicate, and what you do under stress. They're not “who you are” — they're what your system does first unless you deliberately choose otherwise.",
    "Personality differences aren't character flaws. They're predictable patterns. Awareness matters because most friction isn't caused by malice — it's caused by two decent people using different defaults and assuming the other is being difficult on purpose.",
    "By the end of this chapter, you'll be able to identify your likely defaults without a test, recognize what you do when stressed, and use a few translation moves that reduce conflict fast without pretending to be someone else.",
  ],
  controls: [
    "Drivers shape how you interact with the world and other people. This layer strongly influences communication style, decision pace, detail level, conflict style, collaboration preferences, feedback response, motivation triggers, and tolerance for change and ambiguity.",
    "Important link to earlier chapters: when hardware is low, everyone's drivers get worse. When firmware is activated, drivers become rigid. When needs are threatened, drivers turn into protective behaviors. Don't psychoanalyze personality when someone is hungry, sleep-deprived, or in Survival mode.",
  ],
  howItFails: {
    intro: "These collision points are common enough to name. The fact that they're predictable means they're fixable.",
    patterns: [
      { name: "Pace mismatch", body: "One person wants to talk now; the other needs time to think. One pushes for closure; the other resists commitment. One escalates urgency; the other shuts down." },
      { name: "Detail mismatch", body: "One wants specifics and data first; the other wants the pattern and the possibilities. One feels “bogged down”; the other feels “unsafe moving forward without facts.”" },
      { name: "Values / tone mismatch", body: "One prioritizes truth and efficiency; the other prioritizes impact and harmony. One uses bluntness as clarity; the other hears it as disrespect." },
      { name: "Closure / control mismatch", body: "One sets deadlines; the other feels boxed in. One keeps options open; the other feels anxious and stuck. One reads flexibility as chaos; the other reads structure as oppression." },
    ],
  },
  whyItFails: {
    heading: "Defaults become rigid under stress",
    paragraphs: [
      "Introversion versus Extraversion is about where you recharge and how you process. Introversion leans toward internal processing — thoughtful, focused — with blind spots around under-communicating. Under stress it withdraws and loops internally. Extraversion leans toward interactive processing — fast engagement, momentum — with blind spots around dominating airtime. Under stress it talks more and reads silence as disapproval. The classic misread: the introvert thinks the extravert is loud and controlling; the extravert thinks the introvert is withholding and passive.",
      "Sensing versus Intuition is about how you take in information. Sensing leans toward concrete facts and specifics, with blind spots around dismissing the big picture. Under stress it fixates on details and demands certainty. Intuition leans toward patterns and possibilities, with blind spots around skipping steps. Under stress it jumps to worst-case narratives. The classic misread: the Sensor thinks the Intuitive is unrealistic and vague; the Intuitive thinks the Sensor is stuck and missing the point.",
      "Thinking versus Feeling is about decision criteria. Thinking leans toward logic and objective standards, with blind spots around sounding cold. Under stress it gets blunt and critical. Feeling leans toward values and relational harmony, with blind spots around avoiding necessary conflict. Under stress it people-pleases or withdraws. The classic misread: the Thinker says the Feeler is emotional and irrational; the Feeler says the Thinker is cold and disrespectful.",
      "Judging versus Perceiving is about how you manage time and decisions. Judging leans toward structure and closure, with blind spots around feeling controlling. Under stress it micromanages. Perceiving leans toward flexibility and options, with blind spots around delaying decisions. Under stress it avoids commitment and scrambles last minute. The classic misread: the Judger thinks the Perceiver is irresponsible; the Perceiver thinks the Judger is controlling.",
      "In calm conditions, your drivers are preferences. Under stress, they become protective programs. State and needs amplify misinterpretation. Before labeling a driver problem, ask: are we depleted (Chapter 2)? Are we activated (Chapter 3)? Which need is threatened (Chapter 4)? If any of those are off, the driver conflict will look personal even when it isn't.",
    ],
  },
  maintenancePlan: {
    heading: "Match the script to the mismatch",
    tools: [
      { name: "Introversion / Extraversion", body: "I: “I need 30 minutes to think. I'll come back at ___ with my view.” E: “I think out loud — I'm exploring, not deciding. Stop me if it's too much.”" },
      { name: "Sensing / Intuition", body: "S: “Give me one concrete example and the current facts, then I'm in.” N: “Here's the pattern and where it's going — I'll list the next three concrete steps.”" },
      { name: "Thinking / Feeling", body: "T: “I'm being direct for clarity, not to attack. Tell me if my tone lands wrong.” F: “I'm naming impact because it affects outcomes — I'm not avoiding the problem.”" },
      { name: "Judging / Perceiving", body: "J: “Let's pick a decision point. We can revise later if data changes.” P: “I need options. Give me a deadline and what good enough looks like.”" },
    ],
    story:
      "Taylor wants quick closure and assigns deadlines; Sam keeps raising alternatives. Taylor reads Sam as stalling. Sam reads Taylor as controlling. Tone escalates. Taylor runs a repair, then they do a decision handshake: 15 minutes to explore, decide at the end, revisit in two weeks if new data appears. Sam gets autonomy. Taylor gets closure. Same people. Better protocol.",
  },
};

export default drivers;
