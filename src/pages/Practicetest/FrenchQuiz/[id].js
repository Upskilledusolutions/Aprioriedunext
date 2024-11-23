import { useEffect, useState } from "react";
import { quiz } from "../../../Data/Practicetests/french"; // Importing the quiz data
import styles from "../../../styles/quiz/quiz.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsAlarm } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Head from "next/head";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // For toggling icons
import { useSelector } from 'react-redux'; // To access authentication status from Redux
import MCQComponent from '../../../../components/QuestionContent/MCQ'
import FillInTheBlanksComponent from '../../../../components/QuestionContent/FillInTheBlanks'
import JumbledWordsComponent from '../../../../components/QuestionContent/ReorderParagraph'
import ClickCorrectWordsComponent from '../../../../components/QuestionContent/HighlightIncorrectWords'
import DragAndDropComponent from '../../../../components/QuestionContent/SelectMissingWords'
import MatchTheFollowingGame from "../../../../components/QuestionContent/MatchtheFollowing";

const Quiz = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [time, setTime] = useState(25);
  const [start, setStart] = useState(true);
  const [result, setResult] = useState({ correctAnswers: 0, wrong: 0 });
  const [showMenu, setShowMenu] = useState(false); // Toggle state for sidebar on mobile
  const [selectedOption, setSelectedOption] = useState(null);
 const [isSubmitted, setIsSubmitted] = useState(false);

  const router = useRouter();
  const { id } = router.query; // Get the dynamic route parameter

  const quizId = id ? parseInt(id) : 0;
  const selectedQuiz = quiz[quizId - 1] ? quiz[quizId - 1] : quiz[0]; // Default to first quiz if id is invalid

  const questions = selectedQuiz.questions;
  const { question, choices, correctAnswer } = questions[activeQuestion];

  const reloadPage = () => {
    router.reload();
  };

  const onClickNext = () => {
    setTime(15);
    setSelectedAnswerIndex(null);
    setIsSubmitted(false); // Reset isSubmitted
    setResult((prev) =>
      selectedAnswer
        ? { ...prev, correctAnswers: prev.correctAnswers + 1 }
        : { ...prev, correctAnswers: prev.correctAnswers, wrong: prev.wrong + 1 }
    );
  
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
      setSelectedOption(null); // Reset selected option
      setSelectedAnswer(""); // Reset selected answer
      setStart(true);
    } else {
      setShowResult(true);
      setActiveQuestion(0); // Reset active question for the next time
      setTime(0);
      setSelectedOption(null);
      setSelectedAnswer("");
    }
  };

  useEffect(() => {
    if (questions[activeQuestion]?.type === 'MatchTheFollowing') {
      setTime(90); 
    }
    else if (questions[activeQuestion]?.type === 'JumbledWords') {
      setTime(40); 
    }
    else if (questions[activeQuestion]?.type === 'FillInTheBlanks') {
      setTime(35); 
    }
  }, [activeQuestion, questions]);
  

const onAnswerSelected = (answer, index) => {
  setSelectedOption(answer); // Store selected option
  setIsSubmitted(true); // Set as submitted
  setTime(-1); // Stop the timer
  setSelectedAnswerIndex(index); // Track selected answer index
  setSelectedAnswer(answer === correctAnswer); // Check if the answer is correct
};


    // Assuming your quiz data has a "type" field like { type: 'mcq', question: '...', choices: [...] }

const mcqs = questions.filter((q) => q.type === 'MCQs');
const fillInTheBlanks = questions.filter((q) => q.type === 'FillInTheBlanks');
const jumbledWords = questions.filter((q) => q.type === 'JumbledWords');
// const clickCorrectWords = questions.filter((q) => q.type === 'ClickCorrectWords');
// const dragAndDrop = questions.filter((q) => q.type === 'DragAndDrop');
const MatchTheFollowing = questions.filter((q) => q.type === 'MatchTheFollowing');

