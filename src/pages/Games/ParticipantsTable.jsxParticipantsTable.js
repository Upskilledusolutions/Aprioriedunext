import React, { useEffect, useState } from 'react';
import styles from './ParticipantsTable.module.css';

const ParticipantsTable = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await fetch('/api/register/all'); // Adjust endpoint if needed
        const data = await response.json();

        if (!response.ok) throw new Error(data.message || 'Failed to fetch participants');
        setParticipants(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchParticipants();
  }, []);

  if (loading) return <div className={styles.message}>Loading...</div>;
  if (error) return <div className={styles.message}>Error: {error}</div>;
  if (!participants.length) return <div className={styles.message}>No participants found.</div>;

  const contestTitle = participants[0]?.contest || 'Contest';

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Contest Participants</h1>
      <h2 className={styles.subHeader}>{contestTitle}</h2>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>City</th>
              <th>Country</th>
              <th>Age</th>
              <th>Subcategory</th>
              <th>Amount</th>
              <th>Valid Till</th>
            </tr>
          </thead>
          <tbody>
            {participants.map((p) => (
              <tr key={p._id}>
                <td>{p.name}</td>
                <td>{p.email}</td>
                <td>{p.phone}</td>
                <td>{p.city}</td>
                <td>{p.country}</td>
                <td>{p.age}</td>
                <td>{p.subcategory}</td>
                <td>₹{p.amount}</td>
                <td>{p.validTill}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ParticipantsTable;
