/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#780000",
        "primary-light": "#C1121F",
        neutral: "#FCF0D5",
        secondary: "#003049",
        "secondary-light": "#669BBC",
      },
    },
  },
  plugins: [],
};
