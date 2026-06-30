/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep corporate navy/charcoal — primary dark backgrounds
        ink: {
          50: '#f4f5f7',
          100: '#e6e8ec',
          200: '#c9cdd6',
          300: '#a4abb8',
          400: '#737c8f',
          500: '#525c70',
          600: '#3d4658',
          700: '#2b3245',
          800: '#1c2233',
          900: '#121726',
          950: '#0a0e1a',
        },
        // Steel blue — secondary surfaces
        steel: {
          50: '#eef2f6',
          100: '#d5dee8',
          200: '#aabdd0',
          300: '#7a96b3',
          400: '#527598',
          500: '#3a5d7e',
          600: '#2e4a66',
          700: '#263d54',
          800: '#1f3245',
          900: '#172635',
          950: '#0f1a26',
        },
        // Gold/amber — accent highlights
        gold: {
          50: '#fdf8ec',
          100: '#f9edca',
          200: '#f3d98e',
          300: '#eec352',
          400: '#e9ac1e',
          500: '#d4900c',
          600: '#b06d06',
          700: '#8c5008',
          800: '#733e0c',
          900: '#60330d',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
        ultra: '0.35em',
      },
      animation: {
        'fade-up': 'fadeUp 0.9s ease-out forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'slow-zoom': 'slowZoom 22s ease-out forwards',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
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
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};
