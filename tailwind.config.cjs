module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          brown: "#6b4f31",
          beige: "#f6efe6",
          green: "#6a8a6d"
        }
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        sans: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [],
}
