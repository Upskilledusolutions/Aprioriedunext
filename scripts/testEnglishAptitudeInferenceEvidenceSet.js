#!/usr/bin/env node
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { assertRoundTripIntegrity } = require("../src/Data/EnglishAptitude/englishQuestionBankSync");
const { validateEnglishBank } = require("../src/Data/EnglishAptitude/englishQuestionSchema");
const { getActivityIdsForStage, validateQuestionActivityMappings } = require("../src/Data/EnglishAptitude/englishActivityRegistry");

const file = path.join(__dirname, "../content/EnglishAptitude/editable/L1/S1/english-L1-S1-inference-supporting-evidence.json");
const editable = JSON.parse(fs.readFileSync(file, "utf8"));
const context = { activityIds: getActivityIdsForStage("L1", "S1") };
const { canonical, roundTripped } = assertRoundTripIntegrity(editable, context);

assert.deepEqual(roundTripped, editable, "Inference/evidence bank must survive editable/canonical round trip.");
assert.equal(canonical.bankId, "english-L1-S1-inference-supporting-evidence");
assert.equal(canonical.levelId, "L1");
assert.equal(canonical.stageId, "S1");
assert.equal(canonical.questions.length, 20, "Inference/evidence bank must contain 20 items.");
assert.equal(new Set(canonical.questions.map(q => q.id)).size, 20, "Question IDs must be unique.");
assert.ok(canonical.questions.every(q => q.questionType === "inference_supporting_evidence"));
assert.deepEqual(validateEnglishBank(canonical, context), [], "Inference/evidence bank schema validation.");
assert.deepEqual(validateQuestionActivityMappings(canonical), [], "Inference/evidence activity mappings.");

for (const half of ["explore", "extend"]) {
  const questions = canonical.questions.filter(q => q.half === half);
  assert.equal(questions.length, 10, half + " must contain 10 items.");
  assert.ok(questions.every(q => q.responseFormat === "single_select"), half + " questions must use single-select.");
  assert.ok(questions.every(q => q.status === "draft"), half + " content must remain draft pending review.");
  assert.ok(questions.every(q => q.source?.sourceType === "original" && q.source.reference));
  assert.ok(questions.every(q => q.rights?.status === "original" && q.rights.basis));
  assert.ok(questions.every(q => q.feedback?.correct && q.feedback.incorrect));
  assert.ok(questions.every(q => typeof q.feedback.correct === "string" && typeof q.feedback.incorrect === "string"),
    half + " feedback must contain text, not answer-position numbers.");
  assert.ok(questions.every(q => q.options.length === 4 && new Set(q.options).size === 4));
  for (const q of questions) {
    assert.equal(q.answerKey.length, 1, q.id + " must have one correct answer.");
    assert.ok(q.options.includes(q.answerKey[0]), q.id + " answer must match an option.");
    assert.ok(typeof q.explanation === "string" && q.explanation.trim().length > 0,
      q.id + " needs a textual explanation.");
    assert.equal(q.explanation, q.feedback.correct, q.id + " needs aligned explanatory feedback.");
  }
  const longest = questions.filter(q => q.answerKey[0].length === Math.max(...q.options.map(option => option.length)));
  assert.ok(longest.length / questions.length < 0.3,
    half + ": longest/tied-longest correct-answer rate is " + longest.length + "/" + questions.length + "; target is below 30%.");
  const positions = questions.reduce((counts, q) => {
    const index = q.options.indexOf(q.answerKey[0]);
    counts[index] = (counts[index] || 0) + 1;
    return counts;
  }, {});
  assert.deepEqual(positions, { 0: 2, 1: 3, 2: 3, 3: 2 }, half + " correct-answer positions must be balanced.");
}
assert.ok(canonical.questions.filter(q => q.half === "explore").every(q =>
  q.moduleId === "L1-S1-M2" && q.activityId === "ENG-L1-S1-EXP-05"));
assert.ok(canonical.questions.filter(q => q.half === "extend").every(q =>
  q.moduleId === "L1-S1-M3" && q.activityId === "ENG-L1-S1-EXT-02"));

console.log("English Aptitude L1/S1 inference/evidence tests passed: 20 unique questions, 10 Explore/10 Extend, registered activity mappings, schema and original-rights metadata, balanced answer positions, under-30% longest-answer rate per half, and round-trip integrity.");
