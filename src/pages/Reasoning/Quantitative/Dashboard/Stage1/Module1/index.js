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

export default function NumberSenseModule() {
  return (
    <>
      <Head><title>Number Sense | Quantitative Skills | Upskilleduonline</title><meta name="description" content="Build foundational number sense for quantitative reasoning." /></Head>
      <main style={styles.page}>
        <div style={styles.wrapper}>
          <Link href="/Reasoning/Quantitative/Dashboard/Stage1" style={styles.back}>← Back to Foundation Quantitative</Link>
          <p style={styles.eyebrow}>Stage 01 · Module 01</p>
          <h1 style={styles.title}>Number Sense</h1>
          <p style={styles.intro}>Strong problem solving starts with being comfortable with quantities. This first module focuses on estimation, magnitude and seeing numbers as relationships rather than isolated calculations.</p>

          <section style={styles.card}>
            <h2 style={styles.heading}>What you will develop</h2>
            <ul style={styles.list}>
              <li>Estimate before calculating.</li>
              <li>Compare the size and scale of quantities.</li>
              <li>Use mental strategies to check whether an answer makes sense.</li>
              <li>Recognize useful numerical relationships.</li>
            </ul>
          </section>

          <section style={styles.card}>
            <h2 style={styles.heading}>Learning activity</h2>
            <p style={styles.text}>Before we add interactive problems, use this principle throughout the platform: <strong>predict first, calculate second, check third.</strong> The next build will turn this lesson into an interactive practice activity with immediate feedback.</p>
            <Link href="/Reasoning/Quantitative/Dashboard/Stage1" style={styles.button}>Return to Stage 01</Link>
          </section>
        </div>
      </main>
    </>
  );
}
