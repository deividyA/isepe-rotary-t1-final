const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/javascript/**/*.js',
  ],
  theme: {
    extend: {
      
      colors: {
        white: '#ffffff',
        'blue-rotary': '#0c3c7c',
        'facebook-blue': '#3b5998',
        'youtube-red': '#FF0000',
        'linkedin-blue': '#0A66C2'
        
      },
      backgroundColor: {
        'white': '#ffffff',
        'blue-bzs': '#0288d1',
        
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
