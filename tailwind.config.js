/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm parchment/ivory — primary backgrounds
        parchment: {
          50: '#fdfcfa',
          100: '#faf8f5',
          200: '#f5f2ed',
          300: '#ebe6dd',
          400: '#ddd5c8',
          500: '#c7bba8',
          600: '#a89a82',
          700: '#6b5f4c',
          800: '#4a4234',
          900: '#2e2920',
          950: '#1a1712',
        },
        // Charcoal ink — text and subtle accents
        ink: {
          50: '#faf9f7',
          100: '#e8e5e0',
          200: '#d1cbc3',
          300: '#b5ada0',
          400: '#8a8070',
          500: '#5c554b',
          600: '#463f36',
          700: '#342f27',
          800: '#221e18',
          900: '#15120e',
          950: '#0c0a07',
        },
        // Warm muted gold/sepia — accent
        sepia: {
          50: '#fdf9f3',
          100: '#f8ede0',
          200: '#f0dbbf',
          300: '#e4c496',
          400: '#d4a86e',
          500: '#c49352',
          600: '#a67a42',
          700: '#8a6035',
          800: '#6b4d2e',
          900: '#4a3420',
        },
        // Gold — refined warm accent
        gold: {
          50: '#fdf9f3',
          100: '#f8ede0',
          200: '#f0dbbf',
          300: '#e4c496',
          400: '#d4ba9c',
          500: '#c49352',
          600: '#a67a42',
          700: '#8a6035',
          800: '#6b4d2e',
          900: '#4a3420',
        },
        // Bone — mapped to parchment for compatibility
        bone: {
          50: '#fdfcfa',
          100: '#faf8f5',
          200: '#f5f2ed',
          300: '#ebe6dd',
          400: '#ddd5c8',
          500: '#c7bba8',
          600: '#a89a82',
          700: '#6b5f4c',
          800: '#4a4234',
          900: '#2e2920',
          950: '#1a1712',
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
        'slow-zoom': 'slowZoom 25s ease-out forwards',
        'slide-down': 'slideDown 0.4s cubic-bezier(0.16,1,0.3,1) forwards',
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
          '100%': { transform: 'scale(1.06)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
