#!/usr/bin/env node
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  ENGLISH_ACTIVITY_REGISTRY,
  MODULES,
  getModulesForStage,
  getActivitiesForStage,
  getActivityIdsForStage,
  validateActivityRegistry,
  validateQuestionActivityMappings,
} = require("../src/Data/EnglishAptitude/englishActivityRegistry");
const { assertRoundTripIntegrity } = require("../src/Data/EnglishAptitude/englishQuestionBankSync");

const samplePath = path.join(__dirname, "../content/EnglishAptitude/editable/L1/S1/english-L1-S1-sample.json");
const editable = JSON.parse(fs.readFileSync(samplePath, "utf8"));
const activityIds = getActivityIdsForStage("L1", "S1");
const { canonical } = assertRoundTripIntegrity(editable, { activityIds });

assert.deepEqual(validateActivityRegistry(), []);
assert.equal(MODULES.filter(module => module.levelId === "L1" && module.stageId === "S1").length, 3);
assert.equal(getModulesForStage("L1", "S1").length, 3);
assert.equal(getActivitiesForStage("L1", "S1").length, 8);
assert.equal(getActivitiesForStage("L1", "S1", "explore").length, 5);
assert.equal(getActivitiesForStage("L1", "S1", "extend").length, 3);
assert.equal(activityIds.size, 8);
assert.equal(new Set(ENGLISH_ACTIVITY_REGISTRY.map(activity => activity.activityId)).size, ENGLISH_ACTIVITY_REGISTRY.length);
assert.deepEqual(validateQuestionActivityMappings(canonical), []);
assert.equal(editable.editorNotes.activityIdsAreProvisional, false);
assert.ok(canonical.questions.every(question => activityIds.has(question.activityId)));

const missingActivities = validateQuestionActivityMappings(canonical, { requireAllActivities: true });
assert.equal(missingActivities.length, 4, "The deliberately small sample should identify the four registered activities that it does not yet populate.");

const unknownActivity = structuredClone(canonical);
unknownActivity.questions[0].activityId = "ENG-L1-S1-EXP-99";
assert(validateQuestionActivityMappings(unknownActivity).some(error => error.includes('unknown activityId "ENG-L1-S1-EXP-99"')));

const wrongModule = structuredClone(canonical);
wrongModule.questions[0].moduleId = "L1-S1-M3";
assert(validateQuestionActivityMappings(wrongModule).some(error => error.includes("moduleId does not match registered activity")));

const wrongHalf = structuredClone(canonical);
wrongHalf.questions[0].half = "extend";
assert(validateQuestionActivityMappings(wrongHalf).some(error => error.includes("half does not match registered activity")));

const disallowedType = structuredClone(canonical);
disallowedType.questions[0].questionType = "vocabulary_in_context";
assert(validateQuestionActivityMappings(disallowedType).some(error => error.includes('is not allowed in activity "ENG-L1-S1-EXP-01"')));

const slotPassage = {
  id: "eng-l1-s1-slot-nonfiction-1",
  type: "nonfiction_passage",
  half: "explore",
  order: 1,
};
const slotQuestion = {
  ...canonical.questions[0],
  id: "eng-l1-s1-slot-question",
  questionType: "nonfiction_passage_comprehension",
  responseFormat: "single_select",
  options: ["A", "B", "C", "D"],
  answerKey: ["A"],
  half: "explore",
  moduleId: "L1-S1-M1",
  activityId: "ENG-L1-S1-EXP-02",
  passageId: slotPassage.id,
};
const passageSlotBank = { ...canonical, passages: [slotPassage], questions: [slotQuestion] };
assert.deepEqual(validateQuestionActivityMappings(passageSlotBank), []);
const missingSlotReference = structuredClone(passageSlotBank);
delete missingSlotReference.questions[0].passageId;
assert(validateQuestionActivityMappings(missingSlotReference).some(error => error.includes("requires a passageId matching its registered passage slot")));
const wrongSlotOrder = structuredClone(passageSlotBank);
wrongSlotOrder.passages[0].order = 2;
assert(validateQuestionActivityMappings(wrongSlotOrder).some(error => error.includes("passage order does not match the registered slot")));

console.log("English Aptitude activity-registry tests passed: stable IDs, three modules, five Explore and three Extend activities, valid question-type coverage in both halves, sample mapping integrity, and rejection of unknown or mismatched mappings.");
