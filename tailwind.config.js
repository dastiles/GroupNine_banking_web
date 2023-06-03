/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'lightGrey': '#f3f3f4',
        'lightBlue': '#007Aff'
      },
      colors: {
        'cobalt': '#0033a1',
        'dodgerBlue': '#0089ff',
        'prusBlue': '#3c4b6c'
      },
      backgroundImage: {
        'bg_picture': 'url("/assets/card.jpg")'
      },
    },
  },
  plugins: [],
}

