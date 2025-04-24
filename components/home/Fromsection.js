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
          {/* <button className={styles.btn1}>SEE ALL</button> */}
        </div>
        <div className={styles.cards}>
        <Link className={styles.text2} href='/ReadingSkills'>
          <div className={styles.card1}>
            <Image className={styles.img1} src={"/content/reading.jpg"} width={300} height={300} alt="image"/>
            <div className={styles.text3}>
              <div className={styles.heading1}>Reading Club</div>
              <div className={styles.headingtext1}>Read, understand, interpret, and evaluate written texts.</div>
            </div>
            {/* <div className={styles.extratext}>
                Read a variety of texts that match your level and interest
            </div> */}
          </div>    
        </Link>
        <Link className={styles.text2} href='/LanguageClub'>
          <div className={styles.card1}>
              <Image className={styles.img1} src={"/content/25 (1).jpg"} width={300} height={300} alt="image"/>
              <div className={styles.text3}>
                <div className={styles.heading1}>Language Club</div>
                <div className={styles.headingtext1}>learn, practice, and enjoy different languages with other enthusiasts.</div>
              </div>
              {/* <div className={styles.extratext}>
                Practice speaking and writing different languages with others.
              </div> */}
            </div>
        </Link>
        <Link className={styles.text2} href='/WritingSkills'>
          <div className={styles.card1}>
            <Image className={styles.img1} src={"/content/writing.jpeg"} width={300} height={300} alt="image"/>
            <div className={styles.text3}>
              <div className={styles.heading1}>Writing Club</div>
              <div className={styles.headingtext1}>Enable your Writing skills to create clear and effective written communication.</div>
            </div>
            {/* <div className={styles.extratext}>
              Practice writing different types of texts for different purposes and audiences.
            </div> */}
          </div>
        </Link>
        <Link className={styles.text2} href='/Olympiad'>
          <div className={styles.card1}>
              <Image className={styles.img1} src={"/content/25 (2).jpg"} width={300} height={300} alt="image"/>
              <div className={styles.text3}>
                <div className={styles.heading1}>Olympiad</div>
                <div className={styles.headingtext1}>Train for mathematics, science, english.</div>
              </div>
              {/* <div className={styles.extratext}>
                follow the syllabus and pattern of the leading olympiad organizers
              </div> */}
            </div>
        </Link>
          {/* <div className={styles.card}>
            <Image className={styles.img} src={"/assests/3.jpg"} width={300} height={300} alt="image"/>
            <div className={styles.text}>
              <div className={styles.heading}>Speakimg Skills</div>
              <div>Improve your pronunciation and fluency.</div>
            </div>
            <div className={styles.extratext}>
              Speak English as much as possible with native or fluent speakers
            </div>
          </div>
          <div className={styles.card}>
            <Image className={styles.img} src={"/assests/4.jpg"} width={300} height={300} alt="image"/>
            <div className={styles.text}>
              <div className={styles.heading}>Vocab and Spelling</div>
              <div>Review and memorize to improve</div>
            </div>
            <div className={styles.extratext}>
              Learn new words in context and use them in sentences.
            </div>
          </div> */}
        </div>

      </div>
      </Reveal>
      {/* <motion.div
        initial={{ opacity: 0, y: 100,}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
       className={styles.formsection}>
        <form className={styles.formcont}>
          <div className={styles.formtitle}>BOOK A FREE TRIAL CLASS</div>
          <div className={styles.inputcont}><FaUser /><input className={styles.input} type="text" placeholder="Name"/></div>
          <div className={styles.inputcont}><FaPhoneAlt /><input className={styles.input} type="text" placeholder="Phone"/></div>
          <div className={styles.inputcont}><IoIosMail /><input className={styles.input} type="text" placeholder="E-mail"/></div>
          <button className={styles.btn}>BOOK NOW</button>
        </form>
      </motion.div> */}
    </div>
  )
}
