// components/ExerciseProgress.jsx
import React from 'react';
import styles from '../../src/styles/Profile/ExerciseProgress.module.css';

const ExerciseProgress = ({lesson, sections}) => {
  const progressData = [
    { label: 'Exercises', progress: lesson[sections[0]]?.length },
    { label: 'Reading Assignment', progress: lesson[sections[1]]?.length },
    { label: 'Listening Assignment', progress: lesson[sections[2]]?.length },
    { label: 'Reading Practice', progress: lesson[sections[3]]?.length },
    { label: 'Writing Practice', progress: lesson[sections[4]]?.length },
    { label: 'Practice Test', progress: lesson[sections[5]]?.length },
  ];

  return (
    <div className={styles.big}>
    <div className={styles.container}>
      {progressData.map((item) => (
        <div key={item.label} className={styles.progressItem}>
          <div className={styles.label}>{item.label}</div>
          <div className={styles.progressBar}>
            <div
              className={styles.progressFill}
              style={{ width: `${item.progress}%` }}
            ></div>
          </div>
          <div className={styles.percentage}>{item.progress}%</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ExerciseProgress;
