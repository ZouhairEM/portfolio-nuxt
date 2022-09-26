<template>
  <div id="app" class="relative screen h-screen">
    <NavBar />
    <div class="container mx-auto">
      <Nuxt />
    </div>
    <FooterNav class="mt-40" :footerData="footerData" :currentYear="currentYear" />
  </div>
</template>

<script>
import FooterNav from '~/components/FooterNav.vue'

export default {
  name: 'Default',
  components: {
    FooterNav
  },
  data () {
    return {
      footerData: [
        {
          link: 'mailto:zouhairelmariami@gmail.com',
          icon: 'mail.svg'
        },
        {
          link: 'https://github.com/ZouhairEM',
          icon: 'github.svg'
        },
        {
          link: 'https://www.linkedin.com/in/zouhairelmariami/',
          icon: 'linkedin.svg'
        }
      ]
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style>
body {
  background: #011627;
}

#app {
  font-family: 'Poppins', sans-serif;
  min-width: 320px;
}
</style>
