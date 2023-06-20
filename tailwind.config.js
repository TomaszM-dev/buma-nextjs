/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      shadow: "#46459bb8",
      white: "#fff",
      blue: "#1119D6",
      gold: "#ffd700",
      black: "#000",
    },
    extend: {
      backgroundImage: {
        hero_img: "url('/img/utilities/buma-hero.avif')",
      },
    },
  },
  plugins: [],
};
