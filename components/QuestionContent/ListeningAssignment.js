import React, { useEffect, useState, useRef } from "react";
import styles from "../../src/styles/quiz/reading.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFinishedQuiz, updateCompletedQuizzes } from "@/Store";
import Modal from "react-modal";
import { useRouter } from 'next/router';
import { addSingleFinishedQuizToServer } from "../../src/helperfunction/Finishedquiz";
import { sendQuizdata } from "../../src/helperfunction/SendQuizdata";

const ReadingAssignmentWithAudio = ({ id, subject, audios, questionsPerAudio }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [isEndModalOpen, setIsEndModalOpen] = useState(false);
  const [isStartModalOpen, setIsStartModalOpen] = useState(true);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(null); 
  const [initialTime, setInitialTime] = useState(null);
  const audioRef = useRef(null);
  const { user } = useSelector((state) => state.auth);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentQuestions(questionsPerAudio[currentAudioIndex] || []);
    setSelectedAnswers(Array(questionsPerAudio[currentAudioIndex]?.length).fill(null));
  }, [currentAudioIndex, questionsPerAudio]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      handleSubmit();
    }
  }, [timeLeft]);

  const calculateTotalAudioDuration = () => {
    let totalDuration = 0;
    const audioElements = audios.map((audioSrc) => {
      const audio = new Audio(audioSrc);
      return new Promise((resolve) => {
        audio.addEventListener("loadedmetadata", () => {
          totalDuration += audio.duration;
          resolve();
        });
      });
    });

    return Promise.all(audioElements).then(() => Math.ceil(totalDuration));
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    const updatedAnswers = [...selectedAnswers];
    updatedAnswers[questionIndex] = answerIndex;
    setSelectedAnswers(updatedAnswers);
  };

  const handleAudioEnd = () => {
    if (currentAudioIndex < audios.length - 1) {
      setCurrentAudioIndex(currentAudioIndex + 1);
    } else {
      handleSubmit();
    }
  };

  const handleAddQuiz = async ({ questionType, quizId, subject, scorenow }) => {
    // Update Redux state and localStorage
    dispatch(addFinishedQuiz({questionType, exercise:quizId, language:subject}));
    dispatch(updateCompletedQuizzes({ exercise: quizId, language: subject, questionTypes: questionType }));

    // Send the new finished quiz to the backend as a single object
    try {
      const result = await addSingleFinishedQuizToServer({
        userId: user.userId,
        questionType,
        exercise: quizId,
        language: subject,
      });
      const add = await sendQuizdata({
        userId: user.userId,
        questionTypes: questionType,
        exercise: quizId,
        language: subject,
        points: scorenow*10,
      });
      console.log("Finished quiz updated on server:", result, add);
    } catch (error) {
      console.error("Error updating finished quiz on server:", error);
    }
  };

  const handleSubmit = () => {
    if (audioRef.current) {
        audioRef.current.pause();
      }

    const totalScore = questionsPerAudio.reduce((audioScore, questions, audioIndex) => {
      return (
        audioScore +
        questions.reduce((questionScore, question, questionIndex) => {
          if (
            selectedAnswers[questionIndex] === question.correctAnswer &&
            currentAudioIndex === audioIndex
          ) {
            return questionScore + 1;
          }
          return questionScore;
        }, 0)
      );
    }, 0);
    setScore(totalScore);
    setIsEndModalOpen(true);
    handleAddQuiz({questionType: "MCQs", quizId: id, subject, scorenow: totalScore});
  };

  const startAssignment = async () => {
    const totalDuration = await calculateTotalAudioDuration();
    setTimeLeft(totalDuration); 
    setInitialTime(totalDuration);
    setIsStartModalOpen(false);
    if (audioRef.current) {
        audioRef.current.play();
      }
  };

  const closeEndModal = () => {
    setIsEndModalOpen(false);
  };

  const restartQuiz = () => {
    setSelectedAnswers([]);
    setIsEndModalOpen(false);
    setIsReportModalOpen(false);
    setScore(0);
    setCurrentAudioIndex(0);
    setTimeLeft(null);
    setIsStartModalOpen(true);

    if (audioRef.current) {
        audioRef.current.currentTime = 0; // Reset audio to the beginning
        audioRef.current.pause(); // Pause it initially
    }
  };

  // Open the report modal on top of the current modal
  const openReportModal = () => {
    setIsReportModalOpen(true);
  };

  const progressPercentage =
    initialTime && timeLeft !== null
      ? Math.round(((initialTime - timeLeft) / initialTime) * 100)
      : 0;

  // Helper function to render report rows
  const renderReportRows = () => {
    return questionsPerAudio.flat().map((question, index) => {
      // Calculate which audio this question belongs to
      let questionCounter = 0;
      let audioIndex = 0;
      
      for (let i = 0; i < questionsPerAudio.length; i++) {
        if (index < questionCounter + questionsPerAudio[i].length) {
          audioIndex = i;
          break;
        }
        questionCounter += questionsPerAudio[i].length;
      }
      
      const questionIndexInAudio = index - questionCounter;
      const audioQuestions = questionsPerAudio[audioIndex];
      const questionData = audioQuestions[questionIndexInAudio];
      
      // If no answer selected, show "No answer"
      const selectedAnswer = selectedAnswers[questionIndexInAudio];
      const selectedText = selectedAnswer !== null && audioIndex === currentAudioIndex
        ? questionData.choices[selectedAnswer]
        : "No answer";
      const correctText = questionData.choices[questionData.correctAnswer];
      
      return (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{selectedText}</td>
          <td>{correctText}</td>
        </tr>
      );
    });
  };

  return (
    <div className={styles.readingassignment}>
      {/* Timer Section */}
      {/* <div className={styles.timer}>Time Left: {timeLeft !== null ? formatTime(timeLeft) : "--:--"}</div> */}

      {/* Audio Section */}
      <div className={styles.audioSection}>
        <audio
          ref={audioRef}
          src={audios[currentAudioIndex]}
          onEnded={handleAudioEnd}
        //   controls
        ></audio>
      </div>

      {/* Questions Section */}
      <div className={styles.questionssection1}>
              <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
        {/* <h2>Questions for Audio {currentAudioIndex + 1}</h2> */}
        {currentQuestions.map((question, index) => (
          <div key={index} className={styles.question}>
            <p>
              <b>{index + 1}. {question.question}</b>
            </p>
            <ul className={styles.ulist}>
              {question?.choices?.map((choice, choiceIndex) => (
                <li key={choiceIndex} className={styles.listitem}>
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      checked={selectedAnswers[index] === choiceIndex}
                      onChange={() => handleAnswerSelect(index, choiceIndex)}
                    />
                    {choice}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <button className={styles.button} onClick={handleSubmit}>Submit</button>
      </div>

      {/* Start Modal */}
      <Modal
        isOpen={isStartModalOpen}
        className={styles.modal}
        overlayClassName={styles.overlay}
        ariaHideApp={false}
      >
        <div className={styles.modalContent}>
          <h2>Start Assignment</h2>
          <p>Are you ready to begin the assignment?</p>
          <div className={styles.btncont}>
          <button className={styles.startButton} onClick={startAssignment}>
            Start
          </button>
          <button className={styles.startButton} onClick={()=>router.back()}>
            Go back
          </button>
          </div>
        </div>
      </Modal>

      {/* End Modal */}
      <Modal
        isOpen={isEndModalOpen}
        onRequestClose={closeEndModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
        ariaHideApp={false}
      >
        <div className={styles.modalContent}>
          <h2>Quiz Completed!</h2>
          <p>
            You scored <b>{score}</b> out of <b>{questionsPerAudio.flat().length}</b>!
          </p>
          <div className={styles.btncont}>
            <button className={styles.closeButton} onClick={restartQuiz}>
              Restart
            </button>
            <button className={styles.closeButton} onClick={openReportModal}>
              Show Report
            </button>
          </div>
        </div>
      </Modal>

      {/* Report Modal */}
      <Modal
        isOpen={isReportModalOpen}
        onRequestClose={() => setIsReportModalOpen(false)}
        className={styles.reportModal}
        overlayClassName={styles.reportOverlay}
        ariaHideApp={false}
      >
        <div className={styles.reportContent}>
          <h2>Quiz Report</h2>
          <table className={styles.reportTable}>
            <thead>
              <tr>
                <th>S.No</th>
                <th>Selected Answer</th>
                <th>Correct Answer</th>
              </tr>
            </thead>
            <tbody>{renderReportRows()}</tbody>
          </table>
          <button className={styles.closeButton} onClick={() => setIsReportModalOpen(false)}>Close Report</button>
        </div>
      </Modal>
    </div>
  );
};

export default ReadingAssignmentWithAudio;
