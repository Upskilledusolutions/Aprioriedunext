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
    <div className={styles.contI}>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw1(!ans1)}} className={`${styles.ques} ${styles.ibg1}`}>
                <div className={styles.newflex}>
                    <div>About Us</div>
                    <div><FaPlus className={ans1 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans1 ? styles.ans : styles.answ}>
            <div className={ans1 ? styles.ans1 : styles.answ1}>At the Italian Language Club, we’re more than just language learners—we’re passionate explorers of all things Italian. Whether you’re a curious beginner or a seasoned conversationalist, our club is your home away from home. Let’s embark on a linguistic journey together!
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw2(!ans2)}} className={`${styles.ques} ${styles.ibg2}`}>
                <div className={styles.newflex}>
                    <div>Academics</div>
                    <div><FaPlus className={ans2 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans2 ? styles.ans : styles.answ}>
            <div className={ans2 ? styles.ans1 : styles.answ1}>Tailored specifically for schools and colleges, our club offers a comprehensive platform for students to immerse themselves in the richness of the Italian language. Our carefully crafted curriculum is designed to provide a solid foundation in Italian grammar, vocabulary, and pronunciation while also delving into the vibrant cultural nuances that make Italy so unique. With a team of experienced educators who are passionate about sharing their love for the language, we provide engaging lessons and interactive activities that inspire students to excel in their language learning journey. Whether you're a beginner or an advanced learner, our Italian Language Club is your gateway to unlocking the doors to academic success and cultural enrichment.
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw3(!ans3)}} className={`${styles.ques} ${styles.ibg3}`}>
                <div className={styles.newflex}>
                    <div>Culture</div>
                    <div><FaPlus className={ans3 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans3 ? styles.ans : styles.answ}>
            <div className={ans3 ? styles.ans1 : styles.answ1}>From the sun-kissed shores of the Amalfi Coast to the historic streets of Rome, immerse yourself in the beauty and splendor of Italy's art, music, cuisine, and traditions. Indulge in the rich flavors of authentic pasta and gelato, marvel at the timeless masterpieces of Michelangelo and Leonardo da Vinci, and revel in the passionate rhythms of Italian opera and dance. Experience the warmth of Italian hospitality in bustling piazzas and family-owned trattorias, and embrace the vibrant spirit of la dolce vita that permeates every aspect of Italian life.
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw4(!ans4)}} className={`${styles.ques} ${styles.ibg4}`}>
                <div className={styles.newflex}>
                    <div>Career</div>
                    <div><FaPlus className={ans4 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans4 ? styles.ans : styles.answ}>
            <div className={ans4 ? styles.ans1 : styles.answ1}>In an increasingly globalized world, proficiency in Italian opens doors to a multitude of professional opportunities across various industries such as tourism, hospitality, international relations, art, and cuisine. Whether you aspire to work as a tour guide in the historic streets of Florence, manage luxury hotels along the picturesque Amalfi Coast, promote Italian culture and heritage as a diplomat, or pursue a career in fashion and design in Milan, fluency in Italian not only enhances your marketability but also deepens your appreciation for the rich cultural heritage of Italy.
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw5(!ans5)}} className={`${styles.ques} ${styles.ibg5}`}>
                <div className={styles.newflex}>
                    <div>Why Choose Us?</div>
                    <div><FaPlus className={ans5 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans5 ? styles.ans : styles.answ}>
            <div className={ans5 ? styles.ans1 : styles.answ1}>Join our diverse community of language enthusiasts and embark on an enriching journey of learning and discovery. Whether you dream of exploring Italy's breathtaking landscapes, savoring its delicious cuisine, or simply connecting with native speakers, our Italian Language Club is the perfect place to start. Benvenuti!<br/><br/> We can't wait to share this adventure with you!
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw6(!ans6)}} className={`${styles.ques} ${styles.ibg6}`}>
                <div className={styles.newflex}>
                    <div>Join Us</div>
                    <div><FaPlus className={ans6 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans6 ? styles.ans : styles.answ}>
            <div className={ans6 ? styles.ans1 : styles.answ1}>Whether you're a student, a professional, or a Italian enthusiast, everyone is welcome at the Italian Language Club. Join us today and become part of a dynamic and engaged community! <br/><br/>

For more information about our activities and upcoming events, feel free to explore our website or contact us directly. We look forward to welcoming you to our club and sharing our passion for the Italian language with you!
            </div>
            </div>
            </div>
        </div>

    </div>
  )
}
