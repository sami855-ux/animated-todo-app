/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgcolor: "#202020",
        textcolor: "#dfe0e5",
        gradientFrom: "#de5fe3",
        gradietTo: "#f3a940",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        edu: ["Edu AU VIC WA NT Pre", "cursive"],
      },
    },
  },
  plugins: [],
}
