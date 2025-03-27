/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        splg: "1544px",
      },
      colors: {
        pink: {
          1: "#DE7EC6",
          2: "#FFCCF2",
          3: "#EE5897",
        },
        cream: {
          1: "#FDF8ED",
        },
        black: {
          1: "#222222",
        },
      },

      fontFamily: {
        judson: ["judson", "sans-serif"],
        caraterre: ["carattere", "sans-serif"],
        perandory: ["perandory", "sans-serif"],
      },

      boxShadow: { card: "12px 12px 12px rgba(0, 0, 0, 0.25)" },
    },
  },
  plugins: [],
};
