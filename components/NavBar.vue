<template>
  <nav class="text-tertiary p-2 border-t border-lines border-tertiary">
    <div class="block sm:hidden absolute">
      <button @click="closed = !closed" class="flex items-center px-3 rounded">
        <svg v-if="closed" height="48" width="48" fill="white">
          <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
        </svg>
        <svg v-else height="48" width="48" fill="white">
          <path
            d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
        </svg>
      </button>
    </div>
    <ul class="flex container flex-col sm:flex-row h-screen sm:h-auto text-center items-center justify-center sm:flex"
      :class="{'hidden': closed }">
      <li @click="emitScroll('about')" class="cursor-pointer mr-0 sm:mr-10 p-2 text-tertiary hover:text-white">
        About
      </li>
      <li @click="emitScroll('skills')" class="cursor-pointer mr-0 sm:mr-10 p-2 text-tertiary hover:text-white">
        Skills
      </li>
      <li @click="emitScroll('work')" class="cursor-pointer  mr-0 sm:mr-auto p-2 text-tertiary hover:text-white">
        Work
      </li>
      <a :href="resume[0].document" target="_blank">
        <li
          class="cursor-pointer px-2 py-1 m-1 bg-white rounded shadow text-primary-200 font-bold hover:bg-primary-200 hover:text-white">
          Resume
        </li>
      </a>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
      closed: true,
      resume: null
    }
  },
  methods: {
    emitScroll (target) {
      this.$nuxt.$emit('handleScroll', { name: target })
    }
  },
  async fetch () {
    this.resume = await this.$content('resume', { deep: true }).fetch()
  }
}
</script>
