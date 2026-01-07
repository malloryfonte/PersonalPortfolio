/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        splg: "1544px",
      },
      colors: {
        blue: {
          dark: "#40476d",
          light: "#d5dcf9",
          mid: "#666a99",
        },
        cream: {
          1: "#FDF8ED",
        },
        black: {
          1: "#222222",
        },
        pink: { 1: "#cf4464" },
      },
      backgroundImage: {
        "stripes-vertical": `
          repeating-linear-gradient(
            to right,
            rgba(27, 31, 53, 0.4) 0,
            rgba(27, 31, 53, 0.4) 20px,
            rgba(64, 71, 109, 0.3) 20px,
            rgba(64, 71, 109, 0.3) 40px
          ),
          linear-gradient(
            to right,
            #40476d,
            #666a99
          )
        `,
      },

      fontFamily: {
        judson: ["judson", "sans-serif"],
        caraterre: ["carattere", "sans-serif"],
        perandory: ["perandory", "sans-serif"],
        brasika: ["brasika", "sans-serif"],
      },

      boxShadow: { card: "12px 12px 12px rgba(0, 0, 0, 0.25)" },
    },
  },
  plugins: [],
};
