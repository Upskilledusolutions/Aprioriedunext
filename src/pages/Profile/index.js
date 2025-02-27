import React, { useEffect, useState } from 'react';
import Left from '../../../components/Profile/left';
import styles from '@/styles/Admin.module.css';
import RightSide from '../../../components/Admin/RightSide';
import LoadingSpinner from '../../../components/loader';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function index() {
      const [selection, setSelection] = useState({ section: null, language: null });
      const [allCollections, setAllCollections] = useState([]);
      const [formData, setFormData] = useState(null); // Manage form data for edit
      const [showForm, setShowForm] = useState(false); // Manage form visibility
      const [ loading, setLoading ] = useState(false)
      const { user } = useSelector((state) => state.auth);
      const URL = process.env.NEXT_PUBLIC_BACKENDURL

    return (
        <div>
        {loading && <div className={styles.loader}><LoadingSpinner /></div>}
        <div className={styles.bigcontainer}>
          <div className={styles.heading}><div>{user?.name}'s Profile</div><Link href={'/Payment/Receipt'} className={styles.headbutton}>Create Receipt</Link></div>
          <div className={styles.container}>
            <Left />
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
