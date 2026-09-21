#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const crypto = require("crypto");
const vm = require("vm");

const root = path.join(__dirname, "..");
const editableDir = path.join(root, "content", "Reasoning", "question-banks", "stages");
const canonicalDir = path.join(root, "content", "Reasoning", "question-banks", "canonical");
const activityPath = path.join(root, "src", "Data", "Reasoning", "activities.js");
const schemaPath = path.join(root, "src", "Data", "Reasoning", "canonicalQuestionSchema.js");

const GENERATOR_VERSION = "reasoning-sync@1.0";
const STAGE_FILE_RE = /^L([1-9])-S([1-6])-reasoning-question-bank\.json$/;

function fail(message) {
  throw new Error(message);
}

function stableNormalize(value) {
  if (Array.isArray(value)) return value.map(stableNormalize);
  if (value && typeof value === "object") {
    return Object.keys(value).sort().reduce(function (out, key) {
      out[key] = stableNormalize(value[key]);
      return out;
    }, {});
  }
  return value;
}

function stableStringify(value) {
  return JSON.stringify(stableNormalize(value), null, 2) + "\n";
}

function fingerprint(value) {
  return crypto.createHash("sha256").update(stableStringify(value), "utf8").digest("hex");
}

function loadEsmValue(filePath, exportName) {
  const source = fs.readFileSync(filePath, "utf8")
    .replace(/^import[^;]+;\s*/gm, "")
    .replace(/\bexport\s+(?=(?:const|function|let|var)\b)/g, "");
  const context = {};
  vm.runInNewContext(
    source + "\nglobalThis.__loadedValue = typeof " + exportName + " !== \"undefined\" ? " + exportName + " : null;",
    context,
    { filename: filePath }
  );
  return context.__loadedValue;
}

function loadActivities() {
  const activities = loadEsmValue(activityPath, "REASONING_ACTIVITIES");
  if (!Array.isArray(activities)) fail("Could not load REASONING_ACTIVITIES from activities.js.");
  return activities;
}

function loadSchemaValidator() {
  const source = fs.readFileSync(schemaPath, "utf8")
    .replace(/\bexport\s+(?=(?:const|function|let|var)\b)/g, "");
  const context = {};
  vm.runInNewContext(
    source + "\nglobalThis.__assertCanonicalQuestion = assertCanonicalQuestion;",
    context,
    { filename: schemaPath }
  );
  if (typeof context.__assertCanonicalQuestion !== "function") {
    fail("Could not load assertCanonicalQuestion from canonicalQuestionSchema.js.");
  }
  return context.__assertCanonicalQuestion;
}

const assertCanonicalQuestion = loadSchemaValidator();
const activities = loadActivities();
const activityById = new Map(activities.map(function (activity) { return [activity.id, activity]; }));

