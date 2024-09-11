// pages/[id].js

import styles from '../../../styles/pdflessons.module.css'
import { useState } from 'react';
import { data } from '../../../Data/Languagelessons/french'; // Import your JSON data
import { FaArrowLeftLong } from "react-icons/fa6";

const LessonPage = ({ lesson }) => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  if (!lesson) {
    return <div>Loading...</div>;
  }

  // Toggle full screen mode
  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  const embedStyle = {
    width: '100%',
    height: '100%',
  };

  return (
    <div className={styles.container}>
       <div className={styles.headcont}><div className={styles.mainheading}>{lesson.name}</div></div>
      <p>Level: {lesson.level}</p>
      <p className={styles.full} onClick={handleToggleFullScreen}>View in full screen</p>
      <p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem
ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</p>

      {/* PDF Rendering Section */}
      <section className={isFullScreen ? `${styles.sectioncontainer1}` : `${styles.sectioncontainer}`}>
        <embed
          src={lesson.pdf}
          type="application/pdf"
          className={isFullScreen ? `${styles.section1}` : `${styles.section}`}
        />
        {isFullScreen && <div className={styles.close} onClick={handleToggleFullScreen}><FaArrowLeftLong />Go Back</div>}
      </section>
    </div>
  );
};

// Fetch static paths for each lesson
export async function getStaticPaths() {
  const paths = data.map((lesson) => ({
    params: { id: lesson.id },
  }));

  return {
    paths,
    fallback: false, // Return 404 if path not found
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


