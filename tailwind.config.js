module.exports = {
  
  
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'selected-text': '#A3A3FF',
        'theme': '#3F3FFF',
        'nav': '#404053',
        'secondary': '#9191A4',
        'badge': '#3F3F51',
        'input-border': '#565666',
        'input': '#2A2A35'
      },
      fontFamily: {
        'FuzzyBubbles': ['Fuzzy Bubbles', 'cursive']
      },
      animation: {
        blob: "blob 7s infinite ease-in-out",
        jitter: "jitter 1s infinite ",
        bfpulse: "bfpulse 3s infinite ease-in-out"}
      },
      keyframes: {
        blob: {
          '0%': {transform: "translate(0px, 0px) scale(2)",},
          '33%': {transform: "translate(30px, -50px) scale(1.8)",},
          '66%': {transform: "translate(-20px, 20px) scale(1.6)",},
          '100%': {transform: "translate(0px, 0px) scale(2)",},
        },
        jitter: {
          '0%': {transform: "translate(0px, 0px) scale(1.)",},
          '33%': {transform: "translate(-2px, 0px) scale(1)",},
          '66%': {transform: "translate(2px, 0px) scale(1.01)",},
          '100%': {transform: "translate(0px, 0px) scale(1)",},
      },
        bfpulse: {
          '0%': {transform: "translate(0px, 0px) scale(1)",},
          '20%': {transform: "translate(0px, 0px) scale(1.04)",},
          '40%': {transform: "translate(0px, 0px) scale(1.01)",},
          '60%': {transform: "translate(0px, 0px) scale(1.02)",},
          '100%': {transform: "translate(0px, 0px) scale(1)",},
      },
    },
  },
};