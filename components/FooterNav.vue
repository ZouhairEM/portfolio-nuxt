<template>
  <div class="text-lightBlue border-t border-lines text-sm py-1">
    <div class="container flex flex-col sm:flex-row items-center">
      <ul class="flex items-center flex-col sm:flex-row sm:mr-auto">
        <li class="mr-0 sm:mr-5 p-2 opacity-50">
          Reach me at:
        </li>
        <li v-for="item in footerData.data" :key="item.id" class="mr-0 my-3 sm:my-0 sm:mr-2">
          <a :href="item.attributes.link" target="_blank">
            <img :src="'http://localhost:1337' + item.attributes.icon.data.attributes.url" width="25"
              class="opacity-80 hover:opacity-100" :alt="item.icon">
          </a>
        </li>
      </ul>
      <div class="text-lightBlue">
        Zouhair El-Mariami {{ currentYear }} ©
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

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
  },
  async mounted () {
    const footerRes = await axios.get('http://localhost:1337/api/footers?populate=*')
    this.footerData = footerRes.data
  }
}
</script>
