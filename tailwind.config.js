/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          40: '#7a7a7a',
          130: '#E6E6E6',
        },
        blue: {
          100: '#1597E4'
        },
        rose: {
          500: '#D86161'
        }
      },
      width: {
        '4.5/12': '36.063rem'
      },
      height: {
        'screen': 'calc(100vh - 64px)',
      },
      borderRadius: {
        'lg': '0.625rem'
      }
    },
  },
  plugins: [],
}