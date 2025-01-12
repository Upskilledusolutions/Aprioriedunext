import React, { useState, useEffect, useRef } from "react";
import styles from '../../src/styles/quiz/speechtracker.module.css'; // Import CSS module
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";

const SpeechTracker = ({ data, code }) => {
  const [spokenWords, setSpokenWords] = useState(""); // Final recognized words
  const [interimWords, setInterimWords] = useState(""); // Interim (live) recognized words
  const [isListening, setIsListening] = useState(false);
  const [isReading, setIsReading] = useState(false); // Tracks whether speech synthesis is active
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
    recognition.lang = code;
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

      if (index === nextBoldIndex && spokenArray.includes(cleanedWord)) {
        setLastBoldIndex(index);
        nextBoldIndex += 1;
      }

      if (index <= lastBoldIndex) {
        return <strong key={index} className={styles.highlighted}>{word} </strong>;
      }

      return <span key={index} className={styles.word}>{word} </span>;
    });
  };

  useEffect(() => {
    if (lastBoldIndex >= data.split(" ").length - 1) {
      setIsModalOpen(true);
    }
  }, [lastBoldIndex, data]);

  const resetProgress = () => {
    setSpokenWords("");
    setInterimWords("");
    setIsListening(false);
    setLastBoldIndex(-1);
    setIsModalOpen(false);
  };

  const closeModal = () => {
    resetProgress();
  };

  const toggleReadAloud = () => {
    if (isReading) {
      // Stop ongoing speech synthesis
      window.speechSynthesis.cancel();
      setIsReading(false);
    } else {
      // Start speech synthesis
      if ("speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(data);
        utterance.lang = code;
        window.speechSynthesis.speak(utterance);

        utterance.onend = () => {
          setIsReading(false); // Reset reading state when speech ends
        };

        setIsReading(true);
      } else {
        setError("Speech Synthesis is not supported in this browser.");
      }
    }
  };

  return (
    <div className={styles.speechTrackerContainer}>
      <h1 className={styles.heading}>Speech Tracker</h1>
      <p className={styles.paragraph}>{highlightWords()}</p>
      <div className={styles.flex}>
      <button
        className={`${styles.toggleButton} ${isListening ? styles.listening : ""}`}
        onClick={toggleListening}
      >
        {isListening ? "Stop Listening" : "Start Listening"}
      </button>
      <button
        className={styles.readAloudButton}
        onClick={toggleReadAloud}
      >
        {isReading ? <HiSpeakerXMark/> : <HiSpeakerWave />}
      </button>
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}

      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Well Done!</h2>
            <p>You have successfully completed the paragraph.</p>
            <button className={styles.closeModalButton} onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SpeechTracker;