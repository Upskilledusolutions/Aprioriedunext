import styles from "../../src/styles/Home/events.module.css"
import Image from "next/image"
import Reveal from "../Reveal"
import Link from "next/link";

export default function Events() {

  const data = [
    {
      id: 1,
      title: "Readers' Salon",
      date: "Sat, 26th Nov 2023 ",
      url: "/events/Podcast Insta.jpg",
    },
    {
      id: 2,
      title: "Halloween Party",
      date: "31st Oct 2023",
      url: "/events/October 31,2023.jpg",
    },
    {
      id: 3,
      title: "Young Poet Award 2023",
      date: "TBD",
      url: "/events/YoungPoetAward.png",
    },
  ];

  return (
    <div className={styles.container}>
      <Reveal>
      <div className={styles.title}>Events</div>
      <div className={styles.cards}>
      {data.map((data) => (
        <Reveal>
        <Link href={`/Event/${data.id}`} className={styles.card}>
          <div className={styles.imgcontainer}>
            <Image className={styles.img} src={data.url} width={400} height={400} alt="image"/>
          </div>
          <div className={styles.topic}>Date - {data.date}</div>
          <div className={styles.text}>{data.title}</div>
        </Link>
      </Reveal>
      ))}
      {/* <Reveal>
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
      </Reveal> */}
      </div>
      </Reveal>
    </div>
  )
}
