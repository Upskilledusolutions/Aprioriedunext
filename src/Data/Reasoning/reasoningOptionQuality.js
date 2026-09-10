/**
 * Shared multiple-choice presentation controls for Reasoning.
 *
 * The correct answer must never be exposed by answer position, case, or
 * formatting. Length is audited separately: content authors must re-author
 * material length imbalances rather than padding options with meaningless text.
 */
const punctuationPattern = /[.!?]+$/;

// Surgical correction for the current Level 1 Stage 3 calibrated set.
// The source set contains one accidental duplicate distractor (38 appears twice).
// Correct it before the shared quality audit so the Stage 3 hard validator can
// enforce the no-duplicate-options rule without introducing a generic content
// mutation mechanism.
const STAGE3_OPTION_CORRECTIONS = {
  "Q-L1-Q-S3-CAL-Q-L1-S3-EXP-generalizing-patterns-09": [
    ["38", "40"],
  ],
};

const applyKnownOptionCorrections = (question) => {
  const corrections = STAGE3_OPTION_CORRECTIONS[question?.id];
  if (!corrections || !Array.isArray(question?.options)) return question;
  let options = question.options.map((option) => String(option ?? ""));
  for (const [from, to] of corrections) {
    let replaced = false;
    options = options.map((option) => {
      if (!replaced && option.trim() === from) {
        replaced = true;
        return to;
      }
      return option;
    });
  }
  return { ...question, options };
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
  const ordered = rotate(normalized, stableSeed(correctedQuestion.id) % normalized.length);

  const lengths = ordered.map((option) => option.length);
  const minLength = Math.min(...lengths);
  const maxLength = Math.max(...lengths);
  const shortestCount = lengths.filter((length) => length === minLength).length;
  const longestCount = lengths.filter((length) => length === maxLength).length;
  const answerLength = correctedAnswer.length;
  const lengthCue = (answerLength === minLength && shortestCount === 1) || (answerLength === maxLength && longestCount === 1);

  return {
    ...correctedQuestion,
    options: ordered,
    answer: correctedAnswer,
    optionQuality: {
      positionBalanced: ordered.findIndex((option) => option === correctedAnswer) !== 0,
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
