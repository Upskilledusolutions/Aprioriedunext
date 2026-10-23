#!/usr/bin/env node
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { assertRoundTripIntegrity } = require("../src/Data/EnglishAptitude/englishQuestionBankSync");
const { validateEnglishBank } = require("../src/Data/EnglishAptitude/englishQuestionSchema");
const { getActivityIdsForStage, validateQuestionActivityMappings } = require("../src/Data/EnglishAptitude/englishActivityRegistry");
const file = path.join(__dirname, "../content/EnglishAptitude/editable/L1/S1/english-L1-S1-short-written-response.json");
const editable = JSON.parse(fs.readFileSync(file, "utf8"));
const context = { activityIds: getActivityIdsForStage("L1", "S1") };
const { canonical, roundTripped } = assertRoundTripIntegrity(editable, context);
assert.deepEqual(roundTripped, editable, "Written-response bank must survive editable/canonical round trip.");
assert.equal(canonical.bankId, "english-L1-S1-short-written-response");
assert.equal(canonical.levelId, "L1");
assert.equal(canonical.stageId, "S1");
assert.equal(canonical.questions.length, 20);
assert.equal(new Set(canonical.questions.map(q => q.id)).size, 20, "Question IDs must be unique.");
assert.ok(canonical.questions.every(q => q.questionType === "short_written_response"));
assert.deepEqual(validateEnglishBank(canonical, context), [], "Written-response schema validation.");
assert.deepEqual(validateQuestionActivityMappings(canonical), [], "Written-response activity mappings.");
for (const half of ["explore", "extend"]) {
 const questions = canonical.questions.filter(q => q.half === half);
 assert.equal(questions.length, 10, half + " must contain 10 items.");
 assert.ok(questions.every(q => q.status === "draft"), half + " content must remain draft pending review.");
 assert.ok(questions.every(q => q.source?.sourceType === "original" && q.source.reference));
 assert.ok(questions.every(q => q.rights?.status === "original" && q.rights.basis));
 assert.ok(questions.every(q => q.feedback?.correct?.trim() && q.feedback?.incorrect?.trim()));
 assert.ok(questions.every(q => q.answerGuidance?.trim()), half + " items need response guidance.");
 assert.ok(questions.every(q => Array.isArray(q.rubric?.criteria) && q.rubric.criteria.length >= 2), half + " items need multi-criterion rubrics.");
 assert.ok(questions.every(q => q.rubric.criteria.every(c => c.name?.trim() && Number.isFinite(c.maxPoints) && c.maxPoints > 0)));
 assert.ok(questions.every(q => q.responseFormat === (half === "explore" ? "short_text" : "long_text")));
 assert.ok(questions.every(q => !("answerKey" in q) && !("options" in q)), "Open responses must not be treated as exact-answer multiple choice.");
 assert.ok(questions.every(q => q.difficulty >= 1 && q.difficulty <= 9));
}
assert.ok(canonical.questions.filter(q => q.half === "explore").every(q => q.moduleId === "L1-S1-M2" && q.activityId === "ENG-L1-S1-EXP-05"));
assert.ok(canonical.questions.filter(q => q.half === "extend").every(q => q.moduleId === "L1-S1-M3" && q.activityId === "ENG-L1-S1-EXT-03"));
console.log("English Aptitude L1/S1 written-response tests passed: 20 unique draft prompts, 10 Explore short-text/10 Extend long-text, response guidance and multi-criterion rubrics, registered activity mappings, schema and original-rights metadata, and round-trip integrity.");
