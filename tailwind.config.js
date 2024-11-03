/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#646cff',
          hover: '#535bf2',
        },
        dark: {
          100: '#1a1b1e',
          200: '#141517',
          300: '#101113',
        },
      },
    },
  },
  plugins: [],
}