import React, { useEffect, useState } from 'react';
import styles from '../src/styles/Navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowUp } from "react-icons/io";
import { motion } from "framer-motion";
import { useRouter } from 'next/router';
import MenuButton from './menubutton/MenuButton';
import { useDispatch, useSelector } from 'react-redux'; // To access the Redux state
import { FaUserCircle } from "react-icons/fa"; // User icon
import Authmodal from './Authmodal'; // Import the Authmodal component
import { logout } from '../src/Store'

export default function Navbar() {
  const [click, setClick] = useState(true);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [drop, setDrop] = useState(false);
  const [drop1, setDrop1] = useState(false);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const router = useRouter();
  const isActive = (href) => router.pathname === href;

  const dispatch = useDispatch();

   // Access the authenticated user from Redux store
   const { isAuthenticated, user } = useSelector((state) => state.auth);

   const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const handleLogout = () => {
    dispatch(logout()); // Dispatch logout action
    setDropdownVisible(false); // Hide dropdown after logging out
  };

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY >= 150) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  function clickfn() {
    setDrop(!drop);
    setClick(!click);
    setToggle(!toggle);
  }

  function clickfn3() {
    setDrop1(!drop1);
    setClick(!click);
    setToggle(!toggle);
  }

  function clickfn2() {
    setClick(!click);
    setToggle(!toggle);
  }

  // Function to show modal
  function showAuthmodal() {
    setShowModal(true);
  }

  // Function to hide modal
  function hideAuthmodal() {
    setShowModal(false);
  }

  return (
    <div className={show ? `${styles.fixed}` : `${styles.none}`}>
      <motion.div 
        initial={{ opacity: 0, y: -232 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.topnav}
      >
        <div>
          <Image className={styles.logo} src={'/logo/newlogo.png'} width={200} height={200} alt="logo" />
        </div>
        <ul className={click ? `${styles.navlinks1}` : `${styles.navlinks}`}>
          <Link onClick={clickfn2} href='/' className={isActive('/') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}` : `${styles.link} ${styles.li} ${styles.ul} ${styles.hovereffect}`}>Home</Link>
          <div className={styles.options}>
            <div onClick={() => setDrop(!drop)} onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)} className={`${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect} ${styles.activity}`}>
              Courses
              <span><IoIosArrowUp className={styles.span}/></span>
            </div>
            <div onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)} className={drop ? `${styles.show}` : `${styles.hide}`}>
              <Link className={styles.linked} onClick={clickfn} href='/ReadingClub'>Reading Club</Link>
              <Link className={styles.linked} onClick={clickfn} href='/LanguageClub'>Language Club</Link>
              <Link className={styles.linked} onClick={clickfn} href='/WritingClub'>Writing Club</Link>
              <Link className={styles.linked} onClick={clickfn} href='/Olympiad'>Olympiad</Link>
            </div>
          </div>
          <Link onClick={clickfn2} href='/QuizTime' className={isActive('/QuizTime') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}` : `${styles.link} ${styles.li} ${styles.ul} ${styles.hovereffect}`}>Free Quizzes</Link>
          <Link onClick={clickfn2} href='/Eventspage' className={isActive('/Eventspage') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}` : `${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>Events</Link>
          <Link onClick={clickfn2} href='/Testimonials' className={isActive('/Testimonials') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}` : `${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>Testimonials</Link>
          <Link onClick={clickfn2} href='/About' className={isActive('/About') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}` : `${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>About</Link>
          <Link onClick={clickfn2} href='/ContactUs' className={isActive('/ContactUs') ? `${styles.link} ${styles.li} ${styles.ul} ${styles.active}` : `${styles.link} ${styles.li} ${styles.ul}  ${styles.hovereffect}`}>Contact Us</Link>
        </ul>

        {isAuthenticated && user ? (
          <div className={styles.userInfoContainer}>
            <div className={styles.userinfocont}>
            <div className={styles.userInfo} onClick={toggleDropdown}>
              <FaUserCircle className={styles.userIcon} />
              <span className={styles.userId}>{user.name}</span>
              <span className={styles.userIdm}>{user.name.slice(0,14)}{user.name.length > 14 ? '...' : ''}</span>
            </div>
            </div>
            {/* Dropdown menu */}
            {isDropdownVisible && (
              <div className={styles.dropdownMenu}>
                <Link className={styles.logoutButton1} onClick={toggleDropdown} href='/Readnow'>Lessons</Link>
                <Link className={styles.logoutButton1} onClick={toggleDropdown} href='/Exercise'>Exercises</Link>
                <Link className={styles.logoutButton1} onClick={toggleDropdown} href='/Conversations'>Conversations</Link>
                <Link className={styles.logoutButton1} onClick={toggleDropdown} href='/ReadingAssignments'>Reading Assignments</Link>
                <Link className={styles.logoutButton1} onClick={toggleDropdown} href='/TestPrep'>Practice Test</Link>
                <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.members} onClick={showAuthmodal}>Login</div>
        )}

        <div className={styles.menubutton} onClick={clickfn2}>
          <div className={styles.btnscontainer}>
            <button onClick={() => { setToggle(!toggle); }} className={toggle ? `${styles.menu} ${styles.opened}` : `${styles.menu}`} aria-label="Main Menu">
              <svg width="100" height="100" viewBox="0 0 100 100">
                <path className={`${styles.line} ${styles.line1}`} d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                <path className={`${styles.line} ${styles.line2}`} d="M 20,50 H 80" />
                <path className={`${styles.line} ${styles.line3}`} d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
              </svg>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Conditionally render Authmodal */}
      {showModal && <Authmodal hideAuthmodal={hideAuthmodal} />}
    </div>
  );
}
