import { useState, useEffect } from 'react';
import styles from '../../../../styles/pdflessons.module.css';
import { cards } from '../../../../Data/Routes/ReadingAssignments'
import Head from 'next/head';
import { useRouter } from 'next/router';
import ReadingAssignment from '../../../../../components/QuestionContent/ReadingAssignment';

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
      import(`../../../../Data/ReadingAssignments/${somedata.data}`)
        .then((module) => {
          setLesson(module.data);
        })
        .catch((error) => {
          console.error('Error loading lesson data:', error);
        });
    }
  }, [somedata]);

  console.log(lesson)

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

          <ReadingAssignment 
          id ={id} 
          subject={somedata.subject} 
          Title={lesson?.[id-1].Title} 
          readingText={lesson[id-1].readingText} 
          questions={lesson[id-1].questions}
          />

        </div>
      </main>
    </>
  );
};

export default LessonPage;
