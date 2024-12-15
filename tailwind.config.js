/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#070831",
        primary: "#fff4d6",
        secondary: "#908a76",
      },
      fontFamily: {
        fontFamily: {
          sans: ["Brandon Grotesque", "sans-serif"], // Setting Brandon Grotesque as default font
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
