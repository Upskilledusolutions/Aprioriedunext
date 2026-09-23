import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { readReasoningProgress } from "../../../utils/reasoningProgress";
import { getStage1ReasoningAnalytics } from "../../../utils/reasoningAnalytics";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKENDURL;

const styles = {
  page: { minHeight: "80vh", padding: "48px 20px 80px", background: "var(--surface)" },
  wrapper: { maxWidth: 1180, margin: "0 auto" },
  back: { color: "var(--muted)", textDecoration: "none", fontWeight: 700 },
  eyebrow: { margin: "28px 0 10px", color: "var(--blue)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13 },
  title: { margin: 0, color: "var(--text)", fontSize: "clamp(34px, 5vw, 54px)", lineHeight: 1.07 },
  intro: { maxWidth: 820, margin: "14px 0 0", color: "var(--muted)", fontSize: 18, lineHeight: 1.7 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))", gap: 14, marginTop: 30 },
  card: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: 20 },
  label: { color: "var(--muted)", fontSize: 13, fontWeight: 700 },
  value: { color: "var(--text)", fontSize: 28, fontWeight: 800, marginTop: 7 },
  section: { marginTop: 34 },
  sectionTitle: { color: "var(--text)", margin: "0 0 6px", fontSize: 24 },
  sectionText: { color: "var(--muted)", lineHeight: 1.6, margin: "0 0 16px" },
  progress: { height: 9, borderRadius: 99, background: "#e7ecf3", overflow: "hidden", marginTop: 12 },
  fill: { height: "100%", background: "var(--blue)", borderRadius: 99 },
  split: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 18 },
  panel: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 24 },
  panelTitle: { color: "var(--text)", margin: 0, fontSize: 21 },
  row: { display: "flex", justifyContent: "space-between", gap: 16, alignItems: "center", padding: "12px 0", borderBottom: "1px solid var(--border)" },
  small: { color: "var(--muted)", fontSize: 13, lineHeight: 1.5 },
  tableWrap: { overflowX: "auto", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18 },
  table: { width: "100%", minWidth: 720, borderCollapse: "collapse" },
  th: { textAlign: "left", padding: "13px 15px", color: "var(--muted)", fontSize: 12, letterSpacing: ".04em", textTransform: "uppercase", borderBottom: "1px solid var(--border)" },
  td: { padding: "13px 15px", color: "var(--text)", fontSize: 14, borderBottom: "1px solid var(--border)" },
  badge: { display: "inline-block", padding: "5px 9px", borderRadius: 99, fontSize: 11, fontWeight: 800, background: "rgba(0,59,147,.08)", color: "var(--blue)" },
  notice: { marginTop: 16, padding: 16, borderRadius: 12, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--muted)", lineHeight: 1.6 },
};

function percent(value) {
  return value === null || value === undefined ? "—" : `${value}%`;
}

function safeAverage(values) {
  const valid = values.filter((value) => Number.isFinite(value));
  return valid.length ? Math.round(valid.reduce((sum, value) => sum + value, 0) / valid.length) : null;
}

function formatSeconds(value) {
  return value === null || value === undefined ? "—" : `${value}s`;
}

function normalizeAttempt(value) {
  if (!value || typeof value !== "object") return null;
  const status = value.responseStatus === "answered" || value.responseStatus === "expired"
    ? value.responseStatus
    : null;
  const isCorrect = typeof value.isCorrect === "boolean" ? value.isCorrect : null;
  const responseTimeSeconds = Number(value.responseTimeSeconds);

  return {
    ...value,
    status,
    isCorrect,
    responseTimeSeconds: Number.isFinite(responseTimeSeconds) ? responseTimeSeconds : null,
  };
}

