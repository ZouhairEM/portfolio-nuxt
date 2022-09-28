module.exports = {
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    }
  },
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: 'media',
  theme: {
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1340px'
      }
    },
    colors: {
      primary: {
        100: '#625be4',
        200: '#011e35',
        300: '#011627'
      },
      secondary: {
        100: '#4f4abc',
        200: '#3a368b',
        300: '#2a2761'
      },
      tertiary: {
        100: '#58c6ff',
        200: '#55bcf2',
        300: '#4196c2'
      },
      orange: '#4f4abc',
      white: '#f3e4e4',
      lightBlue: 'rgba(65, 150, 194, 0.9)'
    }
  }
}
