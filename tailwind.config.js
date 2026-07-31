/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        espresso: {
          50: '#f6f1ec',
          100: '#e8dccf',
          200: '#d0b89c',
          300: '#b8936e',
          400: '#9c6f47',
          500: '#7a4f2e',
          600: '#5e3d23',
          700: '#4a301b',
          800: '#372516',
          900: '#2a1c11',
          950: '#1a1009',
        },
        cream: {
          50: '#fefdfb',
          100: '#fbf7f0',
          200: '#f5ecdc',
          300: '#ecdcc0',
          400: '#e0c89e',
          500: '#d4b380',
        },
        gold: {
          400: '#d4af37',
          500: '#c5a028',
          600: '#a8861f',
        },
        olive: {
          500: '#5b6236',
          600: '#4a4f2c',
          700: '#3a3e23',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
