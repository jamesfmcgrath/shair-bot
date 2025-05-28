/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#607DA9',
        'primary-dark': '#4F46E5',
        accent: '#FACC15',
        background: '#F9FAFB',
        border: '#E5E7EB',
        text: '#1F2937',
        muted: '#6B7280',
      },
    },
  },
  plugins: [],
};
