import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { getActivityById } from "../../../Data/Reasoning/activities";
import { STAGE1_MODULES } from "../../../Data/Reasoning/stage1Modules";
import { STAGE2_MODULES } from "../../../Data/Reasoning/stage2Modules";
import { STAGE3_MODULES } from "../../../Data/Reasoning/stage3Modules";
import { STAGE5_MODULES } from "../../../Data/Reasoning/stage5Modules";
import { STAGE6_MODULES } from "../../../Data/Reasoning/stage6Modules";
import { getStage4ActivityById } from "../../../Data/Reasoning/stage4Activities";
import { getStage5ActivityById } from "../../../Data/Reasoning/stage5Activities";
import { getStage6ActivityById } from "../../../Data/Reasoning/stage6Activities";
import { getQuestionBank, getDefaultTimeSeconds } from "../../../Data/Reasoning/questionBank";
import { getStage1ExtensionQuestionsForActivity } from "../../../Data/Reasoning/questionBankStage1Extensions";
import { getStage2QuestionsForActivity } from "../../../Data/Reasoning/questionBankStage2";
import { getStage3QuestionsForActivity } from "../../../Data/Reasoning/questionBankStage3";
import { getStage4QuestionsForActivity } from "../../../Data/Reasoning/questionBankStage4";
import { getStage5QuestionsForActivity } from "../../../Data/Reasoning/questionBankStage5";
import { getStage6QuestionsForActivity } from "../../../Data/Reasoning/questionBankStage6";
import { completeReasoningActivity } from "../../../utils/reasoningProgress";

const stageNumber=(stageId)=>Number(String(stageId||"").replace("S",""))||1;
const findModuleId=(modules,activityId)=>Object.values(modules||{}).flat().find(m=>m.activityIds?.includes(activityId))?.id||null;
const uniqueQuestions=(items)=>items.filter((q,i,a)=>q?.id&&a.findIndex(x=>x?.id===q.id)===i);

