#!/usr/bin/env node
const assert = require("node:assert/strict");
const { editableBankToCanonical } = require("../src/Data/EnglishAptitude/englishQuestionBankSync");
const { validateCompleteEnglishStageBank } = require("../src/Data/EnglishAptitude/englishStageBankQuality");

const OTHER_TYPES = [
  "vocabulary_in_context",
  "antonyms",
  "word_relationships_word_formation",
  "inference_supporting_evidence",
  "grammar_error_identification",
  "sentence_correction",
  "paragraph_improvement",
  "sentence_ordering_combining_construction",
  "short_written_response",
  "listening_oral_response",
];
const STORY_COUNT = { S1: 3, S2: 2, S3: 3, S4: 2, S5: 3, S6: 2 };
const metadata = {
  source: { sourceType: "original", reference: "Synthetic curriculum quantity test fixture" },
  rights: { status: "original", basis: "Newly authored synthetic test data" },
  feedback: { correct: "Check the evidence and reasoning.", incorrect: "Revisit the prompt and try again." },
};
function makePassage(id, type, half, title) {
  return {
    id, type, half, title,
    text: `Synthetic passage text for ${title} used only by validator tests.`,
    source: { sourceType: "original", reference: "Synthetic curriculum quantity test fixture" },
    rights: { status: "original", basis: "Newly authored synthetic test passage" },
  };
}
function makeQuestion(stageId, questionType, half, n, passageId) {
  const common = {
    id: `eng-l1-${stageId.toLowerCase()}-${questionType}-${half}-${String(n).padStart(3, "0")}`,
    questionType,
    levelId: "L1",
    stageId,
    half,
    moduleId: half === "explore" ? `L1-${stageId}-M1` : `L1-${stageId}-M2`,
    activityId: `ENG-L1-${stageId}-${half === "explore" ? "EXP" : "EXT"}-01`,
    prompt: `Synthetic ${questionType.replaceAll("_", " ")} item ${n}.`,
    difficulty: 1,
    status: "draft",
    version: 1,
    ...metadata,
  };
  if (passageId) common.passageId = passageId;
  if (["short_story_comprehension", "nonfiction_passage_comprehension"].includes(questionType) ||
      ["vocabulary_in_context", "antonyms", "word_relationships_word_formation", "grammar_error_identification", "paragraph_improvement"].includes(questionType)) {
    Object.assign(common, {
      responseFormat: "single_select",
      options: ["Option A", "Option B", "Option C", "Option D"],
      answerKey: ["Option A"],
    });
  } else if (questionType === "inference_supporting_evidence") {
    Object.assign(common, {
      responseFormat: "evidence_response",
      rubric: { criteria: [
        { name: "Relevant evidence", maxPoints: 2 },
        { name: "Explanation of inference", maxPoints: 2 },
      ] },
    });
  } else if (questionType === "sentence_correction") {
    Object.assign(common, {
      responseFormat: "sentence_edit",
      answerGuidance: "Correct the sentence while preserving its intended meaning.",
    });
  } else if (questionType === "sentence_ordering_combining_construction") {
    Object.assign(common, {
      responseFormat: "sentence_reorder",
      answerGuidance: "Arrange the sentences into a coherent sequence.",
    });
  } else if (questionType === "short_written_response") {
    Object.assign(common, {
      responseFormat: "long_text",
      rubric: { criteria: [
        { name: "Relevant content", maxPoints: 2 },
        { name: "Clear reasoning", maxPoints: 2 },
      ] },
    });
  } else if (questionType === "listening_oral_response") {
    Object.assign(common, {
      responseFormat: "oral_prompt",
      answerGuidance: "State the main point and include one accurate detail heard.",
    });
  }
  return common;
}
function makeStageBank(stageId) {
  const passages = [];
  const questions = [];
  let serial = 0;
  const storyCount = STORY_COUNT[stageId];
  for (let i = 1; i <= storyCount; i += 1) {
    const id = `eng-l1-${stageId.toLowerCase()}-story-${String(i).padStart(2, "0")}`;
    passages.push(makePassage(id, "short_story", "explore", `Synthetic story ${i}`));
    for (let j = 1; j <= 20; j += 1) {
      serial += 1;
      questions.push(makeQuestion(stageId, "short_story_comprehension", "explore", serial, id));
    }
  }
  for (const [i, half] of ["explore", "explore", "extend"].entries()) {
    const id = `eng-l1-${stageId.toLowerCase()}-nonfiction-${i + 1}`;
    passages.push(makePassage(id, "nonfiction_passage", half, `Synthetic nonfiction ${i + 1}`));
    for (let j = 1; j <= 20; j += 1) {
      serial += 1;
      questions.push(makeQuestion(stageId, "nonfiction_passage_comprehension", half, serial, id));
    }
  }
  for (const questionType of OTHER_TYPES) {
    for (const half of ["explore", "extend"]) {
      for (let j = 1; j <= 10; j += 1) {
        serial += 1;
        questions.push(makeQuestion(stageId, questionType, half, serial));
      }
    }
  }
  const activityIds = new Set([
    `ENG-L1-${stageId}-EXP-01`,
    `ENG-L1-${stageId}-EXT-01`,
  ]);
  const editable = {
    formatVersion: "1.0",
    bankId: `english-L1-${stageId}-quantity-test`,
    levelId: "L1",
    stageId,
    bankVersion: 1,
    passages,
    questions,
  };
  return { canonical: editableBankToCanonical(editable, { activityIds }), activityIds };
}
function assertValidStage(stageId, expectedTotal, expectedExplore) {
  const { canonical, activityIds } = makeStageBank(stageId);
  assert.equal(canonical.questions.length, expectedTotal);
  assert.equal(canonical.questions.filter(question => question.half === "explore").length, expectedExplore);
  assert.deepEqual(validateCompleteEnglishStageBank(canonical, { activityIds }), []);
  return { canonical, activityIds };
}

