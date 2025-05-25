import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../../styles/Paymentform.module.css';
import { useRouter } from 'next/router';

const ReferralForm = () => {
  const router = useRouter();
  const formRef = useRef();
  const [acceptedRules, setAcceptedRules] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('N8R7mjlL0_6PiXjuj');
  }, []);

  // Function to generate unique receipt ID
  const createReceipt = () => {
    const prefix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const now = new Date();
    const datePart = now.toISOString().split('T')[0].replace(/-/g, '');
    const timePart = now.toTimeString().split(' ')[0].replace(/:/g, '');
    return `${prefix}-${datePart}-${timePart}`;
  };

  // Initial form state with defaults
  const initialState = {
    name: '',
    phone: '',
    otp: '',
    email: '',
    city: '',
    country: '',
    age: '',
    contest: '',
    subcategory: '',
    amount: '1000',
    validTill: '25 June 2025',
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [receiptId, setReceiptId] = useState('');

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';
    if (!otpVerified) newErrors.otp = 'Please verify your email OTP';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.age) newErrors.age = 'Age is required';
    else if (formData.age <= 0) newErrors.age = 'Age must be positive';
    if (!formData.contest) newErrors.contest = 'Select a contest';
    if (!formData.subcategory) newErrors.subcategory = 'Select a subcategory';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Send OTP via EmailJS
  const sendOTP = async () => {
    setErrors(e => ({ ...e, email: null }));
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors(e => ({ ...e, email: 'Enter a valid email first' }));
      return;
    }
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(code);
    try {
      await emailjs.send(
        'service_rq83rkq',
        'template_gkm42f9',
        { to_email: formData.email, otp_code: code, user_name: formData.name },
        'N8R7mjlL0_6PiXjuj'
      );
      setOtpSent(true);
      alert('OTP sent to your email');
    } catch (err) {
      console.error('EmailJS send OTP error:', err);
      setErrors(e => ({ ...e, email: 'Failed to send OTP. Try again.' }));
    }
  };

  // Verify OTP
  const verifyOTP = () => {
    if (formData.otp === generatedOtp) {
      setOtpVerified(true);
      setErrors(e => ({ ...e, otp: null }));
      alert('OTP verified!');
      // Generate receipt once OTP verified
      const receipt = createReceipt();
      setReceiptId(receipt);
    } else {
      setErrors(e => ({ ...e, otp: 'Incorrect OTP' }));
    }
  };

  // Handle input changes
  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(fd => ({ ...fd, [name]: value }));
  };

  // Form submit
  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      const payload = { ...formData, receipt: receiptId };
      router.push({ pathname: '/Payment/ContestCheckout', query: payload });
      setFormData(initialState);
      setOtpSent(false);
      setOtpVerified(false);
      setGeneratedOtp('');
      setReceiptId('');
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Register for Hyperglot Contest</h1>
        <div className={styles.note}>
          <b>Note:</b> Fields marked <span className={styles.span}>*</span> are mandatory.
        </div>
        <form ref={formRef} onSubmit={handleSubmit} noValidate className={styles.form}>

          {/* Row 1: Name & Phone */}
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label>Name <span className={styles.span}>*</span></label>
              <input name="name" value={formData.name} onChange={handleChange} className={errors.name ? styles.errorInput : styles.input} />
              {errors.name && <div className={styles.errorText}>{errors.name}</div>}
            </div>
            <div className={styles.formGroup}>
              <label>Phone <span className={styles.span}>*</span></label>
              <input name="phone" value={formData.phone} onChange={handleChange} className={errors.phone ? styles.errorInput : styles.input} />
              {errors.phone && <div className={styles.errorText}>{errors.phone}</div>}
            </div>
          </div>

          {/* Row 2: Email & City */}
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label>Email <span className={styles.span}>*</span></label>
              <input name="email" type="email" disabled={otpVerified} value={formData.email} onChange={handleChange} className={errors.email ? styles.errorInput : styles.input} />
              {errors.email && <div className={styles.errorText}>{errors.email}</div>}
              <button type="button" onClick={sendOTP} className={styles.otpButton} disabled={otpSent || otpVerified}>{otpSent ? 'OTP Sent' : 'Send OTP'}</button>
              {otpSent && !otpVerified && (
                <div style={{ marginTop: '0.5rem' }}>
                  <input name="otp" placeholder="Enter OTP" value={formData.otp} onChange={handleChange} className={errors.otp ? styles.errorInput : styles.input} />
                  <button type="button" onClick={verifyOTP} className={styles.otpButton}>Verify</button>
                  {errors.otp && <div className={styles.errorText}>{errors.otp}</div>}
                </div>
              )}
            </div>
            <div className={styles.formGroup}>
              <label>City <span className={styles.span}>*</span></label>
              <input name="city" value={formData.city} onChange={handleChange} className={errors.city ? styles.errorInput : styles.input} />
              {errors.city && <div className={styles.errorText}>{errors.city}</div>}
            </div>
          </div>

          {/* Row 3: Country & Age */}
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label>Country <span className={styles.span}>*</span></label>
              <input name="country" value={formData.country} onChange={handleChange} className={errors.country ? styles.errorInput : styles.input} />
              {errors.country && <div className={styles.errorText}>{errors.country}</div>}
            </div>
            <div className={styles.formGroup}>
              <label>Age <span className={styles.span}>*</span></label>
              <input name="age" type="number" value={formData.age} onChange={handleChange} className={errors.age ? styles.errorInput : styles.input} />
              {errors.age && <div className={styles.errorText}>{errors.age}</div>}
            </div>
          </div>

          {/* Row 4: Contest & Subcategory */}
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label>Contest <span className={styles.span}>*</span></label>
              <select name="contest" value={formData.contest} onChange={handleChange} className={errors.contest ? styles.errorInput : styles.input}>
                <option value="">Select Contest</option>
                <option value="Hyperglot Contest">Hyperglot Contest</option>
              </select>
              {errors.contest && <div className={styles.errorText}>{errors.contest}</div>}
            </div>
            <div className={styles.formGroup}>
              <label>Subcategory <span className={styles.span}>*</span></label>
              <select name="subcategory" value={formData.subcategory} onChange={handleChange} className={errors.subcategory ? styles.errorInput : styles.input}>
                <option value="">Select Subcategory</option>
                <option value="French A1">French A1</option>
                <option value="French A2">French A2</option>
                <option value="Spanish A1">Spanish A1</option>
                <option value="Spanish A2">Spanish A2</option>
                <option value="German A1">German A1</option>
                <option value="German A2">German A2</option>
              </select>
              {errors.subcategory && <div className={styles.errorText}>{errors.subcategory}</div>}
            </div>
          </div>

          {/* Row 5: Amount & Valid till */}
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label>Amount</label>
              <input name="amount" value={`₹${formData.amount}`} readOnly className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <label>Valid till</label>
              <input name="validTill" value={formData.validTill} readOnly className={styles.input} />
            </div>
          </div>

          <div className={styles.checkboxContainer}>
  <input
    type="checkbox"
    id="acceptRules"
    checked={acceptedRules}
    onChange={() => setAcceptedRules(prev => !prev)}
  />
  <label htmlFor="acceptRules">
    I have read and I accept the contest rules.
  </label>
</div>

<button type="submit" className={otpVerified && acceptedRules ? styles.submitButton : styles.submitButtonDisabled} disabled={!otpVerified || !acceptedRules}>Register Now
</button>
        </form>
      </div>
    </div>
  );
};

export default ReferralForm;
