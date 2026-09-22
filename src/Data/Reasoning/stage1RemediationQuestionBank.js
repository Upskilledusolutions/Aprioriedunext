import { LEVEL1_STAGE1_EXPANSION_QUESTIONS } from "./stage1QuestionExpansion";
import { LEVEL1_STAGE1_MISSING_REPLACEMENTS } from "./stage1MissingReplacements";
import { STAGE1_ADDITIONAL_QUANT_QUESTIONS } from "./stage1AdditionalQuantQuestions";
import { STAGE1_VERBAL_REMEDIATION_QUESTIONS } from "./stage1VerbalRemediation";
import { getStage1ElevatedComputationQuestionsForActivity } from "./stage1ElevatedComputationBank";
import { prepareStage1VerbalQuestion } from "./stage1OptionQuality";

const unique=(items)=>items.filter((q,i,a)=>q?.id&&a.findIndex(x=>x.id===q.id)===i);
const computationActivities=new Set(["Q-L1-S1-EXP-number-sense","Q-L1-S1-EXP-number-patterns","Q-L1-S1-EXP-arithmetic-reasoning","Q-L1-S1-EXP-shape-measurement","Q-L1-S1-EXP-quantitative-relationships","Q-L1-S1-EXT-number-patterns","Q-L1-S1-EXT-multi-step-reasoning"]);
const repair=(q)=>{if(q.id==="Q-L1-Q-S1-ELEV-NPE-002")return{...q,options:["59","67","77","87"],answer:"77",explanation:"Starting at 2 and applying ×2+3 gives 2, 7, 17, 37, 77."};if(q.id==="Q-L1-Q-S1-ELEV-NPE-003")return{...q,options:["62","64","65","66"],answer:"65",explanation:"The differences are +5, +8, +11 and +14, so the next difference is +17. Therefore 48 + 17 = 65."};if(q.id==="Q-L1-Q-S1-ELEV-MS-008")return{...q,options:["56 m²","61 m²","62 m²","70 m²"],answer:"61 m²",explanation:"The rectangle has area 20×14=280 m². Removing the 6×6 m² square leaves 244 m², and 244÷4=61 m² per plot."};if(q.id==="Q-L1-Q-S1-ELEV-MS-009")return{...q,question:"A school buys 8 boxes of 24 pencils, gives 72 pencils away, then distributes the rest equally among 6 classes. How many pencils per class?",options:["18","20","21","24"],answer:"20",explanation:"8×24=192; after giving away 72, 120 remain; 120÷6=20."};return q;};
const quant=(activityId)=>computationActivities.has(activityId)?getStage1ElevatedComputationQuestionsForActivity(activityId).map(repair):unique([...STAGE1_ADDITIONAL_QUANT_QUESTIONS.filter(q=>q.activityId===activityId),...LEVEL1_STAGE1_MISSING_REPLACEMENTS.filter(q=>q.activityId===activityId),...LEVEL1_STAGE1_EXPANSION_QUESTIONS.filter(q=>q.activityId===activityId)]).slice(0,10);
const verbal=(activityId)=>STAGE1_VERBAL_REMEDIATION_QUESTIONS.filter(q=>q.activityId===activityId).slice(0,10).map(prepareStage1VerbalQuestion);
export function getStage1RemediationQuestions(activityId,track){const questions=track==="verbal"?verbal(activityId):quant(activityId);return questions.length===10?questions:[];}
export function getStage1RemediationQuestionCount(activityId,track){return getStage1RemediationQuestions(activityId,track).length;}
