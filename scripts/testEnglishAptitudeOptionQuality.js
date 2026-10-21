#!/usr/bin/env node
const assert = require("node:assert/strict");
const {
  findExtremeAnswerLengthCue,
  auditAnswerLengthDistribution,
} = require("../src/Data/EnglishAptitude/englishOptionQuality");
const { validateEnglishQuestion } = require("../src/Data/EnglishAptitude/englishQuestionSchema");

function question(options, answerKey = [options[0]]) {
  return {
    id: "eng-l1-s1-option-quality-test",
    questionType: "vocabulary_in_context",
    responseFormat: "single_select",
    levelId: "L1",
    stageId: "S1",
    half: "explore",
    moduleId: "L1-S1-M1",
    activityId: "ENG-L1-S1-EXP-01",
    prompt: "Choose the best answer.",
    difficulty: 1,
    status: "draft",
    version: 1,
    source: { sourceType: "original", reference: "Option-quality test fixture" },
    rights: { status: "original", basis: "Original test fixture" },
    feedback: { correct: "Correct.", incorrect: "Try again." },
    options,
    answerKey,
  };
}

const extremeLong = question([
  "This is an exceptionally long correct answer that gives away the answer",
  "A short distractor",
  "Another short choice",
  "One more short choice",
]);
assert(findExtremeAnswerLengthCue(extremeLong), "An isolated correct option meeting both thresholds must be flagged.");
assert(validateEnglishQuestion(extremeLong).some(error => error.includes("extreme length cue")),
  "Canonical question validation must reject an extreme cue.");

const extremeShort = question([
  "Yes",
  "A substantially longer alternative answer",
  "Another much longer alternative",
  "A further longer alternative choice",
]);
assert(findExtremeAnswerLengthCue(extremeShort), "An isolated, extremely short correct answer must be flagged.");

const naturalVariation = question([
  "A useful answer with a little more detail",
  "A reasonable competing answer",
  "A shorter distractor",
  "Another possible choice",
]);
assert.equal(findExtremeAnswerLengthCue(naturalVariation), null,
  "Natural sentence-length variation must not be treated as an extreme cue.");
assert.deepEqual(validateEnglishQuestion(naturalVariation), []);

const tiedLongest = question([
  "This answer and another answer are both similarly long",
  "A short distractor",
  "Another short choice",
  "This answer and another answer are both similarly long",
]);
assert.equal(findExtremeAnswerLengthCue(tiedLongest), null,
  "Tied lengths must not be classified as an isolated cue.");

const distribution = auditAnswerLengthDistribution([
  question(["Correct", "Wrong answer", "Another wrong answer", "More wrong answers"]),
  question(["Short answer", "Wrong", "Also wrong", "Still wrong"]),
]);
assert.equal(distribution.total, 2);
assert.equal(distribution.longestOrTiedLongest, 1);
assert.equal(distribution.rate, 0.5);

console.log("English Aptitude option-quality tests passed: extreme long/short answer cues rejected, natural variation and tied lengths accepted, and answer-length distribution audited.");
