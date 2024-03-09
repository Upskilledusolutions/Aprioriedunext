import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'
import Reveal from '../../../components/Reveal'


export default function LanguageClub() {
  return (
    <div>
      <div className={styles.topcontainer}>
        <div className={styles.tint}/>
        <Image className={styles.img} src={'/background/2.jpg'} width={2400} height={1400} alt="img"/>
        <div className={styles.textcontainer}>
        <Reveal>
          <div className={styles.heading1}>Language Club</div>
        </Reveal>
        <Reveal>
          <div className={styles.text1}>learn, practice, and enjoy different languages with other enthusiasts.</div>
        </Reveal>
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
        {/* <div className={styles.heading2}>LOREM IPSUM IPSUM</div> */}
          <div className={styles.text2}>One of the key features of our language club is our diverse range of language offerings. Whether you're interested in mastering a widely spoken language like Spanish, French, or Mandarin, or delving into a lesser-known language like Swahili, Russian, or Arabic, our club offers resources and support to help you achieve your language learning goals.<br/><br/>We provide a variety of language learning materials, including textbooks, online resources, and language exchange programs, to cater to different learning styles and preferences. Our club also hosts language classes, workshops, and conversation groups led by experienced instructors and native speakers, providing members with opportunities to practice their language skills in a supportive and interactive environment.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/content/3.jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>
      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
          {/* <div className={styles.heading2}>LOREM IPSUM IPSUM</div> */}
          <div className={styles.text2}>At our language club, we believe that language learning is not just a skill, but a transformative journey that opens doors to new opportunities, experiences, and connections. Whether you're learning a language for travel, work, or personal enrichment, our club offers a supportive and engaging environment where you can learn, grow, and thrive. So why not join us on our language learning adventure?<br/><br/>Together, we'll explore the beauty and diversity of languages and cultures from around the world, and embark on a journey of discovery that will enrich our lives and broaden our horizons in ways we never imagined possible.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/content/2.jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>

      </div>
    </div>
  )
}
