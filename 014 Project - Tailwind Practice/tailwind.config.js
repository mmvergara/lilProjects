/** @type {import('tailwindcss').Config} */ 
module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  // purge: ['.scr/**/*.{js,jsx,ts,tsx}','./public/index.html'],
  theme: {
    extend: {},
    screens: {
      'xsm': '320px',
      // => @media (min-width: 640px) { ... }
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'fullHD': '1920px',
      // => @media (min-width: 640px) { ... }
    },
  },
  plugins: [],
}