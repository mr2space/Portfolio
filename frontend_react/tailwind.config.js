/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:[
        {'lg-backg':'#F3F8FF'},
        {'backg':'#F7EFE5'},
        {'lg-primary':'#F1EAFF'},
        {'primary':'#050C9C'},
      ]
    },
  },
  plugins: [],
}

