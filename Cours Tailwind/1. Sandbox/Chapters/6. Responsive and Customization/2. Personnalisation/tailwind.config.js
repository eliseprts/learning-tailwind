module.exports = {
  content: ["./index.html"],
  theme: {
    // colors: {
    //   'orange': '#ffa500'
    // },
    extend: {
      // Rajouter dans extend pour pas écraser
      colors: {
        'orange': '#ffa500',
        'bleu-nuit': {
          700: '#0077b6',
          800: '#023e8a',
          900: '#03045e',
        }
      },
      fontSize: {
        "custom": "66px",
        "clamp-sm": "clamp(20px, 3vw, 50px)"
      },
      fontFamily: {
        "open-sans": "open sans"
      }
    },
  },
  plugins: [
    // Rajouter plugin
    require("@tailwindcss/forms")
  ],
}
