import { useEffect, useState } from "react";
import { quiz } from "../../../Data/ExerciseData/russian"; // Importing the quiz data
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
import { unlockExercise, addFinishedQuiz } from "@/Store";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

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
  const [report, setReport] = useState([])
  const [showreport, setShowreport] = useState(false)
  const [femcq, setFemcq] = useState(false)
  const [fefill, setFefill] = useState(false)
  const [fematch, setFematch] = useState(false)
  const [finished, setFinished] = useState([]);
  const [showerror, setShowerror] = useState(false)

  const dispatch = useDispatch();
  const unlockedPages = useSelector((state) => state.unlockedExercises.unlockedExercisesRussian);
  const completedQuizzes = useSelector(state => state.finishedQuizzes.completedQuizzes);
  const subject = 'Russian';

  const router = useRouter();
  const { id } = router.query; // Get the dynamic route parameter

  const quizId = id ? parseInt(id) : 0;
  const selectedQuiz = quiz[quizId - 1] ? quiz[quizId - 1] : quiz[0]; // Default to first quiz if id is invalid

  const questions = selectedQuiz.questions;

  // Filter questions based on selected question type
  const filteredQuestions = questionType
    ? questions.filter((q) => q.type === questionType)
    : questions;

  const { question, choices, correctAnswer } = filteredQuestions[activeQuestion] || {};

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
      if (questionType === 'MCQs') {setFemcq(true)
        dispatch(addFinishedQuiz({questionType:questionType,exercise:quizId,language:subject}));
      }
      if (questionType === 'FillInTheBlanks') {setFefill(true)
        dispatch(addFinishedQuiz({questionType:questionType,exercise:quizId,language:subject}));
      }
    }

    if (femcq && fefill && fematch) {
      setFinished(true); // Set finished status to true
      console.log("Exercise finished!");
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleAnswerSelected = (answer, index) => {
    setSelectedOption(answer); // Store selected option
    setIsSubmitted(true); // Set as submitted
    setTime(-1); // Stop the timer
    setSelectedAnswerIndex(index); // Track selected answer index
    setSelectedAnswer(answer === correctAnswer); // Check if the answer is correct

    const newReportEntry = {
      id: question.id,
      chosenanswer: choices[answer-1],
      rightanswer: choices[correctAnswer-1], 
    };

    setReport((prevReport) => [...prevReport, newReportEntry]);
  };

  const handleAnswerSelectedfill = (answer, index) => {
    setSelectedOption(answer); // Store selected option
    setIsSubmitted(true); // Set as submitted
    setTime(-1); // Stop the timer
    setSelectedAnswerIndex(index); // Track selected answer index
    setSelectedAnswer(answer === correctAnswer); // Check if the answer is correct

    const newReportEntry = {
      id: question.id,
      chosenanswer: answer,
      rightanswer: choices[correctAnswer-1], 
    };

    setReport((prevReport) => [...prevReport, newReportEntry]);

  };

  useEffect(() => {
    setActiveQuestion(0);
    setShowResult(false);
    // setSelectedAnswer("");
    // setSelectedAnswerIndex(null);
    // setSelectedOption(null);
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
    if (time === 0) {
      onClickNext(); 
    } else if (time > 0) {
      const interval = setInterval(() => {
        setTime((prev) => prev - 1); 
      }, 1000);
      return () => clearInterval(interval); 
    }
  }, [time]);

  const selectQuestionType = (type) => {
    setQuestionType(type);
    setIsModalOpen(false);
    setReport([]);
  };

  let completedQuizzes1 = completedQuizzes.filter(data => data.language == subject)
  const currentQuiz = completedQuizzes1.find(quiz => quiz.exercise === quizId);

  return (
    <>
      <Head>
        <title>Russian Exercise</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main className={styles.mainLayout}>
        {/* {isModalOpen && <Modal />} */}

        {/* Sidebar/Menu for larger screens */}
        <div className={`${styles.sidebar} ${styles.desktopSidebar}`}>
          <ul>
            <li className={`${currentQuiz?.questionTypes.includes('MCQs') ? styles.back : styles.white}`} 
            onClick={()=>selectQuestionType('MCQs')}><a>MCQ</a></li>
            <li className={`${currentQuiz?.questionTypes.includes('FillInTheBlanks') ? styles.back : styles.white}`} 
            onClick={()=>[!selectedOption && selectQuestionType('FillInTheBlanks'), selectedOption && setShowerror(!showerror),setTime(-1)]}><a>Fill in the Blanks</a></li>
            <li className={`${currentQuiz?.questionTypes.includes('MatchTheFollowing') ? styles.back : styles.white}`} 
            onClick={()=>[!selectedOption && selectQuestionType('MatchTheFollowing'), selectedOption && setShowerror(!showerror),setTime(-1)]}><a>Match the Following</a></li>
          </ul>
        </div>


        <div className={`${styles.mobileMenu} ${styles.sidebar}`}>
          <div className={styles.menuHeader} onClick={toggleMenu}>
            <span>{questionType == '' ? 'Select' : questionType}</span>
            {showMenu ? <FiChevronUp /> : <FiChevronDown />}
          </div>
          {showMenu && (
            <ul className={styles.menuList}>
                <li onClick={toggleMenu}>
                  <div onClick={()=>selectQuestionType('MCQs')}>
                    MCQs
                  </div>
                </li>
                <li onClick={toggleMenu}>
                  <div onClick={()=>[!selectedOption && selectQuestionType('FillInTheBlanks'), selectedOption && setShowerror(!showerror),setTime(-1)]}>
                  Fill In The Blanks
                  </div>
                </li>
                <li onClick={toggleMenu}>
                  <div onClick={()=>[!selectedOption && selectQuestionType('MatchTheFollowing'), selectedOption && setShowerror(!showerror),setTime(-1)]}>
                  Match The Following
                  </div>
                </li>
            </ul>
          )}
        </div>

        {/* Quiz Container */}
        <div className={styles.container}>
        {questionType == '' ? '' :<div className={styles.timer}>
            <BsAlarm /> <span>{addLeadingZero(time)}</span>
          </div>}

          <div className={styles.quizcontainer}>
           {showerror && <div className={styles.modelback}>
            <div className={styles.errormodel}>You can't leave with an option selected! <br/><button onClick={() => setShowerror(!showerror)}>Go back</button>
            </div>
            </div>}
            {questionType === '' ? <div className={styles.starting}><div className={styles.fulltext}>Please CLICK on any one of the three question types mentioned the orange column.</div><div className={styles.textmob}>Please select a question type from the orange drop down menu above.</div></div> : 
            <div>{!showResult ? (
              <div>
                {filteredQuestions[activeQuestion] ? (
                  <>
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
                      setFematch(true)
                      dispatch(addFinishedQuiz({questionType:questionType,exercise:quizId,language:subject}));
                      setResult(prev => ({
                        correctAnswers: correctMatches+prev.correctAnswers,
                        wrong: 10 - correctMatches
                      }));
                    }}
                  />
                )}

                {filteredQuestions[activeQuestion].type === 'MCQs' && (
                  <MCQComponent
                    question={filteredQuestions[activeQuestion]}
                    selectedOption={selectedOption}
                    isSubmitted={isSubmitted}
                    onAnswerSelected={handleAnswerSelected}
                  />
                )}

                {filteredQuestions[activeQuestion].type === 'FillInTheBlanks' && (
                  <FillInTheBlanksComponent
                    subject={subject}
                    question={filteredQuestions[activeQuestion]}
                    onNext={onClickNext}
                    onAnswerSelected={handleAnswerSelectedfill}
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

                </>
                ):(
                  <h1>The question was not loaded properly. Please reload the page!</h1>
                )}
              </div>
            ) : (
              <div className={styles.result}>
                <h3>Final Result</h3>
                <div className={styles.margindena}>
                  <FaCheck className={styles.check} /> Correct Answers: {result.correctAnswers}
                </div>
                {filteredQuestions[activeQuestion]?.type === 'MatchTheFollowing' ? "" : <div className={styles.margindena1}>
                  <RxCross1 className={styles.cross} /> Wrong Answers: {result.wrong - 1}
                </div>}
                <button className={styles.mgright} onClick={reloadPage}>Retry Quiz</button>
                {filteredQuestions[activeQuestion]?.type !== 'MatchTheFollowing' && <button onClick={()=>setShowreport(!showreport)}>Show Report</button>}

              {showreport && <table className={styles.table}>
              <tr>    
                <th>S. No</th>
                <th>Selected Answer</th>
                <th>Correct Answer</th>
              </tr>
                 {filteredQuestions[activeQuestion].type === 'MCQs' && report.map((data,i)=><tr>
                    <td>{i + 1}</td>
                    <td>{data.chosenanswer}</td>
                    <td>{data.rightanswer}</td>
                  </tr>)}
                  {filteredQuestions[activeQuestion].type === 'FillInTheBlanks' &&
                     Array.from({ length: filteredQuestions.length }).map((_, i) => {
                      const data = report[i]; // Ensure we don't exceed report length
                        return data ? (
                          <tr key={i}>
                          <td>{i + 1}</td>
                          <td>{data.chosenanswer}</td>
                          <td>{data.rightanswer}</td>
                          </tr>
                        ) : null; // Avoid rendering empty rows if report is shorter
                      })
                  }
                  </table>}

              
                </div>
                )}</div>
          }      
          </div>
        </div>
      </main>
    </>
  );
};

export default Quiz;