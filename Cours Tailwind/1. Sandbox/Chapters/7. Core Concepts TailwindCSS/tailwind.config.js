module.exports = {
  // Ajout darkmode
  darkMode: "class",
  content: ["./pages/*.html"],
  theme: {
    extend: {
      animation: {
        "fade": "fade 3s ease-out"
      },
      keyframes: {
        fade: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 }
        }
      }
    },
  },
  plugins: [],
}
