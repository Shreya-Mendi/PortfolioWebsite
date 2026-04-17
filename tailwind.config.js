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
        lightGreen: "#68B2A0",
        darkGreen: "#2C6975",
        dukeBlue: "#012169",
        dukeNavy: "#001a57",
        lightBackground: "#F8F9FA",
        darkBackground: "#22262D",
        darkBlack: "#111111",
        grayColor: "#22262D",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
