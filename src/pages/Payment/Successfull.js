import React from 'react';
import { useRouter } from 'next/router';
import jsPDF from 'jspdf';
import styles from '../../styles/Success.module.css'; // Import the CSS module
import Image from 'next/image';
import 'jspdf-autotable';

const SuccessPage = () => {
  const router = useRouter();
  const { name, email, phone, trialUserId, amount, receipt, date, course } = router.query;

  const downloadReceipt = () => {
    const doc = new jsPDF();
  
    // Add your company logo
    const imgData = '/newlogo1.png'; // Path to your logo in the public folder
    doc.addImage(imgData, 'PNG', 175, 10, 20, 20); // Adjust size and position
  
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
  
    // Invoice and receipt details
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Invoice Details', 10, 62);
    doc.line(10, 65, 200, 65); // x1, y1, x2, y2
    doc.setFontSize(10);
    doc.setFont('Helvetica', 'normal');
    doc.text(`Receipt Id: ${receipt}`, 10, 72);
    doc.text(`Receipt Date: ${date}`, 10, 77);
  
    // Billing details
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Billing Details', 10, 90);
    doc.line(10, 93, 200, 93); // x1, y1, x2, y2
    doc.setFontSize(10);
    doc.setFont('Helvetica', 'normal');
    doc.text(`Name: ${name}`, 10, 100);
    doc.text(`Email: ${email}`, 10, 105);
    doc.text(`Phone: ${phone}`, 10, 110);

     // Define the table columns
  const columns = ['ID', 'Course', 'Rate', 'Qty', 'SubTotal', 'Total'];

  const products = [
    { id: '1', product: course, rate: amount, qty: '1', subtotal: amount, total: amount },
  ];

   // Format data for the table (convert each product to an array)
   const data = products.map(item => [
    item.id, item.product, item.rate, item.qty, item.subtotal, item.total
  ]);

  // Define custom colors for header and body cells
  const headerColor = [0, 51, 102]; // Dark blue for header
  const rowColor = [255, 255, 255]; // White for rows (you can change this to any other color)

  // Add table to PDF
  doc.autoTable({
    startY: 140, // Starting Y position
    head: [columns], // Table header
    body: data, // Table data
    theme: 'grid', // Add grid lines
    margin: { horizontal: 10 }, // Margin for the table
    columnStyles: {
      0: { cellWidth: 20 }, // Custom column width for 'ID'
      1: { cellWidth: 50 }, // Custom column width for 'Product'
      2: { cellWidth: 30 }, // Custom column width for 'Rate'
      3: { cellWidth: 20 }, // Custom column width for 'Qty'
      4: { cellWidth: 30 }, // Custom column width for 'SubTotal'
      5: { cellWidth: 30 }, // Custom column width for 'Total'
    },
    headStyles: {
      fillColor: headerColor, // Header color
      textColor: [255, 255, 255], // White text on header
    },
    styles: {
      fillColor: rowColor, // Row background color
      textColor: [0, 0, 0], // Black text for rows
    },
  });

  // Totals
  let currentY = doc.autoTable.previous.finalY + 10;
  doc.text(`Sub Total: Rs ${products.reduce((acc, item) => item.subtotal, 0)}`, 130, currentY);
  currentY += 5;
  doc.text(`Grand Total: Rs ${products.reduce((acc, item) => item.total, 0)}`, 130, currentY);

  
    doc.save('Payment_Receipt.pdf');
  };
  
  

  return (
    <div className={styles.scroll}>
    <div className={styles.container}>
      <div className={styles.top}>
      <div className={styles.topleft}>
      <h5 className={styles.title}>Payment Successful!</h5>
      <p className={styles.subtitle}>Thank you for your purchase! Your payment was successful.</p>
      </div>
      <div>
        <Image src={'/assests/tic.png'} className={styles.tic} width={400} height={400} alt="images" />
      </div>
      </div>
      <div className={styles.receiptDetails}>
        <h3>Receipt Details:</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Course :</strong> {course}</p>
        {trialUserId && <p><strong>Trial Id:</strong> {trialUserId}</p>}
        <p><strong>Receipt Id:</strong> {receipt}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Amount:</strong> ₹{amount}</p>
      </div>

      <button className={styles.downloadButton} onClick={downloadReceipt}>
        Download Receipt
      </button>
    </div>
    </div>
  );
};

export default SuccessPage;
