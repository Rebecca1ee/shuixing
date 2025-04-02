import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  try {
    // 这里使用一个简化的方法来判断水星是否逆行
    // 实际应用中，你可能需要使用专业的天文API
    // 例如 Astronomy API 或 NASA API
    
    // 这里我们使用一个模拟的API调用
    // 在实际项目中替换为真实的API
    const response = await axios.get('https://api.astronomyapi.com/api/v2/bodies/mercury', {
      headers: {
        // 你需要注册获取API密钥
        'Authorization': 'Basic ' + Buffer.from(process.env.ASTRONOMY_API_ID + ':' + process.env.ASTRONOMY_API_SECRET).toString('base64')
      }
    });
    
    // 解析响应以确定水星是否逆行
    // 这里使用模拟数据，实际应用中需要根据API返回的数据结构进行解析
    const isRetrograde = Math.random() < 0.3; // 模拟30%的概率水星逆行
    
    return NextResponse.json({ isRetrograde });
  } catch (error) {
    console.error('获取水星逆行数据失败:', error);
    return NextResponse.json({ error: '获取数据失败' }, { status: 500 });
  }
}