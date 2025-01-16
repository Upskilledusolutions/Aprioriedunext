import React, { useState, useEffect, useRef } from "react";
import styles from '../../src/styles/quiz/speechtracker.module.css';
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
  const [speed, setSpeed] = useState(0.75); // Speed state (1 is normal speed)
  const [totalDuration, setTotalDuration] = useState(0); // Total speech duration in seconds
  const [currentTime, setCurrentTime] = useState(0); // Current speech time
  const recognitionRef = useRef(null);
  const utteranceRef = useRef(null); // Added a reference for the current utterance
  const intervalRef = useRef(null); // Reference for interval to track speech progress

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
    setCurrentTime(0);
    if (utteranceRef.current) {
      window.speechSynthesis.cancel(); // Cancel speech if active
    }
    clearInterval(intervalRef.current); // Clear interval when speech is stopped
  };

  const closeModal = () => {
    resetProgress();
  };

  const toggleReadAloud = () => {
    if (isReading) {
      window.speechSynthesis.cancel(); // Stop ongoing speech
      setIsReading(false);
      clearInterval(intervalRef.current); // Clear interval when speech is stopped
    } else {
      if ("speechSynthesis" in window) {
        const chunkSize = 100; // Set chunk size (in characters) - can be adjusted
        const chunks = splitTextIntoChunks(data, chunkSize);
        let currentChunkIndex = 0;
        const totalTime = chunks.join(" ").length / 10; // Approximate duration in seconds
        setTotalDuration(totalTime);

        const speakNextChunk = () => {
          if (currentChunkIndex < chunks.length) {
            const utterance = new SpeechSynthesisUtterance(chunks[currentChunkIndex]);
            utterance.lang = code;
            utterance.rate = speed;
            utteranceRef.current = utterance;

            utterance.onend = () => {
              currentChunkIndex += 1;
              speakNextChunk(); // Recursively call to speak the next chunk
            };

            if (!window.speechSynthesis.speaking) {
              window.speechSynthesis.speak(utterance);
            }
          } else {
            setIsReading(false); // Reset reading state when all chunks are read
            clearInterval(intervalRef.current); // Clear interval when speech ends
          }
        };

        setIsReading(true);
        speakNextChunk(); // Start the first chunk

        intervalRef.current = setInterval(() => {
          setCurrentTime((prevTime) => Math.min(prevTime + 1, totalTime)); // Update time every second
        }, 1000);
      } else {
        setError("Speech Synthesis is not supported in this browser.");
      }
    }
  };

  const splitTextIntoChunks = (text, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < text.length; i += chunkSize) {
      chunks.push(text.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const increaseSpeed = () => {
    setIsReading(false);
    if (utteranceRef.current) {
      window.speechSynthesis.cancel(); // Stop current speech
    }
    setSpeed((prev) => Math.min(prev + 0.1, 2)); // Max speed 2
  };

  const decreaseSpeed = () => {
    setIsReading(false);
    if (utteranceRef.current) {
      window.speechSynthesis.cancel(); // Stop current speech
    }
    setSpeed((prev) => Math.max(prev - 0.1, 0.5)); // Min speed 0.5
  };

  // Handle slider interaction
  const handleSliderChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);

    if (utteranceRef.current) {
      const charIndex = Math.floor((newTime / totalDuration) * data.length);
      utteranceRef.current.text = data.slice(charIndex);
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
          {isListening ? "Stop Speaking" : "Start Speaking"}
        </button>
        <div className={styles.flexbuttons}>
          <button
            className={styles.readAloudButton}
            onClick={toggleReadAloud}
          >
            {isReading ? <HiSpeakerXMark /> : <HiSpeakerWave />}
          </button>
          {/* <div className={styles.timelineContainer}>
        <span className={styles.time}>{Math.floor(currentTime)} / {Math.floor(totalDuration)}s</span>
        <input
          type="range"
          min="0"
          max={totalDuration}
          value={currentTime}
          onChange={handleSliderChange}
          className={styles.slider}
        />
      </div> */}
          <div className={styles.speedControls}>
            <span>Speed {speed.toFixed(1)}x</span>
            <button onClick={decreaseSpeed}>-</button>
            <button onClick={increaseSpeed}>+</button>
          </div>
        </div>
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
