import React from "react";
import styles from "../../styles/TermsAndConditions.module.css";

const TermsAndConditions = () => {
  return (
    <div className={styles.background}>
    <div className={styles.container}>
      <h1 className={styles.title}>Terms and Conditions</h1>

      <section className={styles.section}>
        <h2 className={styles.heading}>Introduction</h2>
        <p className={styles.text}>
          Welcome to <strong>Upskilledu Solutions LLP</strong>, an Ed Tech platform offering language courses in Asian and European languages. By accessing or using our website, you agree to comply with and be bound by the following terms and conditions.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>User Accounts</h2>
        <ul className={styles.list}>
          <li>
            <strong>Registration</strong>: To access certain features, you must create an account. You are responsible for maintaining the confidentiality of your account information.
          </li>
          <li>
            <strong>Eligibility</strong>: You must be at least 18 years old or have parental consent to use this platform.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Course Enrollment</h2>
        <ul className={styles.list}>
          <li>
            <strong>Access</strong>: Upon enrollment, you gain access to the course materials for a specified duration.
          </li>
          <li>
            <strong>Usage</strong>: Course materials are for personal use only and cannot be shared or redistributed.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Payment Terms</h2>
        <ul className={styles.list}>
          <li>
            <strong>Fees</strong>: All course fees must be paid in full at the time of enrollment.
          </li>
          <li>
            <strong>Payment Gateway</strong>: We use secure payment gateways. By providing your payment information, you authorize us to charge the applicable fees.
          </li>
          <li>
            <strong>NO REFUNDS POLICY</strong>: We do NOT ISSUE REFUNDS since clients and visitors are allowed to avail of a FREE TRIAL before making the payment.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Intellectual Property</h2>
        <ul className={styles.list}>
          <li>
            <strong>Content Ownership</strong>: All content provided is owned by <strong>Upskilledu Solutions LLP</strong> or its licensors and is protected by intellectual property laws.
          </li>
          <li>
            <strong>Restrictions</strong>: You may not copy, modify, or distribute any content without permission.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>User Conduct</h2>
        <ul className={styles.list}>
          <li>
            <strong>Prohibited Activities</strong>: Users must not engage in fraudulent, abusive, or unlawful activities.
          </li>
          <li>
            <strong>Termination</strong>: We reserve the right to suspend or terminate accounts that violate these terms.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Privacy</h2>
        <ul className={styles.list}>
          <li>
            <strong>Data Collection</strong>: We collect and use personal information in accordance with our Privacy Policy.
          </li>
          <li>
            <strong>Third-party Services</strong>: Our website may contain links to third-party services, which are governed by their own terms.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Disclaimers</h2>
        <ul className={styles.list}>
          <li>
            <strong>No Warranty</strong>: Our services are provided "as is" without warranties of any kind.
          </li>
          <li>
            <strong>Limitation of Liability</strong>: <strong>Upskilledu Solutions LLP</strong> is not liable for any indirect, incidental, or consequential damages.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Changes to Terms</h2>
        <p className={styles.text}>
          We may update these terms from time to time. Any changes will be posted on our website, and your continued use of the service constitutes acceptance of those changes.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Governing Law</h2>
        <p className={styles.text}>
          These terms are governed by the laws of <strong>Delhi</strong>. Any disputes will be subject to the exclusive jurisdiction of the courts in <strong>Delhi</strong>.
        </p>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          For any questions about these Terms and Conditions, please contact us at <a href="mailto:info@upskilleduonline.com">info@upskilleduonline.com</a>.
        </p>
      </footer>
    </div>
    </div>
  );
};

export default TermsAndConditions;
