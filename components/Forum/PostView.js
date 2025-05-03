import React from 'react';
import styles from './PostView.module.css';

export default function PostView() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h2 className={styles.title}>How is reddit so popular yet I never hear it mentioned irl?</h2>
        <p className={styles.subtitle}>r/NoStupidQuestions • CautiousLab7327 • 15 hr</p>
      </header>
      <section className={styles.content}>
        <p>I hear about tiktok and instagram the most, and i did hear about snapchat more in high school. But i never hear about reddit.</p>
      </section>
      <section className={styles.actions}>
        <button className={styles.button}>1.4K</button>
        <button className={styles.button}>505</button>
        <button className={styles.button}>Share</button>
      </section>
    </main>
  );
}