import React, { useState, useEffect } from 'react';
import styles from '../../src/styles/Minesweeper.module.css'; // Ensure this path is correct

const ClickCorrectWordsComponent = ({ question, onNext, onResult }) => {
    const { correctAnswers, options } = question;

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    useEffect(() => {
        setSelectedOptions([]);
        setIsSubmitted(false);
        setFeedback(null);
        setIsCorrect(false);
    }, [question]);

    const handleOptionClick = (option) => {
        if (isSubmitted) return; // Disable after submission

        if (selectedOptions.includes(option)) return; // Prevent selecting the same option again

        const updatedSelectedOptions = [...selectedOptions, option];
        setSelectedOptions(updatedSelectedOptions);

        // Check if the selected option is correct
        if (!correctAnswers.includes(option)) {
            setFeedback("Incorrect! Moving to the next question...");
            submitGame(false); // Submit immediately if an incorrect answer is clicked
        } else {
            // If all correct answers are selected, submit the game
            if (updatedSelectedOptions.length === correctAnswers.length && correctAnswers.every(answer => updatedSelectedOptions.includes(answer))) {
                submitGame(true); // All correct answers selected
            }
        }
    };

    const submitGame = (isCorrect) => {
        setIsSubmitted(true);
        setFeedback(isCorrect ? "Correct! Moving to the next question..." : "Incorrect! Moving to the next question...");
        setIsCorrect(isCorrect);

        setTimeout(() => {
            onResult(isCorrect); // Notify parent of the result
            onNext(); // Move to the next question or component
        }, 1000); // Proceed after 1 second
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

            {feedback && (
                <p className={styles.feedback}>
                    {feedback}
                </p>
            )}
        </div>
    );
};

export default ClickCorrectWordsComponent;
