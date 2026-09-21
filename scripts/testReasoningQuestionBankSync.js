#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");
const {
  stableStringify,
  fingerprint,
  loadEsmValue,
  buildCanonical,
  parseStageDocument,
} = require("./syncReasoningQuestionBanks");

const root = path.join(__dirname, "..");

function fail(message) { throw new Error(message); }
function assert(condition, message) { if (!condition) fail(message); }

const questionBankPath = path.join(root, "src", "Data", "Reasoning", "questionBank.js");
const rawQuestions = loadEsmValue(questionBankPath, "REASONING_QUESTION_BANK");
assert(Array.isArray(rawQuestions) && rawQuestions.length > 0, "Legacy Reasoning question bank could not be loaded.");

const sample = rawQuestions.find(function (question) {
  return question.levelId === "L1" && question.stageId === "S1" && question.activityId;
});
assert(sample, "No L1/S1 legacy question suitable for synchronization test was found.");

const editable = {
  schemaVersion: "1.0",
  bankId: "reasoning-L1-S1-sync-test",
  levelId: "L1",
  stageId: "S1",
  version: 1,
  tracks: ["quantitative", "verbal"],
  questions: [{
    ...sample,
    status: "draft",
    version: 1,
    sourceBank: "legacy-sync-test",
    provenance: { sourceType: "legacy-js-test", sourceReference: "questionBank.js" },
    contentMode: sample.track === "quantitative" ? "computation" : "textReasoning",
    contentModeLabel: sample.track === "quantitative" ? "Computation" : "Text-Based Reasoning",
    contentModeDescription: sample.track === "quantitative"
      ? "Calculate or manipulate numerical information."
      : "Interpret written information and determine the strongest conclusion.",
  }],
};

const fixtureDir = fs.mkdtempSync(path.join(os.tmpdir(), "reasoning-sync-"));
const fixturePath = path.join(fixtureDir, "L1-S1-reasoning-question-bank.json");
fs.writeFileSync(fixturePath, JSON.stringify(editable, null, 2) + "\n", "utf8");

try {
  const parsed = parseStageDocument(fixturePath);
  assert(parsed.levelId === "L1" && parsed.stageId === "S1", "Stage placement parsing failed.");
  assert(parsed.source.questions.length === 1, "Expected one normalized test question.");
  assert(parsed.source.questions[0].id === sample.id, "Stable Question ID was not preserved.");
  assert(typeof parsed.sourceFingerprint === "string" && parsed.sourceFingerprint.length === 64, "Source fingerprint was not generated.");

  const canonicalA = buildCanonical(parsed);
  const canonicalB = buildCanonical(parseStageDocument(fixturePath));
  assert(stableStringify(canonicalA) === stableStringify(canonicalB), "Synchronization is not deterministic.");
  assert(canonicalA.sourceFingerprint === canonicalB.sourceFingerprint, "Fingerprint is not deterministic.");

  const changed = JSON.parse(JSON.stringify(editable));
  changed.version = 2;
  const changedDir = fs.mkdtempSync(path.join(os.tmpdir(), "reasoning-sync-changed-"));
  const changedPath = path.join(changedDir, "L1-S1-reasoning-question-bank.json");
  fs.writeFileSync(changedPath, JSON.stringify(changed, null, 2) + "\n", "utf8");
  const changedParsed = parseStageDocument(changedPath);
  assert(changedParsed.sourceFingerprint !== parsed.sourceFingerprint, "Changed editable content did not change its fingerprint.");

  console.log("Reasoning question-bank synchronization tests passed.");
  console.log("Stable ID: " + sample.id + " | fingerprint: " + fingerprint(parsed.source).slice(0, 12) + "...");
} finally {
  fs.rmSync(fixtureDir, { recursive: true, force: true });
}