function groupPerformance(attempts, getKey) {
  const groups = new Map();

  attempts.forEach((attempt) => {
    if (attempt.status !== "answered" || typeof attempt.isCorrect !== "boolean") return;
    const key = getKey(attempt) || "Unclassified";
    const current = groups.get(key) || { key, answered: 0, correct: 0, times: [] };
    current.answered += 1;
    if (attempt.isCorrect) current.correct += 1;
    if (Number.isFinite(attempt.responseTimeSeconds)) current.times.push(attempt.responseTimeSeconds);
    groups.set(key, current);
  });

  return Array.from(groups.values())
    .map((item) => ({
      ...item,
      accuracy: item.answered ? Math.round((item.correct / item.answered) * 100) : null,
      averageResponseTime: safeAverage(item.times),
    }))
    .sort((a, b) => (b.accuracy ?? -1) - (a.accuracy ?? -1) || b.answered - a.answered);
}

function getAttemptAnalytics(attempts) {
  const totalAttempts = attempts.length;
  const answered = attempts.filter((attempt) => attempt.status === "answered");
  const expired = attempts.filter((attempt) => attempt.status === "expired");
  const correct = answered.filter((attempt) => attempt.isCorrect === true);
  const responseTimes = attempts.map((attempt) => attempt.responseTimeSeconds).filter(Number.isFinite);

  const quantitative = attempts.filter((attempt) => attempt.track === "quantitative");
  const verbal = attempts.filter((attempt) => attempt.track === "verbal");

  const trackSummary = (trackAttempts) => {
    const trackAnswered = trackAttempts.filter((attempt) => attempt.status === "answered");
    const trackCorrect = trackAnswered.filter((attempt) => attempt.isCorrect === true);
    return {
      attempts: trackAttempts.length,
      answered: trackAnswered.length,
      expired: trackAttempts.filter((attempt) => attempt.status === "expired").length,
      accuracy: trackAnswered.length ? Math.round((trackCorrect.length / trackAnswered.length) * 100) : null,
      averageResponseTime: safeAverage(trackAttempts.map((attempt) => attempt.responseTimeSeconds).filter(Number.isFinite)),
    };
  };

  const byDifficulty = groupPerformance(attempts, (attempt) => attempt.difficulty);
  const byConcept = groupPerformance(attempts, (attempt) => attempt.concept || attempt.topicId);
  const byActivity = groupPerformance(attempts, (attempt) => attempt.activityId);

  const byHalf = {};
  ["explore", "extend"].forEach((half) => {
    byHalf[half] = groupPerformance(attempts.filter((attempt) => attempt.half === half), () => "all")[0] || {
      answered: 0,
      correct: 0,
      accuracy: null,
      averageResponseTime: null,
    };
  });

  const dates = new Map();
  attempts.forEach((attempt) => {
    if (!attempt.recordedAt) return;
    const date = new Date(attempt.recordedAt);
    if (Number.isNaN(date.getTime())) return;
    const key = date.toISOString().slice(0, 10);
    const current = dates.get(key) || { date: key, answered: 0, correct: 0, times: [], attempts: 0 };
    current.attempts += 1;
    if (attempt.status === "answered") {
      current.answered += 1;
      if (attempt.isCorrect === true) current.correct += 1;
    }
    if (Number.isFinite(attempt.responseTimeSeconds)) current.times.push(attempt.responseTimeSeconds);
    dates.set(key, current);
  });

  const growth = Array.from(dates.values())
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((item) => ({
      ...item,
      accuracy: item.answered ? Math.round((item.correct / item.answered) * 100) : null,
      averageResponseTime: safeAverage(item.times),
    }));

  const conceptRows = byConcept.filter((item) => item.answered >= 2);
  const strengths = [...conceptRows].sort((a, b) => (b.accuracy ?? -1) - (a.accuracy ?? -1) || b.answered - a.answered).slice(0, 3);
  const improvementAreas = [...conceptRows].sort((a, b) => (a.accuracy ?? 101) - (b.accuracy ?? 101) || b.answered - a.answered).slice(0, 3);

  return {
    totalAttempts,
    answered: answered.length,
    expired: expired.length,
    correct: correct.length,
    accuracy: answered.length ? Math.round((correct.length / answered.length) * 100) : null,
    averageResponseTime: safeAverage(responseTimes),
    quantitative: trackSummary(quantitative),
    verbal: trackSummary(verbal),
    byDifficulty,
    byConcept,
    byActivity,
    byHalf,
    growth,
    strengths,
    improvementAreas,
  };
}

