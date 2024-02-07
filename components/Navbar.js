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
  const[toggle,setToggle] = useState(false) 
  // const [show1,setShow1] = useState(true)
  const [drop, setDrop] = useState(false)


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

  function clickfn(){
    setDrop(!drop);
    setClick(!click);
    setToggle(!toggle)
  }
  function clickfn2(){
    setClick(!click)
    setToggle(!toggle)
  }

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
          <Link onClick={clickfn2} href='/' className={isActive('/') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul} ${styles.hovereffect}`}>Home</Link>
          {/* <Link onClick={clickfn2} href='/LanguageClub' className={isActive('/LanguageClub') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>Language Club</Link> */}
          <div className={styles.options}>
          <div onClick={()=>setDrop(!drop)} className={`${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>          
            Activities
            <span><IoIosArrowUp className={styles.span}/></span>
          </div>
          <div className={drop ? `${styles.show}` : `${styles.hide}`}>
            <Link className={styles.linked} onClick={clickfn} href='/ReadingSkills'>Reading Club</Link>
            <Link className={styles.linked} onClick={clickfn} href='/LanguageClub'>Language Club</Link>
            <Link className={styles.linked} onClick={clickfn} href='/WritingSkills'>Writing Club</Link>
            <Link className={styles.linked} onClick={clickfn} href='/Olympiad'>Olympiad</Link>
          </div>
          </div>
          {/* <div className={styles.full} onClick={()=> setShow1(!show1)}>
          <label for="cars" className={isActive('/TestPrep') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active} ${styles.drpbtn}`:`${styles.link} ${styles.li} ${styles.ul} ${styles.drpbtn}  ${styles.hovereffect}`}>
          Bookclub activities
            <span><IoIosArrowUp className={styles.span}/></span>
          </label>
              <select id="cars" className={show1 ?`${styles.dropdowncontent}` : `${styles.dropdowncontent1}`}>
              <option>
                <Link href='/ReadingSkills' className={isActive('/ReadingSkills') ? ` ${styles.drplink} ${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.drplink} ${styles.hovereffect}`}>Reading Skills</Link>
              </option>
              <option>
                <Link href='/SpeakingSkills' className={isActive('/SpeakingSkills') ? ` ${styles.drplink} ${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.drplink} ${styles.hovereffect}`}>Speaking Skills</Link>
              </option>
              <option>
                <Link href='/WritingSkills' className={isActive('/WritingSkills') ? ` ${styles.drplink} ${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.drplink} ${styles.hovereffect}`}>Writing Skills</Link>
              </option>
              <option>
                <Link href='/VocabandSpelling' className={isActive('/VocabandSpelling') ? ` ${styles.drplink} ${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.drplink} ${styles.hovereffect}`}>Vocab and Spelling</Link>
              </option>
              </select>
          </div> */}
          {/* <Link onClick={clickfn2} href='/Olympiad' className={isActive('/Olympiad') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>Olympiad</Link> */}
          {/* <Link onClick={clickfn2} href='/Courses' className={isActive('/Courses') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>Courses</Link> */}
          <Link onClick={clickfn2} href='/Eventspage' className={isActive('/Eventspage') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>Events</Link>
          <Link onClick={clickfn2} href='/Testimonials' className={isActive('/Testimonials') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>Testimonials</Link>
          <Link onClick={clickfn2} href='/About' className={isActive('/About') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>About</Link>
          <Link onClick={clickfn2} href='/ContactUs' className={isActive('/ContactUs') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}`:`${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>Contact Us</Link>
          {/* <div>
          <button className={styles.btn}>Apply Now</button>
        </div> */}
        </ul>
        <div className={styles.menubutton} onClick={clickfn2}>
        <div className={styles.btnscontainer}>
          <button onClick={()=>{setToggle(!toggle)}} className={toggle ? `${styles.menu} ${styles.opened}` : `${styles.menu}`} aria-label="Main Menu">
            <svg width="100" height="100" viewBox="0 0 100 100">
                <path className={`${styles.line} ${styles.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path className={`${styles.line} ${styles.line2}`} d="M 20,50 H 80" />
                <path className={`${styles.line} ${styles.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
              </svg>
          </button>
    </div>
        </div>
      </motion.div>
  </div>
  )
}
