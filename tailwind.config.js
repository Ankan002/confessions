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
        primaryDarkYellow: "#F9BB75",
        primaryLightYellow: "#FCE98F",
        greenGrey: "#89BB9A",
        cobaltBlue: "#A0F5F5",
        primaryRed: "#FF2A65",
        primaryDark: "#1C1B2B",
        secondaryDark: "#10111A",
        primaryLight: "#F4F6FA",
        secondaryLight: "#F1F2F6",
        primaryOrange: "#FC5830",
        lightGrey: "#B5BAC7",
        white: "#FFFFFF",
        semiTransparent: "rgba(0, 0, 0, 0.6)",
        primaryGreen: "#08CD92",
      }
    },
  },
  plugins: [],
}