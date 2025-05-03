import React from 'react';
import QuestionCard from './QuestionCard';
import styles from './Sidebar.module.css';

const questions = [
  'Why is the sky blue?',
  'What causes rainbows?',
  'How do planes stay in the air?',
  'Is time travel possible?'
];

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      {questions.map((q, idx) => (
        <QuestionCard key={idx} question={q} />
      ))}
    </aside>
  );
}