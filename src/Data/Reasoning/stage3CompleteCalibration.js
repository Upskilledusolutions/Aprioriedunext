import { getStage3CalibratedQuestions as getExistingStage3CalibratedQuestions } from "./stage3QuestionCalibration";
import { getStage3MissingCalibratedQuestions } from "./stage3MissingCalibration";

export function getStage3CalibratedQuestions(activityId){
  const existing=getExistingStage3CalibratedQuestions(activityId)||[];
  if(existing.length>=10)return existing;
  const missing=getStage3MissingCalibratedQuestions(activityId)||[];
  return missing.length>=10?missing:existing;
}
