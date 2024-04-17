import Link from 'next/link'
import React from 'react'
import styles from "../../styles/quiz/quizpage.module.css"

export default function index() {
  return (
    <div className={styles.container}>
      <div className={styles.mainheading}>Quiz Time</div>

      <div className={styles.maintext}>Welcome to Quiz Time, the ultimate destination for testing and enhancing your language skills! Dive into our engaging quizzes designed to challenge and inspire learners of all levels. Whether you're brushing up on vocabulary, testing your grammar knowledge, or exploring cultural trivia, we've got something for everyone. With a diverse range of topics and interactive formats, our quizzes are the perfect way to reinforce what you've learned and discover new insights along the way. So, get ready to put your language skills to the test and embark on a fun-filled journey of discovery with Quiz Time!</div>

    <div className={styles.cards}>

      <div className={styles.card}>
        <div className={styles.cardheading}>French Quiz</div>
        <div className={styles.cardtext}>Get ready to put your French skills to the test with our exciting range of quizzes.</div>
        <Link href='/QuizTime/FrenchQuiz' className={styles.btn}>Start Quiz</Link>
      </div>

      <div className={styles.card}>
        <div className={styles.cardheading}>Spanish Quiz</div>
        <div className={styles.cardtext}>Get ready to put your Spanish skills to the test with our exciting range of quizzes.</div>
        <Link href='/QuizTime/SpanishQuiz' className={styles.btn}>Start Quiz</Link>
      </div>

      <div className={styles.card}>
        <div className={styles.cardheading}>German Quiz</div>
        <div className={styles.cardtext}>Get ready to put your German skills to the test with our exciting range of quizzes.</div>
        <Link href='/QuizTime/GermanQuiz' className={styles.btn}>Start Quiz</Link>
      </div>

      <div className={styles.card}>
        <div className={styles.cardheading}>Italian Quiz</div>
        <div className={styles.cardtext}>Get ready to put your Italian skills to the test with our exciting range of quizzes.</div>
        <Link href='/QuizTime/ItalianQuiz' className={styles.btn}>Start Quiz</Link>
      </div>

      <div className={styles.card}>
        <div className={styles.cardheading}>Sanskrit Quiz</div>
        <div className={styles.cardtext}>Get ready to put your Sanskrit skills to the test with our exciting range of quizzes.</div>
        <Link href='/QuizTime/SanskritQuiz' className={styles.btn}>Start Quiz</Link>
      </div>

      </div>
    </div>
  )
}