function parseStageDocument(inputPath) {
  let parsed;
  try {
    parsed = JSON.parse(fs.readFileSync(inputPath, "utf8"));
  } catch (error) {
    fail("Invalid JSON in " + path.relative(root, inputPath) + ": " + error.message);
  }

  const baseName = path.basename(inputPath);
  const match = STAGE_FILE_RE.exec(baseName);
  if (!match) fail("Invalid Stage document filename: " + baseName);
  const levelId = "L" + match[1];
  const stageId = "S" + match[2];

  if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
    fail("Stage document must be a JSON object: " + baseName);
  }
  const requiredFields = ["schemaVersion", "bankId", "levelId", "stageId", "version", "tracks", "questions"];
  for (const field of requiredFields) {
    if (parsed[field] === undefined || parsed[field] === null) fail("Missing Stage document field \"" + field + "\" in " + baseName);
  }
  if (parsed.schemaVersion !== "1.0") fail("Unsupported schemaVersion \"" + parsed.schemaVersion + "\" in " + baseName);
  if (parsed.levelId !== levelId || parsed.stageId !== stageId) fail("Filename/document placement mismatch in " + baseName + ": expected " + levelId + "/" + stageId + ".");
  if (!Array.isArray(parsed.tracks) || parsed.tracks.length === 0 || parsed.tracks.some(function (track) { return ["quantitative", "verbal"].indexOf(track) === -1; })) fail("Invalid tracks list in " + baseName + ".");
  if (!Number.isInteger(parsed.version) || parsed.version < 1) fail("Stage document version must be a positive integer in " + baseName + ".");
  if (!Array.isArray(parsed.questions)) fail("questions must be an array in " + baseName + ".");
  if (!parsed.questions.length) fail("Stage document contains no questions: " + baseName);

  const ids = new Set();
  const normalizedQuestions = [];
  for (const question of parsed.questions) {
    if (!question || typeof question !== "object") fail("Question entry must be an object in " + baseName + ".");
    if (!question.id) fail("Question entry is missing id in " + baseName + ".");
    if (ids.has(question.id)) fail("Duplicate Question ID \"" + question.id + "\" in " + baseName);
    ids.add(question.id);

    const activity = activityById.get(question.activityId);
    if (!activity) fail("Question " + question.id + " references unknown Activity ID \"" + (question.activityId || "") + "\".");

    const canonicalErrors = assertCanonicalQuestion(question, {
      levelId: levelId,
      stageId: stageId,
      track: question.track,
      half: question.half,
    });
    if (canonicalErrors.length) fail("Canonical validation failed for " + question.id + ": " + canonicalErrors.join(" | "));

    const mismatches = [
      ["track", activity.track],
      ["levelId", activity.levelId],
      ["stageId", activity.stageId],
      ["half", activity.half],
      ["moduleId", activity.moduleId],
    ].filter(function (pair) { return question[pair[0]] !== pair[1]; });
    if (mismatches.length) {
      fail("Activity mapping mismatch for " + question.id + ": " + mismatches.map(function (pair) { return pair[0] + " expected " + pair[1] + ", found " + question[pair[0]]; }).join("; "));
    }

    normalizedQuestions.push({
      ...question,
      provenance: {
        ...(question.provenance || {}),
        sourceFile: path.relative(root, inputPath).replace(/\\/g, "/"),
        sourceBank: question.sourceBank,
        migrationState: question.provenance && question.provenance.migrationState ? question.provenance.migrationState : "editable-stage-bank",
      },
    });
  }

  normalizedQuestions.sort(function (a, b) { return a.id.localeCompare(b.id); });
  const normalizedSource = {
    schemaVersion: parsed.schemaVersion,
    bankId: parsed.bankId,
    levelId: parsed.levelId,
    stageId: parsed.stageId,
    version: parsed.version,
    tracks: parsed.tracks.slice().sort(),
    questions: normalizedQuestions,
  };

  return {
    inputPath: inputPath,
    levelId: levelId,
    stageId: stageId,
    bankId: parsed.bankId,
    sourceFingerprint: fingerprint(normalizedSource),
    source: normalizedSource,
  };
}

function buildCanonical(stage) {
  return {
    schemaVersion: stage.source.schemaVersion,
    canonicalVersion: "1.0",
    generatorVersion: GENERATOR_VERSION,
    bankId: stage.bankId,
    levelId: stage.levelId,
    stageId: stage.stageId,
    version: stage.source.version,
    sourceFingerprint: stage.sourceFingerprint,
    sourceFile: path.relative(root, stage.inputPath).replace(/\\/g, "/"),
    questions: stage.source.questions,
  };
}

function validateCanonicalDocument(document) {
  const errors = [];
  if (!document || typeof document !== "object" || Array.isArray(document)) return ["Canonical document must be an object."];
  for (const field of ["schemaVersion","canonicalVersion","generatorVersion","bankId","levelId","stageId","version","sourceFingerprint","sourceFile","questions"]) {
    if (document[field] === undefined || document[field] === null || document[field] === "") errors.push("Missing canonical document field: " + field);
  }
  if (document.schemaVersion !== "1.0") errors.push("Unsupported canonical schemaVersion: " + document.schemaVersion);
  if (document.canonicalVersion !== "1.0") errors.push("Unsupported canonicalVersion: " + document.canonicalVersion);
  if (!/^L[1-9]$/.test(document.levelId || "")) errors.push("Invalid canonical levelId: " + document.levelId);
  if (!/^S[1-6]$/.test(document.stageId || "")) errors.push("Invalid canonical stageId: " + document.stageId);
  if (!Number.isInteger(document.version) || document.version < 1) errors.push("Invalid canonical version.");
  if (!/^[a-f0-9]{64}$/.test(document.sourceFingerprint || "")) errors.push("Invalid sourceFingerprint.");
  if (!Array.isArray(document.questions)) { errors.push("Canonical questions must be an array."); return errors; }
  const ids = new Set();
  for (const question of document.questions) {
    if (ids.has(question && question.id)) errors.push("Duplicate canonical Question ID: " + (question && question.id));
    ids.add(question && question.id);
    const activity = activityById.get(question && question.activityId);
    if (!activity) { errors.push("Canonical question " + ((question && question.id) || "unknown") + " references unknown Activity ID: " + ((question && question.activityId) || "")); continue; }
    const canonicalErrors = assertCanonicalQuestion(question, { levelId: document.levelId, stageId: document.stageId, track: question.track, half: question.half });
    for (const error of canonicalErrors) errors.push("Canonical question " + (question.id || "unknown") + ": " + error);
    for (const pair of [["track",activity.track],["levelId",activity.levelId],["stageId",activity.stageId],["half",activity.half],["moduleId",activity.moduleId]]) {
      if (question[pair[0]] !== pair[1]) errors.push("Canonical Activity mapping mismatch for " + question.id + ": " + pair[0] + " expected " + pair[1] + ", found " + question[pair[0]]);
    }
  }
  return errors;
}

