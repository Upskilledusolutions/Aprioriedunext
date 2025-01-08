import React from 'react'
import styles from '@/styles/RightSide.module.css';

export default function RightSide({ data }) {
      // Check if data is not null or undefined and contains at least one element
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

    const excludeKeys = ['_id', '__v'];

    // Get the keys of the object excluding '_id' and '__v'
    const filteredKeys = Object?.keys(data[0]).filter(key => !excludeKeys.includes(key));
    console.log(filteredKeys)

  return (
    <div className={styles.tableContainer}>
    <table className={styles.table}>
      <thead>
        <tr>
        {filteredKeys.map(heading=><th>{heading}</th>)}
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map((item, index) => (
            <tr key={index}>
              <td>{item?.id.slice(0,10)}</td>
              <td>{item?.name.slice(0,20)}</td>
              <td>{item?.level.slice(0,20)}</td>
              <td>{item?.pdf.slice(0,25)}</td>
              <td>{item?.video?.slice(0,25)}</td>
              <td>{item?.desc.slice(0,40)}</td>
              <td>
                <button
                  className={styles.editButton}
                  onClick={() => alert(`Edit ${item.title}`)}
                >
                  Edit
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => alert(`Delete ${item.title}`)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="4">No data available</td>
          </tr>
        )}
      </tbody>
    </table>
  </div>
  )
}
