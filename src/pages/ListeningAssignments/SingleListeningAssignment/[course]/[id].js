import { useState, useEffect } from 'react';
import { cards } from '../../../../Data/Routes/ListeningAssignments'
import styles from '../../../../styles/pdflessons.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ListeningAssignmentWithAudio from '../../../../../components/QuestionContent/ListeningAssignment';

const LessonPage = () => {
    const [isClient, setIsClient] = useState(false);
    const [lesson, setLesson] = useState(null);
    const router = useRouter();
    const { course, id } = router.query;

      // Find lesson metadata based on `id`
      const somedata = cards.find((data) => data.link2 === course);

    useEffect(() => {
        // Ensure client-side rendering
        setIsClient(true);
    
        if (somedata) {
          // Dynamically import lesson data
          import(`../../../../Data/ListeningAssignments/${somedata.data}`)
            .then((module) => {
              setLesson(module.data);
            })
            .catch((error) => {
              console.error('Error loading lesson data:', error);
            });
        }
      }, [somedata]);
    
      if (!isClient || !somedata) {
        return <div>Loading...</div>;
      }
    
    
      if (!lesson) {
        return <div>Loading...</div>;
      }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.headcont}>
            <div className={styles.mainheading}>{lesson[id-1].name}</div>
          </div>

          <ListeningAssignmentWithAudio 
          id ={id} 
          subject={somedata.subject} 
          audios={lesson[id-1].audios} 
          questionsPerAudio={lesson[id-1].questionsPerAudio}/>

        </div>
      </main>
    </>
  );
};

export default LessonPage;
