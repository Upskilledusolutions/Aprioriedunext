import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const PaymentPage = () => {
  const router = useRouter();
  const { name, email, phone, trialUserId, amount, receipt, course } = router.query;
  console.log(name)

  useEffect(() => {
    const initiatePayment = async () => {
      const formData = {
        name: name || '', // Fallback to empty string if undefined
        email: email || '',
        phone: phone || '',
        trialUserId: trialUserId || '',
        amount: amount || 0,
      };

      if (!formData.name || !formData.email || !formData.phone ) {
        console.error('Missing required form data');
        return;
      }

      try {
        const response = await fetch('/api/order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        const options = {
          key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
          amount: data.amount,
          currency: data.currency,
          name: 'Upskilledu Solutions',
          description: 'Payment for Full Version',
          image: '/newlogo1.png',
          order_id: data.id,
          handler: function (response) {
            router.push({
              pathname: '/Payment/Successfull',
              query: {
                ...formData,
                receipt: receipt,
                course: course,
                date: new Date().toLocaleDateString(),
              },
            });
          },
          prefill: { name, email, contact: phone, receipt },
          theme: { color: '#F37254' },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error('Error initiating payment:', error);
      }
    };

    if (router.isReady && name && email && phone ) {
      initiatePayment();
    }
  }, [router.isReady, name, email, phone]);

  return <p>Processing your payment...</p>;
};

export default PaymentPage;
