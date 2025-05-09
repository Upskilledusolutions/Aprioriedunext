import React, { useEffect, useState } from "react";
import styles from "./PostView.module.css";
import { FaComment, FaCopy, FaHeart } from "react-icons/fa";

export default function PostView({ post, user }) {
  const [replyText, setReplyText] = useState("");
  const URL = process.env.NEXT_PUBLIC_BACKENDURL;
  const [likes, setLikes] = useState(0);
const [replies, setReplies] = useState([]);
const [hasLiked, setHasLiked] = useState(false);

useEffect(() => {
  if (post) {
    setLikes(post.likes || 0);
    setReplies(post.replies || []);
    setHasLiked(post.likedBy?.includes(user?.userId) || false);
  }
}, [post, user?.userId]);

  const handleLike = async () => {
    try {
      const response = await fetch(`${URL}/api/questions/${post._id}/like`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.userId }),
      });
      if (response.ok) {
        const data = await response.json();
        setLikes(data.likes);
      } else {
        console.error("Failed to like the post");
      }
    } catch (error) {
      console.error("Error liking the post:", error);
    }
  };

  const handleDislike = async () => {
    try {
      const response = await fetch(`${URL}/api/questions/${post._id}/unlike`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: user.userId }),
      });
      if (response.ok) {
        const data = await response.json();
        setLikes(data.likes);
      } else {
        console.error("Failed to dislike the post");
      }
    } catch (error) {
      console.error("Error disliking the post:", error);
    }
  };

  const toggleLike = async () => {
    if (hasLiked) {
      await handleDislike();
      setHasLiked(false);
    } else {
      await handleLike();
      setHasLiked(true);
    }
  };

  const handleReply = async () => {
    if (!replyText.trim()) return;

    try {
      const response = await fetch(`${URL}/api/questions/${post._id}/reply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user: user.name || user.userId, reply: replyText }),
      });
      if (response.ok) {
        const data = await response.json();
        setReplies(data.replies);
        setReplyText(""); // Clear the input field
      } else {
        console.error("Failed to add reply");
      }
    } catch (error) {
      console.error("Error adding reply:", error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(post.question).then(() => {
      alert("Question copied to clipboard!");
    });
  };

  const getTimeDifference = (createdAt) => {
    const now = new Date();
    const postDate = new Date(createdAt);
    const diffInSeconds = Math.floor((now - postDate) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} sec ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} min ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hr ago`;
    } else if (diffInSeconds < 2592000) {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 31536000) {
      const months = Math.floor(diffInSeconds / 2592000);
      return `${months} month${months > 1 ? "s" : ""} ago`;
    } else {
      const years = Math.floor(diffInSeconds / 31536000);
      return `${years} year${years > 1 ? "s" : ""} ago`;
    }
  };

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h2 className={styles.title}>{post?.topic}</h2>
        <p className={styles.subtitle}>
          {post?.user} • {getTimeDifference(post?.createdAt)}
        </p>
      </header>
      <section className={styles.content}>
        <p>{post?.question}</p>
      </section>
      <section className={styles.actions}>
        <button className={styles.button} onClick={toggleLike}>
          <FaHeart style={{ color: hasLiked ? "red" : "black" }} /> {likes}
        </button>
        <button className={styles.button} onClick={() => document.getElementById("replyInput").focus()}>
          <FaComment /> {replies.length}
        </button>
        <button className={styles.button} onClick={handleCopy}>
          <FaCopy />
        </button>
      </section>
      <section className={styles.replySection}>
        <input
          id="replyInput"
          type="text"
          placeholder="Write a reply..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          className={styles.replyInput}
        />
        <button onClick={handleReply} className={styles.replyButton}>
          Reply
        </button>
        <ul className={styles.replyList}>
          {replies.slice().reverse().map((reply, index) => (
            <li key={index} className={styles.replyItem}>
              <div>{reply.reply}</div>
              <div className={styles.usernameb}>{reply.user}</div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
