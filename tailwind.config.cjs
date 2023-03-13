/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      'body': ['Poppins', 'sans-serif'],
    },
    colors: {
      transparent: 'transparent',
      'orange-dark': '#E76F51',
      'orange-light': '#F4A261',
      'orange-hover': '#d46246',
      'yellow': '#E9C46A',
      'yellow-light': '#F9F0D8',
      'yellow-super-light': '#FDF9F1',
      'blue-dark': '#264653',
      'green-dark': '#2A9D8F',
      'blue-light': '#cee1eb',
      'white': '#FAFAFA',
    },
  },
  plugins: [],
}
