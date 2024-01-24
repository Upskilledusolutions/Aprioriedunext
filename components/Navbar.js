import React, { useEffect, useState } from 'react'
import styles from '../src/styles/Navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion"
import { useRouter } from 'next/router';
import MenuButton from './menubutton/MenuButton';

export default function Navbar() {

  const [click,setClick] = useState(true);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [show1,setShow1] = useState(true)


  const router = useRouter();
  const isActive = (href) => router.pathname === href;
  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY && window.scrollY >= 150) { // if scroll down hide the navbar
        setShow(false); 
      } else { // if scroll up show the navbar
        setShow(true);  
      }
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  useEffect(() => {   
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }  

  }, [lastScrollY]);

  // const clicked = () => {
  //   setClick(!click);
  // }  

  return (
    <div className={show ? `${styles.fixed}` : `${styles.none}`}>
      <motion.div 
        initial={{ opacity: 0, y: -232,}}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.topnav}>
        <div>
          <Image className={styles.logo} src={'/logo/newlogo.png'} width={200} height={200} alt="logo" />
        </div>
        {/* <div className={styles.logotext}>
          <span className={styles.logotextblack}></span>
          <span className={styles.logotextblack1}>REVIEW</span> - ISSUE 1
        </div> */}
        {/* <div className={styles.visible}><button className={styles.menu} onClick={clicked}><FaBars /></button></div> */}
        <ul className={click ? `${styles.navlinks1}` : `${styles.navlinks}`}>
          <Link href='/' className={isActive('/') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul} ${styles.hovereffect}`}>Home</Link>
          <Link href='/LanguageClub' className={isActive('/LanguageClub') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>Language Club</Link>
          <div className={styles.full} onClick={()=> setShow1(!show1)}>
          <Link href='/TestPrep' className={isActive('/TestPrep') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active} ${styles.drpbtn}`:`${styles.link} ${styles.li} ${styles.ul} ${styles.drpbtn}  ${styles.hovereffect}`}>
          Bookclub activities
            <span><IoIosArrowUp className={styles.span}/></span>
              <div className={show1 ?`${styles.dropdowncontent}` : `${styles.dropdowncontent1}`}>
              <Link href='/ReadingSkills' className={isActive('/ReadingSkills') ? ` ${styles.drplink} ${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.drplink} ${styles.hovereffect}`}>Reading Skills</Link>
              <Link href='/SpeakingSkills' className={isActive('/SpeakingSkills') ? ` ${styles.drplink} ${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.drplink} ${styles.hovereffect}`}>Speaking Skills</Link>
              <Link href='/VocabandSpelling' className={isActive('/VocabandSpelling') ? ` ${styles.drplink} ${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.drplink} ${styles.hovereffect}`}>Vocab and Spelling</Link>
              <Link href='/WritingSkills' className={isActive('/WritingSkills') ? ` ${styles.drplink} ${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.drplink} ${styles.hovereffect}`}>Writing Skills</Link>
              </div>
          </Link>
          </div>
          <Link href='/Olympiad' className={isActive('/Olympiad') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>Olympiad</Link>
          <Link href='/Courses' className={isActive('/Courses') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>Courses</Link>
          <Link href='/Testimonials' className={isActive('/Testimonials') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>Testimonials</Link>
          <Link href='/About' className={isActive('/About') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>About</Link>
          <Link href='/ContactUs' className={isActive('/ContactUs') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>Contact Us</Link>
          {/* <div>
          <button className={styles.btn}>Apply Now</button>
        </div> */}
        </ul>
        <div className={styles.menubutton} onClick={()=>{setClick(!click)}}><MenuButton /></div>
      </motion.div>
  </div>
  )
}
