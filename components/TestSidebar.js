import React from 'react';
import styles from '../src/styles/trialtest.module.css';

const Sidebar = ({ currentQuestionIndex, questionResults }) => {
    const questions = [
        'Fill in the blanks',
        'Jumbled Words',
        'MCQs',
        'Click on the correct answer',
        'Drag and drop to the correct box'
    ];

    const getButtonClass = (index) => {
        if (questionResults[index] === undefined) {
            return styles.notCompleted; // No attempt made yet
        } else {
            return questionResults[index] ? styles.correct : styles.incorrect; // correct or incorrect
        }
    };

    return (
        <div className={styles.sidebar}>
            {questions.map((question, index) => (
                <button
                    key={index}
                    onClick={() => {}} // onClick does nothing as selection should not be free
                    disabled={index > 0 && questionResults[index - 1] === undefined}
                    className={getButtonClass(index)}
                >
                    {question}
                </button>
            ))}
        </div>
    );
};

export default Sidebar;

