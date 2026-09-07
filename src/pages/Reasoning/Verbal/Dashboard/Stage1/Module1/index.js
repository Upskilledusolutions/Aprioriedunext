import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { completeReasoningModule } from "../../../../../../utils/reasoningProgress";

const questions = [
  {
    passage: "Many schools have added quiet reading periods to the school day. Supporters argue that regular reading improves concentration and exposes students to unfamiliar ideas. Critics worry that a fixed reading period reduces time available for other subjects. The debate therefore is not simply about whether reading is useful, but about how schools should balance competing educational priorities.",
    prompt: "What is the main idea of the passage?",
    options: ["Reading is always more important than other subjects.", "Schools are debating how to balance reading with other educational priorities.", "Critics believe reading has no educational value.", "Quiet reading periods are required in all schools."],
    answer: 1,
    explanation: "The passage acknowledges benefits and concerns, then frames the issue as a question of balancing competing priorities.",
  },
  {
    passage: "A city replaced several large car parks with public gardens. Within a year, nearby foot traffic increased and local shops reported more visitors. The city council concluded that the gardens had strengthened the local economy. However, the report did not compare these areas with similar shopping streets that had not received gardens.",
    prompt: "What important limitation does the passage identify?",
    options: ["The gardens were expensive to maintain.", "Foot traffic decreased after the change.", "The council did not compare the results with similar areas.", "Local shops opposed the project."],
    answer: 2,
    explanation: "Without a comparison group, it is difficult to know whether the gardens caused the increase in visitors.",
  },
  {
    passage: "Learning a new skill often feels slow at first. Early practice requires conscious attention because the learner has not yet developed efficient patterns. With repeated practice, some parts of the task become automatic, freeing attention for more difficult decisions.",
    prompt: "Why does the writer mention that some parts of a task become automatic?",
    options: ["To argue that beginners should avoid difficult tasks.", "To explain how practice can free attention for higher-level decisions.", "To show that conscious attention is never useful.", "To prove that every skill becomes effortless."],
    answer: 1,
    explanation: "The final sentence explains the benefit of automaticity: attention can then be redirected toward harder decisions.",
  },
  {
    passage: "The museum extended its opening hours after a visitor survey showed that many people could not attend during the working day. Attendance rose after the change. Although the museum cannot say that the longer hours caused every additional visit, the timing of the increase supports the decision to make the change.",
    prompt: "Which statement best summarizes the passage?",
    options: ["The museum proved that longer hours cause all increases in attendance.", "Visitors stopped attending during working hours.", "Survey evidence led to longer hours, followed by higher attendance, although causation is not certain.", "The museum plans to close during the working day."],
    answer: 2,
    explanation: "The summary preserves both the sequence of events and the writer's caution about claiming direct causation.",
  },
  {
    passage: "A good summary does not reproduce every detail of a text. It identifies the central claim and includes only the supporting ideas needed to represent that claim accurately. A summary can be short without being vague, provided that it preserves the structure and meaning of the original.",
    prompt: "According to the passage, what makes a summary effective?",
    options: ["Including as many details as possible.", "Making the original text much longer.", "Preserving the central meaning while selecting only necessary supporting ideas.", "Removing the writer's central claim."],
    answer: 2,
    explanation: "An effective summary is selective but accurate: it keeps the central claim and the support needed to represent it.",
  },
];

const styles = {
  page: { minHeight: "80vh", padding: "48px 20px 80px", background: "var(--surface)" },
  wrapper: { maxWidth: 900, margin: "0 auto" },
  back: { color: "var(--muted)", textDecoration: "none", fontWeight: 700 },
  eyebrow: { margin: "30px 0 10px", color: "var(--blue)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13 },
  title: { color: "var(--text)", fontSize: "clamp(34px,5vw,52px)", lineHeight: 1.08, margin: 0 },
  intro: { color: "var(--muted)", fontSize: 18, lineHeight: 1.7 },
  progress: { marginTop: 22, padding: 18, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16 },
  progressTop: { display: "flex", justifyContent: "space-between", gap: 16, color: "var(--text)", fontWeight: 800, marginBottom: 10 },
  track: { height: 8, borderRadius: 99, background: "#e7ecf3", overflow: "hidden" },
  fill: { height: "100%", background: "var(--blue)", borderRadius: 99 },
  card: { marginTop: 22, padding: 28, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18 },
  passage: { padding: 20, borderRadius: 13, background: "var(--surface)", color: "var(--text)", lineHeight: 1.75, border: "1px solid var(--border)", marginBottom: 24 },
  question: { color: "var(--text)", fontSize: 22, lineHeight: 1.45, margin: "0 0 22px" },
  option: { display: "block", width: "100%", textAlign: "left", padding: "14px 16px", marginTop: 11, borderRadius: 11, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text)", cursor: "pointer", fontSize: 16, lineHeight: 1.45 },
  selected: { border: "2px solid var(--blue)", padding: "13px 15px" },
  feedback: { marginTop: 20, padding: 18, borderRadius: 12, background: "rgba(0,59,147,.07)", color: "var(--text)", lineHeight: 1.6 },
  actions: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22 },
  primary: { border: 0, padding: "12px 18px", borderRadius: 10, background: "var(--blue)", color: "#fff", fontWeight: 800, cursor: "pointer" },
  secondary: { display: "inline-block", padding: "12px 18px", borderRadius: 10, border: "1px solid var(--border)", color: "var(--text)", textDecoration: "none", fontWeight: 800 },
  resultTitle: { color: "var(--text)", fontSize: 30, margin: "0 0 10px" },
  resultText: { color: "var(--muted)", lineHeight: 1.7 },
};

