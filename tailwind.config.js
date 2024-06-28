/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#222",
      lightGray: "#f8f8f8",
      mainBg: "#a1d3c3",
      btnBg: "#383838",
    },
    extend: {
      fontFamily: {
        apercu: ["Apercu", "sans-serif"],
      },
    },
  },
  plugins: [],
};
