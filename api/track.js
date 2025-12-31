export const config = {
  runtime: 'edge',
};

export default async function handler(request) {
  // 构建响应头
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json',
  };

  // 处理 OPTIONS 预检
  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers });
  }

  // 处理 POST 请求
  if (request.method === 'POST') {
    try {
      const data = await request.json();
      console.log('Received:', data);
      
      return new Response(
        JSON.stringify({ 
          success: true,
          endpoint: 'vercel-china',
          timestamp: new Date().toISOString()
        }),
        { status: 200, headers }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500, headers }
      );
    }
  }

  return new Response(
    JSON.stringify({ error: 'Method not allowed' }),
    { status: 405, headers }
  );
}
