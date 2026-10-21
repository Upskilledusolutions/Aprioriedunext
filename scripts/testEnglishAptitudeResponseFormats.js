#!/usr/bin/env node
const assert = require("node:assert/strict");
const {
  RESPONSE_FORMATS,
  validateEnglishQuestion,
} = require("../src/Data/EnglishAptitude/englishQuestionSchema");

const approvedFormats = [
  "single_select",
  "multi_select",
  "true_false",
  "short_text",
  "long_text",
  "sentence_reorder",
  "sentence_edit",
  "evidence_response",
  "listening_text_response",
  "oral_prompt",
];
assert.deepEqual([...RESPONSE_FORMATS].sort(), [...approvedFormats].sort(), "Supported response formats must match the declared contract.");

const base = {
  id: "eng-l1-s1-response-format",
  questionType: "vocabulary_in_context",
  levelId: "L1",
  stageId: "S1",
  half: "explore",
  moduleId: "L1-S1-M1",
  activityId: "ENG-L1-S1-EXP-01",
  prompt: "Representative response-format test prompt.",
  difficulty: 1,
  status: "draft",
  version: 1,
  source: { sourceType: "original", reference: "Newly authored response-format test" },
  rights: { status: "original", basis: "Newly authored test content" },
  feedback: { correct: "Correct response.", incorrect: "Review the prompt and try again." },
};
function record(overrides = {}) {
  const merged = { ...base, ...overrides };
  return Object.fromEntries(Object.entries(merged).filter(([, value]) => value !== undefined));
}
function expectValid(name, question) {
  const errors = validateEnglishQuestion(question, { levelId: "L1", stageId: "S1" });
  assert.deepEqual(errors, [], `${name} should be valid: ${errors.join(" | ")}`);
}
function expectInvalid(name, question, messageFragment) {
  const errors = validateEnglishQuestion(question, { levelId: "L1", stageId: "S1" });
  assert(errors.some(error => error.includes(messageFragment)), `${name} should fail with "${messageFragment}", got: ${errors.join(" | ")}`);
}

const validCases = [
  ["single_select", record({
    responseFormat: "single_select",
    options: ["A", "B", "C"],
    answerKey: ["A"],
  })],
  ["multi_select", record({
    responseFormat: "multi_select",
    options: ["A", "B", "C"],
    answerKey: ["A", "B"],
  })],
  ["true_false", record({
    responseFormat: "true_false",
    answerKey: true,
  })],
  ["short_text", record({
    responseFormat: "short_text",
    answerGuidance: "A concise, defensible response is acceptable.",
  })],
  ["long_text", record({
    responseFormat: "long_text",
    rubric: { criteria: [{ name: "Relevant reasoning", maxPoints: 2 }] },
  })],
  ["sentence_reorder", record({
    responseFormat: "sentence_reorder",
    answerGuidance: "A valid response places the sentences in a coherent order.",
  })],
  ["sentence_edit", record({
    responseFormat: "sentence_edit",
    answerGuidance: "A valid response corrects the sentence while preserving its intended meaning.",
  })],
  ["evidence_response", record({
    responseFormat: "evidence_response",
    rubric: { criteria: [{ name: "Relevant evidence", maxPoints: 2 }] },
  })],
  ["listening_text_response", record({
    questionType: "listening_oral_response",
    responseFormat: "listening_text_response",
    answerGuidance: "The written response states the main point and an accurate detail heard.",
  })],
  ["oral_prompt", record({
    questionType: "listening_oral_response",
    responseFormat: "oral_prompt",
    answerGuidance: "The oral response states the main point and an accurate detail heard.",
  })],
];
for (const [name, question] of validCases) expectValid(name, question);

expectInvalid("single_select with multiple answers", record({
  responseFormat: "single_select",
  options: ["A", "B", "C"],
  answerKey: ["A", "B"],
}), "single_select must have exactly one answerKey entry");
expectInvalid("selection answer not in options", record({
  responseFormat: "multi_select",
  options: ["A", "B", "C"],
  answerKey: ["missing"],
}), "answerKey refers to unknown option");
expectInvalid("multi_select missing answer key", record({
  responseFormat: "multi_select",
  options: ["A", "B", "C"],
}), "Selection questions require a non-empty answerKey array");
expectInvalid("true_false with non-boolean answer", record({
  responseFormat: "true_false",
  answerKey: "true",
}), "true_false requires a boolean answerKey");
expectInvalid("constructed response without rubric or guidance", record({
  responseFormat: "short_text",
}), "Constructed-response formats require");
expectInvalid("rubric criterion with no points", record({
  responseFormat: "long_text",
  rubric: { criteria: [{ name: "Reasoning", maxPoints: 0 }] },
}), "Each rubric criterion requires a name and positive numeric maxPoints");
expectInvalid("listening type with incompatible format", record({
  questionType: "listening_oral_response",
  responseFormat: "single_select",
  options: ["A", "B"],
  answerKey: ["A"],
}), "listening_oral_response must use");
expectInvalid("unsupported response format", record({
  responseFormat: "audio_recording",
  answerGuidance: "Not an approved response format.",
}), "Unsupported responseFormat");

console.log("English Aptitude response-format tests passed: all 10 supported formats, answer-key rules, rubric/guidance requirements, listening compatibility, and invalid-format rejection.");
