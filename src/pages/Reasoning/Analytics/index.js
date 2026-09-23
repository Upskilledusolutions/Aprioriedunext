import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { readReasoningProgress } from "../../../utils/reasoningProgress";
import { getStage1ReasoningAnalytics } from "../../../utils/reasoningAnalytics";

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
  rowLast: { borderBottom: 0 },
  small: { color: "var(--muted)", fontSize: 13, lineHeight: 1.5 },
  tableWrap: { overflowX: "auto", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18 },
  table: { width: "100%", minWidth: 720, borderCollapse: "collapse" },
  th: { textAlign: "left", padding: "13px 15px", color: "var(--muted)", fontSize: 12, letterSpacing: ".04em", textTransform: "uppercase", borderBottom: "1px solid var(--border)" },
  td: { padding: "13px 15px", color: "var(--text)", fontSize: 14, borderBottom: "1px solid var(--border)" },
  badge: { display: "inline-block", padding: "5px 9px", borderRadius: 99, fontSize: 11, fontWeight: 800, background: "rgba(0,59,147,.08)", color: "var(--blue)" },
  notice: { marginTop: 16, padding: 16, borderRadius: 12, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--muted)", lineHeight: 1.6 },
};

function percent(value) {
  return value === null ? "—" : `${value}%`;
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

export default function ReasoningAnalytics() {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    if (!isAuthenticated && user === null) return;
    if (!user?.userId) router.replace("/Auth");
    else setProgress(readReasoningProgress(user.userId));
  }, [isAuthenticated, user, router]);

  const analytics = useMemo(
    () => (progress ? getStage1ReasoningAnalytics(progress) : null),
    [progress]
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
        <meta name="description" content="Stage 1 Reasoning learning analytics." />
      </Head>
      <main style={styles.page}>
        <div style={styles.wrapper}>
          <Link href="/Reasoning/Dashboard" style={styles.back}>← Back to Reasoning Dashboard</Link>
          <p style={styles.eyebrow}>Reasoning Analytics · Level 1 · Stage 1</p>
          <h1 style={styles.title}>Your Stage 1 learning record</h1>
          <p style={styles.intro}>
            This view reports the Reasoning learning data currently persisted for this learner. It separates Quantitative and Verbal performance and does not invent metrics that are not recorded.
          </p>

          <div style={styles.grid}>
            <div style={styles.card}><div style={styles.label}>Overall Stage 1 progress</div><div style={styles.value}>{analytics.overall.percent}%</div></div>
            <div style={styles.card}><div style={styles.label}>Modules completed</div><div style={styles.value}>{analytics.overall.completedModules} / {analytics.overall.totalModules}</div></div>
            <div style={styles.card}><div style={styles.label}>Activities completed</div><div style={styles.value}>{analytics.overall.activitiesCompleted} / {analytics.overall.activitiesTotal}</div></div>
            <div style={styles.card}><div style={styles.label}>Questions completed</div><div style={styles.value}>{analytics.overall.questionsCompleted}</div></div>
            <div style={styles.card}><div style={styles.label}>Average completed-activity score</div><div style={styles.value}>{percent(analytics.overall.averageActivityScore)}</div></div>
          </div>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Quantitative and Verbal progress</h2>
            <p style={styles.sectionText}>Completion is derived from the existing activity completion record and Stage 1 module mappings.</p>
            <div style={styles.split}>
              <TrackPanel title="Quantitative" track={analytics.tracks.quantitative} />
              <TrackPanel title="Verbal" track={analytics.tracks.verbal} />
            </div>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Explore and Extend performance</h2>
            <p style={styles.sectionText}>Scores are shown only for completed activities because the current learner record stores a final activity score.</p>
            <div style={styles.split}>
              {[["Quantitative", analytics.tracks.quantitative], ["Verbal", analytics.tracks.verbal]].map(([title, track]) => (
                <section key={title} style={styles.panel}>
                  <h3 style={styles.panelTitle}>{title}</h3>
                  {["explore", "extend"].map((half) => {
                    const item = track.halfPerformance[half];
                    return <div key={half} style={styles.row}>
                      <div><strong>{half === "explore" ? "Explore" : "Extend"}</strong><div style={styles.small}>{item.completed} / {item.total} activities completed</div></div>
                      <strong>{percent(item.averageScore)}</strong>
                    </div>;
                  })}
                </section>
              ))}
            </div>
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
            <h2 style={styles.sectionTitle}>Activity performance</h2>
            <p style={styles.sectionText}>Activity scores are the persisted completion scores for finished activities.</p>
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
            <h2 style={styles.sectionTitle}>Skill / concept performance</h2>
            <p style={styles.sectionText}>These results group completed activity scores by the existing activity topic metadata.</p>
            {topicRows.length ? (
              <div style={styles.tableWrap}>
                <table style={styles.table}>
                  <thead><tr><th style={styles.th}>Track</th><th style={styles.th}>Topic</th><th style={styles.th}>Completed activities</th><th style={styles.th}>Average score</th></tr></thead>
                  <tbody>{topicRows.map((item) => <tr key={`${item.track}-${item.topicId}`}><td style={styles.td}>{item.track}</td><td style={styles.td}>{item.topicId}</td><td style={styles.td}>{item.activitiesCompleted}</td><td style={styles.td}>{item.averageScore}%</td></tr>)}</tbody>
                </table>
              </div>
            ) : <div style={styles.notice}>Topic performance becomes available after completed activities have persisted scores.</div>}
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Data not yet persisted</h2>
            <div style={styles.notice}>
              Attempt-level question history, performance by question difficulty, per-question timing and growth over time are not stored by the current Reasoning progress record. They are therefore not fabricated or represented as learner analytics here. Permanent server-side persistence also remains a backend dependency documented by the project.
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
