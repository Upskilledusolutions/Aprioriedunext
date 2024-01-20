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
            <Image className={styles.img} src={"/assests/1.jpg"} width={400} height={400} alt="image"/>
          </div>
          <div className={styles.topic}>May 12, 2022</div>
          <div className={styles.text}>7 Reasons to study in class rather then study alone</div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={"/assests/1.jpg"} width={400} height={400} alt="image"/>
          </div>
          <div className={styles.topic}>May 12, 2022</div>
          <div className={styles.text}>7 Reasons to study in class rather then study alone</div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.card}>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={"/assests/1.jpg"} width={400} height={400} alt="image"/>
          </div>
          <div className={styles.topic}>May 12, 2022</div>
          <div className={styles.text}>7 Reasons to study in class rather then study alone</div>
        </div>
      </Reveal>
      </div>
      </Reveal>
    </div>
  )
}
