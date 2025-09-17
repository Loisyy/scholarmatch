/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",  
  ],
  darkMode: 'class',  
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        border: 'var(--border)',
        ring: 'var(--ring)',
        earth: {
          50: 'var(--earth-50)',
          100: 'var(--earth-100)',
          200: 'var(--earth-200)',
          300: 'var(--earth-300)',
          400: 'var(--earth-400)',
          500: 'var(--earth-500)',
          600: 'var(--earth-600)',
          700: 'var(--earth-700)',
          800: 'var(--earth-800)',
          900: 'var(--earth-900)',
        },
        accent: {
          purple: 'var(--accent-purple)',
          teal: 'var(--accent-teal)',
          coral: 'var(--accent-coral)',
          rose: 'var(--accent-rose)',
        },
      },
    },
  },
  plugins: [],  
};
