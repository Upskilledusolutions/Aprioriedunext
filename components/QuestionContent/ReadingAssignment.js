import React, { useEffect, useState } from "react";
import styles from "../../src/styles/quiz/reading.module.css"
import { useDispatch, useSelector } from "react-redux";
import { addFinishedQuiz, updateCompletedQuizzes } from "@/Store";
import Modal from "react-modal"; 
import { addSingleFinishedQuizToServer } from "../../src/helperfunction/Finishedquiz";

const ReadingAssignment = ({ id, subject, readingText, questions, Title }) => {
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions?.length).fill(null));
  const paragraphs = readingText?.split("\n");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 5 minutes in seconds
  const { user } = useSelector((state) => state.auth);
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

    const handleAddQuiz = async ({ questionType, quizId, subject }) => {
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
        console.log("Finished quiz updated on server:", result);
      } catch (error) {
        console.error("Error updating finished quiz on server:", error);
      }
    };

  const handleSubmit = () => {
    const calculatedScore = questions.reduce((total, question, index) => {
      return total + (selectedAnswers[index] === question.correctAnswer ? 1 : 0);
    }, 0);
    setScore(calculatedScore);
    setIsModalOpen(true);
    handleAddQuiz({questionType: "MCQs", quizId: id, subject})
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