function TrackPanel({ title, track }) {
  return (
    <section style={styles.panel}>
      <h2 style={styles.panelTitle}>{title}</h2>
      <div style={styles.row}><span>Stage 1 progress</span><strong>{track.percent}%</strong></div>
      <div style={{ ...styles.progress, marginTop: 2 }}><div style={{ ...styles.fill, width: `${track.percent}%` }} /></div>
      <div style={styles.row}><span>Modules completed</span><strong>{track.completedModules} / {track.totalModules}</strong></div>
      <div style={styles.row}><span>Activities completed</span><strong>{track.activityCompletion.completed} / {track.activityCompletion.total}</strong></div>
      <div style={styles.row}><span>Questions completed</span><strong>{track.activityCompletion.questionsCompleted}</strong></div>
      <div style={styles.row}><span>Average completed-activity score</span><strong>{percent(track.activityCompletion.averageScore)}</strong></div>
    </section>
  );
}

function AttemptTrackPanel({ title, track }) {
  return (
    <section style={styles.panel}>
      <h3 style={styles.panelTitle}>{title}</h3>
      <div style={styles.row}><span>Questions attempted</span><strong>{track.attempts}</strong></div>
      <div style={styles.row}><span>Answered</span><strong>{track.answered}</strong></div>
      <div style={styles.row}><span>Timed out</span><strong>{track.expired}</strong></div>
      <div style={styles.row}><span>Accuracy</span><strong>{percent(track.accuracy)}</strong></div>
      <div style={styles.row}><span>Average response time</span><strong>{formatSeconds(track.averageResponseTime)}</strong></div>
    </section>
  );
}

