import React, { useState, useEffect } from 'react';
import styles from '../../src/styles/trialtest.module.css';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const JumbledWords = ({ onNext, onResult }) => {
    const words = ["education", "technology", "language", "development"];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [shuffledLetters, setShuffledLetters] = useState([]);
    const [userAnswer, setUserAnswer] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const word = words[currentWordIndex];

    useEffect(() => {
        const shuffled = shuffleArray([...word.split('')]);
        setShuffledLetters(shuffled);
        setUserAnswer(shuffled);
        setIsSubmitted(false);
    }, [currentWordIndex, word]);

    // Keep track of the dragged element index
    const [draggedIndex, setDraggedIndex] = useState(null);

    const handleDragStart = (index) => {
        setDraggedIndex(index);  // Store the index of the dragged letter
    };

    const handleDrop = (toIndex) => {
        if (draggedIndex === null) return;

        const updatedAnswer = [...userAnswer];
        const draggedLetter = updatedAnswer[draggedIndex];

        // Remove dragged letter and place it at the new position
        updatedAnswer.splice(draggedIndex, 1);
        updatedAnswer.splice(toIndex, 0, draggedLetter);

        setUserAnswer(updatedAnswer);
        setDraggedIndex(null); // Reset dragged index
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // Allow dropping
    };

    const handleSubmit = () => {
        const correct = userAnswer.join('') === word;
        setIsSubmitted(true);
        onResult(correct);
        if (correct) {
            setTimeout(() => onNext(), 1000);  // Move to the next word after feedback
        }
    };

    return (
        <div className={styles.jumbledWords}>
            <h2>Arrange the letters to form the correct word</h2>
            <div className={styles.shuffledLetters}>
                {userAnswer.map((letter, index) => (
                    <span
                        key={index}
                        draggable
                        onDragStart={() => handleDragStart(index)}
                        onDragOver={handleDragOver}
                        onDrop={() => handleDrop(index)}
                        className={styles.letterBlock}
                    >
                        {letter}
                    </span>
                ))}
            </div>

            {isSubmitted && (
                <p className={styles.feedback}>
                    {userAnswer.join('') === word ? "Correct!" : "Incorrect! Try again."}
                </p>
            )}

            <button onClick={handleSubmit} className={styles.submitButton}>
                Submit
            </button>
        </div>
    );
};

export default JumbledWords;
