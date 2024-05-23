/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#12151f',
      },
      width: {
        'w-45': '45%',
      },
    },
  },
  plugins: [],
}
