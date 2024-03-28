import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'
import Reveal from '../../../components/Reveal'


export default function LanguageClub() {
  return (
    <div>
    <Reveal>
      <div className={styles.bigicontainer}>
      <div className={styles.bigcontainer}>
      <div className={styles.text10}>
        <div className={`${styles.top55}`}>Olympiad</div>
        <div className={`${styles.middle55} ${styles.text12}`}>Train for mathematics, science, english and more.</div>
        <div className={`${styles.bottom55} ${styles.text13}`}></div>
        {/* <button className={styles.btn}>Apply Now</button> */}
      </div>
      <div className={styles.imgcont10}>
        <Image className={styles.img10} width={2400} height={1600} src={"/illustrations/19 (1).png"} alt="image"/>
      </div>
      </div>
      </div>
    </Reveal>
      {/* <div className={styles.topcontainer}>
        <div className={styles.tint}/>
        <Image className={styles.img} src={'/content/6.jpg'} width={2400} height={1400} alt="img"/>
        <div className={styles.textcontainer}>
        <Reveal>
          <div className={styles.heading1}>Olympiad</div>
        </Reveal>
        <Reveal>
          <div className={styles.text1}>Train for mathematics, science, english and more following the syllabus and pattern of the leading olympiad organizers</div>
        </Reveal>
        </div>
      </div> */}

      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
          {/* <div className={styles.heading2}>LOREM IPSUM IPSUM</div> */}
          <div className={styles.text2}>Beyond academic preparation, our club also fosters a supportive and collaborative community where students can connect with like-minded peers, share knowledge and strategies, and motivate each other to reach their full potential.<br/><br/>Whether you're a seasoned Olympiad competitor or a newcomer looking to test your skills, our club offers a welcoming and stimulating environment where you can embark on an exciting journey of intellectual exploration and academic achievement. Join us and unlock your full potential as a scholar and problem solver!</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/illustrations/2 (7).png'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>

      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
          {/* <div className={styles.heading2}>LOREM IPSUM IPSUM</div> */}
          <div className={styles.text2}>An Olympiad Club is an exceptional platform for nurturing intellectual curiosity, critical thinking, and problem-solving skills among students. Our club is dedicated to preparing students for various academic Olympiad competitions, ranging from mathematics and science to literature and history.<br/><br/>Through a combination of rigorous training sessions, practice exams, and specialized workshops, we provide students with the tools and resources they need to excel in these prestigious competitions. Our experienced coaches and mentors are committed to guiding students through challenging concepts and helping them develop the analytical and creative thinking skills required to succeed in Olympiad competitions.</div>
        </Reveal>

        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/illustrations/2 (12).png'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>

      </div>
    </div>
  )
}