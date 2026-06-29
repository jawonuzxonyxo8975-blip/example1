/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f6f8',
          100: '#e7e9ee',
          200: '#c9cdd8',
          300: '#a3a9ba',
          400: '#737b92',
          500: '#525a73',
          600: '#3e455c',
          700: '#2d3346',
          800: '#1c2132',
          900: '#11151f',
          950: '#080b13',
        },
        gold: {
          50: '#fbf7ee',
          100: '#f4ead0',
          200: '#e9d39e',
          300: '#dcb86c',
          400: '#d0a049',
          500: '#bd8a36',
          600: '#a06d2b',
          700: '#7e5324',
          800: '#5e3f20',
          900: '#4a331c',
        },
        sand: {
          50: '#faf8f4',
          100: '#f3eee2',
          200: '#e7dcc4',
          300: '#d6c4a0',
          400: '#c2a878',
          500: '#b08d57',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'slow-zoom': 'slowZoom 20s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slowZoom: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
      },
    },
  },
  plugins: [],
};
