import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'
import Slider from "../../../components/home/LanguagesSlider" 
import Reveal from '../../../components/Reveal'

export default function GermanLC() {
  return (
    <div>
    <div className={styles.bigheading}>German Language Club</div>

      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>Welcome to the German Language Club!</div>
          <div className={styles.text2}>Welcome to our German Language Club! We extend a hearty welcome to all language enthusiasts ready to immerse themselves in the captivating world of German language and culture. Whether you're starting afresh or seeking to refine your fluency.Our club offers a nurturing environment where you can fully engage with the nuances of the German language.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/2 (7).jpg'} width={800} height={800} alt="img"/>
          </div>
        </Reveal>

      </div>
      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
        <div className={styles.heading2}>About Us</div>
          <div className={styles.text2}>Through an array of dynamic activities, including lively conversations, interactive games, cultural celebrations, and enlightening workshops, we aim to not only hone your language skills but also foster meaningful connections within our community.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/2 (8).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>

      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>Academics</div>
          <div className={styles.text2}>Through our meticulously crafted curriculum and immersive experiences, we provide a stimulating environment that nurtures linguistic proficiency and cultural understanding. Our team of experienced educators is dedicated to guiding students on their language journey, employing innovative teaching methods and personalized attention to ensure optimal learning outcomes. Whether you're a beginner or an advanced learner, our German Language Club provides the resources and support you need to thrive academically and culturally.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/german (4).jpg'} width={800} height={800} alt="img"/>
          </div>
        </Reveal>

      </div>
      {/* <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
        <div className={styles.heading2}>Why we are better?</div>
          <div className={styles.text2}> It's our unwavering commitment to delivering a transformative learning experience that transcends traditional boundaries. With a focus on innovation and immersion, our club offers dynamic resources and personalized instruction tailored to each student's unique journey. Our dedicated team of educators brings a wealth of expertise and enthusiasm to every lesson, fostering not just fluency, but a deep appreciation for German culture and heritage. From interactive activities to cultural excursions, we provide a comprehensive approach that ensures holistic development.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/german (5).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div> */}

      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>Culture</div>
          <div className={styles.text2}>Immerse yourself in the rich tapestry of German culture with the German Language Club. From the majestic castles of Bavaria to the bustling streets of Berlin, discover the depth and diversity of German heritage through its art, music, literature, cuisine, and traditions. Delve into the timeless works of Goethe, Bach, and Beethoven, savor the hearty flavors of bratwurst and pretzels, and join in the spirited festivities of Oktoberfest and Karneval. Experience the warmth of German hospitality in cozy beer gardens and traditional Gasthäuser, and embrace the renowned efficiency and innovation of German engineering and design.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/german (2).jpg'} width={800} height={800} alt="img"/>
          </div>
        </Reveal>

      </div>
      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
        <div className={styles.heading2}>Career</div>
          <div className={styles.text2}>Explore an array of exciting career prospects with the German Language Club as your gateway. In an increasingly interconnected world, proficiency in German offers a multitude of opportunities across various fields such as engineering, automotive industries, science, technology, and international business. Whether you aspire to work for renowned German companies like BMW, Siemens, or Bosch, engage in cutting-edge research at prestigious institutions, or embark on a cultural exchange as a language instructor or translator, fluency in German not only enhances your professional credentials but also fosters cross-cultural understanding and collaboration.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/cc (3).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>

      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>Why Choose Us?</div>
          <div className={styles.text2}>we believe that learning a language is more than memorizing vocabulary - it's about unlocking doors to new worlds. At the German Language Club, we're not just learning a language; we're embracing a vibrant culture. Visit our website, sign up for our newsletter, and let's embark on this linguistic adventure together!</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/german (1).jpg'} width={800} height={800} alt="img"/>
          </div>
        </Reveal>

      </div>
      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
        <div className={styles.heading2}>Join Us</div>
          <div className={styles.text2}>Join us and embark on a journey of discovery, where you'll unravel the richness of German history, explore its vibrant arts scene, and savor its culinary delights. Herzlich willkommen!<br/><br/> We're thrilled to have you join us on this exhilarating linguistic and cultural voyage!</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/german (3).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>

      <Reveal>
        <Slider />
      </Reveal>
      <div className={styles.space}></div>

    </div>
  )
}
