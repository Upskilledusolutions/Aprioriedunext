import styles from "../../src/styles/Home/fromsection.module.css"
import Image from "next/image"
import { FaUser } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { motion } from "framer-motion";
import Reveal from "../Reveal";

export default function Fromsection() {
  return (
    <div className={styles.container}>
    <Reveal>
      <div className={styles.courses}>
        <div className={styles.topsection}>
          <div className={styles.title}>ACTIVITIES WE OFFER</div>
          <button className={styles.btn1}>SEE ALL</button>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <Image className={styles.img} src={"/assests/1.jpg"} width={300} height={300} alt="image"/>
            <div className={styles.text}>
              <div className={styles.heading}>Reading Skills</div>
              <div>Lorem</div>
              <div>Lorem ipsum lorem</div>
            </div>
            <div className={styles.extratext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </div>
          </div>
          <div className={styles.card}>
            <Image className={styles.img} src={"/assests/2.jpg"} width={300} height={300} alt="image"/>
            <div className={styles.text}>
              <div className={styles.heading}>Writing Skills</div>
              <div>Lorem</div>
              <div>Lorem ipsum lorem</div>
            </div>
            <div className={styles.extratext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </div>
          </div>
          <div className={styles.card}>
            <Image className={styles.img} src={"/assests/3.jpg"} width={300} height={300} alt="image"/>
            <div className={styles.text}>
              <div className={styles.heading}>Speakimg Skills</div>
              <div>Lorem</div>
              <div>Lorem ipsum lorem</div>
            </div>
            <div className={styles.extratext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </div>
          </div>
          <div className={styles.card}>
            <Image className={styles.img} src={"/assests/4.jpg"} width={300} height={300} alt="image"/>
            <div className={styles.text}>
              <div className={styles.heading}>Vocab and Spelling</div>
              <div>Lorem</div>
              <div>Lorem ipsum lorem</div>
            </div>
            <div className={styles.extratext}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </div>
          </div>
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
        <div className={styles.lastcont}>
          <Image className={styles.lastimg} src={"/assests/6.jpg"} width={600} height={600} alt="image"/>
          <div className={styles.lasttext}>
            <div className={styles.title1}>LOTS OF HAPPY STUDENTS</div>
            <div className={styles.text1}>We have over hundreds of students and counting...</div>
          </div>
        </div>

      </motion.div>
    </div>
  )
}
