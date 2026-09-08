import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { getActivityById } from "../../../Data/Reasoning/activities";
import { getQuestionById } from "../../../Data/Reasoning/questionBank";
import { completeReasoningActivity } from "../../../utils/reasoningProgress";

export default function ReasoningActivity() {
  const router = useRouter();
  const activity = getActivityById(router.query.activityId);
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  if (!router.isReady) return null;
  if (!activity) return <main style={{ padding: 40 }}>Activity not found.</main>;

  const question = getQuestionById(activity.questionIds[0]);
  const correct = selected === question.answer;

  function submit() {
    setSubmitted(true);
    if (typeof window !== "undefined") {
      let userId = "guest";
      try {
        const rawUser = window.localStorage.getItem("user");
        const user = rawUser ? JSON.parse(rawUser) : null;
        userId = user?.id || user?._id || user?.email || "guest";
      } catch (error) {
        // Guest progress remains available if the auth object is unavailable.
      }
      completeReasoningActivity(userId, activity.track, activity.id, correct ? 100 : 0);
    }
  }

  return (
    <>
      <Head><title>{activity.title} | Reasoning</title></Head>
      <main style={{ minHeight: "80vh", padding: "48px 20px 80px", background: "var(--surface)" }}>
        <div style={{ maxWidth: 850, margin: "0 auto" }}>
          <Link href={`/Reasoning/${activity.track === "quantitative" ? "Quantitative" : "Verbal"}`} style={{ color: "var(--muted)", textDecoration: "none", fontWeight: 600 }}>← Back to {activity.track === "quantitative" ? "Quantitative" : "Verbal"}</Link>
          <div style={{ marginTop: 32 }}>
            <div style={{ color: "var(--blue)", fontWeight: 800, textTransform: "uppercase", letterSpacing: ".08em", fontSize: 13 }}>{activity.half} · Level 1 · Stage 1</div>
            <h1 style={{ fontSize: "clamp(34px,5vw,52px)", margin: "12px 0" }}>{activity.title}</h1>
            <p style={{ color: "var(--muted)", lineHeight: 1.7, fontSize: 18 }}>{activity.description}</p>
          </div>

          <section style={{ marginTop: 30, padding: 28, borderRadius: 18, background: "var(--card)", border: "1px solid var(--border)" }}>
            <div style={{ fontSize: 13, color: "var(--muted)", marginBottom: 10 }}>Time per question: {question.timeSeconds} seconds</div>
            <h2 style={{ fontSize: 24, lineHeight: 1.4 }}>{question.question}</h2>
            <div style={{ display: "grid", gap: 12, marginTop: 22 }}>
              {question.options.map((option) => (
                <button key={option} type="button" onClick={() => !submitted && setSelected(option)} style={{ textAlign: "left", padding: "15px 18px", borderRadius: 12, border: `2px solid ${selected === option ? "var(--blue)" : "var(--border)"}`, background: selected === option ? "rgba(0,59,147,.07)" : "var(--card)", color: "var(--text)", cursor: submitted ? "default" : "pointer", fontSize: 16 }}>
                  {option}
                </button>
              ))}
            </div>
            <button type="button" disabled={!selected || submitted} onClick={submit} style={{ marginTop: 24, padding: "13px 20px", border: 0, borderRadius: 10, background: "var(--blue)", color: "#fff", fontWeight: 800, cursor: selected && !submitted ? "pointer" : "not-allowed", opacity: selected && !submitted ? 1 : .55 }}>Check answer</button>
            {submitted && <div style={{ marginTop: 22, padding: 18, borderRadius: 12, background: "rgba(0,59,147,.07)" }}><strong>{correct ? "Correct." : `Not quite. The answer is ${question.answer}.`}</strong><p style={{ marginBottom: 0, lineHeight: 1.6 }}>{question.explanation}</p></div>}
          </section>
        </div>
      </main>
    </>
  );
}
