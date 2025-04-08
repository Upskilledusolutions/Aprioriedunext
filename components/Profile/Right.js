import React from 'react'
import styles from '../../src/styles/Profileright.module.css'
import Defaultcomp from './Defaultcomp'
import Leaderboard from './Leaderboard'


function Right({selection, lesson, sections, filteredObject, group, userData, totalScores, userRank, streak, thisWeeksScores, weeklyBest, weeklyAverage, monthlyBest, monthlyAverage}) {

  return (
    <div className={styles.container}>
        {selection.section !== 'Leader' ? 
          <Defaultcomp 
          lesson={lesson} 
          sections={sections} 
          filteredObject={filteredObject} 
          group={group} 
          userData={userData}
          userRank={userRank}
          streak={streak}
          thisWeeksScores={thisWeeksScores}
          weeklyBest={weeklyBest}
          weeklyAverage={weeklyAverage}
          monthlyBest={monthlyBest}
          monthlyAverage={monthlyAverage}
          totalScores={totalScores}
          /> : 
          <Leaderboard 
          lesson={lesson} 
          sections={sections}
          totalScores={totalScores}/>
        }
    </div>
  )
}

export default Right