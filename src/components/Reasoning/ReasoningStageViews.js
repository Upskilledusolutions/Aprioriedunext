import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { completeReasoningModule, getStageActivityProgress, readReasoningProgress } from "../../utils/reasoningProgress";

const styles = {
  page:{minHeight:"80vh",padding:"48px 20px 80px",background:"var(--surface)"},
  wrapper:{maxWidth:1150,margin:"0 auto"},
  back:{color:"var(--muted)",textDecoration:"none",fontWeight:700},
  eyebrow:{margin:"28px 0 10px",color:"var(--blue)",fontWeight:800,letterSpacing:".08em",textTransform:"uppercase",fontSize:13},
  title:{margin:0,color:"var(--text)",fontSize:"clamp(34px,5vw,54px)",lineHeight:1.07},
  intro:{maxWidth:760,margin:"14px 0 0",color:"var(--muted)",fontSize:18,lineHeight:1.7},
  progress:{marginTop:30,padding:22,background:"var(--card)",border:"1px solid var(--border)",borderRadius:18},
  progressTop:{display:"flex",justifyContent:"space-between",gap:16,marginBottom:12,color:"var(--text)",fontWeight:800},
  track:{height:9,borderRadius:99,background:"#e7ecf3",overflow:"hidden"},
  fill:{height:"100%",background:"var(--blue)",borderRadius:99},
  grid:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:18,marginTop:24},
  card:{background:"var(--card)",border:"1px solid var(--border)",borderRadius:18,padding:24,boxShadow:"0 10px 30px rgba(0,0,37,.06)"},
  number:{color:"var(--blue)",fontWeight:800,fontSize:13,marginBottom:12},
  cardTitle:{color:"var(--text)",margin:"0 0 9px",fontSize:21},
  text:{color:"var(--muted)",lineHeight:1.6,minHeight:78,margin:"0 0 18px"},
  button:{display:"inline-block",padding:"11px 15px",borderRadius:9,background:"var(--blue)",color:"#fff",textDecoration:"none",fontWeight:800,fontSize:14},
  status:{display:"inline-block",marginBottom:12,fontSize:12,fontWeight:800,color:"var(--blue)",background:"rgba(0,59,147,.08)",borderRadius:99,padding:"6px 10px"},
  activity:{display:"flex",justifyContent:"space-between",gap:16,alignItems:"center",flexWrap:"wrap",padding:16,borderRadius:12,border:"1px solid var(--border)",marginTop:12},
  half:{display:"inline-block",fontSize:11,fontWeight:800,color:"var(--blue)",background:"rgba(0,59,147,.08)",borderRadius:99,padding:"5px 8px",marginRight:8},
  halfText:{color:"var(--muted)",lineHeight:1.6,margin:"6px 0 0"},
  section:{marginTop:28},
};

function moduleProgressKey(levelId, stageNumber, moduleId) {
  return String(levelId) + "-S" + String(stageNumber) + "-" + String(moduleId);
}

