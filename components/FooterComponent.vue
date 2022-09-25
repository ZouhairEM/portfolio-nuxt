<template>
  <div class="text-grey border-t border-lines text-sm">
    <div class="container flex items-center">
      <ul class="flex items-center mr-auto">
      <li class="mr-5 p-2 opacity-50">
        Find me at:
      </li>
      <li v-for="(item, i) in footerData" :key="i">
        <a :href="item.link" target="_blank">
          <img :src="require(`@/assets/img/icons/${item.icon}`)" :alt="item.icon">
        </a>
      </li>
    </ul>
    <div class="text-grey">
      Zouhair El-Mariami {{ currentYear }} ©
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
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
