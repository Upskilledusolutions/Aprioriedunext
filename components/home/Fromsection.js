import styles from "../../src/styles/Home/fromsection.module.css"
import Image from "next/image"
import Reveal from "../Reveal";
import Link from "next/link";

export default function Fromsection() {
  return (
    <div className={styles.container} id="activities">
    <Reveal>
      <div className={styles.courses}>
        <div className={styles.topsection}>
          <div className={styles.titlecont}><h2 className={styles.title}>OUR COURSES</h2></div>
        </div>
        <div className={styles.cards}>
        <Link className={styles.text2} href='/ReadingSkills'>
          <div className={styles.card1}>
            <Image className={styles.img1} src={"/content/reading.jpg"} width={300} height={300} alt="image"/>
            <div className={styles.text3}>
              <div className={styles.heading1}>Reading Club</div>
              <div className={styles.headingtext1}>Read, understand, interpret, and evaluate written texts.</div>
            </div>
          </div>
        </Link>
        <Link className={styles.text2} href='/LanguageClub'>
          <div className={styles.card1}>
              <Image className={styles.img1} src={"/content/25 (1).jpg"} width={300} height={300} alt="image"/>
              <div className={styles.text3}>
                <div className={styles.heading1}>Language Club</div>
                <div className={styles.headingtext1}>Learn, practice, and enjoy different languages with other enthusiasts.</div>
              </div>
            </div>
        </Link>
        <Link className={styles.text2} href='/WritingSkills'>
          <div className={styles.card1}>
            <Image className={styles.img1} src={"/content/writing.jpeg"} width={300} height={300} alt="image"/>
            <div className={styles.text3}>
              <div className={styles.heading1}>Writing Club</div>
              <div className={styles.headingtext1}>Enable your Writing skills to create clear and effective written communication.</div>
            </div>
          </div>
        </Link>
        <Link className={styles.text2} href='/Reasoning'>
          <div className={styles.card1}>
              <Image className={styles.img1} src={"/content/25 (2).jpg"} width={300} height={300} alt="image"/>
              <div className={styles.text3}>
                <div className={styles.heading1}>Reasoning</div>
                <div className={styles.headingtext1}>Build quantitative and verbal reasoning skills for deeper academic thinking.</div>
              </div>
            </div>
        </Link>
        </div>
      </div>
      </Reveal>
    </div>
  )
}
