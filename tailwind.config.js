/** @type {import('tailwindcss').Config} */

const colors = require('./components/constants/colors');

module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './app/components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
  },
  plugins: [],
};
