// src/helperfunction/getUserData.js
export const Getperformance = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/api/${userId}/performance`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  };
  