/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cinzel Decorative"', 'serif'],
        heading: ['Cinzel', 'serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        navy: {
          900: '#050810',
          800: '#090d1a',
          700: '#0d1425',
          600: '#111c33',
        },
        gold: {
          300: '#fcd34d',
          400: '#f59e0b',
          600: '#b45309',
        },
        discord: {
          DEFAULT: '#5865F2',
          light: '#7289da',
        },
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseDot: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.4' },
        },
        spinSlow: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        waveBar: {
          '0%, 100%': { height: '6px' },
          '50%': { height: '18px' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 9s ease-in-out infinite',
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        'spin-slow': 'spinSlow 20s linear infinite',
        shimmer: 'shimmer 4s linear infinite',
        'wave-bar': 'waveBar 0.8s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
