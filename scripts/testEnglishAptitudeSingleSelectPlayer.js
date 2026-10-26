#!/usr/bin/env node
const assert = require("node:assert/strict");
const sourceBank = require("../content/EnglishAptitude/editable/L1/S1/english-L1-S1-story-01.json");
const publicBank = require("../content/EnglishAptitude/public/L1/S1/english-L1-S1-story-01.json");
const { buildPublicPreviewBank } = require("./syncEnglishAptitudePublicPreview");
const { sampleSingleSelectAttempt } = require("../src/Data/EnglishAptitude/englishQuestionPlayer");

const activityId = "ENG-L1-S1-EXP-01";
assert.deepEqual(publicBank, buildPublicPreviewBank(sourceBank), "The public preview must stay synchronized with the editable source through the safe-field allowlist.");
assert.equal(publicBank.questions.length, 16, "Only the 16 supported single-select questions should be exposed by this preview.");
assert.equal(publicBank.passages.length, 1);
assert.equal(publicBank.contentStatus, "draft_content", "Draft content must not appear production-approved.");

const forbiddenKeys = new Set(["answerkey", "answer", "correctanswer", "feedback", "explanation", "feedbackcorrect"]);
function assertNoAnswerRevealingFields(value, location = "publicBank") {
  if (!value || typeof value !== "object") return;
  for (const [key, child] of Object.entries(value)) {
    assert.equal(forbiddenKeys.has(key.toLowerCase()), false, `Public preview exposes forbidden field "${location}.${key}".`);
    assertNoAnswerRevealingFields(child, `${location}.${key}`);
  }
}
assertNoAnswerRevealingFields(publicBank);

const attempt = sampleSingleSelectAttempt(publicBank, activityId, 10, () => 0.37);
assert.equal(attempt.length, 10, "A practice attempt must contain ten questions.");
assert.equal(new Set(attempt.map(question => question.id)).size, 10, "Attempt question IDs must be unique.");
assert.ok(attempt.every(question => question.activityId === activityId && question.responseFormat === "single_select"));
assert.ok(attempt.every(question => question.status === "draft"), "This first player increment must keep draft status visible.");
assert.throws(() => sampleSingleSelectAttempt(publicBank, "unknown-activity", 10), /compatible single-select questions/);
assert.throws(() => sampleSingleSelectAttempt(publicBank, activityId, 17), /compatible single-select questions/);
assert.throws(() => sampleSingleSelectAttempt(publicBank, activityId, 0), /positive integer/);
console.log("English Aptitude single-select player tests passed: ten unique questions from the answer-free public bank, synchronized safe fields, draft status, and no client-side grading data.");
