/**
 * English Aptitude option-length quality checks.
 *
 * Mirrors the proven Reasoning safeguard: only flag an isolated answer-length
 * cue when it is at least 2.5x the nearest competing option and at least
 * 25 characters longer. Ordinary sentence-length variation is not an error.
 * This is a content-quality guard, not a question-delivery or scoring layer.
 */
function optionText(option) {
  const value = typeof option === "string"
    ? option
    : option && typeof option === "object"
      ? (option.text ?? option.label ?? option.id ?? "")
      : "";
  return String(value).trim().replace(/[.!?]+$/, "");
}

function findExtremeAnswerLengthCue(question) {
  if (!question || !["single_select", "multi_select"].includes(question.responseFormat)) return null;
  if (!Array.isArray(question.options) || !Array.isArray(question.answerKey) || question.answerKey.length === 0) return null;

  const optionRecords = question.options.map(option => ({
    key: typeof option === "string" ? option : option && typeof option === "object" ? String(option.id ?? option.value ?? option.text ?? option.label ?? "") : "",
    text: optionText(option),
  }));
  const options = optionRecords.map(option => option.text);
  if (options.some(option => !option)) return null;
  const lengths = options.map(option => option.length);
  const sorted = [...lengths].sort((a, b) => a - b);
  const minLength = sorted[0];
  const maxLength = sorted[sorted.length - 1];
  const shortestCount = lengths.filter(length => length === minLength).length;
  const longestCount = lengths.filter(length => length === maxLength).length;

  for (const answer of question.answerKey) {
    const answerText = optionText(answer);
    const answerKey = typeof answer === "string" ? answer : answer && typeof answer === "object" ? String(answer.id ?? answer.value ?? answer.text ?? answer.label ?? "") : "";
    const answerIndex = optionRecords.findIndex(option => option.key === answerKey || option.text === answerText);
    if (answerIndex < 0) continue;
    const answerLength = lengths[answerIndex];
    const secondShortest = sorted[1] ?? minLength;
    const secondLongest = sorted[sorted.length - 2] ?? maxLength;
    const uniqueShortestCue = answerLength === minLength &&
      shortestCount === 1 && secondShortest - answerLength >= 25 &&
      secondShortest >= answerLength * 2.5;
    const uniqueLongestCue = answerLength === maxLength &&
      longestCount === 1 && answerLength - secondLongest >= 25 &&
      answerLength >= secondLongest * 2.5;
    if (uniqueShortestCue || uniqueLongestCue) {
      return {
        kind: uniqueShortestCue ? "unique_shortest_correct_option" : "unique_longest_correct_option",
        answerLength,
        comparisonLength: uniqueShortestCue ? secondShortest : secondLongest,
        absoluteGap: uniqueShortestCue ? secondShortest - answerLength : answerLength - secondLongest,
        ratio: uniqueShortestCue
          ? secondShortest / Math.max(answerLength, 1)
          : answerLength / Math.max(secondLongest, 1),
      };
    }
  }
  return null;
}

function auditAnswerLengthDistribution(questions) {
  const eligible = (Array.isArray(questions) ? questions : []).filter(question =>
    question && question.responseFormat === "single_select" &&
    Array.isArray(question.options) && Array.isArray(question.answerKey) &&
    question.answerKey.length === 1
  );
  const flagged = eligible.filter(question => {
    const answer = optionText(question.answerKey[0]);
    const lengths = question.options.map(option => optionText(option).length);
    return lengths.length > 0 && answer.length === Math.max(...lengths);
  });
  return {
    total: eligible.length,
    longestOrTiedLongest: flagged.length,
    rate: eligible.length ? flagged.length / eligible.length : 0,
  };
}

module.exports = { optionText, findExtremeAnswerLengthCue, auditAnswerLengthDistribution };
