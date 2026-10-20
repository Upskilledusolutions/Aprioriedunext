#!/usr/bin/env node
const assert = require("node:assert/strict");
const { validateEnglishQuestion, validateEnglishBank } = require("../src/Data/EnglishAptitude/englishQuestionSchema");

function base(overrides = {}) {
  return {
    id: "eng-l1-s1-explore-vocab-001",
    questionType: "vocabulary_in_context",
    responseFormat: "single_select",
    levelId: "L1",
    stageId: "S1",
    half: "explore",
    moduleId: "L1-S1-M1",
    activityId: "ENG-L1-S1-EXP-01",
    prompt: "Which word is closest in meaning to 'tiny'?",
    options: ["small", "bright", "heavy", "late"],
    answerKey: ["small"],
    difficulty: 1,
    status: "draft",
    version: 1,
    source: { sourceType: "original", reference: "English Aptitude sample fixture" },
    rights: { status: "original", basis: "Newly authored test content" },
    feedback: { correct: "Small means tiny.", incorrect: "Look for a word meaning very little in size." },
    ...overrides,
  };
}

function check(label, record, expectedErrors = 0) {
  const errors = validateEnglishQuestion(record);
  assert.equal(errors.length, expectedErrors, label + ": " + errors.join(" | "));
}

const selection = base();
check("single-select", selection);

const passage = base({
  id: "eng-l1-s1-story-001-q01",
  questionType: "short_story_comprehension",
  responseFormat: "single_select",
  prompt: "Why did Mira return to the garden?",
  passageId: "eng-l1-s1-story-001",
  source: { sourceType: "original", reference: "English Aptitude story fixture" },
});
check("passage-linked comprehension", passage);

const constructed = base({
  id: "eng-l1-s1-writing-001",
  questionType: "short_written_response",
  responseFormat: "long_text",
  prompt: "Explain the character's choice using one detail from the story.",
  passageId: "eng-l1-s1-story-001",
  options: undefined,
  answerKey: undefined,
  rubric: { criteria: [{ name: "Evidence from text", maxPoints: 2 }, { name: "Reasoning", maxPoints: 2 }] },
});
check("rubric-scored open response", constructed);

const listening = base({
  id: "eng-l1-s1-listen-001",
  questionType: "listening_oral_response",
  responseFormat: "oral_prompt",
  prompt: "Retell the short audio and name one important detail.",
  options: undefined,
  answerKey: undefined,
  answerGuidance: "A successful response retells the main event and includes one accurate detail.",
});
check("oral prompt with answer guidance", listening);

check("duplicate options rejected", base({ options: ["same", "same", "other", "last"] }), 1);
check("unknown answer option rejected", base({ answerKey: ["missing"] }), 1);
check("constructed response without rubric/guidance rejected", base({
  responseFormat: "long_text",
  questionType: "short_written_response",
  options: undefined,
  answerKey: undefined,
}), 1);
check("invalid type rejected", base({ questionType: "generic_essay" }), 1);
check("invalid rights status rejected", base({ rights: { status: "probably-fine", basis: "guess" } }), 1);

const bank = {
  schemaVersion: "1.0",
  bankId: "english-L1-S1-sample",
  levelId: "L1",
  stageId: "S1",
  version: 1,
  questions: [selection, passage, constructed, listening],
};
assert.deepEqual(validateEnglishBank(bank), []);
assert(validateEnglishBank({ ...bank, questions: [selection, { ...selection }] }).some(error => error.includes("duplicate question id")));
assert(validateEnglishBank(bank, { activityIds: new Set(["KNOWN-ACTIVITY"]) }).some(error => error.includes("unknown activityId")));

console.log("English Aptitude schema tests passed: 4 representative response patterns, invalid-answer/rights/type checks, duplicate IDs and bank/activity validation.");
