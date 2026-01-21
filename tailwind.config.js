/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: {
          bg: '#1e293b',
          active: '#334155',
        },
        main: {
          bg: '#f8fafc',
        },
        card: {
          bg: '#ffffff',
        },
        primary: {
          blue: '#3b82f6',
        },
        danger: {
          red: '#dc2626',
        },
        text: {
          main: '#1e293b',
          muted: '#64748b',
        },
        border: {
          color: '#e2e8f0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}