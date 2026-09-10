import { STAGE2_QUESTIONS } from "./questionBankStage2";
import { getStage2ExpandedQuestionsForActivity } from "./stage2QuestionExpansion";
import { getStage2ElevatedComputationQuestions } from "./stage2ElevatedComputationBank";
import { prepareReasoningQuestionSet } from "./reasoningOptionQuality";

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
    difficulty: normalizeDifficulty(question.difficulty),
    contentMode: mode,
    contentModeLabel: STAGE2_CONTENT_MODES[mode].label,
    contentModeDescription: STAGE2_CONTENT_MODES[mode].description,
    calibrationStatus: "Calibrated for Level 1 Stage 2 delivery",
  };
}

function validateSet(activityId, questions) {
  const ids = new Set();
  const duplicateIds = questions.filter((question) => ids.has(question.id)).map((question) => question.id);
  questions.forEach((question) => ids.add(question.id));
  const invalidAnswers = questions.filter((question) => !question.options.includes(question.answer)).map((question) => question.id);
  const duplicateOptions = questions.filter((question) => new Set(question.options).size !== question.options.length).map((question) => question.id);
  if (questions.length !== 10 || duplicateIds.length || invalidAnswers.length || duplicateOptions.length) {
    throw new Error(`Stage 2 question-set validation failed for ${activityId}: expected 10 unique valid questions.`);
  }
  return questions;
}

export function getStage2CalibratedQuestions(activityId) {
  const elevatedComputation = getStage2ElevatedComputationQuestions(activityId);
  const sourceQuestions = elevatedComputation.length
    ? elevatedComputation
    : [
        ...STAGE2_QUESTIONS.filter((question) => question?.activityId === activityId),
        ...getStage2ExpandedQuestionsForActivity(activityId),
      ];

  const prepared = prepareReasoningQuestionSet(sourceQuestions.map(decorate));
  return validateSet(activityId, prepared);
}
