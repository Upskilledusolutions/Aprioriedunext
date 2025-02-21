import React, { useState, useEffect, useRef } from "react";
import styles from "../../src/styles/quiz/speechtracker.module.css";
import { HiSpeakerWave } from "react-icons/hi2";
import { HiSpeakerXMark } from "react-icons/hi2";
import { MdHearing, MdHearingDisabled } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addFinishedQuiz } from "@/Store";

// ---------- Utility Functions ----------
const getSimilarity = (word1, word2) => {
  let longer = word1;
  let shorter = word2;
  if (word1.length < word2.length) {
    longer = word2;
    shorter = word1;
  }
  const longerLength = longer.length;
  if (longerLength === 0) return 1.0;
  return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
};

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

// ---------- Sub-Component: LineSpeechTracker ----------
// This component handles one line's speech tracking and controls.
const LineSpeechTracker = ({ 
  line, 
  lineIndex, 
  code, 
  isActive, 
  onLineComplete 
}) => {
  const [spokenWords, setSpokenWords] = useState("");
  const [interimWords, setInterimWords] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isReading, setIsReading] = useState(false);
  const [error, setError] = useState(null);
  const [lastBoldIndex, setLastBoldIndex] = useState(-1);
  const [speed, setSpeed] = useState(0.75);
  const [totalDuration, setTotalDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isStop, setIsStop] = useState(false);

  const recognitionRef = useRef(null);
  const utteranceRef = useRef(null);
  const intervalRef = useRef(null);

  // Only allow recording if this line is active.
  const toggleListening = () => {
    if (!isActive) return;
    setIsListening((prev) => !prev);
  };

  // If this line loses active status, force-stop its recorder.
  useEffect(() => {
    if (!isActive && isListening) {
      setIsListening(false);
      if (recognitionRef.current) recognitionRef.current.stop();
    }
  }, [isActive, isListening]);

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
    if (isListening && isActive) recognition.start();
    else recognition.stop();
    return () => recognition.stop();
  }, [isListening, code, isActive]);

  // Highlight words as the user speaks.
  const highlightWords = () => {
    const spokenArray = (spokenWords + " " + interimWords)
      .toLowerCase()
      .split(/\s+/);
    const words = line.split(" ");
    let nextBoldIndex = lastBoldIndex + 1;
    return words.map((word, index) => {
      const cleanedWord = word.replace(/[.,?!]/g, "").toLowerCase();
      // Only if the current word is the next expected word and there's a match.
      const isSimilar = spokenArray.some((sw) => getSimilarity(sw, cleanedWord) >= 0.4);
      if (index === nextBoldIndex && isSimilar) {
        setLastBoldIndex(index);
        nextBoldIndex++;
      }
      return index <= lastBoldIndex ? (
        <strong key={index} className={styles.highlighted}>
          {word}{" "}
        </strong>
      ) : (
        <span key={index} className={styles.word}>
          {word}{" "}
        </span>
      );
    });
  };

  // When all words in this line are highlighted, stop recording and notify parent.
  useEffect(() => {
    const wordCount = line.split(" ").length;
    if (lastBoldIndex >= wordCount - 1 && isListening) {
      setIsListening(false);
      if (recognitionRef.current) recognitionRef.current.stop();
      onLineComplete(lineIndex);
    }
  }, [lastBoldIndex, line, lineIndex, isListening, onLineComplete]);

  const resetProgress = () => {
    setSpokenWords("");
    setInterimWords("");
    setIsListening(false);
    setLastBoldIndex(-1);
    setCurrentTime(0);
    if (utteranceRef.current) window.speechSynthesis.cancel();
    clearInterval(intervalRef.current);
  };

  // Read aloud functionality for this line.
  const toggleReadAloud = () => {
    if (isReading) {
      window.speechSynthesis.cancel();
      setIsReading(false);
      clearInterval(intervalRef.current);
    } else {
      if ("speechSynthesis" in window) {
        const chunkSize = 100;
        const chunks = splitTextIntoChunks(line, chunkSize);
        let currentChunkIndex = 0;
        const totalTime = chunks.join(" ").length / 10;
        setTotalDuration(totalTime);
        const speakNextChunk = () => {
          if (currentChunkIndex < chunks.length) {
            const utterance = new SpeechSynthesisUtterance(chunks[currentChunkIndex]);
            utterance.lang = code;
            utterance.rate = speed;
            utteranceRef.current = utterance;
            utterance.onend = () => {
              currentChunkIndex++;
              speakNextChunk();
            };
            if (!window.speechSynthesis.speaking) {
              window.speechSynthesis.speak(utterance);
            }
          } else {
            setIsReading(false);
            clearInterval(intervalRef.current);
          }
        };
        setIsReading(true);
        speakNextChunk();
        intervalRef.current = setInterval(() => {
          setCurrentTime((prev) => Math.min(prev + 1, totalTime));
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
    if (utteranceRef.current) window.speechSynthesis.cancel();
    setSpeed((prev) => Math.min(prev + 0.1, 2));
  };

  const decreaseSpeed = () => {
    setIsReading(false);
    if (utteranceRef.current) window.speechSynthesis.cancel();
    setSpeed((prev) => Math.max(prev - 0.1, 0.5));
  };

  const handleSliderChange = (e) => {
    const newTime = e.target.value;
    setCurrentTime(newTime);
    if (utteranceRef.current) {
      const charIndex = Math.floor((newTime / totalDuration) * line.length);
      utteranceRef.current.text = line.slice(charIndex);
    }
  };

  useEffect(() => {
    return () => {
      if (window.speechSynthesis) window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <div className={styles.lineTrackerContainer}>
      <p className={styles.paragraph}>{highlightWords()}</p>
      <div className={styles.flex}>
        <div className={styles.btnsflex}>
          {isActive && (isListening ? <MdHearing className={styles.hrbtns} /> : <MdHearingDisabled className={styles.hrbtns} />)}
          {isActive && (
            <>
              {isListening ? (
                <>
                  <button
                    className={styles.toggleButton}
                    onClick={() => {
                      setIsListening(false);
                      setIsStop(true);
                    }}
                  >
                    Stop Speaking
                  </button>
                  <button
                    className={styles.toggleButton}
                    onClick={() => {
                      resetProgress();
                      setIsListening(true);
                    }}
                  >
                    Restart
                  </button>
                </>
              ) : isStop ? (
                <>
                  <button
                    className={styles.toggleButton}
                    onClick={() => {
                      setIsListening(true);
                      setIsStop(false);
                    }}
                  >
                    Resume Speaking
                  </button>
                  <button className={styles.toggleButton} onClick={resetProgress}>
                    Restart
                  </button>
                </>
              ) : (
                <button
                  className={styles.toggleButton}
                  onClick={() => {
                    setIsListening(true);
                    setIsStop(false);
                  }}
                >
                  Start Speaking
                </button>
              )}
            </>
          )}
        </div>
        <div className={styles.flexbuttons}>
          {isActive && (
            <>
              <button className={styles.readAloudButton} onClick={toggleReadAloud}>
                {isReading ? <HiSpeakerXMark /> : <HiSpeakerWave />}
              </button>
              <div className={styles.speedControls}>
                <button onClick={decreaseSpeed}>-</button>
                <span>{speed.toFixed(2)}x</span>
                <button onClick={increaseSpeed}>+</button>
              </div>
            </>
          )}
        </div>
      </div>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

// ---------- Main Component: SpeechTracker ----------
// Expects data to be an array of lines. Only the active line’s recorder is enabled.
const SpeechTracker = ({ id, subject, data, code }) => {
  const [activeLineIndex, setActiveLineIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  // When an active line completes, advance to the next line (or show modal if done).
  const handleLineComplete = (lineIndex) => {
    if (lineIndex === activeLineIndex) {
      const nextLine = activeLineIndex + 1;
      if (nextLine < data.length) {
        setActiveLineIndex(nextLine);
      } else {
        dispatch(addFinishedQuiz({ questionType: "MCQs", exercise: id, language: subject }));
        setIsModalOpen(true);
      }
    }
  };

  // Reset progress when the modal is closed.
  const closeModal = () => {
    setActiveLineIndex(0);
    setIsModalOpen(false);
  };

  return (
    <div className={styles.speechTrackerContainer}>
      <h1 className={styles.heading}>Speech Tracker</h1>
      {data.map((line, index) => (
        <LineSpeechTracker
          key={index}
          line={line}
          lineIndex={index}
          code={code}
          isActive={index === activeLineIndex}
          onLineComplete={handleLineComplete}
        />
      ))}
      {isModalOpen && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <h2>Well Done!</h2>
            <p>You have successfully completed all lines.</p>
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
