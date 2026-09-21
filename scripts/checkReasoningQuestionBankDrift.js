#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { discoverStageFiles, checkStageDrift } = require("./syncReasoningQuestionBanks");

const root = path.join(__dirname, "..");
const canonicalDir = path.join(root, "content", "Reasoning", "question-banks", "canonical");

function main() {
  const stages = discoverStageFiles();
  if (!stages.length) {
    console.log("Reasoning drift check: no migrated Stage documents found; nothing to compare.");
    return;
  }

  const failures = [];
  for (const editablePath of stages) {
    const canonicalPath = path.join(canonicalDir, path.basename(editablePath));
    try {
      checkStageDrift(editablePath, canonicalPath);
      console.log("Drift check passed: " + path.relative(root, editablePath));
    } catch (error) {
      failures.push(error.message);
    }
  }

  if (failures.length) {
    console.error("Reasoning drift check failed:\n- " + failures.join("\n- "));
    process.exit(1);
  }
}

if (require.main === module) main();
