import React, { useState } from 'react';
import styles from '../../src/styles/trialtest.module.css';

const FillInTheBlanks = ({ onNext, onResult }) => {
    // Example text with blanks
    const text = "Working from home is much ___ today due to the development of the ___. This has resulted in a change in working ___ for those who work for companies.";
    const answers = ["easier", "internet", "hours"];
    const options = [
        ["harder", "easier", "better", "faster"],
        ["internet", "intranet", "network", "extranet"],
        ["hours", "conditions", "salaries", "opportunities"]
    ];

    // Split text into parts around the blanks
    const parts = text.split("___");

    const [userAnswers, setUserAnswers] = useState(Array(answers.length).fill(""));

    const handleChange = (index, value) => {
        const updatedAnswers = [...userAnswers];
        updatedAnswers[index] = value;
        setUserAnswers(updatedAnswers);
    };

    const handleSubmit = () => {
        // Check answers
        const correct = userAnswers.every((answer, index) => answer.toLowerCase() === answers[index].toLowerCase());
        onResult(correct);
        onNext();
    };

    return (
        <div className={styles.fillInTheBlanks}>
            <p>
                {parts.map((part, index) => (
                    <React.Fragment key={index}>
                        {part}
                        {index < parts.length - 1 && (
                            <select
                                value={userAnswers[index]}
                                onChange={(e) => handleChange(index, e.target.value)}
                                className={styles.select}
                            >
                                <option value="">Select an answer</option>
                                {options[index].map(option => (
                                    <option key={option} value={option}>{option}</option>
                                ))}
                            </select>
                        )}
                    </React.Fragment>
                ))}
            </p>
            <button onClick={handleSubmit} className={styles.submitButton}>
                Submit Answers
            </button>
        </div>
    );
};

export default FillInTheBlanks;


