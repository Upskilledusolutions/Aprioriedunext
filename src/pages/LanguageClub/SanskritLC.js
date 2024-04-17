import React from 'react'
import styles from "../../styles/Languageclub/languageclub.module.css"
import Image from 'next/image'
import Slider from "../../../components/home/LanguagesSlider" 
import Reveal from '../../../components/Reveal'

export default function SanskritLC() {
  return (
    <div>
    <div className={styles.bigheading}>Sanskrit Language Club</div>

      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>Welcome to the Sanskrit Language Club!</div>
          <div className={styles.text2}>Step into our virtual classroom, where the air is thick with the fragrance of ancient manuscripts. Beginners and seasoned learners alike gather to decode the intricacies of Sanskrit grammar. We dissect verb conjugations, explore declensions, and chant mantras, invoking the very essence of the language.Imagine sitting under the shade of a banyan tree, surrounded by fellow seekers.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/2 (9).jpg'} width={800} height={800} alt="img"/>
          </div>
        </Reveal>

      </div>
      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
        <div className={styles.heading2}>About Us</div>
          <div className={styles.text2}>The joy of speaking Sanskrit lies in its rhythmic cadence—a dance of syllables that connects us across centuries. Our virtual amphitheater hosts eminent scholars. They unravel the linguistic evolution of Sanskrit, trace its influence on neighboring languages, and reveal hidden gems from ancient manuscripts. These lectures ignite our curiosity and deepen our appreciation for the language’s nuances.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/1 (5).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>

      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>Academics</div>
          <div className={styles.text2}>A dedicated space where the timeless wisdom of Sanskrit meets academic excellence. Catering specifically to schools and colleges, our club offers a unique opportunity for students to explore the ancient language and its profound significance. Through our meticulously structured curriculum, we provide a comprehensive understanding of Sanskrit grammar, vocabulary, and literature. Our experienced instructors, well-versed in the intricacies of the language, guide students through engaging lessons and interactive activities, fostering a deep appreciation for Sanskrit's cultural and historical importance. Whether you're embarking on your journey as a beginner or seeking to enhance your proficiency, our Sanskrit Language Club is your gateway to unlocking the treasures of this revered language.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/sanskrit.jpg'} width={800} height={800} alt="img"/>
          </div>
        </Reveal>

      </div>
      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
        <div className={styles.heading2}>Why we are better?</div>
          <div className={styles.text2}>Experience the unparalleled excellence of our Sanskrit Language Club, where tradition meets innovation to redefine language learning. It's our unwavering commitment to preserving the richness of Sanskrit while making it accessible and engaging for learners of all levels. Our club offers a holistic approach that combines rigorous academics with immersive experiences, ensuring a deep understanding of the language's cultural and philosophical significance. With a team of dedicated instructors who are passionate about Sanskrit, we provide personalized guidance and dynamic resources to empower students on their journey to mastery. Whether you're a scholar, a seeker of knowledge, or simply curious about this ancient language, our Sanskrit Language Club is your premier destination.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/sanskrit.webp'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>


      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>Culture</div>
          <div className={styles.text2}>Explore the timeless wisdom of ancient texts such as the Vedas, Upanishads, and Mahabharata, and immerse yourself in the profound teachings of yoga and meditation. Delve into the vibrant world of classical Indian music, dance, and theater, and savor the flavors of Ayurvedic cuisine. Experience the beauty of Sanskrit calligraphy and poetry, and discover the spiritual significance of sacred rituals and ceremonies.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/cc (9).jpg'} width={800} height={800} alt="img"/>
          </div>
        </Reveal>

      </div>
      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
        <div className={styles.heading2}>Career</div>
          <div className={styles.text2}>Despite its ancient roots, Sanskrit remains relevant in modern professions such as academia, linguistics, philosophy, yoga, Ayurveda, and even technology. Whether you aspire to delve into the depths of ancient texts as a Sanskrit scholar, explore the intricacies of Indian philosophy and spirituality, teach the language in academic institutions, or contribute to cutting-edge research in computational linguistics, proficiency in Sanskrit offers a unique blend of intellectual enrichment and professional opportunities.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/cc (4).jpg'} width={500} height={500} alt="img"/>
          </div>
        </Reveal>
      </div>


      <div className={styles.middle2}>
        <div className={styles.left1}>
        <Reveal>
          <div className={styles.heading2}>Why Choose Us?</div>
          <div className={styles.text2}>By joining our Language Club, you'll have the opportunity to meet like-minded people, improve your language skills, and discover the cultural richness. Whether you're motivated by travel, literature, gastronomy, or simply the joy of learning, our club provides a friendly platform to explore your passions and broaden your horizons.</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/sanskrit (1).jpg'} width={800} height={800} alt="img"/>
          </div>
        </Reveal>

      </div>
      <div className={styles.middle}>
        <div className={styles.left1}>
        <Reveal>
        <div className={styles.heading2}>Join Us</div>
          <div className={styles.text2}>Whether you're a student, a professional, or a Sanskrit enthusiast, everyone is welcome at the Sanskrit Language Club. Join us today and become part of a dynamic and engaged community! <br/><br/>

For more information about our activities and upcoming events, feel free to explore our website or contact us directly. We look forward to welcoming you to our club and sharing our passion for the Sanskrit language with you!</div>
        </Reveal>
        </div>
        <Reveal>
          <div className={styles.right1}>
            <Image className={styles.img2} src={'/languageclub/sanskrit (2).jpg'} width={500} height={500} alt="img"/>
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