const s1 = assertValidStage("S1", 320, 200);
assertValidStage("S3", 320, 200);
const s2 = assertValidStage("S2", 300, 180);
assertValidStage("S4", 300, 180);
assertValidStage("S5", 320, 200);
assertValidStage("S6", 300, 180);

// A bank that is structurally valid but below a curriculum minimum must be rejected.
const underCount = structuredClone(s1.canonical);
const underCountIndex = underCount.questions.findIndex(question =>
  question.questionType === "vocabulary_in_context" && question.half === "extend");
underCount.questions.splice(underCountIndex, 1);
assert(validateCompleteEnglishStageBank(underCount, { activityIds: s1.activityIds }).some(error =>
  error.includes('Question type "vocabulary_in_context" requires at least 10 extend questions')));

// Story-count rules differ correctly between two-story and three-story stages.
const missingStory = structuredClone(s1.canonical);
const removedStoryId = missingStory.passages.find(passage => passage.type === "short_story").id;
missingStory.passages = missingStory.passages.filter(passage => passage.id !== removedStoryId);
missingStory.questions = missingStory.questions.filter(question => question.passageId !== removedStoryId);
assert(validateCompleteEnglishStageBank(missingStory, { activityIds: s1.activityIds }).some(error =>
  error.includes("requires exactly 3 short-story passages")));

// Nonfiction passages must be split two in Explore and one in Extend, with questions following their passage.
const wrongHalf = structuredClone(s1.canonical);
const exploreNonfiction = wrongHalf.passages.find(passage => passage.type === "nonfiction_passage" && passage.half === "explore");
exploreNonfiction.half = "extend";
assert(validateCompleteEnglishStageBank(wrongHalf, { activityIds: s1.activityIds }).some(error =>
  error.includes("two nonfiction passages to Explore and one to Extend")));
assert(validateCompleteEnglishStageBank(wrongHalf, { activityIds: s1.activityIds }).some(error =>
  error.includes("half must match its registered nonfiction passage")));

console.log("English Aptitude stage-bank quality tests passed: all six stage totals, two/three-story allocation, 20 questions per reading passage, 10+10 allocation for every other type, and negative quantity/half-allocation cases.");
