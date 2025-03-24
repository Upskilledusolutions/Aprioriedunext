import React, { useEffect, useMemo, useState } from 'react';
import Left from '../../../components/Profile/left';
import styles from '@/styles/Profile.module.css';
import LoadingSpinner from '../../../components/loader';
import {cards} from '../../helperfunction/fetchalldatajson'
import { useSelector } from 'react-redux';
import Right from '../../../components/Profile/Right';
import { Getperformance } from '@/helperfunction/Getperformance';

const languages = {'french':'French A1', 'frencha2': 'French A2', 'frenchb1': 'French B1', 'frenchb2': 'French B2', 'spanish' :'Spanish A1','spanisha2': 'Spanish A2', 'spanish b1': 'Spanish B1', 'germana1':'German A1', 'germana2':'German A2', 'germanb1':'German B1', 'germanb2':'German B2'}

export default function index() {
      const [ loading, setLoading ] = useState(false)
      const { user } = useSelector((state) => state.auth);
      const [selection, setSelection] = useState({ section: null, language: languages[user.type]});
      const [userData, setUserData] = useState(null);
      const [lesson, setLesson] = useState({})
      const [error, setError] = useState(null);
      const URL = process.env.NEXT_PUBLIC_BACKENDURL
      const value = selection.language;
      const key = Object.keys(languages).find(key => languages[key] === value);
      const card = cards.find(c => c.code === key);
      const sections = useMemo(() => (["Exercises", "Reading", "Listening", "ReadingP", "Writing", "PracticeTest"]), []);

      useEffect(() => {
        const fetchUserData = async () => {
          try {
            const data = await Getperformance(user.userId);
            setUserData(data);
          } catch (err) {
            console.error(err);
            setError("Failed to load user data");
          }
        };
    
        fetchUserData();
      }, [user.userId]);

      useEffect(() => {
        async function fetchAllLessons() {
          const newLesson = {};
          await Promise.all(
            sections.map(async (section) => {
              const sectionInfo = card[section];
              if (sectionInfo && sectionInfo.file) {
                try {
                  // Adjust file extension if necessary (e.g., .js)
                  const module = await import(`../../Data/${sectionInfo.folder}/${sectionInfo.file}.js`);
                  newLesson[section] = module[sectionInfo.array];
                } catch (error) {
                  console.error(`Error loading ${section} data:`, error);
                  newLesson[section] = null;
                }
              } else {
                newLesson[section] = null;
              }
            })
          );
          setLesson(newLesson);
        }
        
        if (card) {
          fetchAllLessons();
        }
      }, [card, sections]);

      const handleLanguageSelection = (section, language) => {
        setSelection({ section, language });
      };

      console.log("user", userData)

    return (
        <div>
        {loading && <div className={styles.loader}><LoadingSpinner /></div>}
        <div className={styles.bigcontainer}>
          <div className={styles.heading}>
            <div>{user?.name}'s Profile</div>
            {selection?.language && <div className={styles.flex1}>
             <div className={styles.score}>Language: <span>{selection.language}</span></div>
            </div>}
          </div>
          <div className={styles.container}>
            <Left onLanguageSelect={handleLanguageSelection} user={user}/>
            <div className={styles.righttext}>
              <Right selection={selection} lesson={lesson} sections={sections}/>
            </div>
          </div>
        </div>
        </div>
      );
}
