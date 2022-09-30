<template>
  <div class="flex flex-col items-center rounded-2xl bg-primary-100 p-6 text-white text-sm shadow-xl">
    <p class="text-white">{{ project.title }}</p>
    <img :src="project.thumbnail" alt="Pokemon project"
      class="w-10/12/12 sm:w-full rounded-2xl shadow-inner my-3 opacity-80" style="height: 200px" />
    <div class="flex flex-col justify-between h-28">
      <div class="text-white my-4">
        Tech used:
        <i class="ml-1 leading-5 text-secondary">
          {{ project.tech }}
        </i>
      </div>
      <div class="py-2 mx-auto sm:mx-0">
        <a :href="project.repo" target="_blank"
          class="mr-2 rounded-lg border border-secondary bg-primary-200 p-2 px-3 text-white hover:bg-tertiary">
          Github
        </a>
        <a :href="project.demo" target="_blank"
          class="rounded-lg border border-secondary bg-primary-200 p-2 px-3 text-white hover:bg-tertiary">
          Live Demo
        </a>
      </div>
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
