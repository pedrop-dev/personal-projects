/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      //Neutral
      white: "#f5f5f5", 
      dwhite: "#fafaf9",
      gray: "#a1a1aa",
      dgray: "#6b7280",
      //Green
      green: "#6ee7b7",
      hgreen: "#a7f3d0",
      //Red
      red: "#dc2626",
    }
  },
  plugins: [],
}