export default function ReasoningAnalytics() {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [progress, setProgress] = useState(null);
  const [attemptState, setAttemptState] = useState({ status: "idle", attempts: [], error: "" });

  useEffect(() => {
    if (!isAuthenticated && user === null) return;
    if (!user?.userId) {
      router.replace("/Auth");
      return;
    }

    setProgress(readReasoningProgress(user.userId));

    if (!BACKEND_URL) {
      setAttemptState({ status: "error", attempts: [], error: "Detailed question-attempt analytics are unavailable because the Reasoning backend URL is not configured." });
      return;
    }

    let cancelled = false;
    setAttemptState({ status: "loading", attempts: [], error: "" });

    fetch(`${BACKEND_URL}/api/reasoning/attempts?limit=200`, { credentials: "include" })
      .then(async (response) => {
        const data = await response.json().catch(() => null);
        if (!response.ok || !data?.success) {
          throw new Error(data?.message || "Unable to load Reasoning question-attempt history");
        }
        return Array.isArray(data.attempts) ? data.attempts.map(normalizeAttempt).filter(Boolean) : [];
      })
      .then((attempts) => {
        if (!cancelled) setAttemptState({ status: "ready", attempts, error: "" });
      })
      .catch((error) => {
        if (!cancelled) {
          console.error("Error loading Reasoning attempt analytics:", error);
          setAttemptState({ status: "error", attempts: [], error: error.message });
        }
      });

    return () => {
      cancelled = true;
    };
  }, [isAuthenticated, user, router]);

  const analytics = useMemo(
    () => (progress ? getStage1ReasoningAnalytics(progress) : null),
    [progress]
  );

  const attemptAnalytics = useMemo(
    () => getAttemptAnalytics(attemptState.attempts),
    [attemptState.attempts]
  );

  if (!router.isReady || !isAuthenticated || !user?.userId || !analytics) return null;

  const topicRows = [
    ...analytics.tracks.quantitative.topicPerformance.map((item) => ({ ...item, track: "Quantitative" })),
    ...analytics.tracks.verbal.topicPerformance.map((item) => ({ ...item, track: "Verbal" })),
  ];

  const activityRows = [
    ...analytics.tracks.quantitative.activityCompletion.items.map((item) => ({ ...item, track: "Quantitative" })),
    ...analytics.tracks.verbal.activityCompletion.items.map((item) => ({ ...item, track: "Verbal" })),
  ];

  return (
    <>
      <Head>
        <title>Reasoning Analytics | Upskilleduonline</title>
        <meta name="description" content="Cumulative Reasoning learning analytics." />
      </Head>
      <main style={styles.page}>
        <div style={styles.wrapper}>
          <Link href="/Reasoning/Dashboard" style={styles.back}>← Back to Reasoning Dashboard</Link>
          <p style={styles.eyebrow}>Reasoning Analytics · Cumulative learner record</p>
          <h1 style={styles.title}>Your Reasoning learning record</h1>
          <p style={styles.intro}>
            This view combines the existing Reasoning progress record with persisted question-attempt history. Quantitative and Verbal performance remains separate, and only recorded data is used.
          </p>

          <div style={styles.grid}>
            <div style={styles.card}><div style={styles.label}>Overall Stage 1 progress</div><div style={styles.value}>{analytics.overall.percent}%</div></div>
            <div style={styles.card}><div style={styles.label}>Modules completed</div><div style={styles.value}>{analytics.overall.completedModules} / {analytics.overall.totalModules}</div></div>
            <div style={styles.card}><div style={styles.label}>Activities completed</div><div style={styles.value}>{analytics.overall.activitiesCompleted} / {analytics.overall.activitiesTotal}</div></div>
            <div style={styles.card}><div style={styles.label}>Questions completed</div><div style={styles.value}>{analytics.overall.questionsCompleted}</div></div>
            <div style={styles.card}><div style={styles.label}>Average completed-activity score</div><div style={styles.value}>{percent(analytics.overall.averageActivityScore)}</div></div>
            <div style={styles.card}><div style={styles.label}>Persisted question attempts</div><div style={styles.value}>{attemptState.status === "ready" ? attemptAnalytics.totalAttempts : "…"}</div></div>
            <div style={styles.card}><div style={styles.label}>Question accuracy</div><div style={styles.value}>{attemptState.status === "ready" ? percent(attemptAnalytics.accuracy) : "…"}</div></div>
            <div style={styles.card}><div style={styles.label}>Average response time</div><div style={styles.value}>{attemptState.status === "ready" ? formatSeconds(attemptAnalytics.averageResponseTime) : "…"}</div></div>
          </div>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Quantitative and Verbal progress</h2>
            <p style={styles.sectionText}>Completion remains based on the existing activity/module progress record.</p>
            <div style={styles.split}>
              <TrackPanel title="Quantitative" track={analytics.tracks.quantitative} />
              <TrackPanel title="Verbal" track={analytics.tracks.verbal} />
            </div>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Question performance</h2>
            <p style={styles.sectionText}>This section uses only persisted answered and timed-out question records.</p>
            {attemptState.status === "ready" ? (
              <>
                <div style={styles.split}>
                  <AttemptTrackPanel title="Quantitative" track={attemptAnalytics.quantitative} />
                  <AttemptTrackPanel title="Verbal" track={attemptAnalytics.verbal} />
                </div>
                <div style={{ ...styles.split, marginTop: 18 }}>
                  <section style={styles.panel}>
                    <h3 style={styles.panelTitle}>Explore</h3>
                    <div style={styles.row}><span>Answered</span><strong>{attemptAnalytics.byHalf.explore.answered}</strong></div>
                    <div style={styles.row}><span>Accuracy</span><strong>{percent(attemptAnalytics.byHalf.explore.accuracy)}</strong></div>
                    <div style={styles.row}><span>Average response time</span><strong>{formatSeconds(attemptAnalytics.byHalf.explore.averageResponseTime)}</strong></div>
                  </section>
                  <section style={styles.panel}>
                    <h3 style={styles.panelTitle}>Extend</h3>
                    <div style={styles.row}><span>Answered</span><strong>{attemptAnalytics.byHalf.extend.answered}</strong></div>
                    <div style={styles.row}><span>Accuracy</span><strong>{percent(attemptAnalytics.byHalf.extend.accuracy)}</strong></div>
                    <div style={styles.row}><span>Average response time</span><strong>{formatSeconds(attemptAnalytics.byHalf.extend.averageResponseTime)}</strong></div>
                  </section>
                </div>
              </>
            ) : attemptState.status === "loading" ? (
              <div style={styles.notice}>Loading persisted question-attempt history…</div>
            ) : (
              <div style={styles.notice}>{attemptState.error}</div>
            )}
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Performance by difficulty</h2>
            <p style={styles.sectionText}>Difficulty groups are taken directly from the recorded question metadata.</p>
            {attemptState.status === "ready" && attemptAnalytics.byDifficulty.length ? (
              <div style={styles.tableWrap}>
                <table style={styles.table}>
                  <thead><tr><th style={styles.th}>Difficulty</th><th style={styles.th}>Answered</th><th style={styles.th}>Accuracy</th><th style={styles.th}>Avg. response time</th></tr></thead>
                  <tbody>{attemptAnalytics.byDifficulty.map((item) => <tr key={item.key}><td style={styles.td}>{item.key}</td><td style={styles.td}>{item.answered}</td><td style={styles.td}>{percent(item.accuracy)}</td><td style={styles.td}>{formatSeconds(item.averageResponseTime)}</td></tr>)}</tbody>
                </table>
              </div>
            ) : <div style={styles.notice}>Difficulty performance becomes available after persisted question attempts are recorded.</div>}
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Skill and concept performance</h2>
            <p style={styles.sectionText}>Results use the recorded concept, falling back to topic metadata when a concept is not present.</p>
            {attemptState.status === "ready" && attemptAnalytics.byConcept.length ? (
              <div style={styles.tableWrap}>
                <table style={styles.table}>
                  <thead><tr><th style={styles.th}>Concept / topic</th><th style={styles.th}>Answered</th><th style={styles.th}>Accuracy</th><th style={styles.th}>Avg. response time</th></tr></thead>
                  <tbody>{attemptAnalytics.byConcept.map((item) => <tr key={item.key}><td style={styles.td}>{item.key}</td><td style={styles.td}>{item.answered}</td><td style={styles.td}>{percent(item.accuracy)}</td><td style={styles.td}>{formatSeconds(item.averageResponseTime)}</td></tr>)}</tbody>
                </table>
              </div>
            ) : <div style={styles.notice}>Concept performance requires persisted answered attempts with concept or topic metadata.</div>}
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Strong areas and areas needing improvement</h2>
            <p style={styles.sectionText}>These summaries are calculated only from concept/topic groups with at least two answered attempts.</p>
            {attemptState.status === "ready" && (attemptAnalytics.strengths.length || attemptAnalytics.improvementAreas.length) ? (
              <div style={styles.split}>
                <section style={styles.panel}>
                  <h3 style={styles.panelTitle}>Strongest recorded areas</h3>
                  {attemptAnalytics.strengths.length ? attemptAnalytics.strengths.map((item) => <div key={item.key} style={styles.row}><span>{item.key}</span><strong>{item.accuracy}%</strong></div>) : <div style={styles.notice}>Not enough recorded data yet.</div>}
                </section>
                <section style={styles.panel}>
                  <h3 style={styles.panelTitle}>Areas needing more evidence</h3>
                  {attemptAnalytics.improvementAreas.length ? attemptAnalytics.improvementAreas.map((item) => <div key={item.key} style={styles.row}><span>{item.key}</span><strong>{item.accuracy}%</strong></div>) : <div style={styles.notice}>Not enough recorded data yet.</div>}
                </section>
              </div>
            ) : <div style={styles.notice}>These summaries appear after enough persisted answers exist to support a meaningful comparison.</div>}
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Activity performance</h2>
            <p style={styles.sectionText}>Activity scores remain the completion scores stored in the existing Reasoning progress record.</p>
            <div style={styles.tableWrap}>
              <table style={styles.table}>
                <thead><tr><th style={styles.th}>Track</th><th style={styles.th}>Activity</th><th style={styles.th}>Half</th><th style={styles.th}>Questions</th><th style={styles.th}>Score</th></tr></thead>
                <tbody>
                  {activityRows.map((item) => (
                    <tr key={`${item.track}-${item.id}`}>
                      <td style={styles.td}>{item.track}</td>
                      <td style={styles.td}>{item.title}</td>
                      <td style={styles.td}>{item.half}</td>
                      <td style={styles.td}>{item.completed ? item.questionCount : "—"}</td>
                      <td style={styles.td}>{item.score === null ? "Not completed" : `${item.score}%`}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Growth over time</h2>
            <p style={styles.sectionText}>Daily accuracy and response time are calculated from the recorded attempt timestamps.</p>
            {attemptState.status === "ready" && attemptAnalytics.growth.length ? (
              <div style={styles.tableWrap}>
                <table style={styles.table}>
                  <thead><tr><th style={styles.th}>Date</th><th style={styles.th}>Attempts</th><th style={styles.th}>Accuracy</th><th style={styles.th}>Avg. response time</th></tr></thead>
                  <tbody>{attemptAnalytics.growth.map((item) => <tr key={item.date}><td style={styles.td}>{item.date}</td><td style={styles.td}>{item.attempts}</td><td style={styles.td}>{percent(item.accuracy)}</td><td style={styles.td}>{formatSeconds(item.averageResponseTime)}</td></tr>)}</tbody>
                </table>
              </div>
            ) : <div style={styles.notice}>Growth over time will appear as persisted attempts accumulate across different dates.</div>}
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Stage, module and activity completion</h2>
            <p style={styles.sectionText}>A module is complete only when all of its mapped Stage 1 activities are completed.</p>
            <div style={styles.tableWrap}>
              <table style={styles.table}>
                <thead><tr><th style={styles.th}>Track</th><th style={styles.th}>Module</th><th style={styles.th}>Activities</th><th style={styles.th}>Status</th></tr></thead>
                <tbody>
                  {[["Quantitative", analytics.tracks.quantitative.moduleCompletion], ["Verbal", analytics.tracks.verbal.moduleCompletion]].flatMap(([track, modules]) =>
                    modules.map((module) => (
                      <tr key={`${track}-${module.id}`}>
                        <td style={styles.td}>{track}</td>
                        <td style={styles.td}>{module.title}</td>
                        <td style={styles.td}>{module.completedActivities} / {module.activityCount}</td>
                        <td style={styles.td}><span style={styles.badge}>{module.complete ? "Completed" : "In progress"}</span></td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Data boundary</h2>
            <div style={styles.notice}>
              Detailed question history now comes from the persisted Reasoning attempt record. No unsupported historical attempts, difficulty results, timing values or growth values are reconstructed for work completed before durable capture was enabled.
            </div>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Question-attempt records</h2>
            <p style={styles.sectionText}>The detailed analytics above use the learner-scoped records returned by the Reasoning backend. Correct-answer values are intentionally not exposed by the read endpoint.</p>
          </section>

        </div>
      </main>
    </>
  );
}
