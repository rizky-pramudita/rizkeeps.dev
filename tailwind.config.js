/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors:{
            'fuschia':'#EF5DA8',
            'iris-80':'#7879F1',
            'iris':'#5D5FEF',
            'fuschia-80':'#F178B6',
            'grey-card': '#3C3C3C',
            'black-bg': '#1E1E1E',
            'pink-acc': '#FF0083',
            'blue': '#0500FF',
            'green': '#088A3E',
            'yellow-acc': '#FF9900',
            'white' : '#FFFFFF',
            'purple-p' : '#4A3AFF',
            'iris-60' : '#A5A6F6',
            'light-grey': '#656565',
            'fuschia-60': '#FCDDEC',
            'pale-orange': '#EF805D',
            'red': '#FF002E',
            'light-grey': '#656565',
        },
      },
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      }
    },
    plugins: [],
  }