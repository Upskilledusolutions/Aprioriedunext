import styles from '../../../styles/pdflessons.module.css';
import { useState } from 'react';
import { data } from '../../../Data/Languagelessons/Russian'; // Import your JSON data
import { FaArrowLeftLong } from "react-icons/fa6";
import Head from 'next/head';

const LessonPage = ({ lesson }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  if (!lesson) {
    return <div>Loading...</div>;
  }

  // Toggle full screen mode
  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    </Head>
    <main>
    <div className={styles.container}>
      <div className={styles.headcont}>
        <div className={styles.mainheading}>{lesson.name}</div>
      </div>
      <p>Level: {lesson.level}</p>
      <p className={styles.full} onClick={handleToggleFullScreen}>View in full screen</p>
      <p>{lesson.desc}</p>

      {/* PDF Rendering Section */}
      <section className={isFullScreen ? `${styles.sectioncontainer1}` : `${styles.sectioncontainer}`}>
        <iframe
          src={`${lesson.pdf}#toolbar=0&navpanes=0&scrollbar=0`}
          className={isFullScreen ? `${styles.section1}` : `${styles.section}`}
          frameBorder="0"
          width="100%"
          height="500px"
        />
        {isFullScreen && (
          <div className={styles.close} onClick={handleToggleFullScreen}>
            <FaArrowLeftLong />Go Back
          </div>
        )}
      </section>
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
