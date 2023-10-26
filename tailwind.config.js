/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
   ],
  
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {

      fontFamily: {
        primary: ['Montserrat'],
       
      },
      
      colors: {
        primary: '#0ea5e9',
        secondary: '#64768b',
        dark: '#0E1B31'
      },
      screens: {
        '2xl':  '1320px',
      }
    },
  },
  plugins: [
    function({ addUtilities}){
      const newUtilities = {
        ".no-scrollbar::-webkit-scrollbar": {
          display: "none",
        },
        ".no-scrollbar": {
          "-ms-overflo-style": "none",
          "scrollbar-width": "none",
        },
      };

      addUtilities(newUtilities);
    },
  ],
  
}
