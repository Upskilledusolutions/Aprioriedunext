#!/usr/bin/env node
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { assertRoundTripIntegrity, editableBankToCanonical } = require("../src/Data/EnglishAptitude/englishQuestionBankSync");
const { validateEnglishBank } = require("../src/Data/EnglishAptitude/englishQuestionSchema");

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

// Passage registry checks: duplicate IDs, missing references, mismatched duplicated text,
// malformed passage records and compatibility with inline passageText-only banks.
const passageErrors = (mutate) => {
  const copy = structuredClone(canonical);
  mutate(copy);
  return validateEnglishBank(copy, { activityIds });
};
assert.ok(passageErrors(bank => { bank.passages.push(structuredClone(bank.passages[0])); }).some(error => error.includes("duplicate passage id")));
assert.ok(passageErrors(bank => { bank.questions[0].passageId = "missing-passage"; }).some(error => error.includes("unknown passageId")));
assert.ok(passageErrors(bank => { bank.questions[0].passageText = "Different passage text"; }).some(error => error.includes("differs from the registered passage")));
assert.ok(passageErrors(bank => { bank.passages[0].rights = {}; }).some(error => error.includes("rights must include")));
assert.ok(passageErrors(bank => { bank.passages = "not-an-array"; }).some(error => error.includes("passages must be an array")));
const inlineOnly = structuredClone(roundTripped);
delete inlineOnly.passages;
delete inlineOnly.questions[0].passageId;
inlineOnly.questions[0].passageText = "Inline text is still supported.";
assert.doesNotThrow(() => editableBankToCanonical(inlineOnly, { activityIds }));

console.log("English Aptitude sample-bank tests passed: editable JSON, activity mapping, Explore/Extend, response formats, metadata, round-trip integrity, passage registry validation, duplicate/missing reference rejection, and inline passage compatibility.");
