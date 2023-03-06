/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
