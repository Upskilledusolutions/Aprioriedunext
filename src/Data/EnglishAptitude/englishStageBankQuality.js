/**
 * Curriculum-level quality checks for a complete English Aptitude stage bank.
 *
 * This is deliberately separate from validateEnglishBank: small draft fixtures
 * can pass schema/round-trip checks without pretending to be complete stage banks.
 * Input must be a canonical bank (schemaVersion/version).
 */
const { QUESTION_TYPES, validateEnglishBank } = require("./englishQuestionSchema");

const SHORT_STORY_COUNT_BY_STAGE = Object.freeze({
  S1: 3, S2: 2, S3: 3, S4: 2, S5: 3, S6: 2,
});
const NONFICTION_PASSAGES_PER_STAGE = 3;
const QUESTIONS_PER_READING_PASSAGE = 20;
const QUESTIONS_PER_OTHER_TYPE = 20;
const QUESTIONS_PER_OTHER_TYPE_PER_HALF = 10;
const STORY_TYPE = "short_story_comprehension";
const NONFICTION_TYPE = "nonfiction_passage_comprehension";
const COMPREHENSION_TYPES = new Set([STORY_TYPE, NONFICTION_TYPE]);
const OTHER_QUESTION_TYPES = [...QUESTION_TYPES].filter(type => !COMPREHENSION_TYPES.has(type));

