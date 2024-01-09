import styles from '../../src/styles/Home/Hero.module.css'
import { motion } from "framer-motion"
import Image from 'next/image'

export default function Hero() {
  return (
    <div className={styles.bcontainer}>
      <motion.div 
        initial={{ opacity: 0, y: 232,}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.container}>
          <motion.div 
          initial={{ opacity: 0, x: -100,}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}>
            <div className={styles.top}>OUR PHILOSOPHY</div>
            <div className={styles.middle}>Planning, Consistency, and focus </div>
            <div className={styles.bottom}>outshine talent... Everytime</div>
          </motion.div>
          <motion.div
          initial={{ opacity: 0, x: 100,}}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }} className={styles.imgcont}>
            <Image className={styles.img} src={'/carousel/carasoul1.png'} width={500} height={500}/>
          </motion.div>
      </motion.div>
    </div>
  )
}
