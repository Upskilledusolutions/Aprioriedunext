import React from 'react';
import styles from '../../src/styles/Profile/LeaderboardTable.module.css';
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { FaCrown } from "react-icons/fa6";

const players = [
  { id: 1, name: 'Alice', points: 1500, change: 'up' },
  { id: 2, name: 'Bob', points: 1450, change: 'down' },
  { id: 3, name: 'Charlie', points: 1400, change: 'up' },
  { id: 4, name: 'David', points: 1350, change: 'up' },
  { id: 5, name: 'Eva', points: 1300, change: 'down' },
  { id: 6, name: 'Frank', points: 1250, change: 'up' },
  { id: 7, name: 'Grace', points: 1200, change: 'up' },
  { id: 8, name: 'Hank', points: 1150, change: 'down' },
  { id: 9, name: 'Ivy', points: 1100, change: 'up' },
  { id: 10, name: 'Jack', points: 1050, change: 'down' },
];

const LeaderboardTable = () => {
  return (
    <div className={styles.container}>
      <div className={styles.heading}>Leaderboard</div>
      {players.map((data, index) => (
        <div key={data.id} className={styles.card}>
          <div className={styles.flex1}>
            <div className={styles.rank}>
              {index === 0 ? (
                <FaCrown className={styles.cupIcon} />
              ) : (
                <span>#{index + 1}</span>
              )}{" "}
              {data.name}
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
            points: <div className={styles.points}>{data.points}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeaderboardTable;
