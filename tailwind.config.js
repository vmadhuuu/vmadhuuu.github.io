/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#1f2937',
        berry: '#8b3f5c',
        slate: {
          DEFAULT: '#5b6474',
        },
        mist: '#f3f6fb',
        cloud: '#e6ebf2',
        accent: '#b25578',
        warm: '#c08457',
      },
      fontFamily: {
        sans: ['"Public Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 18px 48px -24px rgba(15, 23, 42, 0.24)',
      },
      backgroundImage: {
        'radial-soft':
          'radial-gradient(circle at top, rgba(15, 118, 110, 0.12), transparent 40%), radial-gradient(circle at right, rgba(192, 132, 87, 0.14), transparent 28%)',
      },
    },
  },
  plugins: [],
};
