import React, { useState } from 'react';
import styles from '../src/styles/trialtest.module.css';
import FillInTheBlanks from './QuestionContent/FillInTheBlanks';
import ReorderParagraph from './QuestionContent/ReorderParagraph';
import MultipleChoiceQuestion from './QuestionContent/MultipleChoiceQuestion';
import HighlightIncorrectWords from './QuestionContent/HighlightIncorrectWords';
import SelectMissingWords from './QuestionContent/SelectMissingWords';

const QuestionComponents = {
    'Fill in the blanks': FillInTheBlanks,
    'Jumbled Words': ReorderParagraph,
    'MCQs': MultipleChoiceQuestion,
    'Click on the correct answer': HighlightIncorrectWords,
    'Drag and drop to the correct box': SelectMissingWords
};

const QuestionContent = ({ questionType, onNext, onResult }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleResult = (result) => {
        setIsSubmitted(true); // Mark the current question as submitted
        onResult(result); // Pass the result to the parent for handling
        onNext(); // Move to next question
    };

    const QuestionComponent = QuestionComponents[questionType];

    return (
        <div className={styles.content}>
            <h1>{questionType}</h1>
            {QuestionComponent && <QuestionComponent onNext={handleResult} onResult={handleResult} />}
        </div>
    );
};

export default QuestionContent; 