/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f7ed',
          100: '#ccefdb',
          200: '#99dfb7',
          300: '#66cf93',
          400: '#33bf6f',
          500: '#00A651',
          600: '#008541',
          700: '#006431',
          800: '#004221',
          900: '#002110',
        },
        secondary: {
          500: '#0058bd',
          600: '#004a9f',
          700: '#003c81',
        },
        dark: {
          500: '#031031',
          600: '#020a28',
          700: '#01051f',
        },
        gray: {
          500: '#647589',
          600: '#556070',
          700: '#464c57',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'rubik': ['Rubik', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        }
      }
    },
  },
  plugins: [],
}