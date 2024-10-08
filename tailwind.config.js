/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './src/index.html'
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
    }
  },
  plugins: []
};
