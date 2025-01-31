/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    textColor:{
    },
    colors: {
      "--color-navbar-purple": "#6741d9",
      "--color-white": "#ffffff",
      "--color-search-background": "#7950f2",
      "body-background": "#212529",
    },
    boxShadow: {
      '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
    },
    extend: {
      screens: {
        wide: "1440px",
      },
    },
  },
  plugins: [],
};
