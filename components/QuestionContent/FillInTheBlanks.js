import React, { useState, useRef, useEffect } from 'react';
import styles from '../../src/styles/quiz/quiz.module.css'; // Adjust the path as needed

const FillInTheBlanksComponent = ({ question, questionNumber, onAnswerSelected, isSubmitted, onNext, onResult }) => {
  const { question: sentence, choices, correctAnswer } = question;
  const [userInput, setUserInput] = useState('');
  
  // Ref for the input field
  const inputRef = useRef(null);

  // Function to handle input changes
  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = () => {
    const userAnswer = userInput.trim();
    const correctAnswerText = choices[correctAnswer - 1];
    const isCorrect = userInput.trim().toLowerCase() === choices[correctAnswer - 1].toLowerCase();

        // Send the user's input and the correct answer to the parent
        const result = {
          questionNumber,
          userAnswer,
          correctAnswer: correctAnswerText,
        };

        onAnswerSelected(userAnswer, correctAnswer);
        onResult(isCorrect, result);  // Send the full report for this question

    setUserInput('')
    onAnswerSelected(userInput.trim(), correctAnswer);
    setTimeout(() => {
      onNext(); // Move to the next question after a short delay
    }, 1000);
  };

  // Focus the input field when the component is rendered
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  // Render sentence with an input field
  const renderSentence = sentence.split('______').map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < sentence.split('______').length - 1 && (
        <input
          type="text"
          value={userInput}
          onChange={handleChange}
          className={styles.inputField}
          disabled={isSubmitted}
          ref={inputRef} // Attach ref to the input field
        />
      )}
    </React.Fragment>
  ));

  return (
    <div>
      <h2 className={styles.fillblanksentence}>{renderSentence}</h2>
      <button onClick={handleSubmit} className={styles.submitButton1} disabled={isSubmitted}>
        Submit
      </button>
    </div>
  );
};

export default FillInTheBlanksComponent;