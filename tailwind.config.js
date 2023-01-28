/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark-yellow": "#FFA02B",
        "primary-light-yellow": "#FCE98F",
        "secondary-dark-yellow": "#FBBA75",
        "green-grey": "#89BB9A",
        "cobalt-blue": "#A0F5F5",
        "primary-red": "#FF2A65",
        "primary-dark": "#1C1B2B",
        "secondary-dark": "#10111A",
        "primary-light": "#F4F6FA",
        "secondary-light": "#F1F2F6",
        "primary-orange": "#FC5830",
        "light-grey": "#B5BAC7",
        "white": "#FFFFFF",
        "semi-transparent": "rgba(0, 0, 0, 0.6)",
        "primary-green": "#08CD92",
        "primary-violet": "#5E0BD6",
        "primary-pink": "#FF10E3",
        "vermillion": "#FF5968",
      },
      fontFamily: {
        "manrope": "'Manrope', sans-serif",
        "fira-code": "'Fira Code', monospace",
        "quicksand": "'Quicksand', sans-serif"
      }
    },
  },
  plugins: [],
}