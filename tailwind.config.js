const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react\\class-list.json"
  ],
  // use the `class` strategy so adding `document.documentElement.classList.add('dark')` enables dark mode
  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [flowbiteReact],
}