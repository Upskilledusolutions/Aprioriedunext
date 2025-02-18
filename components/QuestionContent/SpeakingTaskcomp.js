import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import styles from "../../src/styles/SpeakingTask.module.css";
import { FaMicrophone, FaStop } from "react-icons/fa";

const CLOUDINARY_URL = "https://api.cloudinary.com/v1_1/drjmg5xin/upload";
const CLOUDINARY_UPLOAD_PRESET = "ml_default";

const VoiceQuiz = ({ questions, name }) => {
  const { user } = useSelector((state) => state.auth);
  const [recordings, setRecordings] = useState({});
  const [isRecording, setIsRecording] = useState(null);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const startRecording = (index) => {
    navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      setIsRecording(index);

      mediaRecorder.ondataavailable = (event) => {
        chunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(chunksRef.current, { type: "audio/wav" });
        uploadToCloudinary(audioBlob, index);
        chunksRef.current = [];
      };

      mediaRecorder.start();
    });
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(null);
  };

  const uploadToCloudinary = (audioBlob, index) => {
    const formData = new FormData();
    formData.append("file", audioBlob);
    formData.append("upload_preset", CLOUDINARY_UPLOAD_PRESET);

    fetch(CLOUDINARY_URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        setRecordings((prev) => ({ ...prev, [index]: data.secure_url }));
      })
      .catch((error) => {
        console.error("Upload error: ", error);
      });
  };

  const sendEmail = () => {
    const emailData = {
      user: user ? user.name : "Anonymous",
      subject: name,
      lesson: questions.join("\n"),
      recordings: Object.entries(recordings)
        .map(([key, url]) => `Q${Number(key) + 1}: ${url}`)
        .join("\n"),
    };

    emailjs
      .send("service_ku47jo7", "template_89lyx7e", emailData, "gda7QFd6-p_NsoIVt")
      .then(() => {
        alert("Your answers have been submitted successfully!");
        setRecordings({});
      })
      .catch((error) => {
        alert("Error submitting the answers. Please try again.");
      });
  };

  return (
    <div className={styles.container}>
        <h2 className={styles.h2}>{name}</h2>
        <div className={styles.flex}>
      {questions.map((question, index) => (
        <div key={index} className={styles.questionContainer}>
          <p>{index + 1}. {question}</p>
          <div className={styles.questionButtons}>
            <button
              onClick={() => startRecording(index)}
              disabled={isRecording !== null}
              className={styles.button}
            >
              <FaMicrophone className={styles.icon} />
              {isRecording === index ? "Recording..." : "Record Answer"}
            </button>
            {isRecording === index && (
              <button
                onClick={stopRecording}
                className={`${styles.button}`}
              >
                <FaStop className={styles.recordingIcon} />
                Stop Recording
              </button>
            )}
          </div>
          {recordings[index] && (
            <audio className={styles.audio} controls>
              <source className={styles.audiosource} src={recordings[index]} type="audio/wav" />
            </audio>
          )}
        </div>
      ))}
      <button
        onClick={sendEmail}
        className={`${styles.submitBtn}`}
        disabled={Object.keys(recordings).length === 0}
      >
        Submit Test
      </button>
      </div>
    </div>
  );
};

export default VoiceQuiz;
