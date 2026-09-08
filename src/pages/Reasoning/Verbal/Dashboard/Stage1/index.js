import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getActivities } from "../../../../../Data/Reasoning/activities";
import { getTrackCompletedCount, readReasoningProgress } from "../../../../../utils/reasoningProgress";

const modules = [
  ["01", "Reading for Meaning", "Identify the main idea, structure and purpose of a written passage.", "Begin lesson"],
  ["02", "Vocabulary in Context", "Infer meaning from context and distinguish precise shades of meaning.", "Begin lesson"],
  ["03", "Claims & Evidence", "Separate claims from evidence and judge whether support is relevant.", "Begin lesson"],
  ["04", "Basic Argument", "Recognize assumptions, conclusions and the logical structure of an argument.", "Begin lesson"],
  ["05", "Verbal Reasoning", "Use language carefully to compare ideas, infer conclusions and solve unfamiliar problems.", "Practice"],
];

const styles = {
  page: { minHeight: "80vh", padding: "48px 20px 80px", background: "var(--surface)" }, wrapper: { maxWidth: 1150, margin: "0 auto" }, back: { color: "var(--muted)", textDecoration: "none", fontWeight: 700 }, eyebrow: { margin: "28px 0 10px", color: "var(--blue)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13 }, title: { margin: 0, color: "var(--text)", fontSize: "clamp(34px,5vw,54px)", lineHeight: 1.07 }, intro: { maxWidth: 760, margin: "14px 0 0", color: "var(--muted)", fontSize: 18, lineHeight: 1.7 }, progress: { marginTop: 30, padding: 22, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18 }, progressTop: { display: "flex", justifyContent: "space-between", gap: 16, marginBottom: 12, color: "var(--text)", fontWeight: 800 }, track: { height: 9, borderRadius: 99, background: "#e7ecf3", overflow: "hidden" }, fill: { height: "100%", background: "var(--blue)", borderRadius: 99 }, grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18, marginTop: 24 }, card: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 24, boxShadow: "0 10px 30px rgba(0,0,37,.06)" }, number: { color: "var(--blue)", fontWeight: 800, fontSize: 13, marginBottom: 12 }, cardTitle: { color: "var(--text)", margin: "0 0 9px", fontSize: 21 }, text: { color: "var(--muted)", lineHeight: 1.6, minHeight: 78, margin: "0 0 18px" }, button: { display: "inline-block", padding: "11px 15px", borderRadius: 9, background: "var(--blue)", color: "#fff", textDecoration: "none", fontWeight: 800, fontSize: 14 }, status: { display: "inline-block", marginBottom: 12, fontSize: 12, fontWeight: 800, color: "var(--blue)", background: "rgba(0,59,147,.08)", borderRadius: 99, padding: "6px 10px" }, note: { marginTop: 24, color: "var(--muted)", lineHeight: 1.6 }, activity: { display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", flexWrap: "wrap", padding: 16, borderRadius: 12, border: "1px solid var(--border)", marginTop: 12 },
};

export default function FoundationVerbal() {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [progress, setProgress] = useState({ verbal: { completedModules: {}, scores: {}, completedActivities: {} } });
  const activities = getActivities({ track: "verbal", levelId: "L1", stageId: "S1" });

  useEffect(() => {
    if (!isAuthenticated && user === null) return;
    if (!user?.userId) router.replace("/Auth");
    else setProgress(readReasoningProgress(user.userId));
  }, [isAuthenticated, user, router]);

  const completedCount = getTrackCompletedCount(progress, "verbal", modules.length);
  const percent = Math.round((completedCount / modules.length) * 100);

  return (
    <>
      <Head><title>Foundation Verbal & Reasoning | Upskilleduonline</title><meta name="description" content="Build reading, argument and foundational verbal reasoning skills." /></Head>
      <main style={styles.page}><div style={styles.wrapper}>
        <Link href="/Reasoning/Verbal/Dashboard" style={styles.back}>← Back to Verbal Dashboard</Link>
        <p style={styles.eyebrow}>Stage 01 · Foundation Verbal & Reasoning</p><h1 style={styles.title}>Read carefully. Reason precisely.</h1>
        <p style={styles.intro}>This stage develops the habits behind strong verbal reasoning: understanding structure, interpreting language, evaluating evidence and following an argument from premise to conclusion.</p>
        <section style={styles.progress}><div style={styles.progressTop}><span>Stage progress</span><span>{completedCount} / {modules.length} modules · {percent}%</span></div><div style={styles.track}><div style={{ ...styles.fill, width: `${percent}%` }} /></div></section>
        <div style={styles.grid}>{modules.map(([number, title, text, action], index) => {
          const complete = Boolean(progress.verbal?.completedModules?.[`module${index + 1}`]);
          return <article key={number} style={styles.card}><div style={styles.number}>MODULE {number}</div><h2 style={styles.cardTitle}>{title}</h2><p style={styles.text}>{text}</p>{complete && <span style={styles.status}>Completed{progress.verbal?.scores?.[`module${index + 1}`] !== undefined ? ` · Score ${progress.verbal.scores[`module${index + 1}`]}` : ""}</span>}<Link href={`/Reasoning/Verbal/Dashboard/Stage1/Module${index + 1}`} style={styles.button}>{complete ? "Review Module" : action}</Link></article>;
        })}</div>

        <section style={{ marginTop: 40 }}>
          <p style={styles.eyebrow}>Level 1 · Grade 3</p>
          <h2 style={{ color: "var(--text)", marginBottom: 6 }}>Explore & Extend activities</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>These are the working Level 1 learning activities. Explore builds the foundation; Extend increases the reasoning challenge while staying within Grade 3.</p>
          {activities.map((activity) => {
            const score = progress.verbal?.scores?.[activity.id];
            const complete = Boolean(progress.verbal?.completedActivities?.[activity.id]);
            return <div key={activity.id} style={styles.activity}><div><div style={styles.number}>{activity.half.toUpperCase()} · {activity.moduleId.replaceAll("-", " ")}</div><strong>{activity.title}</strong><div style={{ color: "var(--muted)", marginTop: 4 }}>{activity.description}</div>{complete && <span style={{ ...styles.status, marginTop: 8 }}>Completed{score !== undefined ? ` · Score ${score}%` : ""}</span>}</div><Link href={`/Reasoning/Activity/${activity.id}`} style={styles.button}>{complete ? "Review activity" : "Start activity"}</Link></div>;
          })}
        </section>
        <p style={styles.note}>Verbal activity progress is stored separately from Quantitative and from the Foreign Languages product. Backend persistence remains a later phase.</p>
      </div></main>
    </>
  );
}
