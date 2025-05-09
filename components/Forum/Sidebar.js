import React from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar({ questions, onSelectPost, setShowSidebar }) {
  const handleSelectPost = (post) => {
    onSelectPost(post);

    // Check if the screen width is mobile-sized
    if (window.innerWidth <= 768) {
      setShowSidebar(false); // Close the sidebar on mobile view
    }
  };

  return (
    <aside className={styles.sidebar}>
      {questions
        .reverse()
        .slice(0, 10)
        .map((q) => (
          <div
            key={q._id}
            className={styles.card}
            onClick={() => handleSelectPost(q)}
          >
            <p className={styles.text}>{q.topic}</p>
          </div>
        ))}
    </aside>
  );
}