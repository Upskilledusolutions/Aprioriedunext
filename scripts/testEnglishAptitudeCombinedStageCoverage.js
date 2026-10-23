#!/usr/bin/env node
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const {
  editableBankToCanonical,
  assertRoundTripIntegrity,
} = require("../src/Data/EnglishAptitude/englishQuestionBankSync");
const { validateCompleteEnglishStageBank } = require("../src/Data/EnglishAptitude/englishStageBankQuality");
const {
  getActivityIdsForStage,
  validateQuestionActivityMappings,
} = require("../src/Data/EnglishAptitude/englishActivityRegistry");

const bankDirectory = path.join(__dirname, "../content/EnglishAptitude/editable/L1/S1");
const context = { activityIds: getActivityIdsForStage("L1", "S1") };
const expectedBanks = [
  ["english-L1-S1-story-01.json", "short_story_comprehension", 20, "explore"],
  ["english-L1-S1-story-02.json", "short_story_comprehension", 20, "explore"],
  ["english-L1-S1-story-03.json", "short_story_comprehension", 20, "explore"],
  ["english-L1-S1-nonfiction-explore-01.json", "nonfiction_passage_comprehension", 20, "explore"],
  ["english-L1-S1-nonfiction-explore-02.json", "nonfiction_passage_comprehension", 20, "explore"],
  ["english-L1-S1-nonfiction-extend-01.json", "nonfiction_passage_comprehension", 20, "extend"],
  ["english-L1-S1-vocabulary-in-context.json", "vocabulary_in_context", 20, null],
  ["english-L1-S1-antonyms.json", "antonyms", 20, null],
  ["english-L1-S1-word-relationships-word-formation.json", "word_relationships_word_formation", 20, null],
  ["english-L1-S1-inference-supporting-evidence.json", "inference_supporting_evidence", 20, null],
  ["english-L1-S1-grammar-error-identification.json", "grammar_error_identification", 20, null],
  ["english-L1-S1-sentence-correction.json", "sentence_correction", 20, null],
  ["english-L1-S1-paragraph-improvement.json", "paragraph_improvement", 20, null],
  ["english-L1-S1-sentence-ordering-combining-construction.json", "sentence_ordering_combining_construction", 20, null],
  ["english-L1-S1-short-written-response.json", "short_written_response", 20, null],
  ["english-L1-S1-listening-oral-response.json", "listening_oral_response", 20, null],
];

const passages = [];
const questions = [];
const bankIds = new Set();
for (const [fileName, expectedType, expectedCount, expectedHalf] of expectedBanks) {
  const filePath = path.join(bankDirectory, fileName);
  assert.ok(fs.existsSync(filePath), "Missing expected L1/S1 bank: " + fileName);
  const editable = JSON.parse(fs.readFileSync(filePath, "utf8"));
  assert.equal(editable.levelId, "L1", fileName + " must belong to L1.");
  assert.equal(editable.stageId, "S1", fileName + " must belong to S1.");
  assert.ok(editable.bankId, fileName + " must declare bankId.");
  assert.ok(!bankIds.has(editable.bankId), "Duplicate bankId: " + editable.bankId);
  bankIds.add(editable.bankId);

  const { canonical, roundTripped } = assertRoundTripIntegrity(editable, context);
  assert.deepEqual(roundTripped, editable, fileName + " must survive an editable/canonical round trip.");
  assert.equal(canonical.questions.length, expectedCount, fileName + " must contain exactly " + expectedCount + " questions.");
  assert.ok(canonical.questions.every(question => question.questionType === expectedType),
    fileName + " must contain only " + expectedType + " questions.");
  if (expectedHalf) {
    assert.ok(canonical.questions.every(question => question.half === expectedHalf),
      fileName + " must be assigned to " + expectedHalf + ".");
  }
  assert.ok(canonical.questions.every(question => question.status === "draft"),
    fileName + " must remain draft pending review.");
  passages.push(...(canonical.passages || []));
  questions.push(...canonical.questions);
}

const combinedEditable = {
  formatVersion: "1.0",
  bankId: "english-L1-S1-combined-coverage-check",
  levelId: "L1",
  stageId: "S1",
  bankVersion: 1,
  passages,
  questions,
};
const { canonical, roundTripped } = assertRoundTripIntegrity(combinedEditable, context);
assert.deepEqual(roundTripped, combinedEditable, "Combined Stage 1 bank must survive a round trip.");
assert.equal(canonical.questions.length, 320, "L1/S1 must contain exactly 320 questions.");
assert.equal(canonical.questions.filter(question => question.half === "explore").length, 200);
assert.equal(canonical.questions.filter(question => question.half === "extend").length, 120);
assert.equal(new Set(canonical.questions.map(question => question.id)).size, 320,
  "Question IDs must be unique across all separate bank files.");
assert.equal(new Set(canonical.passages.map(passage => passage.id)).size, 6,
  "The combined registry must contain three stories and three nonfiction passages with unique IDs.");
assert.deepEqual(validateCompleteEnglishStageBank(canonical, context), [],
  "The assembled real L1/S1 bank must satisfy complete-stage curriculum validation.");
assert.deepEqual(validateQuestionActivityMappings(canonical), [],
  "Every assembled question must map to a registered activity.");

const requiredTypes = [
  "short_story_comprehension",
  "nonfiction_passage_comprehension",
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
for (const type of requiredTypes) {
  const typed = canonical.questions.filter(question => question.questionType === type);
  assert.ok(typed.length > 0, "Missing approved question type: " + type);
  if (type === "short_story_comprehension") {
    assert.equal(typed.length, 60);
  } else if (type === "nonfiction_passage_comprehension") {
    assert.equal(typed.length, 60);
  } else {
    assert.equal(typed.length, 20, type + " must have 20 questions.");
    assert.equal(typed.filter(question => question.half === "explore").length, 10,
      type + " must have 10 Explore questions.");
    assert.equal(typed.filter(question => question.half === "extend").length, 10,
      type + " must have 10 Extend questions.");
  }
}

const missingQuestion = structuredClone(canonical);
missingQuestion.questions.pop();
assert.ok(validateCompleteEnglishStageBank(missingQuestion, context).length > 0,
  "The complete-stage validator must flag a missing question in the assembled bank.");
console.log("English Aptitude L1/S1 combined coverage tests passed: all 16 expected source banks, 320 unique draft questions, 200 Explore/120 Extend, all 12 approved question types, all reading-passage allocations, 10+10 allocations for each other type, registered activity mappings, and combined round-trip/gap detection.");
