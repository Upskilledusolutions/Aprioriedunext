import React, { useEffect, useState } from 'react';
import styles from '../../src/styles/Admin.module.css';
import { FaChevronDown } from 'react-icons/fa'; // Arrow down icon

const DropdownSection = ({ sectionName, language, isActive, onClick, onLanguageSelect, text }) => {
  return (
    <li onClick={() => onClick(sectionName)}>
      <div className={styles.flexing}>
        {text}       
        <FaChevronDown className={`${styles.dropdownIcon} ${isActive ? styles.open : ''}`} />
      </div>
      <ul className={isActive ? styles.dropdownMenu : styles.dropdownMenu1}>
        {language.map((language, index) => (
          <li 
            key={index} 
            onClick={() => onLanguageSelect(sectionName, language)} // Pass both sectionName and language
          >
            {language}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default function Left({ user, onLanguageSelect }) {
  const [activeSection, setActiveSection] = useState(null); // Track selected section
  const [isOpen, setIsOpen] = useState(false); // Toggle dropdown visibility
  const [language, setLanguage] = useState([])

  const handleSectionClick = (section) => {
    if (activeSection === section) {
      setIsOpen(!isOpen); // Toggle dropdown open/close
    } else {
      setActiveSection(section); // Set active section
      setIsOpen(true); // Open dropdown
    }
  };

  const languages = {'french':'FrenchA1', 'frencha2': 'FrenchA2', 'frenchb1': 'FrenchB1', 'frenchb2': 'FrenchB2', 'frenchc1': 'FrenchC1', 'frenchc2': 'FrenchC2', 'spanish' :'SpanishA1','spanisha2': 'SpanishA2', 'spanishb1': 'SpanishB1', 'spanishb2': 'SpanishB2', 'spanishc1': 'SpanishC1', 'spanishc2': 'SpanishC2', 'germana1':'GermanA1', 'germana2':'GermanA2', 'germanb1':'GermanB1', 'germanb2':'GermanB2', 'germanc1':'GermanC1', 'germanc2':'GermanC2'}

  useEffect(() => {
    if (user) {
      // If the user type is "all", use all language values.
      if (user.type === 'all') {
        setLanguage(Object.values(languages));
      } else {
        // Otherwise, combine user.type with user.next (ensuring user.next is an array)
        const allowedKeys = [user.type, ...((Array.isArray(user.next) && user.next) || [])];
        
        // Filter languages to only include those keys that are in allowedKeys.
        const filteredLanguages = Object.keys(languages)
          .filter(key => allowedKeys.includes(key))
          .map(key => languages[key]);
          
        setLanguage(filteredLanguages);
      }
    }
  }, [user]);

  console.log(language)

  return (
    <ul className={styles.leftlist}>
      <div className={styles.heading2}>Statistics</div>

      {/* Reusable DropdownSection Component */}
      <DropdownSection
        sectionName="Exercises"
        text="Exercises"
        language={language}
        isActive={activeSection === 'Exercises' && isOpen}
        onClick={handleSectionClick}
        onLanguageSelect={onLanguageSelect} // Pass the function to handle language selection
      />
      <DropdownSection
        sectionName="Reading"
        text="Reading Assignments"
        language={language}
        isActive={activeSection === 'Reading' && isOpen}
        onClick={handleSectionClick}
        onLanguageSelect={onLanguageSelect} // Pass the function to handle language selection
      />
      <DropdownSection
        sectionName="Listening"
        text="Lessons Assignments"
        language={language}
        isActive={activeSection === 'Listening' && isOpen}
        onClick={handleSectionClick}
        onLanguageSelect={onLanguageSelect} // Pass the function to handle language selection
      />
      <DropdownSection
        sectionName="ReadingP"
        text="Reading Practice"
        language={language}
        isActive={activeSection === 'ReadingP' && isOpen}
        onClick={handleSectionClick}
        onLanguageSelect={onLanguageSelect} // Pass the function to handle language selection
      />
      <DropdownSection
        sectionName="Writing"
        text="Writing"
        language={language}
        isActive={activeSection === 'Writing' && isOpen}
        onClick={handleSectionClick}
        onLanguageSelect={onLanguageSelect} // Pass the function to handle language selection
      />
      <DropdownSection
        sectionName="PracticeTest"
        text="Practice Test"
        language={language}
        isActive={activeSection === 'PracticeTest' && isOpen}
        onClick={handleSectionClick}
        onLanguageSelect={onLanguageSelect} // Pass the function to handle language selection
      />
    </ul>
  );
}
