/**
 * English Aptitude canonical question contract and validator.
 *
 * English-specific by design: do not import Reasoning schemas or runtime records.
 * This is a content validation boundary, not a learner-delivery/API implementation.
 */
const { findExtremeAnswerLengthCue } = require("./englishOptionQuality");

const QUESTION_TYPES = new Set([
  "short_story_comprehension", "nonfiction_passage_comprehension", "vocabulary_in_context",
  "antonyms", "word_relationships_word_formation", "inference_supporting_evidence",
  "grammar_error_identification", "sentence_correction", "paragraph_improvement",
  "sentence_ordering_combining_construction", "short_written_response", "listening_oral_response",
]);
const RESPONSE_FORMATS = new Set([
  "single_select", "multi_select", "true_false", "short_text", "long_text",
  "sentence_reorder", "sentence_edit", "evidence_response", "listening_text_response", "oral_prompt",
]);
const STATUSES = new Set(["draft", "review", "approved", "published", "retired"]);
const HALVES = new Set(["explore", "extend"]);
const LEVEL_RE = /^L[1-9]$/;
const STAGE_RE = /^S[1-6]$/;

function isPlainObject(value) {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function validateEnglishQuestion(question, context = {}) {
  const errors = [];
  if (!isPlainObject(question)) return ["Question record must be a plain object."];
  const required = [
    "id", "questionType", "responseFormat", "levelId", "stageId", "half",
    "moduleId", "activityId", "prompt", "difficulty", "status", "version",
    "source", "rights", "feedback",
  ];
  for (const field of required) {
    if (question[field] === undefined || question[field] === null || question[field] === "") errors.push(`Missing required field: ${field}`);
  }
  if (typeof question.id === "string" && !/^[a-z0-9][a-z0-9._:-]*$/i.test(question.id)) errors.push("id must be a stable identifier using letters, numbers, dot, underscore, colon or hyphen.");
  if (question.questionType !== undefined && !QUESTION_TYPES.has(question.questionType)) errors.push(`Unsupported questionType: ${question.questionType}`);
  if (question.responseFormat !== undefined && !RESPONSE_FORMATS.has(question.responseFormat)) errors.push(`Unsupported responseFormat: ${question.responseFormat}`);
  if (question.levelId !== undefined && !LEVEL_RE.test(question.levelId)) errors.push("levelId must be L1–L9.");
  if (question.stageId !== undefined && !STAGE_RE.test(question.stageId)) errors.push("stageId must be S1–S6.");
  if (question.half !== undefined && !HALVES.has(question.half)) errors.push("half must be explore or extend.");
  if (question.status !== undefined && !STATUSES.has(question.status)) errors.push(`Unsupported status: ${question.status}`);
  if (!Number.isInteger(question.version) || question.version < 1) errors.push("version must be a positive integer.");
  if (!Number.isFinite(question.difficulty) || question.difficulty < 1 || question.difficulty > 9) errors.push("difficulty must be a number from 1 to 9.");
  if (typeof question.prompt !== "string" || !question.prompt.trim()) errors.push("prompt must be non-empty text.");
  if (!isPlainObject(question.source)) {
    errors.push("source must be an object with sourceType and reference.");
  } else {
    if (typeof question.source.sourceType !== "string" || !question.source.sourceType.trim()) errors.push("source.sourceType is required.");
    if (typeof question.source.reference !== "string" || !question.source.reference.trim()) errors.push("source.reference is required.");
  }
  if (!isPlainObject(question.rights)) {
    errors.push("rights must record status and basis; do not assume text is cleared.");
  } else {
    if (!["cleared", "public_domain", "licensed", "original", "pending_review", "not_applicable"].includes(question.rights.status)) errors.push("rights.status must use an approved rights status.");
    if (typeof question.rights.basis !== "string" || !question.rights.basis.trim()) errors.push("rights.basis is required.");
    if (["cleared", "public_domain", "licensed", "original"].includes(question.rights.status) &&
        typeof question.rights.evidence !== "string" && question.rights.status !== "original") errors.push("Rights-cleared, public-domain and licensed content must include rights.evidence.");
  }
  if (!isPlainObject(question.feedback)) errors.push("feedback must be an object.");
  if (question.responseFormat === "single_select" || question.responseFormat === "multi_select") {
    if (!Array.isArray(question.options) || question.options.length < 2) {
      errors.push(`${question.responseFormat} requires at least two options.`);
    } else {
      const labels = question.options.map(option => typeof option === "string" ? option : option && option.id);
      if (labels.some(label => typeof label !== "string" || !label.trim())) errors.push("Each option must be text or an object with a non-empty id.");
      if (new Set(labels).size !== labels.length) errors.push("Option identifiers/text must be unique.");
      if (!Array.isArray(question.answerKey) || question.answerKey.length === 0) errors.push("Selection questions require a non-empty answerKey array.");
      else {
        const optionIds = new Set(labels);
        for (const answer of question.answerKey) if (!optionIds.has(answer)) errors.push(`answerKey refers to unknown option: ${answer}`);
        if (question.responseFormat === "single_select" && question.answerKey.length !== 1) errors.push("single_select must have exactly one answerKey entry.");
      }
    }
  }
  if (["single_select", "multi_select"].includes(question.responseFormat)) {
    const cue = findExtremeAnswerLengthCue(question);
    if (cue) {
      errors.push(`Correct answer has an extreme length cue (${cue.kind}; ${cue.absoluteGap} characters, ${cue.ratio.toFixed(2)}x). Re-author the options so the answer is not revealed by length.`);
    }
  }
  if (question.responseFormat === "true_false" && typeof question.answerKey !== "boolean") errors.push("true_false requires a boolean answerKey.");
  if (["short_text", "long_text", "sentence_reorder", "sentence_edit", "evidence_response", "listening_text_response", "oral_prompt"].includes(question.responseFormat)) {
    const hasRubric = isPlainObject(question.rubric) && Array.isArray(question.rubric.criteria) && question.rubric.criteria.length > 0;
    const hasAnswerGuidance = typeof question.answerGuidance === "string" && question.answerGuidance.trim();
    if (!hasRubric && !hasAnswerGuidance) errors.push("Constructed-response formats require a non-empty rubric.criteria or answerGuidance.");
    if (hasRubric && question.rubric.criteria.some(item => !isPlainObject(item) || typeof item.name !== "string" || !item.name.trim() || !Number.isFinite(item.maxPoints) || item.maxPoints <= 0)) errors.push("Each rubric criterion requires a name and positive numeric maxPoints.");
  }
  if (question.passageId !== undefined && (typeof question.passageId !== "string" || !question.passageId.trim())) errors.push("passageId, when supplied, must be non-empty text.");
  if (["short_story_comprehension", "nonfiction_passage_comprehension"].includes(question.questionType) &&
      !(typeof question.passageId === "string" && question.passageId.trim()) &&
      !(typeof question.passageText === "string" && question.passageText.trim())) errors.push("Passage-comprehension questions require passageId or passageText.");
  if (question.questionType === "listening_oral_response" && !["listening_text_response", "oral_prompt"].includes(question.responseFormat)) errors.push("listening_oral_response must use listening_text_response or oral_prompt.");
  if (context.levelId && question.levelId !== context.levelId) errors.push("levelId does not match validation context.");
  if (context.stageId && question.stageId !== context.stageId) errors.push("stageId does not match validation context.");
  return errors;
}

function validateEnglishBank(bank, context = {}) {
  const errors = [];
  if (!isPlainObject(bank)) return ["Bank document must be a plain object."];
  for (const field of ["schemaVersion", "bankId", "levelId", "stageId", "version", "questions"]) {
    if (bank[field] === undefined || bank[field] === null || bank[field] === "") errors.push(`Missing bank field: ${field}`);
  }
  if (bank.schemaVersion !== "1.0") errors.push("schemaVersion must be 1.0.");
  if (typeof bank.bankId !== "string" || !bank.bankId.trim()) errors.push("bankId must be non-empty text.");
  if (!LEVEL_RE.test(bank.levelId || "")) errors.push("Bank levelId must be L1–L9.");
  if (!STAGE_RE.test(bank.stageId || "")) errors.push("Bank stageId must be S1–S6.");
  if (!Number.isInteger(bank.version) || bank.version < 1) errors.push("Bank version must be a positive integer.");
  if (!Array.isArray(bank.questions) || bank.questions.length === 0) errors.push("Bank questions must be a non-empty array.");

  // Passages are an optional bank-level registry. When supplied, all passage references
  // must resolve and registry IDs must be unique; legacy inline passageText remains valid
  // when a bank does not provide a passages array.
  let passageIds = null;
  if (bank.passages !== undefined) {
    passageIds = new Set();
    if (!Array.isArray(bank.passages)) {
      errors.push("Bank passages must be an array when supplied.");
    } else {
      for (const [index, passage] of bank.passages.entries()) {
        const prefix = `passages[${index}]`;
        if (!isPlainObject(passage)) {
          errors.push(`${prefix}: passage record must be a plain object.`);
          continue;
        }
        for (const field of ["id", "type", "title", "text"]) {
          if (typeof passage[field] !== "string" || !passage[field].trim()) errors.push(`${prefix}: ${field} must be non-empty text.`);
        }
        if (typeof passage.id === "string" && passage.id.trim()) {
          if (passageIds.has(passage.id)) errors.push(`${prefix}: duplicate passage id "${passage.id}".`);
          passageIds.add(passage.id);
        }
        if (!isPlainObject(passage.source) || typeof passage.source.sourceType !== "string" || !passage.source.sourceType.trim() || typeof passage.source.reference !== "string" || !passage.source.reference.trim()) errors.push(`${prefix}: source must include sourceType and reference.`);
        if (!isPlainObject(passage.rights) || !["cleared", "public_domain", "licensed", "original", "pending_review", "not_applicable"].includes(passage.rights.status) || typeof passage.rights.basis !== "string" || !passage.rights.basis.trim()) errors.push(`${prefix}: rights must include an approved status and non-empty basis.`);
      }
    }
  }

  const ids = new Set();
  for (const [index, question] of (Array.isArray(bank.questions) ? bank.questions : []).entries()) {
    const prefix = `questions[${index}]`;
    for (const error of validateEnglishQuestion(question, { levelId: bank.levelId, stageId: bank.stageId })) errors.push(`${prefix}: ${error}`);
    if (question && typeof question.id === "string") {
      if (ids.has(question.id)) errors.push(`${prefix}: duplicate question id "${question.id}".`);
      ids.add(question.id);
    }
    if (context.activityIds && question && !context.activityIds.has(question.activityId)) errors.push(`${prefix}: unknown activityId "${question.activityId}".`);
    if (passageIds && question && typeof question.passageId === "string" && !passageIds.has(question.passageId)) errors.push(`${prefix}: unknown passageId "${question.passageId}".`);
    if (passageIds && Array.isArray(bank.passages) && question && typeof question.passageId === "string") {
      const passage = bank.passages.find(item => item && item.id === question.passageId);
      if (passage && typeof question.passageText === "string" && question.passageText.trim() && typeof passage.text === "string" && question.passageText !== passage.text) errors.push(`${prefix}: passageText differs from the registered passage for passageId "${question.passageId}".`);
    }
  }
  return errors;
}

module.exports = { QUESTION_TYPES, RESPONSE_FORMATS, STATUSES, validateEnglishQuestion, validateEnglishBank };
