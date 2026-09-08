export const REASONING_ACTIVITIES = [
  {
    id: "Q-L1-S1-EXP-number-patterns",
    track: "quantitative",
    levelId: "L1",
    half: "explore",
    stageId: "S1",
    moduleId: "number-patterns",
    topicId: "patterns",
    title: "Number Patterns: Explore",
    description: "Notice simple patterns and explain how numbers change from one step to the next.",
    questionIds: ["Q-L1-Q-S1-EXP-NUM-001"],
  },
  {
    id: "Q-L1-S1-EXT-number-patterns",
    track: "quantitative",
    levelId: "L1",
    half: "extend",
    stageId: "S1",
    moduleId: "number-patterns",
    topicId: "patterns",
    title: "Number Patterns: Extend",
    description: "Use a growing pattern to predict a later term and explain your reasoning.",
    questionIds: ["Q-L1-Q-S1-EXT-NUM-001"],
  },
  {
    id: "V-L1-S1-EXP-evidence-and-claims",
    track: "verbal",
    levelId: "L1",
    half: "explore",
    stageId: "S1",
    moduleId: "evidence-and-claims",
    topicId: "claims",
    title: "Claims and Evidence: Explore",
    description: "Learn to distinguish a claim from a fact, preference or instruction.",
    questionIds: ["Q-L1-V-S1-EXP-ARG-001"],
  },
  {
    id: "V-L1-S1-EXT-evidence-and-claims",
    track: "verbal",
    levelId: "L1",
    half: "extend",
    stageId: "S1",
    moduleId: "evidence-and-claims",
    topicId: "claims",
    title: "Claims and Evidence: Extend",
    description: "Choose evidence that directly supports a claim and explain why it is relevant.",
    questionIds: ["Q-L1-V-S1-EXT-ARG-001"],
  },
];

export function getActivities(filters = {}) {
  return REASONING_ACTIVITIES.filter((item) => Object.entries(filters).every(([key, value]) => item[key] === value));
}

export function getActivityById(id) {
  return REASONING_ACTIVITIES.find((item) => item.id === id) || null;
}
