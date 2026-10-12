/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}", "./lib/**/*.js"],
  theme: {
    extend: {
      colors: {
        brand: "#00E5FF",
        ink: "#121212",
      },
    },
  },
  plugins: [],
};
