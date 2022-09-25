<template>
    <div class="flex">
    <h3 class="font-medium text-2xl text-white my-5 flex-auto w-64">
        {{ aboutMe }}
    </h3>
    <img src="@/assets/img/me.jpeg" class="w-40 rounded-full shadow-2xl shadow-inner opacity-90" alt="Zouhair El-Mariami">
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
