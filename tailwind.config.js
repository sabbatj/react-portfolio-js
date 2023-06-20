/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'blend-overlay': "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))",
      },
      textColor: {
        gold: "#FFD700",
      },
    },
  },
}


