/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      brightness: {
        35: '.35'
      }
    },
  },
  plugins: [require("flowbite/plugin")],
};
