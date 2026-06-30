/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm light neutrals — primary light backgrounds
        bone: {
          50: '#fdfcfa',
          100: '#f7f4ef',
          200: '#ede8e0',
          300: '#ddd5c8',
          400: '#c4b9a6',
          500: '#a89a82',
          600: '#877961',
          700: '#6b5f4c',
          800: '#4a4234',
          900: '#2e2920',
          950: '#1a1712',
        },
        // Charcoal — text and dark accents
        ink: {
          50: '#f5f5f4',
          100: '#e7e5e3',
          200: '#d1cec9',
          300: '#a8a39c',
          400: '#7a746b',
          500: '#5c554b',
          600: '#463f36',
          700: '#342f27',
          800: '#221e18',
          900: '#15120e',
          950: '#0c0a07',
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
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in': 'fadeIn 1.2s ease-out forwards',
        'slow-zoom': 'slowZoom 22s ease-out forwards',
        'slide-down': 'slideDown 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
        'count-up': 'countUp 1.8s ease-out forwards',
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
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        countUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
