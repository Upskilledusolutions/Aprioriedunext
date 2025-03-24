// src/helperfunction/Finishedquiz.js
export const sendQuizdata = async ({ userId, questionTypes, exercise, language, points }) => {
    // Ensure questionTypes is always an array
    const data = {
      userId,
      points: Number(points),
      exercise: Number(exercise),
      language,
      questionTypes: Array.isArray(questionTypes) ? questionTypes : [questionTypes],
    };
  
    try {
      const response = await fetch('http://localhost:5000/api/updateScore', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      throw error;
    }
  };
  