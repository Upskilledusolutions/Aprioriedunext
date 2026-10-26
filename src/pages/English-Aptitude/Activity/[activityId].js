import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ENGLISH_ACTIVITY_REGISTRY } from "../../../Data/EnglishAptitude/englishActivityRegistry";

const styles = {
  page: { minHeight: "80vh", padding: "52px 20px 80px", background: "var(--surface)" },
  card: { maxWidth: 820, margin: "0 auto", background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "clamp(22px, 5vw, 40px)", boxShadow: "0 12px 35px rgba(0,0,37,.06)" },
  eyebrow: { color: "var(--blue)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13 },
  title: { color: "var(--text)", fontSize: "clamp(30px, 4vw, 42px)", lineHeight: 1.15 },
  text: { color: "var(--muted)", lineHeight: 1.7 },
  link: { color: "var(--blue)", fontWeight: 800, textDecoration: "none" },
  status: { marginTop: 24, padding: 18, borderRadius: 12, background: "rgba(0,59,147,.06)", border: "1px solid var(--border)", color: "var(--muted)", lineHeight: 1.6 },
};

export default function EnglishAptitudeActivityOverview() {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector(state => state.auth);
  useEffect(() => {
    if (!isAuthenticated && user === null) return;
    if (!user?.userId) router.replace("/Auth");
  }, [isAuthenticated, user, router]);

  const activityId = Array.isArray(router.query.activityId) ? router.query.activityId[0] : router.query.activityId;
  const activity = useMemo(() => ENGLISH_ACTIVITY_REGISTRY.find(item => item.activityId === activityId), [activityId]);

  if (!router.isReady) return null;
  if (!activity) {
    return <main style={styles.page}><section style={styles.card}><h1>Activity not found</h1><p style={styles.text}>This activity ID is not registered for the current English Aptitude release.</p><Link style={styles.link} href="/English-Aptitude/Dashboard">Return to English Aptitude →</Link></section></main>;
  }

  return (
    <>
      <Head><title>{activity.title} | English Aptitude</title></Head>
      <main style={styles.page}>
        <section style={styles.card}>
          <Link style={styles.link} href="/English-Aptitude/Dashboard">← Back to Level 1 · Stage 1</Link>
          <p style={styles.eyebrow}>{activity.half === "explore" ? "Explore" : "Extend"} · Level 1 · Stage 1</p>
          <h1 style={styles.title}>{activity.title}</h1>
          <p style={styles.text}>{activity.focus}</p>
          <div style={styles.status}>The activity overview and registry link are in place. The interactive question player is the next implementation increment; no questions have been started or progress recorded on this page.</div>
        </section>
      </main>
    </>
  );
}
