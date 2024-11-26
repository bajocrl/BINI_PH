/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        headerFont: ['Dancing Script'],
        contentFont: ['Roboto'],
      },
    },
  },
  plugins: [],
};
