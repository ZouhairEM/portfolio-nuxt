<template>
  <main class="container mx-auto">
    <section class="flex flex-row justify-center items-center h-screen">
      <BioBlock :currentYear="currentYear" />
      <Illustration class="max-w-md" />
    </section>

    <section class="my-7 p-7">
    <h4 class="font-bold text-lg text-white text-center">
      What Skills I Have
    </h4>
    <h1 class="font-bold text-5xl text-tertiary-300 text-center">
      My experience
    </h1>
    </section>
    <section>
      <ul class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 mx-auto sm:mx-0 gap-10 bg-primary-200 p-7">
        <SkillSet v-for="skill in skillSet" :key="skill.skill" :skill="skill" />
      </ul>
    </section>

    <h1 class="font-bold text-5xl text-tertiary-300 p-7 my-20 text-center">
      My recent work
    </h1>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto sm:mx-0 gap-4">
      <ProjectBio v-for="project in projectBios" :key="project.title" :data="project" />
    </section>

    <section class="mt-10">
      <FooterComponent :footerData="footerData" :currentYear="currentYear" />
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import BioBlock from '~/components/BioBlock.vue'
import ProjectBio from '~/components/ProjectBio.vue'
import Illustration from '~/components/Illustration.vue'
import SkillSet from '~/components/SkillSet.vue'
import FooterComponent from '~/components/FooterComponent.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    BioBlock,
    ProjectBio,
    Illustration,
    SkillSet,
    FooterComponent
  },
  data () {
    return {
      projectBios: [
        {
          title: 'Portfolio website',
          img: 'placeholder.png',
          technologies: ['Nuxt.JS', 'CMS', 'Tailwind'],
          repo: 'https://github.com/ZouhairEM/pokemon/',
          live: 'https://zouhairem.github.io/pokemon/'
        },
        {
          title: 'Pokemon App',
          img: 'pokemon_project.png',
          technologies: ['React.JS', 'Bootstrap'],
          repo: 'https://github.com/ZouhairEM/pokemon/',
          live: 'https://zouhairem.github.io/pokemon/'
        },
        {
          title: 'TV App',
          img: 'tvapp.png',
          technologies: ['Vue.JS', 'Tailwind', 'Unit Test'],
          repo: 'https://github.com/ZouhairEM/pokemon/',
          live: 'https://zouhairem.github.io/pokemon/'
        },
        {
          title: 'Project: Exoplanet',
          img: 'placeholder.png',
          technologies: ['Three.JS', 'JSON'],
          repo: 'https://github.com/ZouhairEM/pokemon/',
          live: 'https://zouhairem.github.io/pokemon/'
        }
      ],
      skillSet: [
        {
          skill: 'HTML',
          icon: 'linkedin.svg'
        },
        {
          skill: 'CSS',
          icon: 'linkedin.svg'
        },
        {
          skill: 'Javascript',
          icon: 'linkedin.svg'
        },
        {
          skill: 'UI/UX Design',
          icon: 'linkedin.svg'
        },
        {
          skill: 'Vue.JS',
          icon: 'linkedin.svg'
        },
        {
          skill: 'React.JS',
          icon: 'linkedin.svg'
        },
        {
          skill: 'Azure DevOps',
          icon: 'linkedin.svg'
        },
        {
          skill: 'Git',
          icon: 'linkedin.svg'
        },
        {
          skill: 'Tailwind',
          icon: 'linkedin.svg'
        },
        {
          skill: 'Tailwind',
          icon: 'linkedin.svg'
        },
        {
          skill: 'Unit Testing',
          icon: 'linkedin.svg'
        },
        {
          skill: 'E2E Testing',
          icon: 'linkedin.svg'
        }],
      footerData: [
        {
          link: 'https://github.com/ZouhairEM',
          icon: 'github.svg'
        },
        {
          link: 'https://www.linkedin.com/in/zouhairelmariami/',
          icon: 'linkedin.svg'
        },
        {
          link: 'mailto:zouhairelmariami@gmail.com',
          icon: 'email.svg'
        }
      ]
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear()
    }
  }
})
</script>
