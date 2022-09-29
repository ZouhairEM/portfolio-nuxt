<template>
  <main>
    <section class="flex flex-col md:flex-row justify-center items-center h-screen">
      <BioBlock :currentYear="currentYear" class="text-center sm:text-left" />
      <img src="@/assets/img/me.jpeg" class="w-40 rounded-full shadow-inner opacity-80 ml-0 sm:ml-20" alt="Zouhair El-Mariami">
    </section>
    <section id="about" class="">
      <div class="flex justify-center mb-16">
        <h1 class="font-bold text-4xl text-white text-center border-b-4 border-lightBlue">
          About
        </h1>
      </div>
      <AboutMe :about-me="aboutMe" class="px-6" />
    </section>
    <section id="skills" class="mt-16 sm:mt-32 mb-16 p-6">
      <div class="flex justify-center">
        <h1 class="font-bold text-4xl text-white text-center border-b-4 border-lightBlue">
          Skills
        </h1>
      </div>
    </section>
    <section>
      <ul class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 bg-primary-200 p-12 shadow-2xl rounded-2xl">
        <LearnedSkill v-for="skill in skills.data" :key="skill.id" :skill="skill" class="flex gap-4 justify-center items-center ml-10 sm:ml-0" />
      </ul>
    </section>
    <section id="work" class="mt-16 sm:mt-32 mb-16 p-6">
      <div class="flex justify-center">
        <h1 class="font-bold text-4xl text-white text-center border-b-4 border-lightBlue">
          Work
        </h1>
      </div>
    </section>
    <section
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto sm:mx-0 gap-6 gap-y-8 sm:gap-y-10">
      <ProjectBio v-for="project in projects.data" :key="project.id" :project="project" />
    </section>
  </main>
</template>

<script>
import Vue from 'vue'
import BioBlock from '~/components/BioBlock.vue'
import AboutMe from '~/components/AboutMe.vue'
import ProjectBio from '~/components/ProjectBio.vue'
import LearnedSkill from '~/components/LearnedSkill.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    BioBlock,
    AboutMe,
    ProjectBio,
    LearnedSkill
  },
  async asyncData ({ $content }) {
    const posts = await $content('blog').fetch()

    return {
      posts
    }
  },
  data () {
    return {
      aboutMe: '',
      skills: [],
      projects: []
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
})
</script>
