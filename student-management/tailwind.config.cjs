/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
    },
    fontSize: {
      sm:'14px',
      lg:'16px',
      
    }
  },
  plugins: [],
}
