/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': { 'min': '300px', 'max': '480px' },
      'xsl': { 'min': '480px', 'max': '1023px ', 'orientation': 'landscape'},




      ...defaultTheme.screens,
    },

  },
  plugins: [],
}
