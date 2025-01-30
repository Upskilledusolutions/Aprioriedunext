import React from 'react';
import { IoCreateOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import styles from '@/styles/RightSide.module.css';

const Table = ({ data, section, headings, onDelete, onEdit, setIsCreatingNew }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                {headings.map((heading, idx) => (
                  <td key={idx}>
                    {item[heading] ? heading === 'questions' || heading === 'firstsent' ? item[heading].length : item[heading].slice(0, 25) : 'N/A'}
                  </td>
                ))}
                <td>
                  <button
                    className={styles.editButton}
                    onClick={() => [onEdit(item), setIsCreatingNew(false)]}
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
