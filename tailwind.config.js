/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './index.html',
    './404.html',
    './{apps,privacy,support}/**/*.html',
    './ts/**/*.{ts,js}'
  ],
  theme: {
    extend: {
      colors: {
        'fx-blue': '#59b5ff',
        'fx-pink': '#ff4dc4',
        'fx-ink': '#0d1117',
        'fx-cloud': '#f5f5f5'
      },
      fontFamily: {
        display: ['"General Sans"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 16px 48px -12px rgba(89, 181, 255, 0.45)'
      },
      animation: {
        'gradient-text': 'gradientText 12s ease infinite'
      },
      keyframes: {
        gradientText: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
