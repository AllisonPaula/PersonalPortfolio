/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        bl: {
          '50': '#1D1616',
          '100': '#000000',
        },
        re: {
          '50': '#8E1616',
        },
        pi: {
          '50': '#D84040',
          '100': '#D84040',
        },
        wh: {
          '50': 'ffffff',
          '100': 'EEEEEE',
          '200': 'F7F7F7',
        },

      },
    },
  },

  plugins: [],
}