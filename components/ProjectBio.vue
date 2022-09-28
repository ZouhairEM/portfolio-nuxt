<template>
  <div class="flex flex-col justify-center items-center rounded-2xl bg-primary-200 p-6 text-white text-sm shadow-xl">
    <p class="text-white">{{ project.attributes.project_title }}</p>
    <img :src="'http://localhost:1337' + project.attributes.project_thumbnail.data.attributes.url" alt="Pokemon project"
      class="h-60 rounded-2xl shadow-inner my-3 opacity-80" />
    <div class="text-white my-3">
      Made with:
      <i class="ml-1 text-tertiary-300">
          {{ project.attributes.tech_stack}}
      </i>
    </div>

    <div class="py-2">
      <a :href="project.attributes.github_link" target="_blank"
        class="mr-2 rounded-lg border border-tertiary-300 bg-primary-300 p-2 px-3 text-white hover:bg-lightBlue">Github</a>
      <a :href="project.attributes.live_demo" target="_blank"
        class="rounded-lg border border-tertiary-300 bg-primary-300 p-2 px-3 text-white hover:bg-lightBlue">Live
        Demo</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectBio',
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
