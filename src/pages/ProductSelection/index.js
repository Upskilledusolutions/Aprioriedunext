import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const styles = {
  page: {
    minHeight: "80vh",
    padding: "60px 20px",
    background: "#f7f9fc",
  },
  wrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
  },
  eyebrow: {
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#667085",
    marginBottom: "10px",
  },
  title: {
    fontSize: "clamp(32px, 5vw, 52px)",
    lineHeight: 1.1,
    margin: "0 0 16px",
    color: "#172033",
  },
  intro: {
    maxWidth: "700px",
    margin: "0 auto 42px",
    fontSize: "18px",
    lineHeight: 1.6,
    color: "#596579",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    textAlign: "left",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    minHeight: "300px",
    padding: "32px",
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: "20px",
    boxShadow: "0 12px 35px rgba(16, 24, 40, 0.07)",
  },
  icon: {
    width: "52px",
    height: "52px",
    display: "grid",
    placeItems: "center",
    borderRadius: "14px",
    background: "#eef2ff",
    fontSize: "24px",
    marginBottom: "22px",
  },
  cardTitle: {
    margin: "0 0 12px",
    fontSize: "27px",
    color: "#172033",
  },
  cardText: {
    margin: "0 0 24px",
    color: "#667085",
    lineHeight: 1.6,
    flex: 1,
  },
  button: {
    display: "inline-block",
    padding: "13px 20px",
    borderRadius: "10px",
    background: "#172033",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 700,
    textAlign: "center",
  },
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
        <meta
          name="description"
          content="Choose between Foreign Languages and Reasoning & Academic Skills."
        />
      </Head>
      <main style={styles.page}>
        <div style={styles.wrapper}>
          <div style={styles.eyebrow}>Welcome to Upskilleduonline</div>
          <h1 style={styles.title}>What would you like to learn?</h1>
          <p style={styles.intro}>
            Your account works across both learning products. Choose a path to
            enter its dedicated dashboard and learning experience.
          </p>

          <div style={styles.grid}>
            <section style={styles.card}>
              <div style={styles.icon}>🌍</div>
              <h2 style={styles.cardTitle}>Foreign Languages</h2>
              <p style={styles.cardText}>
                Continue learning Spanish, French, German and other language
                skills through lessons, exercises, conversations, reading,
                listening, speaking and writing practice.
              </p>
              <Link href="/User" style={styles.button}>
                Enter Foreign Languages
              </Link>
            </section>

            <section style={styles.card}>
              <div style={styles.icon}>🧠</div>
              <h2 style={styles.cardTitle}>Reasoning & Academic Skills</h2>
              <p style={styles.cardText}>
                Build reasoning, mathematical thinking, critical reading,
                analytical writing, Olympiad skills and research capability.
              </p>
              <Link href="/Reasoning" style={styles.button}>
                Enter Reasoning & Academic Skills
              </Link>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
