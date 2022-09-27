<template>
  <div class="text-lightBlue border-t border-lines text-sm py-1">
    <div class="container flex items-center">
      <ul class="flex items-center mr-auto">
      <li class="mr-5 p-2 opacity-50">
        Reach me at:
      </li>
      <li v-for="item in footerData.data" :key="item.id" class="mr-2">
        <a :href="item.attributes.link" target="_blank">
          <img :src="'http://localhost:1337' + item.attributes.icon.data.attributes.url" width="25" class="opacity-80 hover:opacity-100" :alt="item.icon">
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
