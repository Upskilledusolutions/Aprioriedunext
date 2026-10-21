/**
 * English Aptitude activity registry.
 *
 * Stable IDs and mappings for the first implementation slice: Level 1, Stage 1.
 * Later levels/stages are added only after this pattern is validated. Test fixtures
 * must reference these registered IDs instead of inventing activity IDs.
 */
const { QUESTION_TYPES } = require("./englishQuestionSchema");

const ENGLISH_ACTIVITY_REGISTRY_VERSION = 1;
const MODULES = Object.freeze([
  {
    moduleId: "L1-S1-M1",
    levelId: "L1",
    stageId: "S1",
    half: "explore",
    title: "Explore: Reading Foundations",
    order: 1,
  },
  {
    moduleId: "L1-S1-M2",
    levelId: "L1",
    stageId: "S1",
    half: "explore",
    title: "Explore: Language and Reasoning",
    order: 2,
  },
  {
    moduleId: "L1-S1-M3",
    levelId: "L1",
    stageId: "S1",
    half: "extend",
    title: "Extend: Apply and Express",
    order: 3,
  },
]);

const ENGLISH_ACTIVITY_REGISTRY = Object.freeze([
  {
    activityId: "ENG-L1-S1-EXP-01",
    levelId: "L1",
    stageId: "S1",
    half: "explore",
    moduleId: "L1-S1-M1",
    order: 1,
    title: "Short Story: Read and Understand",
    focus: "Comprehension of complete short stories; questions assess explicit details, sequence and supported inference.",
    activityKind: "short_story_comprehension",
    questionTypes: ["short_story_comprehension"],
  },
  {
    activityId: "ENG-L1-S1-EXP-02",
    levelId: "L1",
    stageId: "S1",
    half: "explore",
    moduleId: "L1-S1-M1",
    order: 2,
    title: "Nonfiction Passage 1: Read and Understand",
    focus: "First Explore nonfiction passage with comprehension and evidence-supported interpretation.",
    activityKind: "nonfiction_comprehension",
    passageSlot: { type: "nonfiction_passage", half: "explore", ordinal: 1 },
    questionTypes: ["nonfiction_passage_comprehension", "inference_supporting_evidence"],
  },
  {
    activityId: "ENG-L1-S1-EXP-03",
    levelId: "L1",
    stageId: "S1",
    half: "explore",
    moduleId: "L1-S1-M1",
    order: 3,
    title: "Nonfiction Passage 2: Connect Ideas",
    focus: "Second Explore nonfiction passage with comprehension, key details and simple connections between ideas.",
    activityKind: "nonfiction_comprehension",
    passageSlot: { type: "nonfiction_passage", half: "explore", ordinal: 2 },
    questionTypes: ["nonfiction_passage_comprehension", "inference_supporting_evidence"],
  },
  {
    activityId: "ENG-L1-S1-EXP-04",
    levelId: "L1",
    stageId: "S1",
    half: "explore",
    moduleId: "L1-S1-M2",
    order: 4,
    title: "Words and Word Relationships",
    focus: "Foundational vocabulary in context, antonyms and word relationships/formation.",
    activityKind: "language_practice",
    questionTypes: ["vocabulary_in_context", "antonyms", "word_relationships_word_formation"],
  },
  {
    activityId: "ENG-L1-S1-EXP-05",
    levelId: "L1",
    stageId: "S1",
    half: "explore",
    moduleId: "L1-S1-M2",
    order: 5,
    title: "Grammar, Sentences and Evidence",
    focus: "Foundational grammar and sentence accuracy, paragraph logic, simple supported inference, written response and listening/oral prompts.",
    activityKind: "mixed_practice",
    questionTypes: [
      "inference_supporting_evidence",
      "grammar_error_identification",
      "sentence_correction",
      "paragraph_improvement",
      "sentence_ordering_combining_construction",
      "short_written_response",
      "listening_oral_response",
    ],
  },
  {
    activityId: "ENG-L1-S1-EXT-01",
    levelId: "L1",
    stageId: "S1",
    half: "extend",
    moduleId: "L1-S1-M3",
    order: 1,
    title: "Nonfiction: Deep Reading",
    focus: "Extend nonfiction comprehension with more deliberate evidence selection and connected language work.",
    activityKind: "nonfiction_comprehension",
    passageSlot: { type: "nonfiction_passage", half: "extend", ordinal: 1 },
    questionTypes: [
      "nonfiction_passage_comprehension",
      "vocabulary_in_context",
      "antonyms",
      "word_relationships_word_formation",
      "inference_supporting_evidence",
      "grammar_error_identification",
    ],
  },
  {
    activityId: "ENG-L1-S1-EXT-02",
    levelId: "L1",
    stageId: "S1",
    half: "extend",
    moduleId: "L1-S1-M3",
    order: 2,
    title: "Novel 1: Whole-Book Study",
    focus: "Extend reading of the selected whole novel across Stages 1–2. Use complete-book thinking and evidence-based responses, not novel extracts as comprehension passages.",
    activityKind: "whole_book_study",
    questionTypes: [
      "vocabulary_in_context",
      "antonyms",
      "word_relationships_word_formation",
      "inference_supporting_evidence",
      "paragraph_improvement",
      "sentence_ordering_combining_construction",
      "short_written_response",
    ],
  },
  {
    activityId: "ENG-L1-S1-EXT-03",
    levelId: "L1",
    stageId: "S1",
    half: "extend",
    moduleId: "L1-S1-M3",
    order: 3,
    title: "Listening, Speaking and Written Response",
    focus: "Listening comprehension and oral response, alongside sentence revision and clear written expression.",
    activityKind: "listening_oral_response",
    questionTypes: [
      "inference_supporting_evidence",
      "grammar_error_identification",
      "sentence_correction",
      "paragraph_improvement",
      "sentence_ordering_combining_construction",
      "short_written_response",
      "listening_oral_response",
    ],
  },
]);

