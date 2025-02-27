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
    course: '',
    language: '',
    level: '',
    referralCode: '',
    trialUserId: '',
    receipt: '',
    type: 'Full Version',
    amount: 'Select a Course',
    duration: 'Select a Course'
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
    if (!formData.course) newErrors.course = 'Please select a course';
    if (!formData.language) newErrors.language = 'Please select a language';
    if (!formData.level) newErrors.level = 'Please select a level';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const createReceipt = () => {
    // Generate a random 4-letter prefix
    const prefix = Math.random().toString(36).substring(2, 6).toUpperCase();
  
    // Get the current date and time in YYYYMMDD-HHMMSS format
    const now = new Date();
    const datePart = now.toISOString().split('T')[0].replace(/-/g, ''); // YYYYMMDD
    const timePart = now.toTimeString().split(' ')[0].replace(/:/g, ''); // HHMMSS
  
    // Combine the prefix, date, and time
    return `${prefix}-${datePart}-${timePart}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    // Set amount based on course selection
    if (name === "course") {
      let amount = "";
      let duration = "";
      switch (value) {
        case "OSA - Self study package":
          amount = "6000";
          duration = "6 months";
          break;
        case "Online Classes for Adults":
          amount = "12000";
          duration = "6 months";
          break;
        case "Online Classes for Children":
          amount = "9000";
          duration = "3 months";
          break;
        case "OSA -Self study package + Doubt sessions":
          amount = "9000";
          duration = "6 months";
          break;
        case "Workshop":
          amount = "250";
          duration = "";
          break;
        case "Contests and Events":
          amount = "500";
          duration = "";
          break;
        default:
          amount = "";
          duration = "";
      }
      setFormData({
        ...formData,
        [name]: value,
        duration: duration,
        amount: amount, // Update amount dynamically
        receipt: createReceipt(),
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
        receipt: createReceipt(),
      });
    }
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
            course: '',
            language: '',
            level: '',
            amount: '',
            duration: '',
            receipt: '',
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
              <label className={styles.label} htmlFor="course">Course <span className={styles.span}>*</span></label>
              <select
                id="course"
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className={errors.course ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
              >
               <option value="">Select a course</option>
                <option value="OSA - Self study package">OSA - Self study package (6 months) - ₹6000</option>
                <option value="Online Classes for Adults">Online Classes for Adults (6 months) - ₹12000</option>
                <option value="Online Classes for Children">Online Classes for Children (3 months) - ₹9000</option>
                <option value="OSA - Self study package + Doubt sessions">OSA - Self study package + Doubt sessions (6 months) - ₹9000</option>
                <option value="Workshop">Workshop - ₹250</option>
                <option value="Contests and Events">Contests and Events -₹500 </option>
              </select>
              {errors.course && <span className={styles.errorText}>{errors.course}</span>}
            </div>

              {/* Language Dropdown */}
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="language">Language <span className={styles.span}>*</span></label>
            <select
              id="language"
              name="language"
              required
              value={formData.language}
              onChange={handleChange}
              className={errors.language ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
            >
              <option value="">Select a language</option>
              <option value="French">French</option>
              <option value="Spanish">Spanish</option>
              <option value="German">German</option>
            </select>
            {errors.language && <span className={styles.errorText}>{errors.language}</span>}
          </div>

          {/* Level Dropdown */}
          <div className={styles.formGroup}>
            <label className={styles.label} htmlFor="level">Level <span className={styles.span}>*</span></label>
            <select
              id="level"
              name="level"
              required
              value={formData.level}
              onChange={handleChange}
              className={errors.level ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
            >
              <option value="">Select a level</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
            </select>
            {errors.level && <span className={styles.errorText}>{errors.level}</span>}
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

          <input
            type="hidden"
            name="receipt"
            value={formData.receipt}
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

          <div className={styles.formGroup}>
            <label className={styles.label}>Amount</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={formData.amount}
              readOnly
              onChange={handleChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label className={styles.label}>Duration</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              readOnly
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
