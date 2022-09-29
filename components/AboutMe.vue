<template>
  <div class="flex justify-between">
    <h3 v-for="item in aboutMe.data" :key="item.id" class="font-medium text-lg text-white">
      {{ item.attributes.description }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'AboutMe',
  props: {
    aboutMe: {
      type: String,
      default: () => {
        return String
      }
    }
  }
}
</script>
