/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        fontFamily: {
          custom: ['twister', 'sans'],
          /* You can define multiple font families here */
        },
      },
    },
  },
  plugins: [],
}