import React from 'react';
import SemicircleProgress from './SemicircleProgress';
import ExerciseProgress from './ExerciseProgress';
import WeeklyPointsGraph from './WeeklyPointsGraph';
import StatCard from './StatCard';
import { FaMedal, FaTrophy, FaCrown, FaChartLine, FaStar } from 'react-icons/fa';
import styles from '../../src/styles/Profile/ProfilePage.module.css';

const Defaultcomp = ({lesson, sections}) => {
  return (
    <div className={styles.page}>
      <div className={styles.topSection}>
        <div className={styles.left}>
          <SemicircleProgress progress={75} lesson={lesson} sections={sections}/>
        </div>
        <div className={styles.right}>
          <ExerciseProgress lesson={lesson} sections={sections}/>
        </div>
      </div>
      <div className={styles.bottomSection}>
        <div className={styles.graphContainer}>
          <WeeklyPointsGraph />
          <div className={styles.belowcontainer}>
            <StatCard 
              title="Best Score" 
              value="1300" 
              description="Your best performance" 
              Icon={FaCrown} 
              iconColor="#f44336"  // Red icon container
              weeklyLabel="Weekly Best"
              weeklyValue="1250"
              monthlyLabel="Monthly Best"
              monthlyValue="1350"
            />
            <StatCard 
              title="Avg Score" 
              value="1150" 
              description="Average score" 
              Icon={FaChartLine} 
              iconColor="#3f51b5"  // Indigo icon container
              weeklyLabel="Weekly Avg"
              weeklyValue="1100"
              monthlyLabel="Monthly Avg"
              monthlyValue="1200"
            />
          </div>
        </div>
        <div className={styles.statsContainer}>
          <StatCard 
            title="Total Points" 
            value="1250" 
            description="Overall score" 
            Icon={FaStar} 
            iconColor="#2196f3"
          />
          <StatCard 
            title="Rank" 
            value="12" 
            description="Your current rank" 
            Icon={FaMedal} 
            iconColor="#ff9800"
          />
          <StatCard 
            title="Achievements" 
            value="15" 
            description="Badges earned" 
            Icon={FaTrophy} 
            iconColor="#9c27b0"  // Purple icon container
          />
        </div>
      </div>
    </div>
  );
};

export default Defaultcomp;
