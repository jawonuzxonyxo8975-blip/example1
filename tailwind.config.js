/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#f0f6f8',
          100: '#d9e9ee',
          200: '#b3d3dd',
          300: '#7fb1c2',
          400: '#4a8ba3',
          500: '#2e6d87',
          600: '#225570',
          700: '#1c4458',
          800: '#163645',
          900: '#0f2632',
          950: '#081820',
        },
        coral: {
          50: '#fef5f0',
          100: '#fde5d8',
          200: '#facab5',
          300: '#f6a585',
          400: '#f07a55',
          500: '#e85d3a',
          600: '#d04a28',
          700: '#a83a20',
          800: '#82301d',
          900: '#63281c',
        },
        sand: {
          50: '#faf8f4',
          100: '#f3eee2',
          200: '#e7dcc4',
          300: '#d6c4a0',
          400: '#c2a878',
          500: '#b08d57',
        },
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
        'float': 'float 6s ease-in-out infinite',
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
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
