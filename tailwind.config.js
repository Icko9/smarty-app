/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
   
    backgroundImage: {
      smartyRight: "url('/src/images/smarty-right.png')",
      
    },

    fontFamily: {
      jost: 'Jost',
    },
    fontSize: {
      
      xs: ['18px', {lineHeight:'26.01px'}],
      ms: ['30px', {lineHeight:'43.35px'}],
      sm:  ['55px', {lineHeight:'61px'}],
      xm:   ['55px', {lineHeight:'68px'}],
      lg:  ['75px', {lineHeight:'108px', letterSpacing: '-0.04em'}],
      xl:  ['95px', {lineHeight:'103px', letterSpacing: '-0.04em'}],
    },  
    colors: {
      primary: "#FFFFFF",
      blue: "#83B2EE",
      black: "#161616",
      lightblue: "#F6F9FE",

    },
    
   

    boxShadow: {

      sm: '0px 3px 13px rgba(0, 0, 0, 0.07)',
      
    },
    extend: {

      gradientColorStops:{
        smartyGradient: 'background: radial-gradient(251.34% 185.29% at 49.93% 49.93%, #FFFFFF 8.85%, #83B2EE 100%)'
      },


      backgroundColor: {
        smartyImg:   'rgba(22, 22, 22, 0.02)',
      },
    },
  },
  plugins: [],
};
