import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import styles from "../../src/styles/Article.module.css";

const ArticleWriting = ({ lesson }) => {
  const [article, setArticle] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_h543lm1", "template_e0enqfn", form.current, "WHP4fLLjX31i21JPb")
      .then(() => {
        alert("Your article has been submitted successfully!");
        setArticle("");
      })
      .catch((error) => {
        alert("Error submitting the article. Please try again.");
      });
  };

  return (
    <div>
      <div className={styles.card}>
      <h3>Article Writing Task</h3>
      <p><strong>Question:</strong> {lesson}</p>
        <form ref={form} onSubmit={sendEmail}>
          <textarea
            className={styles.textarea}
            name="article"
            placeholder="Start writing here..."
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            required
          />
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ArticleWriting;
