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
        dark: '#1B2326',
        gray: '#3A4F52',
        light: '#F5FEFD'
      }
    },
  },
  plugins: [],
}
