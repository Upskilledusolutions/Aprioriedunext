import React, { useState, useEffect, useRef } from 'react';
import styles from '../../src/styles/MatchTheFollowing.module.css';

const MatchTheFollowingGame = ({ questionData, onNext, onResult, questionlength }) => {
        const [currentIndex, setCurrentIndex] = useState(0);
    const [availablePairs, setAvailablePairs] = useState([]);
    const [selectedLeftItem, setSelectedLeftItem] = useState(null);
    const [selectedRightItem, setSelectedRightItem] = useState(null);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState(null);
    const [showResults, setShowResults] = useState(false); // New state to track when to show the results

    const leftRefs = useRef({});
    const rightRefs = useRef({});
    const svgContainerRef = useRef(null);

    console.log(questionlength)

    useEffect(() => {
        if (questionData) {
            setAvailablePairs(questionData.pairs);
            setMatchedPairs([]);
            setIsSubmitted(false);
            setFeedback(null);
            setSelectedLeftItem(null);
            setSelectedRightItem(null);
            setShowResults(false); // Reset results view when new question data comes
        }
    }, [questionData, currentIndex]);

    const handleLeftClick = (item) => {
        setSelectedLeftItem(item);
    };

    const handleRightClick = (item) => {
        setSelectedRightItem(item);
    };

    useEffect(() => {
        if (selectedLeftItem && selectedRightItem) {
            const isMatch = selectedLeftItem.rightId === selectedRightItem.rightId;

            setMatchedPairs((prevPairs) => [
                ...prevPairs,
                { left: selectedLeftItem, right: selectedRightItem, isMatch },
            ]);

            setSelectedLeftItem(null);
            setSelectedRightItem(null);
        }
    }, [selectedRightItem, selectedLeftItem]);

    const handleSubmit = () => {
        setIsSubmitted(true);
        setShowResults(true); // Show the results when the button is clicked
        const correctMatches = matchedPairs.filter((pair) => pair.isMatch).length;
        onResult({ correctMatches });
    };

    const handleShowResults = () => {
        setCurrentIndex(prev => prev + 1);
        onNext();
    };

    const getLineCoordinates = (leftWord, rightWord) => {
        const leftElement = leftRefs.current[leftWord];
        const rightElement = rightRefs.current[rightWord];

        if (leftElement && rightElement) {
            const svgRect = svgContainerRef.current.getBoundingClientRect();
            const leftRect = leftElement.getBoundingClientRect();
            const rightRect = rightElement.getBoundingClientRect();

            return {
                x1: leftRect.right - svgRect.left,
                y1: leftRect.top + leftRect.height / 2 - svgRect.top,
                x2: rightRect.left - svgRect.left,
                y2: rightRect.top + rightRect.height / 2 - svgRect.top,
            };
        }
        return {};
    };

    return (
        <div className={styles.matchGame}>
            <h2>Match the Following</h2>
            <div className={styles.pairContainer} ref={svgContainerRef}>
                <div className={styles.leftItems}>
                    {availablePairs.map((pair) => (
                        <div
                            key={pair.left.word}
                            className={`${styles.word} ${selectedLeftItem === pair.left ? styles.selected : ''} ${
                                matchedPairs.find((matched) => matched.left.word === pair.left.word) ? styles.disabled : ''
                            }`} // Apply correct/incorrect styles after results
                            onClick={() => handleLeftClick(pair.left)}
                            ref={(el) => (leftRefs.current[pair.left.word] = el)}
                        >
                            {pair.left.word}
                        </div>
                    ))}
                </div>

                <div className={styles.rightItems}>
                    {availablePairs.map((pair) => (
                        <div
                            key={pair.right.word}
                            className={`${styles.word} ${selectedRightItem === pair.right ? styles.selected : ''} ${
                                matchedPairs.find((matched) => matched.right.word === pair.right.word) ? styles.disabled : ''
                            }`} // Apply correct/incorrect styles after results
                            onClick={() => handleRightClick(pair.right)}
                            ref={(el) => (rightRefs.current[pair.right.word] = el)}
                        >
                            {pair.right.word}
                        </div>
                    ))}
                </div>

                {/* SVG for drawing lines between matched pairs */}
                <svg className={styles.svgLines}>
                    {matchedPairs.map((pair, index) => {
                        const { x1, y1, x2, y2 } = getLineCoordinates(pair.left.word, pair.right.word);
                        return (
                            <line
                                key={index}
                                x1={x1}
                                y1={y1}
                                x2={x2}
                                y2={y2}
                                stroke={showResults ? (pair.isMatch ? 'green' : 'red') : 'white'} // Black before results, color after
                                strokeWidth="2"
                            />
                        );
                    })}
                </svg>
            </div>

          {!isSubmitted ? (
                // If not submitted, show "Next" button if not at final question, otherwise "Submit"
                currentIndex < questionlength - 1 ? (
                    <button onClick={handleSubmit} className={styles.submitButton}>
                        Show Match
                    </button>
                ) : (
                    <button onClick={handleSubmit} className={styles.submitButton}>
                        Submit
                    </button>
                )
            ) : (
                // After submission, show "Results" button
                <button onClick={handleShowResults} className={styles.resultButton}>
                    Next
                </button>
            )}

            {feedback && <p>{feedback}</p>}
        </div>
    );
};

export default MatchTheFollowingGame;
