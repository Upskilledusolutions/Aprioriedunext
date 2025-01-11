import { useState, useEffect } from 'react';
import styles from '../../../../styles/pdflessons.module.css';
import { cards } from '../../../../Data/Routes/Lessons';
import { FaArrowLeftLong } from "react-icons/fa6";
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function LessonPage() {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [watermarkText, setWatermarkText] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [active, setActive] = useState(true);
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
      import(`../../../../Data/Languagelessons/${somedata.data}`)
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
    return <div>Loading lesson data...</div>;
  }

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <div className={styles.container}>
          <div className={styles.headcont}>
            {/* Ensure lesson[0] exists before accessing properties */}
            <div className={styles.mainheading}>{lesson?.[id-1]?.name || "Lesson Name"}</div>
          </div>
          <p>Level: {lesson?.[id-1]?.level || "N/A"}</p>
          <p className={styles.full} onClick={handleToggleFullScreen}>View in full screen</p>
          <p>{lesson?.[id-1]?.desc || "No description available"}</p>

          <div className={styles.bigcontainer}>
            <div className={styles.btncontainer}>
              <div onClick={() => setActive(true)} className={active ? `${styles.btnc}` : `${styles.btnd}`}>
                PDF
              </div>
              <div onClick={() => setActive(false)} className={active ? `${styles.btnd}` : `${styles.btnc}`}>
                Video
              </div>
            </div>

            {active ? (
              <section className={isFullScreen ? `${styles.sectioncontainer1}` : `${styles.sectioncontainer}`}>
                <iframe
                  src={`${lesson?.[id-1]?.pdf || ""}#toolbar=0&navpanes=0&scrollbar=0`}
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
              </section>
            ) : (
              <div>
                {lesson?.[0]?.video ? (
                  <iframe
                    className={styles.video}
                    width="560"
                    height="315"
                    src={lesson?.[id-1]?.video}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                ) : (
                  <div className={styles.error}>Video not available!</div>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
