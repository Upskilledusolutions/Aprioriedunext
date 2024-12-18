import React, { useState, useEffect, useRef } from "react";
import styles from '../../src/styles/quiz/speechtracker.module.css'; // Import CSS module

const SpeechTracker = ({ data }) => {
  const [spokenWords, setSpokenWords] = useState(""); // Final recognized words
  const [interimWords, setInterimWords] = useState(""); // Interim (live) recognized words
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState(null);
  const [lastBoldIndex, setLastBoldIndex] = useState(-1); // Tracks the last correctly bolded word
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const recognitionRef = useRef(null);
  const toggleListening = () => {
    setIsListening((prev) => !prev);
  };

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      setError("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognitionRef.current = recognition;
    recognition.lang = "en-US";
    recognition.interimResults = true;
    recognition.continuous = true;

    recognition.onresult = (event) => {
      let interimTranscription = "";
      let finalTranscription = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript.trim();
        if (event.results[i].isFinal) {
          finalTranscription += transcript + " ";
        } else {
          interimTranscription += transcript + " ";
        }
      }

      // Update spokenWords and interimWords
      setSpokenWords((prev) => `${prev} ${finalTranscription}`.trim());
      setInterimWords(interimTranscription.trim());
    };

    recognition.onerror = (event) => {
      setError("Speech Recognition Error: " + event.error);
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => recognition.stop();
  }, [isListening]);

  const highlightWords = () => {
    const spokenArray = (spokenWords + " " + interimWords).toLowerCase().split(/\s+/);
    const paragraphArray = data.split(" ");
    let nextBoldIndex = lastBoldIndex + 1;

    return paragraphArray.map((word, index) => {
      const cleanedWord = word.replace(/[.,?!]/g, "").toLowerCase();

      // Only bold if the word is the next expected one
      if (index === nextBoldIndex && spokenArray.includes(cleanedWord)) {
        setLastBoldIndex(index);
        nextBoldIndex += 1;
      }

      // Words before last bolded word remain bolded
      if (index <= lastBoldIndex) {
        return <strong key={index} className={styles.highlighted}>{word} </strong>;
      }

      // All other words are not bolded
      return <span key={index} className={styles.word}>{word} </span>;
    });
  };

  useEffect(() => {
    // Show the modal after all words are bolded
    if (lastBoldIndex >= data.split(" ").length - 1) {
      setIsModalOpen(true);
    }
  }, [lastBoldIndex, data]);

  // Function to reset progress
  const resetProgress = () => {
    setSpokenWords("");
    setInterimWords("");
    setIsListening(false);
    setLastBoldIndex(-1); // Reset to initial state
    setIsModalOpen(false); // Close the modal
  };

  const closeModal = () => {
    resetProgress(); // Reset progress when modal is closed
  };

  return (
    <div className={styles.speechTrackerContainer}>
      <h1 className={styles.heading}>Speech Tracker</h1>
      <p className={styles.paragraph}>{highlightWords()}</p>
      <button className={`${styles.toggleButton} ${isListening ? styles.listening : ""}`} onClick={toggleListening}>
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
      {error && <p className={styles.errorMessage}>{error}</p>}

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Well Done!</h2>
            <p>You have successfully completed the paragraph.</p>
            <button className={styles.closeModalButton} onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeechTracker;
