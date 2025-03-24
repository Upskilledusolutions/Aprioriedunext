import React from 'react'
import styles from '../../src/styles/Profileright.module.css'
import Defaultcomp from './Defaultcomp'
import Leaderboard from './Leaderboard'


function Right({selection, lesson, sections}) {

  return (
    <div className={styles.container}>
        {selection.section !== 'Leader' ? 
          <Defaultcomp lesson={lesson} sections={sections}/> : 
          <Leaderboard lesson={lesson} sections={sections}/>
        }
    </div>
  )
}

export default Right