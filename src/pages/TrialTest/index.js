// import React, { useState } from 'react';
// import styles from '../../styles/trialtest.module.css';
// import Sidebar from '../../../components/TestSidebar';
// import QuestionContent from '../../../components/Questioncontent';

// function App() {
//     const questions = [
//         'Fill in the blanks',
//         'Jumbled Words',
//         'MCQs',
//         'Click on the correct answer',
//         'Drag and drop to the correct box'
//     ];

//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
//     const [questionResults, setQuestionResults] = useState({});

//     const handleNextQuestion = () => {
//         if (currentQuestionIndex < questions.length - 1) {
//             setCurrentQuestionIndex(currentQuestionIndex + 1);
//         }
//     };

//     const handleResult = (correct) => {
//         const newResults = {...questionResults, [currentQuestionIndex]: correct};
//         setQuestionResults(newResults);
//         handleNextQuestion();
//     };

//     return (
//         <div className={styles.app}>
//             <Sidebar currentQuestionIndex={currentQuestionIndex} questionResults={questionResults} />
//             <QuestionContent
//                 questionType={questions[currentQuestionIndex]}
//                 onNext={handleNextQuestion}
//                 onResult={handleResult} // Ensure this is passed correctly
//             />
//         </div>
//     );
// }

// export default App;
import React from 'react'

export default function index() {
  return (
    <div>index</div>
  )
}

