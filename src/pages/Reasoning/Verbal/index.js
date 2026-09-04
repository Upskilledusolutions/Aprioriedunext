import Head from "next/head";
import Link from "next/link";

const stages = [
  ["01", "Foundation Verbal & Reasoning", "Build clear comprehension, vocabulary in context and disciplined reasoning habits."],
  ["02", "Critical Reading & Argument", "Identify claims, evidence, assumptions, structure and weaknesses in arguments."],
  ["03", "Analytical & Scholarly Writing", "Turn ideas into clear, structured explanations supported by evidence."],
  ["04", "Essay Competitions", "Develop original arguments, persuasive structure and competition-ready essays."],
  ["05", "Research Skills", "Learn to ask questions, evaluate sources and build evidence-based investigations."],
  ["06", "Research Writing & Publication", "Communicate research clearly and develop work toward publication."]
];

const card = { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 26, minHeight: 190, boxShadow: "0 10px 30px rgba(0,0,37,.06)" };

export default function VerbalTrack() {
  return (
    <>
      <Head><title>Verbal Track | Reasoning & Academic Skills</title><meta name="description" content="Build verbal reasoning, critical reading, analytical writing and research skills." /></Head>
      <main style={{ minHeight: "80vh", padding: "52px 20px 80px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <Link href="/Reasoning" style={{ color: "var(--muted)", textDecoration: "none", fontWeight: 600 }}>← Back to Reasoning Dashboard</Link>
          <div style={{ marginTop: 34, maxWidth: 800 }}>
            <p style={{ color: "var(--blue)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13, marginBottom: 12 }}>Verbal Track</p>
            <h1 style={{ fontSize: "clamp(36px,5vw,58px)", lineHeight: 1.06, margin: "0 0 16px" }}>Read deeply. Argue clearly. Write with purpose.</h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>A six-stage pathway from verbal reasoning and critical reading toward analytical writing, research and publication.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18, marginTop: 40 }}>
            {stages.map(([number, title, text]) => <section key={number} style={card}><div style={{ color: "var(--blue)", fontWeight: 800, fontSize: 13, marginBottom: 14 }}>STAGE {number}</div><h2 style={{ fontSize: 21, margin: "0 0 10px" }}>{title}</h2><p style={{ color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{text}</p></section>)}
          </div>
          <div style={{ marginTop: 28, padding: 22, borderRadius: 16, background: "rgba(0,59,147,.07)", border: "1px solid rgba(0,59,147,.12)", color: "var(--text)", lineHeight: 1.6 }}><strong>Coming next:</strong> structured reading, writing, argument and research activities will be added to each stage without changing the existing Foreign Languages product.</div>
        </div>
      </main>
    </>
  );
}
