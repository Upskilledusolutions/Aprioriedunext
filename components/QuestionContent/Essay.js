import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import styles from "../../src/styles/Article.module.css";

const EssayWriting = ({ lesson }) => {
  const [essay, setEssay] = useState("");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_h543lm1", "template_e0enqfn", form.current, "WHP4fLLjX31i21JPb")
      .then(() => {
        alert("Your essay has been submitted successfully!");
        setEssay("");
      })
      .catch((error) => {
        alert("Error submitting the essay. Please try again.");
      });
  };

  return (
    <div>
      <div className={styles.card}>
      <h3>Essay Writing Task</h3>
      <p><strong>Question:</strong> {lesson}</p>
        <form ref={form} onSubmit={sendEmail}>
          <textarea
            className={styles.textarea}
            name="essay"
            placeholder="Start writing here..."
            value={essay}
            onChange={(e) => setEssay(e.target.value)}
            required
          />
          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EssayWriting;
