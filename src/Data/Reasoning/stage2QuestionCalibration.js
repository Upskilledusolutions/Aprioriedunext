import { STAGE2_QUESTIONS } from "./questionBankStage2";
import { getStage2ExpandedQuestionsForActivity } from "./stage2QuestionExpansion";

export const STAGE2_CONTENT_MODES = {
  computation: { label: "Computation", description: "You will need to calculate or manipulate numerical information." },
  textReasoning: { label: "Text-Based Reasoning", description: "You will reason from written information, clues or concepts rather than primarily calculating." },
  computationReasoning: { label: "Computation + Reasoning", description: "You will interpret a situation and then use calculations to reach and check the answer." },
};

const modeForActivity = {
  "Q-L1-S2-EXP-advanced-number-reasoning": "computation",
  "Q-L1-S2-EXP-multi-step-strategies": "computationReasoning",
  "Q-L1-S2-EXP-patterns-and-relationships": "computation",
  "Q-L1-S2-EXT-strategy-selection": "computationReasoning",
  "Q-L1-S2-EXT-communicating-solutions": "textReasoning",
  "V-L1-S2-EXP-reading-structure": "textReasoning",
  "V-L1-S2-EXP-argument-mapping": "textReasoning",
  "V-L1-S2-EXP-assumptions-and-inference": "textReasoning",
  "V-L1-S2-EXT-comparing-arguments": "textReasoning",
  "V-L1-S2-EXT-evidence-evaluation": "textReasoning",
};

const normalizeDifficulty = (value) => ({ easy: 1, medium: 2, hard: 3 }[value] || (typeof value === "number" ? value : 1));

function decorate(question) {
  const mode = modeForActivity[question.activityId] || "textReasoning";
  return {
    ...question,
    targetGrade: 3,
    difficulty: normalizeDifficulty(question.difficulty),
    contentMode: mode,
    contentModeLabel: STAGE2_CONTENT_MODES[mode].label,
    contentModeDescription: STAGE2_CONTENT_MODES[mode].description,
    calibrationStatus: "Calibrated for Level 1 / Grade 3 Stage 2 delivery",
  };
}

export function getStage2CalibratedQuestions(activityId) {
  const bankQuestions = STAGE2_QUESTIONS.filter((question) => question?.activityId === activityId);
  const expandedQuestions = getStage2ExpandedQuestionsForActivity(activityId);
  return [...bankQuestions, ...expandedQuestions].map(decorate);
}
