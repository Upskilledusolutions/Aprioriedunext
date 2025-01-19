// pages/form.js
import React, { useState } from 'react';
import styles from '../../styles/Paymentform.module.css';

const ReferralForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    referralCode: '',
    source: '',
    gender: '',
    age: '',
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
    if (!formData.source) newErrors.source = 'Please select a source';
    if (!formData.gender) newErrors.gender = 'Please select a gender';
    if (!formData.age) {
      newErrors.age = 'Age is required';
    } else if (formData.age <= 0) {
      newErrors.age = 'Age must be a positive number';
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      alert('Form submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        email: '',
        referralCode: '',
        source: '',
        gender: '',
        age: '',
      });
      setErrors({});
    }
  };

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.title}>Payment Form</h1>
      <form onSubmit={handleSubmit} className={styles.form} noValidate>
        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
          />
          {errors.name && <span className={styles.errorText}>{errors.name}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
          />
          {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
          />
          {errors.email && <span className={styles.errorText}>{errors.email}</span>}
        </div>

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
          <label className={styles.label} htmlFor="source">How did you come to know about us?</label>
          <select
            id="source"
            name="source"
            value={formData.source}
            onChange={handleChange}
            className={errors.source ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
          >
            <option value="">Select an option</option>
            <option value="Social Media">Social Media</option>
            <option value="Youtube">Youtube</option>
            <option value="Teacher/Trainer">Teacher/Trainer</option>
            <option value="Sales Executive/Affiliate">Sales Executive/Affiliate</option>
          </select>
          {errors.source && <span className={styles.errorText}>{errors.source}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="gender">Gender</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={errors.gender ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
          >
            <option value="">Select an option</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
            <option value="Prefer not to say">Prefer not to say</option>
          </select>
          {errors.gender && <span className={styles.errorText}>{errors.gender}</span>}
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label} htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            className={errors.age ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
          />
          {errors.age && <span className={styles.errorText}>{errors.age}</span>}
        </div>

        <button type="submit" className={styles.submitButton}>Submit</button>
      </form>
    </div>
  );
};

export default ReferralForm;
