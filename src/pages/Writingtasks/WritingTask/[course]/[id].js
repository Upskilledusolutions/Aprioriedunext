import React, { useEffect, useState } from 'react';
import { cards } from '../../../../Data/Routes/WritingTask';
import { useRouter } from 'next/router';
import Article from '../../../../../components/QuestionContent/Article';
import Essay from '../../../../../components/QuestionContent/Essay';
import styles from "../../../../styles/Article.module.css";

export default function Index() {
  const [isClient, setIsClient] = useState(false); // Client-side state to prevent hydration issues
  const [lesson, setLesson] = useState(null);
  const [view, setView] = useState("article"); // State to switch between Article and Essay

  const router = useRouter();
  const { course, id } = router.query;

  // Find lesson metadata based on `id`
  const somedata = cards.find((data) => data.link2 === course);

  useEffect(() => {
    // Ensure client-side rendering
    setIsClient(true);

    if (somedata) {
      // Dynamically import lesson data
      import(`../../../../Data/WritingTaskdata/${somedata.data}`)
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
  
  return (
    <div className={styles.container} style={{ textAlign: "center", padding: "20px" }}>
      <h2 className={styles.selectheading}>{lesson[id-1].name}</h2>
      
      <div style={{ marginBottom: "20px" }}>
        <button 
          onClick={() => setView("article")} 
          style={{
            padding: "10px 20px",
            margin: "5px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: view === "article" ? "#e74c3c" : "#ccc",
            color: "white",
            fontWeight: "bold"
          }}
        >
          Report
        </button>
        <button 
          onClick={() => setView("essay")} 
          style={{
            padding: "10px 20px",
            margin: "5px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            background: view === "essay" ? "#e74c3c" : "#ccc",
            color: "white",
            fontWeight: "bold"
          }}
        >
          Essay
        </button>
      </div>

      {view === "article" ? <Article lesson={lesson[id-1].articleQuestions} name={lesson[id-1].name}/> : <Essay lesson={lesson[id-1].essayQuestions} name={lesson[id-1].name}/>}
    </div>
  );
}
