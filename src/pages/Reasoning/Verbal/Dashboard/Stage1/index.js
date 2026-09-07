import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const modules = [
  ["01", "Reading for Meaning", "Identify the main idea, structure and purpose of a written passage.", "Begin lesson"],
  ["02", "Vocabulary in Context", "Infer meaning from context and distinguish precise shades of meaning.", "Begin lesson"],
  ["03", "Claims & Evidence", "Separate claims from evidence and judge whether support is relevant.", "Begin lesson"],
  ["04", "Basic Argument", "Recognize assumptions, conclusions and the logical structure of an argument.", "Begin lesson"],
  ["05", "Verbal Reasoning", "Use language carefully to compare ideas, infer conclusions and solve unfamiliar problems.", "Practice"],
];

const styles = {
  page: { minHeight: "80vh", padding: "48px 20px 80px", background: "var(--surface)" },
  wrapper: { maxWidth: 1150, margin: "0 auto" },
  back: { color: "var(--muted)", textDecoration: "none", fontWeight: 700 },
  eyebrow: { margin: "28px 0 10px", color: "var(--blue)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13 },
  title: { margin: 0, color: "var(--text)", fontSize: "clamp(34px,5vw,54px)", lineHeight: 1.07 },
  intro: { maxWidth: 760, margin: "14px 0 0", color: "var(--muted)", fontSize: 18, lineHeight: 1.7 },
  progress: { marginTop: 30, padding: 22, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18 },
  progressTop: { display: "flex", justifyContent: "space-between", gap: 16, marginBottom: 12, color: "var(--text)", fontWeight: 800 },
  track: { height: 9, borderRadius: 99, background: "#e7ecf3", overflow: "hidden" },
  fill: { width: "0%", height: "100%", background: "var(--blue)", borderRadius: 99 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18, marginTop: 24 },
  card: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 24, boxShadow: "0 10px 30px rgba(0,0,37,.06)" },
  number: { color: "var(--blue)", fontWeight: 800, fontSize: 13, marginBottom: 12 },
  cardTitle: { color: "var(--text)", margin: "0 0 9px", fontSize: 21 },
  text: { color: "var(--muted)", lineHeight: 1.6, minHeight: 78, margin: "0 0 18px" },
  button: { display: "inline-block", padding: "11px 15px", borderRadius: 9, background: "var(--blue)", color: "#fff", textDecoration: "none", fontWeight: 800, fontSize: 14 },
  note: { marginTop: 24, color: "var(--muted)", lineHeight: 1.6 },
};

export default function FoundationVerbal() {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!isAuthenticated && user === null) return;
    if (!user?.userId) router.replace("/Auth");
  }, [isAuthenticated, user, router]);

  return (
    <>
      <Head>
        <title>Foundation Verbal & Reasoning | Upskilleduonline</title>
        <meta name="description" content="Build reading, argument and foundational verbal reasoning skills." />
      </Head>
      <main style={styles.page}>
        <div style={styles.wrapper}>
          <Link href="/Reasoning/Verbal/Dashboard" style={styles.back}>← Back to Verbal Dashboard</Link>
          <p style={styles.eyebrow}>Stage 01 · Foundation Verbal & Reasoning</p>
          <h1 style={styles.title}>Read carefully. Reason precisely.</h1>
          <p style={styles.intro}>This stage develops the habits behind strong verbal reasoning: understanding structure, interpreting language, evaluating evidence and following an argument from premise to conclusion.</p>

          <section style={styles.progress}>
            <div style={styles.progressTop}><span>Stage progress</span><span>0 / {modules.length} modules</span></div>
            <div style={styles.track}><div style={styles.fill} /></div>
          </section>

          <div style={styles.grid}>
            {modules.map(([number, title, text, action], index) => (
              <article key={number} style={styles.card}>
                <div style={styles.number}>MODULE {number}</div>
                <h2 style={styles.cardTitle}>{title}</h2>
                <p style={styles.text}>{text}</p>
                <Link href={`/Reasoning/Verbal/Dashboard/Stage1/Module${index + 1}`} style={styles.button}>{action}</Link>
              </article>
            ))}
          </div>

          <p style={styles.note}>Completing modules will later feed the Reasoning progress system. The activity framework is being built separately from the existing Foreign Languages progress data.</p>
        </div>
      </main>
    </>
  );
}
