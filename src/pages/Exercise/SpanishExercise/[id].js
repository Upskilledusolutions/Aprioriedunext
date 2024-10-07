import { useEffect, useState } from "react";
import { quiz } from "../../../Data/ExerciseData/spanish"; // Importing the quiz data
import styles from "../../../styles/quiz/quiz.module.css";
import { useRouter } from "next/router";
import { BsAlarm } from "react-icons/bs";
import { FaCheck } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import Head from "next/head";
import MCQComponent from '../../../../components/QuestionContent/MCQ';
import FillInTheBlanksComponent from '../../../../components/QuestionContent/FillInTheBlanks';
import MatchTheFollowingGame from "../../../../components/QuestionContent/MatchtheFollowing";
import { useDispatch, useSelector } from "react-redux";
import { unlockExercise } from "@/Store";

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
  const [questionType, setQuestionType] = useState(''); // State to store selected question type
  const [isModalOpen, setIsModalOpen] = useState(true); // State to control modal visibility

  const dispatch = useDispatch();
  const unlockedPages = useSelector((state) => state.unlockedExercises.unlockedExercisesSpanish);
  const subject = 'Spanish';

  const router = useRouter();
  const { id } = router.query; // Get the dynamic route parameter

  const quizId = id ? parseInt(id) : 0;
  const selectedQuiz = quiz[quizId - 1] ? quiz[quizId - 1] : quiz[0]; // Default to first quiz if id is invalid

  const questions = selectedQuiz.questions;

  // Filter questions based on selected question type
  const filteredQuestions = questionType
    ? questions.filter((q) => q.type === questionType)
    : questions;

  const { question, choices, correctAnswer } = filteredQuestions[activeQuestion];

  const reloadPage = () => {
    router.reload();
  };

  const onClickNext = () => {
    setTime(25);
    setSelectedAnswerIndex(null);
    setIsSubmitted(false); // Reset isSubmitted
    setResult((prev) =>
      selectedAnswer
        ? { ...prev, correctAnswers: prev.correctAnswers + 1 }
        : { ...prev, correctAnswers: prev.correctAnswers, wrong: prev.wrong + 1 }
    );

    if (activeQuestion !== filteredQuestions.length - 1) {
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

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const onAnswerSelected = (answer, index) => {
    setSelectedOption(answer); // Store selected option
    setIsSubmitted(true); // Set as submitted
    setTime(-1); // Stop the timer
    setSelectedAnswerIndex(index); // Track selected answer index
    setSelectedAnswer(answer === correctAnswer); // Check if the answer is correct
  };

  useEffect(() => {
    setActiveQuestion(0);
    setShowResult(false);
    setSelectedAnswer("");
    setSelectedAnswerIndex(null);
    setSelectedOption(null);
    setTime(25);
    setStart(true);
    setResult({ correctAnswers: 0, wrong: 0 });
  }, [id, questionType]);

  useEffect(() => {
    if (filteredQuestions[activeQuestion]?.type === 'MatchTheFollowing') {
      setTime(90); 
    }
    else if (filteredQuestions[activeQuestion]?.type === 'FillInTheBlanks') {
      setTime(35); 
    }
  }, [activeQuestion, questionType]);

  const addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  useEffect(() => {

    if (id) {
      const currentIndex = quiz.findIndex((page) => page.quiz === id);
      if (currentIndex !== -1 && currentIndex < quiz.length - 1) {
        const nextPageId = quiz[currentIndex + 1].quiz;
        if (!unlockedPages.includes(nextPageId)) {
          const multiple = [nextPageId, quiz[currentIndex + 2]?.quiz, quiz[currentIndex + 3]?.quiz, quiz[currentIndex + 4]?.quiz, quiz[currentIndex + 5]?.quiz]
          dispatch(unlockExercise({ subject, exerciseId: multiple }));
        }
      }
    }
  }, [id, quiz, dispatch, unlockedPages]);

  useEffect(() => {
    if (time === 0) {
      onClickNext(); 
    } else if (time > 0) {
      const interval = setInterval(() => {
        setTime((prev) => prev - 1); 
      }, 1000);
      return () => clearInterval(interval); 
    }
  }, [time]);

  // Modal for selecting question type
  const Modal = () => (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <h3>Select Question Type</h3>
        <button onClick={() => selectQuestionType('MCQs')}>MCQs</button>
        <button onClick={() => selectQuestionType('FillInTheBlanks')}>Fill in the Blanks</button>
        <button onClick={() => selectQuestionType('MatchTheFollowing')}>Match the Following</button>
      </div>
    </div>
  );

  const selectQuestionType = (type) => {
    setQuestionType(type);
    setIsModalOpen(false);
  };

  return (
    <>
      <Head>
        <title>Spanish Exercise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main className={styles.mainLayout}>
        {isModalOpen && <Modal />} {/* Show modal if no question type selected */}

        {/* Sidebar/Menu for larger screens */}
        <div className={`${styles.sidebar} ${styles.desktopSidebar}`}>
          <ul>
            <li onClick={reloadPage}><a>MCQ</a></li>
            <li onClick={reloadPage}><a>Fill in the Blanks</a></li>
            <li onClick={reloadPage}><a>Match the Following</a></li>
          </ul>
        </div>

        {/* Quiz Container */}
        <div className={styles.container}>
          <div className={styles.timer}>
            <BsAlarm /> <span>{addLeadingZero(time)}</span>
          </div>

          <div className={styles.quizcontainer}>
            {!showResult ? (
              <div>
                <div className={styles.flex5}>
                  <div>
                    <span className={styles.activequestionno}>{addLeadingZero(activeQuestion + 1)}</span>
                    <span className={styles.totalquestion}>/{addLeadingZero(filteredQuestions.length)}</span>
                  </div>
                  <div className={styles.scores}>
                    <div className={styles.checkcont}>
                      <FaCheck className={styles.check} />:<div>{result.correctAnswers}</div>
                    </div>
                    <div className={styles.checkcont}>
                      <RxCross1 className={styles.cross} />:<div>{result.wrong}</div>
                    </div>
                  </div>
                </div>

                {filteredQuestions[activeQuestion].type === 'MatchTheFollowing' && (
                  <MatchTheFollowingGame
                    questionData={filteredQuestions[activeQuestion]}
                    onNext={onClickNext}
                    onResult={({ isCorrect, correctMatches }) => {
                      setResult(prev => ({
                        correctAnswers: correctMatches,
                        wrong: 10 - correctMatches
                      }));
                    }}
                  />
                )}

                {filteredQuestions[activeQuestion].type === 'MCQs' && (
                  <MCQComponent
                    question={filteredQuestions[activeQuestion]}
                    onAnswerSelected={onAnswerSelected}
                    selectedOption={selectedOption}
                    isSubmitted={isSubmitted}
                  />
                )}

                {filteredQuestions[activeQuestion].type === 'FillInTheBlanks' && (
                  <FillInTheBlanksComponent
                    question={filteredQuestions[activeQuestion]}
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

{filteredQuestions[activeQuestion].type !== 'MatchTheFollowing' && filteredQuestions[activeQuestion].type !== 'FillInTheBlanks' && (
                  <div className={styles.flexright}>
                    <button onClick={onClickNext} disabled={selectedAnswerIndex === null}>
                      {activeQuestion === filteredQuestions.length - 1 ? "Finish" : "Next"}
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className={styles.result}>
                <h3>Final Result</h3>
                <div className={styles.margindena}>
                  <FaCheck className={styles.check} /> Correct Answers: {result.correctAnswers}
                </div>
                <div className={styles.margindena1}>
                  <RxCross1 className={styles.cross} /> Wrong Answers: {filteredQuestions[activeQuestion].type === 'MatchTheFollowing' ? 10 - result.correctAnswers : result.wrong - 1}
                </div>
                <button onClick={reloadPage}>Retry Quiz</button>
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
};

export default Quiz;