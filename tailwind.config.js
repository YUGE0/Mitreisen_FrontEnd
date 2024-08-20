/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'Fcolor' : '#2A4064',
        'Scolor' : '#FAF9F9',
        'Tcolor' : '#121113'
      },
      fontFamily:{
        inter : '"Inter"',
        space : '"Space Grotesk"',
        open : '"Open Sans"',
        work : '"Work Sans"',
      },
      fontSize:{
        big:['25rem',{lineHeight:'23rem'}],
        Title:['16.8rem',{lineHeight:'23rem'}],
        pn:['14rem',{lineHeight:'10.5rem'}]
      },
    },
  },
  plugins: [],
}

