/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "screen-tablet": "960px",
      "screen-mobile": "420px",
    },
    extend: {
      colors: {
        "primary-purple": "#4E148C",
        "secondary-lavender": "#858AE3",
        "primary-gray": "#E8EBF2",
        "primary-white": "#F7F9F7",
      },
    },
  },
  plugins: [],
};
