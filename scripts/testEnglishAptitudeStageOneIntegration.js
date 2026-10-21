#!/usr/bin/env node
const assert = require("node:assert/strict");
const { editableBankToCanonical } = require("../src/Data/EnglishAptitude/englishQuestionBankSync");
const { validateCompleteEnglishStageBank } = require("../src/Data/EnglishAptitude/englishStageBankQuality");
const {
  getActivityIdsForStage,
  getActivitiesForStage,
  validateQuestionActivityMappings,
} = require("../src/Data/EnglishAptitude/englishActivityRegistry");

const levelId = "L1";
const stageId = "S1";
const registeredActivities = getActivitiesForStage(levelId, stageId);
const activityIds = getActivityIdsForStage(levelId, stageId);
const activityById = new Map(registeredActivities.map(activity => [activity.activityId, activity]));
const activityForType = (half, questionType) => {
  const activity = registeredActivities.find(item => item.half === half && item.questionTypes.includes(questionType));
  assert(activity, `The registry must have an activity for ${questionType} in ${half}.`);
  return activity;
};

const metadata = {
  source: { sourceType: "original", reference: "Synthetic test-only bank data" },
  rights: { status: "original", basis: "Newly authored synthetic test data" },
  feedback: { correct: "Review the supporting details.", incorrect: "Reread the prompt and the relevant text." },
};
const otherTypes = [
  "vocabulary_in_context",
  "antonyms",
  "word_relationships_word_formation",
  "inference_supporting_evidence",
  "grammar_error_identification",
  "sentence_correction",
  "paragraph_improvement",
  "sentence_ordering_combining_construction",
  "short_written_response",
  "listening_oral_response",
];
const passages = [];
const questions = [];
const serialByType = new Map();
function makePassage(id, type, half, title, order) {
  return {
    id, type, half, title, order,
    text: `Synthetic ${title} passage for integration tests only.`,
    source: { sourceType: "original", reference: "Synthetic test-only bank data" },
    rights: { status: "original", basis: "Newly authored synthetic test passage" },
  };
}
function makeQuestion(questionType, half, passageId, activityOverride) {
  const activity = activityOverride || activityForType(half, questionType);
  assert(activity.half === half, "Assigned activity half should agree with question half.");
  assert(activity.questionTypes.includes(questionType), "Assigned activity should allow the question type.");
  const serial = (serialByType.get(questionType) || 0) + 1;
  serialByType.set(questionType, serial);
  const question = {
    id: `eng-l1-s1-${questionType}-${half}-${String(serial).padStart(3, "0")}`,
    questionType,
    levelId,
    stageId,
    half,
    moduleId: activity.moduleId,
    activityId: activity.activityId,
    prompt: `Synthetic ${questionType.replaceAll("_", " ")} question ${serial}.`,
    difficulty: 1,
    status: "draft",
    version: 1,
    ...structuredClone(metadata),
  };
  if (passageId) question.passageId = passageId;

  if (["short_story_comprehension", "nonfiction_passage_comprehension", "vocabulary_in_context", "antonyms", "word_relationships_word_formation", "grammar_error_identification", "paragraph_improvement"].includes(questionType)) {
    Object.assign(question, {
      responseFormat: "single_select",
      options: ["Option A", "Option B", "Option C", "Option D"],
      answerKey: ["Option A"],
    });
  } else if (questionType === "inference_supporting_evidence") {
    Object.assign(question, {
      responseFormat: "evidence_response",
      rubric: { criteria: [{ name: "Relevant evidence", maxPoints: 2 }, { name: "Explanation", maxPoints: 2 }] },
    });
  } else if (questionType === "sentence_correction") {
    Object.assign(question, { responseFormat: "sentence_edit", answerGuidance: "Correct the sentence while preserving its intended meaning." });
  } else if (questionType === "sentence_ordering_combining_construction") {
    Object.assign(question, { responseFormat: "sentence_reorder", answerGuidance: "Arrange the sentences into a clear, grammatical sequence." });
  } else if (questionType === "short_written_response") {
    Object.assign(question, {
      responseFormat: "long_text",
      rubric: { criteria: [{ name: "Relevant content", maxPoints: 2 }, { name: "Clear reasoning", maxPoints: 2 }] },
    });
  } else if (questionType === "listening_oral_response") {
    Object.assign(question, { responseFormat: "oral_prompt", answerGuidance: "State the main point and one accurate detail heard." });
  }
  questions.push(question);
}
function addPassageQuestions(passage, questionType, activityId) {
  const activity = activityById.get(activityId);
  assert(activity, `Missing registered activity ${activityId}`);
  assert(activity.questionTypes.includes(questionType), `${activityId} does not allow ${questionType}`);
  for (let n = 0; n < 20; n += 1) makeQuestion(questionType, passage.half, passage.id, activity);
}

for (let order = 1; order <= 3; order += 1) {
  const passage = makePassage(`eng-l1-s1-story-${order}`, "short_story", "explore", `Synthetic story ${order}`, order);
  passages.push(passage);
  addPassageQuestions(passage, "short_story_comprehension", "ENG-L1-S1-EXP-01");
}
for (const [order, half, activityId] of [
  [1, "explore", "ENG-L1-S1-EXP-02"],
  [2, "explore", "ENG-L1-S1-EXP-03"],
  [3, "extend", "ENG-L1-S1-EXT-01"],
]) {
  const passage = makePassage(`eng-l1-s1-nonfiction-${order}`, "nonfiction_passage", half, `Synthetic nonfiction ${order}`, order);
  passages.push(passage);
  addPassageQuestions(passage, "nonfiction_passage_comprehension", activityId);
}
for (const questionType of otherTypes) {
  for (const half of ["explore", "extend"]) {
    for (let n = 0; n < 10; n += 1) makeQuestion(questionType, half);
  }
}

const bank = {
  formatVersion: "1.0",
  bankId: "english-L1-S1-activity-quality-integration-test",
  levelId,
  stageId,
  bankVersion: 1,
  passages,
  questions,
};
const { canonical } = editableBankToCanonical(bank, { activityIds });
assert.equal(canonical.questions.length, 320);
assert.equal(canonical.questions.filter(item => item.half === "explore").length, 200);
assert.equal(canonical.questions.filter(item => item.half === "extend").length, 120);
assert.deepEqual(validateCompleteEnglishStageBank(canonical, { activityIds }), []);
assert.deepEqual(validateQuestionActivityMappings(canonical, { requireAllActivities: true }), []);
assert.equal(new Set(canonical.questions.map(item => item.id)).size, 320);

console.log("English Aptitude Stage 1 integration tests passed: 320-question structure, approved 200/120 split, all reading-passage minimums, all ten 10+10 type allocations, registered activity/module/type mappings, and full-stage validation.");
