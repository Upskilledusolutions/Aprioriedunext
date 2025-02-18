import { useState } from "react";
import styles from "../src/styles/TranslationComponent.module.css";
import TranslationModal from './TranslationModal'

export default function TranslationComponent({frenchText, englishText}) {
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

    // Capture current translation direction and the user's translation
    const currentDirection = isFrenchToEnglish;
    const studentTranslation = inputText;
    const userMessage = { role: "user", content: studentTranslation };

    setMessages((prev) => [...prev, userMessage]);

    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            {
              role: "system",
              content: `You are a French instructor. The ${
                currentDirection ? "French" : "English"
              } paragraph is: ${currentDirection ? frenchText : englishText}. The student's translation is: ${studentTranslation}. Please provide your remarks, point out any errors, and give a percentage of correctness.`,
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

      // Set and show the modal with the AI response
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

    // Save translation and toggle the direction for the next round
    setTranslatedText(studentTranslation);
    setInputText("");
    setIsFrenchToEnglish(!currentDirection);
    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.headingtext}>Translations</div>
        <p className={styles.initialText}>
          {isFrenchToEnglish ? frenchText : englishText}
        </p>
        <textarea
          className={styles.textarea}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={
            isFrenchToEnglish
              ? "Translate to English..."
              : "Traduisez en français..."
          }
        ></textarea>
        <button
          className={styles.button}
          onClick={handleSubmit}
          disabled={loading}
        >
          {loading ? "Loading..." : "Submit"}
        </button>
      </div>

      {/* The modal pop-up displaying the AI response */}
      <TranslationModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        content={aiResponse}
      />
    </div>
  );
}
