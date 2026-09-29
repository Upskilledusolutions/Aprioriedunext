import canonicalBank from "../../../content/Reasoning/question-banks/canonical/L1-S4-reasoning-question-bank.json";

const REQUIRED_QUESTIONS_PER_ACTIVITY = 10;

function questionsForActivity(activityId) {
  return (canonicalBank?.questions || []).filter(
    (question) => question?.activityId === activityId
  );
}

/**
 * Stage 4 canonical delivery boundary.
 *
 * This is intentionally fail-closed: it never falls back to the legacy
 * questionBankStage4.js source. Stage 4 must remain unreleased until every
 * Activity has a complete calibrated delivery set.
 */
export function getStage4CanonicalQuestions(activityId) {
  const questions = questionsForActivity(activityId);
  if (questions.length !== REQUIRED_QUESTIONS_PER_ACTIVITY) {
    throw new Error(
      `Stage 4 canonical delivery is not ready for ${activityId}: expected ${REQUIRED_QUESTIONS_PER_ACTIVITY} questions, found ${questions.length}.`
    );
  }
  return questions;
}

export function getStage4CanonicalDeliveryStatus(activityIds) {
  const ids = Array.isArray(activityIds) ? activityIds : [];
  const details = ids.map((activityId) => ({
    activityId,
    questionCount: questionsForActivity(activityId).length,
    ready: questionsForActivity(activityId).length === REQUIRED_QUESTIONS_PER_ACTIVITY,
  }));

  return {
    requiredQuestionsPerActivity: REQUIRED_QUESTIONS_PER_ACTIVITY,
    activityCount: details.length,
    ready: details.length > 0 && details.every((item) => item.ready),
    details,
  };
}
