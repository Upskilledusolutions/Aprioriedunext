import React, { useState, useEffect } from 'react';
import styles from '../../src/styles/Minesweeper.module.css'; // Ensure this path is correct

const ClickCorrectWordsComponent = ({ question, onNext, onResult }) => {
    const { correctAnswers, options } = question;

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState(null);

    useEffect(() => {
        setSelectedOptions([]);
        setIsSubmitted(false);
        setFeedback(null);
    }, [question]);

    const handleOptionClick = (option) => {
        if (isSubmitted) return; // Disable after submission

        // Prevent selecting the same option again
        if (selectedOptions.includes(option)) return;

        const updatedSelectedOptions = [...selectedOptions, option];
        setSelectedOptions(updatedSelectedOptions);

        // If incorrect option is clicked, immediately submit as incorrect
        if (!correctAnswers.includes(option)) {
            setFeedback("Incorrect! Moving to the next question...");
            submitGame(false); // Submit immediately if an incorrect option is clicked
        } else {
            // If all correct answers are selected, submit the game
            if (updatedSelectedOptions.length === correctAnswers.length && correctAnswers.every(answer => updatedSelectedOptions.includes(answer))) {
                submitGame(true); // All correct answers selected
            }
        }
    };

    const submitGame = (isCorrect) => {
        if (isSubmitted) return; // Prevent multiple submissions
        setIsSubmitted(true);
        setFeedback(isCorrect ? "Correct! Moving to the next question..." : "Incorrect! Moving to the next question...");
        
        setTimeout(() => {
            onResult(isCorrect); // Notify the parent about the result
            onNext(); // Move to the next question
        }, 1000); // Delay the transition by 1 second for feedback
    };

    return (
        <div className={styles.minesweeperGame}>
            <h2>{question.question}</h2> {/* Display the question */}
            
            <div className={styles.grid}>
                {options.map((option, index) => (
                    <div
                        key={index}
                        className={`${styles.option} ${selectedOptions.includes(option) ? styles.correctOption : ''}`}
                        onClick={() => handleOptionClick(option)}
                    >
                        {option}
                    </div>
                ))}
            </div>

            {/* {feedback && (
                <p className={styles.feedback}>
                    {feedback}
                </p>
            )} */}
        </div>
    );
};

export default ClickCorrectWordsComponent;
