import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'


export default function LanguageClub() {
  return (
    <div>
      <div className={styles.topcontainer}>
        <div className={styles.tint}/>
        <Image className={styles.img} src={'/content/21.jpg'} width={2400} height={1400} alt="img"/>
        <div className={styles.textcontainer}>
          <div className={styles.heading1}>Courses</div>
          <div className={styles.text1}>Whether you want to advance your career, pursue your passion, or simply satisfy your curiosity, we have the perfect course for you</div>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.left1}>
          <div className={styles.heading2}>LOREM IPSUM IPSUM</div>
          <div className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div className={styles.right1}>
          <Image className={styles.img2} src={'/content/22.jpg'} width={500} height={500} alt="img"/>
        </div>
      </div>
      <div className={styles.middle2}>
        <div className={styles.left1}>
          <div className={styles.heading2}>LOREM IPSUM IPSUM</div>
          <div className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div className={styles.right1}>
          <Image className={styles.img2} src={'/content/23.jpg'} width={500} height={500} alt="img"/>
        </div>
      </div>
    </div>
  )
}