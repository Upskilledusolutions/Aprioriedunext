import { useState } from "react";
import { quiz } from "../../Data/sanskritquestions";
import styles from "../../styles/quiz/quiz.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });

  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];
  const router = useRouter();

  const reloadPage = () => {
    router.reload();
  };

  const onClickNext = () => {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  };

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className={styles.container}>
      <div className={styles.quizcontainer}>
        {!showResult ? (
          <div>
            <div>
              <span className={styles.activequestionno}>
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className={styles.totalquestion}>
                /{addLeadingZero(questions.length)}
              </span>
            </div>
            <h2>{question}</h2>
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelected(answer, index)}
                  key={answer}
                  className={
                    selectedAnswerIndex === index
                      ? `${styles.selectedanswer}`
                      : null
                  }
                >
                  {answer}
                </li>
              ))}
            </ul>
            <div className={styles.flexright}>
              <button
                onClick={onClickNext}
                disabled={selectedAnswerIndex === null}
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.result}>
            <h1>Result</h1>
            <p>
              Total Question: <span>{questions.length}</span>
            </p>
            <p>
              Total Score:<span> {result.score}</span>
            </p>
            <p>
              Correct Answers:<span> {result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers:<span> {result.wrongAnswers}</span>
            </p>
            <div className={styles.flex}>
              <Link className={styles.btns} href="/QuizTime">
                Go Back
              </Link>
              <div className={styles.btns} onClick={reloadPage}>
                Retry
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
