import styles from '../src/styles/footer.module.css'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const[index,setIndex] = useState(0)
  const alltext = ["As a student at the coaching institute, I can't express how much I enjoy the vocab quizzes, storytelling activities, and writing contests. These engaging activities not only enhance my language skills but also ignite my creativity. And the best part? I consistently manage to win prizes! It's incredibly motivating to see my efforts rewarded.",
  "As a student here, I can confidently say that all the teachers are not only excellent but also incredibly helpful. Their dedication to our growth and learning is commendable. Since joining, my confidence has soared. The personalized attention, engaging lessons, and supportive environment have truly transformed my educational experience.",
    "The beginner level Spanish lessons took up a very holistic approach towards understanding the language and to gain the ability to start speaking it a little by the end of the modules. Dominic sir's way of teaching helped me in initiating and engaging in basic conversation in Spanish. Overall, it was a wonderful learning experience.",
  "The overall content delivery was phenomenal. The level of interaction even in an online session made the whole experience fruitful. The content itself was extremely informative and the most important part of the classes that made it different and effective was the practice of correct pronunciation. That itself is something that is hard to grasp and teach.",
  "The 10-day Spanish foundation course with Apriori Education completely changed the way I look at learning a new language. I am thankful to be aware of how enriching, fun and lasting the knowledge of an interesting language like Spanish can be. From the first class till the last, you learn every aspect of its practicality when you come around to speaking it."]
  const img = ["/profileimg/7.webp","/profileimg/8.webp","/profileimg/6 (2).png", "/profileimg/6 (4).png", "/profileimg/6 (3).png"]
  const names = ["Swastik","Sara","Dyumna","Nipun Banerjee","Prisha Chhabra"]
  const courses = ["READING CLUB","READING CLUB","SPANISH FOUNDATION (A1 & A2)","SPANISH FOUNDATION (A1 & A2)","GERMAN FOUNDATION & INTERMEDIATE (A1, A2, B1 & B2)"]

  useEffect(() => {
    setInterval(() => {
      setIndex(index => index < 2 ? index + 1 : 0)
    }, 8000)
  }, [])

  return (
    <div className={styles.bcontainer}>
    <div className={styles.container}>
      <div>
        <div className={styles.logocontainer}>
          <Image className={styles.logo} src={'/logo/newlogo1.png'} width={300} height={300} alt="image"/>
          <div className={styles.logotext}>UpskillEdu<br/>Solutions</div>
        </div>
        <div className={styles.lefttopic10}>Our testimonials</div>
        <div className={styles.border}>
          <div className={styles.profilecontainer}>
            <div className={styles.proimg}>
              <Image className={styles.proimg1} src={img[index]} width={300} height={300} alt="image"/>
            </div> 
            <div className={styles.name}><div>{names[index]}</div><div className={styles.coursename}>{courses[index]}</div></div>
          </div>
          <div className={styles.testimonialstext}>{alltext[index]}</div>
        </div>
      </div>

      <div>
        <div className={styles.lefttopic}>Join the activities</div>
        <div className={styles.textcontainer}>
            <div className={styles.text1}>
              <Link className={styles.text5} href='/ReadingSkills'>Reading Club</Link>
            </div>
            <div className={styles.text1}>
              <Link className={styles.text5} href='/LanguageClub'>Language Club</Link>
            </div>
            <div className={styles.text1}>
              <Link className={styles.text5} href='/WritingSkills'>Writing Club</Link>
            </div>
            <div className={styles.text1}>
              <Link className={styles.text5} href='/Olympiad'>Olympiad</Link>
            </div>
          </div>
      </div>
      <div>
        <div className={styles.lefttopic}>Get in touch</div>
        <div className={styles.margintop}>
          <div className={styles.getflex}><FaInstagram /><div>Instagram</div></div>
          <div className={styles.getflex}><FaFacebook /><div>Facebook</div></div>
          <div className={styles.getflex}><FaYoutube /><div>Youtube</div></div>
          <div className={styles.getflex}><FaTwitter /><div>Twitter</div></div>
        </div>
      </div>
    </div>
    <div className={styles.copyright}>@ 2024 UpskillEdu Solutions. All rights reserved. Privacy Policy.</div>
    </div>
  )
}
