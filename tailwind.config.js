/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pink: {
          1: "rgba(246, 162, 197, 0.8)",
          2: "#FEECF3",
          3: "#EE5897",
        },
      },

      fontFamily: {
        judson: ["judson", "sans-serif"],
        caraterre: ["carattere", "sans-serif"],
      },

      boxShadow: { card: "12px 12px 12px rgba(0, 0, 0, 0.25)" },
    },
  },
  plugins: [],
};
