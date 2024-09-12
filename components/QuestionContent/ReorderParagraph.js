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
    const { question: word } = question;  // Destructure question to get the word
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
    const [touchedIndex, setTouchedIndex] = useState(null);

    // Handle drag start for desktop
    const handleDragStart = (index) => {
        setDraggedIndex(index);
    };

    // Handle drop for desktop
    const handleDrop = (toIndex) => {
        if (draggedIndex === null) return;
        swapLetters(draggedIndex, toIndex);
        setDraggedIndex(null);
    };

    // Handle touch start for mobile
    const handleTouchStart = (index) => {
        setTouchedIndex(index);
    };

    // Handle touch end for mobile
    const handleTouchEnd = (toIndex) => {
        if (touchedIndex === null) return;
        swapLetters(touchedIndex, toIndex);
        setTouchedIndex(null);
    };

    // Swap letters based on drag/touch interactions
    const swapLetters = (fromIndex, toIndex) => {
        const updatedAnswer = [...userAnswer];
        const [movedLetter] = updatedAnswer.splice(fromIndex, 1);
        updatedAnswer.splice(toIndex, 0, movedLetter);
        setUserAnswer(updatedAnswer);
    };

    const handleDragOver = (e) => {
        e.preventDefault(); // Prevent default dragover behavior
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
                        onTouchStart={() => handleTouchStart(index)} // For mobile touch
                        onTouchEnd={() => handleTouchEnd(index)} // For mobile touch
                        className={styles.letterBlock}
                    >
                        {letter}
                    </span>
                ))}
            </div>

            {isSubmitted && userAnswer.join('') === word && (
                <p className={styles.feedback}>Correct!</p>
            )}

            <button onClick={handleSubmit} className={styles.submitButton}>
                Submit
            </button>
        </div>
    );
};

export default JumbledWordsComponent;
