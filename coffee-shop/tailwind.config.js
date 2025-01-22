/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'coffee': {
          100: '#E6E4E3',
          200: '#D1CCC8',
          300: '#8E7F77',
          400: '#564A44',
          500: '#2B1700'
        }
      }
    },
  },
  plugins: [],
}