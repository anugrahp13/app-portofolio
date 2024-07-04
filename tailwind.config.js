/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './appmain.html',
    './contact.html',
    './about.html',
    './personal.html',
    './portfolio.html',
    './projects.html',
    './temusolusi.html',
    './src/components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        'primary': '#14b8a6',
        'secondary': '#64748b',
        'dark': '#0f172a',
      },
      screens: {
        '2xl' : '1320px'
      },
      fontFamily: {
        poppins : ['Poppins', 'sans-serif']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

