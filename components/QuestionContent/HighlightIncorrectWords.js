import React, { useState, useEffect } from 'react';
import styles from '../../src/styles/Minesweeper.module.css';

const MinesweeperGame = ({ onNext, onResult }) => {
    const questions = [
        {
            correctAnswers: ["Option 1", "Option 5", "Option 9"],
            grid: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8", "Option 9"]
        },
        {
            correctAnswers: ["Option 2", "Option 4", "Option 8"],
            grid: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8", "Option 9"]
        },
        {
            correctAnswers: ["Option 3", "Option 6", "Option 7"],
            grid: ["Option 1", "Option 2", "Option 3", "Option 4", "Option 5", "Option 6", "Option 7", "Option 8", "Option 9"]
        }
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [isCorrect, setIsCorrect] = useState(false);

    const currentQuestion = questions[currentQuestionIndex];

    useEffect(() => {
        setSelectedOptions([]);
        setIsSubmitted(false);
        setFeedback(null);
        setIsCorrect(false);
    }, [currentQuestionIndex]);

    const handleOptionClick = (option) => {
        if (isSubmitted) return; // Disable after submission

        // If the option is already selected, don't allow toggling or deselecting
        if (selectedOptions.includes(option)) return;

        // Check if the selected option is incorrect
        if (!currentQuestion.correctAnswers.includes(option)) {
            setFeedback("Incorrect! Moving to the next question...");
            submitGame(false); // Submit immediately if wrong answer is clicked
        } else {
            const updatedSelectedOptions = [...selectedOptions, option];
            setSelectedOptions(updatedSelectedOptions);

            // If all correct answers are selected, submit the game
            if (updatedSelectedOptions.length === currentQuestion.correctAnswers.length) {
                submitGame(true); // All correct answers selected
            }
        }
    };

    const submitGame = (isCorrect) => {
        setIsSubmitted(true);
        setFeedback(isCorrect ? "Correct! Moving to the next question..." : "Incorrect! Moving to the next question...");
        setIsCorrect(isCorrect);

        setTimeout(() => {
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
            } else {
                onResult(isCorrect); // Move to the next question type after all Minesweeper questions are completed
                onNext();
            }
        }, 1000); // Proceed to the next question after 1 second
    };

    return (
        <div className={styles.minesweeperGame}>
            <h2>Select the correct options</h2>

            <div className={styles.grid}>
                {currentQuestion.grid.map((option, index) => (
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

export default MinesweeperGame;
