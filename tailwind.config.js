/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        pink: {
          100: '#FFF0F5', // 浅粉色背景
          400: '#FFA6C9', // 中等粉色
          500: '#FF85A2', // 主粉色
          600: '#FF6B88', // 深粉色
          700: '#FF4D6D', // 更深粉色
        },
      },
    },
  },
  plugins: [],
}