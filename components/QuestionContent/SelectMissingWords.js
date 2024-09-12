import React, { useState, useEffect, useRef } from 'react';
import styles from '../../src/styles/classificationGame.module.css';

const ClassificationGame = ({ questionData, onNext, onResult }) => {
    const [availableWords, setAvailableWords] = useState([]);
    const [containers, setContainers] = useState({});
    const [draggedWord, setDraggedWord] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState(null);

    useEffect(() => {
        if (questionData) {
            const { initialWords, types } = questionData;
            const initialContainers = types.reduce((acc, type) => {
                acc[type] = [];
                return acc;
            }, {});

            setAvailableWords(initialWords);
            setContainers(initialContainers);
            setIsSubmitted(false); // Reset the submission state
            setFeedback(null); // Reset feedback
        }
    }, [questionData]);

    const handleDragStart = (word) => {
        setDraggedWord(word);
    };

    const handleDrop = (category) => {
        if (!draggedWord) return;

        // Update the respective container and remove the word from the available words list
        setContainers(prevContainers => ({
            ...prevContainers,
            [category]: [...prevContainers[category], draggedWord]
        }));

        // Remove the word from the available words
        setAvailableWords(prevWords => prevWords.filter(item => item.word !== draggedWord.word));
        setDraggedWord(null);
    };

    const handleTouchStart = (e, word) => {
        e.preventDefault();
        setDraggedWord(word);
    };

    const handleTouchEnd = (e, category) => {
        e.preventDefault();
        if (draggedWord) {
            handleDrop(category);
            setDraggedWord(null);
        }
    };

    const handleSubmit = () => {
        // Validation: Check if each word in containers is correctly categorized
        const allCorrect = Object.keys(containers).every(category =>
            containers[category].every(item => item.type === category)
        );

        setIsSubmitted(true);
        setFeedback(allCorrect ? "Correct! You sorted all words correctly." : "Incorrect! Some words are in the wrong container.");

        setTimeout(() => {
            onResult(allCorrect);
            onNext();
        }, 1000); // Move to the next question after 1 second
    };

    const handleReset = () => {
        // Reset the game state
        setAvailableWords(questionData.initialWords);
        setContainers(Object.keys(containers).reduce((acc, type) => {
            acc[type] = [];
            return acc;
        }, {}));
        setDraggedWord(null);
        setIsSubmitted(false);
        setFeedback(null);
    };

    return (
        <div className={styles.classificationGame}>
            <div className={styles.containers}>
                {Object.keys(containers).length === 0 ? (
                    <p>No containers available.</p>
                ) : (
                    Object.keys(containers).map((category, index) => (
                        <div
                            key={index}
                            className={styles.container}
                            onDragOver={(e) => e.preventDefault()}
                            onDrop={() => handleDrop(category)}
                            onTouchStart={(e) => handleTouchEnd(e, category)}
                        >
                            <h3>{category}</h3>
                            {containers[category].length === 0 ? (
                                <p>No words in this category.</p>
                            ) : (
                                containers[category].map((item, index) => (
                                    <div key={index} className={styles.droppedWord}>
                                        {item.word}
                                    </div>
                                ))
                            )}
                        </div>
                    ))
                )}
            </div>

            <div className={styles.words}>
                {availableWords.length === 0 ? (
                    <p>No words available.</p>
                ) : (
                    availableWords.map((item, index) => (
                        <div
                            key={index}
                            className={styles.word}
                            draggable
                            onDragStart={() => handleDragStart(item)}
                            onTouchStart={(e) => handleTouchStart(e, item)}
                        >
                            {item.word}
                        </div>
                    ))
                )}
            </div>

            <button 
                onClick={handleSubmit} 
                className={styles.submitButton} 
                disabled={isSubmitted}
            >
                Submit
            </button>

            {isSubmitted && (
                <button 
                    onClick={handleReset} 
                    className={styles.resetButton}
                >
                    Reset
                </button>
            )}

            {feedback && (
                <p className={styles.feedback}>
                    {feedback}
                </p>
            )}
        </div>
    );
};

export default ClassificationGame;
