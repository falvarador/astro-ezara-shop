const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--inter)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: "#595CFF",
        secondary: "#8C8EFF",
        primaryDark: "#383BE4",
        positive: "#00CB6F",
        warning: "#FFBC2C",
        negative: "#EE7764",
        active: "#595CF",
        white: "#FFFFFF",
        snow: "#F9F9FB",
        palegray: "#F0F0F5",
        ligthgray: "#E6E6EB",
        gray: "#AFB1BD",
        darkgray: "#82828B",
        black: "#000000",
      },
    },
    plugins: [],
  },
};
