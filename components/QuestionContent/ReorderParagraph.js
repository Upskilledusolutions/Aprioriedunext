import React, { useState, useEffect } from 'react';
import styles from '../../src/styles/trialtest.module.css';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const JumbledWordsComponent = ({ question, onNext, onResult }) => {
    const { question: word, choices } = question;  // Destructure question to get word and choices
    const [shuffledLetters, setShuffledLetters] = useState([]);
    const [userAnswer, setUserAnswer] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    useEffect(() => {
        const shuffled = shuffleArray([...word.split('')]);
        setShuffledLetters(shuffled);
        setUserAnswer(shuffled);
        setIsSubmitted(false);
    }, [word]);

    const [draggedIndex, setDraggedIndex] = useState(null);

    const handleDragStart = (index) => {
        setDraggedIndex(index);
    };

    const handleDrop = (toIndex) => {
        if (draggedIndex === null) return;

        const updatedAnswer = [...userAnswer];
        const draggedLetter = updatedAnswer[draggedIndex];

        updatedAnswer.splice(draggedIndex, 1);
        updatedAnswer.splice(toIndex, 0, draggedLetter);

        setUserAnswer(updatedAnswer);
        setDraggedIndex(null);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleSubmit = () => {
        const correct = userAnswer.join('') === word;
        setIsSubmitted(true);
        onResult(correct);
        if (correct) {
            setTimeout(() => onNext(), 1000);
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

export default JumbledWordsComponent;
