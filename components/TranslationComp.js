import { useState } from "react";
import styles from "../src/styles/TranslationComponent.module.css";

export default function TranslationComponent() {
    const [inputText, setInputText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [isFrenchToEnglish, setIsFrenchToEnglish] = useState(true);
  
    const frenchText = "Bonjour! Comment allez-vous aujourd’hui? Bonjour! Comment allez-vous aujourd’hui? Bonjour! Comment allez-vous aujourd’hui? Bonjour! Comment allez-vous aujourd’hui? Bonjour! Comment allez-vous aujourd’hui? Bonjour! Comment allez-vous aujourd’hui? Bonjour! Comment allez-vous aujourd’hui?Bonjour! Comment allez-vous aujourd’hui? Bonjour! Comment allez-vous aujourd’hui? Bonjour! Comment allez-vous aujourd’hui?";
    const englishText = "Hello! How are you today?";
  
    const handleSubmit = () => {
      if (inputText.trim() === "") return;
      setTranslatedText(inputText);
      setIsFrenchToEnglish(!isFrenchToEnglish);
      setInputText("");
    };
  
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <p className={styles.initialText}>
            {isFrenchToEnglish ? frenchText : englishText}
          </p>
          <textarea
            className={styles.textarea}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={isFrenchToEnglish ? "Translate to English..." : "Traduisez en français..."}
          ></textarea>
          <button className={styles.button} onClick={handleSubmit}>Submit</button>
          {translatedText && (
            <p className={styles.translatedText}>{translatedText}</p>
          )}
        </div>
      </div>
    );
  }