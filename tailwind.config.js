/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E1B4B",
        lowcontrast: "#FFFFFF",
        highcontrast: "#FFDD44",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      backgroundSize: {
        "double-width": "200% 100%",
      },
      animation: {
        textgradient: "textgradient 3s linear infinite",
        fade: "fade 3s ease-in-out infinite",
      },
      keyframes: {
        textgradient: {
          "0%%": {
            "background-position": "0% 50%",
          },
          "50%": {
            "background-position": "100% 50%",
          },
          "100%": {
            "background-position": "200% 50%",
          },
        },
        fade: {
          "0%, 100%": { opacity: 0 },
          "50%": { opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};
