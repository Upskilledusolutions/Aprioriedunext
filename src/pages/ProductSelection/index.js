import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import layoutStyles from "../../styles/ProductSelection.module.css";
import EnglishAptitudeHeroGraphic from "../../../components/EnglishAptitudeHeroGraphic";

const styles = {
  page: { minHeight: "80vh", padding: "60px 20px 80px", background: "#f7f9fc" },
  wrapper: { maxWidth: "1100px", margin: "0 auto", textAlign: "center" },
  eyebrow: { fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#667085", marginBottom: "10px" },
  title: { fontSize: "clamp(32px, 5vw, 52px)", lineHeight: 1.1, margin: "0 0 16px", color: "#172033" },
  intro: { maxWidth: "740px", margin: "0 auto 42px", fontSize: "18px", lineHeight: 1.6, color: "#596579" },
  grid: { display: "grid", gap: "24px", textAlign: "left", alignItems: "stretch" },
  card: { display: "flex", flexDirection: "column", minHeight: "300px", padding: "32px", background: "#fff", border: "1px solid #e5e7eb", borderRadius: "20px", boxShadow: "0 12px 35px rgba(16, 24, 40, 0.07)" },
  icon: { width: "52px", height: "52px", display: "grid", placeItems: "center", borderRadius: "14px", background: "#eef2ff", fontSize: "24px", marginBottom: "22px" },
  cardTitle: { margin: "0 0 12px", fontSize: "27px", color: "#172033" },
  cardText: { margin: "0 0 24px", color: "#667085", lineHeight: 1.65, flex: 1 },
  button: { display: "inline-block", padding: "13px 20px", borderRadius: "10px", background: "#172033", color: "#fff", textDecoration: "none", fontWeight: 700, textAlign: "center", alignSelf: "flex-start" },
  englishCard: { gridColumn: "1 / -1", display: "grid", gap: "30px", alignItems: "center", padding: "clamp(24px, 4vw, 42px)", background: "linear-gradient(125deg, #ffffff 0%, #f5f9ff 62%, #eef7f8 100%)", border: "1px solid #dbe5ef", borderRadius: "22px", boxShadow: "0 14px 38px rgba(16, 39, 73, 0.09)", overflow: "hidden", position: "relative" },
  englishCopy: { minWidth: 0, padding: "4px 0" },
  englishEyebrow: { fontSize: "12px", fontWeight: 800, letterSpacing: "0.12em", textTransform: "uppercase", color: "#236d79", margin: "0 0 12px" },
  englishTitle: { margin: "0 0 14px", fontSize: "clamp(28px, 3.5vw, 38px)", lineHeight: 1.12, letterSpacing: "-0.025em", color: "#142b46" },
  englishText: { margin: "0 0 22px", maxWidth: "590px", color: "#53657a", lineHeight: 1.75, fontSize: "16px" },
  englishChips: { display: "flex", flexWrap: "wrap", gap: "8px", margin: "0 0 26px" },
  englishChip: { border: "1px solid #d6e4eb", borderRadius: "999px", padding: "8px 11px", color: "#274b62", background: "rgba(255,255,255,.8)", fontSize: "12px", fontWeight: 750 },
  englishButton: { display: "inline-flex", alignItems: "center", gap: "10px", padding: "14px 20px", borderRadius: "10px", background: "#173b61", color: "#fff", textDecoration: "none", fontWeight: 800, boxShadow: "0 8px 20px rgba(23,59,97,.18)" },
  englishNote: { margin: "12px 0 0", fontSize: "12px", lineHeight: 1.6, color: "#66798c" },
  englishGraphic: { width: "100%", minWidth: 0 },
};

export default function ProductSelection() {
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user === null || user === undefined) return;
    if (!user?.userId) router.replace("/Auth");
  }, [user, router]);

  return (
    <>
      <Head>
        <title>Choose Your Learning Path | Upskilleduonline</title>
        <meta name="description" content="Choose your learning path: Foreign Languages, Reasoning & Academic Skills, or English Aptitude." />
      </Head>
      <main style={styles.page}>
        <div style={styles.wrapper}>
          <div style={styles.eyebrow}>Welcome to Upskilleduonline</div>
          <h1 style={styles.title}>What would you like to learn?</h1>
          <p style={styles.intro}>Choose a learning path. Each course has its own structured activities, learning experience and progress reporting.</p>

          <div className={layoutStyles.grid} style={styles.grid}>
            <section style={styles.card}>
              <div style={styles.icon} aria-hidden="true">🌍</div>
              <h2 style={styles.cardTitle}>Foreign Languages</h2>
              <p style={styles.cardText}>Continue learning Spanish, French, German and other languages through lessons, exercises, conversations, reading, listening, speaking and writing practice.</p>
              <Link href="/User" style={styles.button}>Enter Foreign Languages <span aria-hidden="true">→</span></Link>
            </section>

            <section style={styles.card}>
              <div style={styles.icon} aria-hidden="true">🧠</div>
              <h2 style={styles.cardTitle}>Reasoning & Academic Skills</h2>
              <p style={styles.cardText}>Build reasoning, mathematical thinking, critical reading, analytical writing, Olympiad skills and research capability.</p>
              <Link href="/Reasoning/Dashboard" style={styles.button}>Enter Reasoning Skills <span aria-hidden="true">→</span></Link>
            </section>

            <section className={layoutStyles.englishCard} style={styles.englishCard}>
              <div style={styles.englishCopy}>
                <p style={styles.englishEyebrow}>A dedicated learning pathway</p>
                <h2 style={styles.englishTitle}>English Aptitude</h2>
                <p style={styles.englishText}>Read with insight. Write with confidence. Develop reading comprehension, vocabulary, grammar, sentence craft and evidence-based thinking through a structured Explore-to-Extend pathway.</p>
                <div style={styles.englishChips}>
                  {["Reading & comprehension", "Vocabulary & grammar", "Clear expression", "Explore & Extend"].map((item) => (
                    <span key={item} style={styles.englishChip}>{item}</span>
                  ))}
                </div>
                <Link href="/English-Aptitude" style={styles.englishButton}>Explore English Aptitude <span aria-hidden="true">→</span></Link>
                <p style={styles.englishNote}>Course activities are being developed and reviewed. Draft questions are not yet released for general learner use.</p>
              </div>
              <div style={styles.englishGraphic}>
                <EnglishAptitudeHeroGraphic />
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
