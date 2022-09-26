<template>
  <main>
    <section class="flex flex-row justify-center items-center h-screen">
      <BioBlock :currentYear="currentYear" />
      <img src="@/assets/img/me.jpeg" class="w-40 rounded-full shadow-inner opacity-80 ml-20"
      alt="Zouhair El-Mariami">
    </section>

    <section class="mt-0 p-7">
      <div class="flex justify-center mb-5">
        <h1 class="font-bold text-4xl text-white text-center border-b-4 border-lightBlue">
          About
        </h1>
      </div>
      <AboutMe :about-me="aboutMe" />
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
      <ul class="grid grid-cols-4 gap-10 bg-primary-200 p-12 shadow-2xl rounded-2xl">
        <SkillSet v-for="skill in skillSet" :key="skill.skill" :skill="skill" class="flex gap-4" />
      </ul>
    </section>

    <section class="mt-32 mb-16 p-6">
      <div class="flex justify-center">
        <h1 class="font-bold text-4xl text-white text-center border-b-4 border-lightBlue">
          Work
        </h1>
      </div>
    </section>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto sm:mx-0 gap-6 gap-y-10">
      <ProjectBio v-for="project in projectBios" :key="project.title" :data="project" />
    </section>
    <section class="mt-32 mb-16 p-6 flex flex-col justify-center items-center">
      <div class="flex justify-center mb-32">
        <h1 class="font-bold text-4xl text-white text-center border-b-4 border-lightBlue">
          Contact
        </h1>
      </div>
      <h2 class="font-medium text-lg text-white my-5">Submit the form below or send an email to <span class="text-lightBlue">zouhairelmariami@gmail.com </span> </h2>
      <ContactForm class="grid grid-cols-1 gap-4" />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import BioBlock from '~/components/BioBlock.vue'
import AboutMe from '~/components/AboutMe.vue'
import ProjectBio from '~/components/ProjectBio.vue'
import Shape from '~/components/Shape.vue'
import SkillSet from '~/components/SkillSet.vue'
import ContactForm from '~/components/ContactForm.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    BioBlock,
    AboutMe,
    ProjectBio,
    Shape,
    SkillSet,
    ContactForm
  },
  data () {
    return {
      aboutMe: 'A Dutch frontend developer working as an Associate Consultant for Capgemini Group. Before that I studied web development and got a Bachelor of Engineering degree in ICT & Media Design.',
      projectBios: [
        {
          title: 'Portfolio',
          img: 'placeholder.png',
          technologies: ['Nuxt.JS', 'CMS', 'Tailwind'],
          repo: 'https://github.com/ZouhairEM/pokemon/',
          live: 'https://zouhairem.github.io/pokemon/'
        },
        {
          title: 'Pokémon App',
          img: 'pokemon_project.png',
          technologies: ['React.JS', 'Bootstrap'],
          repo: 'https://github.com/ZouhairEM/pokemon/',
          live: 'https://zouhairem.github.io/pokemon/'
        },
        {
          title: 'TV Shows App',
          img: 'tvapp.png',
          technologies: ['Vue.JS', 'Bootstrap', 'Unit Test'],
          repo: 'https://github.com/ZouhairEM/pokemon/',
          live: 'https://zouhairem.github.io/pokemon/'
        },
        {
          title: 'Project: Exoplanet 3D',
          img: 'placeholder.png',
          technologies: ['Javascript, Three.JS', 'JSON'],
          repo: 'https://github.com/ZouhairEM/pokemon/',
          live: 'https://zouhairem.github.io/pokemon/'
        },
        {
          title: 'Patient Dossier GUI',
          img: 'placeholder.png',
          technologies: ['jQuery'],
          repo: 'https://github.com/ZouhairEM/pokemon/',
          live: 'https://zouhairem.github.io/pokemon/'
        },
        {
          title: 'Working title',
          img: 'placeholder.png',
          inProgress: true,
          repo: 'https://github.com/ZouhairEM/pokemon/'
        }
      ],
      skillSet: [
        {
          skill: 'HTML',
          icon: 'html.svg'
        },
        {
          skill: 'CSS',
          icon: 'css.svg'
        },
        {
          skill: 'Javascript',
          icon: 'js.svg'
        },
        {
          skill: 'Vue.JS',
          icon: 'vue.svg'
        },
        {
          skill: 'React.JS',
          icon: 'react.svg'
        },
        {
          skill: 'Azure DevOps',
          icon: 'azure.svg'
        },
        {
          skill: 'Bootstrap',
          icon: 'bootstrap.svg'
        },
        {
          skill: 'Tailwind',
          icon: 'tailwind.svg'
        },
        {
          skill: 'Unit Testing',
          icon: 'jest.svg'
        },
        {
          skill: 'E2E Testing',
          icon: 'testcafe.svg'
        },
        {
          skill: 'UI/UX Design',
          icon: 'ux.svg'
        }],
      restaurants: [],
      error: null
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
})
</script>
