<template>
  <div id="app" class="relative screen h-screen">
    <NavBar />
    <div class="container mx-auto">
      <Nuxt />
    </div>
    <FooterNav class="mt-16 sm:mt-40" />
  </div>
</template>

<script>
import FooterNav from '~/components/FooterNav.vue'

export default {
  name: 'Default',
  components: {
    FooterNav
  }
}
</script>
