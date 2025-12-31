// api/track.js
export default async function handler(req, res) {
  // 允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data = req.body;
    console.log('Received:', data.eventType, data.userId);
    
    return res.status(200).json({ 
      success: true,
      endpoint: 'vercel-china'
    });
  } catch (error) {
    return res.status(500).json({ error: 'Error' });
  }
}
