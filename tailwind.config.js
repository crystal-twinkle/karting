/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./css/styles.css"
  ],
  theme: {
    extend: {
      color: {
        'black': '#1E1E1E',
      },
    }
  },
  plugins: [],
}
