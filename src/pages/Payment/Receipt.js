import React, { useState, useRef } from 'react';
import styles from '../../styles/Paymentform.module.css';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const ReferralForm = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    duration: '',
    course: '',
    language: '',
    level: '',
    amount: '',
    type: 'Free Version'
  });

  const [errors, setErrors] = useState({});

  // Only validate fields that are part of the form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
    }
    if (!formData.duration) newErrors.duration = 'Duration is required';
    if (!formData.course) newErrors.course = 'Please select a course';
    if (!formData.language) newErrors.language = 'Please select a language';
    if (!formData.level) newErrors.level = 'Please select a level';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  // Generate a unique receipt ID
  const createReceipt = () => {
    const prefix = Math.random().toString(36).substring(2, 6).toUpperCase();
    const now = new Date();
    const datePart = now.toISOString().split('T')[0].replace(/-/g, '');
    const timePart = now.toTimeString().split(' ')[0].replace(/:/g, '');
    return `${prefix}-${datePart}-${timePart}`;
  };

  const downloadReceipt = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const doc = new jsPDF();
      const labelX = 10;
      const valueX = 50;

      // Add your company logo
      const imgData = '/newlogo1.png'; // Ensure this path is correct
      doc.addImage(imgData, 'PNG', 175, 10, 20, 20);

      // Company details
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(22);
      doc.text('Upskilledu Solutions', 10, 18);
      doc.setFontSize(10);
      doc.setFont('Helvetica', 'normal');
      doc.text('Address: E - 200, Lajpat Nagar 1,', 10, 30);
      doc.text('New Delhi - 110024,', 10, 35);
      doc.text('Delhi, India', 10, 40);
      doc.text('Email: info@upskilleduonline.com', 10, 45);
      doc.text('Phone: +91 97171 89650/ 659', 10, 50);

      // Invoice Details
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(16);
      doc.text('Invoice Details', 10, 62);
      doc.line(10, 65, 200, 65);
      doc.setFontSize(10);

      const invoiceLabels = ['Receipt Id', 'Receipt Date'];
      const invoiceValues = [createReceipt(), new Date().toLocaleDateString()];
      const invoiceStartY = 72;
      const invoiceLineHeight = 7;

      invoiceLabels.forEach((label, index) => {
        const yPos = invoiceStartY + index * invoiceLineHeight;
        doc.setFont('Helvetica', 'bold');
        doc.text(`${label}:`, labelX, yPos);
        doc.setFont('Helvetica', 'normal');
        doc.text(`${invoiceValues[index]}`, valueX, yPos);
      });

      // Billing Details
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(16);
      doc.text('Billing Details', 10, 92);
      doc.line(10, 95, 200, 95);
      doc.setFontSize(10);

      const billingLabels = ['Name', 'Email', 'Phone'];
      const billingValues = [formData.name, formData.email, formData.phone];
      const billingStartY = 102;
      const billingLineHeight = 7;

      billingLabels.forEach((label, index) => {
        const yPos = billingStartY + index * billingLineHeight;
        doc.setFont('Helvetica', 'bold');
        doc.text(`${label}:`, labelX, yPos);
        doc.setFont('Helvetica', 'normal');
        doc.text(`${billingValues[index]}`, valueX, yPos);
      });

      // Course Details
      doc.setFont('Helvetica', 'bold');
      doc.setFontSize(16);
      doc.text('Course Details', 10, 127);
      doc.line(10, 130, 200, 130);
      doc.setFontSize(10);

      const courseLabels = ['Language', 'Level', 'Duration', 'Scholarship'];
      // Use duration from state; scholarship left empty for now
      const courseValues = [formData.language, formData.level, formData.duration, ''];
      const courseStartY = 137;
      const courseLineHeight = 8;
      const boxWidth = 50;
      const boxHeight = 6;

      courseLabels.forEach((label, index) => {
        const yPos = courseStartY + index * courseLineHeight;
        doc.setFont('Helvetica', 'bold');
        doc.text(`${label}:`, labelX, yPos);
        // Draw a border (if desired)
        doc.rect(valueX, yPos - 4, boxWidth, boxHeight);
        doc.setFont('Helvetica', 'normal');
        doc.text(`${courseValues[index]}`, valueX + 2, yPos);
      });

      // Table of Products (example)
      const columns = ['ID', 'Course', 'Rate', 'Qty', 'SubTotal', 'Total'];
      const products = [
        { id: '1', product: formData.course, rate: formData.amount, qty: '1', subtotal: formData.amount, total: formData.amount },
      ];
      const data = products.map(item => [
        item.id, item.product, item.rate, item.qty, item.subtotal, item.total
      ]);

      const headerColor = [0, 51, 102];
      const rowColor = [255, 255, 255];

      doc.autoTable({
        startY: 180,
        head: [columns],
        body: data,
        theme: 'grid',
        margin: { horizontal: 10 },
        columnStyles: {
          0: { cellWidth: 20 },
          1: { cellWidth: 50 },
          2: { cellWidth: 30 },
          3: { cellWidth: 20 },
          4: { cellWidth: 30 },
          5: { cellWidth: 30 },
        },
        headStyles: {
          fillColor: headerColor,
          textColor: [255, 255, 255],
        },
        styles: {
          fillColor: rowColor,
          textColor: [0, 0, 0],
        },
      });

      // Totals Calculation
      let currentY = doc.autoTable.previous.finalY + 10;
      const subtotal = products.reduce((acc, item) => acc + Number(item.subtotal), 0);
      const total = products.reduce((acc, item) => acc + Number(item.total), 0);
      doc.text(`Sub Total: Rs ${subtotal}`, 130, currentY);
      currentY += 5;
      doc.text(`Grand Total: Rs ${total}`, 130, currentY);

      // Save the PDF
      doc.save('Payment_Receipt.pdf');

      // Reset form state if desired
      setFormData({
        name: '',
        phone: '',
        email: '',
        duration: '',
        course: '',
        language: '',
        level: '',
        amount: '',
        type: 'Free Version'
      });
      setErrors({});
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.formContainer}>
        <h1 className={styles.title}>Create Receipt</h1>
        <div className={styles.note}>
          <b>Note: </b>Field marked with <span className={styles.span}>*</span> are mandatory to fill.
        </div>
        <form ref={form} onSubmit={downloadReceipt} className={styles.form} noValidate>
          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="name">
                Name <span className={styles.span}>*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? `${styles.errorInput} ${styles.input}` : styles.input}
              />
              {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>
            
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="phone">
                Phone <span className={styles.span}>*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className={errors.phone ? `${styles.errorInput} ${styles.input}` : styles.input}
              />
              {errors.phone && <span className={styles.errorText}>{errors.phone}</span>}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="email">
                Email <span className={styles.span}>*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={errors.email ? `${styles.errorInput} ${styles.input}` : styles.input}
              />
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="duration">
                Duration <span className={styles.span}>*</span>
              </label>
              <input
                type="text"
                id="duration"
                name="duration"
                required
                value={formData.duration}
                onChange={handleChange}
                className={errors.duration ? `${styles.errorInput} ${styles.input}` : styles.input}
              />
              {errors.duration && <span className={styles.errorText}>{errors.duration}</span>}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="language">
                Language <span className={styles.span}>*</span>
              </label>
              <select
                id="language"
                name="language"
                required
                value={formData.language}
                onChange={handleChange}
                className={errors.language ? `${styles.errorInput} ${styles.input}` : styles.input}
              >
                <option value="">Select a language</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="German">German</option>
              </select>
              {errors.language && <span className={styles.errorText}>{errors.language}</span>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="level">
                Level <span className={styles.span}>*</span>
              </label>
              <select
                id="level"
                name="level"
                required
                value={formData.level}
                onChange={handleChange}
                className={errors.level ? `${styles.errorInput} ${styles.input}` : styles.input}
              >
                <option value="">Select a level</option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
              </select>
              {errors.level && <span className={styles.errorText}>{errors.level}</span>}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.formGroup}>
              <label className={styles.label} htmlFor="course">
                Course <span className={styles.span}>*</span>
              </label>
              <select
                id="course"
                name="course"
                required
                value={formData.course}
                onChange={handleChange}
                className={errors.course ? `${styles.errorInput} ${styles.input}` : styles.input}
              >
                <option value="">Select a course</option>
                <option value="Self study package">Self study package</option>
                <option value="Online Classes for Adults">Online Classes for Adults</option>
                <option value="Online Classes for Children">Online Classes for Children</option>
                <option value="Self study package + Doubt sessions">Self study package + Doubt sessions</option>
                <option value="Workshop">Workshop</option>
                <option value="Contests and Events">Contests and Events</option>
              </select>
              {errors.course && <span className={styles.errorText}>{errors.course}</span>}
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Amount <span className={styles.span}>*</span></label>
              <input
                type="text"
                id="amount"
                name="amount"
                required
                value={formData.amount}
                onChange={handleChange}
                className={styles.input}
              />
            </div>
          </div>

          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ReferralForm;
