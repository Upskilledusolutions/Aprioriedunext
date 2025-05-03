import React, { useState } from 'react';
import styles from './questionModal.module.css';

export default function QuestionModal({ isOpen, onClose, onSubmit }) {
  const [topic, setTopic] = useState('');
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ topic, question });
    setTopic('');
    setQuestion('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <h2>Ask a Question</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="topic">Topic</label>
            <input
              type="text"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Enter the topic"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="question">Question</label>
            <textarea
              id="question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Enter your question"
              rows="5"
              required
            ></textarea>
          </div>
          <div className={styles.buttonGroup}>
            <button type="submit" className={styles.submitButton}>
              Submit
            </button>
            <button type="button" className={styles.closeButton} onClick={onClose}>
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}