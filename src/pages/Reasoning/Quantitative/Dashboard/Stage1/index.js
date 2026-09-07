import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getTrackCompletedCount, readReasoningProgress } from "../../../../../utils/reasoningProgress";

const modules = [
  ["01", "Number Sense", "Strengthen estimation, magnitude, operations and numerical confidence.", "Begin lesson"],
  ["02", "Patterns", "Recognize sequences, relationships and structures before calculating.", "Begin lesson"],
  ["03", "Logic", "Translate conditions into clear steps and identify what must be true.", "Begin lesson"],
  ["04", "Quantitative Relationships", "Compare quantities, reason with ratios and connect representations.", "Begin lesson"],
  ["05", "Problem-Solving Strategies", "Choose useful strategies for unfamiliar multi-step problems.", "Practice"],
];

const styles = {
  page: { minHeight: "80vh", padding: "48px 20px 80px", background: "var(--surface)" }, wrapper: { maxWidth: 1150, margin: "0 auto" }, back: { color: "var(--muted)", textDecoration: "none", fontWeight: 700 }, eyebrow: { margin: "28px 0 10px", color: "var(--blue)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13 }, title: { margin: 0, color: "var(--text)", fontSize: "clamp(34px,5vw,54px)", lineHeight: 1.07 }, intro: { maxWidth: 760, margin: "14px 0 0", color: "var(--muted)", fontSize: 18, lineHeight: 1.7 }, progress: { marginTop: 30, padding: 22, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18 }, progressTop: { display: "flex", justifyContent: "space-between", gap: 16, marginBottom: 12, color: "var(--text)", fontWeight: 800 }, track: { height: 9, borderRadius: 99, background: "#e7ecf3", overflow: "hidden" }, fill: { height: "100%", background: "var(--blue)", borderRadius: 99 }, grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18, marginTop: 24 }, card: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 24, boxShadow: "0 10px 30px rgba(0,0,37,.06)" }, number: { color: "var(--blue)", fontWeight: 800, fontSize: 13, marginBottom: 12 }, cardTitle: { color: "var(--text)", margin: "0 0 9px", fontSize: 21 }, text: { color: "var(--muted)", lineHeight: 1.6, minHeight: 78, margin: "0 0 18px" }, button: { display: "inline-block", padding: "11px 15px", borderRadius: 9, background: "var(--blue)", color: "#fff", textDecoration: "none", fontWeight: 800, fontSize: 14 }, status: { display: "inline-block", marginBottom: 12, fontSize: 12, fontWeight: 800, color: "var(--blue)", background: "rgba(0,59,147,.08)", borderRadius: 99, padding: "6px 10px" }, note: { marginTop: 24, color: "var(--muted)", lineHeight: 1.6 },
};

export default function FoundationQuantitative() {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [progress, setProgress] = useState({ quantitative: { completedModules: {}, scores: {} } });

  useEffect(() => {
    if (!isAuthenticated && user === null) return;
    if (!user?.userId) router.replace("/Auth");
    else setProgress(readReasoningProgress(user.userId));
  }, [isAuthenticated, user, router]);

  const completedCount = getTrackCompletedCount(progress, "quantitative", modules.length);
  const percent = Math.round((completedCount / modules.length) * 100);

  return (
    <>
      <Head><title>Foundation Quantitative & Reasoning | Upskilleduonline</title><meta name="description" content="Build number sense, patterns, logic and foundational quantitative reasoning." /></Head>
      <main style={styles.page}><div style={styles.wrapper}>
        <Link href="/Reasoning/Quantitative/Dashboard" style={styles.back}>← Back to Quantitative Dashboard</Link>
        <p style={styles.eyebrow}>Stage 01 · Foundation Quantitative & Reasoning</p>
        <h1 style={styles.title}>Learn to see the structure before solving.</h1>
        <p style={styles.intro}>This stage develops the habits behind strong quantitative reasoning: noticing patterns, translating information, comparing quantities and choosing a sound strategy.</p>
        <section style={styles.progress}><div style={styles.progressTop}><span>Stage progress</span><span>{completedCount} / {modules.length} modules · {percent}%</span></div><div style={styles.track}><div style={{ ...styles.fill, width: `${percent}%` }} /></div></section>
        <div style={styles.grid}>{modules.map(([number, title, text, action], index) => {
          const complete = Boolean(progress.quantitative?.completedModules?.[`module${index + 1}`]);
          return <article key={number} style={styles.card}><div style={styles.number}>MODULE {number}</div><h2 style={styles.cardTitle}>{title}</h2><p style={styles.text}>{text}</p>{complete && <span style={styles.status}>Completed{progress.quantitative?.scores?.[`module${index + 1}`] !== undefined ? ` · Score ${progress.quantitative.scores[`module${index + 1}`]}/${index === 0 ? 5 : 5}` : ""}</span>}<Link href={`/Reasoning/Quantitative/Dashboard/Stage1/Module${index + 1}`} style={styles.button}>{complete ? "Review Module" : action}</Link></article>;
        })}</div>
        <p style={styles.note}>Your Quantitative progress is stored separately from the Foreign Languages product and is ready to be connected to backend persistence later.</p>
      </div></main>
    </>
  );
}
