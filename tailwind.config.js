/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#EAD7E5",
        gray: "#8F9AB2",
      },
      fontFamily: {
        poppins: 'Poppins, sans-serif'
      }
    },
  },
  plugins: [],
};
