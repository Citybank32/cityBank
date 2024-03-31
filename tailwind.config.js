/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'menu-background':"url('/src/assets/coa_sprite_1px.png')",
        'hero-background':"url('/src/assets/Slot2_EN_V6.jpg')",
      },

      fontFamily:{
        'custom':["Montserrat", 'sans-serif']
      }
    },
  },
  plugins: [],
}

