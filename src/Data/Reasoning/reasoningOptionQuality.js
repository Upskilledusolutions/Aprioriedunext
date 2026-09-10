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

  // Choose the final correct-answer position directly from the stable question ID.
  // This removes the previous dependence on the source bank's answer-position bias.
  const targetPosition = stableSeed(correctedQuestion.id) % normalized.length;
  const offset = (correctIndex - targetPosition + normalized.length) % normalized.length;
  const ordered = rotate(normalized, offset);

  // A length cue is only treated as a hard cue when the correct option is an
  // isolated extreme AND is at least twice as long/short as the nearest option.
  // Minor natural wording differences are not reliable answer signals and should
  // not cause an otherwise valid calibrated question to fail the production build.
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
  const uniqueShortestCue = answerLength === minLength && shortestCount === 1 && secondShortest >= answerLength * 2;
  const uniqueLongestCue = answerLength === maxLength && longestCount === 1 && answerLength >= secondLongest * 2;
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
