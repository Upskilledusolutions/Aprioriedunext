import React from 'react';
import styles from '../../src/styles/Profile/LeaderboardTable.module.css';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { FaCrown } from "react-icons/fa6";

const players = [
  { id: 1, name: 'Gagandeep', points: 1500, change: 'up' },
  { id: 2, name: 'Arnav', points: 1450, change: 'down' },
  { id: 3, name: 'Yash', points: 1400, change: 'up' },
  { id: 4, name: 'Vivek', points: 1350, change: 'up' },
  { id: 5, name: 'Hitakshi', points: 1300, change: 'down' },
  { id: 6, name: 'Aparna', points: 1250, change: 'up' },
  { id: 7, name: 'Grace', points: 1200, change: 'up' },
  { id: 8, name: 'Hank', points: 1150, change: 'down' },
  { id: 9, name: 'Ivy', points: 1100, change: 'up' },
  { id: 10, name: 'Jack', points: 1050, change: 'down' },
];

const LeaderboardTable = ({totalScores}) => {
  const sortedScores = [...totalScores].sort((a, b) => b.performance.totalScore - a.performance.totalScore);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Leaderboard</div>
      {sortedScores.map((data, index) => (
        <div key={data.id} className={styles.card}>
          <div className={styles.flex1}>
            <div className={styles.rank}>
              {index === 0 ? (
                <FaCrown className={styles.cupIcon} />
              ) : index === 1 ? (<>🥈</>) : 
               index === 2 ? (<>🥉</>) : (
                <span>#{index + 1}</span>
              )}{" "}
              {data.userId}
            </div>
            <span>
              {data.change === 'up' ? (
                <BiUpArrowAlt className={styles.up} />
              ) : (
                <BiDownArrowAlt className={styles.down} />
              )}
            </span>
          </div>
          <div className={styles.flex2}>
            points: <div className={styles.points}>{data.performance.totalScore}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeaderboardTable;
