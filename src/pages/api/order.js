import Razorpay from 'razorpay';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, email, phone, trialUserId, amount } = req.body;

      const instance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
      });
      const receiptId = 'receipt_' + Math.random().toString(36).substring(2, 10);
      const options = {
        amount: amount * 100, // Amount in paise
        currency: 'INR',
        receipt: receiptId,
        payment_capture: 1,
      };

      const order = await instance.orders.create(options);

      res.status(200).json({
        id: order.id,
        amount: order.amount,
        currency: order.currency,
        receipt: receiptId,
      });
    } catch (error) {
      console.error('Error creating order:', error);
      res.status(500).json({ error: 'Failed to create Razorpay order' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
