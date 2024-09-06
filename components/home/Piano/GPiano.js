import React, { useState } from 'react'
import styles from '../../../src/styles/piano.module.css'
import { FaPlus } from "react-icons/fa";

export default function Piano() {
    const[ans1, setAnsw1] = useState(false)
    const[ans2, setAnsw2] = useState(false)
    const[ans3, setAnsw3] = useState(false)
    const[ans4, setAnsw4] = useState(false)
    const[ans5, setAnsw5] = useState(false)
    const[ans6, setAnsw6] = useState(false)
  return (
    <div className={styles.cont}>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw1(!ans1)}} className={`${styles.ques} ${styles.gbg1}`}>
                <div className={styles.newflex}>
                    <div>About Us</div>
                    <div><FaPlus className={ans1 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans1 ? styles.ans : styles.answ}>
            <div className={ans1 ? styles.ans1 : styles.answ1}>Through an array of dynamic activities, including lively conversations, interactive games, cultural celebrations, and enlightening workshops, we aim to not only hone your language skills but also foster meaningful connections within our community.
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw2(!ans2)}} className={`${styles.ques} ${styles.gbg2}`}>
                <div className={styles.newflex}>
                    <div>Academics</div>
                    <div><FaPlus className={ans2 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans2 ? styles.ans : styles.answ}>
            <div className={ans2 ? styles.ans1 : styles.answ1}>Through our meticulously crafted curriculum and immersive experiences, we provide a stimulating environment that nurtures linguistic proficiency and cultural understanding. Our team of experienced educators is dedicated to guiding students on their language journey, employing innovative teaching methods and personalized attention to ensure optimal learning outcomes. Whether you're a beginner or an advanced learner, our German Language Club provides the resources and support you need to thrive academically and culturally.
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw3(!ans3)}} className={`${styles.ques} ${styles.gbg3}`}>
                <div className={styles.newflex}>
                    <div>Culture</div>
                    <div><FaPlus className={ans3 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans3 ? styles.ans : styles.answ}>
            <div className={ans3 ? styles.ans1 : styles.answ1}>Immerse yourself in the rich tapestry of German culture with the German Language Club. From the majestic castles of Bavaria to the bustling streets of Berlin, discover the depth and diversity of German heritage through its art, music, literature, cuisine, and traditions. Delve into the timeless works of Goethe, Bach, and Beethoven, savor the hearty flavors of bratwurst and pretzels, and join in the spirited festivities of Oktoberfest and Karneval. Experience the warmth of German hospitality in cozy beer gardens and traditional Gasthäuser, and embrace the renowned efficiency and innovation of German engineering and design.
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw4(!ans4)}} className={`${styles.ques} ${styles.gbg4}`}>
                <div className={styles.newflex}>
                    <div>Career</div>
                    <div><FaPlus className={ans4 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans4 ? styles.ans : styles.answ}>
            <div className={ans4 ? styles.ans1 : styles.answ1}>Explore an array of exciting career prospects with the German Language Club as your gateway. In an increasingly interconnected world, proficiency in German offers a multitude of opportunities across various fields such as engineering, automotive industries, science, technology, and international business. Whether you aspire to work for renowned German companies like BMW, Siemens, or Bosch, engage in cutting-edge research at prestigious institutions, or embark on a cultural exchange as a language instructor or translator, fluency in German not only enhances your professional credentials but also fosters cross-cultural understanding and collaboration.
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw5(!ans5)}} className={`${styles.ques} ${styles.gbg5}`}>
                <div className={styles.newflex}>
                    <div>Why Choose Us?</div>
                    <div><FaPlus className={ans5 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans5 ? styles.ans : styles.answ}>
            <div className={ans5 ? styles.ans1 : styles.answ1}>We believe that learning a language is more than memorizing vocabulary - it's about unlocking doors to new worlds. At the German Language Club, we're not just learning a language; we're embracing a vibrant culture. Visit our website, sign up for our newsletter, and let's embark on this linguistic adventure together!
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw6(!ans6)}} className={`${styles.ques} ${styles.gbg6}`}>
                <div className={styles.newflex}>
                    <div>Join Us</div>
                    <div><FaPlus className={ans6 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans6 ? styles.ans : styles.answ}>
            <div className={ans6 ? styles.ans1 : styles.answ1}>Join us and embark on a journey of discovery, where you'll unravel the richness of German history, explore its vibrant arts scene, and savor its culinary delights. Herzlich willkommen!<br/><br/> We're thrilled to have you join us on this exhilarating linguistic and cultural voyage!
            </div>
            </div>
            </div>
        </div>

    </div>
  )
}
