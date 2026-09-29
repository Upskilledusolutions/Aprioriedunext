const fs=require("fs");const path=require("path");const {spawnSync}=require("child_process");const root=path.join(__dirname,"..");const fail=[];const exists=p=>fs.existsSync(path.join(root,p));const read=p=>fs.readFileSync(path.join(root,p),"utf8");
const required=["src/components/Reasoning/ReasoningStageViews.js","src/Data/Reasoning/curriculum.js","src/Data/Reasoning/canonicalQuestionSchema.js","scripts/syncReasoningQuestionBanks.js","scripts/testReasoningQuestionBankSync.js","scripts/checkReasoningQuestionBankDrift.js","scripts/testReasoningCanonicalRoundTrip.js","src/Data/Reasoning/questionBank.js","src/Data/Reasoning/questionBankStage1Extensions.js","src/Data/Reasoning/questionBankStage2.js","src/Data/Reasoning/reasoningOptionQuality.js","src/Data/Reasoning/stage1QuestionCalibration.js","src/Data/Reasoning/stage2QuestionCalibration.js","src/Data/Reasoning/stage2QuestionExpansion.js","src/Data/Reasoning/stage2ElevatedComputationBank.js","src/Data/Reasoning/activities.js","src/Data/Reasoning/stage2Modules.js","src/pages/Reasoning/Quantitative/Dashboard/Stage2/index.js","src/pages/Reasoning/Quantitative/Dashboard/Stage2/[moduleId].js","src/pages/Reasoning/Verbal/Dashboard/Stage2/index.js","src/pages/Reasoning/Verbal/Dashboard/Stage2/[moduleId].js"];required.forEach(p=>{if(!exists(p))fail.push(`Missing required Reasoning file: ${p}`)});
function checkSyntax(p){const r=spawnSync(process.execPath,["--check",path.join(root,p)],{encoding:"utf8"});if(r.status!==0)fail.push(`JavaScript syntax error in ${p}: ${(r.stderr||r.stdout||"unknown error").replace(/\s+/g," ").trim()}`)}
for(const p of required.filter(p=>/\.js$/.test(p)&&p!=="src/components/Reasoning/ReasoningStageViews.js"&&!p.startsWith("src/pages/Reasoning/")))if(exists(p))checkSyntax(p);
function resolveImport(fromFile,imp){const base=imp.startsWith("@/")?path.join(root,"src",imp.slice(2)):path.resolve(path.dirname(fromFile),imp);return [base,`${base}.js`,`${base}.jsx`,`${base}.json`,path.join(base,"index.js"),path.join(base,"index.jsx")].some(fs.existsSync)}
function scanImports(dir){if(!exists(dir))return;for(const name of fs.readdirSync(path.join(root,dir))){const rel=path.join(dir,name),full=path.join(root,rel);if(fs.statSync(full).isDirectory())scanImports(rel);else if(/\.(js|jsx)$/.test(name)){const text=read(rel),re=/\bfrom\s*["']([^"']+)["']/g;let m;while((m=re.exec(text)))if((m[1].startsWith(".")||m[1].startsWith("@/"))&&!resolveImport(full,m[1]))fail.push(`Unresolved import: ${rel} -> ${m[1]}`)}}}["src/pages/Reasoning/Quantitative/Dashboard/Stage2","src/pages/Reasoning/Verbal/Dashboard/Stage2"].forEach(scanImports);
function clean(source){return source.replace(/^import[^;]+;\s*/gm,"").replace(/\bexport\s+(?=(?:const|function|let|var)\b)/g,"")}
function evaluate(files,names){try{return new Function(files.map(read).map(clean).join("\n")+`\nreturn {${names.map(n=>`${n}:typeof ${n}!=="undefined"?${n}:null`).join(",")}};`)()}catch(e){fail.push(`Reasoning calibration could not be evaluated: ${e.message}`);return{}}}
const banks=[["src/Data/Reasoning/questionBank.js","REASONING_QUESTION_BANK"],["src/Data/Reasoning/questionBankStage1Extensions.js","STAGE1_EXTENSION_QUESTIONS"],["src/Data/Reasoning/questionBankStage2.js","STAGE2_QUESTIONS"]];let all=[];for(const [p,n] of banks){if(!exists(p))continue;const d=evaluate([p],[n])[n];if(!Array.isArray(d)||!d.length)fail.push(`Question bank is empty or unavailable: ${p}`);else all.push(...d.map(q=>({...q,__file:p})))}const ids=all.map(q=>q.id).filter(Boolean);if(new Set(ids).size!==ids.length)fail.push("Duplicate Reasoning question IDs detected across audited banks.");for(const q of all)if(!q.id||!q.activityId||!q.question||!Array.isArray(q.options)||q.options.length!==4||new Set(q.options).size!==4||!q.options.includes(q.answer))fail.push(`Malformed question record: ${q.id||"unknown"}`);
function evaluateWithDependencies(file,names,dependencies){try{const keys=Object.keys(dependencies);const returnSource="\nreturn {"+names.map(n=>n+":typeof "+n+"!==\"undefined\"?"+n+":null").join(",")+"};";return new Function(...keys,clean(read(file))+returnSource)(...keys.map(k=>dependencies[k]));}catch(e){fail.push("Reasoning calibration could not be evaluated: "+e.message);return {};}}
const stage2Activities=evaluate(["src/Data/Reasoning/activities.js"],["REASONING_ACTIVITIES"]).REASONING_ACTIVITIES||[];
const stage2Modules=evaluate(["src/Data/Reasoning/stage2Modules.js"],["STAGE2_MODULES"]).STAGE2_MODULES||{};
const stage2Acts=stage2Activities.filter(a=>a.levelId==="L1"&&a.stageId==="S2");
const stage2Expanded=evaluate(["src/Data/Reasoning/stage2QuestionExpansion.js"],["getStage2ExpandedQuestionsForActivity"]).getStage2ExpandedQuestionsForActivity;
const stage2Elevated=evaluate(["src/Data/Reasoning/stage2ElevatedComputationBank.js"],["getStage2ElevatedComputationQuestions"]).getStage2ElevatedComputationQuestions;
const stage2Questions=evaluate(["src/Data/Reasoning/questionBankStage2.js"],["STAGE2_QUESTIONS"]).STAGE2_QUESTIONS;
const stage2Options=evaluate(["src/Data/Reasoning/reasoningOptionQuality.js"],["prepareReasoningQuestionSet"]).prepareReasoningQuestionSet;
const stage2Calibrated=evaluateWithDependencies("src/Data/Reasoning/stage2QuestionCalibration.js",["getStage2CalibratedQuestions"],{STAGE2_QUESTIONS:stage2Questions,getStage2ExpandedQuestionsForActivity:stage2Expanded,getStage2ElevatedComputationQuestions:stage2Elevated,prepareReasoningQuestionSet:stage2Options}).getStage2CalibratedQuestions;
for(const track of ["quantitative","verbal"]){
 const acts=stage2Acts.filter(a=>a.track===track), explore=acts.filter(a=>String(a.half||"").toLowerCase()==="explore"), extend=acts.filter(a=>String(a.half||"").toLowerCase()==="extend");
 if(explore.length!==5||extend.length!==3||acts.length!==8)fail.push("Stage 2 "+track+": expected the approved 5 Explore + 3 Extend + 8 total inventory; found "+explore.length+"/"+extend.length+"/"+acts.length+".");
 const mods=stage2Modules[track]||[], refs=mods.flatMap(m=>m.activityIds||[]);
 if(mods.length!==5||refs.length!==8||new Set(refs).size!==8||refs.some(id=>!acts.some(a=>a.id===id)))fail.push("Stage 2 "+track+": existing five-module structure must map exactly the 8 approved track activities.");
 for(const a of acts){
  let qs=[];try{qs=stage2Calibrated?stage2Calibrated(a.id):[];}catch(e){fail.push("Stage 2 calibration failed for "+a.id+": "+e.message);}
  if(qs.length!==10)fail.push("Stage 2 "+a.id+": expected exactly 10 delivered questions, found "+qs.length+".");
  const ids=qs.map(q=>q.id);if(new Set(ids).size!==ids.length)fail.push("Stage 2 "+a.id+": duplicate delivered question IDs.");
  for(const q of qs){
   const qTrack=q.track||a.track;const qStage=q.stageId||"S2";const qHalf=String(q.half||"").toLowerCase();const expectedHalf=String(a.half||"").toLowerCase();if(q.levelId!=="L1"||qStage!=="S2"||q.activityId!==a.id||qTrack!==a.track||(qHalf&&qHalf.slice(0,3)!==expectedHalf.slice(0,3)))fail.push("Stage 2 mapping mismatch: "+(q.id||"unknown")+" -> "+a.id+".");
   if(!q.contentMode||!q.contentModeLabel||!q.contentModeDescription)fail.push("Stage 2 "+(q.id||"unknown")+": missing content-mode metadata.");
   if(!Array.isArray(q.options)||q.options.length!==4||new Set(q.options).size!==4||!q.options.includes(q.answer))fail.push("Stage 2 "+(q.id||"unknown")+": invalid options/answer.");
   if(q.optionQuality?.lengthCueDetected)fail.push("Stage 2 "+q.id+": answer-length cue remains.");
  }
 }
}
function answerLengthAudit(questions, label) {
  const uniqueLongest = questions.filter(function (question) {
    const lengths = (question.options || []).map(function (option) {
      return String(option || "").trim().replace(/[.!?]+$/, "").length;
    });
    if (!lengths.length) return false;
    const maxLength = Math.max.apply(Math, lengths);
    const longestCount = lengths.filter(function (length) { return length === maxLength; }).length;
    const answerLength = String(question.answer || "").trim().replace(/[.!?]+$/, "").length;
    return answerLength === maxLength && longestCount === 1;
  }).length;
  const rate = questions.length ? (uniqueLongest / questions.length) * 100 : 0;
  if (rate >= 50) {
    fail("Stage 2 " + label + " answer-length audit failed: " + uniqueLongest + "/" + questions.length + " (" + rate.toFixed(1) + "%) unique-longest correct answers; required hard ceiling is <50%.");
  } else if (rate >= 30) {
    console.warn("Stage 2 " + label + " answer-length audit passed the hard ceiling but is above the preferred <30% benchmark: " + uniqueLongest + "/" + questions.length + " (" + rate.toFixed(1) + "%). Human review required.");
  } else {
    console.log("Stage 2 " + label + " answer-length audit passed preferred benchmark: " + uniqueLongest + "/" + questions.length + " (" + rate.toFixed(1) + "%).");
  }
  return { count: uniqueLongest, total: questions.length, rate: rate };
}

