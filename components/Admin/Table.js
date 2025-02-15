import React, { useState, useEffect } from 'react';
import { IoCreateOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import styles from '@/styles/RightSide.module.css';

const Table = ({ URL, data, section, headings, onDelete, onEdit, setIsCreatingNew }) => {
  const [filter, setFilter] = useState('all');
  const [currentdata, setCurrentdata] = useState(data);

  useEffect(() => {
    if (section === 'Auth') {
      const filteredData = data.filter(item => {
        if (filter === 'issued') return item.using;
        if (filter === 'active') return item.active;
        if (filter === 'fullAccess') return !item.trial;
        return true;
      });
      setCurrentdata(filteredData);
    } else {
      setCurrentdata(data);
    }
  }, [data, section, filter]); // Dependencies ensure effect runs when data, section, or filter changes

  return (
    <div className={styles.tableContainer}>
      {section === 'Auth' && (
        <div className={styles.filterContainer}>
          <label>Filter: </label>
          <select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="all">All</option>
            <option value="issued">Issued</option>
            <option value="active">Active</option>
            <option value="fullAccess">Full Access</option>
          </select>
        </div>
      )}
      <table className={styles.table}>
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>
                {heading === 'using' ? 'Issued' : 
                 heading === 'trial' ? 'Full Access' : 
                 heading === 'type' ? 'Course' : 
                 heading}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentdata.length > 0 ? (
            currentdata
              .sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt))
              .map((item, index) => (
                <tr key={index}>
                  {headings.map((heading, idx) => (
                    <td key={idx}>
                      {item[heading] !== undefined ? (
                        heading === 'trial' ? (!item.trial ? "✅ Yes" : "❌ No") :
                        heading === 'using' ? (item.using ? "✅ Yes" : "❌ No") :
                        heading === 'active' ? (item.active ? "✅ Yes" : "❌ No") :
                        heading === 'questions' || heading === 'firstsent' || heading === 'next' ? item[heading].length :
                        typeof item[heading] === 'string' ? item[heading].slice(0, 20) :
                        JSON.stringify(item[heading])
                      ) : 'N/A'}
                    </td>
                  ))}
                  <td>
                    <button
                      className={styles.editButton}
                      onClick={() => {
                        onEdit(item);
                        setIsCreatingNew(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      <IoCreateOutline />
                    </button>
                    <button
                      className={styles.deleteButton}
                      onClick={() => onDelete(item._id)}
                    >
                      <MdDeleteOutline />
                    </button>
                  </td>
                </tr>
              ))
          ) : (
            <tr>
              <td colSpan={headings.length + 1}>No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
