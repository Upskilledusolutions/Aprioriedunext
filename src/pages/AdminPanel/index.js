import React, { useState } from 'react';
import Left from '../../../components/Admin/left';
import styles from '@/styles/Admin.module.css';

export default function Index() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedSection, setSelectedSection] = useState(null);

  const handleLanguageSelection = (section, language) => {
    setSelectedSection(section);
    setSelectedLanguage(language);
    console.log('Selected Section:', section);
    console.log('Selected Language:', language); // Both section and language will be logged
  };

  return (
    <div className={styles.bigcontainer}>
      <div className={styles.heading}>Admin Dashboard</div>
      <div className={styles.container}>
        <Left onLanguageSelect={handleLanguageSelection} />
        <div className={styles.righttext}>
          {selectedLanguage && selectedSection 
            ? `Selected Section: ${selectedSection}, Language: ${selectedLanguage}` 
            : 'Please select a section and language.'}
        </div>
      </div>
    </div>
  );
}
