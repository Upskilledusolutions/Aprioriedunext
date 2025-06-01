import Head from 'next/head';
import styles from '../../styles/Games.module.css';
import Image from 'next/image';
import Reveal from '../../../components/Reveal';
import Link from 'next/link';
import { useState } from 'react';

const contests = [
  {
    id: 1,
    title: "Hyperglot Contest",
    date: "25 June 2025",
    image: "/content/hc.png",
    rules: [
      "Winner - iPAD M3 + French, Spanish, German scholarship worth 50k",
      "Next 10 rankings - French, Spanish, German scholarship worth 50k",
      "Next 20 rankings - French, Spanish, German scholarship worth 25k",
      "Winners will be announced on 25 June, 2025",
    ],
  },
];

const contestRulesText = [
  "i. The fee for each entry is 1000 INR (one thousand rupees) payable only through the payment gateway on the website.",
  "ii. There are 6 entries available per registration as follows: French A1, French A2, Spanish A1, Spanish A2, German A1, and German A2. The fee mentioned above is for a single entry. Participants can avail of up to 6 entries with an additional payment of 1000 INR per additional entry.",
  "iii. The contest will be till 12 PM, 25 June 2025 and the winners will be announced on or before 30 June, 2025.",
  "iv. In case there is a tie for the top spot, a tie-breaker will be conducted online through zoom and the judge's decision will be final in this matter.",
  "v. The iPAD will be sent to a verified address after we receive a confirmation of the receipt of the certificate for the winners.",
  "vi. The winners of the contest will be mentioned on social media and they will be required to provide identification and other necessary details. Failure to do so will automatically disqualify them from receiving the prizes.",
  "vii. No refunds will be issued for any reason whatsoever.",
  "viii. The contest is open to participants from all across the world but the Winner will be the highest ranking contestant (through a tie breaker, if required) from residents of India only."
];

const ContestsPage = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Head>
        <title>Contests</title>
        <meta name="description" content="Explore our latest language contests and competitions" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>

      <main className={styles.contestPage}>
        {/* Banner Section */}
        <section className={styles.bannerSection}>
          <Reveal>
            <Image
              src="/content/games.png"
              alt="Upcoming Contests"
              width={1200}
              height={400}
              className={styles.bannerImage}
            />
            <div className={styles.bannerText}>
              <h1>Exciting Contests Ahead!</h1>
              <p>Join our upcoming competitions and show your language skills to the world.</p>
            </div>
          </Reveal>
        </section>

        {/* Contest Grid */}
        <section className={styles.gridSection}>
          <Reveal>
            <h2 className={styles.sectionHeading}>Current & Upcoming Contests</h2>
            <div className={styles.gridContainer}>
              {contests.map((contest) => (
                <div className={styles.cardContainer} key={contest.id}>
                <Link href={`/games/SinglePage/${contest.id}`} className={styles.card}>
                  <Image
                    src={contest.image}
                    width={400}
                    height={250}
                    className={styles.cardImage}
                    alt={contest.title}
                  />
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{contest.title}</h3>
                    <p className={styles.cardDate}>📅 {contest.date}</p>
                    <h4>Contest Details</h4>
                    <ul className={styles.rulesList}>
                      {contest.rules.map((rule, index) => (
                        <li key={index} className={styles.ruleItem}>
                          ✅ {rule}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Link>
                          <button
            className={styles.rulesButton}
            onClick={() => setShowModal(true)}
            aria-label="Show Contest Rules"
          >
            Contest Rules
          </button>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
        {/* Modal */}
        {showModal && (
          <div className={styles.modalBackdrop} onClick={() => setShowModal(false)}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside modal
              role="dialog"
              aria-modal="true"
              aria-labelledby="modalTitle"
            >
              <h2 id="modalTitle">Contest Rules</h2>
              <ul className={styles.modalRulesList}>
                {contestRulesText.map((rule, i) => (
                  <li key={i} className={styles.modalRuleItem}>{rule}</li>
                ))}
              </ul>
              <button
                className={styles.closeButton}
                onClick={() => setShowModal(false)}
                aria-label="Close Contest Rules"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default ContestsPage;
