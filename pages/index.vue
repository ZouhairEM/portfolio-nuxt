<template>
  <main>
    <section class="flex flex-row justify-center items-center h-screen">
      <BioBlock :currentYear="currentYear" />
      <img src="@/assets/img/me.jpeg" class="w-40 rounded-full shadow-inner opacity-80 ml-20" alt="Zouhair El-Mariami">
    </section>
    <section class="mt-0 p-7">
      <div class="flex justify-center mb-5">
        <h1 class="font-bold text-4xl text-white text-center border-b-4 border-lightBlue">
          About
        </h1>
      </div>
      <AboutMe :about-me="aboutMe" />
      {{ error }}
    </section>
    <section class="mt-32 mb-16 p-6">
      <div class="flex justify-center">
        <h1 class="font-bold text-4xl text-white text-center border-b-4 border-lightBlue">
          Skills
        </h1>
      </div>
    </section>
    <section>
      <Shape class="shadow-2xl" style="z-index: -1;" />
      <ul class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 bg-primary-200 p-12 shadow-2xl rounded-2xl">
        <LearnedSkill v-for="skill in skills.data" :key="skill.id" :skill="skill" class="flex gap-4" />
      </ul>
    </section>

    <section class="mt-32 mb-16 p-6">
      <div class="flex justify-center">
        <h1 class="font-bold text-4xl text-white text-center border-b-4 border-lightBlue">
          Work
        </h1>
      </div>
    </section>
    <section
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto sm:mx-0 gap-6 gap-y-10">
      <ProjectBio v-for="project in projects.data" :key="project.id" :project="project" />
    </section>
    <section class="mt-32 mb-16 p-6 flex flex-col justify-center items-center">
      <div class="flex justify-center mb-32">
        <h1 class="font-bold text-4xl text-white text-center border-b-4 border-lightBlue">
          Contact
        </h1>
      </div>
      <h2 class="font-medium text-lg text-white my-5">Submit the form below or send an email to <span
          class="text-lightBlue">zouhairelmariami@gmail.com </span> </h2>
      <ContactForm class="grid grid-cols-1 gap-6" />
    </section>
  </main>
</template>

<script>
import Vue from 'vue'
import BioBlock from '~/components/BioBlock.vue'
import AboutMe from '~/components/AboutMe.vue'
import ProjectBio from '~/components/ProjectBio.vue'
import Shape from '~/components/Shape.vue'
import LearnedSkill from '~/components/LearnedSkill.vue'
import ContactForm from '~/components/ContactForm.vue'

import axios from 'axios'
export default Vue.extend({
  name: 'IndexPage',
  components: {
    BioBlock,
    AboutMe,
    ProjectBio,
    Shape,
    LearnedSkill,
    ContactForm
  },
  data () {
    return {
      aboutMe: '',
      skills: [],
      projects: [],
      error: null
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  },
  async mounted () {
    const aboutMeRes = await axios.get('http://localhost:1337/api/abouts')
    this.aboutMe = aboutMeRes.data

    const skillsRes = await axios.get('http://localhost:1337/api/skills?populate=*')
    this.skills = skillsRes.data

    const projectsRes = await axios.get('http://localhost:1337/api/projects?populate=*')
    this.projects = projectsRes.data
  }
})
</script>
