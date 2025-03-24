import React from 'react';
import styles from '../../src/styles/Profile/SemicircleProgress.module.css';

const FullCircleProgress = ({lesson, sections}) => { 
  let progress = 75;
  const strokeWidth = 25;
  const viewWidth = 200;
  const viewHeight = 200; // full circle, so height equals width
  const radius = (viewWidth - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const safeProgress = Math.min(Math.max(progress, 0), 100);
  const dashOffset = circumference - (safeProgress / 100) * circumference;

  console.log(lesson)

  const totalLength = sections.reduce((sum, section) => {
    const sectionData = lesson[section];
    return sum + (Array.isArray(sectionData) ? sectionData.length : 0);
  }, 0);

  return (
    <div>
      <div className={styles.big}>
        <div>
          <div className={styles.heading}>Total Progress</div>
          <div className={styles.small}>60/{totalLength} Exercises completed</div>
        </div>
        <div className={styles.container}>
          <svg width="100%" height="100%" viewBox={`0 0 ${viewWidth} ${viewHeight}`}>
            <circle
              className={styles.bg}
              cx={viewWidth / 2}
              cy={viewHeight / 2}
              r={radius}
              fill="none"
              stroke="#eee"
              strokeWidth={strokeWidth}
            />
            <circle
              className={styles.progress}
              cx={viewWidth / 2}
              cy={viewHeight / 2}
              r={radius}
              fill="none"
              stroke="#9c27b0"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              strokeLinecap="round"
              transform={`rotate(-90 ${viewWidth / 2} ${viewHeight / 2})`}
            />
          </svg>
          <div className={styles.text}>{safeProgress}%</div>
        </div>
      </div>
    </div>
  );
};

export default FullCircleProgress;
