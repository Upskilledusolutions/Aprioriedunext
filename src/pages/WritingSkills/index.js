import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'
import Reveal from '../../../components/Reveal'


export default function LanguageClub() {
  return (
    <div>
      <div className={styles.topcontainer}>
        <div className={styles.tint}/>
        <Image className={styles.img} src={'/content/writing/1.jpg'} width={2400} height={1400} alt="img"/>
        <div className={styles.textcontainer}>
        <Reveal>
          <div className={styles.heading1}>Writing Club</div>
        </Reveal>
        <Reveal>
          <div className={styles.text1}>Enable your Writing skills to create clear and effective written communication in various forms and contexts.</div>
        </Reveal>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>LOREM IPSUM IPSUM</div>
          <div className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </Reveal>

        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/content/writing/2.jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>
      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>LOREM IPSUM IPSUM</div>
          <div className={styles.text2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </Reveal>

        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/content/writing/3.jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>

      </div>
    </div>
  )
}