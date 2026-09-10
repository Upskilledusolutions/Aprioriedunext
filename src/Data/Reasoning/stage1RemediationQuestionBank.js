import { LEVEL1_STAGE1_EXPANSION_QUESTIONS } from "./stage1QuestionExpansion";
import { LEVEL1_STAGE1_MISSING_REPLACEMENTS } from "./stage1MissingReplacements";
import { STAGE1_ADDITIONAL_QUANT_QUESTIONS } from "./stage1AdditionalQuantQuestions";
import { STAGE1_VERBAL_REMEDIATION_QUESTIONS } from "./stage1VerbalRemediation";

const unique=(items)=>items.filter((q,i,a)=>q?.id&&a.findIndex(x=>x.id===q.id)===i);
const quant=(activityId)=>unique([
  ...STAGE1_ADDITIONAL_QUANT_QUESTIONS.filter(q=>q.activityId===activityId),
  ...LEVEL1_STAGE1_MISSING_REPLACEMENTS.filter(q=>q.activityId===activityId),
  ...LEVEL1_STAGE1_EXPANSION_QUESTIONS.filter(q=>q.activityId===activityId),
]).slice(0,10);

const verbal=(activityId)=>STAGE1_VERBAL_REMEDIATION_QUESTIONS.filter(q=>q.activityId===activityId).slice(0,10);

export function getStage1RemediationQuestions(activityId,track){
  const questions=track==="verbal"?verbal(activityId):quant(activityId);
  return questions.length===10?questions:[];
}

export function getStage1RemediationQuestionCount(activityId,track){
  return getStage1RemediationQuestions(activityId,track).length;
}
