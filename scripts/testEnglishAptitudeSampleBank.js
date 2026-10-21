#!/usr/bin/env node
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { assertRoundTripIntegrity } = require("../src/Data/EnglishAptitude/englishQuestionBankSync");

const samplePath = path.join(__dirname, "../content/EnglishAptitude/editable/L1/S1/english-L1-S1-sample.json");
const editable = JSON.parse(fs.readFileSync(samplePath, "utf8"));
const activityIds = new Set(["ENG-L1-S1-EXP-01", "ENG-L1-S1-EXT-01"]);
const { canonical, roundTripped } = assertRoundTripIntegrity(editable, { activityIds });

assert.equal(editable.levelId, "L1");
assert.equal(editable.stageId, "S1");
assert.equal(editable.questions.length, 4);
assert.deepEqual(roundTripped, editable);
assert.equal(canonical.schemaVersion, "1.0");
assert.equal(canonical.version, editable.bankVersion);
assert.equal(canonical.passages.length, 1);
assert.deepEqual(new Set(canonical.questions.map(question => question.half)), new Set(["explore", "extend"]));
assert.deepEqual(new Set(canonical.questions.map(question => question.responseFormat)), new Set(["single_select", "long_text", "oral_prompt"]));
assert.ok(canonical.questions.every(question => question.status === "draft"));
assert.ok(canonical.questions.every(question => question.source && question.rights && question.feedback));

console.log("English Aptitude sample-bank tests passed: real editable JSON loaded, activity mapping validated, four questions across Explore/Extend, three response formats, metadata and passage preserved, and round-trip integrity confirmed.");
