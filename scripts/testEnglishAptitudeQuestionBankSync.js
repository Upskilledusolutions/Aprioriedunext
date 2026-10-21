#!/usr/bin/env node
const assert = require("node:assert/strict");
const {
  editableBankToCanonical,
  canonicalBankToEditable,
  assertRoundTripIntegrity,
} = require("../src/Data/EnglishAptitude/englishQuestionBankSync");

function question(overrides = {}) {
  return {
    id: "eng-l1-s1-vocab-001",
    questionType: "vocabulary_in_context",
    responseFormat: "single_select",
    levelId: "L1",
    stageId: "S1",
    half: "explore",
    moduleId: "L1-S1-M1",
    activityId: "ENG-L1-S1-EXP-01",
    prompt: "Which word is closest in meaning to tiny?",
    options: ["small", "bright", "heavy", "late"],
    answerKey: ["small"],
    difficulty: 1,
    status: "draft",
    version: 1,
    source: { sourceType: "original", reference: "Original fixture" },
    rights: { status: "original", basis: "Newly authored sample" },
    feedback: { correct: "Small means tiny.", incorrect: "Choose a word about size." },
    ...overrides,
  };
}

const editable = {
  formatVersion: "1.0",
  bankId: "english-L1-S1-phase-c-sample",
  levelId: "L1",
  stageId: "S1",
  bankVersion: 1,
  editorNotes: { owner: "English Aptitude", tags: ["sample", "round-trip"] },
  questions: [
    question(),
    question({
      id: "eng-l1-s1-story-001-q01",
      questionType: "short_story_comprehension",
      prompt: "Why did Mira return to the garden?",
      passageId: "eng-l1-s1-story-001",
      passageText: "Mira returned to the garden to find the seed packet she had left near the gate.",
      source: { sourceType: "original", reference: "Original story fixture" },
    }),
    question({
      id: "eng-l1-s1-writing-001",
      questionType: "short_written_response",
      responseFormat: "long_text",
      prompt: "Explain the character's choice using one detail from the story.",
      passageId: "eng-l1-s1-story-001",
      rubric: { criteria: [{ name: "Evidence from text", maxPoints: 2 }, { name: "Reasoning", maxPoints: 2 }] },
      options: [],
      answerKey: [],
    }),
    question({
      id: "eng-l1-s1-listen-001",
      questionType: "listening_oral_response",
      responseFormat: "oral_prompt",
      prompt: "Retell the short audio and name one important detail.",
      answerGuidance: "Retell the main event and include one accurate detail.",
      options: [],
      answerKey: [],
    }),
  ],
};

const activityIds = new Set(["ENG-L1-S1-EXP-01"]);
const { canonical, roundTripped } = assertRoundTripIntegrity(editable, { activityIds });
assert.equal(canonical.schemaVersion, "1.0");
assert.equal(canonical.version, 1);
assert.equal("formatVersion" in canonical, false);
assert.equal("bankVersion" in canonical, false);
assert.deepEqual(roundTripped, editable);
assert.deepEqual(canonicalBankToEditable(canonical, { activityIds }), editable);
assert.deepEqual(editableBankToCanonical(roundTripped, { activityIds }), canonical);

// Unknown editor metadata and nested question metadata must survive both directions.
const withExtraMetadata = {
  ...editable,
  editorNotes: { ...editable.editorNotes, futureField: { preserved: true } },
  questions: editable.questions.map((item, index) => index === 0 ? { ...item, authoringMetadata: { reviewedBy: "content-team", flags: ["check-again"] } } : item),
};
assert.deepEqual(assertRoundTripIntegrity(withExtraMetadata, { activityIds }).roundTripped, withExtraMetadata);

// Invalid records must not be silently synchronized into canonical data.
assert.throws(() => editableBankToCanonical({
  ...editable,
  questions: [question({ answerKey: ["not-an-option"] })],
}, { activityIds }), /Canonical bank validation failed/);
assert.throws(() => editableBankToCanonical({ ...editable, formatVersion: "2.0" }, { activityIds }), /formatVersion must be 1.0/);
assert.throws(() => editableBankToCanonical({
  ...editable,
  questions: [question(), question()],
}, { activityIds }), /duplicate question id/);
assert.throws(() => editableBankToCanonical({
  ...editable,
  questions: [{ ...question(), unexpectedValue: undefined }],
}, { activityIds }), /JSON-compatible/);

console.log("English Aptitude sync tests passed: editable/canonical conversion, four response patterns, metadata preservation, round-trip integrity and invalid-bank rejection.");
