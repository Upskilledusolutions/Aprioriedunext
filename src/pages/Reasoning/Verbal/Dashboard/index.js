import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getTrackCompletedCount, getTrackPercent, readReasoningProgress } from "../../../../utils/reasoningProgress";

const stages = [
  ["01", "Foundation Verbal & Reasoning", "Build comprehension, vocabulary, inference and clear-thinking habits."],
  ["02", "Critical Reading & Argument", "Learn to identify claims, evidence, assumptions, structure and reasoning."],
  ["03", "Analytical & Scholarly Writing", "Turn ideas and evidence into precise, coherent academic writing."],
  ["04", "Essay Competitions", "Develop original arguments, structure and persuasive competition essays."],
  ["05", "Research Skills", "Learn to frame questions, evaluate sources and conduct responsible research."],
  ["06", "Research Writing & Publication", "Communicate research clearly through advanced academic writing and publication."],
];

const styles = {
  page: { minHeight: "80vh", padding: "48px 20px 80px", background: "var(--surface)" }, wrapper: { maxWidth: 1150, margin: "0 auto" }, back: { color: "var(--muted)", textDecoration: "none", fontWeight: 700 }, header: { marginTop: 28 }, eyebrow: { color: "var(--blue)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13, margin: "0 0 10px" }, title: { color: "var(--text)", fontSize: "clamp(34px,5vw,54px)", lineHeight: 1.07, margin: 0 }, intro: { color: "var(--muted)", fontSize: 18, lineHeight: 1.7, maxWidth: 760, margin: "14px 0 0" }, progress: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 22, marginTop: 30 }, progressTop: { display: "flex", justifyContent: "space-between", gap: 20, marginBottom: 12, color: "var(--text)", fontWeight: 800 }, track: { height: 9, borderRadius: 99, background: "#e7ecf3", overflow: "hidden" }, fill: { height: "100%", background: "var(--blue)", borderRadius: 99 }, grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18, marginTop: 24 }, card: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 24, boxShadow: "0 10px 30px rgba(0,0,37,.06)" }, number: { color: "var(--blue)", fontWeight: 800, fontSize: 13, marginBottom: 13 }, cardTitle: { color: "var(--text)", fontSize: 21, lineHeight: 1.3, margin: "0 0 9px" }, text: { color: "var(--muted)", lineHeight: 1.6, margin: "0 0 18px" }, status: { display: "inline-block", fontSize: 12, fontWeight: 800, color: "#667085", background: "#f2f4f7", borderRadius: 99, padding: "6px 10px" }, action: { display: "block", marginTop: 14, color: "var(--blue)", textDecoration: "none", fontWeight: 800 }, continue: { display: "inline-block", marginTop: 18, padding: "12px 16px", borderRadius: 10, background: "var(--blue)", color: "#fff", textDecoration: "none", fontWeight: 800 },
};

export default function VerbalDashboard() {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    if (!isAuthenticated && user === null) return;
    if (!user?.userId) router.replace("/Auth");
    else setProgress(readReasoningProgress(user.userId));
  }, [isAuthenticated, user, router]);

  const completedCount = getTrackCompletedCount(progress, "verbal", 5);
  const percent = getTrackPercent(progress, "verbal", 5);
  const nextModule = completedCount === 0 ? 1 : Math.min(completedCount + 1, 5);

  return (
    <>
      <Head><title>Verbal Skills Dashboard | Upskilleduonline</title><meta name="description" content="Build verbal reasoning, critical reading, analytical writing and research skills." /></Head>
      <main style={styles.page}><div style={styles.wrapper}>
        <Link href="/Reasoning/Dashboard" style={styles.back}>← Back to Reasoning Dashboard</Link>
        <div style={styles.header}><p style={styles.eyebrow}>Verbal Skills{user?.name ? ` · ${user.name}` : ""}</p><h1 style={styles.title}>Read critically. Write clearly. Think independently.</h1><p style={styles.intro}>Your six-stage pathway moves from strong verbal foundations toward critical argument, scholarly writing, research and publication.</p></div>
        <section style={styles.progress}><div style={styles.progressTop}><span>Overall verbal progress</span><span>{percent}% · {completedCount}/5 Stage 01 modules</span></div><div style={styles.track}><div style={{ ...styles.fill, width: `${percent}%` }} /></div>{completedCount < 5 && <Link href={`/Reasoning/Verbal/Dashboard/Stage1/Module${nextModule}`} style={styles.continue}>Continue Learning →</Link>}</section>
        <div style={styles.grid}>{stages.map(([number, title, text], index) => <section key={number} style={styles.card}><div style={styles.number}>STAGE {number}</div><h2 style={styles.cardTitle}>{title}</h2><p style={styles.text}>{text}</p><span style={styles.status}>{index === 0 ? `${completedCount === 0 ? "Ready to start" : `${completedCount}/5 modules complete`}` : "Locked until pathway is built"}</span>{index === 0 && <Link href="/Reasoning/Verbal/Dashboard/Stage1" style={styles.action}>Open Foundation Stage →</Link>}</section>)}</div>
      </div></main>
    </>
  );
}