// Combine all question types into one array to iterate through in the quiz
const allQuestions = [...mcqs, ...fillInTheBlanks, ...jumbledWords, ...MatchTheFollowing];

  useEffect(() => {
    // Reset the quiz state when the quiz changes (when `id` changes)
    setActiveQuestion(0);
    setShowResult(false);
    setSelectedAnswer("");
    setSelectedAnswerIndex(null);
    setSelectedOption(null);
    setTime(15);
    setStart(true);
    setResult({ correctAnswers: 0, wrong: 0 });
  }, [id]); // Only run when `id` changes
  

  useEffect(() => {
    if (time === 0) {
      onClickNext();
    }
    if (showResult) {
      setTime(-1);
    }
    const interval = time > 0 && setInterval(() => setTime(time - 1), 1000);
    return () => clearInterval(interval);
  }, [time]);

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const onResultHandler = (isCorrect) => {
    if (!isSubmitted) {
        // Update the result only once per question
        setResult((prev) => ({
            correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
            wrong: !isCorrect ? prev.wrong + 1 - 1 : prev.wrong - 1
        }));
        setIsSubmitted(true); // Prevent multiple result updates for the same question
    }
};

  return (
    <>
      <Head>
        <title>French Quiz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main className={styles.mainLayout}>
        {/* Sidebar/Menu for larger screens */}
        <div className={`${styles.sidebar} ${styles.desktopSidebar}`}>
  <ul>
    <li className={styles.whitetube}>
      <a className={styles.fontblack}>MCQ</a>
    </li>
    <li className={styles.whitetube}>
      <a className={styles.fontblack}>Fill in the Blanks</a>
    </li>
    <li className={styles.whitetube}>
      <a className={styles.fontblack}>Jumbled Words</a>
    </li>
    <li className={styles.whitetube}>
      <a className={styles.fontblack}>Match the Following</a>
    </li>
  </ul>
</div>


        {/* Toggleable menu for smaller screens */}
        <div className={`${styles.mobileMenu} ${styles.sidebar}`}>
          <div className={styles.menuHeader}>
            <span>{selectedQuiz.name}</span>
            {showMenu ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          {showMenu && (
            <ul className={styles.menuList}>
              {quiz.map((qz, index) => (
                <li key={index} onClick={toggleMenu}>
                  <Link href={`/QuizTime/FrenchQuiz/${index + 1}`}>
                    {qz.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Quiz Container */}
        <div className={styles.container}>
          <div className={styles.timer}>
            <BsAlarm /> <span>{addLeadingZero(time)}</span>
          </div>

          <div className={styles.quizcontainer}>
            {!showResult ?(
    <div>
      <div className={styles.flex5}>
        <div>
          <span className={styles.activequestionno}>
            {addLeadingZero(activeQuestion + 1)}
          </span>
          <span className={styles.totalquestion}>
            /{addLeadingZero(allQuestions.length)}
          </span>
        </div>
        <div className={styles.scores}>
          <div className={styles.checkcont}>
            <FaCheck className={styles.check} />:
            <div>{result.correctAnswers}</div>
          </div>
          <div className={styles.checkcont}>
            <RxCross1 className={styles.cross} />:
            <div>{result.wrong}</div>
          </div>
        </div>
      </div>

      {/* Render based on the question type */}
      {allQuestions[activeQuestion].type === 'MCQs' && (
       <MCQComponent
       question={allQuestions[activeQuestion]}
       onAnswerSelected={onAnswerSelected}
       selectedOption={selectedOption}
       isSubmitted={isSubmitted}
     />
      )}
      {allQuestions[activeQuestion].type === 'FillInTheBlanks' && (
        <FillInTheBlanksComponent 
        question={allQuestions[activeQuestion]}
        onNext={onClickNext}
        onAnswerSelected={onAnswerSelected}
        selectedOption={selectedOption}
        isSubmitted={isSubmitted}
        onResult={(isCorrect) => {
          setResult(prev => ({
              correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
              wrong: !isCorrect ? prev.wrong + 1 - 1 : prev.wrong - 1
          }));
          }}
    />
      )}
    {allQuestions[activeQuestion].type === 'JumbledWords' && (
    <JumbledWordsComponent
        question={allQuestions[activeQuestion]}
        onNext={onClickNext}
        onResult={(isCorrect) => {
        setResult(prev => ({
            ...prev,
            correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
            wrong: !isCorrect ? prev.wrong + 1 - 1 : prev.wrong - 1
        }));
        }}
        />
    )}

{allQuestions[activeQuestion].type === 'MatchTheFollowing' && (
                  <MatchTheFollowingGame
                    questionData={allQuestions[activeQuestion]}
                    onNext={onClickNext}
                    onResult={({ isCorrect, correctMatches }) => {
                      setResult(prev => ({
                        correctAnswers: correctMatches+prev.correctAnswers,
                        wrong: 10 - correctMatches
                      }));
                    }}
                  />
                )}
      {/* {allQuestions[activeQuestion].type === 'ClickCorrectWords' && (
         <ClickCorrectWordsComponent
         question={allQuestions[activeQuestion]}
         onNext={onClickNext}
         onResult={onResultHandler}
       />
      )}
      {allQuestions[activeQuestion].type === 'DragAndDrop' && (
        <DragAndDropComponent 
        questionData={allQuestions[activeQuestion]}
        onNext={onClickNext}
        onResult={(result) => {
          setResult((prev) => ({
            ...prev,
            correctAnswers: prev.correctAnswers + (result ? 1 : 0),
            wrong: prev.wrong + (result ? 0 - 1 : 1 - 1)
          }));
        }}
        />
      )} */}

{ allQuestions[activeQuestion].type !== 'JumbledWords' && allQuestions[activeQuestion].type !== 'FillInTheBlanks'  && allQuestions[activeQuestion].type !== 'ClickCorrectWords' && allQuestions[activeQuestion].type !== 'DragAndDrop' && <div className={styles.flexright}>
        <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
          {activeQuestion === allQuestions.length - 1 ? "Finish" : "Next"}
        </button>
      </div>}

    </div>
  ) : (
              <div className={styles.result}>
                <h1 className={styles.headingresult}>Result</h1>
                <div className={styles.flexi}>
                  <div>Total Questions:</div>
                  <div className={styles.color}>{questions.length}</div>
                </div>
                <div className={styles.flexi}>
                  <div>Total Score:</div>
                  <div className={styles.color}>{result.correctAnswers * 5}</div>
                </div>
                <div className={styles.flexi}>
                  <div>Correct Answers:</div>
                  <div className={styles.color}>{result.correctAnswers}</div>
                </div>
                {/* <div className={styles.flexi}>
                  <div>Wrong Answers:</div>
                  <div className={styles.color}>
                    {questions.length - result.correctAnswers}
                  </div>
                </div> */}
                <div className={styles.flex}>
                  <Link className={styles.btns} href="/Practicetest/FrenchQuizs">
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
      </main>
    </>
  );
};

export default Quiz;
