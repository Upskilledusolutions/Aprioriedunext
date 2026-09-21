#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");
const { stableNormalize, stableStringify, loadEsmValue, parseStageDocument, buildCanonical, validateCanonicalDocument, reconstructEditableStage, checkStageDrift } = require("./syncReasoningQuestionBanks");

const root = path.join(__dirname, "..");
function fail(message) { throw new Error(message); }
function assert(condition, message) { if (!condition) fail(message); }

const questions = loadEsmValue(path.join(root, "src", "Data", "Reasoning", "questionBank.js"), "REASONING_QUESTION_BANK");
assert(Array.isArray(questions) && questions.length, "Legacy Reasoning question bank is unavailable.");
const sample = questions.find(function (question) { return question.levelId === "L1" && question.stageId === "S1" && question.activityId; });
assert(sample, "No current L1/S1 question is available for round-trip testing.");

const editable = {
  schemaVersion: "1.0",
  bankId: "reasoning-L1-S1-roundtrip-test",
  levelId: "L1",
  stageId: "S1",
  version: 1,
  tracks: [sample.track],
  questions: [{ ...sample, status: "draft", version: 1, sourceBank: "legacy-roundtrip-test", provenance: { sourceType: "legacy-js-test", sourceReference: "questionBank.js" }, contentMode: sample.track === "quantitative" ? "computation" : "textReasoning", contentModeLabel: sample.track === "quantitative" ? "Computation" : "Text-Based Reasoning", contentModeDescription: "Round-trip test classification" }],
};

const tempRoot = fs.mkdtempSync(path.join(os.tmpdir(), "reasoning-roundtrip-"));
const editablePath = path.join(tempRoot, "L1-S1-reasoning-question-bank.json");
const canonicalPath = path.join(tempRoot, "L1-S1-reasoning-question-bank.json.canonical");
fs.writeFileSync(editablePath, JSON.stringify(editable, null, 2) + "\n", "utf8");

try {
  const parsed = parseStageDocument(editablePath);
  const canonical = buildCanonical(parsed);
  fs.writeFileSync(canonicalPath, stableStringify(canonical), "utf8");
  assert(validateCanonicalDocument(canonical).length === 0, "Generated canonical document failed validation.");
  const reconstructed = reconstructEditableStage(canonical);
  assert(stableStringify(stableNormalize(parsed.source)) === stableStringify(stableNormalize(reconstructed)), "Canonical → editable round-trip is not semantically equivalent.");
  const driftResult = checkStageDrift(editablePath, canonicalPath);
  assert(driftResult.canonical.sourceFingerprint === parsed.sourceFingerprint, "Drift check did not confirm matching fingerprint.");

  const changed = JSON.parse(JSON.stringify(editable));
  changed.questions[0].explanation = changed.questions[0].explanation + " Updated.";
  const driftDir = fs.mkdtempSync(path.join(os.tmpdir(), "reasoning-roundtrip-drift-"));
  const driftEditablePath = path.join(driftDir, "L1-S1-reasoning-question-bank.json");
  const driftCanonicalPath = path.join(driftDir, "L1-S1-reasoning-question-bank.json.canonical");
  fs.writeFileSync(driftEditablePath, JSON.stringify(changed, null, 2) + "\n", "utf8");
  fs.writeFileSync(driftCanonicalPath, stableStringify(canonical), "utf8");
  let failed = false;
  try { checkStageDrift(driftEditablePath, driftCanonicalPath); } catch (error) { failed = true; }
  assert(failed, "Stale canonical output was not rejected after editable content changed.");
  console.log("Reasoning canonical validation, drift detection and round-trip tests passed.");
} finally { fs.rmSync(tempRoot, { recursive: true, force: true }); }
