import React, { useEffect, useState, useRef } from "react";
import styles from "../../src/styles/quiz/reading.module.css";
import Modal from "react-modal";
import { useRouter } from 'next/router';

const ReadingAssignmentWithAudio = ({ audios, questionsPerAudio }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const [currentAudioIndex, setCurrentAudioIndex] = useState(0);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [isEndModalOpen, setIsEndModalOpen] = useState(false);
  const [isStartModalOpen, setIsStartModalOpen] = useState(true);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(null); // Timer starts as null
  const audioRef = useRef(null);
  const router = useRouter();

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
  };

  const startAssignment = async () => {
    const totalDuration = await calculateTotalAudioDuration();
    setTimeLeft(totalDuration); // Start timer with total duration
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
    setScore(0);
    setCurrentAudioIndex(0);
    setTimeLeft(null);
    setIsStartModalOpen(true);

    if (audioRef.current) {
        audioRef.current.currentTime = 0; // Reset audio to the beginning
        audioRef.current.pause(); // Pause it initially
      }
  };

  return (
    <div className={styles.readingassignment}>
      {/* Timer Section */}
      <div className={styles.timer}>Time Left: {timeLeft !== null ? formatTime(timeLeft) : "--:--"}</div>

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
          <button className={styles.closeButton} onClick={restartQuiz}>
            Restart
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ReadingAssignmentWithAudio;
