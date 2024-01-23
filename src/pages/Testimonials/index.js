import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'


export default function LanguageClub() {
  return (
    <div>
      <div className={styles.topcontainer}>
        <div className={styles.tint}/>
        <Image className={styles.img} src={'/content/12.jpg'} width={2400} height={1400} alt="img"/>
        <div className={styles.textcontainer}>
          <div className={styles.heading1}>Testimonials</div>
          <div className={styles.text1}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
        </div>
      </div>
    <div className={styles.cards}>
      <div className={styles.card}>
        <div className={styles.topflex}>
        <div className={styles.imgcontainer1}>
          <Image className={styles.img1} src={'/profileimg/2 (1).png'} width={600} height={600} alt="image"/>
        </div>
          <div className={styles.testname}>Rohit Bhatnagar</div>
        </div>
        <div>What is truly remarkable about the Apriori team is their commitment to being not only test prep professionals, but also teachers and mentors. My success on the GMAT was a direct result of their attention to detail and their focus on helping me understand test concepts.</div>
      </div>
      <div className={styles.card}>
        <div className={styles.topflex}>
        <div className={styles.imgcontainer1}>
          <Image className={styles.img1} src={'/profileimg/2 (2).png'} width={600} height={600} alt="image"/>
        </div>
          <div className={styles.testname}>Dhruv Sharma</div>
        </div>
        <div>If you want a new approach to learning things and escape the ordinary methods you are used to, join Apriori as fast as possible. Not only are you going to get a great score but also be able to think and learn way more than you did at school.</div>
      </div>
      <div className={styles.card}>
        <div className={styles.topflex}>
        <div className={styles.imgcontainer1}>
          <Image className={styles.img1} src={'/profileimg/3 (3).png'} width={600} height={600} alt="image"/>
        </div>
          <div className={styles.testname}>Sukriti Gupta</div>
        </div>
        <div>I had the opportunity to attend classes for SAT and ACT at Apriori. I would like to extend a personal thanks to Dominic Sir who has been very patient and supportive and has at all times stressed the need to be a voracious reader in order to achieve the scores in the standardized tests and to achieve overall academic excellence.</div>
      </div>
      <div className={styles.card}>
        <div className={styles.topflex}>
        <div className={styles.imgcontainer1}>
          <Image className={styles.img1} src={'/profileimg/4.png'} width={600} height={600} alt="image"/>
        </div>
          <div className={styles.testname}>Arya Lamba</div>
        </div>
        <div>I had the opportunity to attend classes for SAT and ACT at Apriori. I would like to extend a personal thanks to Dominic Sir who has been very patient and supportive and has at all times stressed the need to be a voracious reader in order to achieve the scores in the standardized tests and to achieve overall academic excellence.</div>
      </div>
      <div className={styles.card}>
        <div className={styles.topflex}>
        <div className={styles.imgcontainer1}>
          <Image className={styles.img1} src={'/profileimg/5.png'} width={600} height={600} alt="image"/>
        </div>
          <div className={styles.testname}>Akshara Thakur</div>
        </div>
        <div>For me, Apriori has not only been a test prep institute but also been an experience. The personal attention I got here is unparalleled. I would definitely recommend Apriori to anyone looking to get a great score on the SAT/ ACT.</div>
      </div>
    </div>
    </div>
  )
}