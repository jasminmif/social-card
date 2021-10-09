const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'dm-serif': ['DM Serif Display', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif'],
    },
    extend: {},
    colors: colors,
    transitionProperty: {
      'width': 'width'
    }
  },
  variants: {
    extend: {
      borderColor: ['active'],
      textColor: ['active'],
      display: ["group-hover"],
      width: ["responsive", "hover"],
      transitionDelay: ['hover', 'focus']
    },
  },
  plugins: [],
}
