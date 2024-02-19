/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)'}, 
        'tallscrren': { 'raw': '(min-aspect-ratio: 13/20)'},
      },
      keyframes: {
        'open-menu': {
          '0%': {transform: 'scaleY(0)'},
          '80%': {transform: 'scaleY(1.2)'},
          '100%': {transform: 'scaleY(1)'},
        },
      }, 
      animation: {
        'open-menu': 'open-menu 0.5s ease-in-out forwards',
      }
    },
  },
  plugins: [],
}

