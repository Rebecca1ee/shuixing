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
          100: '#FFF0F5', // Light pink background
          400: '#FFA6C9', // Medium pink
          500: '#FF85A2', // Main pink
          600: '#FF6B88', // Deep pink
          700: '#FF4D6D', // Deeper pink
        },
      },
    },
  },
  plugins: [],
}