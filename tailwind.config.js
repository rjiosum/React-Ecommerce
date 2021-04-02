module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'body': ['Roboto'],
        'poppins' : ['Poppins'],
        'courgette' : ['Courgette'],
      },
      backgroundOpacity:{
        '85': '0.85',
        '90': '0.9',
      },
      boxShadow: {
        pi: '0 0 3px rgb(0 0 0 / 20%)'
      },
      backgroundImage: theme => ({

      }),
      width: {
        'screen-50': '50vw',
        88: '88%',
        90: '90%',
        95: '95%',
      },
      height: {
        '2.6': '2.6rem',
      },
      spacing:{
        '1.4': '1.4rem',
        '2.8': '2.8rem',
        '4.2': '4.2rem',
      },
      zIndex: {
        '-1': '-1'
      }
    },
  },
  variants: {
    extend: {
      backgroundImage: ['hover'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
