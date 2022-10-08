<template>
  <main>
    <section class="flex flex-col md:flex-row justify-center items-center min-h-screen mx-auto">
      <BioBlock :currentYear="currentYear" class="text-center sm:text-left" />
      <img src="@/assets/img/me.jpeg" class="w-40 rounded-full shadow-inner opacity-80 ml-0 md:ml-20" alt="Zouhair El-Mariami">
    </section>
    <section ref="about">
      <div class="flex justify-center mb-16">
        <h1 class="font-bold text-4xl text-white text-center border-b-4 border-tertiary">
          About
        </h1>
      </div>
      <AboutMe :about-me="about" class="px-6" />
    </section>
    <section id="skills" class="mt-16 sm:mt-32 mb-16 p-6" ref="skills">
      <div class="flex justify-center">
        <h1 class="font-bold text-4xl text-white text-center border-b-4 border-tertiary">
          Skills
        </h1>
      </div>
    </section>
    <section>
      <ul class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 bg-primary-100 p-12 shadow-2xl rounded-2xl">
        <LearnedSkill v-for="(skill, i) in skills" :key="i" :skill="skill" class="flex gap-4 justify-center items-center ml-10 sm:ml-0" />
      </ul>
    </section>
    <section class="mt-16 sm:mt-32 mb-16 p-6" ref="work">
      <div class="flex justify-center">
        <h1 class="font-bold text-4xl text-white text-center border-b-4 border-tertiary">
          Work
        </h1>
      </div>
    </section>
    <section
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto sm:mx-0 gap-6 gap-y-8 sm:gap-y-10">
      <ProjectBio v-for="project in projects" :key="project.title" :project="project" />
    </section>
    <section class="mt-16 sm:mt-32 mb-16 p-6" ref="contact">
      <div class="flex justify-center">
        <h1 class="font-bold text-4xl text-white text-center border-b-4 border-tertiary">
          Contact
        </h1>
      </div>
    </section>
    <section>
      <ContactForm class="flex flex-col items-center bg-primary-100 p-12 shadow-2xl rounded-2xl" />
    </section>
  </main>
</template>

<script>
import BioBlock from '~/components/BioBlock.vue'
import AboutMe from '~/components/AboutMe.vue'
import ProjectBio from '~/components/ProjectBio.vue'
import LearnedSkill from '~/components/LearnedSkill.vue'
import ContactForm from '~/components/ContactForm.vue'

export default {
  name: 'IndexPage',
  data () {
    return {
      about: null,
      skills: null,
      projects: null
    }
  },
  components: {
    BioBlock,
    AboutMe,
    ProjectBio,
    LearnedSkill
  },
  async fetch () {
    this.about = await this.$content('about', { deep: true }).fetch()
    this.skills = await this.$content('skill', { deep: true }).fetch()
    this.projects = await this.$content('projects', { deep: true }).fetch()
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  },
  methods: {
    scrollToElement (e) {
      this.$refs[e].scrollIntoView({ behavior: 'smooth' })
    }
  },
  created () {
    this.$nuxt.$on('handleScroll', (payload) => {
      this.scrollToElement(payload.name)
    })
  },
  head () {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }]
    }
  }
}
</script>
