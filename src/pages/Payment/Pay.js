import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../styles/Paymentform.module.css';
import { useRouter } from 'next/router';

const ReferralForm = () => {
  const form = useRef();
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    referralCode: '',
    trialUserId: '',
    type: 'Full Version',
    amount: '50',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.trialUserId) {
      newErrors.trialUserId = 'Trial User Id is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (validateForm()) {
      emailjs
        .sendForm('service_h543lm1', 'template_e0enqfn', form.current, 'WHP4fLLjX31i21JPb')
        .then(() => {
          router.push({
            pathname: '/Payment/Checkout',
            query: formData,
          });
          setFormData({
            name: '',
            phone: '',
            email: '',
            referralCode: '',
            trialUserId: '',
            type: 'Full Version', // Reset type explicitly
          });
          setErrors({});
        })
        .catch(() => {
          alert('There was an error sending the form. Please try again.');
        });
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.formContainer1}>
        <h1 className={styles.title}>Payment Form</h1>
        <div className={styles.note}><b>Note: </b>Field marked with <span className={styles.span}>*</span> are mandatory to fill.</div>
        <form ref={form} onSubmit={sendEmail} className={styles.form} noValidate>
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="name">Name <span className={styles.span}>*</span></label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
            />
            {errors.name && <span className={styles.errorText}>{errors.name}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="phone">Phone <span className={styles.span}>*</span></label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
            />
            {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="email">Email <span className={styles.span}>*</span></label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
            />
            {errors.email && <span className={styles.errorText}>{errors.email}</span>}
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="trialUserId">Trial User Id <span className={styles.span}>*</span></label>
            <input
              type="text"
              id="trialUserId"
              name="trialUserId"
              required
              value={formData.trialUserId}
              onChange={handleChange}
              className={errors.trialUserId ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
            />
            {errors.trialUserId && <span className={styles.errorText}>{errors.trialUserId}</span>}
          </div>

          <input
            type="hidden"
            name="type"
            value={formData.type}
            onChange={handleChange}
          />

          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="referralCode">Referral Code</label>
            <input
              type="text"
              id="referralCode"
              name="referralCode"
              value={formData.referralCode}
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ReferralForm;
