import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import styles from "../../src/styles/Article.module.css";
import { useSelector } from "react-redux";
import Image from "next/image";

const ArticleWriting = ({ lesson, name }) => {
  const { user } = useSelector((state) => state.auth); // Get the user from Redux
  const [article, setArticle] = useState(""); // State to track the article content

  const sendEmail = (e) => {
    e.preventDefault();

    // Prepare form data to send
    const emailData = {
      user: user ? user.name : "Anonymous",  // Assuming user has a 'name' property
      article: article,
      lesson: lesson, // Include formatted lesson
      subject: name // Assuming the 'name' prop is the subject
    };

    // Send email using emailjs
    emailjs
      .send("service_ku47jo7", "template_alm1bl4", emailData, "gda7QFd6-p_NsoIVt")
      .then(() => {
        alert("Your article has been submitted successfully!");
        setArticle(""); // Clear the article input after submission
      })
      .catch((error) => {
        alert("Error submitting the article. Please try again.");
      });
  };

  return (
    <div>
      <div className={styles.card}>
        {/* Render the lesson with formatting */}
        <div className={styles.questiontop}>     
          <div>
            <Image src={'/Article/1.jpg'} width={400} height={400} className={styles.img} alt="image"/>
          </div>   
          <div dangerouslySetInnerHTML={{ __html: lesson }} className={styles.lessonContent} />
        </div>

        <form onSubmit={sendEmail}>
          {/* The article textarea input */}
          <textarea
            className={styles.textarea}
            name="article"
            placeholder="Start writing here..."
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            required
          />
          
          {/* Hidden input to pass the lesson to emailjs */}
          <input type="hidden" name="lesson" value={lesson} />
          <input type="hidden" name="subject" value={name} />

          <button type="submit" className={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ArticleWriting;
