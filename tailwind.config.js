/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'brand-red': '#EF003F',      // Newsletter
        'brand-feed': '#006B69',     // Feed
        'brand-orange': '#F4393A',   // Desafios
        'brand-yellow': '#F4A42F',   // Comunidade
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};