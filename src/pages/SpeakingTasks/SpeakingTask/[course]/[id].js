import React, { useEffect, useState } from "react";
import { cards } from "../../../../Data/Routes/SpeakingTask";
import { useRouter } from "next/router";
import styles from "../../../../styles/Article.module.css";
import Listen from "../../../../../components/QuestionContent/SpeakingTaskcomp";

export default function Index() {
  const [isClient, setIsClient] = useState(false); // Client-side state to prevent hydration issues
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
      import(`../../../../Data/SpeakingTaskdata/${somedata.data}`)
        .then((module) => {
          setLesson(module.data);
        })
        .catch((error) => {
          console.error("Error loading lesson data:", error);
        });
    }
  }, [somedata]);

  if (!isClient || !somedata) {
    return <div>Loading...</div>;
  }

  if (!lesson) {
    return <div>Loading lesson data...</div>;
  }

  return (
    <div className={styles.container}>
      <Listen name={lesson[id - 1].name} questions={lesson[id-1]?.Questions}/>
    </div>
  );
}
