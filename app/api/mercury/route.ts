import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // For demonstration purposes, we'll use a simple random function
    // In a production app, you would use a real astronomy API
    const isRetrograde = Math.random() < 0.3; // 30% chance of retrograde
    
    return NextResponse.json({ isRetrograde });
  } catch (error) {
    console.error('Failed to get Mercury retrograde data:', error);
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}