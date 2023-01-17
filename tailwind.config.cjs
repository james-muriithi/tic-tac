/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html",
    "./src/**/*.{vue,js,ts}"
  ],
  theme: {
    extend: {
      strokeWidth: {
        '16': '16px',
        '32': '32px',
      },
      minHeight: {
        '90': '22rem',
      }
    },
  },
  plugins: [],
}
