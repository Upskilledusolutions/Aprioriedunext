#!/usr/bin/env node
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { assertRoundTripIntegrity } = require("../src/Data/EnglishAptitude/englishQuestionBankSync");
const { validateEnglishBank } = require("../src/Data/EnglishAptitude/englishQuestionSchema");
const { getActivityIdsForStage, validateQuestionActivityMappings } = require("../src/Data/EnglishAptitude/englishActivityRegistry");
const file = path.join(__dirname, "../content/EnglishAptitude/editable/L1/S1/english-L1-S1-listening-oral-response.json");
const editable = JSON.parse(fs.readFileSync(file, "utf8"));
const context = { activityIds: getActivityIdsForStage("L1", "S1") };
const { canonical, roundTripped } = assertRoundTripIntegrity(editable, context);
assert.deepEqual(roundTripped, editable, "Listening/oral bank must survive editable/canonical round trip.");
assert.equal(canonical.bankId, "english-L1-S1-listening-oral-response");
assert.equal(canonical.levelId, "L1");
assert.equal(canonical.stageId, "S1");
assert.equal(canonical.questions.length, 20, "Bank must contain 20 prompts.");
assert.equal(new Set(canonical.questions.map(q => q.id)).size, 20, "Question IDs must be unique.");
assert.ok(canonical.questions.every(q => q.questionType === "listening_oral_response"));
assert.deepEqual(validateEnglishBank(canonical, context), [], "Listening/oral schema validation.");
assert.deepEqual(validateQuestionActivityMappings(canonical), [], "Listening/oral activity mappings.");
for (const half of ["explore", "extend"]) {
 const qs = canonical.questions.filter(q => q.half === half);
 assert.equal(qs.length, 10, half + " must contain 10 items.");
 assert.equal(qs.filter(q => q.responseFormat === "listening_text_response").length, 5, half + " must contain five written listening responses.");
 assert.equal(qs.filter(q => q.responseFormat === "oral_prompt").length, 5, half + " must contain five oral prompts.");
 assert.ok(qs.every(q => q.status === "draft"));
 assert.ok(qs.every(q => typeof q.listeningText === "string" && q.listeningText.trim().length >= 80), "Every item needs a usable read-aloud stimulus.");
 assert.ok(qs.every(q => q.source?.sourceType === "original" && q.source.reference));
 assert.ok(qs.every(q => q.rights?.status === "original" && q.rights.basis));
 assert.ok(qs.every(q => q.feedback?.correct?.trim() && q.feedback?.incorrect?.trim()));
 assert.ok(qs.every(q => q.answerGuidance?.trim()));
 assert.ok(qs.every(q => Array.isArray(q.rubric?.criteria) && q.rubric.criteria.length >= 2));
 assert.ok(qs.every(q => q.rubric.criteria.every(c => c.name?.trim() && Number.isFinite(c.maxPoints) && c.maxPoints > 0)));
 assert.ok(qs.every(q => q.difficulty >= 1 && q.difficulty <= 9));
}
assert.ok(canonical.questions.filter(q => q.half === "explore").every(q => q.moduleId === "L1-S1-M2" && q.activityId === "ENG-L1-S1-EXP-05"));
assert.ok(canonical.questions.filter(q => q.half === "extend").every(q => q.moduleId === "L1-S1-M3" && q.activityId === "ENG-L1-S1-EXT-03"));
console.log("English Aptitude L1/S1 listening/oral tests passed: 20 unique draft prompts, 10 Explore/10 Extend, five written listening responses and five oral prompts per half, read-aloud stimuli, response guidance and rubrics, registered activity mappings, schema and original-rights metadata, and round-trip integrity.");
