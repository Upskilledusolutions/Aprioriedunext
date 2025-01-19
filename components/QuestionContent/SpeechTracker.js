import React, { useState, useEffect, useRef } from "react";
import styles from '../../src/styles/quiz/speechtracker.module.css';
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";

// Function to calculate the similarity percentage between two words
const getSimilarity = (word1, word2) => {
  let longer = word1;
  let shorter = word2;
  if (word1.length < word2.length) {
    longer = word2;
    shorter = word1;
  }

  const longerLength = longer.length;
  if (longerLength === 0) {
    return 1.0; // both words are empty
  }

  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
};

// Function to calculate the edit distance (Levenshtein distance)
const editDistance = (s1, s2) => {
  const l1 = s1.length;
  const l2 = s2.length;
  const dp = Array(l1 + 1).fill(null).map(() => Array(l2 + 1).fill(0));

  for (let i = 0; i <= l1; i++) dp[i][0] = i;
  for (let j = 0; j <= l2; j++) dp[0][j] = j;

  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      const cost = s1[i - 1] === s2[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }

  return dp[l1][l2];
};



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

      // Compare spoken words with a similarity threshold of 60%
      const isSimilar = spokenArray.some(spokenWord => getSimilarity(spokenWord, cleanedWord) >= 0.6);
      console.log(isSimilar)
      if (index === nextBoldIndex && isSimilar) {
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

  useEffect(() => {
    // Cleanup function to stop the speech if the page is navigated away
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel(); // Cancel any ongoing speech
      }
    };
  }, []); // Empty dependency array to run only on component unmount

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
