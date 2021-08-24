const colors = require('tailwindcss/colors');
module.exports = {
  // mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/*.{js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        emerald: colors.emerald,
        teal: colors.teal,
        fuchsia: colors.fuchsia,
        purple: colors.purple,
        rose: colors.rose,
        pink: colors.pink,
        amber: colors.amber,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
