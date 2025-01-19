import React from 'react';
import styles from '../src/styles/authmodal.module.css';
import Link from 'next/link';

const Authmodal = ({ hideAuthmodal }) => {
  return (
    <div className={styles.modalOverlay} onClick={hideAuthmodal}>
      <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
        <h2>Authentication</h2>
        <p>Login with your credentials to access members' features.</p>
        <div className={styles.btnflex}>
        <Link href={'/Auth'} className={styles.loginButton} onClick={hideAuthmodal}>Login</Link>
        <button className={styles.closeButton} onClick={hideAuthmodal}>Close</button>
        </div>
        {/* <div className={styles.memcont}>
            <Link href={'/BecomeMember'} className={styles.memButton} onClick={hideAuthmodal}>Become a Member</Link>
        </div> */}
        
      </div>
    </div>
  );
};

export default Authmodal;
