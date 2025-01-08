import React, { useEffect, useState } from 'react';
import Left from '../../../components/Admin/left';
import styles from '@/styles/Admin.module.css';
import RightSide from '../../../components/Admin/RightSide';

export default function Index() {
  const [selection, setSelection] = useState({ section: null, language: null });
  const [allCollections, setAllCollections] = useState([]);

  // Fetch lessons data from the API
  useEffect(() => {
    const fetchLessons = async () => {
      if (!selection.section || !selection.language) return; // Prevent fetch if either value is null

      try {
        const response = await fetch(`http://localhost:5000/api/${selection.section}/${selection.language}`);
        const data = await response.json();
        setAllCollections(data);
      } catch (error) {
        console.error('Error fetching lessons:', error);
      }
    };

    fetchLessons();
  }, [selection]); // Trigger useEffect only when selection changes

  const handleLanguageSelection = (section, language) => {
    setSelection({ section, language });
  };

  return (
    <div className={styles.bigcontainer}>
      <div className={styles.heading}>Admin Dashboard</div>
      <div className={styles.container}>
        <Left onLanguageSelect={handleLanguageSelection} />
        <div className={styles.righttext}>
          {selection.section && selection.language 
            ? <RightSide data={allCollections}/> 
            : 'Please select a section and language.'}
        </div>
      </div>
    </div>
  );
}
