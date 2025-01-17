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
          100: '#F1E3D3',
          200: '#E6D5BA',
          300: '#C7A687',
          400: '#8B593E',
          500: '#5C3D2E'
        }
      }
    },
  },
  plugins: [],
}