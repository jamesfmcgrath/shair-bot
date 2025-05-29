/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Nunito Sans"', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        'brand-orange': '#FFA23B',
        'brand-blue': '#179BFF',
        'brand-navy': '#607DA9',
        'brand-yellow': '#FFD53B',
        'background-blue': '#E2EFFA',
        'background-green': '#E8FFE1',
        'gray-light': '#F2F2F2',
        'text-dark': '#262A33',
        'text-muted': '#6B7280',
        'success-green': '#48A96A',
        'error-red': '#EF4444',
        'border-gray': '#D1D5DB',
        'hover-blue': '#0F83D9',
        'cta-background': '#E6F4FF',
      },
    },
  },
  plugins: [],
};
