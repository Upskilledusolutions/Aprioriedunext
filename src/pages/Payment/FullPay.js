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
    city: '',
    country: '',
    occupation: '',
    referralCode: '',
    type: 'Full Version',
    amount: 'Select a Course',
    source: '',
    sourcename: '',
    gender: '',
    age: '',
    course: '',
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
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.occupation) newErrors.occupation = 'Occupation/Profession is required';
    if (!formData.source) newErrors.source = 'Please select a source';
    if (!formData.sourcename) newErrors.sourcename = 'Please write a source name';
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
  
    // Set amount based on course selection
    if (name === "course") {
      let amount = "";
      switch (value) {
        case "Self study package":
          amount = "6000";
          break;
        case "Online Classes for Adults":
          amount = "12000";
          break;
        case "Online Classes for Children":
          amount = "9000";
          break;
        case "Self study package + Doubt sessions":
          amount = "9000";
          break;
        case "Workshop":
          amount = "5";
          break;
        case "Contests and Events":
          amount = "500";
          break;
        default:
          amount = "";
      }
      setFormData({
        ...formData,
        [name]: value,
        amount: amount, // Update amount dynamically
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
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
            city: '',
            country: '',
            occupation: '',
            referralCode: '',
            source: '',
            amount: '',
            sourcename: '',
            gender: '',
            age: '',
            course: '',
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
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Payment Form</h1>
        <div className={styles.note}><b>Note: </b>Field marked with <span className={styles.span}>*</span> are mandatory to fill.</div>
        <form ref={form} onSubmit={sendEmail} className={styles.form} noValidate>
          <div className={styles.row}>
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
          </div>

          <div className={styles.row}>
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
          </div>

          <div className={styles.row}>
          <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="city">City <span className={styles.span}>*</span></label>
              <input
                type="text"
                id="city"
                name="city"
                required
                value={formData.city}
                onChange={handleChange}
                className={errors.city ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
              />
              {errors.city && <span className={styles.errorText}>{errors.city}</span>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="country">Country <span className={styles.span}>*</span></label>
              <input
                type="text"
                id="country"
                name="country"
                required
                value={formData.country}
                onChange={handleChange}
                className={errors.country ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
              />
              {errors.country && <span className={styles.errorText}>{errors.country}</span>}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="source">How did you come to know about us? <span className={styles.span}>*</span></label>
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
              <label className={styles.label} htmlFor="sourcename">
                Name of the Source <span className={styles.span}>*</span>
              </label>
              <input
                type="text"
                id="sourcename"
                name="sourcename"
                value={formData.sourcename}
                onChange={handleChange}
                className={`${styles.input}`}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="age">Age <span className={styles.span}>*</span></label>
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

          <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="gender">Gender <span className={styles.span}>*</span></label>
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
              <label className={styles.label} htmlFor="occupation">Occupation/ Profession <span className={styles.span}>*</span></label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                required
                value={formData.occupation}
                onChange={handleChange}
                className={errors.occupation ? `${styles.errorInput} ${styles.input}` : `${styles.input}`}
              />
              {errors.occupation && <span className={styles.errorText}>{errors.occupation}</span>}
            </div>

            <input
              type="hidden"
              name="type"
              value={formData.type}
              onChange={handleChange}
            />

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
                <option value="Self study package">Self study package (6 months) - ₹6000</option>
                <option value="Online Classes for Adults">Online Classes for Adults (6 months) - ₹12000</option>
                <option value="Online Classes for Children">Online Classes for Children (3 months) - ₹9000</option>
                <option value="Self study package + Doubt sessions">Self study package + Doubt sessions (6 months) - ₹9000</option>
                <option value="Workshop">Workshop - ₹250</option>
                <option value="Contests and Events">Contests and Events -₹500 </option>
              </select>
              {errors.course && <span className={styles.errorText}>{errors.course}</span>}
            </div>
          </div>

        <div className={styles.row1}>
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
          </div>

          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ReferralForm;