if(stage2Acts.length!==16)fail.push("Stage 2 total activity count invalid: expected the approved 16 activities across both tracks, found "+stage2Acts.length+".");
if (stage2Calibrated) {
  const deliveredStage2 = [];
  for (const activity of stage2Acts) {
    try {
      deliveredStage2.push(...stage2Calibrated(activity.id));
    } catch (error) {
      // The per-Activity validation above already records the calibration failure.
    }
  }
  answerLengthAudit(deliveredStage2, "overall");
  answerLengthAudit(deliveredStage2.filter(function (question) { return question.track === "quantitative"; }), "Quantitative");
  answerLengthAudit(deliveredStage2.filter(function (question) { return question.track === "verbal"; }), "Verbal");
}

if(!stage2Calibrated)fail.push("Stage 2 calibration runtime could not be constructed.");
const stage2DashboardPages=[
["src/pages/Reasoning/Quantitative/Dashboard/Stage2/index.js","/Reasoning/Quantitative/Dashboard/Stage2"],
["src/pages/Reasoning/Verbal/Dashboard/Stage2/index.js","/Reasoning/Verbal/Dashboard/Stage2"]];
const stage2ModulePages=[
["src/pages/Reasoning/Quantitative/Dashboard/Stage2/[moduleId].js","/Reasoning/Quantitative/Dashboard/Stage2"],
["src/pages/Reasoning/Verbal/Dashboard/Stage2/[moduleId].js","/Reasoning/Verbal/Dashboard/Stage2"]];
if(!exists("src/components/Reasoning/ReasoningStageViews.js"))fail.push("Missing reusable Reasoning Stage 1-style template component.");
const templateSource=exists("src/components/Reasoning/ReasoningStageViews.js")?read("src/components/Reasoning/ReasoningStageViews.js"):"";
if(templateSource&&!templateSource.includes("export function ReasoningStageDashboard"))fail.push("Reusable Stage dashboard template is missing.");
if(templateSource&&!templateSource.includes("export function ReasoningModulePage"))fail.push("Reusable Module page template is missing.");
if(templateSource&&!templateSource.includes("Explore first")||templateSource&&!templateSource.includes("Then Extend"))fail.push("Reusable Stage template must preserve Stage 1 Explore-then-Extend presentation.");
for(const [file,route] of stage2DashboardPages){if(!exists(file))fail.push("Missing Stage 2 dashboard: "+file);else{const source=read(file);if(!source.includes("ReasoningStageDashboard"))fail.push("Stage 2 dashboard must use the Stage 1-style shared template: "+file);if(!source.includes('stagePath="'+route+'"'))fail.push("Stage 2 dashboard route mismatch: "+file+" -> "+route);}}
for(const [file,route] of stage2ModulePages){if(!exists(file))fail.push("Missing Stage 2 module page: "+file);else{const source=read(file);if(!source.includes("ReasoningModulePage"))fail.push("Stage 2 module page must use the Stage 1-style shared template: "+file);if(!source.includes('stagePath="'+route+'"'))fail.push("Stage 2 module route mismatch: "+file+" -> "+route);}}
for(const file of [...stage2DashboardPages,...stage2ModulePages].map(x=>x[0]).concat("src/components/Reasoning/ReasoningStageViews.js")){if(!exists(file))continue;const source=read(file),re=/\bfrom\s*["']([^"']+)["']/g;let m;while((m=re.exec(source)))if((m[1].startsWith(".")||m[1].startsWith("@/"))&&!resolveImport(path.join(root,file),m[1]))fail.push("Unresolved Stage 2 import: "+file+" -> "+m[1]);}
if(fail.length){console.error("Reasoning build validation failed:\n- "+fail.join("\n- "));process.exit(1)}console.log("Reasoning build validation passed: core Reasoning files, Stage 2 source structure, isolated calibration, question delivery, imports and Stage 1-style Stage 2 template routing are valid.");