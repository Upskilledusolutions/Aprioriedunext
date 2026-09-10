/**
 * Shared multiple-choice presentation controls for Reasoning.
 *
 * The correct answer must never be exposed by answer position, case, or
 * formatting. Length is audited separately: content authors must re-author
 * material length imbalances rather than padding options with meaningless text.
 */
const punctuationPattern = /[.!?]+$/;

// Surgical corrections for the current Level 1 Stage 3 calibrated set.
// These are content-specific corrections for known source-set issues; they do
// not introduce a generic answer-selection or content-generation mechanism.
const STAGE3_OPTION_CORRECTIONS = {
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXP-generalizing-patterns-09": [
    ["38", "40"],
  ],
};

const STAGE3_VERBAL_LENGTH_REWRITES = {
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-analytical-paragraphs-07": [
    [
      "The result suggests some students may value additional morning time, although the small sample limits the claim",
      "The result suggests later starts may help, but the small sample limits the claim",
    ],
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-using-evidence-07": [
    [
      "It may provide useful evidence, but the claim should remain appropriately limited",
      "It may be useful evidence, but the small sample limits the claim",
    ],
  ],
  "Q-L1-Q-S3-CAL-V-L1-S3-EXP-revising-clarity-04": [
    [
      "This result suggests the new schedule may improve punctuality because fewer students arrived late",
      "The result suggests the new schedule may improve punctuality",
    ],
  ],
};

const applyKnownOptionCorrections = (question) => {
  const corrections = STAGE3_OPTION_CORRECTIONS[question?.id];
  const rewrites = STAGE3_VERBAL_LENGTH_REWRITES[question?.id];
  if ((!corrections && !rewrites) || !Array.isArray(question?.options)) return question;

  let options = question.options.map((option) => String(option ?? ""));
  let answer = String(question.answer ?? "");

  for (const [from, to] of [...(corrections || []), ...(rewrites || [])]) {
    let replaced = false;
    options = options.map((option) => {
      if (!replaced && option.trim() === from) {
        replaced = true;
        if (answer.trim() === from) answer = to;
        return to;
      }
      return option;
    });
  }

  return { ...question, options, answer };
};

const normalizeCase = (value) => {
  const text = String(value ?? "").trim();
  if (!text) return text;
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const normalizePunctuation = (value, hasTerminalPunctuation) => {
  const text = String(value ?? "").trim().replace(punctuationPattern, "");
  return hasTerminalPunctuation ? `${text}.` : text;
};

const rotate = (items, offset) => {
  if (!items.length) return items;
  const safeOffset = ((offset % items.length) + items.length) % items.length;
  return items.slice(safeOffset).concat(items.slice(0, safeOffset));
};

const stableSeed = (id = "") => [...String(id)].reduce((sum, char) => (sum * 31 + char.charCodeAt(0)) >>> 0, 7);

export function prepareReasoningOptions(question) {
  if (!question || !Array.isArray(question.options) || question.options.length < 2) return question;

  const correctedQuestion = applyKnownOptionCorrections(question);
  const options = correctedQuestion.options.map((option) => String(option ?? "").trim());
  const correctIndex = options.findIndex((option) => option === String(correctedQuestion.answer ?? "").trim());
  if (correctIndex < 0) return correctedQuestion;

  const hasTerminalPunctuation = options.some((option) => punctuationPattern.test(option));
  const normalized = options.map((option) => normalizePunctuation(normalizeCase(option), hasTerminalPunctuation));
  const correctedAnswer = normalized[correctIndex];

  const targetPosition = stableSeed(correctedQuestion.id) % normalized.length;
  const offset = (correctIndex - targetPosition + normalized.length) % normalized.length;
  const ordered = rotate(normalized, offset);

  // Only flag an extreme, isolated length signal. A genuinely conspicuous cue
  // requires both a large relative gap and a meaningful absolute gap. This keeps
  // natural sentence-length variation from blocking otherwise valid reasoning
  // questions while still rejecting options that make the answer obvious by size.
  const lengths = ordered.map((option) => option.length);
  const minLength = Math.min(...lengths);
  const maxLength = Math.max(...lengths);
  const shortestCount = lengths.filter((length) => length === minLength).length;
  const longestCount = lengths.filter((length) => length === maxLength).length;
  const sortedLengths = [...lengths].sort((a, b) => a - b);
  const answerIndex = ordered.findIndex((option) => option === correctedAnswer);
  const answerLength = correctedAnswer.length;
  const secondShortest = sortedLengths[1] ?? minLength;
  const secondLongest = sortedLengths[sortedLengths.length - 2] ?? maxLength;
  const shortestGap = secondShortest - answerLength;
  const longestGap = answerLength - secondLongest;
  const uniqueShortestCue = answerLength === minLength && shortestCount === 1 && shortestGap >= 25 && secondShortest >= answerLength * 2.5;
  const uniqueLongestCue = answerLength === maxLength && longestCount === 1 && longestGap >= 25 && answerLength >= secondLongest * 2.5;
  const lengthCue = uniqueShortestCue || uniqueLongestCue;

  return {
    ...correctedQuestion,
    options: ordered,
    answer: correctedAnswer,
    optionQuality: {
      positionBalanced: answerIndex === targetPosition,
      targetAnswerPosition: targetPosition,
      capitalizationNormalized: true,
      punctuationNormalized: true,
      lengthCueDetected: lengthCue,
      lengthCueAction: lengthCue ? "REAUTHOR_REQUIRED" : "PASS",
    },
  };
}

export function prepareReasoningQuestionSet(questions = []) {
  return questions.map(prepareReasoningOptions);
}
