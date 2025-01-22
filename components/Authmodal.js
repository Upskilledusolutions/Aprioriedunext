import React from 'react';
import styles from '../src/styles/authmodal.module.css';
import Link from 'next/link';

const Authmodal = ({ hideAuthmodal, showpaymodel }) => {
  function openmem(){
    hideAuthmodal()
    showpaymodel()
  }
  return (
    <div className={styles.modalOverlay} onClick={hideAuthmodal}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Welcome!</h2>
          <p className={styles.subtitle}>
            Login with your credentials to unlock premium features and exclusive content.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.btnflex}>
            <Link href={'/Auth'} className={styles.actionButton} onClick={hideAuthmodal}>
              Login
            </Link>
            <button className={styles.closeButton} onClick={hideAuthmodal}>
              Close
            </button>
          </div>
          {/* <div className={styles.memberSection}>
            <p className={styles.memberText}>Not a member yet?</p>
            <div className={styles.memButton} onClick={openmem}>
              Become a Member
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Authmodal;
