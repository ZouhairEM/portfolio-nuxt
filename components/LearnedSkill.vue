<template>
    <li class="text-white shadow-inner mx-auto md:mx-0">
      <img :src="'http://localhost:1337' + skill.attributes.icon.data.attributes.url" width="30" :alt="skill.attributes.skill" class="shadow-2xl opacity-80">
        <span class="">
            {{ skill.attributes.skill }}
        </span>
    </li>
</template>

<script>
export default {
  name: 'LearnedSkill',
  props: {
    skill: {
      type: Object,
      default: () => {
        return {}
      }
    }
  }
}
</script>