export function ReasoningStageDashboard({
  levelId, stageNumber, track, stageName, stageDescription, modules, activities,
  stagePath, trackDashboardPath, activityBasePath, note, moduleSourceName,
}) {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [progress, setProgress] = useState({ quantitative:{completedModules:{},scores:{},completedActivities:{}}, verbal:{completedModules:{},scores:{},completedActivities:{}} });
  const safeModules = Array.isArray(modules) ? modules : [];
  const safeActivities = Array.isArray(activities) ? activities : [];
  const progressKey = track;
  useEffect(() => {
    if (!isAuthenticated && user === null) return;
    if (!user?.userId) router.replace("/Auth");
    else setProgress(readReasoningProgress(user.userId));
  }, [isAuthenticated, user, router]);
  const stageProgress = getStageActivityProgress(progress, progressKey, safeActivities);
  const completedCount = stageProgress.completedActivities;
  const percent = stageProgress.percent;
  const explore = safeActivities.filter((activity) => String(activity.half || "").toLowerCase() === "explore");
  const extend = safeActivities.filter((activity) => String(activity.half || "").toLowerCase() === "extend");
  if (!isAuthenticated || !user?.userId) return null;
  const stageEyebrow = levelId === "L1" && stageNumber === 1 ? "Stage 01 · " + stageName : "Level " + String(levelId).replace("L","") + " · Stage " + String(stageNumber) + " · " + stageName;
  const renderActivity = (activity) => {
    const completed = Boolean(progress[progressKey]?.completedActivities?.[activity.id]);
    const href = "/Reasoning/Activity/" + activity.id;
    return <div key={activity.id} style={styles.activity}><div><span style={styles.half}>{String(activity.half || "").toUpperCase()}</span><strong>{activity.title}</strong><p style={styles.halfText}>{activity.description}</p>{completed && <span style={{...styles.status,marginTop:8}}>Completed{progress[progressKey]?.scores?.[activity.id] !== undefined ? " · Score " + progress[progressKey].scores[activity.id] + "%" : ""}</span>}</div><Link href={href} style={styles.button}>{completed ? "Review activity" : "Start activity"}</Link></div>;
  };
  return <><Head><title>{stageName} | Upskilleduonline</title></Head><main style={styles.page}><div style={styles.wrapper}><Link href={trackDashboardPath} style={styles.back}>← Back to {track === "quantitative" ? "Quantitative" : "Verbal"} Dashboard</Link><p style={styles.eyebrow}>{stageEyebrow}</p><h1 style={styles.title}>{stageName}</h1><p style={styles.intro}>{stageDescription}</p><section style={styles.progress}><div style={styles.progressTop}><span>Stage progress</span><span>{completedCount} / {stageProgress.totalActivities} activities · {percent}%</span></div><div style={styles.track}><div style={{...styles.fill,width:percent + "%"}} /></div></section><div style={styles.grid}>{safeModules.map((module,index) => { const key=moduleProgressKey(levelId,stageNumber,module.id); const complete=Boolean(progress[progressKey]?.completedModules?.[key]); const linked=Array.isArray(module.activityIds)?module.activityIds:[]; const done=linked.filter((id)=>progress[progressKey]?.completedActivities?.[id]).length; return <article key={module.id} style={styles.card}><div style={styles.number}>MODULE {String(index+1).padStart(2,"0")}</div><h2 style={styles.cardTitle}>{module.title}</h2><p style={styles.text}>{module.focus}</p>{complete && <span style={styles.status}>Completed</span>}<div style={{color:"var(--muted)",fontSize:13,marginBottom:14}}>{done} / {linked.length} linked activities completed</div><Link href={stagePath + "/" + module.id} style={styles.button}>{complete ? "Review Module" : "Begin lesson"}</Link></article>; })}</div><section style={styles.section}><h2 style={{color:"var(--text)",marginBottom:6}}>Explore first</h2><p style={{color:"var(--muted)",lineHeight:1.6}}>Build the core idea with accessible practice before moving to the more challenging Extend activities.</p>{explore.map(renderActivity)}</section><section style={styles.section}><h2 style={{color:"var(--text)",marginBottom:6}}>Then Extend</h2><p style={{color:"var(--muted)",lineHeight:1.6}}>Apply the same ideas with greater reasoning challenge. Extend is harder than Explore; it continues the progression of the selected level.</p>{extend.map(renderActivity)}</section><p style={{marginTop:24,color:"var(--muted)",lineHeight:1.6}}>{note || (moduleSourceName ? "Stage curriculum source: " + moduleSourceName + "." : "")}</p></div></main></>;
}

