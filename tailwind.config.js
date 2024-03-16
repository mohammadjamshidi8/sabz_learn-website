/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        iranSans : ['IRANSans']
      },
      colors: {
        gray : '#abb8c3',
        textGray : '#f3f4f6'
      }
    },
  },
  plugins: [],
}

