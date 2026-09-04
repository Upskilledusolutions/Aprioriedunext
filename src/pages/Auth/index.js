import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { login } from "../../Store";
import { useCookies } from "react-cookie";
import styles from "../../styles/Login.module.css";
import LoadingSpinner from "../../../components/loader";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const URL = process.env.NEXT_PUBLIC_BACKENDURL;

  const dispatch = useDispatch();
  const router = useRouter();
  const [cookies, setCookie] = useCookies(["user"]);

  const mergeQuizzes = (mongoData, localData) => {
    const mergedData = [...mongoData];
    localData.forEach((localQuiz) => {
      const found = mergedData.find(
        (quiz) => quiz.exercise === localQuiz.exercise && quiz.language === localQuiz.language
      );
      if (found) {
        localQuiz.questionTypes.forEach((qType) => {
          if (!found.questionTypes.includes(qType)) found.questionTypes.push(qType);
        });
      } else {
        mergedData.push(localQuiz);
      }
    });
    return mergedData;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const locationResponse = await fetch("https://ipinfo.io/json?token=f865848db16a1a");
      const locationData = await locationResponse.json();
      const ipAddress = locationData.ip || "Unknown";
      const location = locationData.city
        ? `${locationData.city}, ${locationData.region}, ${locationData.country}`
        : "Unknown";

      const response = await fetch(`${URL}/api/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, userId, password, ipAddress, location }),
      });
      setLoading(false);

      const data = await response.json();
      if (data.success) {
        if (data.user.active) {
          const mongoQuizzes = data.user.completedQuizzes || [];
          let localQuizzes = [];
          if (typeof window !== "undefined") {
            localQuizzes = localStorage.getItem("completedQuizzes")
              ? JSON.parse(localStorage.getItem("completedQuizzes"))
              : [];
          }
          const mergedQuizzes = mergeQuizzes(mongoQuizzes, localQuizzes);

          dispatch(login({
            userId: data.user.userId,
            name,
            trial: data.user.trial,
            type: data.user.type,
            next: data.user.next,
            active: data.user.active,
            completedQuizzes: mergedQuizzes,
            contest: data.user.contest,
          }));

          setCookie("user", JSON.stringify({
            userId: data?.user?.userId,
            name,
            trial: data?.user?.trial,
            type: data?.user?.type,
            next: data.user.next,
            active: data.user.active,
            contest: data.user.contest,
          }), { path: "/", maxAge: 6 * 3600 });

          localStorage.setItem("completedQuizzes", JSON.stringify(mergedQuizzes));

          await fetch(`${URL}/api/completed-quizzes`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userId: data.user.userId, completedQuizzes: mergedQuizzes }),
          });

          router.push("/ProductSelection");
        } else {
          setError("User Validity Expired");
        }
      } else {
        setError(data.message || "Invalid credentials");
      }
    } catch (error) {
      setLoading(false);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <div>
      {loading && <div className={styles.loader}><LoadingSpinner /></div>}
      <motion.div className={styles.loginContainer}>
        <motion.div className={styles.loginBox} initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 100 }}>
          <h2 className={styles.title}>Login</h2>
          <form className={styles.loginForm} onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="name" className={styles.label}>Name</label>
              <input type="text" id="name" className={styles.inputField} value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="userId" className={styles.label}>User ID</label>
              <input type="text" id="userId" className={styles.inputField} value={userId} onChange={(e) => setUserId(e.target.value)} placeholder="Enter your user ID" required />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <div className={styles.passwordWrapper}>
                <input type={showPassword ? "text" : "password"} id="password" className={styles.inputField1} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" required />
                <span onClick={() => setShowPassword(!showPassword)} className={styles.eyeIcon}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
              </div>
            </div>
            {error && <p className={styles.error}>{error}</p>}
            <motion.button className={styles.loginButton} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="submit">Login</motion.button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
}
