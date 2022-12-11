/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./components/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        pmc: {
          100: "#AF9C3F",
        },
      },
    },
    fontFamily: {
      myfont: ["Lexend Deca", "sans-serif"],
      headfont: ["Playfair Display", "serif"],
    },
  },
  plugins: [require("flowbite/plugin")],
};