export default function ReasoningActivity(){
 const router=useRouter();
 const {user,isAuthenticated}=useSelector((state)=>state.auth);
 const [currentIndex,setCurrentIndex]=useState(0),[answers,setAnswers]=useState({}),[submitted,setSubmitted]=useState({}),[expired,setExpired]=useState({}),[remaining,setRemaining]=useState(0),[completed,setCompleted]=useState(false);
 const activity=useMemo(()=>{const id=router.query.activityId;return getActivityById(id)||getStage4ActivityById(id)||getStage5ActivityById(id)||getStage6ActivityById(id)},[router.query.activityId]);
 const stage=stageNumber(activity?.stageId);
 const questions=useMemo(()=>{
  if(!activity)return[];
  if(stage===4)return uniqueQuestions(getStage4QuestionsForActivity(activity.id));
  if(stage===5)return uniqueQuestions(getStage5QuestionsForActivity(activity.id));
  if(stage===6)return uniqueQuestions(getStage6QuestionsForActivity(activity.id));
  const bankQuestions=stage===1?getQuestionBank({activityId:activity.id}):stage===2?getStage2QuestionsForActivity(activity.id):getStage3QuestionsForActivity(activity.id);
  const extensionQuestions=stage===1?getStage1ExtensionQuestionsForActivity(activity.id):[];
  return uniqueQuestions([...bankQuestions,...extensionQuestions]);
 },[activity,stage]);
 const moduleId=useMemo(()=>{if(!activity)return null;if(activity.moduleId)return activity.moduleId;if(stage===1)return findModuleId(STAGE1_MODULES,activity.id);if(stage===2)return findModuleId(STAGE2_MODULES,activity.id);if(stage===3)return findModuleId(STAGE3_MODULES,activity.id);if(stage===5)return findModuleId(STAGE5_MODULES,activity.id);if(stage===6)return findModuleId(STAGE6_MODULES,activity.id);return null},[activity,stage]);
 const trackName=activity?.track==="quantitative"?"Quantitative":"Verbal";
 const stageHref=activity?`/Reasoning/${trackName}/Dashboard/Stage${stage}`:"/Reasoning";
 const moduleHref=moduleId?`/Reasoning/${trackName}/Dashboard/Stage${stage}/${moduleId}`:stageHref;
 const question=questions[currentIndex];
 const isAnswered=!!question&&Object.prototype.hasOwnProperty.call(submitted,question.id),isExpired=!!question&&Boolean(expired[question.id]);
 const selected=question?answers[question.id]||"":"";
 const timeLimit=question?(question.timePerQuestion??getDefaultTimeSeconds({levelId:question.levelId,difficulty:question.difficulty,questionType:question.questionType})):0;
 const handledCount=new Set([...Object.keys(submitted),...Object.keys(expired)]).size;
 useEffect(()=>{if(router.isReady&&!isAuthenticated)router.replace({pathname:"/Auth",query:{redirect:router.asPath}})},[router.isReady,isAuthenticated,router]);
 useEffect(()=>{if(currentIndex>=questions.length&&questions.length>0)setCurrentIndex(questions.length-1)},[currentIndex,questions.length]);
 useEffect(()=>{if(!question||isAnswered||isExpired||completed)return;setRemaining(timeLimit);const timer=window.setInterval(()=>setRemaining(value=>{if(value<=1){window.clearInterval(timer);setExpired(current=>{const next={...current,[question.id]:true};if(currentIndex===questions.length-1&&!completed){const finalScore=Math.round((questions.reduce((n,q)=>n+(submitted[q.id]===q.answer?1:0),0)/questions.length)*100);completeReasoningActivity(user.userId,activity.track,activity.id,finalScore);setCompleted(true)}return next});if(currentIndex<questions.length-1)setCurrentIndex(index=>index+1);return 0}return value-1}),1000);return()=>window.clearInterval(timer)},[question?.id,timeLimit,isAnswered,isExpired,currentIndex,questions.length,completed,user?.userId,activity?.id,activity?.track,submitted]);
 if(!router.isReady||!isAuthenticated||!user?.userId)return null;
 if(!activity)return <main style={{padding:40}}><h1>Activity not found.</h1><p>This activity link is not valid.</p><Link href="/Reasoning">Back to Reasoning</Link></main>;
 if(!questions.length)return <main style={{padding:40}}><h1>Activity content is not available.</h1><p>This activity is not correctly connected to its question bank.</p><Link href={stageHref}>Back to Stage</Link></main>;
 const answeredCount=Object.keys(submitted).length;
 const score=questions.length?Math.round((questions.reduce((n,q)=>n+(submitted[q.id]===q.answer?1:0),0)/questions.length)*100):0;
 function choose(option){if(!isAnswered&&!isExpired)setAnswers(a=>({...a,[question.id]:option}))}
 function submit(){if(selected&&!isAnswered&&!isExpired)setSubmitted(a=>({...a,[question.id]:selected}))}
 function finish(){if(handledCount<questions.length||completed)return;const finalScore=Math.round((questions.reduce((n,q)=>n+(submitted[q.id]===q.answer?1:0),0)/questions.length)*100);completeReasoningActivity(user.userId,activity.track,activity.id,finalScore);setCompleted(true)}
 return <><Head><title>{activity.title} | Reasoning</title></Head><main style={{minHeight:"80vh",padding:"48px 20px 80px",background:"var(--surface)"}}><div style={{maxWidth:850,margin:"0 auto"}}><Link href={moduleHref} style={{color:"var(--muted)",textDecoration:"none",fontWeight:600}}>← Back to {moduleId?"Module":`Stage ${stage}`}</Link><div style={{marginTop:32}}><div style={{color:"var(--blue)",fontWeight:800,textTransform:"uppercase",letterSpacing:".08em",fontSize:13}}>{activity.half} · Level {activity.levelId?.replace("L","")} · Stage {stage}</div><h1 style={{fontSize:"clamp(34px,5vw,52px)",margin:"12px 0"}}>{activity.title}</h1><p style={{color:"var(--muted)",lineHeight:1.7,fontSize:18}}>{activity.description}</p></div>{!completed?<section style={{marginTop:30,padding:28,borderRadius:18,background:"var(--card)",border:"1px solid var(--border)"}}><div style={{display:"flex",justifyContent:"space-between",gap:16,flexWrap:"wrap",color:"var(--muted)",fontSize:14,fontWeight:700}}><span>Question {currentIndex+1} of {questions.length}</span><span>{answeredCount} answered · {questions.length-handledCount} remaining</span><span>Score: {score}%</span></div><div style={{height:8,background:"var(--border)",borderRadius:99,marginTop:14,overflow:"hidden"}}><div style={{width:`${Math.round((handledCount/questions.length)*100)}%`,height:"100%",background:"var(--blue)"}}/></div><div style={{marginTop:18,padding:"10px 14px",borderRadius:10,background:"rgba(0,59,147,.07)",fontWeight:800}}>{isExpired?`Time expired. The answer is ${question.answer}.`:isAnswered?"Answer recorded":`Time left: ${remaining}s`}</div><h2 style={{fontSize:24,lineHeight:1.4,marginTop:24}}>{question.question}</h2><div style={{display:"grid",gap:12,marginTop:22}}>{question.options.map(option=><button key={option} type="button" onClick={()=>choose(option)} disabled={isAnswered||isExpired} style={{textAlign:"left",padding:"15px 18px",borderRadius:12,border:`2px solid ${isAnswered&&option===question.answer?"var(--blue)":selected===option?"var(--blue)":"var(--border)"}`,background:selected===option?"rgba(0,59,147,.07)":"var(--card)",color:"var(--text)",fontSize:16}}>{option}</button>)}</div>{!isAnswered&&!isExpired&&<button type="button" disabled={!selected} onClick={submit} style={{marginTop:24,padding:"13px 20px",border:0,borderRadius:10,background:"var(--blue)",color:"#fff",fontWeight:800,opacity:selected?1:.55}}>Check answer</button>}{(isAnswered||isExpired)&&<div style={{marginTop:22,padding:18,borderRadius:12,background:"rgba(0,59,147,.07)"}}><strong>{isExpired?`Time expired. The answer is ${question.answer}.`:selected===question.answer?"Correct.":`Not quite. The answer is ${question.answer}.`}</strong><p style={{marginBottom:0,lineHeight:1.6}}>{question.explanation}</p></div>}<div style={{display:"flex",justifyContent:"space-between",gap:12,marginTop:28}}><button type="button" onClick={()=>currentIndex>0&&setCurrentIndex(i=>i-1)} disabled={currentIndex===0} style={{padding:"12px 18px",borderRadius:10,border:"1px solid var(--border)",background:"var(--card)",color:"var(--text)"}}>Previous</button>{currentIndex<questions.length-1?<button type="button" onClick={()=>setCurrentIndex(i=>i+1)} disabled={!isAnswered&&!isExpired} style={{padding:"12px 18px",border:0,borderRadius:10,background:"var(--blue)",color:"#fff",fontWeight:800,opacity:(!isAnswered&&!isExpired)?.5:1}}>Next</button>:<button type="button" onClick={finish} disabled={handledCount<questions.length} style={{padding:"12px 18px",border:0,borderRadius:10,background:"var(--blue)",color:"#fff",fontWeight:800,opacity:handledCount<questions.length?0.5:1}}>Complete activity</button>}</div></section>:<section style={{marginTop:30,padding:32,borderRadius:18,background:"var(--card)",border:"1px solid var(--border)",textAlign:"center"}}><div style={{color:"var(--blue)",fontWeight:800,textTransform:"uppercase",letterSpacing:".08em",fontSize:13}}>Activity complete</div><h2 style={{fontSize:34,margin:"10px 0"}}>Score: {score}%</h2><p style={{color:"var(--muted)",lineHeight:1.6}}>Your {trackName} activity has been recorded in Reasoning progress.</p><div style={{display:"flex",justifyContent:"center",gap:12,flexWrap:"wrap",marginTop:18}}><Link href={moduleHref} style={{padding:"12px 18px",borderRadius:10,background:"var(--blue)",color:"#fff",textDecoration:"none",fontWeight:800}}>Back to Module</Link><Link href={stageHref} style={{padding:"12px 18px",borderRadius:10,border:"1px solid var(--border)",color:"var(--text)",textDecoration:"none",fontWeight:800}}>Back to Stage</Link></div></section>}</div></main></>;
}
