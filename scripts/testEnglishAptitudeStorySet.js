#!/usr/bin/env node
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { assertRoundTripIntegrity } = require("../src/Data/EnglishAptitude/englishQuestionBankSync");
const { validateEnglishBank } = require("../src/Data/EnglishAptitude/englishQuestionSchema");
const { getActivityIdsForStage, validateQuestionActivityMappings } = require("../src/Data/EnglishAptitude/englishActivityRegistry");

const file = path.join(__dirname, "../content/EnglishAptitude/editable/L1/S1/english-L1-S1-story-01.json");
const editable = JSON.parse(fs.readFileSync(file, "utf8"));
const context = { activityIds: getActivityIdsForStage("L1", "S1") };
const { canonical, roundTripped } = assertRoundTripIntegrity(editable, context);
assert.deepEqual(roundTripped, editable);
assert.equal(canonical.levelId, "L1");
assert.equal(canonical.stageId, "S1");
assert.equal(canonical.passages.length, 1);
assert.equal(canonical.passages[0].type, "short_story");
assert.equal(canonical.passages[0].rights.status, "original");
assert.equal(canonical.questions.length, 20, "Story 1 must contain 20 comprehension questions.");
assert.equal(new Set(canonical.questions.map(q => q.id)).size, 20, "Question IDs must be unique.");
assert.ok(canonical.questions.every(q => q.questionType === "short_story_comprehension"));
assert.ok(canonical.questions.every(q => q.half === "explore" && q.activityId === "ENG-L1-S1-EXP-01"));
assert.ok(canonical.questions.every(q => q.passageId === canonical.passages[0].id));
assert.deepEqual(validateEnglishBank(canonical, context), []);
assert.deepEqual(validateQuestionActivityMappings(canonical), []);
assert.deepEqual(new Set(canonical.questions.map(q => q.responseFormat)), new Set(["single_select", "true_false", "evidence_response"]));
assert.equal(canonical.questions.filter(q => q.responseFormat === "single_select").length, 16);
assert.equal(canonical.questions.filter(q => q.responseFormat === "true_false").length, 2);
assert.equal(canonical.questions.filter(q => q.responseFormat === "evidence_response").length, 2);
const singleSelect = canonical.questions.filter(q => q.responseFormat === "single_select");
const correctIsLongest = singleSelect.filter(q => {
  const correct = q.answerKey[0];
  const maxLength = Math.max(...q.options.map(option => option.length));
  return correct.length === maxLength;
});
assert.ok(correctIsLongest.length / singleSelect.length < 0.3,
  "Correct answer is longest/tied-longest in " + correctIsLongest.length + "/" + singleSelect.length + " single-select items; target is below 30%.");
for (const q of canonical.questions.filter(q => q.responseFormat === "single_select")) {
  assert.equal(new Set(q.options).size, q.options.length, q.id + " must have unique options.");
  assert.equal(q.answerKey.length, 1, q.id + " must have exactly one correct answer.");
  assert.ok(q.options.includes(q.answerKey[0]), q.id + " answer must match an option.");
}
assert.ok(canonical.questions.every(q => q.status === "draft"));
console.log("English Aptitude L1/S1 story-set tests passed: original story, 20 unique comprehension questions, registered Explore mapping, three response formats, answer validity, metadata and round-trip integrity.");
