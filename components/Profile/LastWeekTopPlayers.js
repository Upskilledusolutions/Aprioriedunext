// components/LastWeekTopPlayers.jsx
import React from 'react';
import styles from '../../src/styles/Profile/LastWeekTopPlayers.module.css';

const lastWeekPlayers = [
  { id: 1, name: 'Alice', points: 1400 },
  { id: 2, name: 'David', points: 1350 },
  { id: 3, name: 'Grace', points: 1300 },
];

const LastWeekTopPlayers = () => {
  // Arrange positions: center is 1st, right is 2nd, left is 3rd.
  const podium = {
    first: lastWeekPlayers[0],
    second: lastWeekPlayers[1],
    third: lastWeekPlayers[2],
  };

  return (
    <div className={styles.container}>
      <h3>Last Week's Top 3</h3>
      <div className={styles.podium}>
        {/* Third Place (Left: smallest) */}
        <div className={`${styles.podiumItem} ${styles.third}`}>
          <div className={styles.playerIcon}>🥉</div>
          <div className={styles.podiumBlock}>
            <span className={styles.playerName}>{podium.third.name}</span>
            <span className={styles.playerPoints}>{podium.third.points}</span>
          </div>
        </div>
        {/* First Place (Center: tallest) */}
        <div className={`${styles.podiumItem} ${styles.first}`}>
          <div className={styles.playerIcon}>👑</div>
          <div className={styles.podiumBlock}>
            <span className={styles.playerName}>{podium.first.name}</span>
            <span className={styles.playerPoints}>{podium.first.points}</span>
          </div>
        </div>
        {/* Second Place (Right: medium) */}
        <div className={`${styles.podiumItem} ${styles.second}`}>
          <div className={styles.playerIcon}>🥈</div>
          <div className={styles.podiumBlock}>
            <span className={styles.playerName}>{podium.second.name}</span>
            <span className={styles.playerPoints}>{podium.second.points}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastWeekTopPlayers;
