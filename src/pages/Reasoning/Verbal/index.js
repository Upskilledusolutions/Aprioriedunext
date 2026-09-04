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

export default function VerbalTrack() {
  return (
    <>
      <Head><title>Verbal Track | Reasoning & Academic Skills</title><meta name="description" content="Build verbal reasoning, critical reading, analytical writing and research skills." /></Head>
      <main style={{ minHeight: "80vh", padding: "48px 20px 70px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Link href="/Reasoning" style={{ color: "#667085", textDecoration: "none", fontWeight: 600 }}>← Back to Reasoning Dashboard</Link>
          <p style={{ marginTop: 35, color: "#667085", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 14 }}>Verbal Track</p>
          <h1 style={{ fontSize: "clamp(34px,5vw,54px)", lineHeight: 1.08, color: "#172033", margin: "10px 0 16px" }}>Read deeply. Argue clearly. Write with purpose.</h1>
          <p style={{ maxWidth: 760, fontSize: 18, lineHeight: 1.65, color: "#596579", marginBottom: 40 }}>A six-stage pathway from verbal reasoning and critical reading toward analytical writing, research and publication.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18 }}>
            {stages.map(([number, title, text]) => (
              <section key={number} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 18, padding: 26, minHeight: 190, boxShadow: "0 8px 25px rgba(16,24,40,.05)" }}>
                <div style={{ color: "#667085", fontWeight: 800, fontSize: 13, marginBottom: 14 }}>STAGE {number}</div>
                <h2 style={{ color: "#172033", fontSize: 21, margin: "0 0 10px" }}>{title}</h2>
                <p style={{ color: "#667085", lineHeight: 1.6, margin: 0 }}>{text}</p>
              </section>
            ))}
          </div>
          <div style={{ marginTop: 28, padding: 22, borderRadius: 16, background: "#eef2ff", color: "#344054", lineHeight: 1.6 }}><strong>Coming next:</strong> structured reading, writing, argument and research activities will be added to each stage without changing the existing Foreign Languages product.</div>
        </div>
      </main>
    </>
  );
}
