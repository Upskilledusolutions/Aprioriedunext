import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../styles/Paymentform.module.css';

const ReferralForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    referralCode: '',
    source: '',
    gender: '',
    age: '',
    course: '',
    type: 'Free Version'
  });

  const [errors, setErrors] = useState({});
  const [error, setError] = useState(null);

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
    if (!formData.course) newErrors.course = 'Please select a course';

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
      console.log('Form data being submitted:', formData); // Debug log
      emailjs
        .sendForm('service_h543lm1', 'template_e0enqfn', form.current, 'WHP4fLLjX31i21JPb')
        .then(() => {
          alert('We have received your request! Your Id credentials may take sometime to reach you.');
          setFormData({
            name: '',
            phone: '',
            email: '',
            referralCode: '',
            source: '',
            gender: '',
            age: '',
            course: '',
            type: 'Free Version', // Reset type explicitly
          });
          setErrors({});
        })
        .catch((error) => {
          setError(error.text);
          alert('There was an error sending the form. Please try again.');
        });
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Free Trial</h1>
        <form ref={form} onSubmit={sendEmail} className={styles.form} noValidate>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name">Name</label>
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
              <label className={styles.label} htmlFor="phone">Phone</label>
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
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">Email</label>
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
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="source">How did you come to know about us?</label>
              <select
                id="source"
                name="source"
                required
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
                required
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
          </div>

          <div className={styles.row}>
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

            <input
              type="hidden"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="course">Course</label>
              <select
                id="course"
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className={errors.course ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
              >
               <option value="">Select a course</option>
                <option value="French A1">French A1</option>
                <option value="French A2">French A2</option>
                <option value="French B1">French B1</option>
                <option value="French B2">French B2</option>
                <option value="French C1">French C1</option>
                <option value="French C2">French C2</option>
                <option value="Spanish A1">Spanish A1</option>
                <option value="Spanish A2">Spanish A2</option>
                <option value="Spanish B1">Spanish B1</option>
                <option value="Spanish B2">Spanish B2</option>
                <option value="Spanish C1">Spanish C1</option>
                <option value="Spanish C2">Spanish C2</option>
                <option value="German A1">German A1</option>
                <option value="German A2">German A2</option>
                <option value="German B1">German B1</option>
                <option value="German B2">German B2</option>
                <option value="German C1">German C1</option>
                <option value="German C2">German C2</option>
              </select>
              {errors.course && <span className={styles.errorText}>{errors.course}</span>}
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ReferralForm;
