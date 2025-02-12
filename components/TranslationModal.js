import React from "react";
import styles from "../src/styles/TranslationComponent.module.css";

export default function AiResponseModal({ isOpen, onClose, content }) {
  if (!isOpen) return null;
  
  // Process the content to replace **text** with <strong>text</strong>
  const processedContent = content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  
  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.headingtext}>Feedback</div>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <div 
          className={styles.content} 
          // Render the processed content with HTML formatting preserved.
          dangerouslySetInnerHTML={{ __html: processedContent }}
        />
      </div>
    </div>
  );
}
