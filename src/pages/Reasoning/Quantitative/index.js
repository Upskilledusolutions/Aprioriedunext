import Head from "next/head";
import Link from "next/link";

const stages = [
  ["01", "Foundation Quantitative & Reasoning", "Build number sense, patterns, logic and core problem-solving habits."],
  ["02", "Advanced Problem Solving", "Learn strategies for unfamiliar, multi-step problems."],
  ["03", "Mathematical Thinking", "Move from calculating answers to explaining why methods work."],
  ["04", "Math Olympiad", "Explore challenging competition-style problems and creative solutions."],
  ["05", "Proof & Advanced Mathematics", "Develop rigorous reasoning, proof and higher-level mathematical ideas."],
  ["06", "Mathematical Research", "Learn how to ask mathematical questions, investigate and communicate findings."]
];

export default function QuantitativeTrack() {
  return (
    <>
      <Head><title>Quantitative Track | Reasoning & Academic Skills</title><meta name="description" content="Build quantitative reasoning from foundation through mathematical research." /></Head>
      <main style={{ minHeight: "80vh", padding: "48px 20px 70px", background: "#f7f9fc" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <Link href="/Reasoning" style={{ color: "#667085", textDecoration: "none", fontWeight: 600 }}>← Back to Reasoning Dashboard</Link>
          <p style={{ marginTop: 35, color: "#667085", fontWeight: 700, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 14 }}>Quantitative Track</p>
          <h1 style={{ fontSize: "clamp(34px,5vw,54px)", lineHeight: 1.08, color: "#172033", margin: "10px 0 16px" }}>Think mathematically. Solve unfamiliar problems.</h1>
          <p style={{ maxWidth: 760, fontSize: 18, lineHeight: 1.65, color: "#596579", marginBottom: 40 }}>A six-stage pathway that takes a learner from strong quantitative foundations toward Olympiad problem solving, proof and research.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18 }}>
            {stages.map(([number, title, text]) => (
              <section key={number} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 18, padding: 26, minHeight: 190, boxShadow: "0 8px 25px rgba(16,24,40,.05)" }}>
                <div style={{ color: "#667085", fontWeight: 800, fontSize: 13, marginBottom: 14 }}>STAGE {number}</div>
                <h2 style={{ color: "#172033", fontSize: 21, margin: "0 0 10px" }}>{title}</h2>
                <p style={{ color: "#667085", lineHeight: 1.6, margin: 0 }}>{text}</p>
              </section>
            ))}
          </div>
          <div style={{ marginTop: 28, padding: 22, borderRadius: 16, background: "#eef2ff", color: "#344054", lineHeight: 1.6 }}><strong>Coming next:</strong> structured lessons, challenging problems, activities and progress tracking will be added to each stage without changing the existing Foreign Languages product.</div>
        </div>
      </main>
    </>
  );
}
