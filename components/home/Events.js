import styles from "../../src/styles/Home/events.module.css"
import Image from "next/image"
import Reveal from "../Reveal"

export default function Events() {
  return (
    <div className={styles.container}>
      <Reveal>
      <div className={styles.title}>Events</div>
      <div className={styles.cards}>
      <Reveal>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={"/events/Podcast Insta.jpg"} width={400} height={400} alt="image"/>
          </div>
          <div className={styles.topic}>Sat, 26th Nov 2023</div>
          <div className={styles.text}>Readers' Salon</div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={"/events/October 31,2023.jpg"} width={400} height={400} alt="image"/>
          </div>
          <div className={styles.topic}>31st oct 2023</div>
          <div className={styles.text}>Halloween Party</div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={"/events/YoungPoetAward.png"} width={400} height={400} alt="image"/>
          </div>
          <div className={styles.topic}>TBD</div>
          <div className={styles.text}>Young Poet Award</div>
        </div>
      </Reveal>
      </div>
      </Reveal>
    </div>
  )
}
