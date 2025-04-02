'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [isRetrograde, setIsRetrograde] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkMercuryRetrograde() {
      try {
        const response = await fetch('/api/mercury');
        const data = await response.json();
        setIsRetrograde(data.isRetrograde);
      } catch (error) {
        console.error('获取水星逆行数据失败:', error);
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
          <motion.div 
            className="text-pink-500 text-xl"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            正在查询中...
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center"
          >
            <motion.div 
              className={`text-8xl font-bold mb-4 ${isRetrograde ? 'text-red-500' : 'text-green-500'}`}
              whileHover={{ scale: 1.1 }}
            >
              {isRetrograde ? 'YES' : 'NO'}
            </motion.div>
            
            <p className="text-xl text-pink-700 mt-4">
              {isRetrograde 
                ? '水星正在逆行，请小心沟通和旅行计划！' 
                : '水星不在逆行，可以放心进行重要决策。'}
            </p>
          </motion.div>
        )}
        
        <div className="mt-16 text-pink-400 text-sm">
          <p>每日自动更新 • 数据仅供参考</p>
        </div>
      </div>
    </main>
  );
}