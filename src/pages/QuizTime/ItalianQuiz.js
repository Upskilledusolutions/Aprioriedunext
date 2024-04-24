import { useEffect, useState } from "react";
import { quiz } from "../../Data/italianquestions";
import styles from "../../styles/quiz/quiz.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsAlarm } from "react-icons/bs";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [reveal, setReveal] = useState(false)
  const [time, setTime] = useState(30)
  const [result, setResult] = useState({correctAnswers: 0});
  const { questions } = quiz;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const router = useRouter();

    const reloadPage = () => {
    router.reload();
  };

    const onClickNext = () => {
    setTime(30)
    setSelectedAnswerIndex(null);
    setResult((prev) => selectedAnswer ? {...prev, correctAnswers: prev.correctAnswers + 1} : { ...prev, correctAnswers: prev.correctAnswers });
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      setReveal(false)
    } else {
      setActiveQuestion(0);
      setTime(0)
      setShowResult(true);
    }
  };

    const onAnswerSelected = (answer, index) => {
      setReveal(true)
      setTime(-1)
      setSelectedAnswerIndex(index);
      if (answer !== correctAnswer) {
        setSelectedAnswer(false);
      } else {
        setSelectedAnswer(true);
      }
  };

  useEffect(() => {
    if(time === 0){
      onClickNext()
    }
    if(showResult){
      setTime(-1)
    }
    const interval = time > 0 && setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => clearInterval(interval);
  },[time]);

  console.log(result)

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <div className={styles.container}>
    {time >= 0 && <div className={styles.timer}><BsAlarm /> <span>{time}</span></div>}
      <div className={styles.quizcontainer}>
      <Image className={styles.background} src={'/languageclub/background (4).jpg'} width={2000} height={2000} alt=''></Image>
      {!showResult ? (
          <div>
            <div>
              <span className={styles.activequestionno}>{addLeadingZero(activeQuestion + 1)}</span>
              <span className={styles.totalquestion}>/{addLeadingZero(questions.length)}</span>
            </div>
            <h2 className={styles.ques}>{question}</h2>
            {/* <ul>{choices.map((answer, index) => (
                <li onClick = {() => onAnswerSelected(answer, index)} disabled={selectedAnswer ? false : true} key={answer} className={selectedAnswer ? `${styles.correct}` : `${styles.wrong}`} >{answer}</li>
              ))}
            </ul> */}
            <ul>
                <li onClick = {() => onAnswerSelected(choices[0], 0)} disabled={selectedAnswer ? false : true} key={choices[0]} className={reveal ? choices[0] === correctAnswer ? `${styles.correct}` : `${styles.wrong}` : ''} >{choices[0]}</li>
                <li onClick = {() => onAnswerSelected(choices[1], 0)} disabled={selectedAnswer ? false : true} key={choices[1]} className={reveal ? choices[1] === correctAnswer ? `${styles.correct}` : `${styles.wrong}` : ''}>{choices[1]}</li>
                <li onClick = {() => onAnswerSelected(choices[2], 0)} disabled={selectedAnswer ? false : true} key={choices[2]} className={reveal ? choices[2] === correctAnswer ? `${styles.correct}` : `${styles.wrong}` : ''} >{choices[2]}</li>
                <li onClick = {() => onAnswerSelected(choices[3], 0)} disabled={selectedAnswer ? false : true} key={choices[3]} className={reveal ? choices[3] === correctAnswer ? `${styles.correct}` : `${styles.wrong}` : ''} >{choices[3]}</li>
            </ul>
            <div className={styles.flexright}>
              <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className={styles.result}>
            <h1 className={styles.headingresult}>Result</h1>
            <p>Total Question: <span>{questions.length}</span></p>
            <p>Total Score:<span> {result.correctAnswers * 5 - 5}</span></p>
            <p>Correct Answers:<span> {result.correctAnswers - 1}</span></p>
            <p>Wrong Answers:<span> {11 - result.correctAnswers}</span></p>
            <div className={styles.flex}> 
              <Link className={styles.btns} href="/QuizTime">Go Back</Link>
                <div className={styles.btns} onClick={reloadPage}>Retry</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
