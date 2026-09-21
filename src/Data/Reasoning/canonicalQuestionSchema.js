/**
 * Canonical Reasoning Question Record schema and validation primitives.
 *
 * This module defines the target content contract. It does not replace the
 * existing Reasoning question banks or player during the migration phase.
 */

export const REASONING_SCHEMA_VERSION = "1.0";

export const REASONING_TRACKS = new Set(["quantitative", "verbal"]);
export const REASONING_HALVES = new Set(["explore", "extend"]);
export const REASONING_CONTENT_MODES = new Set([
  "computation",
  "textReasoning",
  "computationReasoning",
]);
export const REASONING_STATUSES = new Set([
  "draft",
  "review",
  "approved",
  "published",
  "retired",
]);

export const REQUIRED_CANONICAL_FIELDS = [
  "id",
  "track",
  "levelId",
  "stageId",
  "half",
  "moduleId",
  "topicId",
  "activityId",
  "questionType",
  "question",
  "answer",
  "explanation",
  "difficulty",
  "timePerQuestion",
  "contentMode",
  "status",
  "version",
  "sourceBank",
  "provenance",
];

export function assertCanonicalQuestion(question, context = {}) {
  const errors = [];
  if (!question || typeof question !== "object") {
    return ["Question record must be an object."];
  }

  for (const field of REQUIRED_CANONICAL_FIELDS) {
    if (question[field] === undefined || question[field] === null || question[field] === "") {
      errors.push(`Missing required field: ${field}`);
    }
  }

  if (question.track !== undefined && !REASONING_TRACKS.has(question.track)) {
    errors.push(`Invalid track: ${question.track}`);
  }
  if (question.half !== undefined && !REASONING_HALVES.has(question.half)) {
    errors.push(`Invalid half: ${question.half}`);
  }
  if (question.contentMode !== undefined && !REASONING_CONTENT_MODES.has(question.contentMode)) {
    errors.push(`Invalid contentMode: ${question.contentMode}`);
  }
  if (question.status !== undefined && !REASONING_STATUSES.has(question.status)) {
    errors.push(`Invalid status: ${question.status}`);
  }

  if (question.levelId !== undefined && !/^L[1-9]$/.test(question.levelId)) {
    errors.push(`Invalid levelId: ${question.levelId}`);
  }
  if (question.stageId !== undefined && !/^S[1-6]$/.test(question.stageId)) {
    errors.push(`Invalid stageId: ${question.stageId}`);
  }
  if (question.questionType === "multiple_choice") {
    if (!Array.isArray(question.options) || question.options.length !== 4) {
      errors.push("multiple_choice questions require exactly four options.");
    } else {
      if (new Set(question.options).size !== question.options.length) {
        errors.push("Question options must be unique.");
      }
      if (!question.options.includes(question.answer)) {
        errors.push("Question answer must match one of the options.");
      }
    }
  }

  if (!Number.isInteger(question.version) || question.version < 1) {
    errors.push("version must be a positive integer.");
  }
  if (!Number.isFinite(Number(question.timePerQuestion)) || Number(question.timePerQuestion) <= 0) {
    errors.push("timePerQuestion must be a positive number.");
  }
  if (question.provenance !== undefined && typeof question.provenance !== "object") {
    errors.push("provenance must be an object.");
  }

  if (context.levelId && question.levelId !== context.levelId) {
    errors.push(`Level mismatch: expected ${context.levelId}, found ${question.levelId}`);
  }
  if (context.stageId && question.stageId !== context.stageId) {
    errors.push(`Stage mismatch: expected ${context.stageId}, found ${question.stageId}`);
  }
  if (context.track && question.track !== context.track) {
    errors.push(`Track mismatch: expected ${context.track}, found ${question.track}`);
  }
  if (context.half && question.half !== context.half) {
    errors.push(`Half mismatch: expected ${context.half}, found ${question.half}`);
  }

  return errors;
}

export function validateCanonicalQuestion(question, context = {}) {
  const errors = assertCanonicalQuestion(question, context);
  return { valid: errors.length === 0, errors };
}
