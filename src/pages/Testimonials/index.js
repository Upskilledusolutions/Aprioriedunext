import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'
import Reveal from '../../../components/Reveal'

export default function LanguageClub() {
  return (
    <div>
      <div className={styles.topcontainer}>
        <div className={styles.tint}/>
        <Image className={styles.img} src={'/content/12.jpg'} width={2400} height={1400} alt="img"/>
        <div className={styles.textcontainer}>
        <Reveal>
          <div className={styles.heading1}>Testimonials</div>
        </Reveal>
        <Reveal>
          <div className={styles.text1}>“Read what our satisfied students have to say about their experience with us.”</div>
        </Reveal>
        </div>
      </div>
    <div className={styles.cards}>
      <Reveal>
        <div className={styles.card}>
          <div className={styles.topflex}>
          <div className={styles.imgcontainer1}>
            <Image className={styles.img1} src={'/profileimg/6 (2).png'} width={600} height={600} alt="image"/>
          </div>
            <div className={styles.testname}>
              <div>Dyumna</div>
              <div className={styles.newlanguage}>SPANISH FOUNDATION (A1 & A2)</div>
            </div>
          </div>
          <div>The beginner level Spanish lessons took up a very holistic approach towards understanding the language and to gain the ability to start speaking it a little by the end of the modules. Dominic sir's way of teaching helped me in initiating and engaging in basic conversation in Spanish. Overall, it was a wonderful learning experience.</div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.card}>
          <div className={styles.topflex}>
          <div className={styles.imgcontainer1}>
            <Image className={styles.img1} src={'/profileimg/6 (4).png'} width={600} height={600} alt="image"/>
          </div>
            <div className={styles.testname}>
              <div>Nipun Banerjee</div>
              <div className={styles.newlanguage}>SPANISH FOUNDATION (A1 & A2)</div>
            </div>
          </div>
          <div>The overall content delivery was phenomenal. The level of interaction even in an online session made the whole experience fruitful. The content itself was extremely informative and the most important part of the classes that made it different and effective was the practice of correct pronunciation. That itself is something that is hard to grasp and teach.</div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.card}>
          <div className={styles.topflex}>
          <div className={styles.imgcontainer1}>
            <Image className={styles.img1} src={'/profileimg/6 (3).png'} width={600} height={600} alt="image"/>
          </div>
          <div className={styles.testname}>
              <div>Prisha Chhabra</div>
              <div className={styles.newlanguage}>GERMAN FOUNDATION & INTERMEDIATE (A1, A2, B1 & B2)</div>
            </div>
          </div>
          <div>The 10-day Spanish foundation course with Apriori Education completely changed the way I look at learning a new language. I am thankful to be aware of how enriching, fun and lasting the knowledge of an interesting language like Spanish can be. From the first class till the last; my interest only kept mounting. In this lesson, you don't learn simply the ABCs of a language, you learn every aspect of its practicality when you come around to speaking it. In completing every assignment filled with realistic questions and conversations, I gained a sense of achievement thanks to the incredible and novel teaching of Dominic Sir. I truly miss this class, and grateful to have the experience!</div>
        </div>
      </Reveal>
      {/* <div className={styles.card}>
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
      <div className={styles.card}>
        <div className={styles.topflex}>
        <div className={styles.imgcontainer1}>
          <Image className={styles.img1} src={'/profileimg/6 (1).png'} width={600} height={600} alt="image"/>
        </div>
          <div className={styles.testname}>Reyan Mehta</div>
        </div>
        <div>There is no one in this field who knows more about the SAT than Dominic sir. The ivy mentorship has been of great help in understanding the exam in a more relatable manner, as the mentor has been a former student herself, and understands the challenges faced by a student. The staff is also very professional and prompt and is always ready to guide you.</div>
      </div>
      <div className={styles.card}>
        <div className={styles.topflex}>
        <div className={styles.imgcontainer1}>
          <Image className={styles.img1} src={'/profileimg/6 (2).png'} width={600} height={600} alt="image"/>
        </div>
          <div className={styles.testname}>Dyumna</div>
        </div>
        <div>The beginner level Spanish lessons took up a very holistic approach towards understanding the language and to gain the ability to start speaking it a little by the end of the modules. Dominic sir's way of teaching helped me in initiating and engaging in basic conversation in Spanish. Overall, it was a wonderful experience learning at Apriori!</div>
      </div>
      <div className={styles.card}>
        <div className={styles.topflex}>
        <div className={styles.imgcontainer1}>
          <Image className={styles.img1} src={'/profileimg/6 (3).png'} width={600} height={600} alt="image"/>
        </div>
          <div className={styles.testname}>Prisha Chhabra</div>
        </div>
        <div>The 10-day Spanish foundation course with Apriori Education completely changed the way I look at learning a new language. I am thankful to be aware of how enriching, fun and lasting the knowledge of an interesting language like Spanish can be. From the first class till the last; my interest only kept mounting.</div>
      </div>
      <div className={styles.card}>
        <div className={styles.topflex}>
        <div className={styles.imgcontainer1}>
          <Image className={styles.img1} src={'/profileimg/6 (4).png'} width={600} height={600} alt="image"/>
        </div>
          <div className={styles.testname}>Nipun Banerjee</div>
        </div>
        <div>The overall content delivery was phenomenal. The level of interaction even in an online session made the whole experience fruitful. The content itself was extremely informative and the most important part of the classes that made it different and effective was the practice of correct pronunciation. That itself is something that is hard to grasp and teach.</div>
      </div>      
      <div className={styles.card}>
        <div className={styles.topflex}>
        <div className={styles.imgcontainer1}>
          <Image className={styles.img1} src={'/profileimg/6 (5).png'} width={600} height={600} alt="image"/>
        </div>
          <div className={styles.testname}>Prisha Tewari</div>
        </div>
        <div>I joined Apriori education after taking my first SAT, and it has transformed the way I attempt my papers. Dominic Sir's dedication towards everyone at the centre is evident through the amount of effort they put in. 'Thank you' doesn't adequately express my gratitude for the experience I had and everything I learnt here.</div>
      </div>
      <div className={styles.card}>
        <div className={styles.topflex}>
        <div className={styles.imgcontainer1}>
          <Image className={styles.img1} src={'/profileimg/6 (6).png'} width={600} height={600} alt="image"/>
        </div>
          <div className={styles.testname}>Rohit Bhatnagar</div>
        </div>
        <div>What is truly remarkable about the Apriori team is their commitment to being not only test prep professionals, but also teachers and mentors. My success on the GMAT was a direct result of their attention to detail and their focus on helping me understand test concepts.</div>
      </div> */}
      {/* <div className={styles.card}>
        <div className={styles.topflex}>
        <div className={styles.imgcontainer1}>
          <Image className={styles.img1} src={'/profileimg/6 (7).png'} width={600} height={600} alt="image"/>
        </div>
          <div className={styles.testname}>Rohit Bhatnagar</div>
        </div>
        <div>What is truly remarkable about the Apriori team is their commitment to being not only test prep professionals, but also teachers and mentors. My success on the GMAT was a direct result of their attention to detail and their focus on helping me understand test concepts.</div>
      </div> */}
    </div>
    </div>
  )
}