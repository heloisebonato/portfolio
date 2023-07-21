/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      '2xl': 32,
      '4xl': 36,
      '6xl': 60
    },
    colors: {
      transparent: 'transparent',
      limon: '#C0D700',

      black: {
        900: '#000',
        800: '#232323',
        400: "#363636"
      },

      white: {
        900: '#FFF',
        800: '#FBF9FA',
      },
    },
    extend: {
      fontFamily: {
        sans: 'avenir-regular, sans-serif',
        black: 'avenir-black',
        medium: 'avenir-medium',
        milkipa: 'milkipa',
      },
    },
  },
  plugins: [],
}
