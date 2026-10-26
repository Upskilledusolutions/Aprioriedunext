import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { getEnglishStageNavigation, getEnglishActivityRoute } from "../../../Data/EnglishAptitude/englishStageNavigation";

const styles = {
  page: { minHeight: "80vh", padding: "52px 20px 80px", background: "var(--surface)" },
  wrapper: { maxWidth: 1150, margin: "0 auto" },
  eyebrow: { color: "var(--blue)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13, margin: "0 0 10px" },
  title: { color: "var(--text)", fontSize: "clamp(34px, 5vw, 54px)", lineHeight: 1.08, margin: 0 },
  intro: { maxWidth: 760, color: "var(--muted)", fontSize: 17, lineHeight: 1.7, margin: "14px 0 30px" },
  back: { display: "inline-block", color: "var(--muted)", textDecoration: "none", fontWeight: 700, marginBottom: 24 },
  half: { marginTop: 30 },
  halfTitle: { color: "var(--text)", fontSize: 25, margin: "0 0 16px" },
  moduleGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(270px, 1fr))", gap: 18 },
  module: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 22, boxShadow: "0 10px 30px rgba(0,0,37,.05)" },
  moduleTitle: { color: "var(--text)", fontSize: 20, margin: "0 0 16px" },
  activity: { padding: "15px 0", borderTop: "1px solid var(--border)" },
  activityTitle: { color: "var(--text)", fontWeight: 750, lineHeight: 1.4, margin: "0 0 6px" },
  focus: { color: "var(--muted)", fontSize: 14, lineHeight: 1.55, margin: "0 0 10px" },
  link: { color: "var(--blue)", fontWeight: 800, textDecoration: "none", fontSize: 14 },
  note: { marginTop: 28, padding: 18, borderRadius: 14, background: "rgba(0,59,147,.06)", border: "1px solid var(--border)", color: "var(--muted)", lineHeight: 1.6 },
};

export default function EnglishAptitudeDashboard() {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector(state => state.auth);

  useEffect(() => {
    if (!isAuthenticated && user === null) return;
    if (!user?.userId) router.replace("/Auth");
  }, [isAuthenticated, user, router]);

  const modules = getEnglishStageNavigation("L1", "S1");
  const explore = modules.filter(module => module.half === "explore");
  const extend = modules.filter(module => module.half === "extend");

  const renderModules = items => (
    <div style={styles.moduleGrid}>
      {items.map(module => (
        <section key={module.moduleId} style={styles.module}>
          <h3 style={styles.moduleTitle}>{module.title}</h3>
          {module.activities.map(activity => (
            <article key={activity.activityId} style={styles.activity}>
              <h4 style={styles.activityTitle}>{activity.title}</h4>
              <p style={styles.focus}>{activity.focus}</p>
              <Link style={styles.link} href={getEnglishActivityRoute(activity.activityId)}>
                View activity overview →
              </Link>
            </article>
          ))}
        </section>
      ))}
    </div>
  );

  return (
    <>
      <Head>
        <title>English Aptitude | Upskilleduonline</title>
        <meta name="description" content="Explore the English Aptitude learning pathway." />
      </Head>
      <main style={styles.page}>
        <div style={styles.wrapper}>
          <Link href="/User" style={styles.back}>← Back to Courses</Link>
          <p style={styles.eyebrow}>English Aptitude · Level 1 · Stage 1</p>
          <h1 style={styles.title}>Build confident English skills.</h1>
          <p style={styles.intro}>Move from Explore foundations to Extend practice through reading, vocabulary, grammar, evidence-based thinking and clear expression.</p>
          <section style={styles.half}>
            <h2 style={styles.halfTitle}>Explore</h2>
            {renderModules(explore)}
          </section>
          <section style={styles.half}>
            <h2 style={styles.halfTitle}>Extend</h2>
            {renderModules(extend)}
          </section>
          <p style={styles.note}>This is the first navigation milestone. The activity overviews are connected to the approved registry; interactive questions, saved progress and analytics will be added and verified in subsequent steps. Draft content has not been approved for learner release.</p>
        </div>
      </main>
    </>
  );
}
