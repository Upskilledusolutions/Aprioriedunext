import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import { getEnglishStageNavigation, getEnglishActivityRoute } from "../../../Data/EnglishAptitude/englishStageNavigation";
import EnglishAptitudeRouteGuard from "../../../../components/EnglishAptitudeRouteGuard";
import EnglishAptitudeHeroGraphic from "../../../../components/EnglishAptitudeHeroGraphic";

const styles = {
  page: { minHeight: "80vh", padding: "42px 20px 80px", background: "var(--surface)" },
  wrapper: { maxWidth: 1150, margin: "0 auto" },
  back: { display: "inline-block", color: "var(--muted)", textDecoration: "none", fontWeight: 700, marginBottom: 26 },
  hero: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 34, alignItems: "center", marginBottom: 40 },
  heroCopy: { padding: "8px 0" },
  eyebrow: { color: "var(--blue)", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", fontSize: 13, margin: "0 0 12px" },
  title: { color: "var(--text)", fontSize: "clamp(36px, 5vw, 56px)", lineHeight: 1.07, letterSpacing: "-.03em", margin: "0 0 16px" },
  intro: { maxWidth: 700, color: "var(--muted)", fontSize: 17, lineHeight: 1.75, margin: "0 0 20px" },
  art: { minWidth: 0 },
  chips: { display: "flex", flexWrap: "wrap", gap: 9 },
  chip: { padding: "8px 12px", borderRadius: 999, border: "1px solid var(--border)", background: "var(--card)", color: "var(--text)", fontSize: 13, fontWeight: 750 },
  half: { marginTop: 34 },
  halfHeader: { display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 14, flexWrap: "wrap", marginBottom: 16 },
  halfTitle: { color: "var(--text)", fontSize: 27, margin: 0 },
  halfNote: { color: "var(--muted)", fontSize: 14, margin: 0 },
  moduleGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 290px), 1fr))", gap: 18 },
  module: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 22, boxShadow: "0 8px 25px rgba(0,0,37,.045)" },
  moduleTitle: { color: "var(--text)", fontSize: 20, margin: "0 0 14px" },
  activity: { padding: "15px 0", borderTop: "1px solid var(--border)" },
  activityTitle: { color: "var(--text)", fontWeight: 750, lineHeight: 1.4, margin: "0 0 6px" },
  focus: { color: "var(--muted)", fontSize: 14, lineHeight: 1.6, margin: "0 0 10px" },
  link: { color: "var(--blue)", fontWeight: 800, textDecoration: "none", fontSize: 14 },
  note: { marginTop: 28, padding: 18, borderRadius: 14, background: "rgba(190,110,0,.07)", border: "1px solid rgba(190,110,0,.2)", color: "var(--text)", lineHeight: 1.65 },
};

export default function EnglishAptitudeDashboard() {
  const { user } = useSelector((state) => state.auth);
  const modules = getEnglishStageNavigation("L1", "S1");
  const explore = modules.filter((module) => module.half === "explore");
  const extend = modules.filter((module) => module.half === "extend");

  const renderModules = (items) => (
    <div style={styles.moduleGrid}>
      {items.map((module) => (
        <section key={module.moduleId} style={styles.module}>
          <h3 style={styles.moduleTitle}>{module.title}</h3>
          {module.activities.map((activity) => (
            <article key={activity.activityId} style={styles.activity}>
              <h4 style={styles.activityTitle}>{activity.title}</h4>
              <p style={styles.focus}>{activity.focus}</p>
              <Link style={styles.link} href={getEnglishActivityRoute(activity.activityId)}>
                View activity overview <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </section>
      ))}
    </div>
  );

  return (
    <EnglishAptitudeRouteGuard>
      <>
        <Head>
          <title>English Aptitude Dashboard | Upskilleduonline</title>
          <meta name="description" content="Your English Aptitude learning pathway." />
        </Head>
        <main style={styles.page}>
          <div style={styles.wrapper}>
            <Link href="/User" style={styles.back}>← Back to courses</Link>
            <section style={styles.hero}>
              <div style={styles.heroCopy}>
                <p style={styles.eyebrow}>English Aptitude · Level 1 · Stage 1</p>
                <h1 style={styles.title}>{user?.name ? "Welcome back, " + user.name + "." : "Build confident English skills."}</h1>
                <p style={styles.intro}>Move from Explore foundations to Extend practice through reading, vocabulary, grammar, evidence-based thinking and clear expression.</p>
                <div style={styles.chips}>
                  {["Read closely", "Build language", "Express clearly"].map((item) => <span key={item} style={styles.chip}>{item}</span>)}
                </div>
              </div>
              <div style={styles.art}><EnglishAptitudeHeroGraphic /></div>
            </section>

            <section style={styles.half}>
              <div style={styles.halfHeader}>
                <h2 style={styles.halfTitle}>Explore</h2>
                <p style={styles.halfNote}>Start with understanding, observation and strong foundations.</p>
              </div>
              {renderModules(explore)}
            </section>
            <section style={styles.half}>
              <div style={styles.halfHeader}>
                <h2 style={styles.halfTitle}>Extend</h2>
                <p style={styles.halfNote}>Apply ideas and practise deeper expression.</p>
              </div>
              {renderModules(extend)}
            </section>
            <p style={styles.note}><strong>Preview only — draft content.</strong> The first activity is a development preview. Draft questions have not passed final editorial and rights review, and practice results are not yet saved to analytics.</p>
          </div>
        </main>
      </>
    </EnglishAptitudeRouteGuard>
  );
}
