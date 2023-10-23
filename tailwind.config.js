/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'montserrat-alternates': ['Montserrat Alternates', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-right': 'linear-gradient(90deg, rgba(152,39,35,1) 0%, rgba(255,255,255,1) 83%)',
        'gradient-left': 'linear-gradient(270deg, rgba(152,39,35,1) 0%, rgba(255,255,255,1) 83%)',
        'gradient-center': 'linear-gradient(90deg, rgba(255,255,255,1) 10%, rgba(152,35,35,1) 40%, rgba(152,35,35,1) 60%, rgba(255,255,255,1) 90%)',
      },
      animation: {
        'transform-opacity': 'transform 500ms ease-in-out, opacity 500ms ease-in-out',

      }
    },
  },
  plugins: [],
}

