import React, { useState } from 'react';
import styles from '../src/styles/Paymentmodal.module.css';
import Link from 'next/link';

const Authmodal = ({ hidepaymodal }) => {
  const [showTrialModal, setShowTrialModal] = useState(false);

  const openTrialModal = () => setShowTrialModal(true);
  const closeTrialModal = () => setShowTrialModal(false);

  function end(){
    closeTrialModal()
    hidepaymodal()
  }

  return (
    <>
      {/* Main Payment Modal */}
      <div className={styles.modalOverlay} onClick={hidepaymodal}>
        <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <h2 className={styles.title}>Join Us Today!</h2>
            <p className={styles.subtitle}>Unlock exclusive benefits and start your journey.</p>
          </div>
          <div className={styles.content}>
            <p className={styles.description}>
              By becoming a member, you gain access to premium features, expert content, and a community of like-minded individuals. Not ready yet? Start with our free trial!
            </p>
            <div className={styles.btnflex}>
              <div className={styles.actionButton} onClick={openTrialModal}>
                Become a Member
              </div>
              <Link href={'/Payment/Free'} className={styles.actionButton} onClick={hidepaymodal}>
                Start Free Trial
              </Link>
            </div>
          </div>
          <div className={styles.footer}>
            <p>Have questions? <Link href={"/ContactUs"} onClick={hidepaymodal} className={styles.contactLink}>Contact Us</Link></p>
          </div>
        </div>
      </div>

      {/* Free Trial Confirmation Modal */}
      {showTrialModal && (
        <div className={styles.modalOverlay} onClick={closeTrialModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.header}>
              <h2 className={styles.title}>Become a Member</h2>
            </div>
            <div className={styles.content}>
              <p className={styles.description}>Have you availed on our free trial?</p>
              <div className={styles.btnflex}>
                <Link href={'/Payment/Pay'} className={styles.actionButton} onClick={end}>
                  Yes
                </Link>
                <Link href={'/Payment/FullPay'} className={styles.actionButton} onClick={end}>
                  No
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Authmodal;
