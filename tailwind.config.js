/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      animation: {
        'pulse-fast': 'pulse 1s linear infinite'
      },
      colors: {
        yellow_gb: '#ffe200'
      }
    }
  },
  plugins: []
}
