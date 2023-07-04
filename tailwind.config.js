/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        primary: '#000012',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        cardBg: '#2c2744',
        orange: '#ff8d00',
        blue: '#58a9ff',
        primaryLight: '#efffff',
        secondaryLight: '#425c65',
        tertiaryLight: '#d6f1fe',
        cardBgLight: '#c2dae6',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
    },
  },
  plugins: [],
};
