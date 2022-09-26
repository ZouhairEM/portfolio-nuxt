<template>
  <div class="flex justify-between p-6">
    <h3 class="font-medium text-lg text-white my-5">
      {{ aboutMe }}
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

<style>

</style>
