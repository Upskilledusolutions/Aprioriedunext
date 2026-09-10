/**
 * Shared multiple-choice presentation controls for Reasoning.
 *
 * The correct answer must never be exposed by answer position, case, or
 * formatting. Length is audited separately: content authors must re-author
 * material length imbalances rather than padding options with meaningless text.
 */
const punctuationPattern = /[.!?]+$/;

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

  const options = question.options.map((option) => String(option ?? "").trim());
  const correctIndex = options.findIndex((option) => option === String(question.answer ?? "").trim());
  if (correctIndex < 0) return question;

  const hasTerminalPunctuation = options.some((option) => punctuationPattern.test(option));
  const normalized = options.map((option) => normalizePunctuation(normalizeCase(option), hasTerminalPunctuation));
  const correctedAnswer = normalized[correctIndex];
  const ordered = rotate(normalized, stableSeed(question.id) % normalized.length);

  const lengths = ordered.map((option) => option.length);
  const minLength = Math.min(...lengths);
  const maxLength = Math.max(...lengths);
  const shortestCount = lengths.filter((length) => length === minLength).length;
  const longestCount = lengths.filter((length) => length === maxLength).length;
  const answerLength = correctedAnswer.length;
  const lengthCue = (answerLength === minLength && shortestCount === 1) || (answerLength === maxLength && longestCount === 1);

  return {
    ...question,
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
