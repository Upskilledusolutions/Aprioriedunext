import { useState, useEffect } from 'react';
import styles from '../../../styles/pdflessons.module.css';
import { data } from '../../../Data/Languagelessons/Danish'; // Import your JSON data
import { FaArrowLeftLong } from "react-icons/fa6";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { unlockLesson } from '@/Store';

const LessonPage = ({ lesson }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [watermarkText, setWatermarkText] = useState('');
  const [active, setActive] = useState(true)

  const router = useRouter();
  const { id } = router.query;

  const dispatch = useDispatch();
  const unlockedPages = useSelector((state) => state.unlockedLessons.unlockedLessonsDanish);
  const subject = 'Danish';

  useEffect(() => {
    if (id) {
      const currentIndex = data.findIndex((page) => page.id === id);
      if (currentIndex !== -1 && currentIndex < data.length - 1) {
        const nextPageId = data[currentIndex + 1].id;
        if (!unlockedPages.includes(nextPageId)) {
          const multiple = [nextPageId, data[currentIndex + 2]?.id, data[currentIndex + 3]?.id, data[currentIndex + 4]?.id, data[currentIndex + 5]?.id]
          dispatch(unlockLesson({ subject, lessonId: multiple }));
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
          <p>Level: {lesson.level}</p>
          <p className={styles.full} onClick={handleToggleFullScreen}>View in full screen</p>
          <p>{lesson.desc}</p>

          <div className={styles.bigcontainer}>
            <div className={styles.btncontainer}>
              <div onClick={() => setActive(true)} className={active ? `${styles.btnc}` : `${styles.btnd}`}>PDF</div>
              <div onClick={() => setActive(false)} className={active ? `${styles.btnd}` : `${styles.btnc}`}>Video</div>
            </div>
         {active ?          <section className={isFullScreen ? `${styles.sectioncontainer1}` : `${styles.sectioncontainer}`}>
            <iframe
              src={`${lesson.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
              className={isFullScreen ? `${styles.section1}` : `${styles.section}`}
              frameBorder="0"
              width="100%"
              height="500px"
            />
            {isFullScreen && (
              <div className={styles.close} onClick={handleToggleFullScreen}>
                <FaArrowLeftLong /> Go Back
              </div>
            )}
            {isFullScreen && watermarkText && (
              <div className={styles.watermark}>{watermarkText}</div>
            )}
          </section> : <div> {lesson.video ? <iframe className={styles.video} width="560" height="315" src={lesson.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> : <div className={styles.error}>Video not available!</div>}</div>} 
          </div>

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
