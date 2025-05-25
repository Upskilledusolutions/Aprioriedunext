import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const PaymentPage = () => {
  const router = useRouter();
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

  useEffect(() => {
    const initiatePayment = async () => {
      const payload = {
        name: name || '',
        email: email || '',
        phone: phone || '',
        city: city || '',
        country: country || '',
        age: age || '',
        contest: contest || '',
        subcategory: subcategory || '',
        amount: amount || 0,
        validTill: validTill || '',
      };

      // Ensure required fields
      if (!payload.name || !payload.email || !payload.phone) {
        console.error('Missing required form data');
        return;
      }

      try {
        const response = await fetch('/api/order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        const data = await response.json();

        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: data.amount,
          currency: data.currency,
          name: 'Upskilledu Solutions',
          description: `Payment for ${payload.contest}`,
          image: '/newlogo1.png',
          order_id: data.id,
          handler: function (razorpayResponse) {
            // On successful payment
            router.push({
              pathname: '/Payment/ContestSuccessfull',
              query: {
                ...payload,
                receipt,
                date: new Date().toLocaleDateString('en-IN'),
              },
            });
          },
          prefill: { name: payload.name, email: payload.email, contact: payload.phone },
          theme: { color: '#F37254' },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error('Error initiating payment:', error);
      }
    };

    if (router.isReady && name && email && phone) {
      initiatePayment();
    }
  }, [router.isReady, name, email, phone, city, country, age, contest, subcategory, amount, validTill, receipt]);

  return <p>Processing your payment...</p>;
};

export default PaymentPage;
