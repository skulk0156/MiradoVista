module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mvblack: "#000000",
        mvgold: "#D4AF37",
        mvwhite: "#ffffff",
      },

      keyframes: {
        navbarFade: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        slideIn: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        menuFade: {
          "0%": { opacity: 0, transform: "translateY(-10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },

      animation: {
        navbarFade: "navbarFade 1s ease",
        float: "float 5s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease",
        slideIn: "slideIn 1s ease",
        menuFade: "menuFade 1s ease forwards",
      },
    },
  },
  plugins: [],
}
