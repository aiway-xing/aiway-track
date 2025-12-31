// api/track.js
export default async function handler(req, res) {
  // 设置 CORS - 允许所有来源
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');

  // 处理 OPTIONS 预检请求
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // 接受 GET 和 POST 请求
  if (req.method === 'POST' || req.method === 'GET') {
    try {
      const data = req.method === 'POST' ? req.body : req.query;
      
      console.log('✅ Tracking data received:', {
        eventType: data.eventType || 'unknown',
        userId: data.userId || 'unknown',
        timestamp: new Date().toISOString()
      });
      
      return res.status(200).json({ 
        success: true,
        message: 'Data tracked successfully',
        endpoint: 'vercel-china',
        timestamp: new Date().toISOString()
      });
    } catch (error) {
      console.error('❌ Error:', error);
      return res.status(500).json({ 
        success: false,
        error: error.message 
      });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
