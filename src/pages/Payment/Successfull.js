import React from 'react';
import { useRouter } from 'next/router';
import jsPDF from 'jspdf';
import styles from '../../styles/Success.module.css'; // Import the CSS module

const SuccessPage = () => {
  const router = useRouter();
  const { name, email, phone, trialUserId, amount, receipt, date } = router.query;

  // console.log(receipt)

  const downloadReceipt = () => {
    const doc = new jsPDF();
  
  // Add your logo
  const logoWidth = 13; // Desired width in PDF
  const originalLogoWidth = 10; // Original width of the logo in pixels
  const originalLogoHeight = 10; // Original height of the logo in pixels

  // Calculate height to maintain aspect ratio
  const logoHeight = (logoWidth / originalLogoWidth) * originalLogoHeight;

  const imgData = '/newlogo1.png'; // Path to your logo in the public folder

  // Add logo to PDF
  doc.addImage(imgData, 'PNG', 20, 15, logoWidth, logoHeight);
  
    // Add company name
    doc.setFont('Helvetica', 'bold');
    doc.setFontSize(18);
    doc.text('Upskilledu Solutions', 35, 21);
  
    // Add subtitle
    doc.setFontSize(14);
    doc.setFont('Helvetica', 'normal');
    doc.text('Payment Receipt', 35.5, 27);
  
    // Add receipt details
    doc.setFontSize(12);
    doc.text(`Name: ${name}`, 20, 50);
    doc.text(`Email: ${email}`, 20, 60);
    doc.text(`Phone: ${phone}`, 20, 70);
    {trialUserId && doc.text(`Trial ID: ${trialUserId}`, 20, 80);}
    doc.text(`Receipt Number: ${receipt}`, 20, 90);
    doc.text(`Date: ${date}`, 20, 100);
    doc.text(`Amount: Rs ${amount}`, 20, 110);
  
    // Add footer
    doc.setFontSize(10);
    doc.setFont('Helvetica', 'italic');
    doc.text('Thank you for choosing Upskilledu Solutions.', 20, 130);
  
    doc.save('Payment_Receipt.pdf');
  };
  

  return (
    <div className={styles.scroll}>
    <div className={styles.container}>
      <h1 className={styles.title}>Payment Successful!</h1>
      <p className={styles.subtitle}>Thank you for your purchase! Your payment was successful.</p>

      <div className={styles.receiptDetails}>
        <h3>Receipt Details:</h3>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
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