export function ReasoningModulePage({ levelId, stageNumber, track, modules, activitiesById, moduleId, stagePath, activityBasePath, activityResolverName }) {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [completed, setCompleted] = useState(false);
  const safeModules = Array.isArray(modules) ? modules : [];
  const module = safeModules.find((item) => item.id === moduleId);
  const moduleIndex = safeModules.findIndex((item) => item.id === moduleId);
  const moduleKey = module ? moduleProgressKey(levelId, stageNumber, module.id) : null;
  useEffect(() => {
    if (!router.isReady) return;
    if (!isAuthenticated || !user?.userId) router.replace({pathname:"/Auth",query:{redirect:router.asPath}});
    else if (moduleKey) setCompleted(Boolean(readReasoningProgress(user.userId)[track]?.completedModules?.[moduleKey]));
  }, [router.isReady, router, isAuthenticated, user, moduleKey, track]);
  if (!router.isReady || !isAuthenticated || !user?.userId) return null;
  if (!module) return <main style={{padding:40}}><h1>Module not found.</h1><Link href={stagePath}>Back to Stage</Link></main>;
  const progress = readReasoningProgress(user.userId);
  const linked = (Array.isArray(module.activityIds) ? module.activityIds : []).map((id) => activitiesById(id)).filter(Boolean);
  const previous = moduleIndex > 0 ? safeModules[moduleIndex - 1] : null;
  const next = moduleIndex >= 0 && moduleIndex < safeModules.length - 1 ? safeModules[moduleIndex + 1] : null;
  const markComplete = () => { completeReasoningModule(user.userId, track, moduleKey, undefined); setCompleted(true); };
  const activityHref = (activity) => "/Reasoning/Activity/" + activity.id;
  return <><Head><title>{module.title} | {track === "quantitative" ? "Quantitative" : "Verbal"} Skills</title></Head><main style={styles.page}><div style={{...styles.wrapper,maxWidth:900}}><Link href={stagePath} style={styles.back}>← Back to Stage {String(stageNumber).padStart(2,"0")}</Link><p style={{marginTop:32,color:"var(--blue)",fontWeight:800,textTransform:"uppercase",letterSpacing:".08em",fontSize:13}}>{levelId === "L1" ? "Level 1" : "Level " + String(levelId).replace("L","")} · Module {moduleIndex + 1}</p><h1 style={{fontSize:"clamp(36px,5vw,54px)",lineHeight:1.08,margin:"10px 0"}}>{module.title}</h1><p style={{color:"var(--muted)",fontSize:19,lineHeight:1.7}}>{module.focus}</p><section style={{marginTop:30,padding:28,borderRadius:18,background:"var(--card)",border:"1px solid var(--border)"}}><h2>Learn</h2><p style={{lineHeight:1.75,color:"var(--muted)"}}>{module.lesson}</p><h2 style={{marginTop:28}}>Worked example</h2><p style={{lineHeight:1.75,color:"var(--muted)"}}>{module.example}</p><h2 style={{marginTop:28}}>Try it yourself</h2><p style={{lineHeight:1.75,color:"var(--muted)"}}>{module.practice}</p><div style={{marginTop:30,padding:18,borderRadius:12,background:"rgba(0,59,147,.07)"}}><strong>Learning goal:</strong> Explain your reasoning, not just your final answer.</div><section style={{marginTop:32}}><h2>Practice activities</h2><p style={{color:"var(--muted)",lineHeight:1.6}}>Explore builds the foundation; Extend adds challenge within the selected level.</p>{linked.length ? linked.map((activity)=><div key={activity.id} style={{marginTop:12,padding:16,borderRadius:12,border:"1px solid var(--border)"}}><div style={{color:"var(--blue)",fontSize:12,fontWeight:800,textTransform:"uppercase"}}>{String(activity.half || "").toUpperCase()} · {activity.title}</div><div style={{color:"var(--muted)",marginTop:5,lineHeight:1.5}}>{activity.description}</div><div style={{marginTop:10,display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"}}><Link href={activityHref(activity)} style={{padding:"10px 14px",borderRadius:9,background:"var(--blue)",color:"#fff",textDecoration:"none",fontWeight:800}}>{progress[track]?.completedActivities?.[activity.id] ? "Review activity" : "Start activity"}</Link>{progress[track]?.completedActivities?.[activity.id] && <span style={{color:"var(--blue)",fontWeight:800,fontSize:13}}>Completed{progress[track]?.scores?.[activity.id] !== undefined ? " · Score " + progress[track].scores[activity.id] + "%" : ""}</span>}</div></div>) : <p style={{color:"var(--muted)"}}>Practice activities are being added to this module.</p>}</section><div style={{display:"flex",gap:12,flexWrap:"wrap",marginTop:30}}><Link href={stagePath} style={{padding:"12px 18px",borderRadius:10,border:"1px solid var(--border)",color:"var(--text)",textDecoration:"none",fontWeight:800}}>Back to modules</Link>{previous && <Link href={stagePath + "/" + previous.id} style={{padding:"12px 18px",borderRadius:10,border:"1px solid var(--border)",color:"var(--text)",textDecoration:"none",fontWeight:800}}>← Previous module</Link>}{next && <Link href={stagePath + "/" + next.id} style={{padding:"12px 18px",borderRadius:10,border:"1px solid var(--border)",color:"var(--text)",textDecoration:"none",fontWeight:800}}>Next module →</Link>}{!completed && <button type="button" onClick={markComplete} style={{padding:"12px 18px",border:0,borderRadius:10,background:"var(--blue)",color:"#fff",fontWeight:800}}>Mark module complete</button>}{completed && <span style={{padding:"12px 18px",borderRadius:10,background:"rgba(0,59,147,.08)",color:"var(--blue)",fontWeight:800}}>Module completed</span>}</div></section></div></main></>;
}