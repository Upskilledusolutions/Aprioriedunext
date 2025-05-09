import React, { useEffect, useState } from 'react';
import Left from '../../../components/Admin/left';
import styles from '@/styles/Admin.module.css';
import RightSide from '../../../components/Admin/RightSide';
import LoadingSpinner from '../../../components/loader';
import Link from 'next/link';

export default function Index() {
  const [selection, setSelection] = useState({ section: null, language: null });
  const [allCollections, setAllCollections] = useState([]);
  const [formData, setFormData] = useState(null); // Manage form data for edit
  const [showForm, setShowForm] = useState(false); // Manage form visibility
  const [ loading, setLoading ] = useState(false)
  const URL = process.env.NEXT_PUBLIC_BACKENDURL

  useEffect(() => {
    const fetchLessons = async () => {
      if (!selection.section || !selection.language) return;
      setLoading(true)
      try {
        const response = await fetch(`${URL}/api/${selection.section}/${selection.language}`);
        const data = await response.json();
        setAllCollections(data);
      } catch (error) {
        console.error('Error fetching lessons:', error);
      }
      setLoading(false)
    };

    fetchLessons();
  }, [selection]);

  const refreshData = async () => {
    setLoading(true)
    try {
      const response = await fetch(`${URL}/api/${selection.section}/${selection.language}`);
      const updatedData = await response.json();
      setAllCollections(updatedData);
    } catch (error) {
      console.error('Error refreshing data:', error);
    }
    setLoading(false)
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`${URL}/api/${selection.section}/${selection.language}/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Failed to delete: ${response.statusText}`);
      }

      alert(`Item with ID ${id} deleted successfully`);
      refreshData();
    } catch (error) {
      alert(`Error deleting item: ${error.message}`);
    }
  };

  const handleEdit = (item) => {
    setFormData(item); // Set form data for the selected item
    setShowForm(true); // Show the form
  };

  const handleLanguageSelection = (section, language) => {
    setSelection({ section, language });
  };

  console.log(allCollections)

  return (
    <div>
      {loading && <div className={styles.loader}><LoadingSpinner /></div>}
    <div className={styles.bigcontainer}>
      <div className={styles.heading}><div>Admin Dashboard</div><div className={styles.gap}><Link href={'/Payment/Payslip'} className={styles.headbutton}>Create Pay Slip</Link><Link href={'/Payment/Receipt'} className={styles.headbutton}>Create Receipt</Link></div></div>
      <div className={styles.container}>
        <Left onLanguageSelect={handleLanguageSelection} />
        <div className={styles.righttext}>
          {selection.section && selection.language ? (
            <RightSide
              URL={URL}
              data={allCollections}
              section={selection.section}
              language={selection.language}
              refreshData={refreshData}
              onDelete={handleDelete}
              onEdit={handleEdit}
              formData={formData} // Pass form data for editing
              setFormData={setFormData}
              setShowForm={setShowForm} // Pass function to control form visibility
              showForm={showForm} // Manage form visibility
            />
          ) : (
            'Please select a section and language.'
          )}
        </div>
      </div>
    </div>
    </div>
  );
}
