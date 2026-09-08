import { getLevel } from "./curriculum";

export const QUESTION_TYPES = {
  multipleChoice: "multiple_choice",
  shortAnswer: "short_answer",
  trueFalse: "true_false",
};

const questions = [
  {
    id: "Q-L1-Q-S1-EXP-NUM-001",
    track: "quantitative",
    levelId: "L1",
    half: "explore",
    stageId: "S1",
    moduleId: "number-patterns",
    topicId: "patterns",
    activityId: "pattern-introduction",
    questionType: QUESTION_TYPES.multipleChoice,
    concept: "Number patterns",
    difficulty: 1,
    timeSeconds: 45,
    question: "What number comes next: 2, 4, 6, 8, ?",
    options: ["9", "10", "11", "12"],
    answer: "10",
    explanation: "The pattern increases by 2 each time, so 8 + 2 = 10.",
  },
  {
    id: "Q-L1-Q-S1-EXT-NUM-001",
    track: "quantitative",
    levelId: "L1",
    half: "extend",
    stageId: "S1",
    moduleId: "number-patterns",
    topicId: "patterns",
    activityId: "pattern-challenge",
    questionType: QUESTION_TYPES.multipleChoice,
    concept: "Growing number patterns",
    difficulty: 2,
    timeSeconds: 60,
    question: "A pattern starts 3, 6, 9, 12. Which number is the 7th term?",
    options: ["18", "21", "24", "27"],
    answer: "21",
    explanation: "The pattern adds 3 each time. The terms are 3, 6, 9, 12, 15, 18, 21.",
  },
  {
    id: "Q-L1-V-S1-EXP-ARG-001",
    track: "verbal",
    levelId: "L1",
    half: "explore",
    stageId: "S1",
    moduleId: "evidence-and-claims",
    topicId: "claims",
    activityId: "claim-basics",
    questionType: QUESTION_TYPES.multipleChoice,
    concept: "Claims and evidence",
    difficulty: 1,
    timeSeconds: 60,
    question: "Which sentence is a claim that could be supported with evidence?",
    options: ["The book has 120 pages.", "I think the story is interesting.", "The story's ending teaches an important lesson.", "Please open the book."],
    answer: "The story's ending teaches an important lesson.",
    explanation: "A claim makes an idea that can be explained or supported with reasons or evidence.",
  },
  {
    id: "Q-L1-V-S1-EXT-ARG-001",
    track: "verbal",
    levelId: "L1",
    half: "extend",
    stageId: "S1",
    moduleId: "evidence-and-claims",
    topicId: "claims",
    activityId: "evidence-challenge",
    questionType: QUESTION_TYPES.multipleChoice,
    concept: "Choosing relevant evidence",
    difficulty: 2,
    timeSeconds: 75,
    question: "A student claims that reading every day can improve vocabulary. Which evidence is most relevant?",
    options: ["The student has a blue backpack.", "A class survey found that regular readers learned more new words.", "The library has large windows.", "The student prefers mystery stories."],
    answer: "A class survey found that regular readers learned more new words.",
    explanation: "Relevant evidence directly supports the claim about regular reading and vocabulary growth.",
  },
];

export function getQuestionBank(filters = {}) {
  return questions.filter((item) => Object.entries(filters).every(([key, value]) => item[key] === value));
}

export function getQuestionById(id) {
  return questions.find((item) => item.id === id) || null;
}

export function getQuestionsForActivity(track, levelId, half, activityId) {
  return getQuestionBank({ track, levelId, half, activityId });
}

export function getDefaultTimeSeconds({ levelId, difficulty = 1, questionType = QUESTION_TYPES.multipleChoice } = {}) {
  const level = getLevel(levelId);
  const base = level.level <= 3 ? 45 : level.level <= 6 ? 60 : 75;
  const typeAdjustment = questionType === QUESTION_TYPES.shortAnswer ? 15 : questionType === QUESTION_TYPES.trueFalse ? -10 : 0;
  return Math.max(20, base + (difficulty - 1) * 15 + typeAdjustment);
}

export const REASONING_QUESTION_BANK = questions;
