#!/usr/bin/env node
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { assertRoundTripIntegrity } = require("../src/Data/EnglishAptitude/englishQuestionBankSync");
const { validateEnglishBank } = require("../src/Data/EnglishAptitude/englishQuestionSchema");
const { getActivityIdsForStage, validateQuestionActivityMappings } = require("../src/Data/EnglishAptitude/englishActivityRegistry");

const context = { activityIds: getActivityIdsForStage("L1", "S1") };
const sets = [
  {
    file: "english-L1-S1-nonfiction-explore-01.json",
    bankId: "english-L1-S1-nonfiction-explore-01",
    passageId: "eng-l1-s1-nonfiction-rain-garden-001",
    activityId: "ENG-L1-S1-EXP-02",
    title: "A Rain Garden at School",
    order: 1,
  },
  {
    file: "english-L1-S1-nonfiction-explore-02.json",
    bankId: "english-L1-S1-nonfiction-explore-02",
    passageId: "eng-l1-s1-nonfiction-compost-001",
    activityId: "ENG-L1-S1-EXP-03",
    title: "From Kitchen Scraps to Compost",
    order: 2,
  },
];

for (const set of sets) {
  const file = path.join(__dirname, "../content/EnglishAptitude/editable/L1/S1", set.file);
  const editable = JSON.parse(fs.readFileSync(file, "utf8"));
  assert.equal(editable.bankId, set.bankId);
  const { canonical, roundTripped } = assertRoundTripIntegrity(editable, context);
  assert.deepEqual(roundTripped, editable, set.file + " must survive a canonical round trip.");
  assert.equal(canonical.levelId, "L1");
  assert.equal(canonical.stageId, "S1");
  assert.equal(canonical.questions.length, 20, set.file + " must contain 20 questions.");
  assert.equal(new Set(canonical.questions.map(q => q.id)).size, 20, set.file + " question IDs must be unique.");
  assert.equal(canonical.passages.length, 1);
  const passage = canonical.passages[0];
  assert.equal(passage.id, set.passageId);
  assert.equal(passage.type, "nonfiction_passage");
  assert.equal(passage.title, set.title);
  assert.equal(passage.half, "explore");
  assert.equal(passage.order, set.order);
  assert.equal(passage.rights.status, "original");
  assert.ok(passage.text.length > 900, set.file + " passage should be substantial enough for comprehension practice.");
  assert.ok(canonical.questions.every(q => q.half === "explore" && q.moduleId === "L1-S1-M1" && q.activityId === set.activityId));
  assert.ok(canonical.questions.every(q => q.passageId === passage.id));
  assert.deepEqual(validateEnglishBank(canonical, context), [], set.file + " schema validation");
  assert.deepEqual(validateQuestionActivityMappings(canonical), [], set.file + " activity mapping");

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
    set.file + ": correct answer is longest/tied-longest in " + correctIsLongest.length + "/" + single.length + " items; target is below 30%.");
  const answerPositions = single.reduce((counts, q) => {
    const index = q.options.indexOf(q.answerKey[0]);
    counts[index] = (counts[index] || 0) + 1;
    return counts;
  }, {});
  assert.deepEqual(answerPositions, { 0: 4, 1: 4, 2: 4, 3: 4 }, set.file + " correct-answer positions must be balanced.");
  assert.ok(canonical.questions.every(q => q.status === "draft"), set.file + " must remain draft pending editorial review.");
}

console.log("English Aptitude L1/S1 nonfiction-set tests passed: both Explore nonfiction passages, 20 unique questions each, registered passage slots, 16 single-select/2 true-false/2 evidence responses per set, schema and rights metadata, balanced answer positions and lengths, and round-trip integrity.");
