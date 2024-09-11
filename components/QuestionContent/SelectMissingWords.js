import React, { useState } from 'react';
import styles from '../../src/styles/classificationGame.module.css';

const ClassificationGame = ({ onNext, onResult }) => {
    const initialWords = [
        { word: "Apple", type: "Fruit" },
        { word: "Carrot", type: "Vegetable" },
        { word: "Banana", type: "Fruit" },
        { word: "Potato", type: "Vegetable" },
        { word: "Grapes", type: "Fruit" },
        { word: "Tomato", type: "Vegetable" },
    ];

    const [availableWords, setAvailableWords] = useState(initialWords);
    const [fruitsContainer, setFruitsContainer] = useState([]);
    const [vegetablesContainer, setVegetablesContainer] = useState([]);
    const [draggedWord, setDraggedWord] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState(null);

    // Handle dragging the word
    const handleDragStart = (word) => {
        setDraggedWord(word);
    };

    // Handle dropping into a container
    const handleDrop = (type) => {
        if (!draggedWord) return;

        // Update the respective container and remove the word from the available words list
        if (type === "Fruit") {
            if (!fruitsContainer.includes(draggedWord)) {
                setFruitsContainer([...fruitsContainer, draggedWord]);
            }
        } else if (type === "Vegetable") {
            if (!vegetablesContainer.includes(draggedWord)) {
                setVegetablesContainer([...vegetablesContainer, draggedWord]);
            }
        }

        // Remove the word from the available words
        setAvailableWords(availableWords.filter(item => item.word !== draggedWord.word));
        setDraggedWord(null);
    };

    // Handle submission and check if all words are correctly classified
    const handleSubmit = () => {
        const allCorrect = fruitsContainer.every(item => item.type === "Fruit") &&
                           vegetablesContainer.every(item => item.type === "Vegetable");

        setIsSubmitted(true);
        setFeedback(allCorrect ? "Correct! You sorted all words correctly." : "Incorrect! Some words are in the wrong container.");

        setTimeout(() => {
            onResult(allCorrect);
            onNext();
        }, 1000); // Move to the next question after 1 second
    };

    return (
        <div className={styles.classificationGame}>

            <div className={styles.containers}>
                <div
                    className={styles.container}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleDrop("Fruit")}
                >
                    <h3>Fruits</h3>
                    {fruitsContainer.map((item, index) => (
                        <div key={index} className={styles.droppedWord}>
                            {item.word}
                        </div>
                    ))}
                </div>

                <div
                    className={styles.container}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => handleDrop("Vegetable")}
                >
                    <h3>Vegetables</h3>
                    {vegetablesContainer.map((item, index) => (
                        <div key={index} className={styles.droppedWord}>
                            {item.word}
                        </div>
                    ))}
                </div>
            </div>

            {/* Draggable words */}
            <div className={styles.words}>
                {availableWords.map((item, index) => (
                    <div
                        key={index}
                        className={styles.word}
                        draggable
                        onDragStart={() => handleDragStart(item)}
                    >
                        {item.word}
                    </div>
                ))}
            </div>

            <button onClick={handleSubmit} className={styles.submitButton} disabled={availableWords.length !== 0 || isSubmitted}>
                Submit
            </button>

            {feedback && (
                <p className={styles.feedback}>
                    {feedback}
                </p>
            )}
        </div>
    );
};

export default ClassificationGame;

