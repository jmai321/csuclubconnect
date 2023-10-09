/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-color': '#FFF2D8',
        'custom-color2': '#EAD7BB',
        'custom-color3': '#BCA37F',
        'custom-color4': '#113946',
      },
      textColor: {
        'custom-text-color': '113946',
      },
      fontFamily: {
        custom: ['Manuale', 'sans-serif'],
      },
    },
  },
  plugins: [],
  jit: true,
}