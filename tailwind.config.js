/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  // ✅ scans your files
  ],
  theme: {
    extend: {
      colors: {
        border: "rgb(229 231 235)",   // ✅ custom border color
        background: "#ffffff",        // ✅ custom background
        foreground: "#111111",        // ✅ text color
        ring: "rgb(59 130 246 / 0.5)" // ✅ focus outline
      },
    },
  },
  plugins: [],
};
