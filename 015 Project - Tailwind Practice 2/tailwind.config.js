/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryC:'#202225'
      },
      screens: {
        '320p': '320px',
        '1024p': '1024px',
        '1280p': '1280px',
        '1920p': '1920px',
      },
    },

  },
  plugins: [],
}
