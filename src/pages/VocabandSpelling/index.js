import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'


export default function LanguageClub() {
  return (
    <div>
      <div className={styles.topcontainer}>
        <div className={styles.tint}/>
        <Image className={styles.img} src={'/content/spelling/1.jpg'} width={2400} height={1400} alt="img"/>
        <div className={styles.textcontainer}>
          <div className={styles.heading1}>Vocab and Spelling</div>
          <div className={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.left1}>
          <div className={styles.heading2}>LOREM IPSUM IPSUM</div>
          <div className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div className={styles.right1}>
          <Image className={styles.img2} src={'/content/spelling/2.jpg'} width={500} height={500} alt="img"/>
        </div>
      </div>
      <div className={styles.middle2}>
        <div className={styles.left1}>
          <div className={styles.heading2}>LOREM IPSUM IPSUM</div>
          <div className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
        <div className={styles.right1}>
          <Image className={styles.img2} src={'/content/spelling/3.jpg'} width={500} height={500} alt="img"/>
        </div>
      </div>
    </div>
  )
}