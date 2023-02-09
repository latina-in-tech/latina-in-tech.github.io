/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  plugins: [],
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      'primary-lighter': '#78c0e0',
      'primary-light': '#449dd1',
      primary: '#192bc2',
      'primary-dark': '#150578',
      'primary-darker': '#0e0e52',
      gray: colors.gray,
      white: colors.white,
    },
    fontFamily: {
      mono: ['"Ubuntu Mono"'],
      sans: ['"Ubuntu"'],
    },
  },
  darkMode: false,
};
