module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Rubik', 'sans-serif'],
      },
      colors: {
        primary: '#B983FF',
        secondary: '#94B3FD',
        tertiary: '#94DAFF',
        quaternary: '#99FEFF',
        darkry: '#1B2326',
        grayry1: '#292a2d',
        grayry2: '#252627',
        light: '#F5FEFD'
      }
    },
  },
  plugins: [],
}
