/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          900: '#004D40',
          800: '#00695C',
          700: '#00796B',
          600: '#00897B',
          500: '#009688',
          400: '#26A69A',
          300: '#4DB6AC',
          200: '#80CBC4',
          100: '#B2DFDB',
          50: '#E0F2F1',
        },
        yellow: {
          900: '#FF6F00',
          800: '#FF8F00',
          700: '#FFA000',
          600: '#FFB300',
          500: '#FFC107',
          400: '#FFCA28',
          300: '#FFD54F',
          200: '#FFE082',
          100: '#FFECB3',
          50: '#FFF8E1',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 4px 6px -1px rgba(0, 77, 64, 0.1), 0 2px 4px -1px rgba(0, 77, 64, 0.06)',
      },
    },
  },
  plugins: [],
};