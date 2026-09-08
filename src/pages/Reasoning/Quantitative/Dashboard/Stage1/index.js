import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getActivities } from "../../../../../Data/Reasoning/activities";
import { getStage1Module } from "../../../../../Data/Reasoning/stage1Modules";
import { getTrackCompletedCount, readReasoningProgress } from "../../../../../utils/reasoningProgress";

const modules = ["Module1", "Module2", "Module3", "Module4", "Module5"];

const styles = {
  page: { minHeight: "80vh", padding: "48px 20px 80px", background: "var(--surface)" }, wrapper: { maxWidth: 1150, margin: "0 auto" }, back: { color: "var(--muted)", textDecoration: "none", fontWeight: 700 }, eyebrow: { margin: "28px 0 10px", color: "var(--blue)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13 }, title: { margin: 0, color: "var(--text)", fontSize: "clamp(34px,5vw,54px)", lineHeight: 1.07 }, intro: { maxWidth: 760, margin: "14px 0 0", color: "var(--muted)", fontSize: 18, lineHeight: 1.7 }, progress: { marginTop: 30, padding: 22, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18 }, progressTop: { display: "flex", justifyContent: "space-between", gap: 16, marginBottom: 12, color: "var(--text)", fontWeight: 800 }, track: { height: 9, borderRadius: 99, background: "#e7ecf3", overflow: "hidden" }, fill: { height: "100%", background: "var(--blue)", borderRadius: 99 }, grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18, marginTop: 24 }, card: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 24, boxShadow: "0 10px 30px rgba(0,0,37,.06)" }, number: { color: "var(--blue)", fontWeight: 800, fontSize: 13, marginBottom: 12 }, cardTitle: { color: "var(--text)", margin: "0 0 9px", fontSize: 21 }, text: { color: "var(--muted)", lineHeight: 1.6, minHeight: 78, margin: "0 0 18px" }, button: { display: "inline-block", padding: "11px 15px", borderRadius: 9, background: "var(--blue)", color: "#fff", textDecoration: "none", fontWeight: 800, fontSize: 14 }, status: { display: "inline-block", marginBottom: 12, fontSize: 12, fontWeight: 800, color: "var(--blue)", background: "rgba(0,59,147,.08)", borderRadius: 99, padding: "6px 10px" }, note: { marginTop: 24, color: "var(--muted)", lineHeight: 1.6 }, activity: { display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", flexWrap: "wrap", padding: 16, borderRadius: 12, border: "1px solid var(--border)", marginTop: 12 }, half: { display: "inline-block", fontSize: 11, fontWeight: 800, color: "var(--blue)", background: "rgba(0,59,147,.08)", borderRadius: 99, padding: "5px 8px", marginRight: 8 },
};

export default function FoundationQuantitative() {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [progress, setProgress] = useState({ quantitative: { completedModules: {}, scores: {}, completedActivities: {} } });
  const activities = getActivities({ track: "quantitative", levelId: "L1", stageId: "S1" });

  useEffect(() => {
    if (!isAuthenticated && user === null) return;
    if (!user?.userId) router.replace("/Auth");
    else setProgress(readReasoningProgress(user.userId));
  }, [isAuthenticated, user, router]);

  const completedCount = getTrackCompletedCount(progress, "quantitative", modules.length);
  const percent = Math.round((completedCount / modules.length) * 100);

  return <>
    <Head><title>Foundation Quantitative & Reasoning | Upskilleduonline</title><meta name="description" content="Build number sense, patterns, logic and foundational quantitative reasoning." /></Head>
    <main style={styles.page}><div style={styles.wrapper}>
      <Link href="/Reasoning/Quantitative/Dashboard" style={styles.back}>← Back to Quantitative Dashboard</Link>
      <p style={styles.eyebrow}>Stage 01 · Foundation Quantitative & Reasoning</p>
      <h1 style={styles.title}>Learn to see the structure before solving.</h1>
      <p style={styles.intro}>This stage develops the habits behind strong quantitative reasoning: noticing patterns, translating information, comparing quantities and choosing a sound strategy.</p>
      <section style={styles.progress}><div style={styles.progressTop}><span>Stage progress</span><span>{completedCount} / {modules.length} modules · {percent}%</span></div><div style={styles.track}><div style={{ ...styles.fill, width: `${percent}%` }} /></div></section>
      <div style={styles.grid}>{modules.map((moduleId, index) => {
        const module = getStage1Module("quantitative", moduleId);
        const complete = Boolean(progress.quantitative?.completedModules?.[moduleId]);
        const linkedActivities = module?.activityIds || [];
        const completedActivities = linkedActivities.filter((id) => progress.quantitative?.completedActivities?.[id]).length;
        return <article key={moduleId} style={styles.card}><div style={styles.number}>MODULE {String(index + 1).padStart(2, "0")}</div><h2 style={styles.cardTitle}>{module?.title}</h2><p style={styles.text}>{module?.focus}</p>{complete && <span style={styles.status}>Completed</span>}<div style={{ color: "var(--muted)", fontSize: 13, marginBottom: 14 }}>{completedActivities} / {linkedActivities.length} linked activities completed</div><Link href={`/Reasoning/Quantitative/Dashboard/Stage1/${moduleId}`} style={styles.button}>{complete ? "Review Module" : "Begin lesson"}</Link></article>;
      })}</div>

      <section style={{ marginTop: 40 }}>
        <p style={styles.eyebrow}>Level 1 · Grade 3</p>
        <h2 style={{ color: "var(--text)", marginBottom: 6 }}>Explore & Extend activities</h2>
        <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>Explore builds the foundation; Extend increases the reasoning challenge while staying within Grade 3.</p>
        {activities.map((activity) => {
          const score = progress.quantitative?.scores?.[activity.id];
          const complete = Boolean(progress.quantitative?.completedActivities?.[activity.id]);
          return <div key={activity.id} style={styles.activity}><div><span style={styles.half}>{activity.half.toUpperCase()}</span><strong>{activity.title}</strong><div style={{ color: "var(--muted)", marginTop: 7 }}>{activity.description}</div>{complete && <span style={{ ...styles.status, marginTop: 8 }}>Completed{score !== undefined ? ` · Score ${score}%` : ""}</span>}</div><Link href={`/Reasoning/Activity/${activity.id}`} style={styles.button}>{complete ? "Review activity" : "Start activity"}</Link></div>;
        })}
      </section>
      <p style={styles.note}>Quantitative activity progress is stored separately from Verbal and from the Foreign Languages product. Backend persistence remains a later phase.</p>
    </div></main>
  </>;
}
