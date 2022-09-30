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
        100: '#011e35',
        200: '#011627'
      },
      secondary: '#4196c2',
      tertiary: 'rgba(65, 150, 194, 0.9)',
      white: '#f3e4e4'
    }
  }
}
