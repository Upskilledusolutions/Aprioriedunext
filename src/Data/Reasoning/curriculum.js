export const REASONING_LEVELS = [
  { id: "L1", level: 1, label: "Level 1" },
  { id: "L2", level: 2, label: "Level 2" },
  { id: "L3", level: 3, label: "Level 3" },
  { id: "L4", level: 4, label: "Level 4" },
  { id: "L5", level: 5, label: "Level 5" },
  { id: "L6", level: 6, label: "Level 6" },
  { id: "L7", level: 7, label: "Level 7" },
  { id: "L8", level: 8, label: "Level 8" },
  { id: "L9", level: 9, label: "Level 9" },
];

export const REASONING_STAGES = {
  quantitative: [
    { id: "S1", number: 1, title: "Foundation Quantitative & Reasoning" },
    { id: "S2", number: 2, title: "Advanced Problem Solving" },
    { id: "S3", number: 3, title: "Mathematical Thinking" },
    { id: "S4", number: 4, title: "Math Olympiad" },
    { id: "S5", number: 5, title: "Proof & Advanced Mathematics" },
    { id: "S6", number: 6, title: "Mathematical Research" },
  ],
  verbal: [
    { id: "S1", number: 1, title: "Foundation Verbal & Reasoning" },
    { id: "S2", number: 2, title: "Critical Reading & Argument" },
    { id: "S3", number: 3, title: "Analytical & Scholarly Writing" },
    { id: "S4", number: 4, title: "Essay Competitions" },
    { id: "S5", number: 5, title: "Research Skills" },
    { id: "S6", number: 6, title: "Research Writing & Publication" },
  ],
};

export const CURRICULUM_HALVES = {
  explore: { id: "explore", label: "Explore", percentage: 50 },
  extend: { id: "extend", label: "Extend", percentage: 50 },
};

export function getLevel(levelId) {
  return REASONING_LEVELS.find((level) => level.id === levelId) || REASONING_LEVELS[0];
}

export function getStages(track) {
  return REASONING_STAGES[track] || [];
}
