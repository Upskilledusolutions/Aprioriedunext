// LeaderboardPage.jsx
import React from 'react';
import LeaderboardTable from './LeaderboardTable';
import PointsDistribution from './PointsDistribution';
import LastWeekTopPlayers from './LastWeekTopPlayers';
import styles from '../../src/styles/Profile/LeaderboardPage.module.css';

const LeaderboardPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.topSection}>
        <div className={styles.left}>
          <LeaderboardTable />
        </div>
        <div className={styles.rightside}>
        <div className={styles.bottomSection}>
        <LastWeekTopPlayers />
      </div>
        <div className={styles.right}>
          <PointsDistribution />
        </div>
      </div>
      </div>
    </div>
  );
};

export default LeaderboardPage;
