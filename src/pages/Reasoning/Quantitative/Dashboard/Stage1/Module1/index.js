import Head from "next/head";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { completeReasoningModule } from "../../../../../../utils/reasoningProgress";

const questions = [
  { prompt: "Which estimate is closest to 49 × 21?", options: ["500", "1,000", "1,500", "2,000"], answer: 1, explanation: "49 is close to 50 and 21 is close to 20, so 50 × 20 = 1,000 is a strong estimate." },
  { prompt: "Which number is greatest?", options: ["0.72", "7/10", "69%", "0.705"], answer: 0, explanation: "0.72 = 72%, which is greater than 70%, 69% and 70.5%." },
  { prompt: "A quantity increases from 80 to 100. What is the percentage increase?", options: ["20%", "25%", "30%", "40%"], answer: 1, explanation: "The increase is 20. Relative to the original 80, 20 ÷ 80 = 25%." },
  { prompt: "Which statement must be true if x is greater than 12?", options: ["x is negative", "x is less than 10", "x is greater than 10", "x equals 12"], answer: 2, explanation: "Any number greater than 12 is necessarily greater than 10 as well." },
  { prompt: "A calculator gives 2.4 × 49 = 117.6. Which quick check is most useful?", options: ["49 is about 50, so the product should be about 120", "The answer must be below 50", "2.4 + 49 should equal 117.6", "The product should be exactly 100"], answer: 0, explanation: "Rounding 49 to 50 gives 2.4 × 50 = 120, so 117.6 is plausible." },
];

const styles = {
  page: { minHeight: "80vh", padding: "48px 20px 80px", background: "var(--surface)" }, wrapper: { maxWidth: 900, margin: "0 auto" }, back: { color: "var(--muted)", textDecoration: "none", fontWeight: 700 }, eyebrow: { margin: "30px 0 10px", color: "var(--blue)", fontWeight: 800, letterSpacing: ".08em", textTransform: "uppercase", fontSize: 13 }, title: { color: "var(--text)", fontSize: "clamp(34px,5vw,52px)", lineHeight: 1.08, margin: 0 }, intro: { color: "var(--muted)", fontSize: 18, lineHeight: 1.7 }, progress: { marginTop: 22, padding: 18, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 16 }, progressTop: { display: "flex", justifyContent: "space-between", gap: 16, color: "var(--text)", fontWeight: 800, marginBottom: 10 }, track: { height: 8, borderRadius: 99, background: "#e7ecf3", overflow: "hidden" }, fill: { height: "100%", background: "var(--blue)", borderRadius: 99 }, card: { marginTop: 22, padding: 28, background: "var(--card)", border: "1px solid var(--border)", borderRadius: 18 }, question: { color: "var(--text)", fontSize: 22, lineHeight: 1.45, margin: "0 0 22px" }, option: { display: "block", width: "100%", textAlign: "left", padding: "14px 16px", marginTop: 11, borderRadius: 11, border: "1px solid var(--border)", background: "var(--surface)", color: "var(--text)", cursor: "pointer", fontSize: 16 }, selected: { border: "2px solid var(--blue)", padding: "13px 15px" }, feedback: { marginTop: 20, padding: 18, borderRadius: 12, background: "rgba(0,59,147,.07)", color: "var(--text)", lineHeight: 1.6 }, actions: { display: "flex", gap: 12, flexWrap: "wrap", marginTop: 22 }, primary: { border: 0, padding: "12px 18px", borderRadius: 10, background: "var(--blue)", color: "#fff", fontWeight: 800, cursor: "pointer" }, secondary: { display: "inline-block", padding: "12px 18px", borderRadius: 10, border: "1px solid var(--border)", color: "var(--text)", textDecoration: "none", fontWeight: 800 }, resultTitle: { color: "var(--text)", fontSize: 30, margin: "0 0 10px" }, resultText: { color: "var(--muted)", lineHeight: 1.7 },
};

export default function NumberSenseModule() {
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
    const finalScore = score + (selected === question.answer ? 1 : 0);
    completeReasoningModule(user.userId, "quantitative", "module1", finalScore);
    setScore(finalScore);
    setFinished(true);
  }

  if (finished) {
    return <><Head><title>Number Sense Complete | Quantitative Skills | Upskilleduonline</title></Head><main style={styles.page}><div style={styles.wrapper}><Link href="/Reasoning/Quantitative/Dashboard/Stage1" style={styles.back}>← Back to Foundation Quantitative</Link><section style={styles.card}><p style={styles.eyebrow}>Module complete</p><h1 style={styles.resultTitle}>Number Sense</h1><p style={styles.resultText}>You scored <strong>{score} / {questions.length}</strong> ({percentage}%). Your completion is saved for this Reasoning account.</p><div style={styles.actions}><Link href="/Reasoning/Quantitative/Dashboard/Stage1/Module1" style={styles.primary}>Try Again</Link><Link href="/Reasoning/Quantitative/Dashboard/Stage1" style={styles.secondary}>View Stage Progress</Link></div></section></div></main></>;
  }

  const answered = selected !== null;
  return <><Head><title>Number Sense | Quantitative Skills | Upskilleduonline</title><meta name="description" content="Interactive Number Sense practice for foundational quantitative reasoning." /></Head><main style={styles.page}><div style={styles.wrapper}><Link href="/Reasoning/Quantitative/Dashboard/Stage1" style={styles.back}>← Back to Foundation Quantitative</Link><p style={styles.eyebrow}>Stage 01 · Module 01</p><h1 style={styles.title}>Number Sense</h1><p style={styles.intro}>Predict first, calculate second, check third. Work through five questions and use the explanations to strengthen your quantitative intuition.</p><section style={styles.progress}><div style={styles.progressTop}><span>Question {current + 1} of {questions.length}</span><span>{score} correct</span></div><div style={styles.track}><div style={{ ...styles.fill, width: `${((current + (answered ? 1 : 0)) / questions.length) * 100}%` }} /></div></section><section style={styles.card}><h2 style={styles.question}>{question.prompt}</h2>{question.options.map((option, index) => <button key={option} type="button" onClick={() => handleAnswer(index)} style={{ ...styles.option, ...(selected === index ? styles.selected : {}) }}>{String.fromCharCode(65 + index)}. {option}</button>)}{answered && <div style={styles.feedback}><strong>{selected === question.answer ? "Correct." : "Not quite."}</strong> {question.explanation}<div style={styles.actions}><button type="button" onClick={handleNext} style={styles.primary}>{current === questions.length - 1 ? "Complete Module" : "Next Question"}</button></div></div>}</section></div></main></>;
}
