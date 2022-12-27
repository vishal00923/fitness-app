/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#f8f4eb",
        "gray-50": "#efe6e6",
        "gray-100": "#dfcccc",
        "gray-500": "#5e0000",
        "primary-100": "#ffe1e0",
        "primary-300": "#ffa6a3",
        "primary-500": "#ff6b66",
        "secondary-400": "#ffcdf8",
        "secondary-500": "#ffc132",
      },
      backgroundImage: {
        "gradient-yellowred":
          "linear-gradient(90deg, #ff616a 0%, #ffc837 100%, )",
        "mobile-home": "url('./src/assets/homepage_graphic.png')",
      },
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      content: {
        waves: "url('./src/assets/waves.png')",
        circles: "url('./src/assets/circles.png')",
        sparkles: "url('./src/assets/sparkles.png')",
        evolveText: "url('./src/assets/evolve.png')",
      },
      screens: {
        xs: "480px",
        sm: "768px",
        md: "1080px",
      },
    },
  },
  plugins: [],
};
