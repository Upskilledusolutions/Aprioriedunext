import styles from '../../styles/Languageclub/languageclub.module.css'
import Image from 'next/image'
import Reveal from '../../../components/Reveal'

const index = () => {
  return (
    <div>      
      <div className={styles.topcontainer}>
        <div className={styles.tint}/>
        <Image className={styles.img} src={'/content/25.jpg'} width={2400} height={1400} alt="img"/>
          <div className={styles.textcontainer}>
          <Reveal>
            <div className={styles.heading1}>Events</div>
          </Reveal>
          <Reveal>
            <div className={styles.text1}>Our events are designed to enhance the learning experience and outcomes of our learners and educators, as well as to provide them with opportunities to network, collaborate, and grow.</div>
          </Reveal>
          </div>
      </div>
      <div className={styles.eventscards}>
      <Reveal>
        <div className={styles.eventcard}>
          <div className={styles.eventcardimgcontainer}>
            <Image className={styles.eventcardimg} src={"/events/Podcast Insta.jpg"} width={400} height={400} alt="image"/>
          </div>
          <div className={styles.eventtopic}>Date - Sat, 26th Nov 2023</div>
          <div className={styles.eventtext}>Readers' Salon</div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.eventcard}>
          <div className={styles.eventcardimgcontainer}>
            <Image className={styles.eventcardimg} src={"/events/October 31,2023.jpg"} width={400} height={400} alt="image"/>
          </div>
          <div className={styles.eventtopic}>Date - 31st oct 2023</div>
          <div className={styles.eventtext}>Halloween Party</div>
        </div>
      </Reveal>
      <Reveal>
        <div className={styles.eventcard}>
          <div className={styles.eventcardimgcontainer}>
            <Image className={styles.eventcardimg} src={"/events/YoungPoetAward.png"} width={400} height={400} alt="image"/>
          </div>
          <div className={styles.eventtopic}>Date - TBD</div>
          <div className={styles.eventtext}>Young Poet Award</div>
        </div>
      </Reveal>
        {/* <div className={styles.eventscard}>
          <div className={styles.img10container}>
            <Image className={styles.img10} src={'/events/Podcast Insta.jpg'} width={400} height={500} alt="img"/>
          </div>
          <div>
            <div className={styles.eventtitle}>Readers' Salon</div>
            <div className={styles.eventdate}>Date - Sat, 26th Nov 2023</div>
          </div>
        </div>
        <div className={styles.eventscard}>
          <div className={styles.img10container}>
            <Image className={styles.img10} src={'/events/October 31,2023.jpg'} width={400} height={500} alt="img"/>
          </div>
          <div>
            <div className={styles.eventtitle}>Halloween Party</div>
            <div className={styles.eventdate}>Date - 31st oct 2023</div>
          </div>
        </div>
        <div className={styles.eventscard}>
          <div className={styles.img10container}>
            <Image className={styles.img10} src={'/events/YoungPoetAward.png'} width={400} height={500} alt="img"/>
          </div>
          <div>
            <div className={styles.eventtitle}>Young Poet Award</div>
            <div className={styles.eventdate}>Date - TBD</div>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default index