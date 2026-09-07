import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { getTotalReasoningCompleted, getTrackPercent, readReasoningProgress } from "../../../utils/reasoningProgress";

const tracks = [
  { icon: "∑", title: "Quantitative Skills", text: "Develop quantitative reasoning from strong foundations through advanced problem solving, proof and mathematical research.", route: "/Reasoning/Quantitative/Dashboard", action: "Open Quantitative Skills" },
  { icon: "Aa", title: "Verbal Skills", text: "Build critical reading, argument, analytical writing and research communication skills through a staged academic pathway.", route: "/Reasoning/Verbal/Dashboard", action: "Open Verbal Skills" },
];

const styles = {
  page: { minHeight: "80vh", padding: "52px 20px 80px", background: "var(--surface)" }, wrapper: { maxWidth: 1150, margin: "0 auto" }, top: { display: "flex", justifyContent: "space-between", gap: 20, alignItems: "flex-end", flexWrap: "wrap", marginBottom: 34 }, eyebrow: { color: "var(--blue)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13, margin: "0 0 10px" }, title: { fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.06, margin: 0, color: "var(--text)" }, intro: { maxWidth: 720, color: "var(--muted)", fontSize: 18, lineHeight: 1.7, margin: "14px 0 0" }, switch: { color: "var(--muted)", textDecoration: "none", fontWeight: 700, whiteSpace: "nowrap" }, profile: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 14, marginBottom: 34 }, stat: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16, padding: 20 }, statLabel: { color: "var(--muted)", fontSize: 13, fontWeight: 700, marginBottom: 8 }, statValue: { color: "var(--text)", fontSize: 22, fontWeight: 800 }, grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 22 }, card: { display: "flex", flexDirection: "column", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: 28, boxShadow: "0 12px 35px rgba(0,0,37,.07)" }, icon: { width: 54, height: 54, display: "grid", placeItems: "center", borderRadius: 14, background: "rgba(227,80,61,.10)", color: "var(--blue)", fontSize: 26, fontWeight: 800, marginBottom: 18 }, cardTitle: { color: "var(--text)", fontSize: 26, margin: "0 0 10px" }, cardText: { color: "var(--muted)", lineHeight: 1.65, margin: 0, flex: 1 }, button: { display: "inline-block", marginTop: 24, padding: "13px 18px", borderRadius: 10, background: "var(--blue)", color: "#fff", textDecoration: "none", fontWeight: 800, textAlign: "center" }, note: { marginTop: 28, padding: 22, borderRadius: 16, background: "rgba(0,59,147,.07)", border: "1px solid rgba(0,59,147,.12)", color: "var(--text)", lineHeight: 1.6 },
};

export default function ReasoningDashboard() {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [progress, setProgress] = useState(null);

  useEffect(() => {
    if (!isAuthenticated && user === null) return;
    if (!user?.userId) router.replace("/Auth");
    else setProgress(readReasoningProgress(user.userId));
  }, [isAuthenticated, user, router]);

  const quantitativePercent = getTrackPercent(progress, "quantitative", 5);
  const verbalPercent = getTrackPercent(progress, "verbal", 5);
  const completed = getTotalReasoningCompleted(progress, 5);
  const total = 10;
  const overall = Math.round((completed / total) * 100);
  const continueTrack = quantitativePercent < 100 ? "Quantitative" : "Verbal";
  const continueRoute = quantitativePercent < 100 ? "/Reasoning/Quantitative/Dashboard" : "/Reasoning/Verbal/Dashboard";

  return (
    <>
      <Head><title>Reasoning Dashboard | Upskilleduonline</title><meta name="description" content="Your Reasoning & Academic Skills learning dashboard." /></Head>
      <main style={styles.page}><div style={styles.wrapper}>
        <div style={styles.top}><div><p style={styles.eyebrow}>Reasoning & Academic Skills</p><h1 style={styles.title}>{user?.name ? `Welcome, ${user.name}.` : "Your reasoning journey."}</h1><p style={styles.intro}>Choose a skill path, continue from your current stage and gradually build the habits needed for deeper academic work.</p></div><Link href="/ProductSelection" style={styles.switch}>← Choose another product</Link></div>
        <div style={styles.profile}>
          <div style={styles.stat}><div style={styles.statLabel}>Overall Stage 01</div><div style={styles.statValue}>{overall}%</div></div>
          <div style={styles.stat}><div style={styles.statLabel}>Quantitative</div><div style={styles.statValue}>{quantitativePercent}%</div></div>
          <div style={styles.stat}><div style={styles.statLabel}>Verbal</div><div style={styles.statValue}>{verbalPercent}%</div></div>
          <div style={styles.stat}><div style={styles.statLabel}>Modules completed</div><div style={styles.statValue}>{completed} / {total}</div></div>
        </div>
        <div style={styles.grid}>{tracks.map((track) => <section key={track.title} style={styles.card}><div style={styles.icon}>{track.icon}</div><h2 style={styles.cardTitle}>{track.title}</h2><p style={styles.cardText}>{track.text}</p><Link href={track.route} style={styles.button}>{track.action}</Link></section>)}</div>
        <div style={styles.note}><strong>Continue Learning:</strong> Your next step is in {continueTrack}. <Link href={continueRoute} style={{ color: "var(--blue)", fontWeight: 800 }}>Open {continueTrack} Dashboard →</Link></div>
      </div></main>
    </>
  );
}
