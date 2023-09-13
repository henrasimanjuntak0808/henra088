/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'50px',

    },
    extend: {
      colors:{
        primary: '#974EC3',
        secondary :'#64748b',
        dark :'#0f172a',
        
      },

      screen :{
        '2xl': '1320px',

      }
    },
  },
  plugins: [],
}

