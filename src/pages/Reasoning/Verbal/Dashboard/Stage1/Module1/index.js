import Head from "next/head";
import Link from "next/link";

const styles = {
  page: { minHeight: "80vh", padding: "48px 20px 80px", background: "var(--surface)" },
  wrapper: { maxWidth: 850, margin: "0 auto" },
  back: { color: "var(--muted)", textDecoration: "none", fontWeight: 700 },
  eyebrow: { margin: "30px 0 10px", color: "var(--blue)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13 },
  title: { color: "var(--text)", fontSize: "clamp(34px,5vw,52px)", lineHeight: 1.08, margin: 0 },
  intro: { color: "var(--muted)", fontSize: 18, lineHeight: 1.7 },
  card: { marginTop: 28, padding: 28, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18 },
  heading: { color: "var(--text)", fontSize: 23, margin: "0 0 12px" },
  text: { color: "var(--muted)", lineHeight: 1.7 },
  list: { color: "var(--muted)", lineHeight: 1.9 },
  button: { display: "inline-block", marginTop: 22, padding: "13px 20px", borderRadius: 10, background: "var(--blue)", color: "#fff", textDecoration: "none", fontWeight: 800 },
};

export default function ReadingForMeaningModule() {
  return (
    <>
      <Head><title>Reading for Meaning | Verbal Skills | Upskilleduonline</title><meta name="description" content="Build foundational reading comprehension and verbal reasoning skills." /></Head>
      <main style={styles.page}>
        <div style={styles.wrapper}>
          <Link href="/Reasoning/Verbal/Dashboard/Stage1" style={styles.back}>← Back to Foundation Verbal</Link>
          <p style={styles.eyebrow}>Stage 01 · Module 01</p>
          <h1 style={styles.title}>Reading for Meaning</h1>
          <p style={styles.intro}>Good verbal reasoning begins with understanding what a writer is actually saying. This module introduces a disciplined approach to identifying meaning, structure and purpose.</p>

          <section style={styles.card}>
            <h2 style={styles.heading}>What you will develop</h2>
            <ul style={styles.list}>
              <li>Identify the main idea of a passage.</li>
              <li>Distinguish important details from supporting information.</li>
              <li>Recognize the purpose and structure of a text.</li>
              <li>Summarize an argument without changing its meaning.</li>
            </ul>
          </section>

          <section style={styles.card}>
            <h2 style={styles.heading}>Learning activity</h2>
            <p style={styles.text}>When reading a new passage, ask three questions: <strong>What is the writer saying? How is the idea developed? Why was it written this way?</strong> The next build will turn this lesson into interactive reading practice with immediate feedback.</p>
            <Link href="/Reasoning/Verbal/Dashboard/Stage1" style={styles.button}>Return to Stage 01</Link>
          </section>
        </div>
      </main>
    </>
  );
}
