import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import emailjs from '@emailjs/browser';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import styles from '../../styles/Success.module.css';
import Image from 'next/image';

const SuccessPage = () => {
  const router = useRouter();
  const emailSentRef = useRef(false);
  const langauge = { "French A1": "french", "French A2": "frencha2", "Spanish A1": "spanish", "Spanish A2" : "spanisha2", "German A1" : "german", "German A2" : "germana2" }
  const URL = process.env.NEXT_PUBLIC_BACKENDURL
  const {
    name,
    email,
    phone,
    city,
    country,
    age,
    contest,
    subcategory,
    amount,
    validTill,
    receipt,
  } = router.query;

  // Today's date
  const receiptDate = new Date().toLocaleDateString('en-IN');

const generateCredentials = () => {
  const rand = () => Math.floor(1000 + Math.random() * 9000); // 4-digit number
  const clean = (str) => str.replace(/\s+/g, ''); // Remove all spaces

  const userId = `${clean(subcategory)}${clean(name)}${rand()}`;
  const password = `${clean(name)}${clean(subcategory)}${rand()}`;

  return { userId, password };
};

const saveRegistration = async (data) => {
  try {
    const response = await fetch(`${URL}/api/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (response.ok) {
      console.log('Registration saved:', result.message);
    } else {
      console.error('Error saving registration:', result.message || result.error);
    }
  } catch (err) {
    console.error('Network error saving registration:', err);
  }
};


useEffect(() => {
  if (emailSentRef.current) return;
  if (!email || !name || !contest || !subcategory || !validTill) return;

  emailjs.init('N8R7mjlL0_6PiXjuj');

  const { userId, password } = generateCredentials();

  const registrationData = {
    name,
    email,
    phone,
    city,
    country,
    age: Number(age),
    contest,
    subcategory,
    amount: 1000,
    validTill: '25 June 2025',
    receipt: receipt,
    userId,
    password,
  };

const fetchLessons = async () => {
  try {
    const response = await fetch(`${URL}/api/Auth/Users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        active: true,
        name: name,
        next: [],
        password: password,
        questions: [],
        trial: false,
        type: langauge[subcategory],
        userId: userId,
        using: true
      })
    });

    const data = await response.json();
    console.log('Response:', data);
  } catch (error) {
    console.error('Error fetching lessons:', error);
  }
};

fetchLessons();

alert(`Your credentials are:\nName: ${name} \nUser ID: ${userId}\nPassword: ${password}\nPlease check your email for details.`);

  // Save to backend
  saveRegistration(registrationData);

  // Send email with credentials
  emailjs
    .send(
      'service_rq83rkq',
      'template_cp9dbte',
      {
        to_email: email,
        user_name: name,
        userId,
        password,
        contest,
        subcategory,
        validTill,
      },
      'N8R7mjlL0_6PiXjuj'
    )
    .then(() => {
      console.log('Credentials email sent');
      emailSentRef.current = true; // Prevent further sends
    })
    .catch((err) => {
      console.error('Failed to send credentials email', err);
    });
}, [email, name, contest, subcategory, validTill]);

  const downloadReceipt = () => {
    const doc = new jsPDF();

    // Logo
    const imgData = '/newlogo1.png';
    doc.addImage(imgData, 'PNG', 175, 10, 20, 20);

    // Header
    doc.setFont('Helvetica', 'bold').setFontSize(22).text('Upskilledu Solutions', 10, 18);
    doc.setFont('Helvetica', 'normal').setFontSize(10);
    doc.text('Address: E - 200, Lajpat Nagar 1, New Delhi - 110024', 10, 30);
    doc.text('Email: info@upskilleduonline.com', 10, 35);
    doc.text('Phone: +91 97171 89650 / 659', 10, 40);

    // Invoice Details
    doc.setFont('Helvetica', 'bold').setFontSize(16).text('Invoice Details', 10, 52);
    doc.line(10, 55, 200, 55).setFontSize(10);
    [['Receipt ID', receipt], ['Date', receiptDate]].forEach(([label, val], i) =>
      doc
        .setFont('Helvetica', 'bold')
        .text(`${label}:`, 10, 62 + i * 6)
        .setFont('Helvetica', 'normal')
        .text(val, 50, 62 + i * 6)
    );

    // Customer Details
    doc.setFont('Helvetica', 'bold').setFontSize(16).text('Customer Details', 10, 82);
    doc.line(10, 85, 200, 85).setFontSize(10);
    [['Name', name], ['Email', email], ['Phone', phone], ['City', city], ['Country', country], ['Age', age]].forEach(
      ([label, val], i) =>
        doc
          .setFont('Helvetica', 'bold')
          .text(`${label}:`, 10, 92 + i * 6)
          .setFont('Helvetica', 'normal')
          .text(val, 50, 92 + i * 6)
    );

    // Contest Details
    doc.setFont('Helvetica', 'bold').setFontSize(16).text('Contest Details', 10, 132);
    doc.line(10, 135, 200, 135).setFontSize(10);
    [['Contest', contest], ['Subcategory', subcategory], ['Valid Till', validTill]].forEach(
      ([label, val], i) =>
        doc
          .setFont('Helvetica', 'bold')
          .text(`${label}:`, 10, 142 + i * 6)
          .setFont('Helvetica', 'normal')
          .text(val, 50, 142 + i * 6)
    );

    // Table of charges
    const columns = ['ID', 'Description', 'Rate', 'Qty', 'Total'];
    const data = [[1, `${contest} - ${subcategory}`, amount, 1, amount]];
    doc.autoTable({
      startY: 170,
      head: [columns],
      body: data,
      theme: 'grid',
      margin: { horizontal: 10 },
      headStyles: { fillColor: [0, 51, 102], textColor: [255, 255, 255] },
    });

    const finalY = doc.autoTable.previous.finalY + 10;
    doc.setFont('Helvetica', 'bold').text(`Grand Total: ₹${amount}`, 140, finalY);
    doc.save('Payment_Receipt.pdf');
  };

  return (
    <div className={styles.scroll}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.topleft}>
            <h5 className={styles.title}>Payment Successful!</h5>
            <p className={styles.subtitle}>Thank you for registering. Your payment was successful.</p>
          </div>
          <Image src="/assests/tic.png" className={styles.tic} width={100} height={50} alt="Success" />
        </div>

        <div className={styles.receiptDetails}>
          <h3>Receipt Details:</h3>
          <div className={styles.body}>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
          <p><strong>Phone:</strong> {phone}</p>
          <p><strong>City:</strong> {city}</p>
          <p><strong>Country:</strong> {country}</p>
          <p><strong>Age:</strong> {age}</p>
          <p><strong>Contest:</strong> {contest}</p>
          <p><strong>Subcategory:</strong> {subcategory}</p>
          <p><strong>Receipt ID:</strong> {receipt}</p>
          <p><strong>Date:</strong> {receiptDate}</p>
          <p><strong>Amount:</strong> ₹{amount}</p>
          <p><strong>Valid Till:</strong> {validTill}</p>
          </div>
        </div>

        <button className={styles.downloadButton} onClick={downloadReceipt}>
          Download Receipt
        </button>
      </div>
    </div>
  );
};

export default SuccessPage;
