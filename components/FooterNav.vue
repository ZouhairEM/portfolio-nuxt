<template>
  <div class="text-lightBlue border-t border-lines text-sm py-0 sm:py-1">
    <div class="container flex flex-col sm:flex-row items-center">
      <ul class="flex items-center sm:flex-row sm:mr-auto">
        <li class="mr-0 sm:mr-5 p-2 opacity-50">
          Reach me at:
        </li>
        <li class="flex flex-row gap-2 sm:gap-0">
          <span v-for="(item, i) in footerData" :key="i" class="flex flex-row mr-0 my-3 sm:my-0 sm:mr-2">
          <a :href="item" target="_blank">
            <img :src="'http://localhost:1337'" width="25"
              class="opacity-80 hover:opacity-100" :alt="item.icon">
          </a>
        </span>
        </li>
      </ul>
      <div class="text-lightBlue">
        Zouhair El-Mariami {{ currentYear }} ©
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterNav',
  data () {
    return {
      footerData: []
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
}
</script>
