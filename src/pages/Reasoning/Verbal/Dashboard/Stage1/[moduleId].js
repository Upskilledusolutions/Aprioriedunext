import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getActivityById } from "../../../../../Data/Reasoning/activities";
import { getStage1Module } from "../../../../../Data/Reasoning/stage1Modules";
import { completeReasoningModule, readReasoningProgress } from "../../../../../utils/reasoningProgress";

export default function VerbalModule() {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [completed, setCompleted] = useState(false);
  const module = getStage1Module("verbal", router.query.moduleId);
  const activities = module?.activityIds?.map(getActivityById).filter(Boolean) || [];

  useEffect(() => {
    if (!router.isReady) return;
    if (!isAuthenticated || !user?.userId) router.replace({ pathname: "/Auth", query: { redirect: router.asPath } });
    else if (module) setCompleted(Boolean(readReasoningProgress(user.userId).verbal?.completedModules?.[module.id]));
  }, [router.isReady, router, isAuthenticated, user, module?.id]);

  if (!router.isReady || !isAuthenticated || !user?.userId) return null;
  if (!module) return <main style={{ padding: 40 }}>Module not found.</main>;

  const progress = readReasoningProgress(user.userId);
  const markComplete = () => {
    completeReasoningModule(user.userId, "verbal", module.id, undefined);
    setCompleted(true);
  };

  return <>
    <Head><title>{module.title} | Verbal Skills</title></Head>
    <main style={{ minHeight: "80vh", padding: "48px 20px 80px", background: "var(--surface)" }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <Link href="/Reasoning/Verbal/Dashboard/Stage1" style={{ color: "var(--muted)", textDecoration: "none", fontWeight: 700 }}>← Back to Stage 1</Link>
        <p style={{ marginTop: 32, color: "var(--blue)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em", fontSize: 13 }}>Level 1 · Grade 3 · Module {module.id.replace("Module", "")}</p>
        <h1 style={{ fontSize: "clamp(36px,5vw,54px)", lineHeight: 1.08, margin: "10px 0" }}>{module.title}</h1>
        <p style={{ color: "var(--muted)", fontSize: 19, lineHeight: 1.7 }}>{module.focus}</p>
        <section style={{ marginTop: 30, padding: 28, borderRadius: 18, background: "var(--card)", border: "1px solid var(--border)" }}>
          <h2 style={{ color: "var(--text)" }}>Learn</h2><p style={{ lineHeight: 1.75, color: "var(--muted)" }}>{module.lesson}</p>
          <h2 style={{ marginTop: 28, color: "var(--text)" }}>Worked example</h2><p style={{ lineHeight: 1.75, color: "var(--muted)" }}>{module.example}</p>
          <h2 style={{ marginTop: 28, color: "var(--text)" }}>Try it yourself</h2><p style={{ lineHeight: 1.75, color: "var(--muted)" }}>{module.practice}</p>
          <div style={{ marginTop: 30, padding: 18, borderRadius: 12, background: "rgba(0,59,147,.07)", color: "var(--text)" }}><strong>Learning goal:</strong> Explain your reasoning, not just your final answer.</div>

          <section style={{ marginTop: 32 }}>
            <h2 style={{ color: "var(--text)" }}>Practice activities</h2>
            <p style={{ color: "var(--muted)", lineHeight: 1.6 }}>Use these activities to apply this module's ideas. Explore builds the foundation; Extend adds challenge while staying within Grade 3.</p>
            {activities.length ? activities.map((activity) => {
              const done = Boolean(progress.verbal?.completedActivities?.[activity.id]);
              const score = progress.verbal?.scores?.[activity.id];
              return <div key={activity.id} style={{ marginTop: 12, padding: 16, borderRadius: 12, border: "1px solid var(--border)" }}><div style={{ color: "var(--blue)", fontSize: 12, fontWeight: 800, textTransform: "uppercase" }}>{activity.half} · {activity.title}</div><div style={{ color: "var(--muted)", marginTop: 5, lineHeight: 1.5 }}>{activity.description}</div><div style={{ marginTop: 10, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}><Link href={`/Reasoning/Activity/${activity.id}`} style={{ padding: "10px 14px", borderRadius: 9, background: "var(--blue)", color: "#fff", textDecoration: "none", fontWeight: 800 }}>{done ? "Review activity" : "Start activity"}</Link>{done && <span style={{ color: "var(--blue)", fontWeight: 800, fontSize: 13 }}>Completed{score !== undefined ? ` · Score ${score}%` : ""}</span>}</div></div>;
            }) : <p style={{ color: "var(--muted)" }}>Practice activities are being added to this module.</p>}
          </section>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 30 }}>
            <Link href="/Reasoning/Verbal/Dashboard/Stage1" style={{ padding: "12px 18px", borderRadius: 10, border: "1px solid var(--border)", color: "var(--text)", textDecoration: "none", fontWeight: 800 }}>Back to modules</Link>
            {!completed && <button type="button" onClick={markComplete} style={{ padding: "12px 18px", border: 0, borderRadius: 10, background: "var(--blue)", color: "#fff", fontWeight: 800 }}>Mark module complete</button>}
            {completed && <span style={{ padding: "12px 18px", borderRadius: 10, background: "rgba(0,59,147,.08)", color: "var(--blue)", fontWeight: 800 }}>Module completed</span>}
          </div>
        </section>
      </div>
    </main>
  </>;
}
