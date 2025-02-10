import React from 'react';
import { IoCreateOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import styles from '@/styles/RightSide.module.css';

const Table = ({ URL, data, section, headings, onDelete, onEdit, setIsCreatingNew }) => {
  console.log(data)
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            {headings.map((heading, index) => (
              <th key={index}>{heading === 'using' ?
                 'issued' : heading === 'trial' ?
                 'Full access' : heading === 'type' ?
                 'Course' : heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.sort((a, b) => new Date(a.updatedAt) - new Date(b.updatedAt)).map((item, index) => (
              <tr key={index}>
                {headings.map((heading, idx) => (
                  <td key={idx}>
                  {item[heading] !== undefined ? (
                    heading === 'trial' ? (!item.trial ? "✅ Yes" : "❌ No") :
                    heading === 'using' ? (item.using ? "✅ Yes" : "❌ No") :
                    heading === 'active' ? (item.active ? "✅ Yes" : "❌ No") :
                    heading === 'using' ? (item.using ? "✅ Yes" : "❌ No") :
                    heading === 'questions' || heading === 'firstsent' || heading === 'next' ? item[heading].length :
                    typeof item[heading] === 'string' ? item[heading].slice(0, 25) :
                    JSON.stringify(item[heading])
                  ) : 'N/A'}
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
