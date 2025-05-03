import React from 'react';
import styles from './QuestionCard.module.css';

export default function QuestionCard({ question }) {
  return (
    <div className={styles.card}>
      <p className={styles.text}>{question}</p>
    </div>
  );
}