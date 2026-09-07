import React, { useEffect, useState } from 'react';
import styles from '../src/styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { FaUserCircle } from "react-icons/fa";
import Authmodal from './Authmodal';
import { logout } from '../src/Store'
import Paymentmodal from './Paymentmodal'

export default function Navbar() {
  const [click, setClick] = useState(true), [show, setShow] = useState(true), [lastScrollY, setLastScrollY] = useState(0), [toggle, setToggle] = useState(false), [drop, setDrop] = useState(false), [drop1, setDrop1] = useState(false), [showModal, setShowModal] = useState(false), [showPaymodel, setShowPaymodel] = useState(false), [isDropdownVisible, setDropdownVisible] = useState(false);
  const router = useRouter(); const isActive = (href) => router.pathname === href; const dispatch = useDispatch(); const { isAuthenticated, user } = useSelector((state) => state.auth);
  const toggleDropdown = () => setDropdownVisible(!isDropdownVisible);
  const handleLogout = () => { window.location.href = '/'; dispatch(logout()); setDropdownVisible(false); };
  const controlNavbar = () => { if (typeof window !== 'undefined') { if (window.scrollY > lastScrollY && window.scrollY >= 150) setShow(false); else setShow(true); setLastScrollY(window.scrollY); } };
  useEffect(() => { if (typeof window !== 'undefined') { window.addEventListener('scroll', controlNavbar); return () => window.removeEventListener('scroll', controlNavbar); } }, [lastScrollY]);
  function clickfn() { setDrop(!drop); setClick(!click); setToggle(!toggle); }
  function clickfn2() { setClick(!click); setToggle(!toggle); }
  function showAuthmodal() { setShowModal(true); } function hideAuthmodal() { setShowModal(false); }
  function hidepaymodal(){ setShowPaymodel(!showPaymodel) } function showpaymodel(){ setShowPaymodel(!showPaymodel) }
  return (
    <div className={show ? `${styles.fixed}` : `${styles.none}`}>
      <motion.div initial={{ opacity: 0, y: -232 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className={styles.topnav}>
        <div><Image className={styles.logo} src={'/logo/newlogo.png'} width={200} height={200} alt="logo" /></div>
        <ul className={click ? `${styles.navlinks1}` : `${styles.navlinks}`}>
          <Link onClick={clickfn2} href='/' className={isActive('/') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}` : `${styles.link} ${styles.li} ${styles.ul} ${styles.hovereffect}`}>Home</Link>
          <div className={styles.options}>
            <div onClick={() => setDrop(!drop)} onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)} className={`${styles.link} ${styles.li} ${styles.ul} ${styles.hovereffect} ${styles.activity}`}>Courses <span><IoIosArrowUp className={styles.span}/></span></div>
            <div onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)} className={drop ? `${styles.show}` : `${styles.hide}`}>
              <Link className={styles.linked} onClick={clickfn} href='/ReadingClub'>Reading Skills</Link>
              <Link className={styles.linked} onClick={clickfn} href='/LanguageClub'>Language Skills</Link>
              <Link className={styles.linked} onClick={clickfn} href='/WritingClub'>Writing Skills</Link>
              <Link className={styles.linked} onClick={clickfn} href='/Reasoning'>Reasoning Skills</Link>
              <Link className={styles.linked} onClick={clickfn} href='/Reasoning/Quantitative'>↳ Quantitative Skills</Link>
              <Link className={styles.linked} onClick={clickfn} href='/Reasoning/Verbal'>↳ Verbal Skills</Link>
            </div>
          </div>
          <Link onClick={clickfn2} href='/QuizTime' className={styles.link}>Free Quizzes</Link><Link onClick={clickfn2} href='/Eventspage' className={styles.link}>Events</Link><Link onClick={clickfn2} href='/games' className={styles.link}>Games</Link><Link onClick={clickfn2} href='/Testimonials' className={styles.link}>Testimonials</Link><Link onClick={clickfn2} href='/About' className={styles.link}>About</Link><Link onClick={clickfn2} href='/ContactUs' className={styles.link}>Contact Us</Link>
        </ul>
        <div className={styles.endflex}><div className={styles.Joinnow} onClick={showpaymodel}>Join Now</div>{isAuthenticated && user ? <div className={styles.userInfoContainer}><div className={styles.userInfo} onClick={toggleDropdown}><FaUserCircle className={styles.userIcon}/><span className={styles.userId}>{user.name}</span><span className={styles.userIdm}>{user?.name?.slice(0,8)}{user?.name?.length > 14 ? '...' : ''}</span></div>{isDropdownVisible && <div className={styles.dropdownMenu}><Link href={'/Profile'} className={styles.logoutButton} onClick={toggleDropdown}>Profile</Link><Link href={'/User'} className={styles.logoutButton} onClick={toggleDropdown}>Courses</Link><Link href={'/Forum'} className={styles.logoutButton} onClick={toggleDropdown}>Forum</Link><button className={styles.logoutButton} onClick={handleLogout}>Logout</button></div>}</div> : <div className={styles.members} onClick={showAuthmodal}>Login</div>}</div>
        <div className={styles.menubutton} onClick={clickfn2}><div className={styles.btnscontainer}><button onClick={() => setToggle(!toggle)} className={toggle ? `${styles.menu} ${styles.opened}` : `${styles.menu}`} aria-label="Main Menu"><svg width="100" height="100" viewBox="0 0 100 100"><path className={`${styles.line} ${styles.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" /><path className={`${styles.line} ${styles.line2}`} d="M 20,50 H 80" /><path className={`${styles.line} ${styles.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" /></svg></button></div></div>
      </motion.div>
      {isDropdownVisible && <div onClick={toggleDropdown} className={styles.blankspace}/>} {showModal && <Authmodal hideAuthmodal={hideAuthmodal} showpaymodel={showpaymodel}/>} {showPaymodel && <Paymentmodal hidepaymodal={hidepaymodal} />}
    </div>
  );
}
