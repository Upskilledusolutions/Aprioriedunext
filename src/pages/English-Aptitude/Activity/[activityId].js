import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { ENGLISH_ACTIVITY_REGISTRY } from "../../../Data/EnglishAptitude/englishActivityRegistry";
import { sampleSingleSelectAttempt, isSingleSelectAnswerCorrect } from "../../../Data/EnglishAptitude/englishQuestionPlayer";
import storyBank from "../../../../content/EnglishAptitude/editable/L1/S1/english-L1-S1-story-01.json";

const PLAYER_ACTIVITY_ID = "ENG-L1-S1-EXP-01";

const styles = {
  page: { minHeight: "80vh", padding: "40px 20px 80px", background: "var(--surface)" },
  wrapper: { maxWidth: 920, margin: "0 auto" },
  card: { background: "var(--card)", border: "1px solid var(--border)", borderRadius: 20, padding: "clamp(22px, 4vw, 36px)", boxShadow: "0 12px 35px rgba(0,0,37,.06)", marginTop: 20 },
  eyebrow: { color: "var(--blue)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13 },
  title: { color: "var(--text)", fontSize: "clamp(30px, 4vw, 42px)", lineHeight: 1.15, margin: "10px 0 12px" },
  text: { color: "var(--muted)", lineHeight: 1.7 },
  link: { color: "var(--blue)", fontWeight: 800, textDecoration: "none" },
  warning: { marginTop: 18, padding: 14, borderRadius: 12, background: "rgba(190,110,0,.08)", border: "1px solid rgba(190,110,0,.25)", color: "var(--text)", lineHeight: 1.6 },
  passage: { whiteSpace: "pre-line", color: "var(--text)", lineHeight: 1.85, fontSize: 16 },
  prompt: { color: "var(--text)", fontSize: 22, lineHeight: 1.45, margin: "24px 0 18px" },
  option: { display: "flex", alignItems: "flex-start", gap: 12, width: "100%", textAlign: "left", padding: "15px 16px", margin: "10px 0", borderRadius: 12, border: "1px solid var(--border)", background: "var(--card)", color: "var(--text)", cursor: "pointer", lineHeight: 1.5, fontSize: 16 },
  selected: { border: "2px solid var(--blue)", background: "rgba(0,59,147,.06)" },
  button: { border: 0, borderRadius: 10, padding: "13px 20px", background: "var(--blue)", color: "#fff", fontWeight: 800, cursor: "pointer", fontSize: 15 },
  secondary: { border: "1px solid var(--border)", borderRadius: 10, padding: "12px 18px", background: "var(--card)", color: "var(--text)", fontWeight: 750, cursor: "pointer", fontSize: 15 },
  feedback: { marginTop: 20, padding: 16, borderRadius: 12, background: "rgba(0,59,147,.06)", border: "1px solid var(--border)", color: "var(--text)", lineHeight: 1.65 },
  progressTrack: { height: 8, background: "var(--border)", borderRadius: 99, overflow: "hidden", margin: "12px 0 8px" },
  progressFill: { height: "100%", background: "var(--blue)", transition: "width .2s ease" },
};

export default function EnglishAptitudeActivityOverview() {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector(state => state.auth);
  const [attempt, setAttempt] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    if (!isAuthenticated && user === null) return;
    if (!user?.userId) router.replace("/Auth");
  }, [isAuthenticated, user, router]);

  const activityId = Array.isArray(router.query.activityId) ? router.query.activityId[0] : router.query.activityId;
  const activity = useMemo(() => ENGLISH_ACTIVITY_REGISTRY.find(item => item.activityId === activityId), [activityId]);
  const isPlayerActivity = activityId === PLAYER_ACTIVITY_ID;
  const currentQuestion = attempt[currentIndex];
  const passage = currentQuestion?.passageId
    ? storyBank.passages.find(item => item.id === currentQuestion.passageId)
    : null;
  const isCorrect = submitted && isSingleSelectAnswerCorrect(currentQuestion, selectedOption);

  function startAttempt() {
    setAttempt(sampleSingleSelectAttempt(storyBank, PLAYER_ACTIVITY_ID, 10));
    setCurrentIndex(0);
    setSelectedOption("");
    setSubmitted(false);
    setScore(0);
    setComplete(false);
  }

  useEffect(() => {
    if (router.isReady && isPlayerActivity) startAttempt();
  }, [router.isReady, isPlayerActivity]);

  function submitAnswer() {
    if (!currentQuestion || !selectedOption || submitted) return;
    if (isSingleSelectAnswerCorrect(currentQuestion, selectedOption)) setScore(value => value + 1);
    setSubmitted(true);
  }

  function nextQuestion() {
    if (currentIndex === attempt.length - 1) {
      setComplete(true);
      return;
    }
    setCurrentIndex(value => value + 1);
    setSelectedOption("");
    setSubmitted(false);
  }

  if (!router.isReady) return null;
  if (!activity) {
    return <main style={styles.page}><section style={styles.card}><h1>Activity not found</h1><p style={styles.text}>This activity ID is not registered for the current English Aptitude release.</p><Link style={styles.link} href="/English-Aptitude/Dashboard">Return to English Aptitude →</Link></section></main>;
  }

  return (
    <>
      <Head><title>{activity.title} | English Aptitude</title></Head>
      <main style={styles.page}>
        <div style={styles.wrapper}>
          <Link style={styles.link} href="/English-Aptitude/Dashboard">← Back to Level 1 · Stage 1</Link>
          <section style={styles.card}>
            <p style={styles.eyebrow}>{activity.half === "explore" ? "Explore" : "Extend"} · Level 1 · Stage 1</p>
            <h1 style={styles.title}>{activity.title}</h1>
            <p style={styles.text}>{activity.focus}</p>
            {isPlayerActivity ? (
              <>
                <div style={styles.warning}>
                  <strong>Preview only — draft content.</strong> This sample activity has not passed editorial approval and is not ready for learner release. Answers and scores exist only in this browser session; no progress or analytics are saved.
                </div>
                {complete ? (
                  <div style={{ ...styles.feedback, marginTop: 24 }}>
                    <h2 style={{ marginTop: 0, color: "var(--text)" }}>Practice complete</h2>
                    <p>You answered <strong>{score} of {attempt.length}</strong> questions correctly.</p>
                    <p style={styles.text}>This result is temporary and has not been saved.</p>
                    <button type="button" style={styles.button} onClick={startAttempt}>Try another set of 10</button>
                  </div>
                ) : currentQuestion ? (
                  <>
                    <div style={{ marginTop: 24 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", gap: 12, color: "var(--muted)", fontSize: 14 }}>
                        <span>Question {currentIndex + 1} of {attempt.length}</span>
                        <span>{score} correct so far</span>
                      </div>
                      <div style={styles.progressTrack}><div style={{ ...styles.progressFill, width: `${((currentIndex + 1) / attempt.length) * 100}%` }} /></div>
                    </div>
                    {passage && (
                      <section style={{ border: "1px solid var(--border)", borderRadius: 14, padding: 20, marginTop: 22 }}>
                        <h2 style={{ color: "var(--text)", marginTop: 0 }}>{passage.title}</h2>
                        <p style={styles.passage}>{passage.text}</p>
                      </section>
                    )}
                    <h2 style={styles.prompt}>{currentQuestion.prompt}</h2>
                    <div role="group" aria-label="Answer options">
                      {currentQuestion.options.map((option, index) => {
                        const chosen = selectedOption === option;
                        return (
                          <button
                            key={option}
                            type="button"
                            disabled={submitted}
                            aria-pressed={chosen}
                            onClick={() => setSelectedOption(option)}
                            style={{ ...styles.option, ...(chosen ? styles.selected : {}), ...(submitted ? { cursor: "default" } : {}) }}
                          >
                            <strong>{String.fromCharCode(65 + index)}.</strong><span>{option}</span>
                          </button>
                        );
                      })}
                    </div>
                    {submitted && (
                      <div role="status" style={styles.feedback}>
                        <strong>{isCorrect ? "Correct" : "Not quite"}</strong>
                        <p>{isCorrect ? currentQuestion.feedback?.correct : currentQuestion.feedback?.incorrect}</p>
                        {currentQuestion.explanation && <p><strong>Explanation:</strong> {currentQuestion.explanation}</p>}
                      </div>
                    )}
                    <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 24 }}>
                      {!submitted ? (
                        <button type="button" style={{ ...styles.button, opacity: selectedOption ? 1 : 0.55 }} disabled={!selectedOption} onClick={submitAnswer}>Check answer</button>
                      ) : (
                        <button type="button" style={styles.button} onClick={nextQuestion}>{currentIndex === attempt.length - 1 ? "See result" : "Next question"}</button>
                      )}
                    </div>
                  </>
                ) : (
                  <p style={styles.text}>Preparing a 10-question practice set…</p>
                )}
              </>
            ) : (
              <div style={styles.warning}>The interactive player is being introduced in increments. This activity’s response formats are not yet implemented, so no questions are presented here yet. No progress is recorded on this page.</div>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
