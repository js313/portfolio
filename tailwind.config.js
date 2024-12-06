/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBackground: "#070831",
        textPrimary: "#fff4d6",
        textSecondary: "#908a76",
        primary: "#1e293b", // Dark blue-gray for modern minimalism
        accent: "#3b82f6", // Blue for interactive elements
      },
      fontFamily: {
        fontFamily: {
          sans: ["Brandon Grotesque", "sans-serif"], // Setting Brandon Grotesque as default font
        },
      },
    },
  },
  plugins: [],
};
