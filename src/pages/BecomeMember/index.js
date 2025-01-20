import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/Login.module.css'; // Reuse the styling
import emailjs from '@emailjs/browser';

export default function ProfileForm() {
  const [error, setError] = useState('');
  const [formValues,setFormValues] = useState({
    name:'',
    mail:'',
    phone:''
  })

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(formValues)
    emailjs.sendForm('service_h543lm1', 'template_76aavbk', form.current, 'WHP4fLLjX31i21JPb')
    .then(() => {
      setFormValues({
        name:'',
        phone:'',
        mail:'',
      })
      alert('We have recieved your request!')
    }, (error) => {
      setError(error.text);
    });
  }

  return (
    <motion.div
      className={styles.loginContainer} // Reuse existing container styling
    >
      <motion.div
        className={styles.loginBox} // Reuse existing box styling
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <h2 className={styles.title}>Become a Member!</h2>
        <form className={styles.loginForm} ref={form} onSubmit={(e) => sendEmail(e)}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              name='name'
              className={styles.inputField}
              value={formValues.name} 
              onChange={(e) =>
               setFormValues({ ...formValues, name: e.target.value })
              }
              required
              placeholder="Enter your name"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="phone" className={styles.label}>Phone Number</label>
            <input
              type="text"
              id="phone"
              name='phone'
              className={styles.inputField}
              value={formValues.phone} 
              onChange={(e) =>
                setFormValues({ ...formValues, phone: e.target.value })}
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="text"
              id="email"
              name='mail'
              className={styles.inputField}
              value={formValues.mail} 
              onChange={(e) =>
                setFormValues({ ...formValues, mail: e.target.value })}
              placeholder="Enter your email"
              required
            />
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <motion.button
            className={styles.loginButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
          >
            Submit
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
