import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import styles from '../../styles/Languageclub/languagenew.module.css'

export function getServerSideProps(context) {
  return {
    props: {params: context.params}
  };
}

const Event = ({params}) => {

  const {id} = params;

  const data = [
    {
      id: 1,
      title: "Spelling Bee",
      date: "12th April 2025",
      url: "/events/spellbee.jpeg",
      des: "The Spelling Bee event, held on April 12th, 2025, was an exhilarating competition that brought together language enthusiasts and aspiring wordsmiths. Participants from diverse age groups showcased their spelling prowess in a series of challenging rounds designed to test their vocabulary, memory, and composure under pressure. The event was a celebration of linguistic excellence, with contestants spelling increasingly complex words as the competition progressed. The audience was captivated by the participants' determination and quick thinking, cheering them on with every correct answer. The Spelling Bee not only highlighted the importance of language skills but also fostered a spirit of healthy competition and camaraderie among the participants. It was an unforgettable day filled with learning, excitement, and the joy of mastering the art of spelling."
    },
    {
      id: 2,
      title: "Readers' Salon",
      date: "Sat, 26th Nov 2023 ",
      url: "/events/Podcast Insta.jpg",
      des: "Readers' Salon, hosted by Dominic Biswas on Saturday, November 26th, 2023, was an engaging and intellectually stimulating gathering that brought together avid readers from diverse backgrounds to discuss their ever-growing to be read (TBR) lists. Held as an online meet was perfect for an evening of literary exploration. Attendees shared their TBR lists, revealing a fascinating array of genres, authors, and themes. From classic literature to contemporary fiction, from historical biographies to science fiction thrillers, the diversity of reading preferences showcased the rich tapestry of interests within the group. Dominic Biswas, the gracious host, expertly facilitated the discussion, encouraging guests to share their thoughts, recommendations, and personal anecdotes related to their chosen books. As conversations flowed and connections were forged, it became evident that while each reader had their own unique tastes and preferences, there was a shared passion for the written word that united everyone present. The Readers' Salon was not just a gathering of individuals; it was a celebration of literature, camaraderie, and the joy of discovering new books."
    },
    {
      id: 3,
      title: "Halloween Party",
      date: "31st Oct 2023",
      url: "/events/October 31,2023.jpg",
      des: "The Halloween event held on October 31st, 2023, by our book club was an unforgettable evening of spooky delights and literary revelry. Hosted by our enthusiastic book club members, the event brought together readers and book lovers in a celebration of all things eerie and enchanting. The venue was transformed into a hauntingly beautiful space, with dimly lit candles casting eerie shadows on the walls adorned with cobwebs and jack-o'-lanterns. Attendees arrived dressed in an array of creative costumes inspired by their favorite literary characters, adding an extra layer of excitement to the festivities. From Harry Potter wizards to Edgar Allan Poe's ravens, the diversity of costumes reflected the eclectic tastes and passions of our book club members. The party kicked off with a spine-tingling reading session, where members took turns sharing excerpts from their favorite horror and supernatural novels. The room was filled with nervous laughter and gasps of excitement as tales of ghosts, monsters, and haunted houses came to life through the power of storytelling. As the evening progressed, guests indulged in delicious themed snacks and beverages, while engaging in lively discussions about their favorite spooky reads."
    },
    {
      id: 4,
      title: "Young Poet Award 2023",
      date: "21st May 2023",
      url: "/events/YoungPoetAward1.jpg",
      des: "Get ready to unleash your inner wordsmith and shine on the poetic stage! Upskilledu is thrilled to announce the upcoming Young Poet Awards, a prestigious event dedicated to celebrating the talent and creativity of young poets from across the globe. While the dates for this exciting event are yet to be decided, we're already buzzing with anticipation for the poetic brilliance that awaits. Whether you're a seasoned poet or just beginning to explore the world of verse, the Young Poet Awards provide a unique opportunity to showcase your talent, connect with fellow poets, and gain recognition for your work. Open to poets of the age group, the Young Poet Awards welcome submissions in a variety of styles and themes, from heartfelt sonnets to powerful spoken word pieces. Whether you find inspiration in nature, love, social justice, or the human experience, there's a place for your voice in this vibrant community of young poets. Our esteemed panel of judges, comprised of renowned poets and literary experts, will evaluate each submission based on its originality, creativity, and emotional impact, with prizes awarded to the most outstanding entries."
    },
  ];

  const event = []
  data.map((data) => {if(data.id.toString() === id){
    event.push(data)
  }})

  return (
    <>
      <Head>
        <title>Events</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main>
        <div className={styles.container}>
        <div className={styles.flex}>
          <div>
            <Image className={styles.mainimg} src={event[0].url} width={600} height={600} alt="image"/>
          </div>
          <div>
            <div className={styles.title}>{event[0].title}</div>
            <div>{event[0].date}</div>
            <div className={styles.desc}>{event[0].des}</div>
          </div>
        </div>

        </div>
      </main>
    </>
  )
}

export default Event
