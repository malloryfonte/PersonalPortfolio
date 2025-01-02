/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          1: "#F6A2C5",
          2: "#FEECF3",
        },
      },

      fontFamily: {
        judson: ["judson", "sans-serif"],
      },
    },
  },
  plugins: [],
};
