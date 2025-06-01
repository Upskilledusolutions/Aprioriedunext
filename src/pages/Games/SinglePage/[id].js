import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import styles from './singlepage.module.css';
import Link from 'next/link';
import { useState } from 'react';
import { useSelector } from 'react-redux';

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

const SingleContestPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const { user } = useSelector((state) => state.auth);
  const [showModal, setShowModal] = useState(false);

  const contest = contests.find((item) => item.id === parseInt(id));

  if (!contest) return <p>Loading...</p>;

  return (
    <>
      <Head>
        <title>{contest.title}</title>
        <meta name="description" content={contest.description} />
        <link rel="icon" href="/logo/newlogo1.png" />
      </Head>

      <main className={styles.singlePage}>
        <div className={styles.singleContainer}>
          {/* Left Image */}
          <div className={styles.imageSection}>
            <Image
              src={contest.image}
              alt={contest.title}
              width={500}
              height={400}
              className={styles.singleImage}
            />
          </div>

          {/* Right Content */}
          <div className={styles.contentSection}>
            <h1 className={styles.singleTitle}>{contest.title}</h1>
            <p className={styles.singleDate}>📅 {contest.date}</p>
            <h3>Contest Deatils</h3>
            <ul className={styles.rulesList}>
              {contest.rules.map((rule, index) => (
                <li key={index} className={styles.ruleItem}>
                  ✅ {rule}
                </li>
              ))}
            </ul>
            <Link href={'/Payment/ContestPay'}>
            <button className={styles.registerButton}>Register Now</button>
            </Link>
            <button className={styles.rulesButton} onClick={() => setShowModal(true)} aria-label="Show Contest Rules" >Contest Rules</button>
            {!user?.name && <Link href={'/Auth'}>
            <button className={styles.registerButton}>Login</button>
            </Link>}
          </div>
        </div>
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

export default SingleContestPage;
