/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e293b", // Dark blue-gray for modern minimalism
        accent: "#3b82f6", // Blue for interactive elements
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Clean sans-serif font
      },
    },
  },
  plugins: [],
};
