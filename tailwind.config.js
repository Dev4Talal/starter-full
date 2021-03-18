module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#00cc55',
        'secondary': '#00ff55'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
