import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'; // To access the router for navigation
import { motion } from 'framer-motion';
import { login } from '../../Store';
import styles from '../../styles/Login.module.css';
import LoadingSpinner from '../../../components/loader';

export default function Login() {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState(''); // State for the user's name
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false)
  const URL = process.env.NEXT_PUBLIC_BACKENDURL

  const dispatch = useDispatch();
  const router = useRouter();
  
  // Simulated user database
  // const usersDB = [
  //   { userId: 'mastertrainer1', password: 'Chocolat@1474', name: '', "trial": false, type: 'all', "next":[] },
  //   { userId: 'mastertrainer2', password: 'Amigo@2024!', name: '', "trial": false, type: 'all', "next":[] },
  //   { userId: 'mastertrainer3', password: 'Liberté@3891', name: '', "trial": false, type: 'all', "next":[] },
  //   { userId: 'mastertrainer4', password: 'Baum@6720!', name: '', "trial": false, type: 'all', "next":[] },
  //   { userId: 'mastertrainer5', password: 'Frere@8461#', name: '', "trial": false, type: 'all', "next":[] },
  //   { "userId": "TraiVerFreA1", "password": "BeauCiel7348", "name": "","trial": true, "type": "french", "next":[] },
  //   { "userId": "TraiVerFreA2", "password": "JeuneFleur6854", "name": "","trial": true, "type": "frencha2", "next":[] },
  //   { "userId": "TraiVerSpaA1", "password": "GranSol5738", "name": "","trial": true, "type": "spanish", "next":[] },
  //   { "userId": "TraiVerSpaA2", "password": "FelizHora6357", "name": "","trial": true, "type": "spanisha2", "next":[] },
  //   { "userId": "TraiVerGerA1", "password": "DunkelNacht5732", "name": "","trial": true, "type": "german", "next":[] },
  //   { "userId": "TraiVerGerA2", "password": "NeuerWeg5824", "name": "","trial": true, "type": "germana2", "next":[] },
  //   { "userId": "quixoticlengua149", "password": "ClaroCielo2761", "name": "","trial": false, "type": "spanish", "next":[] }, //using
  //   { "userId": "linguafranca50", "password": "BonSoir5830", "name": "", "trial": false, "type": "french", "next":["frencha2"] },
  //   { "userId": "linguafranca51", "password": "BonSoir5639", "name": "","trial": true, "type": "french", "next":[] },
  //   { "userId": "linguafranca53", "password": "BonSoir5829", "name": "", "trial": false, "type": "french", "next":["frencha2", "frenchb1"] }, //using
  //   { "userId": "linguafranca71", "password": "AuRevoir5367", "name": "", "trial": false, "type": "french", "next":[] },
  //   { "userId": "linguafranca73", "password": "BonneNuit8193", "name": "", "trial": false, "type": "french", "next":[] },
  //   { "userId": "linguafranca79", "password": "OuiMerci2487", "name": "", "trial": false, "type": "french", "next":[] }, //using
  //   { "userId": "linguafranca193", "password": "TresBien5726", "name": "", "trial": true, "type": "frencha2", "next":[] },
  //   { "userId": "linguafranca189", "password": "PasEncore4186", "name": "","trial": true, "type": "french", "next":[] }, //using
  //   { "userId": "linguafranca97", "password": "CavaToi9325", "name": "", "trial": false, "type": "french", "next":[] }, //using
  //   { "userId": "linguafranca101", "password": "DeRien4872", "name": "", "trial": false, "type": "french", "next":[] }, //using
  //   // { "userId": "linguafranca201", "password": "ChatSouris2649", "name": "", "trial": true, "type": "french", "next":[] }, //using
  //   // { "userId": "linguafranca213", "password": "YeuxVerts1049", "name": "", "trial": true, "type": "french", "next":[] }, //using
  //   { "userId": "linguafranca107", "password": "AuRevoir7339", "name": "", "trial": false, "type": "french", "next":["frencha2", "spanish", "spanisha2", "german", "germana2"] }, //using
  //   { "userId": "linguafranca1", "password": "AuInconnu7339", "name": "", "trial": false, "type": "french", "next":["frencha2", "spanish", "spanisha2", "german", "germana2"] }, //using 
  //   { "userId": "quixoticlengua103", "password": "BuenosDias8387", "name": "", "trial": false, "type": "spanish", "next":[] }, //using
  //   { "userId": "quixoticlengua109", "password": "PorFavor29369", "name": "", "trial": false, "type": "spanish", "next":[] }, 
  //   { "userId": "quixoticlengua109", "password": "PorFavor9263", "name": "", "trial": false, "type": "spanish", "next":[] }, //using
  //   { "userId": "quixoticlengua113", "password": "AdiosAmigo1137", "name": "", "trial": false, "type": "spanish", "next":[] },
  //   { "userId": "quixoticlengua127", "password": "ComoEstas7832", "name": "", "trial": false, "type": "spanish", "next":[] },
  //   { "userId": "quixoticlengua191", "password": "HastaLuego5241", "name": "", "trial": true, "type": "spanish", "next":[] }, //using
  //   { "userId": "quixoticlengua137", "password": "TeQuiero8974", "name": "", "trial": false, "type": "spanish", "next":[] }, //using
  //   // { "userId": "quixoticlengua139", "password": "LoSiento6138", "name": "", "trial": true, "type": "spanish", "next":[] }, //using
  //   // { "userId": "sprachmeister157", "password": "DankeSchon16479", "name": "", "trial": true, "type": "german", "next":[] }, //using
  //   // { "userId": "sprachmeister211", "password": "BitteSehr8271", "name": "", "trial": true, "type": "german", "next":[] }, //using
  //   { "userId": "sprachmeister167", "password": "WieGehts3149", "name": "", "trial": false, "type": "german", "next":[] },
  //   { "userId": "sprachmeister173", "password": "TschussMein3975", "name": "", "trial": false, "type": "german", "next":[] },
  //   { "userId": "sprachmeister179", "password": "AufWiedersehen5932", "name": "", "trial": false, "type": "german", "next":[] },
  //   { "userId": "sprachmeister181", "password": "GuteReise4819", "name": "", "trial": false, "type": "german", "next":[] },
  //   { "userId": "sprachmeister191", "password": "AllesKlar4287", "name": "", "trial": false, "type": "german", "next":[] },
  //   { "userId": "sprachmeister193", "password": "Entschuldigung6724", "name": "", "trial": false, "type": "german", "next":[] },
  //   // { "userId": "sprachmeister313", "password": "MirGehts9642", "name": "","trial": true, "type": "german", "next":[] }, //using
  //   // { "userId": "stellungvor503", "password": "MeerEsfluss7293", "name": "","trial": true, "type": "germana2", "next":[] }, //using
  //   { "userId": "sprachmeister197", "password": "GutenAbend8351", "name": "", "trial": false, "type": "german" , "next": ["frencha2", "frenchb1", "spanish"]},
  //   { "userId": "sprachmeister201", "password": "GutenAbend8351", "name": "", "trial": false, "type": "germana2", "next":[] },
  //   {"userId": "linguaitaliana298", "password": "Buonasera9216", "name": "", "trial": false, "type": "italian", "next":[]  },
  //   {"userId": "ruskiyjazyk473", "password": "DobryyVecher5473", "name": "", "trial": false, "type": "russian", "next":[]  },
  //   {"userId": "nederlands729", "password": "Goedenavond8927", "name": "", "trial": false, "type": "dutch", "next":[] },

  //   //New
  //   // {"userId": "linguafranca223", "password": "SaphirChimere9397", "name": "", "trial": true, "type": "french", "next":[] }, //using
  //   {"userId": "linguafranca227", "password": "SereniteLegende8835", "name": "", "trial": true, "type": "french", "next":[] }, //using
  //   {"userId": "linguafranca229", "password": "InconnuSaphir2727", "name": "", "trial": true, "type": "french", "next":[] }, //using
  //   {"userId": "linguafranca233", "password": "MelancolieSolitude9465", "name": "", "trial": true, "type": "french", "next":[] }, //using
  //   {"userId": "linguafranca239", "password": "LegendeInconnu1182", "name": "", "trial": true, "type": "french", "next":[] },

  //   {"userId": "lumieresaison503", "password": "ReverieChimere5755", "name": "", "trial": true, "type": "frencha2", "next":[] },
  //   {"userId": "lumieresaison509", "password": "EmerveillementSaphir6563", "name": "", "trial": true, "type": "frencha2", "next":[] },
  //   {"userId": "lumieresaison521", "password": "MelancolieLegende8961", "name": "", "trial": true, "type": "frencha2", "next":[] },
  //   {"userId": "lumieresaison523", "password": "LegendeChimere7679", "name": "", "trial": true, "type": "frencha2", "next":[] },
  //   {"userId": "lumieresaison541", "password": "SaphirElegance8028", "name": "", "trial": true, "type": "frencha2", "next":[] },

  //   {"userId": "quixoticlengua241", "password": "BrisaLenta1480", "name": "", "trial": true, "type": "spanish", "next":[] }, //using
  //   {"userId": "quixoticlengua251", "password": "CieloAzul9631", "name": "", "trial": true, "type": "spanish", "next":[] }, //using
  //   {"userId": "quixoticlengua257", "password": "EdificioAlto5917", "name": "", "trial": true, "type": "spanish", "next":[] },
  //   {"userId": "quixoticlengua263", "password": "PequenoError2604", "name": "", "trial": true, "type": "spanish", "next":[] },
  //   {"userId": "quixoticlengua269", "password": "DiaNoche5913", "name": "", "trial": true, "type": "spanish", "next":[] },

  //   {"userId": "valleestudiar547", "password": "BuenasNoches4819", "name": "", "trial": true, "type": "spanisha2", "next":[] },
  //   {"userId": "valleestudiar557", "password": "LuzBlanca5825", "name": "", "trial": true, "type": "spanisha2", "next":[] },
  //   {"userId": "valleestudiar563", "password": "RioqueFluye2739", "name": "", "trial": true, "type": "spanisha2", "next":[] },
  //   {"userId": "valleestudiar569", "password": "VarillaMetalica1480", "name": "", "trial": true, "type": "spanisha2", "next":[] },
  //   {"userId": "valleestudiar571", "password": "CadenaDeoro3816", "name": "", "trial": true, "type": "spanisha2", "next":[] },

  //   {"userId": "sprachmeister271", "password": "KleinerFehler9265", "name": "", "trial": true, "type": "german", "next":[] }, //using
  //   {"userId": "sprachmeister277", "password": "WeibesLicht7823", "name": "", "trial": true, "type": "german", "next":[] },
  //   {"userId": "sprachmeister281", "password": "FliebenderFluss4916", "name": "", "trial": true, "type": "german", "next":[] },
  //   {"userId": "sprachmeister283", "password": "TagNacht4816", "name": "", "trial": true, "type": "german", "next":[] },
  //   {"userId": "sprachmeister293", "password": "GutenAbend0619", "name": "", "trial": true, "type": "german", "next":[] },

  //   {"userId": "stellungvor577", "password": "LangsameBrise6825", "name": "", "trial": true, "type": "germana2", "next":[] },
  //   {"userId": "stellungvor587", "password": "BlauerHimmel1693", "name": "", "trial": true, "type": "germana2", "next":[] },
  //   {"userId": "stellungvor593", "password": "HohesGebaude5915", "name": "", "trial": true, "type": "germana2", "next":[] },
  //   {"userId": "stellungvor599", "password": "MetallStab6926", "name": "", "trial": true, "type": "germana2", "next":[] },
  //   {"userId": "stellungvor601", "password": "GoldKette5729", "name": "", "trial": true, "type": "germana2", "next":[] },

  // ];

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Check if the user exists in the database
  //   const user = usersDB.find((u) => u.userId === userId && u.password === password);

  //   if (user) {
  //     // If valid, dispatch login and store in Redux & cookies
  //     dispatch(login({ userId: user.userId, name: name ,trial: user.trial , type: user.type , next: user.next })); // Include the 'type'

  //     // Redirect to the previous page
  //     router.back(); // Go back to the previous page
  //   } else {
  //     // If invalid credentials, show an error message
  //     setError('Invalid user ID or password');
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true)

    try {
      const response = await fetch(`${URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, password }),
      });
      setLoading(false)

      const data = await response.json();
      if (data.success) {
        if(data.user.active){
        dispatch(login({ 
          userId: data.user.userId, 
          name: name,
          trial: data.user.trial, 
          type: data.user.type, 
          next: data.user.next,
          active: data.user.active,
         }));
        router.push('/');
      } else if(!data.user.active){
        setError("User Validity Expired")
      }} else {
        setError(data.message || "Invalid credentials");
      }
    } catch (error) {
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>  
      {loading && <div className={styles.loader}><LoadingSpinner /></div>}
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
    </div>
  );
}
