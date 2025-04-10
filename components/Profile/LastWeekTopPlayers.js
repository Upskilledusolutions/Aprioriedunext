// components/LastWeekTopPlayers.jsx
import React from 'react';
import styles from '../../src/styles/Profile/LastWeekTopPlayers.module.css';

const LastWeekTopPlayers = ({ totalScores }) => {
  // Sort totalScores in descending order and take the top 3 players
  const sortedScores = [...totalScores]
    .sort((a, b) => b.performance.totalScore - a.performance.totalScore)
    .slice(0, 3);

    console.log(sortedScores)

  // Arrange positions: center is 1st, right is 2nd, left is 3rd.
  const podium = {
    first: sortedScores[0] || { userId: 'N/A', performance: { totalScore: 0 } },
    second: sortedScores[1] || { userId: 'N/A', performance: { totalScore: 0 } },
    third: sortedScores[2] || { userId: 'N/A', performance: { totalScore: 0 } },
  };
  console.log(sortedScores[0])
  return (
    <div className={styles.container}>
      <h3>Last Week's Top 3</h3>
      <div className={styles.podium}>
        {/* Third Place (Left: smallest) */}
        <div className={`${styles.podiumItem} ${styles.third}`}>
          <div className={styles.playerIcon}>🥉</div>
          <div className={styles.playerName}>{sortedScores[2].name ? sortedScores[2].name : podium.third.userId}</div>
          <div className={styles.podiumBlock}>
            <span className={styles.playerPoints}>{podium.third.performance.totalScore}</span>
          </div>
        </div>
        {/* First Place (Center: tallest) */}
        <div className={`${styles.podiumItem} ${styles.first}`}>
          <div className={styles.playerIcon}>👑</div>
          <div className={styles.playerName}>{sortedScores[0].name ? sortedScores[0].name :podium.first.userId}</div>
          <div className={styles.podiumBlock}>
            <span className={styles.playerPoints}>{podium.first.performance.totalScore}</span>
          </div>
        </div>
        {/* Second Place (Right: medium) */}
        <div className={`${styles.podiumItem} ${styles.second}`}>
          <div className={styles.playerIcon}>🥈</div>
          <div className={styles.playerName}>{sortedScores[1].name ? sortedScores[1].name : podium.second.userId}</div>
          <div className={styles.podiumBlock}>
            <span className={styles.playerPoints}>{podium.second.performance.totalScore}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastWeekTopPlayers;
