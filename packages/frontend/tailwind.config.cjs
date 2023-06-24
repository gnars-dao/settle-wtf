/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Londrina Solid", ...fontFamily.sans],
        balsamiq: ["Balsamiq", ...fontFamily.sans],
      },
      keyframes: {
        infiniteScroll: {
          "0%": { transform: "translate(-3%)" },

          "100%": { transform: "translate(calc(100% + 2rem))" },
        },
        revInfiniteScroll: {
          "0%": { transform: "translate(-103%, 0)" },
          "100%": { transform: "translate(110%, 0)" },
        },
        wave: {
          "0%": { transform: "rotate(0.0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10.0deg)" },
          "60%": { transform: "rotate(0.0deg)" },
          "100%": { transform: "rotate(0.0deg)" },
        },
        myAnim: {
          "0%": { transform: "scale(1)" },

          "100%": { transform: "scale(1.05)" },
        },
        myAnimRev: {
          "0%": { transform: "scale(1.05)" },

          "100%": { transform: "scale(1.0)" },
        },
      },
      animation: {
        infiniteScroll: "infiniteScroll 6s linear infinite",
        "waving-hand": "wave 4s linear infinite",
        revInfiniteScroll: "revInfiniteScroll 6s linear infinite",
        "waving-hand": "wave 4s linear infinite",
        scaler: "myAnim 0.1s ease-in-out both",
        scalerRev: "myAnim 0.1s ease-in-out both",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
