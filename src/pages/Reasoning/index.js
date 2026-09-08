import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";

const styles = {
  page: { minHeight: "80vh", padding: "52px 20px 80px", background: "var(--surface)" },
  wrapper: { maxWidth: "1150px", margin: "0 auto" },
  back: { display: "inline-block", color: "var(--muted)", textDecoration: "none", fontWeight: 600, marginBottom: 28 },
  hero: { display: "grid", gridTemplateColumns: "minmax(0, 1.25fr) minmax(280px, .75fr)", gap: 36, alignItems: "stretch", marginBottom: 42 },
  heroCopy: { padding: "12px 0" },
  eyebrow: { color: "var(--blue)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13, marginBottom: 12 },
  title: { fontSize: "clamp(36px, 5vw, 58px)", lineHeight: 1.06, margin: "0 0 16px", color: "var(--text)", fontWeight: 700 },
  intro: { maxWidth: 760, color: "var(--muted)", fontSize: 18, lineHeight: 1.7, margin: 0 },
  image: { minHeight: 280, borderRadius: 24, overflow: "hidden", background: "linear-gradient(135deg, rgba(0,0,37,.92), rgba(227,80,61,.78)), url('https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1000&q=85') center/cover" },
  imageCaption: { height: "100%", display: "flex", alignItems: "flex-end", padding: 26, color: "#fff", fontWeight: 700, fontSize: 17, lineHeight: 1.45 },
  journey: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 10, marginBottom: 38 },
  stage: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 12, padding: "14px 12px", textAlign: "center", fontWeight: 700, color: "var(--text)" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 },
  card: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: 30, boxShadow: "0 12px 35px rgba(0,0,37,.07)" },
  icon: { width: 54, height: 54, display: "grid", placeItems: "center", borderRadius: 14, background: "rgba(227,80,61,.10)", color: "var(--blue)", fontSize: 27, fontWeight: 800, marginBottom: 18 },
  cardTitle: { fontSize: 28, margin: "0 0 12px", color: "var(--text)" },
  text: { color: "var(--muted)", lineHeight: 1.6, minHeight: 78 },
  list: { color: "#475467", lineHeight: 1.9, paddingLeft: 20 },
  button: { display: "inline-block", marginTop: 14, padding: "13px 18px", borderRadius: 8, background: "var(--blue)", color: "#fff", textDecoration: "none", fontWeight: 700 },
  note: { marginTop: 30, padding: 22, borderRadius: 16, background: "rgba(0,59,147,.07)", border: "1px solid rgba(0,59,147,.12)", color: "var(--text)", lineHeight: 1.6 }
};

export default function ReasoningDashboard() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const canEnterReasoning = Boolean(isAuthenticated && user?.userId);
  const quantitativeHref = canEnterReasoning ? "/Reasoning/Quantitative" : "/Auth";
  const verbalHref = canEnterReasoning ? "/Reasoning/Verbal" : "/Auth";

  return (
    <>
      <Head><title>Reasoning & Academic Skills | Upskilleduonline</title><meta name="description" content="Build reasoning skills, mathematical thinking, critical reading, academic writing and research skills." /></Head>
      <main style={styles.page}>
        <div style={styles.wrapper}>
          <Link href="/ProductSelection" style={styles.back}>← Choose another product</Link>
          <div style={styles.hero}>
            <div style={styles.heroCopy}>
              <div style={styles.eyebrow}>Reasoning & Academic Skills{user?.name ? ` · Welcome ${user.name}` : ""}</div>
              <h1 style={styles.title}>Build reasoning skills, not test-prep skills.</h1>
              <p style={styles.intro}>Develop the ability to solve unfamiliar problems, read critically, communicate ideas clearly and progress toward advanced academic work.</p>
            </div>
            <div style={styles.image} aria-label="Mathematical reasoning and academic study">
              <div style={styles.imageCaption}>Think deeply. Solve unfamiliar problems. Build work you can be proud of.</div>
            </div>
          </div>
          <div style={styles.journey}>{["Foundation", "Challenge", "Advanced Thinking", "Achievement", "Research"].map((stage) => <div key={stage} style={styles.stage}>{stage}</div>)}</div>
          <div style={styles.grid}>
            <section style={styles.card}>
              <div style={styles.icon}>∑</div>
              <h2 style={styles.cardTitle}>Quantitative Track</h2>
              <p style={styles.text}>From foundational quantitative reasoning to Olympiad problem solving, proof and mathematical research.</p>
              <ul style={styles.list}><li>Foundation Quantitative & Reasoning</li><li>Advanced Problem Solving</li><li>Mathematical Thinking</li><li>Math Olympiad</li><li>Proof & Advanced Mathematics</li><li>Mathematical Research</li></ul>
              <Link href={quantitativeHref} style={styles.button}>Enter Quantitative Track</Link>
            </section>
            <section style={styles.card}>
              <div style={styles.icon}>Aa</div>
              <h2 style={styles.cardTitle}>Verbal Track</h2>
              <p style={styles.text}>Develop critical reading, argument, analytical writing, essay skills and research communication.</p>
              <ul style={styles.list}><li>Foundation Verbal & Reasoning</li><li>Critical Reading & Argument</li><li>Analytical & Scholarly Writing</li><li>Essay Competitions</li><li>Research Skills</li><li>Research Writing & Publication</li></ul>
              <Link href={verbalHref} style={styles.button}>Enter Verbal Track</Link>
            </section>
          </div>
          <div style={styles.note}><strong>Your academic profile will grow with you.</strong> Quantitative and Verbal progress will remain separate, while achievements and research work can contribute to a common academic profile as this product develops.</div>
        </div>
      </main>
    </>
  );
}
