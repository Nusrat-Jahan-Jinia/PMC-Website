/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
  './components/**/*.{html,js}',],
  theme: {
    extend: {
      colors: {
        pmc: {
          100: "#AF9C3F",
        },
      },
    },
    fontFamily: {
      headline: ['Lexend Deca', 'sans-serif'],
    },
  },
  plugins: [],
};
