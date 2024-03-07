/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        yellow: '#F4D04E', // Corrected format using hexadecimal
        white: '#FFFFFF',  // Corrected format using hexadecimal
        gray: '#7F7F7F',
        black: '#000000'
      }
    },
  },
  plugins: [],
}
