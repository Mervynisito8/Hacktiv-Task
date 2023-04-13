/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        prime: "#587850",
        sec: "#709078",
        acsent: "#78B0A0",
        ter: "#F8D0B0",
      },
      fontFamily: {
        pop: ["Poppins"],
        mont: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
