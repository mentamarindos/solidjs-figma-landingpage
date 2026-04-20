/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          bg: "#ff0000",
          card: "#000000",
          "card-hover": "#0a0a0a",
        },
      },
    },
  },
  plugins: [],
}
