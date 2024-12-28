/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'

      },

      fontFamily: {
        Rubik: ["Rubik" , 'sans']
      },

      boxShadow: {
        'glow': '0 0px 5px #76ABAE, 0 0 15px #0ff, 0 0 22px #76ABAE',
        'glow-hover': '0 0 20px #76ABAE, 0 0 40px #0ff, 0 0 60px #76ABAE',
      },
    },
  },
  plugins: [],
}

