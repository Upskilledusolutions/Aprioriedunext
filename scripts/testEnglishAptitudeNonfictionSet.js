#!/usr/bin/env node
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { assertRoundTripIntegrity } = require("../src/Data/EnglishAptitude/englishQuestionBankSync");
const { validateEnglishBank } = require("../src/Data/EnglishAptitude/englishQuestionSchema");
const { getActivityIdsForStage, validateQuestionActivityMappings } = require("../src/Data/EnglishAptitude/englishActivityRegistry");

const file = path.join(__dirname, "../content/EnglishAptitude/editable/L1/S1/english-L1-S1-nonfiction-explore-01.json");
const editable = JSON.parse(fs.readFileSync(file, "utf8"));
const context = { activityIds: getActivityIdsForStage("L1", "S1") };
const { canonical, roundTripped } = assertRoundTripIntegrity(editable, context);
assert.deepEqual(roundTripped, editable, "Editable bank must survive a canonical round trip.");
assert.equal(canonical.levelId, "L1");
assert.equal(canonical.stageId, "S1");
assert.equal(canonical.questions.length, 20, "The passage must have at least the required 20 questions.");
assert.equal(new Set(canonical.questions.map(q => q.id)).size, 20, "Question IDs must be unique.");
assert.equal(canonical.passages.length, 1);
const passage = canonical.passages[0];
assert.equal(passage.id, "eng-l1-s1-nonfiction-rain-garden-001");
assert.equal(passage.type, "nonfiction_passage");
assert.equal(passage.half, "explore");
assert.equal(passage.order, 1);
assert.equal(passage.rights.status, "original");
assert.ok(passage.text.length > 900, "The nonfiction passage should be substantial enough for comprehension practice.");
assert.ok(canonical.questions.every(q => q.half === "explore" && q.moduleId === "L1-S1-M1" && q.activityId === "ENG-L1-S1-EXP-02"));
assert.ok(canonical.questions.every(q => q.passageId === passage.id));
assert.deepEqual(validateEnglishBank(canonical, context), []);
assert.deepEqual(validateQuestionActivityMappings(canonical), []);

const single = canonical.questions.filter(q => q.responseFormat === "single_select");
assert.equal(single.length, 16);
assert.equal(canonical.questions.filter(q => q.responseFormat === "true_false").length, 2);
assert.equal(canonical.questions.filter(q => q.responseFormat === "evidence_response").length, 2);
assert.ok(canonical.questions.filter(q => q.responseFormat === "evidence_response").every(q => q.rubric && q.rubric.criteria.length > 0));
for (const q of single) {
  assert.equal(new Set(q.options).size, q.options.length, q.id + " must have unique options.");
  assert.equal(q.answerKey.length, 1, q.id + " must have one correct answer.");
  assert.ok(q.options.includes(q.answerKey[0]), q.id + " answer must match an option.");
}
const correctIsLongest = single.filter(q => q.answerKey[0].length === Math.max(...q.options.map(option => option.length)));
assert.ok(correctIsLongest.length / single.length < 0.3,
  "Correct answer is longest/tied-longest in " + correctIsLongest.length + "/" + single.length + " items; target is below 30%.");
const answerPositions = single.reduce((counts, q) => {
  const index = q.options.indexOf(q.answerKey[0]);
  counts[index] = (counts[index] || 0) + 1;
  return counts;
}, {});
assert.deepEqual(answerPositions, { 0: 4, 1: 4, 2: 4, 3: 4 }, "Correct-answer positions must be balanced.");
assert.ok(canonical.questions.every(q => q.status === "draft"), "Content remains draft pending editorial review.");
console.log("English Aptitude L1/S1 nonfiction-set tests passed: original Explore passage, 20 unique questions, 16 single-select/2 true-false/2 evidence responses, registry mapping, rights metadata, balanced answer positions and lengths, and round-trip integrity.");
