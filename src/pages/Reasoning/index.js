import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";

const styles = {
  page: { minHeight: "80vh", padding: "60px 20px", background: "#f7f9fc" },
  wrapper: { maxWidth: "1100px", margin: "0 auto" },
  back: { color: "#667085", textDecoration: "none", fontWeight: 600 },
  eyebrow: { marginTop: "35px", fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#667085" },
  title: { fontSize: "clamp(34px, 5vw, 56px)", lineHeight: 1.08, margin: "10px 0 16px", color: "#172033" },
  intro: { maxWidth: "760px", fontSize: "18px", lineHeight: 1.65, color: "#596579", marginBottom: "42px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "18px" },
  card: { padding: "26px", background: "#fff", border: "1px solid #e5e7eb", borderRadius: "18px", minHeight: "180px" },
  cardTitle: { margin: "0 0 10px", color: "#172033", fontSize: "22px" },
  text: { margin: 0, color: "#667085", lineHeight: 1.6 },
};

export default function Reasoning() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Head>
        <title>Reasoning & Academic Skills | Upskilleduonline</title>
        <meta name="description" content="Build reasoning skills, mathematical thinking, critical reading, analytical writing and research capability." />
      </Head>
      <main style={styles.page}>
        <div style={styles.wrapper}>
          <Link href="/ProductSelection" style={styles.back}>← Choose another product</Link>
          <div style={styles.eyebrow}>Reasoning & Academic Skills</div>
          <h1 style={styles.title}>Build reasoning skills, not test-prep skills.</h1>
          <p style={styles.intro}>
            Welcome{user?.name ? `, ${user.name}` : ""}. This is the new academic learning path for students who want to develop deeper quantitative and verbal reasoning, advanced problem solving and research capability.
          </p>

          <div style={styles.grid}>
            <section style={styles.card}><h2 style={styles.cardTitle}>Quantitative Track</h2><p style={styles.text}>Foundation reasoning → advanced problem solving → mathematical thinking → Olympiad → proof and advanced mathematics → research.</p></section>
            <section style={styles.card}><h2 style={styles.cardTitle}>Verbal Track</h2><p style={styles.text}>Foundation reasoning → critical reading and argument → analytical writing → essay competitions → research skills → research writing.</p></section>
            <section style={styles.card}><h2 style={styles.cardTitle}>Research & Achievement</h2><p style={styles.text}>Develop the ability to investigate questions, communicate ideas and build an academic portfolio over time.</p></section>
          </div>
        </div>
      </main>
    </>
  );
}
