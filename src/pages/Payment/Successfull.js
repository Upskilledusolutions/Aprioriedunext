import React from 'react';
import { useRouter } from 'next/router';
import jsPDF from 'jspdf';
import styles from '../../styles/Success.module.css'; // Import the CSS module
import Image from 'next/image';
import 'jspdf-autotable';

const SuccessPage = () => {
  const router = useRouter();
  const { name, email, phone, trialUserId, amount, receipt, date, course, language, level, duration } = router.query;
  
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
  
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Invoice Details', 10, 62);
    doc.line(10, 65, 200, 65); // x1, y1, x2, y2
    
    doc.setFontSize(10);
    
    const invoiceLabels = ['Receipt Id', 'Receipt Date'];
    const invoiceValues = [receipt, date];
    const invoiceStartY = 72;
    const invoiceLineHeight = 7;
    const labelX = 10;
    const valueX = 50; // Position for right side values
    
    invoiceLabels.forEach((label, index) => {
        let yPos = invoiceStartY + index * invoiceLineHeight;
    
        doc.setFont('Helvetica', 'bold');
        doc.text(`${label}:`, labelX, yPos);
    
        doc.setFont('Helvetica', 'normal');
        doc.text(`${invoiceValues[index]}`, valueX, yPos);
    });
  
// Billing details
doc.setFont('Helvetica', 'bold');
doc.setFontSize(16);
doc.text('Billing Details', 10, 92);
doc.line(10, 95, 200, 95); // x1, y1, x2, y2

doc.setFontSize(10);

const billingLabels = ['Name', 'Email', 'Phone'];
const billingValues = [name, email, phone];
const billingStartY = 102;
const billingLineHeight = 7; // Adjusted for consistency

billingLabels.forEach((label, index) => {
    let yPos = billingStartY + index * billingLineHeight;

    // Draw bold label
    doc.setFont('Helvetica', 'bold');
    doc.text(`${label}:`, labelX, yPos);

    // Draw normal font for value
    doc.setFont('Helvetica', 'normal');
    doc.text(`${billingValues[index]}`, valueX, yPos);
});


// Billing details
doc.setFont('Helvetica', 'bold');
doc.setFontSize(16);
doc.text('Course Details', 10, 127);
doc.line(10, 130, 200, 130); // x1, y1, x2, y2

doc.setFontSize(10);

const labels = ['Language', 'Level', 'Duration', 'Scholarship'];
const values = [language, level, duration, ''];
const startY = 137;
const lineHeight = 8; // Increased spacing for better alignment
const boxWidth = 50; // Increased width for better spacing
const boxHeight = 6; // Height of the value box

labels.forEach((label, index) => {
    let yPos = startY + index * lineHeight;

    // Draw bold label
    doc.setFont('Helvetica', 'bold');
    doc.text(`${label}:`, labelX, yPos);

    // Draw value box
    doc.rect(valueX, yPos - 4, boxWidth, boxHeight); // Draw border around value

    // Set font for value to match
    doc.setFont('Helvetica', 'normal');

    // Align text properly inside the box with a dropdown "v"
    doc.text(`${values[index]}`, valueX + 2, yPos);
});

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
    startY: 180, // Starting Y position
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
        <p className={styles.width}><strong>Name:</strong> {name}</p>
        <p className={styles.width}><strong>Email:</strong> {email}</p>
        <p className={styles.width}><strong>Phone:</strong> {phone}</p>
        <p className={styles.width}><strong>Course :</strong> {course}</p>
        <p className={styles.width}><strong>Language :</strong> {language}</p>
        <p className={styles.width}><strong>Level :</strong> {level}</p>
        {trialUserId && <p className={styles.width}><strong>Trial Id:</strong> {trialUserId}</p>}
        <p className={styles.width}><strong>Receipt Id:</strong> {receipt}</p>
        <p className={styles.width}><strong>Date:</strong> {date}</p>
        <p className={styles.width}><strong>Amount:</strong> ₹{amount}</p>
        <p className={styles.width}><strong>Duration:</strong> {duration}</p>
      </div>

      <button className={styles.downloadButton} onClick={downloadReceipt}>
        Download Receipt
      </button>
    </div>
    </div>
  );
};

export default SuccessPage;
