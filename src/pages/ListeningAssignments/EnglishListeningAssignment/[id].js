import { useState, useEffect } from 'react';
import styles from '../../../styles/pdflessons.module.css';
import { data } from '../../../Data/ListeningAssignments/English.js'; // Import your JSON data
import { FaArrowLeftLong } from "react-icons/fa6";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { unlockAssignments } from '@/Store';
import ListeningAssignmentWithAudio from '../../../../components/QuestionContent/ListeningAssignment';

const LessonPage = ({ lesson }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [watermarkText, setWatermarkText] = useState('');
  const [active, setActive] = useState(true)

  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const unlockedPages = useSelector((state) => state.unlockedAssignments.unlockedAssignmentsEnglish);
  const subject = 'English';

  useEffect(() => {
    if (id) {
      const currentIndex = data.findIndex((page) => page.id === id);
      if (currentIndex !== -1 && currentIndex < data.length - 1) {
        const nextPageId = data[currentIndex + 1].id;
        if (!unlockedPages.includes(nextPageId)) {
          const multiple = [nextPageId, data[currentIndex + 2]?.id, data[currentIndex + 3]?.id, data[currentIndex + 4]?.id, data[currentIndex + 5]?.id]
          dispatch(unlockAssignments({ subject, lessonId: multiple }));
        }
      }
    }
  }, [id, dispatch, unlockedPages]);

  useEffect(() => {
    const updateWatermarkText = () => {
      const now = new Date();
      setWatermarkText(`© YourSiteName - ${now.toLocaleString()}`);
    };

    const handleKeyDown = (e) => {
      if (e.key === 'PrintScreen' || (e.ctrlKey && e.key === 'p')) {
        updateWatermarkText();
        setTimeout(() => setWatermarkText(''), 3000); // Hide watermark after a few seconds
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

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
            <div className={styles.mainheading}>{lesson.name}</div>
          </div>

          <ListeningAssignmentWithAudio audios={lesson.audios} questionsPerAudio={lesson.questionsPerAudio}/>

        </div>
      </main>
    </>
  );
};

// Fetch static paths for each lesson
export async function getStaticPaths() {
  const paths = data.map((lesson) => ({
    params: { id: lesson.id },
  }));

  return {
    paths,
    fallback: false,
  };
}

// Fetch static props for each lesson
export async function getStaticProps({ params }) {
  const lesson = data.find((item) => item.id === params.id);

  return {
    props: {
      lesson,
    },
  };
}

export default LessonPage;
