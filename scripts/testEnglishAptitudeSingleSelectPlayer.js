#!/usr/bin/env node
const assert = require("node:assert/strict");
const bank = require("../content/EnglishAptitude/editable/L1/S1/english-L1-S1-story-01.json");
const { sampleSingleSelectAttempt, isSingleSelectAnswerCorrect } = require("../src/Data/EnglishAptitude/englishQuestionPlayer");

const activityId = "ENG-L1-S1-EXP-01";
const attempt = sampleSingleSelectAttempt(bank, activityId, 10, () => 0.37);
assert.equal(attempt.length, 10, "A practice attempt must contain ten questions.");
assert.equal(new Set(attempt.map(question => question.id)).size, 10, "Attempt question IDs must be unique.");
assert.ok(attempt.every(question => question.activityId === activityId && question.responseFormat === "single_select"));
assert.ok(attempt.every(question => question.status === "draft"), "This first player increment must keep draft status visible.");
for (const question of attempt) {
  assert.equal(isSingleSelectAnswerCorrect(question, question.answerKey[0]), true, "Answer key should grade as correct.");
  const wrong = question.options.find(option => option !== question.answerKey[0]);
  assert.equal(isSingleSelectAnswerCorrect(question, wrong), false, "A different option should grade as incorrect.");
  assert.equal(isSingleSelectAnswerCorrect(question, null), false, "No selection must not grade as correct.");
}
assert.throws(() => sampleSingleSelectAttempt(bank, "unknown-activity", 10), /compatible single-select questions/);
assert.throws(() => sampleSingleSelectAttempt(bank, activityId, 21), /compatible single-select questions/);
assert.throws(() => sampleSingleSelectAttempt(bank, activityId, 0), /positive integer/);
console.log("English Aptitude single-select player tests passed: ten unique registered questions, compatible response format, correct/incorrect grading, empty-answer rejection, and insufficient-bank guards.");
