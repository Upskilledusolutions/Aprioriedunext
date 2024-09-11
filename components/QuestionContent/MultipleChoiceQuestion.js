import React, { useState } from 'react';
import styles from '../../src/styles/trialtest.module.css';

const MCQGame = ({ onNext, onResult }) => {
    const questions = [
        {
            question: "What is the capital of France?",
            options: ["Berlin", "Madrid", "Paris", "Lisbon"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Earth", "Mars", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "Who wrote 'Hamlet'?",
            options: ["Mark Twain", "William Shakespeare", "Charles Dickens", "J.K. Rowling"],
            answer: "William Shakespeare"
        }
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [score, setScore] = useState(0); // Optional: Track score

    const currentQuestion = questions[currentQuestionIndex];

    const handleOptionChange = (option) => {
        setSelectedOption(option);
        setIsSubmitted(false);
        setFeedback(null); // Reset feedback when a new option is selected
    };

    const handleSubmit = () => {
        if (!selectedOption) return; // Prevent submission if no option is selected

        const correct = selectedOption === currentQuestion.answer;
        setIsSubmitted(true);
        setFeedback(correct ? "Correct!" : `Incorrect! The correct answer is "${currentQuestion.answer}".`);

        if (correct) {
            setScore(score + 1); // Optional: Update score if correct
        }

        if (currentQuestionIndex < questions.length - 1) {
            // If there are more questions, move to the next question
            setTimeout(() => {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setSelectedOption(null);
                setIsSubmitted(false);
                setFeedback(null);
            }, 1000);
        } else {
            // If this is the last question, trigger onResult and onNext
            setTimeout(() => {
                onResult(score === questions.length); // Pass result based on whether all answers were correct
                onNext(); // Move to the next question type
            }, 1000);
        }
    };

    return (
        <div className={styles.mcqGame}>
            <h2>{currentQuestion.question}</h2>

            <div className={styles.options}>
                {currentQuestion.options.map((option, index) => (
                    <label key={index} className={styles.optionLabel}>
                        <input
                            type="radio"
                            name="mcq-option"
                            value={option}
                            checked={selectedOption === option}
                            onChange={() => handleOptionChange(option)}
                            disabled={isSubmitted} // Disable selection after submission
                        />
                        {option}
                    </label>
                ))}
            </div>

            {feedback && (
                <p className={styles.feedback}>
                    {feedback}
                </p>
            )}

            <button onClick={handleSubmit} className={styles.submitButton} disabled={!selectedOption || isSubmitted}>
                Submit Answer
            </button>
        </div>
    );
};

export default MCQGame;

