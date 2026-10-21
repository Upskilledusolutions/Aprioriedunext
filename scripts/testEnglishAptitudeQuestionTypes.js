#!/usr/bin/env node
const assert = require("node:assert/strict");
const {
  QUESTION_TYPES,
  validateEnglishQuestion,
  validateEnglishBank,
} = require("../src/Data/EnglishAptitude/englishQuestionSchema");
const {
  assertRoundTripIntegrity,
} = require("../src/Data/EnglishAptitude/englishQuestionBankSync");

const approvedTypes = [
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
assert.deepEqual([...QUESTION_TYPES].sort(), [...approvedTypes].sort(), "Schema type list must match the approved 12 question types.");

const originalMetadata = {
  source: { sourceType: "original", reference: "Newly authored Phase C test fixture" },
  rights: { status: "original", basis: "Newly authored test content" },
  feedback: { correct: "Review the evidence.", incorrect: "Revisit the prompt and try again." },
};
const selectionFields = {
  responseFormat: "single_select",
  options: ["Option A", "Option B", "Option C", "Option D"],
  answerKey: ["Option A"],
};
const shared = {
  levelId: "L1",
  stageId: "S1",
  half: "explore",
  moduleId: "L1-S1-M1",
  activityId: "ENG-L1-S1-EXP-01",
  difficulty: 1,
  status: "draft",
  version: 1,
  ...originalMetadata,
};
function q(id, questionType, overrides = {}) {
  const record = {
    ...shared,
    id: `eng-l1-s1-${id}`,
    questionType,
    prompt: `Representative ${questionType.replaceAll("_", " ")} prompt.`,
    ...selectionFields,
    ...overrides,
  };
  // Undefined is not JSON data. Test fixtures use it as a convenient way to
  // remove inapplicable fields, so omit those keys before exercising sync.
  return Object.fromEntries(Object.entries(record).filter(([, value]) => value !== undefined));
}

const questions = [
  q("story-01", "short_story_comprehension", { passageId: "eng-l1-s1-passage-story" }),
  q("nonfiction-01", "nonfiction_passage_comprehension", { passageId: "eng-l1-s1-passage-nonfiction" }),
  q("vocabulary-01", "vocabulary_in_context"),
  q("antonyms-01", "antonyms"),
  q("word-relationships-01", "word_relationships_word_formation"),
  q("inference-evidence-01", "inference_supporting_evidence", {
    responseFormat: "evidence_response",
    options: undefined,
    answerKey: undefined,
    rubric: { criteria: [
      { name: "Relevant textual evidence", maxPoints: 2 },
      { name: "Explanation connecting evidence to inference", maxPoints: 2 },
    ] },
  }),
  q("grammar-error-01", "grammar_error_identification"),
  q("sentence-correction-01", "sentence_correction", {
    responseFormat: "sentence_edit",
    options: undefined,
    answerKey: undefined,
    answerGuidance: "A valid answer corrects the error while preserving the intended meaning.",
  }),
  q("paragraph-improvement-01", "paragraph_improvement"),
  q("sentence-construction-01", "sentence_ordering_combining_construction", {
    responseFormat: "sentence_reorder",
    options: undefined,
    answerKey: undefined,
    answerGuidance: "A valid response creates a coherent, grammatical sentence or paragraph.",
  }),
  q("written-response-01", "short_written_response", {
    responseFormat: "long_text",
    options: undefined,
    answerKey: undefined,
    rubric: { criteria: [
      { name: "Accurate and relevant response", maxPoints: 2 },
      { name: "Clear explanation", maxPoints: 2 },
    ] },
  }),
  q("listening-oral-01", "listening_oral_response", {
    responseFormat: "oral_prompt",
    options: undefined,
    answerKey: undefined,
    answerGuidance: "A valid response states the main point and includes one accurate detail heard.",
  }),
];

const passages = [
  {
    id: "eng-l1-s1-passage-story",
    type: "short_story",
    title: "Test Short Story",
    text: "A short, original story passage for schema coverage.",
    source: { sourceType: "original", reference: "Newly authored Phase C test fixture" },
    rights: { status: "original", basis: "Newly authored test passage" },
  },
  {
    id: "eng-l1-s1-passage-nonfiction",
    type: "nonfiction_passage",
    title: "Test Nonfiction Passage",
    text: "A short, original nonfiction passage for schema coverage.",
    source: { sourceType: "original", reference: "Newly authored Phase C test fixture" },
    rights: { status: "original", basis: "Newly authored test passage" },
  },
];

const bank = {
  formatVersion: "1.0",
  bankId: "english-L1-S1-question-types-test",
  levelId: "L1",
  stageId: "S1",
  bankVersion: 1,
  passages,
  questions,
};
const activityIds = new Set(["ENG-L1-S1-EXP-01"]);
const { canonical, roundTripped } = assertRoundTripIntegrity(bank, { activityIds });
assert.deepEqual(roundTripped, bank);
assert.equal(canonical.questions.length, 12);
assert.deepEqual(
  [...new Set(canonical.questions.map(item => item.questionType))].sort(),
  [...approvedTypes].sort(),
  "The fixture must exercise every approved type exactly at least once.",
);
for (const item of canonical.questions) {
  assert.deepEqual(
    validateEnglishQuestion(item, { levelId: "L1", stageId: "S1" }),
    [],
    `Type ${item.questionType} should accept its representative response format.`,
  );
}
assert.deepEqual(validateEnglishBank(canonical, { activityIds }), []);

const invalidListening = { ...questions[11], responseFormat: "single_select", options: selectionFields.options, answerKey: ["Option A"] };
assert(validateEnglishQuestion(invalidListening).some(error => error.includes("listening_oral_response must use")));
const invalidConstructed = { ...questions[10], rubric: undefined, answerGuidance: undefined };
assert(validateEnglishQuestion(invalidConstructed).some(error => error.includes("Constructed-response formats require")));

console.log("English Aptitude question-type tests passed: all 12 approved types, representative response formats, passage links, metadata, canonical validation, round-trip integrity, and incompatible/missing response requirements.");
