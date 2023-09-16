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
      green: "#4ade80",
      dgreen: "#22c55e",
      //Red
      red: "#dc2626",
    }
  },
  plugins: [],
}

