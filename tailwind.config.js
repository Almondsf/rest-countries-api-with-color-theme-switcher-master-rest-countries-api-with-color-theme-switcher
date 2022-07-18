/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily:{
      'Nunito': ['Nunito Sans', 'sans-serif']
    },
    
    extend: {
      colors: {
        vdarkBlue: 'hsl(207, 26%, 17%)',
        darkBlue:  'hsl(209, 23%, 22%)',
        darkGray: 'hsl(0, 0%, 52%)',
        lightGray: 'hsl(0, 0%, 98%)',
        White: 'hsl(0, 0%, 100%)',
        light: 'hsl(0, 0%, 98%)',
        lwhite: 'hsl(0, 0%, 100%)',

      },
      
    },
  },
  plugins: [],
}
