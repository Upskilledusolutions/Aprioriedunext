import { getStage1RemediationQuestions } from "./stage1RemediationQuestionBank";

export const QUESTION_CONTENT_MODES = {
  computation: { label: "Computation", description: "You will need to calculate or manipulate numerical information." },
  textReasoning: { label: "Text-Based Reasoning", description: "You will reason from written information, clues or concepts rather than primarily calculating." },
  computationReasoning: { label: "Computation + Reasoning", description: "You will interpret a situation and then use calculations to reach and check the answer." },
};

export function getStage1CalibratedQuestions({ track, activityId }) {
  return getStage1RemediationQuestions(activityId, track);
}
