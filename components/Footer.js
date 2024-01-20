import styles from '../src/styles/footer.module.css'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { useEffect, useState } from 'react';

export default function Footer() {
  const[index,setIndex] = useState(0)
  const alltext = ["What is truly remarkable about the Apriori team is their commitment to being not only test prep professionals, but also teachers and mentors. My success on the GMAT was a direct result of their attention to detail and their focus on helping me understand test concepts.",
  "If you want a new approach to learning things and escape the ordinary methods you are used to, join Apriori as fast as possible. Not only are you going to get a great score but also be able to think and learn way more than you did at school.",
  "I had the opportunity to attend classes for SAT and ACT at Apriori. I would like to extend a personal thanks to Dominic Sir who has been very patient and supportive and has at all times stressed the need to be a voracious reader in order to achieve the scores in the standardized tests and to achieve overall academic excellence."]
  const img = ["/profileimg/1 (1).png", "/profileimg/1 (2).png", "/profileimg/1 (3).png"]
  const names = ["Rohit Bhatnagar","Dhruv Sharma","Sukriti Gupta"]

  useEffect(() => {
    setInterval(() => {
      setIndex(index => index < 2 ? index + 1 : 0)
    }, 8000)
  }, [])

  return (
    <div className={styles.bcontainer}>
    <div className={styles.container}>
      <div>
        <div className={styles.logocontainer}>
          <Image className={styles.logo} src={'/logo/newlogo1.png'} width={300} height={300} alt="image"/>
          <div className={styles.logotext}>UpskillEdu<br/>Solutions</div>
        </div>
        <div className={styles.lefttopic}>Our testimonials</div>
        <div className={styles.border}>
          <div className={styles.profilecontainer}><div className={styles.proimg}><Image className={styles.proimg1} src={img[index]} width={300} height={300} alt="image"/></div> <div className={styles.name}>{names[index]}</div></div>
          <div className={styles.testimonialstext}>{alltext[index]}</div>
        </div>
      </div>

      <div>
        <div className={styles.lefttopic}>Join the activities</div>
        <div className={styles.textcontainer}>
            <div className={styles.text1}>Reading Skills</div>
            <div className={styles.text1}>Writing Skills</div>
            <div className={styles.text1}>Speaking Skills</div>
            <div className={styles.text1}>Vocab and Spellings</div>
          </div>
      </div>
      <div>
        <div className={styles.lefttopic}>Get in touch</div>
        <div className={styles.margintop}>
          <div className={styles.getflex}><FaInstagram /><div>Instagram</div></div>
          <div className={styles.getflex}><FaFacebook /><div>Facebook</div></div>
          <div className={styles.getflex}><FaYoutube /><div>Youtube</div></div>
          <div className={styles.getflex}><FaTwitter /><div>Twitter</div></div>
        </div>
      </div>
    </div>
    <div className={styles.copyright}>@ 2024 UpskillEdu Solutions. All rights reserved. Privacy Policy.</div>
    </div>
  )
}
