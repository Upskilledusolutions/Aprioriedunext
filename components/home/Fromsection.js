import styles from "../../src/styles/Home/fromsection.module.css"
import Image from "next/image"
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import Link from "next/link";

export default function Fromsection() {
  return (
    <div className={styles.container}>
    <Reveal>
      <div className={styles.courses}>
        <div className={styles.topsection}>
          <div className={styles.title}>ACTIVITIES WE OFFER</div>
          {/* <button className={styles.btn1}>SEE ALL</button> */}
        </div>
        <div className={styles.cards}>
        <Link href='/ReadingSkills'>
          <div className={styles.card}>
            <Image className={styles.img} src={"/content/reading.jpg"} width={300} height={300} alt="image"/>
            <div className={styles.text}>
              <div className={styles.heading}>Reading Club</div>
              <div className={styles.headingtext}>Read, understand, interpret, and evaluate written texts.</div>
            </div>
            <div className={styles.extratext}>
                Read a variety of texts that match your level and interest
            </div>
          </div>    
        </Link>
        <Link href='/LanguageClub'>
          <div className={styles.card}>
              <Image className={styles.img} src={"/content/25 (1).jpg"} width={300} height={300} alt="image"/>
              <div className={styles.text}>
                <div className={styles.heading}>Language Club</div>
                <div className={styles.headingtext}>learn, practice, and enjoy different languages with other enthusiasts.</div>
              </div>
              <div className={styles.extratext}>
                Practice speaking and writing different languages with others.
              </div>
            </div>
        </Link>
        <Link href='/WritingSkills'>
          <div className={styles.card}>
            <Image className={styles.img} src={"/content/writing.jpeg"} width={300} height={300} alt="image"/>
            <div className={styles.text}>
              <div className={styles.heading}>Writing Club</div>
              <div className={styles.headingtext}>Enable your Writing skills to create clear and effective written communication.</div>
            </div>
            <div className={styles.extratext}>
              Practice writing different types of texts for different purposes and audiences.
            </div>
          </div>
        </Link>
        <Link href='/Olympiad'>
          <div className={styles.card}>
              <Image className={styles.img} src={"/content/25 (2).jpg"} width={300} height={300} alt="image"/>
              <div className={styles.text}>
                <div className={styles.heading}>Olympiad</div>
                <div className={styles.headingtext}>Train for mathematics, science, english.</div>
              </div>
              <div className={styles.extratext}>
                follow the syllabus and pattern of the leading olympiad organizers
              </div>
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
      <motion.div
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
        {/* <div className={styles.lastcont}>
          <Image className={styles.lastimg} src={"/assests/8.jpg"} width={600} height={600} alt="image"/>
          <div className={styles.lasttext}>
            <div className={styles.title1}>LOTS OF HAPPY MEMBERS</div>
            <div className={styles.text1}>Many people has joined us and many will, be a part of them...</div>
          </div>
        </div> */}

      </motion.div>
    </div>
  )
}
