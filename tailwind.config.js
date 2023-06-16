/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      yellow: "#f0e974",
      turquoise: "#8ed6cF",
      blue: "#7ec9e6",
      red: "#f28772",
      green: "#9ad58f",
      white: "#ffffff",
      gray: {
        default: "rgb(231 229 228)",
        dark: "#333333",
        light: "#F5F5F5",
      },
    },
    fontFamily: {
      sans: ["League Spartan", "sans-serif"],
    },
  },
  plugins: [],
};
