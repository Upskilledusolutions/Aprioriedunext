import React, { useEffect, useState } from "react";
import styles from "../../src/styles/quiz/reading.module.css"
import { useDispatch } from "react-redux";
import { addFinishedQuiz } from "@/Store";
import Modal from "react-modal"; 

const ReadingAssignment = ({ id, subject, readingText, questions, Title }) => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions?.length).fill(null));
  const paragraphs = readingText?.split("\n");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 5 minutes in seconds
  const dispatch = useDispatch();

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      handleSubmit();
    }
  }, [timeLeft]);

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

  const handleSubmit = () => {
    const calculatedScore = questions.reduce((total, question, index) => {
      return total + (selectedAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
    setScore(calculatedScore);
    setIsModalOpen(true);
    dispatch(addFinishedQuiz({questionType:"MCQs",exercise:id,language:subject}));
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const restartQuiz = () => {
    setSelectedAnswers(Array(questions.length).fill(null));
    setIsModalOpen(false);
    setScore(0);
    setTimeLeft(300); // Reset timer to 5 minutes
  };

  return (
    <div className={styles.readingassignment}>

      {/* Timer Section */}
      <div className={styles.timer}>Time Left: {formatTime(timeLeft)}</div>

      {/* Reading Section */}
      <div className={styles.readingsection}>
        <h2>{Title}</h2>
        {paragraphs?.map((text, index) => (
        <p key={index}>{text}</p>
      ))}
      </div>

      {/* Questions Section */}
      <div className={styles.questionssection}>
        <h2>Questions</h2>
        {questions?.map((question, index) => (
          <div key={index} className={styles.question}>
            <p><b>{index + 1}. {question.question}</b></p>
            <ul className={styles.ulist}>
              {question.choices.map((choice, choiceIndex) => (
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

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modalContent}>
          <h2>Quiz Completed!</h2>
          <p>You scored <b>{score}</b> out of <b>{questions?.length}</b>!</p>
          <div className={styles.btncont}>
          <button className={styles.closeButton} onClick={restartQuiz}>Restart</button>
          {/* <button className={styles.closeButton} onClick={closeModal}>Close</button> */}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ReadingAssignment;