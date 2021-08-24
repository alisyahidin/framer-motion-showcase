const { cursor } = require('tailwindcss//defaultTheme')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    cursor: {
      grab: 'grab',
      grabbing: 'grabbing',
      ...cursor
    },
    extend: {},
  },
  variants: {
    extend: {
      cursor: ['active']
    },
  },
  plugins: [],
}
