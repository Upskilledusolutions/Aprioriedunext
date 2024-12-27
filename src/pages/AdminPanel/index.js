import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa'; // Arrow down icon
import styles from '@/styles/Admin.module.css';

const DropdownSection = ({ sectionName, languages, isActive, onClick, text }) => {
  return (
    <li onClick={() => onClick(sectionName)}>
        <div className={styles.flexing}>{text}       
        <FaChevronDown
            className={`${styles.dropdownIcon} ${isActive ? styles.open : ''}`}
        /></div>
    
        <ul className={isActive ? styles.dropdownMenu : styles.dropdownMenu1}>
          {languages.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
    </li>
  );
};

export default function index() {
  const [activeSection, setActiveSection] = useState(null); // Track selected section
  const [isOpen, setIsOpen] = useState(false); // Toggle dropdown visibility

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      setIsOpen(!isOpen); // Toggle dropdown open/close
    } else {
      setActiveSection(section); // Set active section
      setIsOpen(true); // Open dropdown
    }
  };

  const languages = ['French A1-A2','French B1-B2', 'Spanish A1-A2', 'German A1-A2', 'Italian A1-A2','Russian A1-A2','Dutch A1-A2', 'Korean A1-A2','Japanese A1-A2', 'Danish A1-A2'];

  return (
    <div className={styles.bigcontainer}>
      <div className={styles.heading}>Admin Dashboard</div>
      <div className={styles.container}>
        <ul className={styles.leftlist}>
          <div className={styles.heading2}>Sections</div>
          
          {/* Reusable DropdownSection Component */}
          <DropdownSection
            sectionName="Lessons"
            text="Lessons"
            languages={languages}
            isActive={activeSection === 'Lessons' && isOpen}
            onClick={handleSectionClick}
          />
          <DropdownSection
            sectionName="Exercises"
            text="Exercises"
            languages={languages}
            isActive={activeSection === 'Exercises' && isOpen}
            onClick={handleSectionClick}
          />
          <DropdownSection
            sectionName="Conversations"
            text="Conversations"
            languages={languages}
            isActive={activeSection === 'Conversations' && isOpen}
            onClick={handleSectionClick}
          />
          <DropdownSection
            sectionName="Reading"
            text="Reading Assignments"
            languages={languages}
            isActive={activeSection === 'Reading' && isOpen}
            onClick={handleSectionClick}
          />
          <DropdownSection
            sectionName="Listening"
            text="Lessons Assignments"
            languages={languages}
            isActive={activeSection === 'Listening' && isOpen}
            onClick={handleSectionClick}
          />
          <DropdownSection
            sectionName="ReadingP"
            text="Reading Practice"
            languages={languages}
            isActive={activeSection === 'ReadingP' && isOpen}
            onClick={handleSectionClick}
          />
          <DropdownSection
            sectionName="PracticeTest"
            text="Practice Test"
            languages={languages}
            isActive={activeSection === 'PracticeTest' && isOpen}
            onClick={handleSectionClick}
          />
        </ul>
        <div></div>
      </div>
    </div>
  );
}
