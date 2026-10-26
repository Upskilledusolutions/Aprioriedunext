/**
 * English Aptitude's first learner-player increment.
 * Supports single-select attempts only; does not persist learner data.
 */
function sampleSingleSelectAttempt(bank, activityId, count = 10, random = Math.random) {
  if (!bank || !Array.isArray(bank.questions)) throw new Error("A question bank with a questions array is required.");
  if (!Number.isInteger(count) || count < 1) throw new Error("Attempt question count must be a positive integer.");
  const eligible = bank.questions.filter(question =>
    question &&
    question.activityId === activityId &&
    question.responseFormat === "single_select" &&
    Array.isArray(question.options) &&
    Array.isArray(question.answerKey) &&
    question.answerKey.length === 1
  );
  if (eligible.length < count) {
    throw new Error(`Activity "${activityId}" has ${eligible.length} compatible single-select questions; ${count} are required.`);
  }
  const shuffled = eligible.slice();
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const target = Math.floor(random() * (index + 1));
    [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
  }
  return shuffled.slice(0, count);
}

function isSingleSelectAnswerCorrect(question, selectedOption) {
  return Boolean(
    question &&
    Array.isArray(question.answerKey) &&
    question.answerKey.length === 1 &&
    typeof selectedOption === "string" &&
    selectedOption === question.answerKey[0]
  );
}

module.exports = { sampleSingleSelectAttempt, isSingleSelectAnswerCorrect };
