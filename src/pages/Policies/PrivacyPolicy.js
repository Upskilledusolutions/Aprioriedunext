import React from "react";
import styles from "../../styles/TermsAndConditions.module.css";

const PrivacyPolicy = () => {
  return (
    <div className={styles.background}>
    <div className={styles.container}>
      <h1 className={styles.title}>Privacy Policy</h1>

      <section className={styles.section}>
        <h2 className={styles.heading}>Introduction</h2>
        <p className={styles.text}>
          At <strong>Upskilledu Solutions LLP</strong>, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you use our website.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Information We Collect</h2>
        <ul className={styles.list}>
          <li>
            <strong>Personal Information:</strong> When you register, we collect personal details such as your name, email address, and payment information.
          </li>
          <li>
            <strong>Usage Data:</strong> We gather data on how you interact with our courses and services.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>How We Use Your Information</h2>
        <ul className={styles.list}>
          <li>
            <strong>Service Delivery:</strong> To provide and improve our courses and customer support.
          </li>
          <li>
            <strong>Communication:</strong> To send updates, newsletters, and promotional materials (you can opt-out at any time).
          </li>
          <li>
            <strong>Analytics:</strong> To analyze usage patterns and enhance our offerings.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Data Sharing and Disclosure</h2>
        <ul className={styles.list}>
          <li>
            <strong>Service Providers:</strong> We may share information with third-party service providers for payment processing and technical support.
          </li>
          <li>
            <strong>Legal Compliance:</strong> We may disclose information if required by law or to protect our rights.
          </li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Data Security</h2>
        <p className={styles.text}>
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Cookies and Tracking Technologies</h2>
        <p className={styles.text}>
          Our website uses cookies to enhance user experience and analyze website traffic. You can manage your cookie preferences through your browser settings.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Third-party Links</h2>
        <p className={styles.text}>
          Our website may contain links to other sites. We are not responsible for the privacy practices of these sites.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Changes to This Policy</h2>
        <p className={styles.text}>
          We may update this Privacy Policy periodically. Changes will be posted on this page, and the updated date will be noted.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.text}>
          If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:info@upskilleduonline.com">info@upskilleduonline.com</a>.
        </p>
      </section>

      <footer className={styles.footer}>
        <p className={styles.footerText}>
          By using our website, you consent to the collection and use of your information as described in this Privacy Policy.
        </p>
      </footer>
    </div>
    </div>
  );
};

export default PrivacyPolicy;
