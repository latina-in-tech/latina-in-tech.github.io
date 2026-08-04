/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  plugins: [require('@tailwindcss/typography')],
  content: ['./src/**/*.{html,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', ...defaultTheme.fontFamily.sans]
      }
    },
    colors: {
      'primary-lighter': '#78c0e0',
      'primary-light': '#449dd1',
      primary: '#192bc2',
      'primary-dark': '#150578',
      'primary-darker': '#0e0e52',
      gray: colors.gray,
      white: colors.white,
      slate: colors.slate,
      transparent: colors.transparent,
      green: colors.green,
      blue: colors.blue,
      red: colors.red
    }
  }
};
