<template>
  <div class="flex justify-between">
    <h3 v-for="(item, i) in aboutMe" :key="i" class="font-medium text-lg text-white">
        {{ item.body.children[0].children[0].value }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
    aboutMe: {
      type: Array,
      default: () => {
        return Array
      }
    }
  }
}
</script>
