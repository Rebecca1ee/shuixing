'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isRetrograde, setIsRetrograde] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function checkMercuryRetrograde() {
      try {
        const response = await fetch('/api/mercury');
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setIsRetrograde(data.isRetrograde);
        setError(null);
      } catch (error) {
        console.error('Failed to fetch Mercury retrograde data:', error);
        setError('Unable to check if Mercury is in retrograde. Please try again later.');
      } finally {
        setLoading(false);
      }
    }

    checkMercuryRetrograde();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-pink-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8 text-pink-600">
          今日水星是否逆行？
        </h1>
        
        {loading ? (
          <div className="text-pink-500 text-xl animate-pulse">
            正在查询中...
          </div>
        ) : error ? (
          <div className="text-red-500 text-xl">
            {error}
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <div className={`text-8xl font-bold mb-4 ${isRetrograde ? 'text-red-500' : 'text-green-500'}`}>
              {isRetrograde ? 'YES' : 'NO'}
            </div>
            
            <p className="text-xl text-pink-700 mt-4">
              {isRetrograde 
                ? '水星正在逆行，请小心沟通和旅行计划！' 
                : '水星不在逆行，可以放心进行重要决策。'}
            </p>
          </div>
        )}
        
        <div className="mt-16 text-pink-400 text-sm">
          <p>每日自动更新 • 数据仅供参考</p>
        </div>
      </div>
    </main>
  );
}