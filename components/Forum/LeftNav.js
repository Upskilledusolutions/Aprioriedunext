import React, { useState } from 'react';
import styles from './leftnav.module.css';
import QuestionModal from './QuestionModal';

export default function LeftNav({ questions, onAddQuestion, onSelectPost, onUpdateQuestions, user }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredQuestions, setFilteredQuestions] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === '') {
      setFilteredQuestions([]);
      return;
    }

    const filtered = questions.filter(
      (q) =>
        q.topic.toLowerCase().includes(term.toLowerCase()) ||
        q.question.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredQuestions(filtered);
  };

  const handleSelectQuestion = (question) => {
    onSelectPost(question);
    setSearchTerm('');
    setFilteredQuestions([]);
  };

  const handleSortPopular = () => {
    const sortedQuestions = [...questions].sort((a, b) => {
      const aPopularity = (a.likes || 0) + (a.replies?.length || 0);
      const bPopularity = (b.likes || 0) + (b.replies?.length || 0);
      return bPopularity - aPopularity;
    });
    onUpdateQuestions(sortedQuestions); // Send sorted questions to the parent
  };

  const handleSortRecent = () => {
    const sortedQuestions = [...questions].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    onUpdateQuestions(sortedQuestions); // Reset to the original order
  };

  const handleSortAll = () => {
    onUpdateQuestions([...questions]); // Reset to the original order
  };

  const handleSubmit = (data) => {
    const questionData = { ...data, user: user?.name || user?.userId || 'Anonymous' };
    onAddQuestion(questionData);
    setIsModalOpen(false);
  };

  return (
    <nav className={styles.nav}>
      {/* Profile Section */}
      <div className={styles.profileSection}>
        <div className={styles.greeting}>
          Have any questions, {user?.name || user?.userId || 'Guest'}?
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
          value={searchTerm}
          onChange={handleSearch}
        />
        {filteredQuestions.length > 0 && (
          <ul className={styles.searchDropdown}>
            {filteredQuestions.slice(0, 3).map((q) => (
              <li
                key={q._id}
                className={styles.searchItem}
                onClick={() => handleSelectQuestion(q)}
              >
                <strong>{highlightText(q.topic, searchTerm)}</strong>
                <p>{highlightText(q.question, searchTerm)}</p>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Navigation Menu */}
      <ul className={styles.list}>
        <li className={styles.item} onClick={handleSortRecent}>Recent</li>
        <li className={styles.item} onClick={handleSortPopular}>Popular</li>
        <li className={styles.item} onClick={handleSortAll}>All</li>
      </ul>

      {/* Question Modal */}
      <QuestionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmit}
      />
    </nav>
  );
}

// Helper function to highlight search term in text
function highlightText(text, term) {
  const parts = text.split(new RegExp(`(${term})`, 'gi'));
  return parts.map((part, index) =>
    part.toLowerCase() === term.toLowerCase() ? (
      <span key={index} style={{ backgroundColor: 'yellow' }}>
        {part}
      </span>
    ) : (
      part
    )
  );
}