import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux'; // To access authentication status from Redux
import styles from "../../styles/quiz/quizpage.module.css";
import { FaLock } from 'react-icons/fa';

export default function Index() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  // Function to determine if a card should be locked
  const isCardLocked = (cardType) => {
    return user?.type !== 'all' && user?.type !== cardType;
  };

  // Array of card information with type, heading, and text
  const cards = [
    {
      type: 'english',
      heading: 'English Beginner (A1-A2)',
      text: 'Master the language of art, culture, and diplomacy with our English Listening Assignments.',
      link: '/ListeningAssignments/EnglishListening',
    },
    {
      type: 'englishb1',
      heading: 'English Beginner (B1-B2)',
      text: 'Master the language of art, culture, and diplomacy with our English Listening Assignments.',
      link: '/ListeningAssignments/EnglishListeningB1',
    },
    {
      type: 'french',
      heading: 'French Beginner (A1-A2)',
      text: 'Master the language of art, culture, and diplomacy with our French Listening Assignments.',
      link: '/ListeningAssignments/FrenchListening',
    },
    {
      type: 'spanish',
      heading: 'Spanish Beginner (A1-A2)',
      text: 'Master the language of art, culture, and diplomacy with our Spanish Listening Assignments.',
      link: '/ListeningAssignments/SpanishListening',
    },
    {
      type: 'german',
      heading: 'German Beginner (A1-A2)',
      text: 'Master the language of art, culture, and diplomacy with our German Listening Assignments.',
      link: '/ListeningAssignments/GermanListening',
    },
  ];

  // Sort the cards so that unlocked cards come first
  const sortedCards = cards.sort((a, b) => {
    // If card A is unlocked and card B is locked, A comes first
    if (!isCardLocked(a.type) && isCardLocked(b.type)) {
      return -1;
    }
    // If card A is locked and card B is unlocked, B comes first
    if (isCardLocked(a.type) && !isCardLocked(b.type)) {
      return 1;
    }
    // Keep the default order if both are locked or both are unlocked
    return 0;
  });

  return (
    <>
      <Head>
        <title>Listening Assignments</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.headcont}>
            <div className={styles.mainheading}>Listening Assignments</div>
          </div>

          <div className={styles.maintext}>
            Explore the beauty of new cultures by mastering Spanish, French, or German through our engaging lessons. Whether you're a beginner or looking to perfect your fluency, our language courses are designed to guide you at every step.
          </div>

          <div className={styles.cards}>
            {sortedCards.map((card) => (
              <div
                key={card.type}
                className={`${styles.card} ${isCardLocked(card.type) ? styles.locked : ''}`}
              >
                <div className={styles.cardheading}>{card.heading}</div>
                <div className={styles.cardtext}>{card.text}</div>
                {!isCardLocked(card.type) ? (
                  <Link href={card.link} className={styles.btn}>
                    Start Learning
                  </Link>
                ) : (
                  <div className={styles.lockedText}><FaLock className={styles.lock} />Locked</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}