function getModulesForStage(levelId, stageId) {
  return MODULES.filter(item => item.levelId === levelId && item.stageId === stageId).slice()
    .sort((a, b) => a.order - b.order);
}

function getActivitiesForStage(levelId, stageId, half) {
  return ENGLISH_ACTIVITY_REGISTRY.filter(item =>
    item.levelId === levelId && item.stageId === stageId && (!half || item.half === half)
  ).slice().sort((a, b) => a.order - b.order);
}

function getActivityIdsForStage(levelId, stageId) {
  return new Set(getActivitiesForStage(levelId, stageId).map(item => item.activityId));
}

function validateActivityRegistry() {
  const errors = [];
  const activityIds = new Set();
  const moduleIds = new Set();
  for (const module of MODULES) {
    if (moduleIds.has(module.moduleId)) errors.push(`Duplicate moduleId "${module.moduleId}".`);
    moduleIds.add(module.moduleId);
    if (!["explore", "extend"].includes(module.half)) errors.push(`Module "${module.moduleId}" has an invalid half.`);
  }
  for (const activity of ENGLISH_ACTIVITY_REGISTRY) {
    if (activityIds.has(activity.activityId)) errors.push(`Duplicate activityId "${activity.activityId}".`);
    activityIds.add(activity.activityId);
    const module = MODULES.find(item => item.moduleId === activity.moduleId);
    if (!module) errors.push(`Activity "${activity.activityId}" references unknown moduleId "${activity.moduleId}".`);
    else if (module.levelId !== activity.levelId || module.stageId !== activity.stageId || module.half !== activity.half) {
      errors.push(`Activity "${activity.activityId}" does not match its module's level, stage and half.`);
    }
    if (!Array.isArray(activity.questionTypes) || activity.questionTypes.length === 0) {
      errors.push(`Activity "${activity.activityId}" must declare supported question types.`);
    }
    for (const questionType of activity.questionTypes || []) {
      if (!QUESTION_TYPES.has(questionType)) errors.push(`Activity "${activity.activityId}" declares unsupported question type "${questionType}".`);
    }
    if (!["explore", "extend"].includes(activity.half)) errors.push(`Activity "${activity.activityId}" has an invalid half.`);
  }
  const stageActivities = getActivitiesForStage("L1", "S1");
  if (stageActivities.filter(item => item.half === "explore").length !== 5) {
    errors.push("L1/S1 must register exactly five Explore activities.");
  }
  if (stageActivities.filter(item => item.half === "extend").length !== 3) {
    errors.push("L1/S1 must register exactly three Extend activities.");
  }
  for (const half of ["explore", "extend"]) {
    for (const questionType of QUESTION_TYPES) {
      const compatible = stageActivities.some(item => item.half === half && item.questionTypes.includes(questionType));
      if (questionType === "short_story_comprehension" && half === "extend") continue;
      if (questionType === "short_story_comprehension" && half === "explore") {
        if (!compatible) errors.push("Short-story comprehension must be assigned to an Explore activity.");
        continue;
      }
      if (!compatible) errors.push(`Question type "${questionType}" has no compatible ${half} activity in L1/S1.`);
    }
  }
  return [...new Set(errors)];
}

function validateQuestionActivityMappings(bank, options = {}) {
  const errors = [];
  if (!bank || typeof bank !== "object" || !Array.isArray(bank.questions)) {
    return ["Bank must contain a questions array to validate activity mappings."];
  }
  const activities = getActivitiesForStage(bank.levelId, bank.stageId);
  const byId = new Map(activities.map(item => [item.activityId, item]));
  const foundIds = new Set();
  for (const [index, question] of bank.questions.entries()) {
    const prefix = `questions[${index}]`;
    if (!question || typeof question !== "object") continue;
    const activity = byId.get(question.activityId);
    if (!activity) {
      errors.push(`${prefix}: unknown activityId "${question.activityId}" for ${bank.levelId}/${bank.stageId}.`);
      continue;
    }
    foundIds.add(activity.activityId);
    if (question.levelId !== activity.levelId) errors.push(`${prefix}: levelId does not match registered activity "${activity.activityId}".`);
    if (question.stageId !== activity.stageId) errors.push(`${prefix}: stageId does not match registered activity "${activity.activityId}".`);
    if (question.half !== activity.half) errors.push(`${prefix}: half does not match registered activity "${activity.activityId}".`);
    if (question.moduleId !== activity.moduleId) errors.push(`${prefix}: moduleId does not match registered activity "${activity.activityId}".`);
    if (!activity.questionTypes.includes(question.questionType)) {
      errors.push(`${prefix}: questionType "${question.questionType}" is not allowed in activity "${activity.activityId}".`);
    }
  }
  if (options.requireAllActivities) {
    for (const activity of activities) {
      if (!foundIds.has(activity.activityId)) errors.push(`Registered activity "${activity.activityId}" has no questions in this bank.`);
    }
  }
  return [...new Set(errors)];
}

module.exports = {
  ENGLISH_ACTIVITY_REGISTRY_VERSION,
  MODULES,
  ENGLISH_ACTIVITY_REGISTRY,
  getModulesForStage,
  getActivitiesForStage,
  getActivityIdsForStage,
  validateActivityRegistry,
  validateQuestionActivityMappings,
};
