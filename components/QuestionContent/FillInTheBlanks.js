import React, { useState, useRef, useEffect } from 'react';
import styles from '../../src/styles/quiz/quiz.module.css'; // Adjust the path as needed

const FillInTheBlanksComponent = ({ question, onAnswerSelected, isSubmitted, onNext, onResult }) => {
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
    const isCorrect = userInput.trim().toLowerCase() === choices[correctAnswer - 1].toLowerCase();
    setUserInput('')
    onAnswerSelected(userInput.trim(), correctAnswer);
    setTimeout(() => {
      onResult(isCorrect);
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





// import React, { useState } from 'react';
// import styles from '../../src/styles/trialtest.module.css';

// const FillInTheBlanks = ({ onNext, onResult }) => {
//     // Example text with blanks
//     const text = "Working from home is much ___ today due to the development of the ___. This has resulted in a change in working ___ for those who work for companies.";
//     const answers = ["easier", "internet", "hours"];
//     const options = [
//         ["harder", "easier", "better", "faster"],
//         ["internet", "intranet", "network", "extranet"],
//         ["hours", "conditions", "salaries", "opportunities"]
//     ];

//     // Split text into parts around the blanks
//     const parts = text.split("___");

//     const [userAnswers, setUserAnswers] = useState(Array(answers.length).fill(""));

//     const handleChange = (index, value) => {
//         const updatedAnswers = [...userAnswers];
//         updatedAnswers[index] = value;
//         setUserAnswers(updatedAnswers);
//     };

//     const handleSubmit = () => {
//         // Check answers
//         const correct = userAnswers.every((answer, index) => answer.toLowerCase() === answers[index].toLowerCase());
//         onResult(correct);
//         onNext();
//     };

//     return (
//         <div className={styles.fillInTheBlanks}>
//             <p>
//                 {parts.map((part, index) => (
//                     <React.Fragment key={index}>
//                         {part}
//                         {index < parts.length - 1 && (
//                             <select
//                                 value={userAnswers[index]}
//                                 onChange={(e) => handleChange(index, e.target.value)}
//                                 className={styles.select}
//                             >
//                                 <option value="">Select an answer</option>
//                                 {options[index].map(option => (
//                                     <option key={option} value={option}>{option}</option>
//                                 ))}
//                             </select>
//                         )}
//                     </React.Fragment>
//                 ))}
//             </p>
//             <button onClick={handleSubmit} className={styles.submitButton}>
//                 Submit Answers
//             </button>
//         </div>
//     );
// };

// export default FillInTheBlanks;


