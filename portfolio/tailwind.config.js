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
          '200': '#333333',
        },
        re: {
          '50': '#8E1616',
          '100': '#D44638',
          '200': '#FD1D1D',
        },
        pi: {
          '50': '#D84040',
          '100': '#D84040',
        },
        wh: {
          '50': 'FFFFFF',
          '100': 'EEEEEE',
          '200': 'F7F7F7',
        },
        be: {
          '50': '#0077B5',
          '100': 'EEEEEE',
          '200': 'F7F7F7',
        },
        pu:{
          '50': '#833AB4',
        },
        am:{
          '50': '#FCB045',

        },
      },
      fontFamily: {
        me: ['"Inter"', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },

    },
  },

  plugins: [],
}