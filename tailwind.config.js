/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors:{
            'fuschia':'#EF5DA8',
            'iris-80':'#7879F1',
            'fuschia-80':'#F178B6',
            'grey-card': '#3C3C3C',
            'black-bg': '#1E1E1E',
            'pink-acc': '#FF6ABF',
            'green': '#088A3E',
            'black-70': '#342E2E',
            'white' : '#FFFFFF',
            'text-1' : '#959595',
            'white-2' : '#E5E4E8',
            'purple-50': '#AA56FF',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      }
    },
    plugins: [],
  }