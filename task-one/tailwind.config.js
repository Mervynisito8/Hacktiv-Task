/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        prime: "#35B787",
        sec: "#61BE6E",
        acsent: "#74C05C",
      },
      fontFamily: {
        pop: ["Poppins"],
        mont: ["Montserrat"],
      },
    },
  },
  plugins: [],
};
