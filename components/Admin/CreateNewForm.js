import React, { useEffect, useState } from 'react';
import styles from '@/styles/RightSide.module.css';
import QuestionsForm from './QuestionsForm';

const CreateNewForm = ({ refreshData, section, headings, language,  setShowForm, initialData, isCreatingNew }) => {
  const [formData, setFormData] = useState({questions: []});
  const [questions, setQuestions] = useState([])
  const [loading, setLoading] = useState(false); // For submission state

  useEffect(() => {
    if (isCreatingNew) {
      setFormData({ questions: [] }); // Clear formData for a new entry
    } else if (initialData) {
      setFormData(initialData); // Populate form for editing
    }
  }, [isCreatingNew, initialData]);

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const method = initialData ? 'PUT' : 'POST'; // Update if editing
      const url = initialData
        ? `http://localhost:5000/api/${section}/${language}/${initialData._id}`
        : `http://localhost:5000/api/${section}/${language}`;

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to ${initialData ? 'update' : 'create'}: ${response.statusText}`);
      }
      setShowForm(false);
      refreshData();
    } catch (error) {
      alert(`Error submitting form: ${error.message}`);
    }
  };

  const handleCancel = () => {
    setShowForm(false); // Hide the form without submitting
  };

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.formGrid}>
          {headings.map((heading, index) => (
            <div
              key={index}
              className={`${styles.formField} ${
                heading === 'desc' ? styles.fullWidth : ''
              }`}
            >
              <label htmlFor={heading}>{heading}</label>
              {heading === 'id' ? (
                <input
                  type="text"
                  id={heading}
                  name={heading}
                  value={formData[heading] || ''}
                  onChange={handleInputChange}
                  placeholder={`Enter ${heading}`}
                  className={styles.smallInput}
                  required
                />
              ) : heading === 'desc' ? (
                <textarea
                  id={heading}
                  name={heading}
                  value={formData[heading] || ''}
                  onChange={handleInputChange}
                  placeholder={`Enter ${heading}`}
                  className={styles.textareaInput}
                  required
                ></textarea>
              ) : heading === 'video' ? (
                <input
                  type="text"
                  id={heading}
                  name={heading}
                  value={formData[heading] || ''}
                  onChange={handleInputChange}
                  placeholder={`Enter ${heading}`}
                />
              ) : heading === 'questions' ? (
                <QuestionsForm formData={formData} setFormData={setFormData}/>
              ) 
              : (
                <input
                  type="text"
                  id={heading}
                  name={heading}
                  value={formData[heading] || ''}
                  onChange={handleInputChange}
                  placeholder={`Enter ${heading}`}
                  required
                />
              )}
            </div>
          ))}
        </div>
        <button type="submit" className={styles.submitButton} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
        <button
          type="button"
          className={styles.cancelButton}
          onClick={handleCancel}
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default CreateNewForm;
