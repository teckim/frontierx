const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Manrope'", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: 'rgba(252, 54, 76, 1)',
        dark: 'rgba(13, 13, 13, 1)',
      }
    },
  },
  plugins: [],
}
