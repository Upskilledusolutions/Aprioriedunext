import styles from "../../src/styles/Home/newsletter.module.css"
import Image from "next/image"
import Reveal from "../Reveal"

export default function Newsletter() {
  return (
    <div className={styles.container}>
    <div className={styles.tint}>
    <Reveal>
    <div className={styles.flex}>
      <div className={styles.topic}>SUBSCRIBE TO OUR NEWSLETTER</div>
      <div className={styles.text}>Receive the latest news & updates</div>
      <div className={styles.flex1}>
        <input className={styles.input} type="email" placeholder="E-mail"/>
        <button className={styles.button}>SEND</button>
      </div>
      </div>
      </Reveal>
    </div>
      <Image className={styles.img} src={"/assests/13.jpg"} width={2000} height={1200} alt="image"/>
    </div>

  )
}
