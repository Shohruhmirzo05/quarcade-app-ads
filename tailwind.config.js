/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class", '[data-theme="dark"]'],
  content: [
    "./index.html",
    "./{apps,privacy,support}/**/*.html",
    "./ts/**/*.{ts,js}"
  ],
  theme: {
    extend: {
      colors: {
        "fx-blue": "#59b5ff",
        "fx-pink": "#ff4dc4",
      },
      animation: {
        "gradient-text": "gradientText 6s ease infinite",
      },
      keyframes: {
        gradientText: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [],
  // safelist: ["dark", "bg-gray-800", "text-white", "from-fx-pink", "to-fx-blue"],
};