function readCanonicalDocument(inputPath) {
  let document;
  try { document = JSON.parse(fs.readFileSync(inputPath, "utf8")); }
  catch (error) { fail("Invalid canonical JSON in " + path.relative(root, inputPath) + ": " + error.message); }
  const errors = validateCanonicalDocument(document);
  if (errors.length) fail("Canonical validation failed for " + path.relative(root, inputPath) + ": " + errors.join(" | "));
  return document;
}

function reconstructEditableStage(canonical) {
  return {
    schemaVersion: canonical.schemaVersion,
    bankId: canonical.bankId,
    levelId: canonical.levelId,
    stageId: canonical.stageId,
    version: canonical.version,
    tracks: [...new Set(canonical.questions.map(function (question) { return question.track; }))].sort(),
    questions: canonical.questions.slice().sort(function (a, b) { return a.id.localeCompare(b.id); }),
  };
}

function checkStageDrift(editablePath, canonicalPath) {
  const stage = parseStageDocument(editablePath);
  if (!fs.existsSync(canonicalPath)) fail("Canonical output is missing for " + path.relative(root, editablePath) + ".");
  const canonical = readCanonicalDocument(canonicalPath);
  if (canonical.sourceFingerprint !== stage.sourceFingerprint) fail("Canonical drift detected for " + path.relative(root, editablePath) + ": editable fingerprint " + stage.sourceFingerprint + " does not match canonical fingerprint " + canonical.sourceFingerprint + ".");
  return { stage: stage, canonical: canonical };
}
function syncStageFile(inputPath, outputDir) {
  const targetDir = outputDir || canonicalDir;
  const stage = parseStageDocument(inputPath);
  const canonical = buildCanonical(stage);
  const outputPath = path.join(targetDir, path.basename(inputPath));
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(outputPath, stableStringify(canonical), "utf8");
  return { ...stage, canonical: canonical, outputPath: outputPath };
}

function discoverStageFiles() {
  if (!fs.existsSync(editableDir)) return [];
  return fs.readdirSync(editableDir)
    .filter(function (name) { return STAGE_FILE_RE.test(name); })
    .sort()
    .map(function (name) { return path.join(editableDir, name); });
}

function main() {
  const args = process.argv.slice(2).filter(Boolean);
  const requested = args.length ? args.map(function (arg) { return path.resolve(root, arg); }) : discoverStageFiles();
  if (!requested.length) {
    console.log("Reasoning question-bank synchronization: no migrated Stage documents found; existing JavaScript source pools remain unchanged.");
    return;
  }
  const results = requested.map(function (filePath) {
    if (!fs.existsSync(filePath)) fail("Editable Stage document not found: " + path.relative(root, filePath));
    return syncStageFile(filePath);
  });
  console.log(results.map(function (result) {
    return "Synchronized " + path.relative(root, result.inputPath) + " -> " + path.relative(root, result.outputPath) + " (fingerprint " + result.sourceFingerprint.slice(0, 12) + "...)";
  }).join("\n"));
}

if (require.main === module) {
  try { main(); }
  catch (error) {
    console.error("Reasoning synchronization failed: " + error.message);
    process.exit(1);
  }
}

module.exports = {
  GENERATOR_VERSION: GENERATOR_VERSION,
  stableNormalize: stableNormalize,
  stableStringify: stableStringify,
  fingerprint: fingerprint,
  loadEsmValue: loadEsmValue,
  parseStageDocument: parseStageDocument,
  buildCanonical: buildCanonical,
  syncStageFile: syncStageFile,
  discoverStageFiles: discoverStageFiles,
  validateCanonicalDocument: validateCanonicalDocument,
  readCanonicalDocument: readCanonicalDocument,
  reconstructEditableStage: reconstructEditableStage,
  checkStageDrift: checkStageDrift,
};
