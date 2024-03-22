/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        iranSans : ['IRANSans'],
        dana: ['dana'],
      },
      colors: {
        grey : '#abb8c3',
        textGray : '#f3f4f6',
        abi: '#0fa5e7',
        lightGreen: '#85d529',
        darkGreen: '#41700a',
        offDark: '#111828',
        zard: '#fbbf24',
      },
    },
  },
  plugins: [],
}

