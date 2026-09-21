const fs=require("fs");const path=require("path");const {spawnSync}=require("child_process");const root=path.join(__dirname,"..");const fail=[];const exists=p=>fs.existsSync(path.join(root,p));const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const required=["src/Data/Reasoning/curriculum.js","src/Data/Reasoning/questionBank.js","src/Data/Reasoning/questionBankStage1Extensions.js","src/Data/Reasoning/questionBankStage2.js","src/Data/Reasoning/questionBankStage3.js","src/Data/Reasoning/stage3QuestionCalibration.js","src/Data/Reasoning/stage3MissingCalibration.js","src/Data/Reasoning/stage3CompleteCalibration.js","src/Data/Reasoning/reasoningOptionQuality.js","src/Data/Reasoning/stage3Modules.js","src/Data/Reasoning/questionBankStage4.js","src/Data/Reasoning/questionBankStage5.js","src/Data/Reasoning/questionBankStage6.js","src/Data/Reasoning/level2Stage1Activities.js","src/Data/Reasoning/level2Stage1Modules.js","src/Data/Reasoning/questionBankLevel2Stage1.js","src/Data/Reasoning/stage1QuestionCalibration.js","src/Data/Reasoning/stage2QuestionCalibration.js","src/Data/Reasoning/stage4Modules.js","src/Data/Reasoning/stage4Activities.js","src/Data/Reasoning/stage5Modules.js","src/Data/Reasoning/stage5Activities.js","src/Data/Reasoning/stage6Modules.js","src/Data/Reasoning/stage6Activities.js"];
required.forEach(p=>{if(!exists(p))fail.push(`Missing required Reasoning file: ${p}`)});
function checkSyntax(p){const r=spawnSync(process.execPath,["--check",path.join(root,p)],{encoding:"utf8"});if(r.status!==0)fail.push(`JavaScript syntax error in ${p}: ${(r.stderr||r.stdout||"unknown error").replace(/\s+/g," ").trim()}`)}
for(const p of required.filter(p=>/\.js$/.test(p)))if(exists(p))checkSyntax(p);
function resolveImport(fromFile,imp){const base=imp.startsWith("@/")?path.join(root,"src",imp.slice(2)):path.resolve(path.dirname(fromFile),imp);return [base,`${base}.js`,`${base}.jsx`,`${base}.json`,path.join(base,"index.js"),path.join(base,"index.jsx")].some(fs.existsSync)}
function scanImports(dir){if(!exists(dir))return;for(const name of fs.readdirSync(path.join(root,dir))){const rel=path.join(dir,name),full=path.join(root,rel);if(fs.statSync(full).isDirectory())scanImports(rel);else if(/\.(js|jsx)$/.test(name)){const text=read(rel),re=/\bfrom\s*["']([^"']+)["']/g;let m;while((m=re.exec(text)))if((m[1].startsWith(".")||m[1].startsWith("@/"))&&!resolveImport(full,m[1]))fail.push(`Unresolved import: ${rel} -> ${m[1]}`)}}}scanImports("src/pages/Reasoning");
function clean(source){return source.replace(/^import[^;]+;\s*/gm,"").replace(/\bexport\s+(?=(?:const|function|let|var)\b)/g,"")}
function conspicuousAnswerLengthCue(question){
  if(!question||!Array.isArray(question.options)||question.options.length<2)return false;
  const strip=(value)=>String(value??"").trim().replace(/[.!?]+$/g,"");
  const lengths=question.options.map((option)=>strip(option).length);
  const answerIndex=question.options.findIndex((option)=>strip(option)===strip(question.answer));
  if(answerIndex<0)return true;
  const answerLength=lengths[answerIndex];
  const max=Math.max(...lengths);
  const longestCount=lengths.filter((length)=>length===max).length;
  const others=lengths.filter((_,index)=>index!==answerIndex);
  const secondLongest=Math.max(...others);
  const min=Math.min(...lengths);
  const shortestCount=lengths.filter((length)=>length===min).length;
  const secondShortest=Math.min(...others);
  const longestCue=answerLength===max&&longestCount===1&&(answerLength-secondLongest>=25)&&answerLength>=secondLongest*2.5;
  const shortestCue=answerLength===min&&shortestCount===1&&(secondShortest-answerLength>=25)&&secondShortest>=answerLength*2.5;
  return longestCue||shortestCue;
}

