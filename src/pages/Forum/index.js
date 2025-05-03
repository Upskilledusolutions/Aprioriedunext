import React from 'react';
import styles from './forum.module.css';
import LeftNav from '../../../components/Forum/LeftNav';
import PostView from '../../../components/Forum/PostView';
import Sidebar from '../../../components/Forum/Sidebar';

export default function App() {
  return (
    <div className={styles.forumContainer}>
      {/* Left Navigation */}
      <div className={styles.leftNav}>
        <LeftNav />
      </div>

      {/* Main Content */}
      <div className={styles.mainContent}>
        <PostView />
      </div>

      {/* Sidebar */}
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
    </div>
  );
}