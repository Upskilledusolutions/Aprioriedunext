import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'; // To access the router for navigation
import { motion } from 'framer-motion';
import { login } from '../../Store';
import styles from '../../styles/Login.module.css';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // State for the user's name
  const [error, setError] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  // Simulated user database
  const usersDB = [
    { userId: 'mastertrainer1', password: 'upskilleduLC1', name: '', type: 'all' },
    { userId: 'mastertrainer2', password: 'upskilleduLC2', name: '', type: 'all' },
    { userId: 'mastertrainer3', password: 'upskilleduLC3', name: '', type: 'all' },
    { userId: 'mastertrainer4', password: 'upskilleduLC4', name: '', type: 'all' },
    { userId: 'mastertrainer5', password: 'upskilleduLC5', name: '', type: 'all' },
    { userId: 'mastertrainer6', password: 'upskilleduLC6', name: '', type: 'french' },
    { userId: 'mastertrainer7', password: 'upskilleduLC7', name: '', type: 'german' },
    { userId: 'mastertrainer8', password: 'upskilleduLC8', name: '', type: 'spanish' },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user exists in the database
    const user = usersDB.find((u) => u.userId === userId && u.password === password);

    if (user) {
      // If valid, dispatch login and store in Redux & cookies
      dispatch(login({ userId: user.userId, name: name, type: user.type })); // Include the 'type'

      // Redirect to the previous page
      router.back(); // Go back to the previous page
    } else {
      // If invalid credentials, show an error message
      setError('Invalid user ID or password');
    }
  };

  return (
    <motion.div className={styles.loginContainer}>
      <motion.div
        className={styles.loginBox}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <h2 className={styles.title}>Login</h2>
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name" className={styles.label}>Name</label>
            <input
              type="text"
              id="name"
              className={styles.inputField}
              value={name}
              onChange={(e) => setName(e.target.value)} // Set name state
              placeholder="Enter your name"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="userId" className={styles.label}>User ID</label>
            <input
              type="text"
              id="userId"
              className={styles.inputField}
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              placeholder="Enter your user ID"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input
              type="password"
              id="password"
              className={styles.inputField}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
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
            Login
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  );
}
