/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#FF9F45",
        second: "#464645",
        highlight: "#FF4545",
      },
    },
  },
  plugins: [],
};
