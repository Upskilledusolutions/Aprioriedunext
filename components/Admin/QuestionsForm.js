import React from 'react';
import styles from '@/styles/RightSide.module.css';

export default function QuestionsForm({ formData, setFormData }) {
  const handleAddQuestion = () => {
    setFormData((prevData) => ({
      ...prevData,
      questions: [
        ...prevData.questions,
        { question: '', choices: [], correctAnswer: null, pairs: [] },
      ],
    }));
  };

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions[index][field] = value;
    setFormData((prevData) => ({ ...prevData, questions: updatedQuestions }));
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...formData.questions];
    updatedQuestions.splice(index, 1);
    setFormData((prevData) => ({ ...prevData, questions: updatedQuestions }));
  };

  return (
    <div>
      <div>
        {formData.questions.map((question, index) => (
          <div key={index}>
            <div>
            <label>Question {index + 1}</label>
            <input
              type="text"
              value={question.question}
              onChange={(e) =>
                handleQuestionChange(index, 'question', e.target.value)
              }
              placeholder="Enter question text"
              required
            />
            </div>
            {/* MCQs Section */}
            {question.choices.map((choice, choiceIndex) => (
              <input
                key={choiceIndex}
                type="text"
                value={choice}
                onChange={(e) => {
                  const updatedChoices = [...question.choices];
                  updatedChoices[choiceIndex] = e.target.value;
                  handleQuestionChange(index, 'choices', updatedChoices);
                }}
                placeholder={`Choice ${choiceIndex + 1}`}
              />
            ))}
            <button
              type="button"
              onClick={() =>
                handleQuestionChange(index, 'choices', [
                  ...question.choices,
                  '',
                ])
              }
            >
              Add Choice
            </button> <br/>

            {/* Fill in the Blanks Section */}
            <label>Fill in the Blanks</label>
            <input
              type="text"
              value={question.correctAnswer}
              onChange={(e) =>
                handleQuestionChange(index, 'correctAnswer', e.target.value)
              }
              placeholder="Correct Answer"
            />

            {/* Match the Following Section */}
            <label>Pairs</label> <br/>
            {question.pairs.map((pair, pairIndex) => (
              <div key={pairIndex} className={styles.pairBlock}>
                <input
                  type="text"
                  value={pair.left.word}
                  onChange={(e) => {
                    const updatedPairs = [...question.pairs];
                    updatedPairs[pairIndex].left.word = e.target.value;
                    handleQuestionChange(index, 'pairs', updatedPairs);
                  }}
                  placeholder="Left Word"
                />
                <input
                  type="number"
                  value={pair.left.rightId}
                  onChange={(e) => {
                    const updatedPairs = [...question.pairs];
                    updatedPairs[pairIndex].left.rightId = Number(e.target.value);
                    handleQuestionChange(index, 'pairs', updatedPairs);
                  }}
                  placeholder="Left ID"
                />
                <input
                  type="text"
                  value={pair.right.word}
                  onChange={(e) => {
                    const updatedPairs = [...question.pairs];
                    updatedPairs[pairIndex].right.word = e.target.value;
                    handleQuestionChange(index, 'pairs', updatedPairs);
                  }}
                  placeholder="Right Word"
                />
                <input
                  type="number"
                  value={pair.right.rightId}
                  onChange={(e) => {
                    const updatedPairs = [...question.pairs];
                    updatedPairs[pairIndex].right.rightId = Number(e.target.value);
                    handleQuestionChange(index, 'pairs', updatedPairs);
                  }}
                  placeholder="Right ID"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() =>
                handleQuestionChange(index, 'pairs', [
                  ...question.pairs,
                  { left: { word: '', rightId: null }, right: { word: '', rightId: null } },
                ])
              }
            >
              Add Pair
            </button>

            <button type="button" onClick={() => handleRemoveQuestion(index)}>
              Remove Question
            </button>
          </div>
        ))}
        <button type="button" onClick={handleAddQuestion}>
          Add Question
        </button>
      </div>
    </div>
  );
}
