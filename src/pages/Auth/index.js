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
    { userId: 'mastertrainer1', password: 'Chocolat@1474', name: '', type: 'all' },
    { userId: 'mastertrainer2', password: 'Amigo@2024!', name: '', type: 'all' },
    { userId: 'mastertrainer3', password: 'Liberté@3891', name: '', type: 'all' },
    { userId: 'mastertrainer4', password: 'Baum@6720!', name: '', type: 'all' },
    { userId: 'mastertrainer5', password: 'Frere@8461#', name: '', type: 'all' },
    { "userId": "linguafranca50", "password": "BonSoir5830", "name": "", "type": "french" },
    { "userId": "linguafranca53", "password": "BonSoir5829", "name": "", "type": "french" },
    // { "userId": "linguafranca59", "password": "MerciBien7339", "name": "", "type": "french" },
    { "userId": "linguafranca61", "password": "SalutTous6274", "name": "", "type": "french" },
    { "userId": "linguafranca67", "password": "CavaBien1948", "name": "", "type": "french" },
    { "userId": "linguafranca71", "password": "AuRevoir5367", "name": "", "type": "french" },
    { "userId": "linguafranca73", "password": "BonneNuit8193", "name": "", "type": "french" },
    { "userId": "linguafranca79", "password": "OuiMerci2487", "name": "", "type": "frencha2" },
    { "userId": "linguafranca83", "password": "TresBien5726", "name": "", "type": "frencha2" },
    { "userId": "linguafranca89", "password": "AllonsY4186", "name": "", "type": "frencha2" },
    { "userId": "linguafranca97", "password": "CavaToi9325", "name": "", "type": "french" }, //using
    { "userId": "linguafranca101", "password": "BonSoir5830", "name": "", "type": "frenchb1" },
    { "userId": "linguafranca107", "password": "BonSoir5829", "name": "", "type": "frenchb1" },
    { "userId": "linguafranca109", "password": "MerciBien7339", "name": "", "type": "frenchb1" },
    { "userId": "linguafranca113", "password": "SalutTous6274", "name": "", "type": "frenchb1" },
    { "userId": "linguafranca127", "password": "CavaBien1948", "name": "", "type": "frenchb1" },
    { "userId": "linguafranca131", "password": "AuRevoir5367", "name": "", "type": "frenchb1" },
    { "userId": "linguafranca137", "password": "BonneNuit8193", "name": "", "type": "frenchb1" },
    { "userId": "linguafranca139", "password": "OuiMerci2487", "name": "", "type": "frenchb1" },
    { "userId": "linguafranca149", "password": "TresBien5726", "name": "", "type": "frenchb1" },
    { "userId": "linguafranca151", "password": "AllonsY4186", "name": "", "type": "frenchb1" },
    { "userId": "linguafranca163", "password": "CavaToi9325", "name": "", "type": "frenchb1" },
    // { "userId": "quixoticlengua101", "password": "HolaAmigo7324", "name": "", "type": "spanish" },
    { "userId": "quixoticlengua103", "password": "BuenosDias8387", "name": "", "type": "spanish" },
    { "userId": "quixoticlengua107", "password": "GraciasMucho3145", "name": "", "type": "spanish" },
    { "userId": "quixoticlengua109", "password": "PorFavor29369", "name": "", "type": "spanish" }, 
    { "userId": "quixoticlengua113", "password": "AdiosAmigo1137", "name": "", "type": "spanish" },
    { "userId": "quixoticlengua127", "password": "ComoEstas7832", "name": "", "type": "spanish" },
    { "userId": "quixoticlengua131", "password": "HastaLuego5241", "name": "", "type": "spanish" },
    { "userId": "quixoticlengua137", "password": "TeQuiero8974", "name": "", "type": "spanish" },
    { "userId": "quixoticlengua139", "password": "LoSiento6138", "name": "", "type": "spanish" },
    { "userId": "quixoticlengua149", "password": "BuenasNoches4926", "name": "", "type": "spanish" },
    { "userId": "sprachmeister151", "password": "GutenTag2935", "name": "", "type": "german" },
    { "userId": "sprachmeister157", "password": "DankeSchon16479", "name": "", "type": "german" },
    { "userId": "sprachmeister163", "password": "BitteSehr8271", "name": "", "type": "german" },
    { "userId": "sprachmeister167", "password": "WieGehts3149", "name": "", "type": "german" },
    { "userId": "sprachmeister173", "password": "TschussMein3975", "name": "", "type": "german" },
    { "userId": "sprachmeister179", "password": "AufWiedersehen5932", "name": "", "type": "german" },
    { "userId": "sprachmeister181", "password": "GuteReise4819", "name": "", "type": "german" },
    { "userId": "sprachmeister191", "password": "AllesKlar4287", "name": "", "type": "german" },
    { "userId": "sprachmeister193", "password": "Entschuldigung6724", "name": "", "type": "german" },
    { "userId": "sprachmeister197", "password": "GutenAbend8351", "name": "", "type": "german" , "next": ["frencha2", "frenchb1", "spanish"]},
    { "userId": "sprachmeister201", "password": "GutenAbend8351", "name": "", "type": "germana2" },
    {"userId": "linguaitaliana298", "password": "Buonasera9216", "name": "", "type": "italian"  },
    {"userId": "ruskiyjazyk473", "password": "DobryyVecher5473", "name": "", "type": "russian"  },
    {"userId": "nederlands729", "password": "Goedenavond8927", "name": "", "type": "dutch" }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user exists in the database
    const user = usersDB.find((u) => u.userId === userId && u.password === password);

    if (user) {
      // If valid, dispatch login and store in Redux & cookies
      dispatch(login({ userId: user.userId, name: name, type: user.type, next: user.next })); // Include the 'type'

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