export default function ReadingForMeaningModule() {
  const router = useRouter();
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if (!isAuthenticated && user === null) return;
    if (!user?.userId) router.replace("/Auth");
  }, [isAuthenticated, user, router]);

  const question = questions[current];
  const percentage = useMemo(() => Math.round((score / questions.length) * 100), [score]);

  function handleAnswer(index) {
    if (selected !== null) return;
    setSelected(index);
    if (index === question.answer) setScore((value) => value + 1);
  }

  function handleNext() {
    if (current < questions.length - 1) {
      setCurrent((value) => value + 1);
      setSelected(null);
      return;
    }
    completeReasoningModule(user.userId, "verbal", "module1", score);
    setFinished(true);
  }

  if (finished) {
    return (
      <>
        <Head><title>Reading for Meaning Complete | Verbal Skills | Upskilleduonline</title></Head>
        <main style={styles.page}><div style={styles.wrapper}>
          <Link href="/Reasoning/Verbal/Dashboard/Stage1" style={styles.back}>← Back to Foundation Verbal</Link>
          <section style={styles.card}>
            <p style={styles.eyebrow}>Module complete</p><h1 style={styles.resultTitle}>Reading for Meaning</h1>
            <p style={styles.resultText}>You scored <strong>{score} / {questions.length}</strong> ({percentage}%). Your completion is saved for this Reasoning account.</p>
            <div style={styles.actions}><Link href="/Reasoning/Verbal/Dashboard/Stage1/Module1" style={styles.primary}>Try Again</Link><Link href="/Reasoning/Verbal/Dashboard/Stage1" style={styles.secondary}>View Stage Progress</Link></div>
          </section>
        </div></main>
      </>
    );
  }

  const answered = selected !== null;
  return (
    <>
      <Head><title>Reading for Meaning | Verbal Skills | Upskilleduonline</title><meta name="description" content="Interactive reading comprehension practice for foundational verbal reasoning." /></Head>
      <main style={styles.page}><div style={styles.wrapper}>
        <Link href="/Reasoning/Verbal/Dashboard/Stage1" style={styles.back}>← Back to Foundation Verbal</Link>
        <p style={styles.eyebrow}>Stage 01 · Module 01</p><h1 style={styles.title}>Reading for Meaning</h1>
        <p style={styles.intro}>Read closely, identify what matters, and answer five questions about meaning, evidence, purpose and summary.</p>
        <section style={styles.progress}><div style={styles.progressTop}><span>Question {current + 1} of {questions.length}</span><span>{score} correct</span></div><div style={styles.track}><div style={{ ...styles.fill, width: `${((current + (answered ? 1 : 0)) / questions.length) * 100}%` }} /></div></section>
        <section style={styles.card}>
          <div style={styles.passage}>{question.passage}</div>
          <h2 style={styles.question}>{question.prompt}</h2>
          {question.options.map((option, index) => <button key={option} type="button" onClick={() => handleAnswer(index)} style={{ ...styles.option, ...(selected === index ? styles.selected : {}) }}>{String.fromCharCode(65 + index)}. {option}</button>)}
          {answered && <div style={styles.feedback}><strong>{selected === question.answer ? "Correct." : "Not quite."}</strong> {question.explanation}<div style={styles.actions}><button type="button" onClick={handleNext} style={styles.primary}>{current === questions.length - 1 ? "Complete Module" : "Next Question"}</button></div></div>}
        </section>
      </div></main>
    </>
  );
}
