<template>
  <main class="">
    <section class="flex flex-row justify-around items-center h-screen">
      <BioBlock :currentYear="currentYear" />
      <Illustration class="max-w-md" />
    </section>

    <section class="mt-3 p-6">
      <div class="flex justify-center mb-16">
        <h1 class="font-bold text-4xl text-white text-center">
          Zouhair
        </h1>
        <span class="text-orange font-bold text-4xl mx-5">|</span>
        <h4 class="font-bold text-4xl text-orange text-center">
          Who I am
        </h4>
      </div>
      <AboutMe :about-me="aboutMe" />
    </section>
    <section class="mt-32 mb-16 p-6">
      <div class="flex justify-center">
        <h1 class="font-bold text-4xl text-white text-center">
          Experience
        </h1>
        <span class="text-orange font-bold text-4xl mx-5">|</span>
        <h4 class="font-bold text-4xl text-orange text-center">
          What I know
        </h4>
      </div>
    </section>
    <section>
      <Shape style="z-index: -1;" />
      <ul class="grid grid-cols-4 gap-10 bg-primary-200 p-12 shadow-2xl">
        <SkillSet v-for="skill in skillSet" :key="skill.skill" :skill="skill" class="flex gap-4" />
      </ul>
    </section>

    <section class="mt-32 mb-16 p-6">
      <div class="flex justify-center">
        <h1 class="font-bold text-4xl text-white text-center">
          Projects
        </h1>
        <span class="text-orange font-bold text-4xl mx-5">|</span>
        <h4 class="font-bold text-4xl text-orange text-center">
          What I made
        </h4>
      </div>
    </section>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto sm:mx-0 gap-6 gap-y-10">
      <ProjectBio v-for="project in projectBios" :key="project.title" :data="project" />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import BioBlock from '~/components/BioBlock.vue'
import AboutMe from '~/components/AboutMe.vue'
import ProjectBio from '~/components/ProjectBio.vue'
import Illustration from '~/components/Illustration.vue'
import Shape from '~/components/Shape.vue'
import SkillSet from '~/components/SkillSet.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    BioBlock,
    AboutMe,
    ProjectBio,
    Illustration,
    Shape,
    SkillSet
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
          skill: 'UI/UX Design',
          icon: 'ux.svg'
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
        }]
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
})
</script>
