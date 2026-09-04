import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";

const styles = {
  page: { minHeight: "80vh", padding: "48px 20px 70px", background: "#f7f9fc" },
  wrapper: { maxWidth: "1150px", margin: "0 auto" },
  welcome: { color: "#667085", fontWeight: 700, marginBottom: 8 },
  title: { fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.05, margin: "0 0 14px", color: "#172033" },
  intro: { maxWidth: 760, color: "#596579", fontSize: 18, lineHeight: 1.65, marginBottom: 38 },
  journey: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginBottom: 40 },
  stage: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: "14px 12px", textAlign: "center", fontWeight: 700, color: "#344054" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 },
  card: { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 20, padding: 30, boxShadow: "0 12px 35px rgba(16,24,40,.07)" },
  icon: { fontSize: 34, marginBottom: 16 },
  cardTitle: { fontSize: 28, margin: "0 0 12px", color: "#172033" },
  text: { color: "#667085", lineHeight: 1.6, minHeight: 78 },
  list: { color: "#475467", lineHeight: 1.9, paddingLeft: 20 },
  button: { display: "inline-block", marginTop: 14, padding: "13px 18px", borderRadius: 10, background: "#172033", color: "#fff", textDecoration: "none", fontWeight: 700 },
  note: { marginTop: 30, padding: 22, borderRadius: 16, background: "#eef2ff", color: "#344054", lineHeight: 1.6 },
  back: { display: "inline-block", color: "#667085", textDecoration: "none", fontWeight: 600, marginBottom: 28 }
};

export default function ReasoningDashboard() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Head>
        <title>Reasoning & Academic Skills | Upskilleduonline</title>
        <meta name="description" content="Build reasoning skills, mathematical thinking, critical reading, academic writing and research skills." />
      </Head>
      <main style={styles.page}>
        <div style={styles.wrapper}>
          <Link href="/ProductSelection" style={styles.back}>← Choose another product</Link>
          <div style={styles.welcome}>Reasoning & Academic Skills{user?.name ? ` · Welcome ${user.name}` : ""}</div>
          <h1 style={styles.title}>Build reasoning skills, not test-prep skills.</h1>
          <p style={styles.intro}>Develop the ability to solve unfamiliar problems, read critically, communicate ideas clearly and progress toward advanced academic work. Quantitative and Verbal learning stay distinct while contributing to one academic profile.</p>
          <div style={styles.journey}>{["Foundation", "Challenge", "Advanced Thinking", "Achievement", "Research"].map((stage) => <div key={stage} style={styles.stage}>{stage}</div>)}</div>
          <div style={styles.grid}>
            <section style={styles.card}>
              <div style={styles.icon}>∑</div>
              <h2 style={styles.cardTitle}>Quantitative Track</h2>
              <p style={styles.text}>From foundational quantitative reasoning to Olympiad problem solving, proof and mathematical research.</p>
              <ul style={styles.list}><li>Foundation Quantitative & Reasoning</li><li>Advanced Problem Solving</li><li>Mathematical Thinking</li><li>Math Olympiad</li><li>Proof & Advanced Mathematics</li><li>Mathematical Research</li></ul>
              <Link href="/Reasoning/Quantitative" style={styles.button}>Enter Quantitative Track</Link>
            </section>
            <section style={styles.card}>
              <div style={styles.icon}>Aa</div>
              <h2 style={styles.cardTitle}>Verbal Track</h2>
              <p style={styles.text}>Develop critical reading, argument, analytical writing, essay skills and research communication.</p>
              <ul style={styles.list}><li>Foundation Verbal & Reasoning</li><li>Critical Reading & Argument</li><li>Analytical & Scholarly Writing</li><li>Essay Competitions</li><li>Research Skills</li><li>Research Writing & Publication</li></ul>
              <Link href="/Reasoning/Verbal" style={styles.button}>Enter Verbal Track</Link>
            </section>
          </div>
          <div style={styles.note}><strong>Your academic profile will grow with you.</strong> Quantitative and Verbal progress will remain separate, while achievements and research work can contribute to a common academic profile as this product develops.</div>
        </div>
      </main>
    </>
  );
}
