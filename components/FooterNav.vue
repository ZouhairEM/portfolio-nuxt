<template>
  <div class="text-lightBlue border-t border-lines text-sm py-1">
    <div class="container flex items-center">
      <ul class="flex items-center mr-auto">
      <li class="mr-5 p-2 opacity-50">
        Reach me at:
      </li>
      <li v-for="item in footerData" :key="item.link" class="mr-2">
        <a :href="item.link" target="_blank">
          <img :src="require(`@/assets/img/icons/${item.icon}`)" width="25" class="opacity-80 hover:opacity-100" :alt="item.icon">
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
export default {
  name: 'FooterNav',
  props: {
    footerData: {
      type: Array,
      default: () => {
        return Array
      }
    },
    currentYear: {
      type: Number,
      default: () => {
        return Object
      }
    }
  }
}
</script>
