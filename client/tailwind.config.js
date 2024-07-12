/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-form": "#9fc4d0",
        "switch-green": "#3ca38b",
        "switch-pink": "#572257",
        card: "#181818",
        "svg-color": "#33CCCC",
        "scnd-card": "#383a40,",
      },
      fontFamily: {
        sergoui: ["Sergoui", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