function validateCompleteEnglishStageBank(bank, context = {}) {
  const errors = validateEnglishBank(bank, context);
  if (!bank || typeof bank !== "object" || Array.isArray(bank)) return errors;
  if (!Array.isArray(bank.questions)) return errors;
  if (!Array.isArray(bank.passages)) {
    errors.push("A complete stage bank must include a passages registry.");
    return errors;
  }

  const stageId = bank.stageId;
  const expectedStoryCount = SHORT_STORY_COUNT_BY_STAGE[stageId];
  if (!expectedStoryCount) {
    errors.push("A complete stage bank must use a stage ID from S1 to S6.");
    return errors;
  }
  const passageMap = new Map();
  for (const passage of bank.passages) {
    if (passage && typeof passage.id === "string" && passage.id.trim() && !passageMap.has(passage.id)) {
      passageMap.set(passage.id, passage);
    }
  }
  const storyPassages = bank.passages.filter(passage => passage && passage.type === "short_story");
  const nonfictionPassages = bank.passages.filter(passage => passage && passage.type === "nonfiction_passage");

  if (storyPassages.length !== expectedStoryCount) {
    errors.push(`Stage ${stageId} requires exactly ${expectedStoryCount} short-story passages; found ${storyPassages.length}.`);
  }
  if (nonfictionPassages.length !== NONFICTION_PASSAGES_PER_STAGE) {
    errors.push(`Stage ${stageId} requires exactly ${NONFICTION_PASSAGES_PER_STAGE} nonfiction passages; found ${nonfictionPassages.length}.`);
  }

  const passageQuestions = new Map();
  for (const passage of bank.passages) {
    if (passage && typeof passage.id === "string") passageQuestions.set(passage.id, []);
    if (passage && (!["explore", "extend"].includes(passage.half))) {
      errors.push(`Passage "${passage.id || "(missing id)"}" must specify half as explore or extend for complete-stage validation.`);
    }
  }

  for (const question of bank.questions) {
    if (!question || typeof question !== "object") continue;
    const isReadingComprehension = COMPREHENSION_TYPES.has(question.questionType);
    if (isReadingComprehension && (typeof question.passageId !== "string" || !question.passageId.trim())) {
      errors.push(`Question "${question.id || "(missing id)"}" must use passageId in a complete stage bank.`);
      continue;
    }
    if (typeof question.passageId === "string" && passageQuestions.has(question.passageId)) {
      passageQuestions.get(question.passageId).push(question);
    }
    if (question.questionType === STORY_TYPE) {
      const passage = passageMap.get(question.passageId);
      if (passage && passage.type !== "short_story") {
        errors.push(`Question "${question.id}" is short-story comprehension but does not reference a short_story passage.`);
      }
      if (question.half !== "explore") errors.push(`Short-story comprehension question "${question.id}" must be assigned to Explore.`);
    }
    if (question.questionType === NONFICTION_TYPE) {
      const passage = passageMap.get(question.passageId);
      if (passage && passage.type !== "nonfiction_passage") {
        errors.push(`Question "${question.id}" is nonfiction comprehension but does not reference a nonfiction_passage.`);
      }
      if (passage && passage.half !== question.half) {
        errors.push(`Question "${question.id}" half must match its registered nonfiction passage.`);
      }
    }
  }

  for (const passage of storyPassages) {
    if (passage.half !== "explore") errors.push(`Short-story passage "${passage.id}" must be assigned to Explore.`);
    const count = (passageQuestions.get(passage.id) || []).filter(question => question.questionType === STORY_TYPE).length;
    if (count < QUESTIONS_PER_READING_PASSAGE) {
      errors.push(`Short-story passage "${passage.id}" requires at least ${QUESTIONS_PER_READING_PASSAGE} comprehension questions; found ${count}.`);
    }
  }

  const nonfictionHalfCounts = { explore: 0, extend: 0 };
  for (const passage of nonfictionPassages) {
    if (passage.half === "explore" || passage.half === "extend") nonfictionHalfCounts[passage.half] += 1;
    const count = (passageQuestions.get(passage.id) || []).filter(question => question.questionType === NONFICTION_TYPE).length;
    if (count < QUESTIONS_PER_READING_PASSAGE) {
      errors.push(`Nonfiction passage "${passage.id}" requires at least ${QUESTIONS_PER_READING_PASSAGE} comprehension questions; found ${count}.`);
    }
  }
  if (nonfictionHalfCounts.explore !== 2 || nonfictionHalfCounts.extend !== 1) {
    errors.push(`Stage ${stageId} must allocate two nonfiction passages to Explore and one to Extend; found ${nonfictionHalfCounts.explore} Explore and ${nonfictionHalfCounts.extend} Extend.`);
  }

  for (const questionType of OTHER_QUESTION_TYPES) {
    const typeQuestions = bank.questions.filter(question => question && question.questionType === questionType);
    if (typeQuestions.length < QUESTIONS_PER_OTHER_TYPE) {
      errors.push(`Question type "${questionType}" requires at least ${QUESTIONS_PER_OTHER_TYPE} questions per stage; found ${typeQuestions.length}.`);
    }
    for (const half of ["explore", "extend"]) {
      const count = typeQuestions.filter(question => question.half === half).length;
      if (count < QUESTIONS_PER_OTHER_TYPE_PER_HALF) {
        errors.push(`Question type "${questionType}" requires at least ${QUESTIONS_PER_OTHER_TYPE_PER_HALF} ${half} questions; found ${count}.`);
      }
    }
  }

  const storyCount = expectedStoryCount;
  const minimumExplore = storyCount * QUESTIONS_PER_READING_PASSAGE +
    2 * QUESTIONS_PER_READING_PASSAGE +
    OTHER_QUESTION_TYPES.length * QUESTIONS_PER_OTHER_TYPE_PER_HALF;
  const minimumExtend = QUESTIONS_PER_READING_PASSAGE +
    OTHER_QUESTION_TYPES.length * QUESTIONS_PER_OTHER_TYPE_PER_HALF;
  const exploreCount = bank.questions.filter(question => question && question.half === "explore").length;
  const extendCount = bank.questions.filter(question => question && question.half === "extend").length;
  if (exploreCount < minimumExplore) errors.push(`Stage ${stageId} requires at least ${minimumExplore} Explore questions; found ${exploreCount}.`);
  if (extendCount < minimumExtend) errors.push(`Stage ${stageId} requires at least ${minimumExtend} Extend questions; found ${extendCount}.`);
  if (bank.questions.length < minimumExplore + minimumExtend) {
    errors.push(`Stage ${stageId} requires at least ${minimumExplore + minimumExtend} total questions; found ${bank.questions.length}.`);
  }

  return [...new Set(errors)];
}

module.exports = {
  SHORT_STORY_COUNT_BY_STAGE,
  NONFICTION_PASSAGES_PER_STAGE,
  QUESTIONS_PER_READING_PASSAGE,
  QUESTIONS_PER_OTHER_TYPE,
  QUESTIONS_PER_OTHER_TYPE_PER_HALF,
  validateCompleteEnglishStageBank,
};
