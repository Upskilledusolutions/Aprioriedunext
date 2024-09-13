import React, { useState, useEffect } from 'react';
import styles from '../../src/styles/trialtest.module.css';

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const JumbledSentenceComponent = ({ question, onNext, onResult }) => {
    const { question: sentence } = question;
    const [shuffledWords, setShuffledWords] = useState([]);
    const [userAnswer, setUserAnswer] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [selectedWordIndex, setSelectedWordIndex] = useState(null);

    useEffect(() => {
        const words = sentence.split(' ');
        const shuffled = shuffleArray([...words]);
        setShuffledWords(shuffled);
        setUserAnswer(shuffled);
        setIsSubmitted(false);
        setSelectedWordIndex(null);
    }, [sentence]);

    // Swap two words at selected index and current index
    const swapWords = (index1, index2) => {
        const updatedAnswer = [...userAnswer];
        [updatedAnswer[index1], updatedAnswer[index2]] = [updatedAnswer[index2], updatedAnswer[index1]];
        setUserAnswer(updatedAnswer);
    };

    // Handle word click or touch
    const handleWordClick = (index) => {
        if (selectedWordIndex === null) {
            // First selection
            setSelectedWordIndex(index);
        } else {
            // Swap words if second word is selected
            swapWords(selectedWordIndex, index);
            setSelectedWordIndex(null); // Reset selection after swap
        }
    };

    const handleSubmit = () => {
        const correct = userAnswer.join(' ') === sentence;
        setIsSubmitted(true);
        onResult(correct);
        if (correct || !correct) {
            setTimeout(() => onNext(), 1000);
        }
    };

    return (
        <div className={styles.jumbledWords}>
            <h2>Arrange the words to form the correct sentence</h2>
            <div className={styles.shuffledLetters}>
                {userAnswer.map((word, index) => (
                    <span
                        key={index}
                        onClick={() => handleWordClick(index)} // Handle word click or touch
                        className={`${styles.wordBlock} ${selectedWordIndex === index ? styles.selected : ''}`}
                    >
                        {word}
                    </span>
                ))}
            </div>

            {/* {isSubmitted && userAnswer.join(' ') === sentence && (
                <p className={styles.feedback}>Correct!</p>
            )} */}

            <button onClick={handleSubmit} className={styles.submitButton}>
                Submit
            </button>
        </div>
    );
};

export default JumbledSentenceComponent;
