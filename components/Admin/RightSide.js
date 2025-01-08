import React, { useState } from 'react';
import styles from '@/styles/RightSide.module.css';
import SearchBar from './SearchBar';
import CreateNewForm from './CreateNewForm';
import Table from './Table';

export default function RightSide({
  data,
  section,
  language,
  refreshData,
  onDelete,
  onEdit,
  formData,
  setFormData,
  setShowForm,
  showForm,  // New prop to control visibility of the form
}) {
  let sect = section.replace(/^'|'$/g, ''); // Clean up section name

  const headings = {
    'Lessons': ["id", "name", "level", "pdf", "video", "desc"],
    'Conversations': ["id", "title", "url", "youtube", "desc"]
  };

  const [searchTerm, setSearchTerm] = useState('');
  const [isCreatingNew, setIsCreatingNew] = useState(false);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleCreateNew = () => {
    setShowForm(true); // Show the form when "Create New" is clicked
    setIsCreatingNew(true)
    setFormData(null)
  };

  return (
    <div>
      {/* Small Bar Section with Search and Create New Button */}
      <div className={styles.smallBar}>
        <SearchBar searchTerm={searchTerm} handleSearch={handleSearch} />
        <button className={styles.createButton} onClick={handleCreateNew}>
          Create New
        </button>
      </div>

      {/* Show Form if showForm is true */}
      {showForm && (
        <CreateNewForm
          refreshData={refreshData}
          section={section}
          language={language}
          headings={headings[sect]}
          setShowForm={setShowForm}
          initialData={formData} 
          isCreatingNew={isCreatingNew}
        />
      )}

      {/* Table Section */}
      <Table
        data={data}
        section={sect}
        headings={headings[sect]}
        onEdit={onEdit}
        onDelete={onDelete}
        setIsCreatingNew={setIsCreatingNew}
      />
    </div>
  );
}
