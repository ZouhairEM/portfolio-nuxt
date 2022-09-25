<template>
  <div class="flex max-w-sm flex-col justify-between rounded-2xl bg-primary-200 p-6 text-white text-sm shadow-xl">
    <p class="text-white">{{ data.title }}</p>
    <img :src="require(`@/assets/img/${data.img}`)" alt="Pokemon project"
      class="h-60 rounded-2xl shadow-inner my-3" />
    <div class="text-white my-3">
      Made with:
      <i v-for="(technology, i) in data.technologies" :key="i" class="ml-1 text-tertiary-300">
          {{ i !== data.technologies.length -1 ? technology + ','  : technology}}
      </i>
    </div>

    <div class="py-2">
      <a :href="data.repo" target="_blank"
        class="mr-2 rounded-lg border border-tertiary-300 bg-primary-300 p-2 px-3 text-white hover:bg-secondary-300">Github</a>
      <a  :href="data.live" target="_blank"
        class="rounded-lg border border-tertiary-300 bg-primary-300 p-2 px-3 text-white hover:bg-secondary-300">Live
        Demo</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectBio',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>
