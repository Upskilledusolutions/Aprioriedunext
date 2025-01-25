import React, { useState } from 'react';
import styles from '@/styles/RightSide.module.css'

function MCQ({ index, updateData }) {
  const [choices, setChoices] = useState(['', '', '', '']);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateData(index, { [name]: value });
  };

  const handleChoiceChange = (choiceIndex, value) => {
    const updatedChoices = [...choices];
    updatedChoices[choiceIndex] = value;
    setChoices(updatedChoices);
    updateData(index, { choices: updatedChoices });
  };

  return (
    <div className={styles.card}>
      <div className={styles.small}>MCQ {index + 1}</div>
      <input
        name="question"
        className={styles.input}
        placeholder="Question"
        onChange={handleInputChange}
      />
      <div className={styles.choices}>
        {choices.map((choice, i) => (
          <input
            key={i}
            className={styles.choiceInput}
            placeholder={`Choice ${i + 1}`}
            value={choice}
            onChange={(e) => handleChoiceChange(i, e.target.value)}
          />
        ))}
      </div>
      <input
        name="correctAnswer"
        className={styles.input}
        placeholder="Correct Answer"
        onChange={handleInputChange}
      />
    </div>
  );
}

function FillInTheBlanks({ index, updateData }) {
  const [choices, setChoices] = useState(['']);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateData(index, { [name]: value , correctAnswer: '1'});
  };

  const handleChoiceChange = (choiceIndex, value) => {
    const updatedChoices = [...choices];
    updatedChoices[choiceIndex] = value;
    setChoices(updatedChoices);
    updateData(index, { choices: updatedChoices });
  };

  return (
    <div className={styles.card}>
      <div className={styles.small}>Fill in the Blanks {index + 1}</div>
      <input
        name="question"
        className={styles.input}
        placeholder="Question"
        onChange={handleInputChange}
      />
      <div className={styles.choices}>
        {choices.map((choice, i) => (
          <input
            key={i}
            className={styles.choiceInput}
            placeholder={`Answer`}
            value={choice}
            onChange={(e) => handleChoiceChange(i, e.target.value)}
          />
        ))}
      </div>
      {/* <input
        name="correctAnswer"
        className={styles.input}
        placeholder="Correct Answer"
        onChange={handleInputChange}
      /> */}
    </div>
  );
}

function Match({ index, updateData }) {
  const [pairs, setPairs] = useState([
    { left: { word: "", rightId: "1" }, right: { word: "", rightId: "" } },
    { left: { word: "", rightId: "2" }, right: { word: "", rightId: "" } },
    { left: { word: "", rightId: "3" }, right: { word: "", rightId: "" } },
    { left: { word: "", rightId: "4" }, right: { word: "", rightId: "" } },
    { left: { word: "", rightId: "5" }, right: { word: "", rightId: "" } },
  ]);

  const handleInputChange = (rowIndex, field, side, value) => {
    const updatedPairs = [...pairs];
    updatedPairs[rowIndex][side][field] = value;
    setPairs(updatedPairs);
    updateData(index, { pairs: updatedPairs });
  };

  return (
    <div className={styles.card}>
      <div className={styles.small}>Match {index + 1}</div>
      {pairs.map((pair, rowIndex) => (
        <div key={rowIndex} className={styles.matchRow}>
          <input
            className={styles.input}
            placeholder="Left Word"
            value={pair.left.word}
            onChange={(e) => handleInputChange(rowIndex, "word", "left", e.target.value)}
          />
          <input
            className={styles.input}
            placeholder="Left ID"
            value={pair.left.rightId}
            onChange={(e) => handleInputChange(rowIndex, "rightId", "left", e.target.value)}
          />
          <input
            className={styles.input}
            placeholder="Right Word"
            value={pair.right.word}
            onChange={(e) => handleInputChange(rowIndex, "word", "right", e.target.value)}
          />
          <input
            className={styles.input}
            placeholder="Right ID"
            value={pair.right.rightId}
            onChange={(e) => handleInputChange(rowIndex, "rightId", "right", e.target.value)}
          />
        </div>
      ))}
    </div>
  );
}

export default function QuestionsForm({PformData, PsetFormData}) {
  const [formData, setFormData] = useState({ mcqs: [], blanks: [], matches: [] });
  const [componentsCount, setComponentsCount] = useState({ mcqs: 10, blanks: 10, matches: 1 });

  console.log(PformData)

  const updateMCQData = (index, data) => {
    const newMCQs = [...formData.mcqs];
    newMCQs[index] = { ...newMCQs[index], ...data };
    setFormData((prev) => ({ ...prev, mcqs: newMCQs }));
    PsetFormData((prev) => ({ ...prev, questions: [formData] }));
  };

  const updateBlankData = (index, data) => {
    const newBlanks = [...formData.blanks];
    newBlanks[index] = { ...newBlanks[index], ...data };
    setFormData((prev) => ({ ...prev, blanks: newBlanks }));
    PsetFormData((prev) => ({ ...prev, questions: [formData] }));
  };

  const updateMatchData = (index, data) => {
    const newMatches = [...formData.matches];
    newMatches[index] = { ...newMatches[index], ...data };
    setFormData((prev) => ({ ...prev, matches: newMatches }));
    PsetFormData((prev) => ({ ...prev, questions: [formData] }));
  };

  const addMoreComponents = () => {
    setComponentsCount((prev) => ({
      mcqs: prev.mcqs + 10,
      blanks: prev.blanks + 10,
      matches: prev.matches + 1,
    }));
  };

  return (
    <div>
      <div className={styles.flex5}>
      {[...Array(componentsCount.mcqs)].map((_, i) => (
        <MCQ className={styles.flexitms} key={`mcq-${i}`} index={i} updateData={updateMCQData} />
      ))}
      </div>
      <div className={styles.flex5}>
      {[...Array(componentsCount.blanks)].map((_, i) => (
        <FillInTheBlanks key={`blank-${i}`} index={i} updateData={updateBlankData} />
      ))}
      </div>
      <div className={styles.flex5}>
      {[...Array(componentsCount.matches)].map((_, i) => (
        <Match key={`match-${i}`} index={i} updateData={updateMatchData} />
      ))}
      </div>
      <button className={styles.submitButton} onClick={addMoreComponents}>Add More Components</button>
    </div>
  );
}
