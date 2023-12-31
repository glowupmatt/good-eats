/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      yellow: "#f0e974",
      turquoise: "#8ed6cF",
      blue: "#7ec9e6",
      red: { pink: "#f28772", offWhite: "#E8DACC" },
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
    screens: {
      sm: "640px",

      md: "768px",

      lg: "1024px",

      xl: "1280px",

      xxl: "1536px",
    },
  },
  plugins: [],
};
