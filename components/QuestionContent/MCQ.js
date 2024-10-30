import styles from '../../src/styles/quiz/quiz.module.css'; // Assuming styles are in the same folder

const MCQComponent = ({ question, onAnswerSelected, selectedOption, isSubmitted }) => {
  const { choices, correctAnswer } = question;

  return (
    <div>
      <h2>{question.question}</h2>
      <ul className={styles.quizcontainer1}>
        {choices.map((choice, index) => {
          // Determine the className based on whether the user has submitted and if the answer is correct
          const isCorrect = correctAnswer === index + 1;
          const isSelected = selectedOption === index + 1;

          let answerClass = styles.start; // Default style
          if (isSubmitted) {
            answerClass = isCorrect
              ? styles.correct // Green for correct answers
              : isSelected
              ? styles.wrong // Red for incorrect selected answer
              : styles.notselected; // Style for unselected answers
          }

          return (
            <li
              key={index}
              onClick={() => !isSubmitted && onAnswerSelected(index + 1)}
              className={answerClass}
            >
              {choice}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MCQComponent;
