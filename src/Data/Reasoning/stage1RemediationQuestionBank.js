import { LEVEL1_STAGE1_EXPANSION_QUESTIONS } from "./stage1QuestionExpansion";
import { LEVEL1_STAGE1_MISSING_REPLACEMENTS } from "./stage1MissingReplacements";
import { STAGE1_ADDITIONAL_QUANT_QUESTIONS } from "./stage1AdditionalQuantQuestions";
import { STAGE1_VERBAL_REMEDIATION_QUESTIONS } from "./stage1VerbalRemediation";
import { getStage1ComputationUpgradeQuestionsForActivity } from "./computationQuestionUpgradeBank";

const unique=(items)=>items.filter((q,i,a)=>q?.id&&a.findIndex(x=>x.id===q.id)===i);
const computationActivities=new Set(["Q-L1-S1-EXP-number-sense","Q-L1-S1-EXP-number-patterns","Q-L1-S1-EXP-arithmetic-reasoning","Q-L1-S1-EXP-shape-measurement","Q-L1-S1-EXP-quantitative-relationships","Q-L1-S1-EXT-number-patterns","Q-L1-S1-EXT-multi-step-reasoning"]);
const repair=(q)=>q.id==="Q-L1-Q-S1-EXP-SHP-C5-007"?{...q,options:["41 cm","46 cm","48 cm","50 cm"],answer:"48 cm",explanation:"The large rectangle has perimeter 40 cm and the attached rectangle has perimeter 14 cm. Subtract the shared 3 cm edge twice: 40 + 14 − 6 = 48 cm."}:q.id==="Q-L1-Q-S1-EXP-NUM-C5-007"?{...q,options:["2","3","4","5"],answer:"3",explanation:"After 3 steps, A is 4 + 6×3 = 22 and B is 10 + 4×3 = 22, so they first match after 3 steps."}:q;
const quant=(activityId)=>computationActivities.has(activityId)?getStage1ComputationUpgradeQuestionsForActivity(activityId).map(repair):unique([...STAGE1_ADDITIONAL_QUANT_QUESTIONS.filter(q=>q.activityId===activityId),...LEVEL1_STAGE1_MISSING_REPLACEMENTS.filter(q=>q.activityId===activityId),...LEVEL1_STAGE1_EXPANSION_QUESTIONS.filter(q=>q.activityId===activityId)]).slice(0,10);
const verbal=(activityId)=>STAGE1_VERBAL_REMEDIATION_QUESTIONS.filter(q=>q.activityId===activityId).slice(0,10);
export function getStage1RemediationQuestions(activityId,track){const questions=track==="verbal"?verbal(activityId):quant(activityId);return questions.length===10?questions:[];}
export function getStage1RemediationQuestionCount(activityId,track){return getStage1RemediationQuestions(activityId,track).length;}
