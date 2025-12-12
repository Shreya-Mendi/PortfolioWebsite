/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightGreen: "#3B7EA1",
        darkGreen: "#012169",
        dukeBlue: "#012169",
        lightDukeBlue: "#3B7EA1",
        lightBackground: "#F8F8F8",
        darkBackground: "#22262D",
        darkBlack: "#000000",
        grayColor: "#22262D",
        yellowColor: "FFE033",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
