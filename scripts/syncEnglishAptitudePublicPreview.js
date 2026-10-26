#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");

const SOURCE_PATH = path.resolve(__dirname, "../content/EnglishAptitude/editable/L1/S1/english-L1-S1-story-01.json");
const OUTPUT_PATH = path.resolve(__dirname, "../content/EnglishAptitude/public/L1/S1/english-L1-S1-story-01.json");
const ACTIVITY_ID = "ENG-L1-S1-EXP-01";

function buildPublicPreviewBank(source) {
  if (!source || typeof source !== "object" || !Array.isArray(source.questions) || !Array.isArray(source.passages)) {
    throw new Error("The editable source bank must contain questions and passages arrays.");
  }

  const questions = source.questions.filter(question =>
    question &&
    question.activityId === ACTIVITY_ID &&
    question.responseFormat === "single_select"
  );

  if (questions.length !== 16) {
    throw new Error(`Expected 16 single-select questions for ${ACTIVITY_ID}; found ${questions.length}. Review the backend answer-key allowlist before syncing.`);
  }

  const questionIds = new Set();
  const safeQuestions = questions.map(question => {
    if (typeof question.id !== "string" || !question.id.trim() || questionIds.has(question.id)) {
      throw new Error("The public preview source contains a missing or duplicate question ID.");
    }
    questionIds.add(question.id);
    if (typeof question.prompt !== "string" || !Array.isArray(question.options) || question.options.length < 2) {
      throw new Error(`Question "${question.id}" does not have a prompt and valid options.`);
    }
    if (!Array.isArray(question.answerKey) || question.answerKey.length !== 1 || !question.options.includes(question.answerKey[0])) {
      throw new Error(`Editable source question "${question.id}" has an invalid answer key.`);
    }
    if (typeof question.passageId !== "string" || !source.passages.some(passage => passage && passage.id === question.passageId)) {
      throw new Error(`Question "${question.id}" references a missing passage.`);
    }

    // Strict allowlist: never copy answer keys, correctness feedback, explanations, or authoring metadata.
    return {
      id: question.id,
      questionType: question.questionType,
      responseFormat: question.responseFormat,
      levelId: question.levelId,
      stageId: question.stageId,
      half: question.half,
      moduleId: question.moduleId,
      activityId: question.activityId,
      prompt: question.prompt,
      passageId: question.passageId,
      difficulty: question.difficulty,
      status: question.status,
      options: question.options.slice(),
    };
  });

  const passageIds = new Set(safeQuestions.map(question => question.passageId));
  const passages = source.passages
    .filter(passage => passage && passageIds.has(passage.id))
    .map(passage => ({
      id: passage.id,
      type: passage.type,
      title: passage.title,
      text: passage.text,
    }));

  return {
    formatVersion: source.formatVersion,
    bankId: source.bankId,
    levelId: source.levelId,
    stageId: source.stageId,
    contentStatus: source.editorNotes && source.editorNotes.contentStatus
      ? source.editorNotes.contentStatus
      : "draft_content",
    passages,
    questions: safeQuestions,
  };
}

function main() {
  const source = JSON.parse(fs.readFileSync(SOURCE_PATH, "utf8"));
  const output = JSON.stringify(buildPublicPreviewBank(source), null, 2) + "\n";
  if (process.argv.includes("--check")) {
    if (!fs.existsSync(OUTPUT_PATH) || fs.readFileSync(OUTPUT_PATH, "utf8") !== output) {
      console.error("English Aptitude public preview is missing or out of sync with the editable source bank.");
      process.exitCode = 1;
      return;
    }
    console.log("English Aptitude public preview check passed: source content matches the allowlisted answer-free preview.");
    return;
  }
  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, output, "utf8");
  console.log(`Wrote answer-free English Aptitude preview: ${path.relative(process.cwd(), OUTPUT_PATH)}`);
}

if (require.main === module) {
  try {
    main();
  } catch (error) {
    console.error(error.message);
    process.exitCode = 1;
  }
}

module.exports = { buildPublicPreviewBank };
