import React, { useState, useEffect } from 'react';
import styles from '../../src/styles/classificationGame.module.css';

const ClassificationGame = ({ questionData, onNext, onResult }) => {
    const [availableWords, setAvailableWords] = useState([]);
    const [containers, setContainers] = useState({});
    const [selectedWord, setSelectedWord] = useState(null);
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
            setIsSubmitted(false); // Reset submission state
            setFeedback(null); // Reset feedback
            setSelectedWord(null); // Reset selected word
        }
    }, [questionData]);

    // Handle word tap/select
    const handleWordClick = (word) => {
        setSelectedWord(word); // Highlight selected word
    };

    // Handle category tap/drop
    const handleCategoryClick = (category) => {
        if (!selectedWord) return;

        // Update the respective container and remove the word from the available words list
        setContainers((prevContainers) => ({
            ...prevContainers,
            [category]: [...prevContainers[category], selectedWord],
        }));

        setAvailableWords((prevWords) => prevWords.filter((item) => item.word !== selectedWord.word));
        setSelectedWord(null); // Reset selected word after dropping
    };

    const handleSubmit = () => {
        // Validation: Check if each word in containers is correctly categorized
        const allCorrect = Object.keys(containers).every((category) =>
            containers[category].every((item) => item.type === category)
        );

        setIsSubmitted(true);
        setFeedback(allCorrect ? 'Correct! You sorted all words correctly.' : 'Incorrect! Some words are in the wrong container.');

        setTimeout(() => {
            onResult(allCorrect);
            onNext();
        }, 1000); // Move to the next question after 1 second
    };

    const handleReset = () => {
        // Reset the game state
        setAvailableWords(questionData.initialWords);
        setContainers(
            Object.keys(containers).reduce((acc, type) => {
                acc[type] = [];
                return acc;
            }, {})
        );
        setSelectedWord(null);
        setIsSubmitted(false);
        setFeedback(null);
    };

    return (
        <div className={styles.classificationGame}>
            <h2>Classify the given words</h2>
            <div className={styles.containers}>
                {Object.keys(containers).length === 0 ? (
                    <p>No containers available.</p>
                ) : (
                    Object.keys(containers).map((category, index) => (
                        <div
                            key={index}
                            className={styles.container}
                            onClick={() => handleCategoryClick(category)} // Handle drop with tap
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
                            className={`${styles.word} ${selectedWord === item ? styles.selected : ''}`} // Highlight selected word
                            onClick={() => handleWordClick(item)} // Handle word select with tap
                        >
                            {item.word}
                        </div>
                    ))
                )}
            </div>

            <button onClick={handleSubmit} className={styles.submitButton} disabled={isSubmitted}>
                Submit
            </button>

        </div>
    );
};

export default ClassificationGame;
