/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        "background-light": "#FDFBF7",
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["Lato", "sans-serif"],
      },
      borderRadius: {
        "2xl": "24px",
      },
    },
  },
  plugins: [],
};
