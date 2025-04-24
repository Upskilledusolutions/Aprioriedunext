import React from "react";
import styles from "@/styles/Home/gamified.module.css";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Gamified() {
  return (
    <div className={styles.container}>
      {/* Section 3: Interactive Challenges */}
      <div className={`${styles.section} ${styles.sectionThree}`}>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Learn Faster With Interactive Language Challenges</h2>
          <p>
            Take your learning to the next level with interactive challenges.
            Compete with friends, improve your skills, and make learning
            exciting and competitive. Whether it's vocabulary, grammar, or
            pronunciation, we've got you covered.
          </p>
          <div className={styles.challengeGrid}>
            <div className={styles.challengeCard}>
              <h3>Vocabulary Builder</h3>
              <p>Expand your vocabulary with fun word games and quizzes.</p>
            </div>
            <div className={styles.challengeCard}>
              <h3>Grammar Mastery</h3>
              <p>Master grammar rules through interactive exercises.</p>
            </div>
            <div className={styles.challengeCard}>
              <h3>Pronunciation Practice</h3>
              <p>Perfect your pronunciation with AI-powered feedback.</p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/illustrations/7.png"
            alt="Interactive Challenges"
            width={600}
            height={400}
            className={styles.img1}
          />
        </motion.div>
      </div>

      <div className={`${styles.section} ${styles.sectionFour}`}>
        <motion.div
          className={styles.text1}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Keep Track of Your Progress From Anywhere</h2>
          <p>
            Stay motivated by tracking your progress in real-time. Monitor your
            points, completed exercises, and lessons as you advance through your
            language learning journey. Our platform is fully responsive, allowing you to learn and track your progress seamlessly on any device—whether it's a mobile phone,
            tablet, laptop, or desktop computer.
          </p>
          <ul className={styles.progressPoints}>
            <li>
              <div className={styles.imgcon}>
                <Image
                  src="/illustrations/ap2.jpeg"
                  alt="Interactive Challenges"
                  width={600}
                  height={400}
                  className={styles.img5}
                />
              </div>
              Earn points for every completed exercise
              <br />
              and challenge.
            </li>
            <li>
            <div className={styles.imgcon}>
              <Image
                src="/illustrations/ap1.jpeg"
                alt="Interactive Challenges"
                width={600}
                height={400}
                className={styles.img5}
              />
              </div>
              Track your daily, weekly, and monthly progress with detailed
              stats.
            </li>
            <li>
            <div className={styles.imgcon}>
              <Image
                src="/illustrations/ap4.jpeg"
                alt="Interactive Challenges"
                width={600}
                height={400}
                className={styles.img5}
              />
              </div>
              View your achievements and milestones
              <br />
              to stay motivated.
            </li>
            <li>
            <div className={styles.imgcon}>
              <Image
                src="/illustrations/ap3.png"
                alt="Interactive Challenges"
                width={600}
                height={400}
                className={styles.img5}
              />
              </div>
              Access your progress dashboard
              <br />
              anytime, anywhere.
            </li>
          </ul>
        </motion.div>
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        ></motion.div>
      </div>

      {/* Section 2: Revolutionizing Language Learning */}
      <div className={`${styles.section} ${styles.sectionTwo}`}>
        <motion.div
          className={styles.image}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/illustrations/8.png"
            alt="Revolutionizing Learning"
            width={600}
            height={400}
            className={styles.img}
          />
        </motion.div>
        <motion.div
          className={styles.text}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Revolutionizing Language Learning Through Gamification</h2>
          <p>
            Our platform combines cutting-edge technology with proven teaching
            methods. Immerse yourself in interactive lessons, track your
            progress, and master new languages with ease. It's time to transform
            the way you learn.
          </p>
          <ul className={styles.features}>
            <li>Interactive lessons with real-time feedback</li>
            <li>Progress tracking and personalized goals</li>
            <li>Rewards and achievements for motivation</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
