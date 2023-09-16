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
      white: "#e5e7eb", 
      dwhite: "#f4f4f5",
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

