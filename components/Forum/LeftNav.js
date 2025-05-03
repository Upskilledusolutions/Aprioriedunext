import React, { useState } from 'react';
import styles from './leftnav.module.css';
import QuestionModal from './QuestionModal';

export default function LeftNav({ user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddQuestion = (data) => {
    console.log('Question Submitted:', data);
    // Add logic to handle the submitted question (e.g., send to backend)
  };

  return (
    <nav className={styles.nav}>
      {/* Profile Section */}
      <div className={styles.profileSection}>
        <div className={styles.greeting}>
          Have any questions, {user?.name || 'Guest'}?
        </div>
        <button
          className={styles.addQuestionButton}
          onClick={() => setIsModalOpen(true)}
        >
          + Ask a Question
        </button>
      </div>

      {/* Search Bar */}
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search questions..."
          className={styles.searchBar}
        />
      </div>

      {/* Navigation Menu */}
      <ul className={styles.list}>
        <li className={styles.item}>Recent</li>
        <li className={styles.item}>Popular</li>
        <li className={styles.item}>All</li>
      </ul>

      {/* Question Modal */}
      <QuestionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddQuestion}
      />
    </nav>
  );
}