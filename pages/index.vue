<template>
  <main class="container mx-auto">
    <section class="flex bg-tertiary-100">
      <ProjectBio v-for="project in projectBios" :key="project.title" :data="project" />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import ProjectBio from '~/components/ProjectBio.vue';

export default Vue.extend({
  name: "IndexPage",
  components: { ProjectBio },
  data () {
    return {
      projectBios: [
        {
          title: "Pokemon App",
          img: "pokemon_project.png",
          description: "This is a Pokemon project.",
          repo: "https://github.com/ZouhairEM/pokemon/", 
          live: "https://zouhairem.github.io/pokemon/", 
        },
        {
          title: "TV App",
          img: "tvapp.png",
          description: "This is a TV App project.",
          repo: "https://github.com/ZouhairEM/pokemon/", 
          live: "https://zouhairem.github.io/pokemon/", 
        },
      ]
    }
  }
})
</script>
