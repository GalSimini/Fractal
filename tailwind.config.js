/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          red: "#ef4444",
          teal: "#0d9488",
          orange: "#f97316",
          yellow: "#f59e0b",
        },
      },
    },
  },
  plugins: [],
};