/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          50: '#f5f6f7',
          100: '#e8eaed',
          200: '#cdd1d7',
          300: '#a8aeb8',
          400: '#7c8492',
          500: '#5b6470',
          600: '#475061',
          700: '#363d4d',
          800: '#262c39',
          900: '#1a1f2a',
          950: '#0f131b',
        },
        steel: {
          50: '#eef3f7',
          100: '#d4e0ea',
          200: '#a9c1d6',
          300: '#7298b8',
          400: '#4a779e',
          500: '#345e84',
          600: '#2a4d6c',
          700: '#243f59',
          800: '#1f3447',
          900: '#1a2c3b',
          950: '#101e29',
        },
        amber: {
          50: '#fef9ed',
          100: '#fcedc8',
          200: '#f9d88d',
          300: '#f5bd45',
          400: '#f2a717',
          500: '#e08a05',
          600: '#c06a03',
          700: '#9c4f06',
          800: '#7f3e0a',
          900: '#68330b',
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
        'count-up': 'countUp 1.5s ease-out forwards',
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
          '100%': { transform: 'scale(1.1)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
