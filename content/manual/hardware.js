const hardware = {
  tagline: "Your power supply",
  intro: [
    "Your “energy budget” works like money: you have income (sleep, food, hydration, movement, recovery), expenses (work, stress, parenting, decisions, conflict), and leaks — things that drain you without paying you back. Most people try to earn more energy while ignoring the leaks, then wonder why they're still broke.",
    "Hardware is the constraint for every other layer. If your body is depleted, your nervous system runs hotter, your needs feel louder, and your habits become fragile. That's not a mindset problem. It's a power supply problem.",
    "By the end of this chapter, you'll be able to run a quick energy audit, identify your biggest leaks, and install a Minimum Viable Maintenance Plan you can actually execute for 7 days — even with kids, travel, shift work, or a calendar that hates you.",
  ],
  controls: [
    "Your hardware layer sets the baseline for how your Human OS performs. It strongly influences mood stability, patience and impulse control, focus and attention span, motivation, stress tolerance, social capacity, recovery speed, decision quality, and physical comfort.",
    "When hardware is unstable, you'll often misdiagnose it as a discipline issue, a personality issue, a relationship issue, or a “I need a better plan” problem. Sometimes those diagnoses are right. But if your battery is dying, your plans become fan fiction.",
  ],
  howItFails: {
    intro: "Hardware failure usually looks like a slow drift into “why am I like this?” Here are the five common failure clusters.",
    patterns: [
      { name: "Sleep debt / circadian chaos", body: "You wake up tired even after enough hours in bed. You need caffeine to become a person. The afternoon crash is predictable, and you're “wired at night, dead in the morning.” Weekend sleep whiplash never seems to fix it." },
      { name: "Unstable fuel / hydration", body: "Energy swings and brain fog that track meals. Mood shifts, cravings, and late-night snacking. Headaches or lightheadedness that you've stopped noticing." },
      { name: "Sedentary + stiffness", body: "Low baseline energy despite “rest.” Tight neck, back, and hips — feeling older than you should. Restlessness that makes sleep worse, and movement that feels harder than it used to." },
      { name: "Chronic stress / no recovery", body: "Always “on,” never fully off. Scrolling is your primary recovery tool. You recover slowly from normal days, tension lives in your body, and you feel “busy tired” even when you technically rested." },
      { name: "Pain / illness as hidden drains", body: "Chronic discomfort you've normalized. Frequent minor illness. Sleep disrupted by pain or symptoms. Pushing through as a lifestyle rather than an exception." },
    ],
  },
  whyItFails: {
    heading: "The energy budget model",
    paragraphs: [
      "You get a limited amount of usable energy per day. You have income: sleep quality, nutrition, hydration, movement, sunlight, and recovery. You have expenses: work output, stress load, decisions, conflict, commuting, and caretaking. And you have leaks — silent drains that cost energy without producing value.",
      "Most people try to improve hardware by adding “healthy habits” on top of a broken baseline. That's like taking a second job while your bank account is being quietly drained by subscriptions you forgot you had. Plug leaks first. Then increase income.",
      "The most common leaks: late screens, alcohol (a sleep-quality tax even when you “sleep fine”), late caffeine, notification checking, decision fatigue from no defaults, unresolved stress loops, overcommitment, and untreated pain. You don't need to eliminate every leak. You need to stop pretending they're free.",
      "Sleep is your system update. It affects mood, focus, appetite regulation, impulse control, recovery, and stress reactivity. When sleep is compromised, everything costs more.",
      "Real-world constraints matter. If you have young kids, aim for consistency and recovery, not perfection. Shift work requires anchoring sleep blocks and protecting light exposure strategically. High-stress periods need a deliberate downshift ritual — bedtime won't fix itself.",
      "Low energy threatens all five needs simultaneously. Tired brains detect more threat, so Safety feels compromised. You withdraw or snap at people, so Connection degrades. Tasks feel harder and confidence drops, so Competence suffers. Everything costs more effort, so Autonomy feels restricted. And fatigue flattens life until nothing feels like it matters, which is Meaning going offline. A lot of “motivation problems” are actually energy problems wearing a trench coat.",
    ],
  },
  maintenancePlan: {
    heading: "Pick one or two. Run them for 7 days.",
    tools: [
      { name: "Sleep anchor", body: "One consistent wake time six to seven days a week, a caffeine cutoff eight hours before bed, five to ten minutes of morning light, and a twenty-minute landing sequence before sleep — dim lights, no work decisions, minimal screens." },
      { name: "Fuel stability", body: "Protein at your first meal, one glass of water before caffeine, and one glass mid-day. Stability beats perfection." },
      { name: "Movement snacks", body: "Three two-to-four-minute movement snacks spread through the day, plus a ten-minute walk after one meal if you can." },
      { name: "Daily downshift", body: "One daily two-to-ten-minute deliberate downshift — long-exhale breathing, a phone-free walk, or a body scan." },
      { name: "Plug one leak", body: "Identify your biggest drain — late screens, alcohol, late caffeine, notifications, or overcommitment — pick one rule, and track your energy daily at a 1–10 score around mid-afternoon." },
    ],
    story:
      "Priya was leading a team through a hard quarter. She told herself she needed more discipline, woke up earlier, skipped breakfast, drank more coffee, and pushed through tension headaches. Within a week she was irritable, scattered, and convinced she was failing as a leader. She ran the energy audit: sleep debt and stress recovery were highest. Her fix wasn't “try harder” — it was an MVMP: consistent wake time, caffeine cutoff, protein at first meal, three movement snacks, and a five-minute phone-free walk after lunch. Seven days later she was still busy — but steadier. Her leadership improved not because she got tougher, but because she stopped running the organization on a dying battery.",
  },
};

export default hardware;
