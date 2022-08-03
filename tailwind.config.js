/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "white": "#ffffff",
      "violet": "#070724",
      "dark-gray": "#38384F",
      "gray": "#838391",
      "aquamarine": "#419EBB",
      "yellow": "#EDA249",
      "purple": "#6F2ED6",
      "dark-red": "#D14C32",
      "light-red": "#D83A34",
      "crimson": "#CD5120",
      "teal": "#1EC2A4",
      "blue": "#2D68F0"
    },
    extend: {
      fontFamily: {
        'paragraph': ['League Spartan', 'sans-serif'],
        'heading': ['Antonio', 'sans-serif'],
      }
    }
  },
  plugins: [],
}