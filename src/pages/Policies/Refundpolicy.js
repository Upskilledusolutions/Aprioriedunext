import React from "react";
import styles from "../../styles/TermsAndConditions.module.css";

const RefundPolicy = () => {
  return (
    <div className={styles.background}>
    <div className={styles.container}>
      <h1 className={styles.title}>Refund Policy</h1>
      {/* <p className={styles.intro}>
        Thank you for choosing Upskilledu Solutions. We value your satisfaction and aim to provide the best learning experience. Please review our refund policy below.
      </p> */}

      <section className={styles.section}>
        <h2 className={styles.heading}>NO REFUNDS POLICY</h2>
        <p className={styles.text}>
        We do <strong>NOT ISSUE REFUNDS</strong> since clients and visitors are allowed to avail of a <strong>FREE TRIAL</strong> before making the payment.
        </p>
      </section>
     
      <footer className={styles.footer}>
        <p className={styles.footerText}>
          For further assistance, feel free to contact us at <a href="mailto:info@upskilleduonline.com">info@upskilleduonline.com</a>.
        </p>
      </footer>
    </div>
    </div>
  );
};

export default RefundPolicy;
