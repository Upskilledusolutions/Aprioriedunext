import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";
import EnglishAptitudeHeroGraphic from "../../../components/EnglishAptitudeHeroGraphic";

const styles = {
  page: { minHeight: "80vh", padding: "42px 20px 80px", background: "var(--surface)" },
  wrapper: { maxWidth: 1150, margin: "0 auto" },
  back: { display: "inline-block", color: "var(--muted)", textDecoration: "none", fontWeight: 700, marginBottom: 28 },
  hero: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))", gap: 34, alignItems: "center", marginBottom: 50 },
  copy: { padding: "8px 0" },
  eyebrow: { color: "var(--blue)", fontWeight: 800, letterSpacing: ".1em", textTransform: "uppercase", fontSize: 13, margin: "0 0 14px" },
  title: { color: "var(--text)", fontSize: "clamp(38px, 5vw, 60px)", lineHeight: 1.05, letterSpacing: "-.035em", margin: "0 0 18px" },
  intro: { color: "var(--muted)", fontSize: 18, lineHeight: 1.75, maxWidth: 650, margin: "0 0 24px" },
  action: { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10, padding: "14px 20px", borderRadius: 11, background: "var(--blue)", color: "#fff", textDecoration: "none", fontWeight: 800, boxShadow: "0 10px 22px rgba(0,59,147,.17)" },
  footnote: { color: "var(--muted)", fontSize: 13, lineHeight: 1.6, marginTop: 15 },
  art: { minWidth: 0 },
  sectionTitle: { color: "var(--text)", fontSize: "clamp(25px, 3vw, 32px)", margin: "0 0 9px" },
  sectionIntro: { color: "var(--muted)", lineHeight: 1.7, margin: "0 0 22px", maxWidth: 720 },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 230px), 1fr))", gap: 18 },
  card: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18, padding: 24, boxShadow: "0 8px 24px rgba(0,0,37,.04)" },
  number: { display: "grid", placeItems: "center", width: 42, height: 42, borderRadius: 13, background: "rgba(0,59,147,.08)", color: "var(--blue)", fontSize: 17, fontWeight: 900, marginBottom: 16 },
  cardTitle: { color: "var(--text)", fontSize: 19, margin: "0 0 9px" },
  cardText: { color: "var(--muted)", lineHeight: 1.65, margin: 0 },
  journey: { display: "flex", flexWrap: "wrap", gap: 10, padding: 0, margin: "26px 0 0", listStyle: "none" },
  journeyItem: { padding: "9px 13px", background: "var(--card)", border: "1px solid var(--border)", color: "var(--text)", borderRadius: 999, fontSize: 13, fontWeight: 750 },
};

export default function EnglishAptitudeHome() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const canEnter = Boolean(isAuthenticated && user?.userId);
  const actionHref = canEnter ? "/English-Aptitude/Dashboard" : "/Auth";

  return (
    <>
      <Head>
        <title>English Aptitude | Upskilleduonline</title>
        <meta name="description" content="Build confident reading, vocabulary, grammar and writing skills with English Aptitude." />
      </Head>
      <main style={styles.page}>
        <div style={styles.wrapper}>
          <Link href="/ProductSelection" style={styles.back}>← Back to courses</Link>
          <section style={styles.hero}>
            <div style={styles.copy}>
              <p style={styles.eyebrow}>Upskilleduonline · English Aptitude</p>
              <h1 style={styles.title}>Read with insight. Write with confidence.</h1>
              <p style={styles.intro}>Build strong English skills through carefully sequenced reading, vocabulary, grammar, sentence craft and evidence-based thinking. Explore new ideas, then extend what you can do.</p>
              <Link href={actionHref} style={styles.action}>
                {canEnter ? "Open English Aptitude" : "Log in to continue"} <span aria-hidden="true">→</span>
              </Link>
              <p style={styles.footnote}>Course and level access is managed through your account. Draft learning activities are still being reviewed and are not released for general learner use.</p>
            </div>
            <div style={styles.art}><EnglishAptitudeHeroGraphic /></div>
          </section>

          <section aria-labelledby="english-pathway-title">
            <h2 id="english-pathway-title" style={styles.sectionTitle}>A pathway built around real skills</h2>
            <p style={styles.sectionIntro}>Move from understanding what you read to expressing ideas clearly, with each stage building on the last.</p>
            <div style={styles.grid}>
              <article style={styles.card}>
                <div style={styles.number}>01</div>
                <h3 style={styles.cardTitle}>Read and understand</h3>
                <p style={styles.cardText}>Explore stories and nonfiction, find key details, follow events and support ideas with evidence.</p>
              </article>
              <article style={styles.card}>
                <div style={styles.number}>02</div>
                <h3 style={styles.cardTitle}>Build language skills</h3>
                <p style={styles.cardText}>Strengthen vocabulary, grammar, sentence accuracy and the flow of paragraphs.</p>
              </article>
              <article style={styles.card}>
                <div style={styles.number}>03</div>
                <h3 style={styles.cardTitle}>Express ideas clearly</h3>
                <p style={styles.cardText}>Practise thoughtful responses, summaries and more independent expression as you progress.</p>
              </article>
            </div>
            <ul style={styles.journey}>
              {["Explore", "Practise", "Extend", "Reflect"].map((step) => <li style={styles.journeyItem} key={step}>{step}</li>)}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