function validateVerbalDelivery(label,questions){
  if(!Array.isArray(questions)){fail.push(label+": delivery could not be evaluated.");return;}
  if(questions.length!==10)fail.push(label+": expected exactly 10 delivered questions, found "+questions.length+".");
  const ids=questions.map((question)=>question&&question.id).filter(Boolean);
  if(new Set(ids).size!==ids.length)fail.push(label+": duplicate delivered question IDs.");
  questions.forEach((question)=>{
    if(question?.track!=="verbal")fail.push(label+" "+(question?.id||"unknown")+": incorrect track metadata.");
    if(!Array.isArray(question?.options)||question.options.length!==4||new Set(question.options).size!==4||!question.options.includes(question.answer)){
      fail.push(label+" "+(question?.id||"unknown")+": expected four unique options with a valid answer.");
    }
    if(!["computation","computationReasoning","textReasoning"].includes(question?.contentMode)||!question?.contentModeLabel){
      fail.push(label+" "+(question?.id||"unknown")+": invalid content-mode metadata.");
    }
    if(conspicuousAnswerLengthCue(question)){fail.push(label+" "+(question?.id||"unknown")+": conspicuous correct-answer length cue remains.");}
  });
}
function evaluate(files,names){try{return new Function(files.map(read).map(clean).join("\n")+`\nreturn {${names.map(n=>`${n}:typeof ${n}!=="undefined"?${n}:null`).join(",")}};`)()}catch(e){fail.push(`Reasoning calibration could not be evaluated: ${e.message}`);return{}}}

// Validate the actual Level 1 Verbal delivery paths for Stages 1–2 before deployment.
const s1Runtime=evaluate([
  "src/Data/Reasoning/stage1OptionQuality.js",
  "src/Data/Reasoning/stage1VerbalRemediation.js",
  "src/Data/Reasoning/stage1RemediationQuestionBank.js",
],["getStage1RemediationQuestions"]);
if(typeof s1Runtime.getStage1RemediationQuestions!=="function"){
  fail.push("Stage 1 Verbal delivery runtime could not be loaded.");
}else{
  const s1Activities=[
    "V-L1-S1-EXP-main-idea",
    "V-L1-S1-EXP-vocabulary-context",
    "V-L1-S1-EXP-evidence-and-claims",
    "V-L1-S1-EXP-basic-argument",
    "V-L1-S1-EXP-sequencing",
    "V-L1-S1-EXT-evidence-and-claims",
    "V-L1-S1-EXT-inference",
    "V-L1-S1-EXT-perspectives",
  ];
  s1Activities.forEach((activityId)=>{
    let questions=[];
    try{questions=s1Runtime.getStage1RemediationQuestions(activityId,"verbal")||[];}catch(e){fail.push("Stage 1 Verbal delivery failed for "+activityId+": "+e.message);}
    validateVerbalDelivery("Stage 1 "+activityId,questions);
  });
}

