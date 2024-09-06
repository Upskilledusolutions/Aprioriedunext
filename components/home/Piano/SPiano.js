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
            <div onClick={()=>{setAnsw1(!ans1)}} className={`${styles.ques} ${styles.sbg1}`}>
                <div className={styles.newflex}>
                    <div>About Us</div>
                    <div><FaPlus className={ans1 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans1 ? styles.ans : styles.answ}>
            <div className={ans1 ? styles.ans1 : styles.answ1}>At the Spanish Language Club, we believe that language is more than just words—it’s a bridge that connects cultures, hearts, and minds. Whether you’re a curious beginner or a seasoned conversationalist, our club is your home away from home.<br/><br/>Let’s embark on a linguistic journey together!
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw2(!ans2)}} className={`${styles.ques} ${styles.sbg2}`}>
                <div className={styles.newflex}>
                    <div>Academics</div>
                    <div><FaPlus className={ans2 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans2 ? styles.ans : styles.answ}>
            <div className={ans2 ? styles.ans1 : styles.answ1}>Designed to elevate language learning within academic settings, our club is the ideal choice for schools and colleges seeking to enrich their language programs. With a focus on rigorous academics and immersive experiences, we offer comprehensive resources and engaging activities tailored to cultivate fluency and cultural understanding. Our team of experienced educators is dedicated to providing top-tier instruction, empowering students to excel in their language journey. Whether you're a student eager to expand your language skills or an institution aiming to enhance your curriculum, our Spanish Language Club is your gateway to a world of linguistic exploration and academic achievement.
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw3(!ans3)}} className={`${styles.ques} ${styles.sbg3}`}>
                <div className={styles.newflex}>
                    <div>Culture</div>
                    <div><FaPlus className={ans3 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans3 ? styles.ans : styles.answ}>
            <div className={ans3 ? styles.ans1 : styles.answ1}>Dive into the vibrant tapestry of Spanish culture with our Spanish Language Club. From the rhythmic beats of flamenco to the mouthwatering aromas of paella, immerse yourself in the art, music, cuisine, and traditions that define this colorful and diverse heritage. Explore the architectural wonders of Moorish palaces in Andalusia, revel in the spirited festivities of La Tomatina and the Running of the Bulls, and savor the warmth of Spanish hospitality in every tapas bar and plaza.
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw4(!ans4)}} className={`${styles.ques} ${styles.sbg4}`}>
                <div className={styles.newflex}>
                    <div>Career</div>
                    <div><FaPlus className={ans4 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans4 ? styles.ans : styles.answ}>
            <div className={ans4 ? styles.ans1 : styles.answ1}>Unlock a world of professional possibilities with the Spanish Language Club. As Spanish continues to assert its influence on the global stage, proficiency in this vibrant language opens doors to diverse career paths, including international trade, healthcare, media, and beyond. Whether you dream of bridging cultural divides as a bilingual journalist, providing vital medical assistance in Spanish-speaking communities, or fostering diplomatic relations as a language specialist, fluency in Spanish equips you with invaluable skills and a competitive edge in today's multicultural workforce.
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw5(!ans5)}} className={`${styles.ques} ${styles.sbg5}`}>
                <div className={styles.newflex}>
                    <div>Why Choose Us?</div>
                    <div><FaPlus className={ans5 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans5 ? styles.ans : styles.answ}>
            <div className={ans5 ? styles.ans1 : styles.answ1}>By becoming a member of the Spanish Language Club, you'll open doors to connect with individuals who share your interests, enhance your linguistic abilities, and delve into the vibrant culture of Spanish-speaking regions. Whether your inspiration stems from wanderlust, literature, culinary delights, or the sheer delight of learning, our club offers a welcoming environment where you can pursue your passions and expand your horizons.
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw6(!ans6)}} className={`${styles.ques} ${styles.sbg6}`}>
                <div className={styles.newflex}>
                    <div>Join Us</div>
                    <div><FaPlus className={ans6 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans6 ? styles.ans : styles.answ}>
            <div className={ans6 ? styles.ans1 : styles.answ1}>Whether you're a student, a professional, or a Spanish enthusiast, everyone is welcome at the Spanish Language Club. Join us today and become part of a dynamic and engaged community! <br/><br/>

For more information about our activities and upcoming events, feel free to explore our website or contact us directly. We look forward to welcoming you to our club and sharing our passion for the Spanish language with you!
            </div>
            </div>
            </div>
        </div>

    </div>
  )
}
