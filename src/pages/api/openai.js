export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ error: 'Method not allowed' });
    }
  
    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiKey = process.env.OPENAI_API_KEY; // Use server-side environment variable (no NEXT_PUBLIC)
  
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(req.body),
      });
  
      if (!response.ok) {
        return res.status(response.status).json({ error: response.statusText });
      }
  
      const result = await response.json();
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
  