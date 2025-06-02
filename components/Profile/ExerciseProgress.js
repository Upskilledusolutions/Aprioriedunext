// components/ExerciseProgress.jsx
import React from 'react';
import styles from '../../src/styles/Profile/ExerciseProgress.module.css';

const ExerciseProgress = ({lesson, sections = [], filteredObject = {}, group = []}) => {
      // Get lengths of each language array
      const lengthsObject = Object.fromEntries(
        Object.entries(filteredObject).map(([key, value]) => [key, value.length])
      );

  const progressData = [
    { label: 'Exercises', progress: lesson[sections[0]]?.length, finished: lengthsObject[group[0]] || 19},
    { label: 'Reading Assignment', progress: lesson[sections[1]]?.length, finished: lengthsObject[group[1]] || 19},
    { label: 'Listening Assignment', progress: lesson[sections[2]]?.length, finished:lengthsObject[group[2]] || 19},
    { label: 'Speaking Practice', progress: lesson[sections[3]]?.length, finished: lengthsObject[group[3]] || 19},
    { label: 'Writing Practice', progress: lesson[sections[4]]?.length, finished: lengthsObject[group[4]] || 19},
    { label: 'Practice Test', progress: lesson[sections[5]]?.length, finished: lengthsObject[group[5]] || 19},
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
              style={{ width: `${(item.finished/item.progress)*100 || 0}%` }}
            ></div>
          </div>
          <div className={styles.percentage}>{Math.floor((item.finished/item.progress)*100) || 0}%</div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ExerciseProgress;