// Stage 2 has two local make() helpers in separate source files. Rename them
// only inside this evaluator so the complete calibrated delivery can run.
const s2ExpansionSource=clean(read("src/Data/Reasoning/stage2QuestionExpansion.js")).replace(/\\bconst make=/,"const makeExpansion=").replace(/\\bmake\\(/g,"makeExpansion(");
const s2ElevatedSource=clean(read("src/Data/Reasoning/stage2ElevatedComputationBank.js")).replace(/\\bconst make=/,"const makeElevated=").replace(/\\bmake\\(/g,"makeElevated(");
let s2DeliveryRuntime=null;
try{
  s2DeliveryRuntime=new Function([
    read("src/Data/Reasoning/reasoningOptionQuality.js"),
    read("src/Data/Reasoning/questionBankStage2.js"),
    s2ExpansionSource,
    s2ElevatedSource,
    read("src/Data/Reasoning/stage2QuestionCalibration.js"),
  ].map(clean).join("\n")+"\nreturn {getStage2CalibratedQuestions};")();
}catch(e){fail.push("Stage 2 Verbal delivery runtime could not be loaded: "+e.message);}
if(s2DeliveryRuntime&&typeof s2DeliveryRuntime.getStage2CalibratedQuestions==="function"){
  const s2Activities=[
    "V-L1-S2-EXP-reading-structure",
    "V-L1-S2-EXP-argument-mapping",
    "V-L1-S2-EXP-assumptions-and-inference",
    "V-L1-S2-EXT-comparing-arguments",
    "V-L1-S2-EXT-evidence-evaluation",
  ];
  s2Activities.forEach((activityId)=>{
    let questions=[];
    try{questions=s2DeliveryRuntime.getStage2CalibratedQuestions(activityId)||[];}catch(e){fail.push("Stage 2 Verbal delivery failed for "+activityId+": "+e.message);}
    validateVerbalDelivery("Stage 2 "+activityId,questions);
  });
}
const banks=[["src/Data/Reasoning/questionBank.js","REASONING_QUESTION_BANK"],["src/Data/Reasoning/questionBankStage1Extensions.js","STAGE1_EXTENSION_QUESTIONS"],["src/Data/Reasoning/questionBankStage2.js","STAGE2_QUESTIONS"],["src/Data/Reasoning/questionBankStage3.js","STAGE3_QUESTIONS"],["src/Data/Reasoning/questionBankStage4.js","questions"],["src/Data/Reasoning/questionBankStage5.js","STAGE5_QUESTION_BANK"],["src/Data/Reasoning/questionBankStage6.js","STAGE6_QUESTION_BANK"],["src/Data/Reasoning/questionBankLevel2Stage1.js","LEVEL2_STAGE1_QUESTION_BANK"]];let all=[];for(const [p,n] of banks){if(!exists(p))continue;const d=evaluate([p],[n])[n];if(!Array.isArray(d)||!d.length)fail.push(`Question bank is empty or unavailable: ${p}`);else all.push(...d.map(q=>({...q,__file:p})))}const ids=all.map(q=>q.id).filter(Boolean);if(new Set(ids).size!==ids.length)fail.push("Duplicate Reasoning question IDs detected across audited banks.");for(const q of all)if(!q.id||!q.activityId||!q.question||!Array.isArray(q.options)||q.options.length!==4||new Set(q.options).size!==4||!q.options.includes(q.answer))fail.push(`Malformed question record: ${q.id||"unknown"}`);
const activityPath="src/Data/Reasoning/activities.js",qualityPath="src/Data/Reasoning/reasoningOptionQuality.js",existingPath="src/Data/Reasoning/stage3QuestionCalibration.js",missingPath="src/Data/Reasoning/stage3MissingCalibration.js";
if([activityPath,qualityPath,existingPath,missingPath].every(exists)){const activities=evaluate([activityPath],["REASONING_ACTIVITIES"]).REASONING_ACTIVITIES||[];const existingRuntime=evaluate([qualityPath,existingPath],["getStage3CalibratedQuestions"]);const missingRuntime=evaluate([qualityPath,missingPath],["getStage3MissingCalibratedQuestions"]);const acts=activities.filter(a=>a?.levelId==="L1"&&a?.stageId==="S3");const quant=acts.filter(a=>a.track==="quantitative"),verbal=acts.filter(a=>a.track==="verbal");if(acts.length!==20)fail.push(`Stage 3 activity structure invalid: expected 20 Level 1 activities, found ${acts.length}.`);if(quant.length!==10||verbal.length!==10)fail.push(`Stage 3 track structure invalid: expected 10 Quantitative and 10 Verbal activities, found ${quant.length} Quantitative and ${verbal.length} Verbal.`);const delivered=[];for(const a of acts){let qs=[];let existing=[];try{existing=existingRuntime.getStage3CalibratedQuestions(a.id)||[]}catch(e){existing=[]}if(existing.length>=10){qs=existing}else{try{qs=missingRuntime.getStage3MissingCalibratedQuestions(a.id)||[]}catch(e){qs=[];fail.push(`Stage 3 fallback calibration failed for ${a.id}: ${e.message}`)}}if(qs.length!==10)fail.push(`Stage 3 ${a.id}: expected exactly 10 delivered questions, found ${qs.length}.`);const ids2=qs.map(q=>q.id);if(new Set(ids2).size!==ids2.length)fail.push(`Stage 3 ${a.id}: duplicate delivered question IDs.`);for(const q of qs){if(q.levelId!=="L1"||q.stageId!=="S3"||q.activityId!==a.id)fail.push(`Stage 3 metadata mismatch: ${q.id||"unknown"} -> ${a.id}`);if(!["computation","computationReasoning","textReasoning"].includes(q.contentMode)||!q.contentModeLabel||!q.contentModeDescription)fail.push(`Stage 3 ${q.id}: invalid content-mode metadata.`);if(!Array.isArray(q.options)||q.options.length!==4||new Set(q.options).size!==4||!q.options.includes(q.answer))fail.push(`Stage 3 ${q.id}: invalid options.`);if(q.optionQuality?.lengthCueDetected)fail.push(`Stage 3 ${q.id}: answer-length cue remains.`)}delivered.push(...qs)}if(delivered.length!==200)fail.push(`Stage 3 delivered question total invalid: expected 200, found ${delivered.length}.`);if(new Set(delivered.map(q=>q.id)).size!==delivered.length)fail.push("Stage 3 delivered question IDs are not globally unique.");const badHalf=acts.filter(a=>!a.id.includes("-EXP-")&&!a.id.includes("-EXT-"));if(badHalf.length)fail.push(`Stage 3 activities missing Explore/Extend convention: ${badHalf.map(a=>a.id).join(", ")}`)}
if(fail.length){console.error("Reasoning build validation failed:\n- "+fail.join("\n- "));process.exit(1)}console.log("Reasoning build validation passed: required files, syntax, imports, question-bank structure, and Level 1 Stages 1–3 Verbal delivery quality are valid.");