import { useState } from "react";
import { FaSyncAlt, FaCopy, FaTrashAlt, FaExchangeAlt } from "react-icons/fa";
import styles from "../src/styles/TranslationComponent.module.css";
import TranslationModal from "./TranslationModal";

export default function TranslationComponent({
  heading,
  frenchText,
  englishText,
}) {
    const extractedLanguage = heading ? heading.split(" ")[0] : "French"; 
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [isFrenchToEnglish, setIsFrenchToEnglish] = useState(true);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async () => {
    if (inputText.trim() === "") return;

    setLoading(true);
    const currentDirection = isFrenchToEnglish;
    const studentTranslation = inputText;
    const userMessage = { role: "user", content: studentTranslation };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `You are a ${extractedLanguage} instructor. The ${
                currentDirection ? extractedLanguage : "English"
              } paragraph is: ${
                currentDirection ? frenchText : englishText
              }. The student's translation is: ${studentTranslation}. Please provide your remarks, point out any errors, and give a percentage of correctness.`,
            },
            ...messages,
            userMessage,
          ],
        }),
      });
      const data = await response.json();
      const botMessage = {
        role: "assistant",
        content: data.choices[0].message.content,
      };

      setMessages((prev) => [...prev, botMessage]);
      setAiResponse(botMessage.content);
      setShowModal(true);
    } catch (error) {
      console.error("Error fetching response:", error);
      const errorMessage = {
        role: "assistant",
        content: "Sorry, something went wrong. Please try again later.",
      };
      setMessages((prev) => [...prev, errorMessage]);
      setAiResponse(errorMessage.content);
      setShowModal(true);
    }

    setTranslatedText(studentTranslation);
    setInputText("");
    setIsFrenchToEnglish(!currentDirection);
    setLoading(false);
  };

  const handleClear = () => {
    setInputText("");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(aiResponse);
  };

  const swapLanguages = () => {
    setIsFrenchToEnglish((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>{heading}</h2>
          <button className={styles.swapBtn} onClick={swapLanguages}>
            <h2 className={styles.rightside}>
              {isFrenchToEnglish ? extractedLanguage : "English"}
              <FaExchangeAlt className={styles.swapIcon} />
              {isFrenchToEnglish ? "English" : extractedLanguage}
            </h2>
          </button>
        </div>
        <p className={styles.initialText}>
          {isFrenchToEnglish ? frenchText : englishText}
        </p>
        <textarea
          className={styles.textarea}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={
            isFrenchToEnglish
              ? "Please translate the above text to english..."
              : "Please translate the above text to French..."
          }
        ></textarea>
        <div className={styles.buttonGroup}>
          <button
            className={styles.button}
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
          <button className={styles.buttonAlt} onClick={handleClear}>
            <FaTrashAlt className={styles.icon} /> Clear
          </button>
          <button className={styles.buttonAlt} onClick={handleCopy}>
            <FaCopy className={styles.icon} /> Copy Response
          </button>
        </div>
      </div>

      {/* Modal displaying the AI response */}
      <TranslationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        content={aiResponse}
      />
    </div>
  );
}
