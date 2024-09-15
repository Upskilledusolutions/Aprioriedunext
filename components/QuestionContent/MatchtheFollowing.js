import React, { useState, useEffect, useRef } from 'react';
import styles from '../../src/styles/MatchTheFollowing.module.css';

const MatchTheFollowingGame = ({ questionData, onNext, onResult }) => {
    const [availablePairs, setAvailablePairs] = useState([]);
    const [selectedLeftItem, setSelectedLeftItem] = useState(null);
    const [selectedRightItem, setSelectedRightItem] = useState(null);
    const [matchedPairs, setMatchedPairs] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [feedback, setFeedback] = useState(null);

    const leftRefs = useRef({});
    const rightRefs = useRef({});
    const svgContainerRef = useRef(null);

    useEffect(() => {
        if (questionData) {
            setAvailablePairs(questionData.pairs);
            setMatchedPairs([]);
            setIsSubmitted(false);
            setFeedback(null);
            setSelectedLeftItem(null);
            setSelectedRightItem(null);
        }
    }, [questionData]);

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
        const correctMatches = matchedPairs.filter((pair) => pair.isMatch).length;
        const allCorrect = correctMatches === questionData.pairs.length;
        setIsSubmitted(true);
        setFeedback(allCorrect ? 'Correct! All matches are correct.' : `Incorrect! ${correctMatches} out of ${questionData.pairs.length} matches are correct.`);
        console.log(correctMatches)
        // Send result and number of correct matches to the parent component
        setTimeout(() => {
            onResult({ allCorrect, correctMatches });
            onNext();
        }, 1000);
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
                            className={`${styles.word} ${selectedLeftItem === pair.left ? styles.selected : ''}`}
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
                            className={`${styles.word} ${selectedRightItem === pair.right ? styles.selected : ''}`}
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
                                stroke="black"
                                strokeWidth="2"
                            />
                        );
                    })}
                </svg>
            </div>

            <button onClick={handleSubmit} className={styles.submitButton} disabled={isSubmitted}>
                Submit
            </button>
        </div>
    );
};

export default MatchTheFollowingGame;

