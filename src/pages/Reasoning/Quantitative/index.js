import Head from "next/head";
import Link from "next/link";
import { getActivities } from "../../../Data/Reasoning/activities";
import { REASONING_LEVELS } from "../../../Data/Reasoning/curriculum";

const stages = [
  ["01", "Foundation Quantitative & Reasoning", "Build number sense, patterns, logic and core problem-solving habits."],
  ["02", "Advanced Problem Solving", "Learn strategies for unfamiliar, multi-step problems."],
  ["03", "Mathematical Thinking", "Move from calculating answers to explaining why methods work."],
  ["04", "Math Olympiad", "Explore challenging competition-style problems and creative solutions."],
  ["05", "Proof & Advanced Mathematics", "Develop rigorous reasoning, proof and higher-level mathematical ideas."],
  ["06", "Mathematical Research", "Learn how to ask mathematical questions, investigate and communicate findings."]
];

const card = { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 26, minHeight: 190, boxShadow: "0 10px 30px rgba(0,0,37,.06)" };
const button = { display: "inline-block", marginTop: 16, padding: "11px 16px", borderRadius: 10, background: "var(--blue)", color: "#fff", textDecoration: "none", fontWeight: 800 };

export default function QuantitativeTrack() {
  const pilotActivities = getActivities({ track: "quantitative", levelId: "L1", stageId: "S1" });

  return (
    <>
      <Head><title>Quantitative Skills | Reasoning & Academic Skills</title><meta name="description" content="Build quantitative reasoning skills from foundation through mathematical research." /></Head>
      <main style={{ minHeight: "80vh", padding: "52px 20px 80px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 1150, margin: "0 auto" }}>
          <Link href="/Reasoning" style={{ color: "var(--muted)", textDecoration: "none", fontWeight: 600 }}>← Back to Reasoning Skills</Link>
          <div style={{ marginTop: 34, maxWidth: 800 }}>
            <p style={{ color: "var(--blue)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13, marginBottom: 12 }}>Quantitative Skills</p>
            <h1 style={{ fontSize: "clamp(36px,5vw,58px)", lineHeight: 1.06, margin: "0 0 16px" }}>Think mathematically. Solve unfamiliar problems.</h1>
            <p style={{ fontSize: 18, lineHeight: 1.7, color: "var(--muted)", margin: 0 }}>A six-stage pathway from strong quantitative foundations toward Olympiad problem solving, proof and research.</p>
          </div>

          <section style={{ marginTop: 38 }}>
            <h2 style={{ fontSize: 28, marginBottom: 8 }}>Learning levels</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>Each level is anchored to its grade and grows from Explore to Extend with incremental difficulty.</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12, marginTop: 18 }}>
              {REASONING_LEVELS.map((level) => <div key={level.id} style={{ padding: 16, borderRadius: 12, background: "var(--card)", border: "1px solid var(--border)" }}><strong>{level.label}</strong><div style={{ marginTop: 6, color: "var(--muted)", fontSize: 14 }}>Explore 50% · Extend 50%</div></div>)}
            </div>
          </section>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 18, marginTop: 40 }}>
            {stages.map(([number, title, text]) => <section key={number} style={card}><div style={{ color: "var(--blue)", fontWeight: 800, fontSize: 13, marginBottom: 14 }}>STAGE {number}</div><h2 style={{ fontSize: 21, margin: "0 0 10px" }}>{title}</h2><p style={{ color: "var(--muted)", lineHeight: 1.6, margin: 0 }}>{text}</p></section>)}
          </div>

          <section style={{ marginTop: 40, padding: 26, borderRadius: 18, background: "var(--card)", border: "1px solid var(--border)" }}>
            <p style={{ color: "var(--blue)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em", fontSize: 13 }}>Pilot now available</p>
            <h2 style={{ margin: "8px 0" }}>Level 1 · Foundation · Stage 1</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>Start with number patterns. Explore introduces the idea; Extend raises the reasoning challenge while staying anchored to Grade 3.</p>
            <div style={{ display: "grid", gap: 12, marginTop: 18 }}>
              {pilotActivities.map((activity) => <div key={activity.id} style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", flexWrap: "wrap", padding: 16, borderRadius: 12, border: "1px solid var(--border)" }}><div><strong>{activity.title}</strong><div style={{ color: "var(--muted)", marginTop: 4 }}>{activity.description}</div></div><Link href={`/Reasoning/Activity/${activity.id}`} style={button}>Start activity</Link></div>)}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
