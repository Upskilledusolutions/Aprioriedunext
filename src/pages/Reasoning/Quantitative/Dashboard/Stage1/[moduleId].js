import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getStage1Module } from "../../../../../Data/Reasoning/stage1Modules";
import { completeReasoningModule, readReasoningProgress } from "../../../../../utils/reasoningProgress";

export default function QuantitativeModule() {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [completed, setCompleted] = useState(false);
  const module = getStage1Module("quantitative", router.query.moduleId);

  useEffect(() => {
    if (!router.isReady) return;
    if (!isAuthenticated || !user?.userId) router.replace({ pathname: "/Auth", query: { redirect: router.asPath } });
    else setCompleted(Boolean(readReasoningProgress(user.userId).quantitative?.completedModules?.[module?.id]));
  }, [router.isReady, router, isAuthenticated, user, module?.id]);

  if (!router.isReady || !isAuthenticated || !user?.userId) return null;
  if (!module) return <main style={{ padding: 40 }}>Module not found.</main>;

  const markComplete = () => {
    completeReasoningModule(user.userId, "quantitative", module.id, undefined);
    setCompleted(true);
  };

  return <>
    <Head><title>{module.title} | Quantitative Skills</title></Head>
    <main style={{ minHeight: "80vh", padding: "48px 20px 80px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 850, margin: "0 auto" }}>
        <Link href="/Reasoning/Quantitative/Dashboard/Stage1" style={{ color: "var(--muted)", textDecoration: "none", fontWeight: 700 }}>← Back to Stage 1</Link>
        <p style={{ marginTop: 32, color: "var(--blue)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em", fontSize: 13 }}>Level 1 · Grade 3 · Module {module.id.replace("Module", "")}</p>
        <h1 style={{ fontSize: "clamp(36px,5vw,54px)", lineHeight: 1.08, margin: "10px 0" }}>{module.title}</h1>
        <p style={{ color: "var(--muted)", fontSize: 19, lineHeight: 1.7 }}>{module.focus}</p>
        <section style={{ marginTop: 30, padding: 28, borderRadius: 18, background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2>Learn</h2><p style={{ lineHeight: 1.75, color: "var(--muted)" }}>{module.lesson}</p>
          <h2 style={{ marginTop: 28 }}>Worked example</h2><p style={{ lineHeight: 1.75, color: "var(--muted)" }}>{module.example}</p>
          <h2 style={{ marginTop: 28 }}>Try it yourself</h2><p style={{ lineHeight: 1.75, color: "var(--muted)" }}>{module.practice}</p>
          <div style={{ marginTop: 30, padding: 18, borderRadius: 12, background: "rgba(0,59,147,.07)" }}><strong>Learning goal:</strong> Explain your reasoning, not just your final answer.</div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            <Link href="/Reasoning/Quantitative/Dashboard/Stage1" style={{ padding: "12px 18px", borderRadius: 10, border: "1px solid var(--border)", color: "var(--text)", textDecoration: "none", fontWeight: 800 }}>Back to modules</Link>
            {!completed && <button type="button" onClick={markComplete} style={{ padding: "12px 18px", border: 0, borderRadius: 10, background: "var(--blue)", color: "#fff", fontWeight: 800 }}>Mark module complete</button>}
            {completed && <span style={{ padding: "12px 18px", borderRadius: 10, background: "rgba(0,59,147,.08)", color: "var(--blue)", fontWeight: 800 }}>Module completed</span>}
          </div>
        </section>
      </div>
    </main>
  </>;
}
