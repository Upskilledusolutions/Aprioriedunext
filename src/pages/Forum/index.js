import React, { useState, useEffect } from "react";
import styles from "./forum.module.css";
import LeftNav from "../../../components/Forum/LeftNav";
import PostView from "../../../components/Forum/PostView";
import Sidebar from "../../../components/Forum/Sidebar";
import { useSelector } from "react-redux";

export default function App() {
  const [questions, setQuestions] = useState([]); // State to store all questions
  const [selectedPost, setSelectedPost] = useState(null); // State to store the currently selected post
  const [showLeftNav, setShowLeftNav] = useState(false); // State to toggle LeftNav
  const [showSidebar, setShowSidebar] = useState(false); // State to toggle Sidebar
  const URL = process.env.NEXT_PUBLIC_BACKENDURL;
  const { user } = useSelector((state) => state.auth);

  // Fetch questions from the backend
  const fetchQuestions = async () => {
    try {
      const response = await fetch(`${URL}/api/questions`);
      if (response.ok) {
        const data = await response.json();
        setQuestions(data.questions); // Update the state with fetched questions
        if (!selectedPost && data.questions.length > 0) {
          setSelectedPost(data.questions[0]); // Set the first post as the default selected post
        }
      } else {
        console.error("Failed to fetch questions");
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };

  // Add a new question and fetch updated questions
  const handleAddQuestion = async (data) => {
    try {
      const response = await fetch(`${URL}/api/questions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Question submitted successfully");
        alert("Your question has been submitted!");
        const updatedResponse = await fetch(`${URL}/api/questions`);
        if (updatedResponse.ok) {
          const updatedData = await updatedResponse.json();
          setQuestions(updatedData.questions); // Update the questions state
          setSelectedPost(updatedData.questions[0]); // Set the last question as selected
        }
      } else {
        console.error("Failed to submit question");
        alert("Failed to submit your question. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting question:", error);
      alert("An error occurred. Please try again.");
    }
  };

  // Handle sorted questions from LeftNav
  const handleUpdateQuestions = (sortedQuestions) => {
    setQuestions(sortedQuestions); // Update the questions state with the sorted list
  };

  // Fetch questions on page load
  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className={styles.forumContainer}>
    {/* Navbar */}
    <div className={styles.navbar}>
      <button
        className={styles.navbarButton}
        onClick={() => setShowLeftNav(true)}
      >
        Search /Sort
      </button>
      <button
        className={styles.navbarButton}
        onClick={() => setShowSidebar(true)}
      >
        More Topics
      </button>
    </div>

 {/* Left Navigation */}
 <div
        className={`${styles.leftNav} ${
          showLeftNav ? styles.showLeftNav : ""
        }`}
      >
        <button
          className={styles.closeButton}
          onClick={() => setShowLeftNav(false)}
        >
          X
        </button>
        <LeftNav
          questions={questions}
          onAddQuestion={handleAddQuestion}
          onSelectPost={setSelectedPost}
          onUpdateQuestions={handleUpdateQuestions}
          user={user}
          setShowLeftNav={setShowLeftNav}
        />
      </div>

     {/* Main Content */}
     <div className={styles.mainContent}>
        <PostView post={selectedPost} user={user}/>
      </div>

      {/* Sidebar */}
      <div
        className={`${styles.sidebar} ${
          showSidebar ? styles.showSidebar : ""
        }`}
      >
        <button
          className={styles.closeButton}
          onClick={() => setShowSidebar(false)}
        >
          X
        </button>
        <Sidebar questions={questions} onSelectPost={setSelectedPost} setShowSidebar={setShowSidebar}/>
      </div>
    </div>
  );
}
