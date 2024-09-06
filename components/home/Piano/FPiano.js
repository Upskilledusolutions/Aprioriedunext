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
            <div onClick={()=>{setAnsw1(!ans1)}} className={`${styles.ques} ${styles.bg1}`}>
                <div className={styles.newflex}>
                    <div>About Us</div>
                    <div><FaPlus className={ans1 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans1 ? styles.ans : styles.answ}>
            <div className={ans1 ? styles.ans1 : styles.answ1}>We organize cultural events, film screenings, French cuisine tastings, trips, and encounters with French speakers to explore and celebrate this diversity. Thematic workshops cover a wide range of topics such as French cuisine, Francophone literature, French history, music, and more. Movie nights, guided tours, concerts, wine tastings, and art exhibitions are integral parts of our calendar for exploring French culture in all its forms.
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw2(!ans2)}} className={`${styles.ques} ${styles.bg2}`}>
                <div className={styles.newflex}>
                    <div>Academics</div>
                    <div><FaPlus className={ans2 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans2 ? styles.ans : styles.answ}>
            <div className={ans2 ? styles.ans1 : styles.answ1}>Dedicated to fostering a passion for the French language within academic settings, we cater to schools and colleges seeking to enhance their language programs. Our club offers comprehensive resources, engaging activities, and immersive experiences designed to cultivate fluency and cultural appreciation. Whether you're a student eager to expand your language skills or an institution aiming to enrich your curriculum, our experienced educators and tailored programs ensure a rewarding journey into the beauty and depth of French language and culture.
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw3(!ans3)}} className={`${styles.ques} ${styles.bg3}`}>
                <div className={styles.newflex}>
                    <div>Culture</div>
                    <div><FaPlus className={ans3 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans3 ? styles.ans : styles.answ}>
            <div className={ans3 ? styles.ans1 : styles.answ1}>Embark on a journey through the captivating tapestry of French culture with our French Language Club. From the romantic allure of Parisian streets to the exquisite flavors of French cuisine, immerse yourself in the art, literature, music, and traditions that define this rich and diverse heritage. Explore the works of iconic French writers, savor the delights of fine wines and cheeses, and celebrate the vibrant festivals that punctuate the French calendar.
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw4(!ans4)}} className={`${styles.ques} ${styles.bg4}`}>
                <div className={styles.newflex}>
                    <div>Career</div>
                    <div><FaPlus className={ans4 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans4 ? styles.ans : styles.answ}>
            <div className={ans4 ? styles.ans1 : styles.answ1}>Dedicated to fostering a passion for the French language within academic settings, we cater to schools and colleges seeking to enhance their language programs. Our club offers comprehensive resources, engaging activities, and immersive experiences designed to cultivate fluency and cultural appreciation. Whether you're a student eager to expand your language skills or an institution aiming to enrich your curriculum, our experienced educators and tailored programs ensure a rewarding journey into the beauty and depth of French language and culture.
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw5(!ans5)}} className={`${styles.ques} ${styles.bg5}`}>
                <div className={styles.newflex}>
                    <div>Why Choose Us?</div>
                    <div><FaPlus className={ans5 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans5 ? styles.ans : styles.answ}>
            <div className={ans5 ? styles.ans1 : styles.answ1}>By joining the French Language Club, you'll have the opportunity to meet like-minded people, improve your language skills, and discover the cultural richness of the Francophone world. Whether you're motivated by travel, literature, gastronomy, or simply the joy of learning, our club provides a friendly platform to explore your passions and broaden your horizons.
            </div>
            </div>
            </div>
        </div>

        <div className={styles.smsont}>
            <div onClick={()=>{setAnsw6(!ans6)}} className={`${styles.ques} ${styles.bg6}`}>
                <div className={styles.newflex}>
                    <div>Join Us</div>
                    <div><FaPlus className={ans6 ? styles.icon : styles.nicon}/></div>
                </div>
            <div className={ans6 ? styles.ans : styles.answ}>
            <div className={ans6 ? styles.ans1 : styles.answ1}>Whether you're a student, a professional, or a French enthusiast, everyone is welcome at the French Language Club. Join us today and become part of a dynamic and engaged community! <br/><br/>

For more information about our activities and upcoming events, feel free to explore our website or contact us directly. We look forward to welcoming you to our club and sharing our passion for the French language with you!
            </div>
            </div>
            </div>
        </div>

    </div>
  )
}
