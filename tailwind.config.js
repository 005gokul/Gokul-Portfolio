/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji',
        ],
      },
      colors: {
        brand: {
          500: '#8b5cf6',
          600: '#7c3aed',
        },
      },
      boxShadow: {
        glow: '0 0 40px 10px rgba(124, 58, 237, 0.15)',
      },
      backgroundImage: {
        'grid-radial':
          'radial-gradient(50% 50% at 50% 50%, rgba(124,58,237,0.10) 0%, rgba(2,6,23,0.0) 60%)',
      },
    },
  },
  plugins: [],
};







